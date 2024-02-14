// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol:void 0,i="function"==typeof o?o.toStringTag:"";var a=n&&"symbol"==typeof Symbol.toStringTag?function(r){var n,o,a,f,u;if(null==r)return t.call(r);o=r[i],u=i,n=null!=(f=r)&&e.call(f,u);try{r[i]=void 0}catch(n){return t.call(r)}return a=t.call(r),n?r[i]=o:delete r[i],a}:function(r){return t.call(r)},f="function"==typeof Uint32Array;var u="function"==typeof Uint32Array?Uint32Array:null;var y,c="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var r,n,t;if("function"!=typeof u)return!1;try{n=new u(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(f&&t instanceof Uint32Array||"[object Uint32Array]"===a(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?c:function(){throw new Error("not implemented")};var l=y,v="function"==typeof Float64Array;var p="function"==typeof Float64Array?Float64Array:null;var A,b="function"==typeof Float64Array?Float64Array:void 0;A=function(){var r,n,t;if("function"!=typeof p)return!1;try{n=new p([1,3.14,-3.14,NaN]),t=n,r=(v&&t instanceof Float64Array||"[object Float64Array]"===a(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?b:function(){throw new Error("not implemented")};var w=A,U="function"==typeof Uint8Array;var m="function"==typeof Uint8Array?Uint8Array:null;var I,N="function"==typeof Uint8Array?Uint8Array:void 0;I=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,256,257]),t=n,r=(U&&t instanceof Uint8Array||"[object Uint8Array]"===a(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?N:function(){throw new Error("not implemented")};var d=I,h="function"==typeof Uint16Array;var s="function"==typeof Uint16Array?Uint16Array:null;var F,S="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,t;if("function"!=typeof s)return!1;try{n=new s(n=[1,3.14,-3.14,65536,65537]),t=n,r=(h&&t instanceof Uint16Array||"[object Uint16Array]"===a(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,T={uint16:F,uint8:d};(E=new T.uint16(1))[0]=4660;var O=52===new T.uint8(E.buffer)[0],j=!0===O?1:0,g=new w(1),H=new l(g.buffer);function G(r){return g[0]=r,H[j]}var P,V,Y=!0===O?1:0,_=new w(1),L=new l(_.buffer);function M(r,n){return _[0]=r,L[Y]=n>>>0,_[0]}!0===O?(P=1,V=0):(P=0,V=1);var W={HIGH:P,LOW:V},q=new w(1),x=new l(q.buffer),k=W.HIGH,z=W.LOW;var B=Number.POSITIVE_INFINITY,C=Number.NEGATIVE_INFINITY;var D=.6931471803691238,J=1.9082149292705877e-10;function K(n){var t,e,o,i,a,f,u,y,c,l,v,p,A,b,w;if(n===B||r(n))return n;if(n===C)return-1;if(0===n)return n;if(n<0?(o=!0,y=-n):(o=!1,y=n),y>=38.816242111356935){if(o)return-1;if(y>=709.782712893384)return B}if(f=0|G(y),y>.34657359027997264)y<1.0397207708399179?o?(i=n+D,a=-J,A=-1):(i=n-D,a=J,A=1):(A=o?1.4426950408889634*n-.5:1.4426950408889634*n+.5,i=n-(v=A|=0)*D,a=v*J),l=i-(n=i-a)-a;else{if(f<1016070144)return n;A=0}return u=1+(c=n*(t=.5*n))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),p=c*((u-(v=3-u*t))/(6-n*v)),0===A?n-(n*p-c):(b=1023+A<<20,w=0,x[k]=b,x[z]=w,e=q[0],p=n*(p-l)-l,p-=c,-1===A?.5*(n-p)-.5:1===A?n<-.25?-2*(p-(n+.5)):1+2*(n-p):A<=-2||A>56?(y=1-(p-n),1024===A?y=M(y,i=G(y)+(A<<20)|0):y*=e,y-1):(v=1,A<20?y=(v=M(v,i=1072693248-(2097152>>A)|0))-(p-n):(y=n-(p+(v=M(v,i=1023-A<<20|0))),y+=1),y*=e))}var Q=Number.POSITIVE_INFINITY;var R=.6931471803691238,X=1.9082149292705877e-10;var Z=Math.sqrt;function $(n){return r(n)?NaN:function(r){return Math.abs(r)}(n)>.75?Z(1+n)-1:K(function(n){var t,e,o,i,a,f,u,y,c,l;if(n<-1||r(n))return NaN;if(-1===n)return C;if(n===Q)return n;if(0===n)return n;if(l=1,(o=n<0?-n:n)<.41421356237309503){if(o<1.862645149230957e-9)return o<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(l=0,i=n,e=1)}return 0!==l&&(o<9007199254740992?(a=(l=((e=G(c=1+n))>>20)-1023)>0?1-(c-n):n-(c-1),a/=c):(l=((e=G(c=n))>>20)-1023,a=0),(e&=1048575)<434334?c=M(c,1072693248|e):(l+=1,c=M(c,1071644672|e),e=1048576-e>>2),i=c-1),t=.5*i*i,0===e?0===i?l*R+(a+=l*X):l*R-((y=t*(1-.6666666666666666*i))-(l*X+a)-i):(y=(u=(f=i/(2+i))*f)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?i-(t-f*(t+y)):l*R-(t-(f*(t+y)+(l*X+a))-i))}(n)/2)}export{$ as default};
//# sourceMappingURL=mod.js.map
