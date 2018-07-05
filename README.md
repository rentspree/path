# rentspree-path

[![Generated with nod](https://img.shields.io/badge/generator-nod-2196F3.svg?style=flat-square)](https://github.com/diegohaz/nod)
[![NPM version](https://img.shields.io/npm/v/rentspree-path.svg?style=flat-square)](https://npmjs.org/package/rentspree-path)
[![Build Status](https://img.shields.io/travis/rentspree/path/master.svg?style=flat-square)](https://travis-ci.org/rentspree/path) [![Coverage Status](https://img.shields.io/codecov/c/github/rentspree/path/master.svg?style=flat-square)](https://codecov.io/gh/rentspree/path/branch/master)

URL path params/query resolve with ease

## Install

    $ npm install --save rentspree-path

## Usage

```js
import myModule from "rentspree-path";

myModule();
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [ParamInterpolatedError](#paraminterpolatederror)
-   [buildPath](#buildpath)
-   [setErrorClass](#seterrorclass)
-   [query](#query)
    -   [parse](#parse)
    -   [stringify](#stringify)

### ParamInterpolatedError

Default error class

### buildPath

Build path from path regexp and params and optionally append query suffix to the path

**Parameters**

-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the path regex
-   `params` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** the params to interpolate in path
-   `query` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)?** the query object to be converted to string

**Examples**

```javascript
// return /api/user/123456?name=John&lastName=Doe
buildPath("/api/user/:id", {id: "123456"}, {name: "John", lastName: "Doe"}
```

```javascript
// return /content/post/this-is-a-good-post
buildPath("/content/post/:slug", {slug: "this-is-a-good-post"})
```

Returns **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | null)** the built path

### setErrorClass

Set the Error class which would be thrown when buildPath function failed

**Parameters**

-   `error` **Class** an Error class which would be thrown

**Examples**

```javascript
// if you set
setErrorClass(SomeClass)
// when the buildPath function failed it will throw something like this
throw new SomeClass()
```

### query

#### parse

This method parse a query string into object

**Parameters**

-   `str` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the string to parse (optional, default `""`)

**Examples**

```javascript
// returns {str1: "hello", str2: "hola"}
parse("?str1=hello&str2=hola")
```

```javascript
// returns {name: "John", lastName: "Doe"}
parse("name=John&lastName=Doe")
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** the query object parsed from query string

#### stringify

This method stringify object into query string

**Parameters**

-   `obj` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** the object to be stringify (optional, default `{}`)

**Examples**

```javascript
// returns "?name=John&lastName=Doe"
stringify({name: "John", lastName: "Doe"})
```

Returns **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the stringified query result

## License

MIT © [Potsawee Vechpanich](https://github.com/rentspree)
