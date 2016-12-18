# `Array.prototype.fill` polyfill

ES6 Array.prototype.fill polyfill, taken from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill).

[![Build Status](https://travis-ci.org/ahutchings/Array.prototype.fill.svg?branch=master)](https://travis-ci.org/ahutchings/Array.prototype.fill)

## Usage

```javascript
require('array.prototype.fill');

[1, 2, 3].fill(4)               // [4, 4, 4]
[1, 2, 3].fill(4, 1)            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2)         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1)         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2)       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN)     // [1, 2, 3]
[].fill.call({ length: 3 }, 4)  // {0: 4, 1: 4, 2: 4, length: 3}
```

## Acknowledgements

Implementation by contributors to the MDN article on `Array.prototype.fill`:

Mingun, fscholz, ziyunfei, sbruchmann, rwaldron, quentin.lamamy

## License

The MIT License (MIT)

Copyright (c) 2014 Andrew Hutchings <https://andrewhutchings.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
