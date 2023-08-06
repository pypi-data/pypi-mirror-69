# Elcano

**Currently under initial development, do not use.**

This Python 3 library is a visual dataset explorer that can be used to analyse the main properties of a dataset. It is named after [Juan Sebastián Elcano](https://en.wikipedia.org/wiki/Juan_Sebasti%C3%A1n_Elcano), the explorer who completed the first circumnavigation of the Earth.

Some of the main features of this library are:

* Wide format support: The formats ARFF, BSI, CSV, DAT, DATA, JSON, LIBSVM, M, NAMES, XRFF and their gzipped versions can be used.
* Comprehensive analysis features: many analysis tools are available to study the dataset, giving access to well-known toolboxes such as scikit-learn, keras and pandas.
* Pipeline storage and sharing: the pipelines created can be saved locally and uploaded to the pipeline cloud.
* Simple-yet-powerful interface: when a dataset is loaded, a web platform is deployed locally to analyse the datasets visually. Every pipeline can be exported as a script to avoid losing the grip on the process.

## Install and usage

Installing and using this library is as simple as:

```shell
$ pip install elcano
Successfully installed elcano-0.1
$ elcano dataset.csv
```

A complete reference will be added as the development of this library advances.

## Changes

### v0.0.

Released on May 24, 2020.

* Initial package upload.