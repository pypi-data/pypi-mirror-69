 \* \* * # spotlib * \* \*

Summary
-------

Python 3 library for retrieving historical spot prices from `Amazon
EC2 <http://aws.amazon.com/ec2>`__ Service.

Internally, **spotlib** utilises a paged generator architecture to
achieve maximum performance with non-blocking state transition.

Although **spotlib** was designed for maximum flexibility as a library,
**spotlib** also includes a cli helper application,
`spotcli <#spotcli>`__, a cli binary which can be used directly for
retrieving spot price data simple use cases.

**Version**: 0.2.9

--------------

Contents
--------

-  `**Dependencies** <#dependencies>`__

-  `**Installation** <#installation>`__

-  `**Use** <#use>`__

   -  `**Spotlib Library** <#use>`__
   -  `**Spotcli Helper Application** <#spotcli-help>`__

      -  `Options <#spotcli-help>`__
      -  `Data Retrieval -- 1 AWS Region <#spotcli-1region>`__
      -  `Data Retrieval -- Multiple AWS
         Regions <#spotcli-multiregion>`__

-  `**IAM Permissions** <#iam-permissions>`__

-  `**Author & Copyright** <#author--copyright>`__

-  `**License** <#license>`__

-  `**Disclaimer** <#disclaimer>`__

--

`back to the top <#top>`__

--------------

Dependencies
------------

`spotlib <https://github.com/fstab50/spotlib>`__ requires:

-  `Python 3.6+ <https://docs.python.org/3/>`__.

-  `Boto3 <https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/index.html>`__
   Python SDK for Amazon Web Services

-  `Libtools <https://github.com/fstab50/libtools>`__ General utilities
   library

`back to the top <#top>`__

--------------

Installation
------------

**spotlib** may be installed on Linux via `pip, python package
installer <https://pypi.org/project/pip>`__ in one of two methods:

To install **spotlib** for a single user:

::

    $  pip3 install spotlib --user

To install **spotlib** for all users (Linux):

::

    $  sudo -H pip3 install spotlib

`back to the top <#top>`__

--------------

Use
---

--------------

Use / Spotlib Library
~~~~~~~~~~~~~~~~~~~~~

**spotlib** can be used most flexibly as an importable library:

1. Initial Setup: Default endpoints for data retreival is a period of 1
   day

   .. code:: python

       >>> from spotlib import SpotPrices, DurationEndpoints
       >>> sp = SpotPrices()

   ::

       # Display datetime endpoints
       >>> sp.start

       datetime.datetime(2019, 9, 17, 0, 0)

       >>> sp.end

       datetime.datetime(2019, 9, 18, 0, 0)

2. Set custom endpoints (start & end date times, 10 days back from
   today):

   .. code:: python

       >>> start, end = sp.set_endpoints(duration=10)

3. Retrieve spot price data for the custom time period for a particular
   region:

   .. code:: python

       >>> prices = sp.generate_pricedata(regions=[eu-west-1])

4. Examine price data returned:

   .. code:: python

       >>> from libtools.js import export_iterobject
       >>> export_iterobject(prices)

.. raw:: html

   <p>

::

    <a href="http://images.awspros.world/spotlib/use-library.png" target="_blank"><img src="./assets/use-library.png">

.. raw:: html

   </p>

--

`back to the top <#top>`__

--------------

 ### Use / Spotcli Helper Application / Options

To display the help menu for **spotcli**, the included command line
helper application:

.. code:: bash

        $ spotcli --help

.. raw:: html

   <p align="center">

::

    <a href="http://images.awspros.world/spotlib/help-menu.png" target="_blank"><img src="./assets/help-menu.png">

.. raw:: html

   </p>

--

`back to the top <#top>`__

--------------

 ### Use / Spotcli Helper Application / Data Retrieval (1 region)

To run a test of the spotlib library, retrieve spot price data and
writeout to disk:

.. code:: bash

    $ spotcli --duration-days 3 --region eu-west-1

.. raw:: html

   <p align="center">

::

    <a href="http://images.awspros.world/spotlib/spotcli-1region.png" target="_blank"><img src="./assets/spotcli-1region.png">

.. raw:: html

   </p>

--

`back to the top <#top>`__

--------------

 ### Use / Spotcli Helper Application / Data Retrieval (multi-region)

To run a test of the spotlib library, retrieve spot price data and
writeout to disk:

.. code:: bash

    $ spotcli --duration-days 1 --region eu-west-1 eu-west-2 us-east-1

.. raw:: html

   <p align="center">

::

    <a href="http://images.awspros.world/spotlib/spotcli-multiregion.png" target="_blank"><img src="./assets/spotcli-multiregion.png">

.. raw:: html

   </p>

--

`back to the top <#top>`__

--------------

IAM Permissions
---------------

Either an Identity and Access Management user or role must be used to
retrieve spot price data from AWS. The following is the minimum
permissions required to retrieve data:

.. code:: json

    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "VisualEditor0",
                "Effect": "Allow",
                "Action": [
                    "ec2:DescribeSpotPriceHistory",
                    "ec2:DescribeRegions"
                ],
                "Resource": "*"
            }
        ]
    }

Alternatively, if more permissive (but still read-only) permissions can
be tolerated, the AWS Managed Policy 'AmazonEC2ReadOnlyAccess' can be
used via the following ARN:

-  arn:aws:iam::aws:policy/AmazonEC2ReadOnlyAccess

The permissions above for IAM are a subset of the
AmazonEC2ReadOnlyAccess policy. Either should work without problems.

--

`back to the top <#top>`__

--------------

Author & Copyright
------------------

All works contained herein copyrighted via below author unless work is
explicitly noted by an alternate author.

-  Copyright Blake Huber, All Rights Reserved.

`back to the top <#top>`__

--------------

License
-------

-  Software contained in this repo is licensed under the `license
   agreement <./LICENSE.md>`__. You may display the license and
   copyright information by issuing the following command:

::

    $ spotcli --version

.. raw:: html

   <p align="center">

::

    <a href="http://images.awspros.world/spotlib/version-copyright.png" target="_blank"><img src="./assets/version-copyright.png">

.. raw:: html

   </p>

`back to the top <#top>`__

--------------

Disclaimer
----------

*Code is provided "as is". No liability is assumed by either the code's
originating author nor this repo's owner for their use at AWS or any
other facility. Furthermore, running function code at AWS may incur
monetary charges; in some cases, charges may be substantial. Charges are
the sole responsibility of the account holder executing code obtained
from this library.*

Additional terms may be found in the complete `license
agreement <./LICENSE.md>`__.

`back to the top <#top>`__

--------------
