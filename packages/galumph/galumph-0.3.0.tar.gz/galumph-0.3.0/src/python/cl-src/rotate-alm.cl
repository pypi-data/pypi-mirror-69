/*
 * Copyright (c) Christopher Kerr
 * SPDX-FileCopyrightText: 2018 Christopher Kerr
 *
 * SPDX-License-Identifier: LGPL-3.0-or-later
 *
 * This file is part of GALUMPH.
 *
 * GALUMPH is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * GALUMPH is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with GALUMPH.  If not, see <http://www.gnu.org/licenses/>.
 */

#include <pyopencl-complex.h>


/* Term in (j + m)!(j - m)!
 * 
 * Taking the product of all terms from 1<=j'<=j will give the desired
 * factorial, so long as j >= abs(m) (required by selection rules anyway)
 */
unsigned int facterm_jm(const unsigned int j, const unsigned int absm)
{
  unsigned int result;
  if (j == 0) {
    result = 1;
  } else if (j > absm) {
    result = (j + absm) * (j - absm);
  } else {
    // Here both terms are part of (j + m)!
    // we need to 'catch up' on the terms that came before j==0
    result = j * (j + absm);
  }
  return result;
}


/* Term in x^(j + offset) / (j + offset)!
 *
 * Taking the product of all terms from 1<=j'<=j will give the desired
 * result, so long as j >= abs(offset) (required by selection rules anyway)
 *
 * N.B. j is always positive, but we represent it as an int so that
 * comparisons with negative offsets give the correct result
 */
float facpow_j(const int j, const int offset, const float x)
{
  // assert(j > 0);
  float result;
  if (j <= offset) {
    // Need to 'catch up' on terms with j < 1
    result = (x * x) / (j * (j + offset));
  } else if (j > -offset) {
    result = x / (j + offset);
  } else {
    result = 1;
  }
  return result;
}


/* Term in x^n / n!
 *
 * Taking the product of all terms from 1<=j'<=j0 will give the desired
 * result, so long as j0 >= 2*n (required by selection rules anyway)
 *
 * N.B. j and j0 are always positive, but we represent them as ints so that
 * comparisons with negative n give the correct result
 */
float facpow_n(const int j,
               const int n,
               const int j0,
               const float x)
{
  // assert(j > 0);
  // assert(j0 >= 2*n);
  float result;
  if (n >= (j + j0)) {
    // Need terms for both j and (j + j0)
    result = (x * x) / (j * (j + j0));
  } else if ((n >= j) && (j <= j0)) {
    result = x / j;
  } else {
    result = 1;
  }
  return result;
}


/* Matrix d(L,M1,M2) to rotate an ALM by an angle beta around the y axis.
 *
 * This is known as the Wigner d matrix (lowercase), the D matrix (uppercase)
 * includes the rotations by alpha and gamma to give a fully general rotation.
 * Do not confuse it with the z-shift matrix, which is also known as d.
 *
 * A_rotated(L,M2) = sum(-L<=M1<=L) [ d(L,M1,M2,beta) * A_orig(L,M1) ]
 *
 * The y axis is chosen so that the matrix is real - for a rotation around the
 * x axis, half the values would be purely imaginary.
 *
 * There should be one workgroup for each value of M1 and M2
 */
#ifdef LMAX1
__attribute__((reqd_work_group_size(1,1,LMAX1)))
#endif
__kernel void y_rotation_matrix(__global float *dlmm,
                                const float beta,
                                // Both locals should have size LMAX1
                                __local float *restrict sterm_sum,
                                __local float *restrict jterm)
{
#ifndef LMAX1
  const uint LMAX1 = get_global_size(1);
#endif
  const uint LMAX = LMAX1 - 1;
  // assert(get_global_size(1) == 2 * LMAX + 1);
  // assert(get_global_size(2) == LMAX + 1);
  // assert(get_local_size(2) == LMAX + 1);

  // N.B. some of these are always non-negative, but they are stored as
  // signed integers here to avoid ambiguity in functions such as max()
  // or when subtracting
  // 0 <= m1 <= LMAX
  const int m1 = get_global_id(0) - LMAX;
  // -LMAX <= m2 <= LMAX
  const int m2 = get_global_id(1);
  const int i_local = get_local_id(2);
  const int s = i_local + max((m1 - m2), 0);
  // Must be non-negative for selection rules
  const int mms = (m2 - m1) + s;
  const int sign = (mms % 2)? -1 : 1;  // -1^(m2 - m1 + s)

  const float coshalfbeta = cos(beta / 2);
  const float sinhalfbeta = sin(beta / 2);

  // Store the prefactor terms in the jterm local array
  // This means that all the sqrt() calls are done at once
  const uint j_init = i_local;
  jterm[j_init] = sqrt(convert_float(facterm_jm(j_init, abs(m1))*
                                     facterm_jm(j_init, m2)));
  barrier(CLK_LOCAL_MEM_FENCE);

  // Smallest value of j which is allowed by the selection rules
  // j0 = max(+m1, -m1, +m2, -m2, s-m1, s+m2)
  // N.B. (s-m1) >= -m1, (s+m2) >= +m2, 0 >= -m2
  const uint j0 = max(m1, max(s-m1, s+m2));
  uint j;
  float sterm = sign;
  for (j=1; j<=LMAX; ++j) {
    float factor = jterm[j];
    factor *= facpow_j(j, m1 - s, coshalfbeta);
    factor *= facpow_n(j, s, j0, sinhalfbeta);
    factor *= facpow_n(j, mms, j0, sinhalfbeta);
    factor *= facpow_j(j, -m2 - s, coshalfbeta);
    sterm *= factor;
    if (j >= j0) {
      sterm_sum[i_local] = sterm;
    } else {
      sterm_sum[i_local] = 0.0;
    }
    
    // parallel sum putting the result in sterm_sum[0]
    unsigned int bit;
    for (bit=1; bit<=LMAX; bit<<=1) {
      barrier(CLK_LOCAL_MEM_FENCE);
      if (((i_local & bit) == 0) && ((i_local + bit) <= LMAX)) {
        sterm_sum[i_local] += sterm_sum[i_local + bit];
      }
    }
    barrier(CLK_LOCAL_MEM_FENCE);
    if (i_local == 0) {
      jterm[j] = sterm_sum[i_local];
    }
  }
  barrier(CLK_LOCAL_MEM_FENCE);

  const uint j_save = i_local;
  if ((j_save >= abs(m1)) && (j_save >= m2)) {
    const size_t i_m1 = (j_save + m1) * (j_save + 1);
    const size_t i_m2 = m2;
    const size_t i_j = j_save * (j_save + 1) * (4*j_save - 1) / 6;
    const size_t i_jm1m2 = i_j + i_m1 + i_m2;
    dlmm[i_jm1m2] = jterm[j_save];
  }
}


/* Rotate an A(L,M1) around the Euler angles alpha, beta, gamma giving B(L,M2)
 *
 * A general rotation is composed of
 * - rotate by alpha around the z axis (multiply by exp(i*M1*alpha))
 * - rotate by beta around the y axis (using the precalculated dlmm matrix)
 * - rotate by gamma around the z axis (multiply by exp(i*M2*gamma))
 *
 * Each L and S value can be calculated independently
 */
#if (defined(LMAX1) && defined(NSWORK))
__attribute__((reqd_work_group_size(1,LMAX1,NSWORK)))
#endif
__kernel void rotate_alm(__global const cfloat_t *restrict alm,
                         __global cfloat_t *restrict blm,
                         __global const float *restrict dlmm_global,
                         const float alpha,
                         const float gamma,
                         // size LMAX1
                         __local cfloat_t *restrict eiM1alpha,
                         // size LMAX1 * (2*LMAX + 1)
                         __local float *restrict dlmm_local)
{
#ifndef LMAX1
  const uint LMAX1 = get_global_size(0);
#endif
  const uint LMAX = LMAX1 - 1;
  const uint L = get_global_id(0);
  const uint M2 = get_global_id(1);
  const uint NS = get_global_size(2);
  const uint is = get_global_id(2);
  const uint is_local = get_local_id(2);
  event_t ev = 0;

  const size_t i_L00_dlmm = L * (L + 1) * (4*L - 1) / 6;
  const size_t dlmm_local_size = (L + 1) * (2*L + 1);
  ev = async_work_group_copy(dlmm_local, dlmm_global + i_L00_dlmm,
                             dlmm_local_size, ev);

  // Base for index into A(L,M1) and B(L,M2)
  const size_t iL0 = L * (L+1) / 2;
  const size_t iL0s = iL0 * NS + is;

  // Store e^i*M2*alpha into this array, look it up later using M1
  // TODO check if this actually makes a difference to the speed!
  if ((M2 <= L) && (is_local == 0)){
    eiM1alpha[M2] = cfloat_new(cos(M2 * alpha), sin(M2 * alpha));
  }
  barrier(CLK_LOCAL_MEM_FENCE);
  wait_group_events(1, &ev);

  if (M2 <= L) {
    const size_t iM2_0 = M2 * (2*L + 1) + L;
    cfloat_t blm_private = cfloat_new(0.0, 0.0);
    // M1 here is actually abs(M1)
    unsigned int M1;
    for (M1=0; M1<=L; ++M1) {
      // Index into A(L,M1)
      const size_t iLM1 = iL0 + M1;
      const size_t iLM1s = iLM1 * NS + is;

      // Indices into dlmm_local
      const size_t iM1M2_p = (L + M1) * (L + 1) + M2;
      const size_t iM1M2_m = (L - M1) * (L + 1) + M2;

      // Rotate by alpha around z
      const cfloat_t alm_alpha = cfloat_mul(alm[iLM1s], eiM1alpha[M1]);

      // Sum for the rotation by beta around y
      // need both +M1 and -M1 terms when M1 is non-zero
      const cfloat_t plus_M1_term = cfloat_mulr(alm_alpha, dlmm_local[iM1M2_p]);
      blm_private = cfloat_add(blm_private, plus_M1_term);
      if (M1 > 0) {
        // A(L,-M1) == -1^M1 conj(A(L,M1)) and e^i*-M1*alpha == conj(e^i*M1*alpha)
        const float sign = (M1%2)? -1 : 1;
        const cfloat_t minus_M1_term = cfloat_mulr(cfloat_conj(alm_alpha),
                                                   sign * dlmm_local[iM1M2_m]);
        blm_private = cfloat_add(blm_private, minus_M1_term);
      }
    }

    // Rotate by gamma around z
    const cfloat_t eiM2gamma = cfloat_new(cos(M2 * gamma), sin(M2 * gamma));
    blm_private = cfloat_mul(blm_private, eiM2gamma);

    // Store the result into B(L,M2)
    const size_t iLM2 = iL0 + M2;
    const size_t iLM2s = iLM2 * NS + is;
    blm[iLM2s] = blm_private;
  }
}
