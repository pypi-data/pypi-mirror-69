=========
 History
=========

First releases 1.0
==================

2020-05-19.  Release 1.2.0
--------------------------

- `xotless.immutables.ImmutableWrapper`:class: now accepts argument
  `wraps_descriptors` to apply wrapper on while invoking descriptors.


2020-04-30.  Release 1.1.0
--------------------------

- Use ``__slots__`` in `xotless.trees.IntervalTree`:class:.  We don't expect
  instances of this class to need additional attributes.


2020-04-29.  Release 1.0.1
--------------------------

This release only contains packaging fixes to make the distribution compliant
with PEP :pep:`561`.


2020-04-29.  Release 1.0.0
--------------------------

The first release including the code extracted from a bigger project.  Modules
available are `xotless.ranges`:mod:, `xotless.tress`:mod:,
`xotless.domains`:mod:, `xotless.itertools`:mod:, `xotless.immutables`:mod:,
and `xotless.pickablenv`:mod:.
