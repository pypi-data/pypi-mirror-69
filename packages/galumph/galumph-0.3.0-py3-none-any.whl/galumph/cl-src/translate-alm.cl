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

/* Shift A(K,M) by u along the z axis giving B(L,M)
 *
 */
#if (defined(LMAX1) && defined(NSWORK))
__attribute__((reqd_work_group_size(LMAX1,1,NSWORK)))
#endif
__kernel void translate_alm(__global const cfloat_t *restrict alm,
                            __global cfloat_t *restrict blm,
                            __global const float *restrict dlmkp,
                            __global const float *restrict jp,
                            __local cfloat_t *restrict alm_local,  // [LMAX1*NSWORK]
                            __local cfloat_t *restrict blm_local,  // [LMAX1*NSWORK]
                            __local float *restrict dlmkp_local,  // [LMAX1*LMAX1]
                            __local float *restrict jp_local)  // [(2*LMAX+1)*NSWORK]
{
#ifndef LMAX1
  const uint LMAX1 = get_global_size(0);
#endif
#ifndef NSWORK
  const uint NSWORK = get_local_size(2);
#endif
  const uint LMAX = LMAX1 - 1;
  const uint K = get_global_id(0);
  const uint M = get_global_id(1);
  const uint NS = get_global_size(2);
  const uint is = get_global_id(2);
  const uint is_local = get_local_id(2);

  const size_t iLM = K * (K+1) / 2 + M;
  const size_t iLS = K * NS + is;
  const size_t iLMS = iLM * NS + is;
  const size_t iKS_local = K * NSWORK + is_local;

  // Copy A(K,M) to local memory
  if (K >= M) {alm_local[iKS_local] = alm[iLMS];}
  // Initialize the local BLM to zero
  blm_local[iKS_local] = cfloat_new(0, 0);
  // Copy JP to local memory - need values up to P=2*LMAX+1
  jp_local[iKS_local] = jp[iLS];
  if (K > 0) {
    const uint P = K + LMAX;
    const size_t iPS = P * NS + is;
    const size_t iPS_local = P * NSWORK + is_local;
    jp_local[iPS_local] = jp[iPS];
  }
  barrier(CLK_LOCAL_MEM_FENCE);

  uint L;
  // Calculations are only done for L >= K but we can't start the loop from K
  // because K is different between work items in the work group and we need
  // all work items to call the async copies and barriers at the same time.
  for (L=M; L<LMAX1; ++L) {
    // Copy the region of DLMKP for this L and M to local memory
    // TODO start this async_copy earlier
    const size_t iL000 = L * (L+1) * (L+1) * (L+2) / 12;
    const size_t M00offset = (3*L*(L+3) + 7 - M*M) * M / 6;
    const size_t iLM00 = iL000 + M00offset;
    const size_t KPsize = ((L+1)*(L+2) - M*(M+1)) / 2;
    event_t ev = 0;
    ev = async_work_group_copy(dlmkp_local, dlmkp + iLM00, KPsize, ev);
    wait_group_events(1, &ev);

    const size_t iLS_local = L * NSWORK + is_local;
    float psum = 0;
    if ((K>=M) && (K<=L)) {
      uint ip;
      for (ip=0; ip<=K; ++ip) {
        const uint P = L + 2*ip - K;
        const size_t iPS_local = P * NSWORK + is_local;
        const size_t iKP_local = (K*(K+1) - M*(M+1)) / 2 + ip;
        // The correct A[K,M] is i^K * A[K,M]
        // The correct dlmkp is i^P * dlmkp
        // when writing to BLM we divide by i^L
        // i.e. overall i^(K+P-L)
        //
        // since (K+P-L) == 2*ip, that makes -1^ip
        //
        // Not sure where the M factor comes from...
        const float sign = ((M+ip)%2)?-1:1;
        psum += jp_local[iPS_local] * dlmkp_local[iKP_local] * sign;
      }
    }
    // Here all the threads want to write to blm_local[L,S] simultaneously
    // Use a sequential sum here, TODO use a parallel sum or change the algorithm completely
    uint K2;
    for (K2=M;K2<=L;++K2){
      if (K==K2) {
        blm_local[iLS_local] = cfloat_add(blm_local[iLS_local],
                                          cfloat_mulr(alm_local[iKS_local],
                                                      psum));
      }
      barrier(CLK_LOCAL_MEM_FENCE);
    }

    // If K < L then we also need to handle the terms on the other side of the diagonal
    if ((K>=M) && (K<L)) {
      // Was i^(K-L), want i^(L-K)
      // i.e. overall -1^(L-K)
      const float swapsign = ((L-K)%2)?-1:1;
      blm_local[iKS_local] = cfloat_add(blm_local[iKS_local],
                                        cfloat_mulr(alm_local[iLS_local],
                                                    psum * swapsign));
    }
    barrier(CLK_LOCAL_MEM_FENCE);
  }
  
  // Copy B(L,M) out to global memory
  if (K >= M) {blm[iLMS] = blm_local[iKS_local];}
}

  