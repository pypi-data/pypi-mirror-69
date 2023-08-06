npbrain.core package
====================

.. currentmodule:: npbrain.core
.. automodule:: npbrain.core


ODE methods
-----------

.. autosummary::
    :toctree: _autosummary

    ode_generator
    forward_Euler
    explicit_midpoint_Euler
    rk2
    rk3
    rk4
    rk4_alternative
    backward_Euler
    trapezoidal_rule


SDE methods
-----------

.. autosummary::
    :toctree: _autosummary

    sde_generator
    Euler_method
    Milstein_dfree_Ito
    Heun_method2
    Heun_method
    Milstein_dfree_Stra


Neurons
-------

.. autosummary::
    :toctree: _autosummary

    judge_spike
    output_spike
    initial_neu_state
    format_geometry
    format_refractory

.. autoclass:: Neurons
    :members:


Synapses
--------

.. autosummary::
    :toctree: _autosummary

    record_conductance
    initial_syn_state
    format_connection

.. autoclass:: Synapses
    :members:

.. autoclass:: CondSynapses
    :members:


Monitors
--------

.. autoclass:: Monitor
   :members:

.. autoclass:: SpikeMonitor
   :members:

.. autoclass:: StateMonitor
   :members:


Network
-------

.. autoclass:: Network
   :members: add, run, run_time


