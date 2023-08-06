# Connected Home -- API


## Publish a new version of the api on PyPi

First we need to install twine and bum

```
pip install twine bumpversion
```

Then, we use bumpversion to increment the new version. In the example below,
change the version to the current one. Choose from major, minor or patch version.

```
cd ./api
bumpversion --current-version 0.0.1 patch setup.py connected-home/__init__.py
```

```
python setup.py sdist bdist_wheel
```



```
python -m twine upload dist/*
```