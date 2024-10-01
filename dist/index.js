"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=u(function(f,t){
var s=require('@stdlib/math-base-assert-is-nan/dist'),a=require('@stdlib/math-base-special-expm1/dist'),q=require('@stdlib/math-base-special-log1p/dist'),n=require('@stdlib/math-base-special-sqrt/dist'),p=require('@stdlib/math-base-special-abs/dist');function v(r){return s(r)?NaN:p(r)>.75?n(1+r)-1:a(q(r)/2)}t.exports=v
});var o=i();module.exports=o;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
