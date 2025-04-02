// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,o=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,f="function"==typeof i?i.toStringTag:"",u=r&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,i,u,a;if(null==n)return e.call(n);r=n[f],a=f,t=null!=(u=n)&&o.call(u,a);try{n[f]=void 0}catch(t){return e.call(n)}return i=e.call(n),t?n[f]=r:delete n[f],i}:function(n){return e.call(n)},a="function"==typeof Uint32Array,y="function"==typeof Uint32Array?Uint32Array:null,c="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var n,t,r;if("function"!=typeof y)return!1;try{t=new y(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(a&&r instanceof Uint32Array||"[object Uint32Array]"===u(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?c:function(){throw new Error("not implemented")};var l,p=t,A="function"==typeof Float64Array,b="function"==typeof Float64Array?Float64Array:null,v="function"==typeof Float64Array?Float64Array:void 0;l=function(){var n,t,r;if("function"!=typeof b)return!1;try{t=new b([1,3.14,-3.14,NaN]),r=t,n=(A&&r instanceof Float64Array||"[object Float64Array]"===u(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?v:function(){throw new Error("not implemented")};var d,m=l,w="function"==typeof Uint8Array,U="function"==typeof Uint8Array?Uint8Array:null,s="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var n,t,r;if("function"!=typeof U)return!1;try{t=new U(t=[1,3.14,-3.14,256,257]),r=t,n=(w&&r instanceof Uint8Array||"[object Uint8Array]"===u(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?s:function(){throw new Error("not implemented")};var h,N=d,I="function"==typeof Uint16Array,F="function"==typeof Uint16Array?Uint16Array:null,S="function"==typeof Uint16Array?Uint16Array:void 0;h=function(){var n,t,r;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,65536,65537]),r=t,n=(I&&r instanceof Uint16Array||"[object Uint16Array]"===u(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?S:function(){throw new Error("not implemented")};var T,g={uint16:h,uint8:N};(T=new g.uint16(1))[0]=4660;var j=52===new g.uint8(T.buffer)[0],E=!0===j?1:0,O=new m(1),H=new p(O.buffer);function G(n){return O[0]=n,H[E]}var q,x,L=!0===j?1:0,M=new m(1),P=new p(M.buffer);function V(n,t){return M[0]=n,P[L]=t>>>0,M[0]}!0===j?(q=1,x=0):(q=0,x=1);var W={HIGH:q,LOW:x},Y=new m(1),_=new p(Y.buffer),k=W.HIGH,z=W.LOW,B=Number.POSITIVE_INFINITY,C=Number.NEGATIVE_INFINITY,D=1023,J=.34657359027997264,K=709.782712893384,Q=.6931471803691238,R=1.9082149292705877e-10,X=1.4426950408889634,Z=38.816242111356935,$=1.0397207708399179;function nn(t){var r,e,o,i,f,u,a,y,c,l,p,A,b,v,d;if(t===B||n(t))return t;if(t===C)return-1;if(0===t)return t;if(t<0?(o=!0,y=-t):(o=!1,y=t),y>=Z){if(o)return-1;if(y>=K)return B}if(u=0|G(y),y>J)y<$?o?(i=t+Q,f=-R,b=-1):(i=t-Q,f=R,b=1):(b=o?X*t-.5:X*t+.5,i=t-(p=b|=0)*Q,f=p*R),l=i-(t=i-f)-f;else{if(u<1016070144)return t;b=0}return a=1+(c=t*(r=.5*t))*function(n){return 0===n?-.03333333333333313:n*(.0015873015872548146+n*(n*(4008217827329362e-21+-2.0109921818362437e-7*n)-793650757867488e-19))-.03333333333333313}(c),A=c*((a-(p=3-a*r))/(6-t*p)),0===b?t-(t*A-c):(v=D+b<<20,d=0,_[k]=v,_[z]=d,e=Y[0],A=t*(A-l)-l,A-=c,-1===b?.5*(t-A)-.5:1===b?t<-.25?-2*(A-(t+.5)):1+2*(t-A):b<=-2||b>56?(y=1-(A-t),1024===b?y=V(y,i=G(y)+(b<<20)|0):y*=e,y-1):(p=1,b<20?y=(p=V(p,i=1072693248-(2097152>>b)|0))-(A-t):(y=t-(A+(p=V(p,i=D-b<<20|0))),y+=1),y*=e))}var tn=.6931471803691238,rn=1.9082149292705877e-10,en=.41421356237309503,on=-.2928932188134525,fn=1.862645149230957e-9,un=5551115123125783e-32,an=9007199254740992,yn=.6666666666666666,cn=Math.sqrt;return function(t){return n(t)?NaN:function(n){return Math.abs(n)}(t)>.75?cn(1+t)-1:nn(function(t){var r,e,o,i,f,u,a,y,c,l;if(t<-1||n(t))return NaN;if(-1===t)return C;if(t===B)return t;if(0===t)return t;if(l=1,(o=t<0?-t:t)<en){if(o<fn)return o<un?t:t-t*t*.5;t>on&&(l=0,i=t,e=1)}return 0!==l&&(o<an?(f=(l=((e=G(c=1+t))>>20)-D)>0?1-(c-t):t-(c-1),f/=c):(l=((e=G(c=t))>>20)-D,f=0),(e&=1048575)<434334?c=V(c,1072693248|e):(l+=1,c=V(c,1071644672|e),e=1048576-e>>2),i=c-1),r=.5*i*i,0===e?0===i?l*tn+(f+=l*rn):l*tn-((y=r*(1-yn*i))-(l*rn+f)-i):(y=(a=(u=i/(2+i))*u)*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))}(a),0===l?i-(r-u*(r+y)):l*tn-(r-(u*(r+y)+(l*rn+f))-i))}(t)/2)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).sqrt1pm1=t();
//# sourceMappingURL=index.js.map
