==================================
django-capture-on-commit-callbacks
==================================

.. image:: https://github.com/adamchainz/django-capture-on-commit-callbacks/workflows/CI/badge.svg?branch=master
   :target: https://github.com/adamchainz/django-capture-on-commit-callbacks/actions?workflow=CI

.. image:: https://img.shields.io/pypi/v/django-capture-on-commit-callbacks.svg
   :target: https://pypi.python.org/pypi/django-capture-on-commit-callbacks

.. image:: https://img.shields.io/badge/code%20style-black-000000.svg
   :target: https://github.com/python/black

Capture and make assertions on ``transaction.on_commit()`` `callbacks <https://docs.djangoproject.com/en/3.0/topics/db/transactions/#performing-actions-after-commit>`__.
This allows you to write your tests with the ``TestCase``, rather than needing the slower ``TransactionTestCase`` to actually commit the transactions.
See `Ticket #30457 <https://code.djangoproject.com/ticket/30457>`__.

Installation
============

Use **pip**:

.. code-block:: bash

    python -m pip install django-capture-on-commit-callbacks

Requirements
============

Python 3.5 to 3.8 supported.

Django 2.0 to 3.0 suppported.

API
===

``capture_on_commit_callbacks(*, using="default", execute=False)``
------------------------------------------------------------------

Acts as a context manager that captures commit hooks for the given database connection.
It returns the hook function as a list, from where you can all them.

All arguments must be passed as keyword arguments.

``using`` is the alias of the database connection to capture hooks for.

``execute`` specifies whether to call all the hook functions automatically as the context manager exits.

For example, you can test a commit hook that sends an email like so:

.. code-block:: python

    from django.core import mail
    from django.test import TestCase
    from django_capture_on_commit_callbacks import capture_on_commit_callbacks


    class ContactTests(TestCase):
        def test_post(self):
            with capture_on_commit_callbacks() as hooks:
                response = self.client.post(
                    "/contact/",
                    {"message": "I like your site"},
                )

            self.assertEqual(response.status_code, 200)
            self.assertEqual(len(hooks), 1)
            # Execute the hook
            hooks[0]()
            self.assertEqual(len(mail.outbox), 1)
            self.assertEqual(mail.outbox[0].subject, "Contact Form")
            self.assertEqual(mail.outbox[0].body, "I like your site")

The same test can be written a bit more succinctly with ``execute=True``:

.. code-block:: python

    from django.core import mail
    from django.test import TestCase
    from django_capture_on_commit_callbacks import capture_on_commit_callbacks


    class ContactTests(TestCase):
        def test_post(self):
            with capture_on_commit_callbacks(execute=True) as hooks:
                response = self.client.post(
                    "/contact/",
                    {"message": "I like your site"},
                )

            self.assertEqual(response.status_code, 200)
            self.assertEqual(len(hooks), 1)
            self.assertEqual(len(mail.outbox), 1)
            self.assertEqual(mail.outbox[0].subject, "Contact Form")
            self.assertEqual(mail.outbox[0].body, "I like your site")

``TestCaseMixin``
-----------------

A mixin class to be added to your custom ``TestCase`` subclass.
It adds one method, ``captureOnCommitCallbacks()`` that aliases ``capture_on_commit_callbacks()``, to match the ``camelCase`` style of unittest assertions.

You can add to your custom ``TestCase`` classes like so:

.. code-block:: python

    from django import test
    from django_capture_on_commit_callbacks import TestCaseMixin


    class TestCase(TestCaseMixin, test.TestCase):
        pass

You could then rewrite the above tests with your custom ``TestCase`` class like so:

.. code-block:: python

    from django.core import mail
    from example.test import TestCase


    class ContactTests(TestCase):
        def test_post(self):
            with self.captureOnCommitCallbacks(execute=True) as hooks:
                response = self.client.post(
                    "/contact/",
                    {"message": "I like your site"},
                )

            self.assertEqual(response.status_code, 200)
            self.assertEqual(len(hooks), 1)
            self.assertEqual(len(mail.outbox), 1)
            self.assertEqual(mail.outbox[0].subject, "Contact Form")
            self.assertEqual(mail.outbox[0].body, "I like your site")
