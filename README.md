<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# sqrt1pm1

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute `sqrt( 1 + x ) - 1`.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-sqrt1pm1
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var sqrt1pm1 = require( '@stdlib/math-base-special-sqrt1pm1' );
```

#### sqrt1pm1( x )

Computes `sqrt( 1 + x ) - 1` more accurately for small `x`. 

```javascript
var v = sqrt1pm1( 3.0 );
// returns 1.0

v = sqrt1pm1( 0.5 );
// returns ~0.225

v = sqrt1pm1( 0.02 );
// returns ~0.01

v = sqrt1pm1( -0.5 );
// returns ~-0.293

v = sqrt1pm1( -1.1 );
// returns NaN

v = sqrt1pm1( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var sqrt1pm1 = require( '@stdlib/math-base-special-sqrt1pm1' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu() * 100.0 );
    console.log( 'sqrt(1+%d) - 1 = %d', x, sqrt1pm1( x ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/sqrt1pm1.h"
```

#### stdlib_base_sqrt1pm1( x )

Computes `sqrt( 1 + x ) - 1` more accurately for small `x`. 

```c
double out = stdlib_base_sqrt1pm1( 3.0 );
// returns 1.0

out = stdlib_base_sqrt1pm1( 0.5 );
// returns ~0.225
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_sqrt1pm1( const double x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/sqrt1pm1.h"
#include <stdlib.h>
#include <stdio.h>

int main() {
    double x;
    double v;
    int i;
    
    for ( i = 0; i < 100; i++ ) {
        x = ( (double)rand() / (double)RAND_MAX ) * 100.0;
        v = stdlib_base_sqrt1pm1( x );
        printf( "sqrt(1+%lf) - 1 = %lf\n", x, v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/sqrt`][@stdlib/math/base/special/sqrt]</span><span class="delimiter">: </span><span class="description">compute the principal square root of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-sqrt1pm1.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-sqrt1pm1

[test-image]: https://github.com/stdlib-js/math-base-special-sqrt1pm1/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-sqrt1pm1/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-sqrt1pm1/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-sqrt1pm1?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-sqrt1pm1.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-sqrt1pm1/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-sqrt1pm1/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-sqrt1pm1/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-sqrt1pm1/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-sqrt1pm1/blob/main/branches.md

<!-- <related-links> -->

[@stdlib/math/base/special/sqrt]: https://github.com/stdlib-js/math-base-special-sqrt

<!-- </related-links> -->

</section>

<!-- /.links -->
