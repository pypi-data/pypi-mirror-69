/*
 * Copyright (c) European Molecular Biology Laboratory, Christopher Kerr
 * SPDX-FileCopyrightText: 2016 European Molecular Biology Laboratory (EMBL)
 * SPDX-FileCopyrightText: 2018-2020 Christopher Kerr
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

/* Part of the Y_lm function with a cumulative product along the M axis
 *
 * Calculates all the terms, then uses a parallel cumulative product
 * to give the final answer.
 *
 * Because the values can go outside the range of a 32-bit float,
 * the exponent is returned in a separate integer array.
 */
void ylm_Mpart_local(const unsigned int L,
                     const float sintheta,
                     __local float *MpartF,
                     __local int   *MpartE)
{
  // assert(get_local_size(0) == get_global_size(0));
  // assert(get_local_size(1) == 1);
  // assert(get_local_size(2) == 1);
#ifndef LMAX1
  const unsigned int LMAX1 = get_local_size(0);
#endif
  const unsigned int M     = get_local_id(0);

  // First calculate the individual terms and store into the array
  float termF = 0;
  int   termE = 0;
  if (M == 0) {
    termF = sqrt((2*L + 1) / (4*M_PI_F));
  } else if (M <= L) {
    // sin(theta) part of the Legendre polynomial
    termF = ( sintheta * (1 - 2*(signed)M)
    // pre-factor sqrt( (L-M)! / (L+M)! )
            * rsqrt(convert_float((L+M)*(L+1-M))) );
  }
  MpartF[M] = frexp(termF, &termE);
  MpartE[M] = termE;

  // Parallel cumulative product algorithm
  // This can be done faster using e.g. float2 vectors, but
  // since this is not a critical path simplicity is better
  unsigned int bit;
  for (bit=1; bit<LMAX1; bit<<=1) {
    barrier(CLK_LOCAL_MEM_FENCE);

    if (M & bit) {
      unsigned int M0 = M - (M % bit) - 1;
      // N.B. (M0 & bit) is always 0
      // i.e. MpartF[M0] and MpartE[M0] are not overwritten
      // during this iteration.
      // Therefore a barrier between each iteration is enough
      // to prevent race conditions
      termF = MpartF[M0] * MpartF[M];
      MpartF[M] = frexp(termF, &termE);
      termE += MpartE[M0];
      MpartE[M] += termE;
    }
  }
  barrier(CLK_LOCAL_MEM_FENCE);
}

/* Magnitude of the spherical harmonic Y_lm(theta, phi) for 0<=L<=LMAX, 0<=M<=L
 *
 * The value of theta is supplied as cos(theta) and sin(theta),
 * since in practice the original data are in Cartesian coordinates.
 * Phi is not needed since it only affects the phase, not the magnitude.
 *
 * The output array is packed: index(L,M) is (L*(L+1))/2 + M;
 *
 * Iterates over L, with the M values in parallel
 * Requires global_size == local_size == LMAX+1
 */
#ifdef LMAX1
__attribute__((reqd_work_group_size(LMAX1,1,1)))
#endif
__kernel void ylm_real(
    const float costheta,
    const float sintheta,
    __global float *restrict result,
    __local  float *MpartF,
    __local  int   *MpartE)
{
  // assert(get_local_size(0) == get_global_size(0));
#ifndef LMAX1
  const unsigned int LMAX1 = get_global_size(0); // LMAX + 1
#endif
  const unsigned int M     = get_global_id(0);

  unsigned int L;
  float term2 = 0;
  float term1 = 0;
  float term0 = 0;
  // Store exponents separately to prevent floating-point overflow
  int   termE = 0;
  int   sumexp = 0;

  for (L=0; L<LMAX1; ++L) {

    ylm_Mpart_local(L, sintheta, MpartF, MpartE);

    // This calculates the cos(theta) part of the Legendre polynomial in term0
    // (the sin(theta) part is calculated in ylm_Mpart_local)
    if (L == M) {
      term0 = 1;
    } else if (L > M) {
      // Recurrence property
      // (L-M+1)*P[L+1,M](x) = (2*L+1)*x*P[L,M](x) - (L+M)*P[L-1,M](x)
      // i.e. (L-M)*P[L,M](x) = (2*L-1)*x*P[L-1,M](x) - (L+M-1)*P[L-2,M](x)
      // For L == M + 1, P[L-2,M](x) is taken to be zero
      term0 = ( costheta * (2*L - 1) * term1
              - (L+M-1) * term2) / (L-M);
    }

    // The cos(theta) part of the Legendre polynomial is now given by:
    //     ldexp(term0, sumexp)
    // and the sin(theta) part with the sqrt((L-M)!/(L+M)!) prefactor by:
    //     ldexp(mpartF[M], mpartE[M])
    // Now calculate abs(Ylm) = (cospart) * (sinpart)
    if (L >= M) {
      size_t ilm = (L*(L+1))/2 + M;
      result[ilm] = ldexp(term0 * MpartF[M], sumexp + MpartE[M]);
    }

    // Rotate term0 to term1 and term1 to term2
    //
    // To avoid over- or underflow of the floating point exponent, store the
    // exponent of the cos(theta) part in sumexp
    termE = ilogb(term0);
    // Avoid scaling when the term is very close to zero
    if (termE >= -24) {
      term2 = ldexp(term1, -termE);
      term1 = ldexp(term0, -termE);
      sumexp += termE;
    } else {
      term2 = term1;
      term1 = term0;
    }
  }
}


/* Many-atom version of the spherical harmonic Y_lm(theta, phi) kernel
 *
 * The first work group dimension is M and the second is the atom index.
 * The calculation for each atom goes in a separate work group of size LMAX1.
 * The result is written into a packed array of dimension (nAtoms, NLM).
 */
#ifdef LMAX1
__attribute__((reqd_work_group_size(LMAX1,1,1)))
#endif
__kernel void ylm_real_batch(
    __constant float *restrict costheta,
    __constant float *restrict sintheta,
    __global float *restrict result,
    __local  float *restrict MpartF,
    __local  int   *restrict MpartE)
{
#ifndef LMAX1
  const unsigned int LMAX1 = get_global_size(0); // LMAX + 1
#endif
#ifndef NLM
  const size_t NLM = LMAX1 * (LMAX1 + 1) / 2;
#endif
  const unsigned int iAt = get_global_id(1);

  ylm_real(costheta[iAt], sintheta[iAt],
           result + (iAt * NLM), MpartF, MpartE);
}