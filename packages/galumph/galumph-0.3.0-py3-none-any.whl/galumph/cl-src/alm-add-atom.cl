/*
 * Copyright (c) European Molecular Biology Laboratory
 * SPDX-FileCopyrightText: 2016 European Molecular Biology Laboratory (EMBL)
 * SPDX-FileCopyrightText: 2020 Christopher Kerr
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

#ifndef NATWORK
#define NATWORK 16
#endif

#ifdef WORKSIZE
__attribute__((reqd_work_group_size(1,WORKSIZE,1)))
#endif
__kernel void alm_add_atom(
    const cfloat_t eiphi,               //e^(i*phi) - used to calculate phase of ylm
    __global const float *restrict ylm, //Y(L,M,theta,phi) dimensions[LM]
    __global const float *restrict jl,  //Jy(L,s*r)        dimensions[L,s]
    __global const float *restrict ff,  //Form factor      dimensions[s]
    __global cfloat_t *restrict alm)    //A(L,M,s)         dimensions[LM,s]
{
  const unsigned int L  = get_global_id(0);
  const size_t is = get_global_id(1);
  const size_t NS = get_global_size(1);

  const size_t ils = L * NS + is;
  const size_t il0 = L * (L+1) / 2;
  const float ffjl = jl[ils] * ff[is];
  
  unsigned int M;
  cfloat_t eiMphi = cfloat_new(1, 0);
  for (M=0; M<=L; ++M) {
    size_t ilm = il0 + M;
    size_t ilms = ilm * NS + is;
    cfloat_t almnew = cfloat_mulr(eiMphi, ylm[ilm] * ffjl);
    alm[ilms] = cfloat_add(alm[ilms], almnew);
    eiMphi = cfloat_mul(eiMphi, eiphi);
  }
}

#ifdef WORKSIZE
__attribute__((reqd_work_group_size(1,WORKSIZE,1)))
#endif
__kernel void alm_add_many_atoms(
    const unsigned int nAt,
    __global const cfloat_t *restrict eiphi, //e^(i*phi)   dimensions[iAt]
    __global const float *restrict ylm, //Y(L,M,theta,phi) dimensions[iAt,LM]
    __global const float *restrict jl,  //Jy(L,s*r)        dimensions[iAt,L,s]
    __global const float *restrict ff,  //Form factor      dimensions[iAt,s]
    __global cfloat_t *restrict alm,    //A(L,M,s)         dimensions[LM,s]
    __local float *restrict ylm_local)
{
  const uint L     = get_global_id(0);
  const uint LMAX1 = get_global_size(0);
  const size_t is = get_global_id(1);
  const size_t NS = get_global_size(1);

  //assert(get_local_size(0) == 1)
  const uint is_local = get_local_id(1);
  const uint NS_local = get_local_size(1);
  const size_t is_group0 = get_group_id(1) * get_local_size(1);


  const size_t il0 = L * (L+1) / 2;
  const size_t NLM = (LMAX1 * (LMAX1+1)) / 2;
  const size_t NLS = LMAX1 * NS;

  const size_t ils = L * NS + is;

  float ffjl[NATWORK];
  cfloat_t eiMphi[NATWORK];
  event_t ev = 0;
  for (uint iAt=0; iAt<nAt; ++iAt) {
    size_t iAtM0  = iAt * LMAX1;
    size_t iAtLM0 = iAt * NLM + il0;
    size_t iAtS   = iAt * NS + is;
    size_t iAtLS  = iAt * NLS + ils;

    ev = async_work_group_copy(ylm_local+iAtM0, ylm+iAtLM0, LMAX1, ev);
    ffjl[iAt] = ff[iAtS] * jl[iAtLS];
    eiMphi[iAt] = cfloat_new(1, 0);
  }
  wait_group_events(1, &ev);

  for (uint M=0; M<=L; ++M) {
    size_t ilm = il0 + M;
    size_t ilms = ilm * NS + is;

    cfloat_t almtot = alm[ilms];

    // Idea for further optimisation:
    // Reorder ylm_tmp during the load phase so that iAt varies fastest
    // Load 4 values at a time into a float4 vector
    // (also put ffjl in a float4 vector)
    // Then use the builtin vector dot product function
    for (uint iAt=0; iAt<nAt; ++iAt) {
      size_t iAtM = iAt * LMAX1 + M;
      cfloat_t almnew = cfloat_mulr(eiMphi[iAt], ylm_local[iAtM] * ffjl[iAt]);
      almtot = cfloat_add(almtot, almnew);
      eiMphi[iAt] = cfloat_mul(eiMphi[iAt], eiphi[iAt]);
    }

    alm[ilms] = almtot;
  }
}
