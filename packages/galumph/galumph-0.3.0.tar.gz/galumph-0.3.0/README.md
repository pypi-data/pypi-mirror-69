# GALUMPH #

<!---
SPDX-FileCopyrightText: 2016-2017 European Molecular Biology Laboratory (EMBL)
SPDX-FileCopyrightText: 2018 Christopher Kerr

SPDX-License-Identifier: LGPL-3.0-or-later
-->

[![pipeline status](https://git.embl.de/grp-svergun/galumph/badges/master/pipeline.svg)](https://git.embl.de/grp-svergun/galumph/commits/master)

Calculate ALM (scattering amplitude decomposed into spherical harmonics) at Hyperspeed using GPU acceleration.

This is a preliminary implementation using PyOpenCL.

Example code:
```python
import numpy as np
import Bio.PDB
import periodictable
import pyopencl
import galumph


ctx = pyopencl.create_some_context()

NS = 4096   # Number of S values at which to calculate the scattering
smax = 1.0  # Maximum S value
LMAX = 63   # Maximum harmonic order to use for the calculations

## Initialise the S array and allocate the ALM storage on the GPU
s = np.linspace(0, smax, NS)
kernel = galumph.AtomicScattering(LMAX, s, ctx=ctx)

## Use Bio.PDB to read the structure and periodictable to calculate the atomic form factors
pdb = Bio.PDB.PDBParser().get_structure("6lyz", "6lyz.pdb")
xyz = np.array([aa.get_vector().get_array() for aa in pdb.get_atoms()])
ff = np.array([periodictable.elements.symbol(aa.element).xray.f0(s) for aa in pdb.get_atoms()])

## Run the GPU calculation
alm = kernel.zeros()
kernel.add_many_atoms(alm, xyz, ff)
Icalc = kernel.sum_intensity(alm)
```
