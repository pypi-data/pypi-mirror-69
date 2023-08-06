# README File
What you need to do is use twine. Make sure the version is 1.8+

Install it via pip install twine

Make sure your .pypirc file has the correct credentials for test.pypi.org because that is a separate database from production pypi.

Build your sdist python setup.py sdist.

Use twine upload --repository pypitest dist/* for your test upload.

Use twine upload --repository pypi dist/* for your production upload.

https://python-packaging-tutorial.readthedocs.io/en/latest/setup_py.html 

https://dev.to/mmphego/how-i-published-deployed-my-python-package-to-pypi-easily-3hio 


