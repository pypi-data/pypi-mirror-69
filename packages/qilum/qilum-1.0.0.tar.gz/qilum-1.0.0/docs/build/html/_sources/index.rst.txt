.. image:: _static/qilum.png
  :width: 400

Qilum is a statistical and utility library supplementing existing statistical libraries, 
including `numpy <https://numpy.org>`_ and `scipy <https://www.scipy.org/>`_. 
We use `numba <http://numba.pydata.org>`_ library to speed up some calculations.

In this first version, we provide several random number generators. They are based on the 
`C++ LOPOR library <http://www.damienloison.com/finance/LOPOR/index.html>`_ 
and the article `Canonical local algorithms for spin systems: heat bath 
and Hasting's methods <http://www.damienloison.com/articles/reference26.pdf>`_.
We respect the `scipy.stats random number generator <https://docs.scipy.org/doc/scipy/reference/stats.html>`_  
interface and any of the scipy.stats classes can be used to initialize qilum classes. 

.. toctree::
   :maxdepth: 2
   
   license


* Example: Discrete Walker distribution :class:`.Dist_walker`

.. code-block:: python

	# Define a discrete distribution with Walker algorithm 
	import qilum.stats as qs
	walker = qs.Dist_walker(probabilities=[0.2, 0.5, 0.3], values=[0, 10, 2])
	# and call the random number generator
	rans = walker.rvs(size=100000)

* Example: Sum of distributions :class:`.Dist_sum`

.. code-block:: python

    # exponential distributions left and right types
    exp_left  = qs.Dist_scale(scipy.stats.expon(),loc_x=-1.000001, scale_x=-1, scale_y=2, name='Exp+')
    exp_right = qs.Dist_scale(scipy.stats.expon(),loc_x= -1, scale_x= 1, scale_y=2, name='Exp-')
    # sum of the distributions
    dist_sum = qs.Dist_sum([exp_left, exp_right]); 
    # random numbers
    rans = dist_sum.rvs(100)

.. image:: _static/Dist_sum_2.jpg

* Example: Rejection method distribution :class:`.Dist_reject`

.. code-block:: python

    # generate a random generator for f_f(x)     
    def f_f(xs): return np.where((xs<-5) | (xs>5), 0, 3.*np.exp(-np.power(xs,4)/10.))
    # find a step function above f_f(x)
    xs = np.linspace(-6,6, 1001)
    ys = f_f(xs)
    xs_step, ys_step = qs.f_max(xs, ys, 20)    
    ys_step *= 1.2 # just to be sure that our step function >= f_f() 
    # create a distribution for this step function:
    hist_dist = scipy.stats.rv_histogram((ys_step, xs_step))
    # scale this diribution
    cumulative = qs.f_cumulative(xs_step, ys_step)[-1]
    dist_step = qs.Dist_scale(hist_dist, scale_y = cumulative, name='dist_step')
    # create dist_reject 
    dist_reject = qs.Dist_reject(dist_step, f_f)
    # random numbers
    rans = dist_reject.rvs(100)

.. image:: _static/Dist_reject2.jpg


The main classes are:

 
* :class:`.Dist_reject`. Construct an exact generator for any probability functions. This is the `fastest method <http://www.damienloison.com/articles/reference26.pdf>`_ when you do not know how to calculate or inverse the cumulative.

* :class:`.Dist_sum`. Construct a sum of known distributions  

* :class:`.Dist_scale`. Apply scaling for x and y, for any distributions, even negative scaling for x 

* :class:`.Dist_cubicSpline`. Create an approximate random number generator for any functions using cubic spline. If you need an exact random number generator, use :class:`.Dist_reject`. The :class:`.Dist_cubicSpline` can be used instead of `scipy.stats.rv_histogram <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.rv_histogram.html#scipy.stats.rv_histogram>`_ if you need a smooth function

* :class:`.Dist_walker`. Create a very fast random number generator for discrete distributions.  

* In addition, we expose the function :func:`.f_walker` which calculates the parameters of the Walker algorithm


  

.. automodapi:: stats
   :no-inheritance-diagram:
   :skip: jit
   :skip: njit
   :skip: f_walker_alias
   :skip: f_walker_ran
   :skip: f_cs_help
   :skip: f_np_array
