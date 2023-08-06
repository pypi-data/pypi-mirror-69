# gitmanager
Console tool for manage projects on github/gitlab

## Usage


## Developer section

### Create new version

Update version number on file [setup.py](setup.py)

git commit all changes

git tag 0.1 -m "tag description"

git push --tags origin master

Build package:

    python setup.py sdist bdist_wheel

Upload 
    
    twine upload -r pypi --skip-existing dist/*'
