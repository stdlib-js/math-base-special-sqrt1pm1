"use strict";var s=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var i=s(function(m,t){
var a=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-expm1/dist'),n=require('@stdlib/math-base-special-log1p/dist'),p=require('@stdlib/math-base-special-sqrt/dist'),v=require('@stdlib/math-base-special-abs/dist');function o(r){return a(r)?NaN:v(r)>.75?p(1+r)-1:q(n(r)/2)}t.exports=o
});var c=i();module.exports=c;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
