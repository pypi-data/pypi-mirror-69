# OIDCPY Package

This is a package that contains Python code to implement an OpenID Connect Provider. You can find the source code on 
[Github](https://github.com/marcelvandendungen/oidcpy).

The `authorize` module contains a decorator that can be applied to a Flask route handler to enforce authorization. You specify the `audience` and `scopes` as arguments to the decorator, like:

```python
@app.route('/', methods=['GET'])
@authorize(audience='http://localhost:5000', scopes='read')
def index(): pass
```
