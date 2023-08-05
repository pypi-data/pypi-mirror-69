=========
Changelog
=========

kikuchipy is an open-source Python library for processing and analysis of
electron backscatter diffraction patterns: https://kikuchipy.org.

All notable changes to this project will be documented in this file. The format
is based on `Keep a Changelog <https://keepachangelog.com/en/1.1.0>`_, and this
project adheres to `Semantic Versioning <https://semver.org/spec/v2.0.0.html>`_.

Contributors to each release are listed in alphabetical order.

0.2.1 (2020-05-20)
==================

This is a patch release that enables installing kikuchipy 0.2 from Anaconda and
not just PyPI.

Contributors
------------
- Håkon Wiik Ånes

Changed
-------
- Use numpy.fft instead of scipy.fft because HyperSpy requires scipy < 1.4 on
  conda-forge, while scipy.fft was introduced in scipy 1.4.
  (`#180 <https://github.com/kikuchipy/kikuchipy/pull/180>`_)

Fixed
-----
- With the change above, kikuchipy 0.2 should be installable from Anaconda and
  not just PyPI.
  (`#180 <https://github.com/kikuchipy/kikuchipy/pull/180>`_)

0.2.0 (2020-05-19)
==================

Details of all development associated with this release are available `here
<https://github.com/kikuchipy/kikuchipy/milestone/2?closed=1>`_.

Contributors
------------
- Håkon Wiik Ånes
- Tina Bergh

Added
-----
- Jupyter Notebooks with tutorials and example workflows available via
  https://github.com/kikuchipy/kikuchipy-demos.
- Grey scale and RGB virtual backscatter electron (BSE) images can be easily
  generated with the VirtualBSEGenerator class. The generator return objects of
  the new signal class VirtualBSEImage, which inherit functionality from
  HyperSpy's Signal2D class.
  (`#170 <https://github.com/kikuchipy/kikuchipy/pull/170>`_)
- EBSD master pattern class and reader of master patterns from EMsoft's EBSD
  master pattern file.
  (`#159 <https://github.com/kikuchipy/kikuchipy/pull/159>`_)
- Python 3.8 support.
  (`#157 <https://github.com/kikuchipy/kikuchipy/pull/157>`_)
- The public API has been restructured. The pattern processing used by the EBSD
  class is available in the kikuchipy.pattern subpackage, and
  filters/kernels used in frequency domain filtering and pattern averaging are
  available in the kikuchipy.filters subpackage.
  (`#169 <https://github.com/kikuchipy/kikuchipy/pull/169>`_)
- Intensity normalization of scan or single patterns.
  (`#157 <https://github.com/kikuchipy/kikuchipy/pull/157>`_)
- Fast Fourier Transform (FFT) filtering of scan or single patterns using
  SciPy's fft routines and `Connelly Barnes' filterfft
  <https://www.connellybarnes.com/code/python/filterfft>`_.
  (`#157 <https://github.com/kikuchipy/kikuchipy/pull/157>`_)
- Numba dependency to improve pattern rescaling and normalization.
  (`#157 <https://github.com/kikuchipy/kikuchipy/pull/157>`_)
- Computing of the dynamic background in the spatial or frequency domain for
  scan or single patterns.
  (`#157 <https://github.com/kikuchipy/kikuchipy/pull/157>`_)
- Image quality (IQ) computation for scan or single patterns based on N. C. K.
  Lassen's definition.
  (`#157 <https://github.com/kikuchipy/kikuchipy/pull/157>`_)
- Averaging of patterns with nearest neighbours with an arbitrary kernel, e.g.
  rectangular or Gaussian.
  (`#134 <https://github.com/kikuchipy/kikuchipy/pull/134>`_)
- Window/kernel/filter/mask class to handle such things, e.g. for pattern
  averaging or filtering in the frequency or spatial domain. Available in the
  kikuchipy.filters module.
  (`#134 <https://github.com/kikuchipy/kikuchipy/pull/134>`_,
  `#157 <https://github.com/kikuchipy/kikuchipy/pull/157>`_)

Changed
-------
- Renamed five EBSD methods: static_background_correction to
  remove_static_background, dynamic_background_correction to
  remove_dynamic_background, rescale_intensities to rescale_intensity,
  virtual_backscatter_electron_imaging to plot_virtual_bse_intensity, and
  get_virtual_image to get_virtual_bse_intensity.
  (`#157 <https://github.com/kikuchipy/kikuchipy/pull/157>`_,
  `#170 <https://github.com/kikuchipy/kikuchipy/pull/170>`_)
- Renamed kikuchipy_metadata to ebsd_metadata.
  (`#169 <https://github.com/kikuchipy/kikuchipy/pull/169>`_)
- Source code link in the documentation should point to proper GitHub line. This
  `linkcode_resolve` in the `conf.py` file is taken from SciPy.
  (`#157 <https://github.com/kikuchipy/kikuchipy/pull/157>`_)
- Read the Docs CSS style.
  (`#157 <https://github.com/kikuchipy/kikuchipy/pull/157>`_)
- New logo with a gradient from experimental to simulated pattern (with EMsoft),
  with a color gradient from the plasma color maps.
  (`#157 <https://github.com/kikuchipy/kikuchipy/pull/157>`_)
- Dynamic background correction can be done faster due to Gaussian blurring in
  the frequency domain to get the dynamic background to remove.
  (`#157 <https://github.com/kikuchipy/kikuchipy/pull/157>`_)

Removed
-------
- Explicit dependency on scikit-learn (it is imported via HyperSpy).
  (`#168 <https://github.com/kikuchipy/kikuchipy/pull/168>`_)
- Dependency on pyxem. Parts of their virtual imaging methods are adapted
  here---a big thank you to the pyxem/HyperSpy team!
  (`#168 <https://github.com/kikuchipy/kikuchipy/pull/168>`_)

Fixed
-----
- RtD builds documentation with Python 3.8 (fixed problem of missing .egg
  leading build to fail).
  (`#158 <https://github.com/kikuchipy/kikuchipy/pull/158>`_)

0.1.3 (2020-05-11)
==================

kikuchipy is an open-source Python library for processing and analysis of
electron backscatter diffraction patterns: https://kikuchipy.org.

This is a patch release. It is anticipated to be the final release in the
`0.1.x` series.

Added
-----
- Package installation with Anaconda via the `conda-forge channel
  <https://anaconda.org/conda-forge/kikuchipy/>`_.

Fixed
-----
- Static and dynamic background corrections are done at float 32-bit precision,
  and not integer 16-bit.
- Chunking of static background pattern.
- Chunking of patterns in the h5ebsd reader.

0.1.2 (2020-01-09)
==================

kikuchipy is an open-source Python library for processing and analysis of
electron backscatter diffraction patterns: https://kikuchipy.org.

This is a bug-fix release that ensures, unlike the previous bug-fix release,
that necessary files are downloaded when installing from PyPI.

0.1.1 (2020-01-04)
==================

This is a bug fix release that ensures that necessary files are uploaded to
PyPI.

0.1.0 (2020-01-04)
==================

We're happy to announce the release of kikuchipy v0.1.0!

kikuchipy is an open-source Python library for processing and analysis of
electron backscatter diffraction (EBSD) patterns. The library builds upon the
tools for multi-dimensional data analysis provided by the HyperSpy library.

For more information, a user guide, and the full reference API documentation,
please visit: https://kikuchipy.org.

This is the initial pre-release, where things start to get serious... seriously
fun!

Features
--------
- Load EBSD patterns and metadata from the NORDIF binary format (.dat), or
  Bruker Nano's or EDAX TSL's h5ebsd formats (.h5) into an ``EBSD`` object, e.g.
  ``s``, based upon HyperSpy's `Signal2D` class, using ``s = kp.load()``. This
  ensures easy access to patterns and metadata in the attributes ``s.data`` and
  ``s.metadata``, respectively.

- Save EBSD patterns to the NORDIF binary format (.dat) and our own h5ebsd
  format (.h5), using ``s.save()``. Both formats are readable by EMsoft's NORDIF
  and EMEBSD readers, respectively.

- All functionality in kikuchipy can be performed both directly and lazily
  (except some multivariate analysis algorithms). The latter means that all
  operations on a scan, including plotting, can be done by loading only
  necessary parts of the scan into memory at a time. Ultimately, this lets us
  operate on scans larger than memory using all of our cores.

- Visualize patterns easily with HyperSpy's powerful and versatile ``s.plot()``.
  Any image of the same navigation size, e.g. a virtual backscatter electron
  image, quality map, phase map, or orientation map, can be used to navigate in.
  Multiple scans of the same size, e.g. a scan of experimental patterns and the
  best matching simulated patterns to that scan, can be plotted simultaneously
  with HyperSpy's ``plot_signals()``.

- Virtual backscatter electron (VBSE) imaging is easily performed with
  ``s.virtual_backscatter_electron_imaging()`` based upon similar functionality
  in pyXem. Arbitrary regions of interests can be used, and the corresponding
  VBSE image can be inspected interactively. Finally, the VBSE image can be
  obtained in a new ``EBSD`` object with ``vbse = s.get_virtual_image()``,
  before writing the data to an image file in your desired format with
  matplotlib's ``imsave('filename.png', vbse.data)``.

- Change scan and pattern size, e.g. by cropping on the detector or extracting
  a region of interest, by using ``s.isig`` or ``s.inav``, respectively.
  Patterns can be binned (upscaled or downscaled) using ``s.rebin``. These
  methods are provided by HyperSpy.

- Perform static and dynamic background correction by subtraction or division
  with ``s.static_background_correction()`` and
  ``s.dynamic_background_correction()``. For the former correction, relative
  intensities between patterns can be kept if desired.

- Perform adaptive histogram equalization by setting an appropriate contextual
  region (kernel size) with ``s.adaptive_histogram_equalization()``.

- Rescale pattern intensities to desired data type and range using
  ``s.rescale_intensities()``.

- Multivariate statistical analysis, like principal component analysis and many
  other decomposition algorithms, can be easily performed with
  ``s.decomposition()``, provided by HyperSpy.

- Since the ``EBSD`` class is based upon HyperSpy's ``Signal2D`` class, which
  itself is based upon their ``BaseSignal`` class, all functionality available
  to ``Signal2D`` is also available to the ``EBSD`` class. See HyperSpy's user
  guide (http://hyperspy.org/hyperspy-doc/current/user_guide/tools.html) for
  details.

Contributors
------------
- Håkon Wiik Ånes
- Tina Bergh
