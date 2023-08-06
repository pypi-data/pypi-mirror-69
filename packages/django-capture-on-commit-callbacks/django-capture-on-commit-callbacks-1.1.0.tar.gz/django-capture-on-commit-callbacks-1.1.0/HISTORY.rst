History
=======

1.1.0 (2020-05-24)
------------------

* Made ``captureOnCommitCallbacks()`` a ``classmethod`` so it can be used from within class methods such as ``setUpClass()``, ``setUpTestData()``.
* Avoiding capturing callbacks enqueued within rolled back ``atomic()`` blocks.
  As a side effect of this change, the returned list of callbacks is only populated when the context manager exits.
* Add Django 3.1 support.

1.0.0 (2020-05-20)
------------------

* Initial release.
