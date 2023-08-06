[![Python](https://img.shields.io/badge/Python-3.5,3.6,3.7,3.8-blue.svg?style=flat-square)](/)
[![Django](https://img.shields.io/badge/Django-1.11,2.1,2.2-blue.svg?style=flat-square)](/)
[![License](https://img.shields.io/badge/License-BSD--3--Clause-blue.svg?style=flat-square)](/LICENSE)
[![PyPIv](https://img.shields.io/pypi/v/django-constrainedfilefield.svg?style=flat-square)](https://pypi.org/project/django-constrainedfilefield)
[![PyPIs](https://img.shields.io/pypi/status/django-constrainedfilefield.svg)](https://pypi.org/project/django-constrainedfilefield)
[![Build Status](https://travis-ci.org/mbourqui/django-constrainedfilefield.svg?branch=master)](https://travis-ci.org/mbourqui/django-constrainedfilefield)
[![Coverage Status](https://coveralls.io/repos/github/mbourqui/django-constrainedfilefield/badge.svg)](https://coveralls.io/github/mbourqui/django-constrainedfilefield)
[![Downloads](https://pepy.tech/badge/django-constrainedfilefield)](https://pepy.tech/project/django-constrainedfilefield)
<a href="https://github.com/psf/black"><img alt="Code style: black" src="https://img.shields.io/badge/code%20style-black-000000.svg"></a>

# ConstrainedFileField for Django

This Django app adds a new field type, `ConstrainedFileField`, that has the
capability of checking the file size and type. Also provides a javascript checker for the 
form field.


## Features
* File size limitation
* File type limitation
* Javascript file size checker


## Requirements
* [Python][] >= 3.5
* [Django]>= 1.11.29
* `python-magic` >= 0.4.2 *iff* you want to check the file type

## Installation

### Using PyPI
1. Run
   * `pip install django-constrainedfilefield`, or
   * `pip install django-constrainedfilefield[filetype]` to ensure `python-magic` is installed.
1. For windows, you must download the dll files and .magic file at https://github.com/pidydx/libmagicwin64 (32-bit version: http://gnuwin32.sourceforge.net/packages/file.htm)), add them to C:\\Windows\\System32 (or to a folder in your PATH), and set MAGIC_FILE_PATH="..." to the path of your .magic file in your settings.py. For more information about the files to download, go to: https://github.com/ahupp/python-magic/blob/43df08c5ed63d7aad839695f311ca1be2eeb1ecb/README.md#dependencies

### Using the source code
1. Make sure [Pandoc][] is installed
1. Run `./pypi_packager.sh`
1. Run `pip install dist/django_constrainedfilefield-x.y.z-[...].wheel`, where `x.y.z` must be replaced by the actual
   version number and `[...]` depends on your packaging configuration
1. For windows, you must download the dll files and .magic file at https://github.com/pidydx/libmagicwin64 (32-bit version: http://gnuwin32.sourceforge.net/packages/file.htm)), add them to C:\\Windows\\System32 (or to a folder in your PATH), and set MAGIC_FILE_PATH="..." to the path of your .magic file in your settings.py. For more information about the files to download, go to: https://github.com/ahupp/python-magic/blob/43df08c5ed63d7aad839695f311ca1be2eeb1ecb/README.md#dependencies

## Usage
### Validate single file
The field can be used in forms or model forms like a normal `FileField`. If a user tries to upload
a file which is too large or without a valid type, a form validation error will occur.

Note that the validation does not occur on the field itself (on `save()`), but when validated through a form.

#### Creating form from model
Create a model and add a field of type `ConstrainedFileField`. You can add a maximum size in bytes
and a list of valid mime types that will be allowed. The list of all mime types is available
here: http://www.iana.org/assignments/media-types/index.html.
Setting none of the above, it behaves like a regular `FileField`.
```
from django.db import models
from constrainedfilefield.fields import ConstrainedFileField

class TestModel(models.Model):
    the_file = ConstrainedFileField(
                            null=True,
                            blank=True,
                            upload_to='testfile',
                            content_types=['image/png'],
                            max_upload_size=10240
                                    )
```

```
from django import forms
from myproject.models import TestModel

class TestModelForm(forms.ModelForm):
    class Meta:
        model = TestModel
        fields = ['the_file']
```

#### Building a form
```
from django import forms
from constrainedfilefield.fields import ConstrainedFileField

class TestNoModelForm(forms.Form):
    the_file = ConstrainedFileField(
                            null=True,
                            blank=True,
                            upload_to='testfile',
                            content_types=['image/png'],
                            max_upload_size=10240
                                    ).formfield()
```

#### Javascript file size validation
Additionally, to prevent user uploading too large files, a javascript checker can be set to the 
form field. In order to achieve that, you need to

1. Add `constrainedfilefield` to the `INSTALLED_APPS`. This will load the
  javascripts from the static files.
1.  Activate this feature by setting `js_checker=True` when instantiating the
`ConstrainedFileField`.
1. Include the javascript in the template where the form field is used

    ```Django
    {% load static %}
    <script src="{% static 'constrainedfilefield/js/file_checker.js' %}"></script>
    ```


### Validate single image
Same as above, using `ConstrainedImageFileField` instead.

The `ConstrainedImageField` offers additional constraints:
* `[min|max]_upload_[width|height]` to define min/max dimensions, respectively width and height.


## Note on DOS attacks

Important note: the check of the file size is made by Django once the whole file has been uploaded
to the server and stored in a temp directory (or in memory if the file is small). Thus, this is
useful to guarantee the quota of the users, for example, but will not stop an attacking user that
wants to block the server by sending huge files (e. g. of several Gb).

To avoid this, you need to configure your front end to limit the size of uploaded files. How to do
it depends on the software you are using. For example, if you use apache, you should use
[**LimitRequestBody**](http://httpd.apache.org/docs/2.2/mod/core.html#limitrequestbody) directive.

This is a complementary measure, because you'll usually want normal users that exceed the size by a
reasonable amount to get a friendly form validation message, while attacking users will see how their
connection is abruptly cut before the file finishes uploading. So the recommended setting is to give
`max_upload_size` a small value (e.g. 5Mb) and `LimitRequestBody` a higher one (e.g. 100Mb).


## Credits

This is a fork of [django-validated-file](https://github.com/kaleidos/django-validated-file) from
[Kaleidos](https://github.com/kaleidos).

  [python]:     https://www.python.org/             "Python"
  [django]:     https://www.djangoproject.com/      "Django"
  [pandoc]:     http://pandoc.org/index.html        "Pandoc"