git-remote-cvm
=====================

This package provides a simple method for pushing and pulling from `AWS
CodeCommit <https://aws.amazon.com/codecommit/>`__ using the CVM. This package extends `git
<https://git-scm.com/>`__ to support repository URLs prefixed with
**cvm://**.

... you can clone repositories as simply as...

::

  % git clone cvm://role-name@account-name/repository-name

The *git-remote-cvm* package works on Python versions:

* 3.6.x and greater
* 3.7.x and greater

Prerequisites
=============

Before you can use *git-remote-cvm*, you must:

* Complete initial configuration for AWS CodeCommit, including:

  * Install and configure the CVM

* Create an AWS CodeCommit repository (or have one already) in your AWS account.
* Install Python and its package manager, pip, if they are not already installed. To download and install the latest version of Python, `visit the Python website <https://www.python.org/>`__.
* Install Git on your Linux, macOS, Windows, or Unix computer.
* Install the latest version of the AWS CLI on your Linux, macOS, Windows, or Unix computer. You can find instructions `here <https://docs.aws.amazon.com/cli/latest/userguide/installing.html>`__.

Note: Installation of the AWS CLI on some operating systems requires pip version 9.0.3 or later. To check your version of pip, open a terminal and type the following command:

::

  % pip --version

If the version is not 9.0.3 or later, run the following commands to update your version of pip:

::

  % curl -O https://bootstrap.pypa.io/get-pip.py
  % python3 get-pip.py --user

Set Up
===============

Step 1: Install git-remote-cvm
-------------------------------------

* On your Linux, macOS, Windows, or Unix computer, install *git-remote-cvm* using the `pip <https://pip.pypa.io/en/latest/>`__ command. For example:

::

  % pip3 install git-remote-cvm

* If you already have *git-remote-cvm* installed you can upgrade to the latest version with the **--upgrade** parameter:

::

  % pip3 install --upgrade git-remote-cvm

Step 4: Clone your repository
-----------------------------

* At the terminal, run the **git clone cvm** command, using the details of your repository. For example:

::

  % git clone cvm://power-user-role@dev-account/web-project-1
  Cloning into 'web-project-1'...
  remote: Counting objects: 1753, done.
  Receiving objects: 100% (1753/1753), 351.77 KiB | 1.91 MiB/s, done.
  Resolving deltas: 100% (986/986), done.

