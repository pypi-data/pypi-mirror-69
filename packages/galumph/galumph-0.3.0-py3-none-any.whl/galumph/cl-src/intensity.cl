/*
 * Copyright (c) European Molecular Biology Laboratory, Christopher Kerr
 * SPDX-FileCopyrightText: 2016 European Molecular Biology Laboratory (EMBL)
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


// Squared magnitude of a complex number
float cfloat_abs2(const cfloat_t z)
{
  return cfloat_real(z)*cfloat_real(z) + cfloat_imag(z)*cfloat_imag(z);
}

// Real part of (a * conj(b))
float cfloat_real_conj_prod(const cfloat_t a, const cfloat_t b)
{
  return cfloat_real(a)*cfloat_real(b) + cfloat_imag(a)*cfloat_imag(b);
}

/*
 * Sum up an ALM array to get the intensity as a function of s
 *
 * This is not in the critical path, so maximum speed is not crucial.
 * Using a sequential sum for simplicity and to avoid data races
 */
#ifdef WORKSIZE
__attribute__((reqd_work_group_size(WORKSIZE,1,1)))
#endif
__kernel void alm_intensity(const unsigned int LMAX,
                            __global const cfloat_t *restrict alm, //A(L,M,s)         dimensions[LM,s]
                            __global float *restrict intensity)    //I(s)             dimensions[s]
{
  const size_t is = get_global_id(0);
  const size_t NS = get_global_size(0);
  unsigned int L, M;
  size_t il0, ilm, ilms;

  float total = 0;

  for (L=0; L<=LMAX; ++L){
    float Ltotal = 0;
    il0 = L*(L+1) / 2;
    // Add up the M>0 terms
    for (M=L; M>0; --M){
      ilm = il0 + M;
      ilms = ilm * NS + is;
        
      Ltotal += cfloat_abs2(alm[ilms]);
    }
    Ltotal *= 2;  // To count both positive and negative M
    // Now add the term for M==0
    ilms = il0 * NS + is;
    Ltotal += cfloat_abs2(alm[ilms]);
    total += Ltotal;
  }
  intensity[is] = (4*M_PI_F) * total;
}

/*
 * Cross scattering intensity between two Alm arrays as a function of s
 *
 * The result includes the factor of two i.e. both pairs (A, B) and (B, A)
 */
#ifdef WORKSIZE
__attribute__((reqd_work_group_size(WORKSIZE,1,1)))
#endif
__kernel void alm_cross(const unsigned int LMAX,
                        __global const cfloat_t *restrict alm, //A(L,M,s)         dimensions[LM,s]
                        __global const cfloat_t *restrict blm, //A(L,M,s)         dimensions[LM,s]
                        __global float *restrict intensity)    //I(s)             dimensions[s]
{
  const size_t is = get_global_id(0);
  const size_t NS = get_global_size(0);
  unsigned int L, M;
  size_t il0, ilm, ilms;

  float total = 0;

  for (L=0; L<=LMAX; ++L){
    float Ltotal = 0;
    il0 = L*(L+1) / 2;
    // Add up the M>0 terms
    for (M=L; M>0; --M){
      ilm = il0 + M;
      ilms = ilm * NS + is;
        
      Ltotal += cfloat_real_conj_prod(alm[ilms], blm[ilms]);
    }
    Ltotal *= 2;  // To count both positive and negative M
    // Now add the term for M==0
    ilms = il0 * NS + is;
    Ltotal += cfloat_real_conj_prod(alm[ilms], blm[ilms]);
    total += Ltotal;
  }
  intensity[is] = (2*4*M_PI_F) * total;
}
