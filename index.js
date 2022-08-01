// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,o=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol.toStringTag:"",f=r&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,f,u,a;if(null==n)return e.call(n);r=n[i],a=i,t=null!=(u=n)&&o.call(u,a);try{n[i]=void 0}catch(t){return e.call(n)}return f=e.call(n),t?n[i]=r:delete n[i],f}:function(n){return e.call(n)},u="function"==typeof Uint32Array,a="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var n,t,r;if("function"!=typeof a)return!1;try{t=new a(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(u&&r instanceof Uint32Array||"[object Uint32Array]"===f(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?y:function(){throw new Error("not implemented")};var c,l=t,p="function"==typeof Float64Array,A="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;c=function(){var n,t,r;if("function"!=typeof A)return!1;try{t=new A([1,3.14,-3.14,NaN]),r=t,n=(p&&r instanceof Float64Array||"[object Float64Array]"===f(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?b:function(){throw new Error("not implemented")};var m,v=c,U="function"==typeof Uint8Array,d="function"==typeof Uint8Array?Uint8Array:null,s="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var n,t,r;if("function"!=typeof d)return!1;try{t=new d(t=[1,3.14,-3.14,256,257]),r=t,n=(U&&r instanceof Uint8Array||"[object Uint8Array]"===f(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?s:function(){throw new Error("not implemented")};var w,h=m,N="function"==typeof Uint16Array,F="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;w=function(){var n,t,r;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,65536,65537]),r=t,n=(N&&r instanceof Uint16Array||"[object Uint16Array]"===f(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?I:function(){throw new Error("not implemented")};var S,T={uint16:w,uint8:h};(S=new T.uint16(1))[0]=4660;var g=52===new T.uint8(S.buffer)[0],j=!0===g?1:0,E=new v(1),O=new l(E.buffer);function q(n){return E[0]=n,O[j]}var x=!0===g?1:0,M=new v(1),P=new l(M.buffer);function V(n,t){return M[0]=n,P[x]=t>>>0,M[0]}var Y=Number.POSITIVE_INFINITY,_=Number.NEGATIVE_INFINITY,G=1023,k=.6931471803691238,z=1.9082149292705877e-10,B=1.4426950408889634,C=.6931471803691238,D=1.9082149292705877e-10,H=Math.sqrt;return function(t){return n(t)?NaN:function(n){return Math.abs(n)}(t)>.75?H(1+t)-1:function(t){var r,e,o,i,f,u,a,y,c,l,p,A;if(t===Y||n(t))return t;if(t===_)return-1;if(0===t)return t;if(t<0?(e=!0,a=-t):(e=!1,a=t),a>=38.816242111356935){if(e)return-1;if(a>=709.782712893384)return Y}if(f=0|q(a),a>.34657359027997264)a<1.0397207708399179?e?(o=t+k,i=-z,A=-1):(o=t-k,i=z,A=1):(A=e?B*t-.5:B*t+.5,o=t-(l=A|=0)*k,i=l*z),c=o-(t=o-i)-i;else{if(f<1016070144)return t;A=0}return u=1+(y=t*(r=.5*t))*function(n){return 0===n?-.03333333333333313:n*(.0015873015872548146+n*(n*(4008217827329362e-21+-2.0109921818362437e-7*n)-793650757867488e-19))-.03333333333333313}(y),p=y*((u-(l=3-u*r))/(6-t*l)),0===A?t-(t*p-y):(p=t*(p-c)-c,p-=y,-1===A?.5*(t-p)-.5:1===A?t<-.25?-2*(p-(t+.5)):1+2*(t-p):A<=-2||A>56?(a=V(a=1-(p-t),o=q(a)+(A<<20)|0))-1:(l=1,A<20?a=(l=V(l,o=1072693248-(2097152>>A)|0))-(p-t):(a=t-(p+(l=V(l,o=G-A<<20|0))),a+=1),V(a,o=q(a)+(A<<20)|0)))}(function(t){var r,e,o,i,f,u,a,y,c,l;if(t<-1||n(t))return NaN;if(-1===t)return _;if(t===Y)return t;if(0===t)return t;if(l=1,(o=t<0?-t:t)<.41421356237309503){if(o<1.862645149230957e-9)return o<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(l=0,i=t,e=1)}return 0!==l&&(o<9007199254740992?(f=(l=((e=q(c=1+t))>>20)-G)>0?1-(c-t):t-(c-1),f/=c):(l=((e=q(c=t))>>20)-G,f=0),(e&=1048575)<434334?c=V(c,1072693248|e):(l+=1,c=V(c,1071644672|e),e=1048576-e>>2),i=c-1),r=.5*i*i,0===e?0===i?l*C+(f+=l*D):l*C-((y=r*(1-.6666666666666666*i))-(l*D+f)-i):(y=(a=(u=i/(2+i))*u)*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))}(a),0===l?i-(r-u*(r+y)):l*C-(r-(u*(r+y)+(l*D+f))-i))}(t)/2)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).sqrt1pm1=t();
//# sourceMappingURL=index.js.map