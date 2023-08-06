Release notes
=============


NumpyBrain 0.1.0
----------------

This is the first release of NumpyBrain. Original NumpyBrain is a lightweight
SNN library only based on pure `NumPy <https://numpy.org/>`_. It is highly
highly highly flexible. However, for large-scale networks, this framework seems
slow. Recently, we changed the API to accommodate the
`Numba <http://numba.pydata.org/>`_ backend. Thus, when encountering large-scale
spiking neural network, the model can get the C or FORTRAN-like simulation speed.


