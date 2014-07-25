# node-valid-java-identifier [![Build Status](https://secure.travis-ci.org/peutetre/node-valid-java-identifier.png)](http://travis-ci.org/peutetre/node-valid-java-identifier)

Check if a given string is a valid java identifier.

# Install

```
npm install valid-java-identifier
```

# Usage

``` javascript
var isValidJavaIdentifier = require('valid-java-identifier');

isValidJavaIdentifier('mySuperClass'); // returns true
isValidJavaIdentifier('123Abc'); // returns false
```

# Tests

```
npm test
```
