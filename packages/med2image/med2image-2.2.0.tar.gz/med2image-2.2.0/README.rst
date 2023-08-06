med2image 2.2.0
==================

Quick Overview
--------------

-  Convert DICOM or NIfTI to jpg or png

Overview
--------

``med2image`` is a simple Python3 utility that converts medical image
formatted files to more visual friendly ones, such as png and jpg.

Currently, NIfTI and DICOM input formats are understood, while any
graphical output type that is supported by matplotlib can be generated.

Dependencies
------------

Make sure that the following dependencies are installed on your host
system (or even better, a python3 virtual env):

-  ``pfmisc`` : (a general miscellaneous module for color support, etc)
-  ``nibabel`` : (to read NIfTI files)
-  ``pydicom`` : (to read DICOM files)
-  ``matplotlib`` : (to save data in various image formats)
-  ``pillow`` : (to save data in jpg format)

Installation
~~~~~~~~~~~~

The best method of installing this script and all of its dependencies is
by fetching it from PyPI

.. code:: bash

        pip3 install med2image

Should you get an error about `python3-tk` not installed, simply do (for example on Ubuntu):

.. code:: bash

        sudo apt-get update
        sudo apt-get install -y python3-tk

How to Use
----------

``med2image`` needs the following required arguments to run the application:

- ``-i | --inputFile <inputFile>`` : Input file to convert. Typically a DICOM file or a nifti volume.

- ``-d | --outputDir <outputDir> :`` The directory to contain the converted output image files.

**Example:**

.. code:: bash

    med2image -i vol.nii -d out
    
OR

.. code:: bash

    med2image -i file.dcm -d out

**NOTE:**

- The following 2 sections: NIfTI and DICOM explain how to run the ``med2image`` app using different *Command Line Arguments*

- More details about all required and optional *Command Line Arguments* can be found in the last section of this file.

NIfTI
-----
**NOTE:** One NIfTI (`.nii`) is one entire volume of multiple slices.

So, one `.nii` corresponds to multiple `.png` or `.jpg` file (slices)

- The NIfTI input data can be in 2 forms:
  - 3D : Single `.nii` volume which has multiple slices
  - 4D : A directory with multiple `.nii` files (volumes)
- The application understands both types of inputs.

Pull NIfTI
~~~~~~~~~~

The inputFile should be a NIfTI volume of the format ``.nii``

A sample volume can be found on Github at ``FNNDSC/SAG-anon-nii``. (https://github.com/FNNDSC/SAG-anon-nii.git)

- Clone this repository (``SAG-anon-nii``) to your local computer.

.. code:: bash

    git clone https://github.com/FNNDSC/SAG-anon-nii.git

- This will create a folder called ``SAG-anon-nii`` in the current working directory.
- This directory will contain a NIfTI volume with the name ``SAG-anon.nii``.

Convert NIfTI
~~~~~~~~~~~~~

**NOTE:**

- If ``--outputDir (-d)`` is not mentioned, the slice will get created in the current directory.
- if ``--sliceToConvert`` argument is not specified, then it converts all the slices of the ``.nii`` volume by default.

Both 3D and 4D NIfTI input data are understood. In the case of 4D NIfTI,
a specific frame (``--frameToConvert``) can be specified in conjunction with a specific slice
index. In most cases, only a slice is required since most NIfTI data is
3D. Furthermore, all slices can be converted, or just the middle one.

- Create a folder called ``nifti-results`` in the current working directory which also contains the input data set ``SAG-anon-nii``

- We will be storing all results in subdirectories within this directory.

All slices in a volume
^^^^^^^^^^^^^^^^^^^^^^

To convert all slices in the input NIfTI volume ``SAG-anon-nii/SAG-anon.nii``, to save
the results in a sub-directory called ``all-slices`` within the directory ``nifti-results`` , to use as output the file stem
name ``sample``, and to save the result in ``jpg`` format, do:

.. code:: bash

    med2image -i SAG-anon-nii/SAG-anon.nii -d nifti-results/all-slices -o sample.jpg -s -1

or equivalently and more verbosely,

.. code:: bash

    med2image --inputFile SAG-anon-nii/SAG-anon.nii         \
              --outputDir nifti-results/all-slices          \
              --outputFileStem sample  --outputFileType jpg \
              --sliceToConvert -1

This will create the following files in the ``all-slices`` sub-directory within ``nifti-results`` directory

::

    nifti-results/all-slices/sample-slice000.jpg
    nifti-results/all-slices/sample-slice001.jpg
    nifti-results/all-slices/sample-slice002.jpg
    nifti-results/all-slices/sample-slice003.jpg
    ...
    nifti-results/all-slices/sample-slice188.jpg
    nifti-results/all-slices/sample-slice189.jpg
    nifti-results/all-slices/sample-slice190.jpg
    nifti-results/all-slices/sample-slice191.jpg

Convert only a single slice
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Mostly, you'll probably only want to convert the "middle" slice in a
volume (for example to generate a representative thumbnail of the
volume). To do this, simply specify an ``m`` to ``--sliceToConvert`` (or ``-s m``)

.. code:: bash

    med2image -i SAG-anon-nii/SAG-anon.nii    \
              -d nifti-results/middle-slice   \
              -o sample --outputFileType jpg  \
              --sliceToConvert m

This will create the following files in the ``middle-slice`` sub-directory within ``nifti-results`` directory.

::

    nifti-results/middle-slice/sample-slice096.jpg

Alternatively a specific slice index can be converted. Use

.. code:: bash

    med2image -i SAG-anon-nii/SAG-anon.nii -d nifti-results/specific-slice -o sample --outputFileType jpg --sliceToConvert 20

to convert only the 20th slice of the volume.

This will create the following files in the ``specific-slice`` sub-directory within ``nifti-results`` directory.

::

    nifti-results/specific-slice/sample-slice020.jpg

**NOTE:**

- These samples below are run from within the current working directory which contains the ``SAG-anon-nii`` input data set directory.

- If you are running the application from another working directory, make sure you provide the correct path for the ``--inputFile`` and ``--outputDir`` arguments

DICOM
-----

**NOTE:** One DICOM (`.dcm`) corresponds to one `.png` or `.jpg` file (slice)

Pull DICOM
~~~~~~~~~~

The ``inputFile`` should be a DICOM file of the format ``.dcm``

A sample directory of ``.dcm`` can be found on Github at ``FNNDSC/SAG-anon``. (https://github.com/FNNDSC/SAG-anon.git)

- Clone this repository (``SAG-anon``) to your local computer.

.. code:: bash

    git clone https://github.com/FNNDSC/SAG-anon.git

- This will create a folder called ``SAG-anon`` in the current working directory.
- This directory contains multiple DICOM files/slices.

Convert DICOM
~~~~~~~~~~~~~

**NOTE:**

- If ``--outputDir (-d)`` is not mentioned, the slice will get created in the current directory.
- if ``--sliceToConvert`` argument is not specified, then it converts all the `.dcm` files in the directory by default.

**NOTE:**

- Create a folder called ``dicom-results`` in the current working directory which also contains the input data set ``SAG-anon``

- We will be storing all results in subdirectories within this directory.

Convert all DICOMS in a directory/series
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To convert all the DICOMS in a directory, simply specifiy a '-1' to the
sliceIndex:

.. code:: bash

    med2image -i SAG-anon/any-slice-name.dcm   \
              -d dicom-results/all-slices      \
              -o sample                        \
              --outputFileType jpg             \
              --sliceToConvert -1

This will create the following files in the ``all-slices`` sub-directory within ``dicom-results`` directory.

::

    dicom-results/all-slices/sample-slice000.jpg
    dicom-results/all-slices/sample-slice001.jpg
    dicom-results/all-slices/sample-slice002.jpg
    dicom-results/all-slices/sample-slice003.jpg
    ...
    dicom-results/all-slices/sample-slice188.jpg
    dicom-results/all-slices/sample-slice189.jpg
    dicom-results/all-slices/sample-slice190.jpg
    dicom-results/all-slices/sample-slice191.jpg

**NOTE:**

- Even though any one ``.dcm`` from the directory is passed to the ``--inputFile`` argument, all the ``.dcm`` files/slices in the ``SAG-anon`` directory will be converted.

Convert a single DICOM file
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

**NOTE:**

- These samples below are run from within the current working directory which contains the ``SAG-anon`` input data set directory.

- If you are running the application from another working directory, make sure you provide the correct path for the ``--inputFile`` and ``--outputDir`` arguments


Mostly, you'll probably only want to convert the "middle" slice in a DICOM directory (for example to generate a representative thumbnail of the directory). To do this, simply specify a `m` to --sliceToConvert (or `-s m`)

.. code:: bash

    med2image -i SAG-anon/slice-name.dcm     \
              -d dicom-results/middle-slice  \
              -o sample --outputFileType jpg \
              --sliceToConvert m

This will create the following files in the ``middle-slice`` sub-directory within ``dicom-results`` directory.

::

    dicom-results/middle-slice/sample-slice096.jpg


Alternatively a specific slice index can be converted. Use

.. code:: bash

    med2image -i SAG-anon/slice-name.dcm       \
              -d dicom-results/specific-slice  \
              -o sample --outputFileType jpg   \
              --sliceToConvert 20

to convert only the 20th slice of the volume.

This will create the following files in the ``specific-slice`` sub-directory within ``dicom-results`` directory.

::

    dicom-results/specific-slice/sample-slice020.jpg

Special Cases
^^^^^^^^^^^^^

For DICOM data, the <outputFileStem> can be set to the value of an internal DICOM tag. The tag is specified by preceding the tag name with a percent character '%', so

    ``-o %PatientID``

will use the DICOM 'PatientID' to name the output file. Note that special characters (like spaces) in the DICOM value are replaced by underscores '_'.

.. code:: bash

    med2image -i SAG-anon/slice-name.dcm    \
              -d dicom-results/tags         \
              -o %PatientID.jpg -s m

This will create the following file in the ``tags`` sub-directory within ``dicom-results`` directory.

.. code:: bash

    dicom-results/tags/1449c1d.jpg

Multiple tags can be specified, for example

    ``-o %PatientName%PatientID%ProtocolName``

and the output filename will have each DICOM tag string as
specified in order, connected with dashes.

.. code:: bash

    med2image -i SAG-anon/slice-name.dcm                   \
              -d dicom-results/tags                        \
              -o %PatientName%PatientID%ProtocolName.jpg   \
              -s m

This will create the following file in the ``tags`` sub-directory within ``dicom-results`` directory.

.. code:: bash

    dicom-results/tags/anonymized-1449c1d-SAG_MPRAGE_220_FOV.jpg


Multiple Direction Reslicing
----------------------------

By default, only the slice (or slices) in the acquisition direction are
converted. However, by passing a `--reslice` to the script, all dimensions are
converted. Since the script does not know the anatomical orientation of
the image, the directions are simply labeled x, y, and z.

The z direction is the original acquistion (slice) direction, while x
and y correspond to planes normal to the row and column directions.

Converted images are stored in subdirectories labeled x, y, and z.

**NOTE:** In case of DICOM images, the `--reslice` option will work only if all slices in the directory are converted which means: ``--sliceToConvert -1``

Command Line Arguments
----------------------

::

        -i|--inputFile <inputFile>
        Input file to convert. Typically a DICOM file or a nifti volume.

        [-I|--inputDir <inputDir>]
        If specified, a directory containing the <inputFile>. In this case
        <inputFile> should be specified as relative to <inputDir>.

        [-d|--outputDir <outputDir>]
        The directory to contain the converted output image files.

        -o|--outputFileStem <outputFileStem>
        The output file stem to store conversion. If this is specified
        with an extension, this extension will be used to specify the
        output file type.

        SPECIAL CASES:
        For DICOM data, the <outputFileStem> can be set to the value of
        an internal DICOM tag. The tag is specified by preceding the tag
        name with a percent character '%', so

            -o %ProtocolName

        will use the DICOM 'ProtocolName' to name the output file. Note
        that special characters (like spaces) in the DICOM value are
        replaced by underscores '_'.

        Multiple tags can be specified, for example

            -o %PatientName%PatientID%ProtocolName

        and the output filename will have each DICOM tag string as
        specified in order, connected with dashes.

        [-t|--outputFileType <outputFileType>]
        The output file type. If different to <outputFileStem> extension,
        will override extension in favour of <outputFileType>.

        [-s|--sliceToConvert <sliceToConvert>]
        In the case of volume files, the slice (z) index to convert. Ignored
        for 2D input data. If a '-1' is sent, then convert *all* the slices.
        If an 'm' is specified, only convert the middle slice in an input
        volume.

        [-f|--frameToConvert <sliceToConvert>]
        In the case of 4D volume files, the volume (V) containing the
        slice (z) index to convert. Ignored for 3D input data. If a '-1' is
        sent, then convert *all* the frames. If an 'm' is specified, only
        convert the middle frame in the 4D input stack.

        [--showSlices]
        If specified, render/show image slices as they are created.

        [--reslice]
        For 3D data only. Assuming [i,j,k] coordinates, the default is to save
        along the 'k' direction. By passing a --reslice image data in the 'i' and
        'j' directions are also saved. Furthermore, the <outputDir> is subdivided into
        'slice' (k), 'row' (i), and 'col' (j) subdirectories.

        [-x|--man]
        Show full help.

        [-y|--synopsis]
        Show brief help.
