!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).iconfont={})}(this,(function(t){"use strict";function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=e((function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)})),r=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t},o=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},i={}.toString,c=function(t){return i.call(t).slice(8,-1)},a=e((function(t){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)})),u=(a.version,e((function(t){var e=n["__core-js_shared__"]||(n["__core-js_shared__"]={});(t.exports=function(t,n){return e[t]||(e[t]=void 0!==n?n:{})})("versions",[]).push({version:a.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}))),s=0,f=Math.random(),l=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++s+f).toString(36))},h=e((function(t){var e=u("wks"),r=n.Symbol,o="function"==typeof r;(t.exports=function(t){return e[t]||(e[t]=o&&r[t]||(o?r:l)("Symbol."+t))}).store=e})),p=h("toStringTag"),v="Arguments"==c(function(){return arguments}()),d=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),p))?n:v?c(e):"Object"==(r=c(e))&&"function"==typeof e.callee?"Arguments":r},y=function(t){return"object"==typeof t?null!==t:"function"==typeof t},m=function(t){if(!y(t))throw TypeError(t+" is not an object!");return t},g=function(t){try{return!!t()}catch(t){return!0}},_=!g((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),w=n.document,x=y(w)&&y(w.createElement),b=function(t){return x?w.createElement(t):{}},j=!_&&!g((function(){return 7!=Object.defineProperty(b("div"),"a",{get:function(){return 7}}).a})),E=Object.defineProperty,S={f:_?Object.defineProperty:function(t,e,n){if(m(t),e=function(t,e){if(!y(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!y(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}(e,!0),m(n),j)try{return E(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},P=_?function(t,e,n){return S.f(t,e,function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}(1,n))}:function(t,e,n){return t[e]=n,t},L={}.hasOwnProperty,k=function(t,e){return L.call(t,e)},O=u("native-function-to-string",Function.toString),F=e((function(t){var e=l("src"),r=(""+O).split("toString");a.inspectSource=function(t){return O.call(t)},(t.exports=function(t,o,i,c){var a="function"==typeof i;a&&(k(i,"name")||P(i,"name",o)),t[o]!==i&&(a&&(k(i,e)||P(i,e,t[o]?""+t[o]:r.join(String(o)))),t===n?t[o]=i:c?t[o]?t[o]=i:P(t,o,i):(delete t[o],P(t,o,i)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[e]||O.call(this)}))})),T=function(t,e,r){var i,c,u,s,f=t&T.F,l=t&T.G,h=t&T.S,p=t&T.P,v=t&T.B,d=l?n:h?n[e]||(n[e]={}):(n[e]||{}).prototype,y=l?a:a[e]||(a[e]={}),m=y.prototype||(y.prototype={});for(i in l&&(r=e),r)u=((c=!f&&d&&void 0!==d[i])?d:r)[i],s=v&&c?o(u,n):p&&"function"==typeof u?o(Function.call,u):u,d&&F(d,i,u,t&T.U),y[i]!=u&&P(y,i,s),p&&m[i]!=u&&(m[i]=u)};n.core=a,T.F=1,T.G=2,T.S=4,T.P=8,T.B=16,T.W=32,T.U=64,T.R=128;var M,R,N,A=T,G=function(t,e,n,r){try{return r?e(m(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&m(o.call(t)),e}},z={},C=h("iterator"),I=Array.prototype,W=function(t){return void 0!==t&&(z.Array===t||I[C]===t)},B=Math.ceil,U=Math.floor,q=Math.min,D=function(t){return t>0?q(function(t){return isNaN(t=+t)?0:(t>0?U:B)(t)}(t),9007199254740991):0},K=h("iterator"),H=a.getIteratorMethod=function(t){if(null!=t)return t[K]||t["@@iterator"]||z[d(t)]},Y=e((function(t){var e={},n={},r=t.exports=function(t,r,i,c,a){var u,s,f,l,h=a?function(){return t}:H(t),p=o(i,c,r?2:1),v=0;if("function"!=typeof h)throw TypeError(t+" is not iterable!");if(W(h)){for(u=D(t.length);u>v;v++)if((l=r?p(m(s=t[v])[0],s[1]):p(t[v]))===e||l===n)return l}else for(f=h.call(t);!(s=f.next()).done;)if((l=G(f,p,s.value,r))===e||l===n)return l};r.BREAK=e,r.RETURN=n})),J=h("species"),Q=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)},V=n.document,X=V&&V.documentElement,Z=n.process,$=n.setImmediate,tt=n.clearImmediate,et=n.MessageChannel,nt=n.Dispatch,rt=0,ot={},it=function(){var t=+this;if(ot.hasOwnProperty(t)){var e=ot[t];delete ot[t],e()}},ct=function(t){it.call(t.data)};$&&tt||($=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return ot[++rt]=function(){Q("function"==typeof t?t:Function(t),e)},M(rt),rt},tt=function(t){delete ot[t]},"process"==c(Z)?M=function(t){Z.nextTick(o(it,t,1))}:nt&&nt.now?M=function(t){nt.now(o(it,t,1))}:et?(N=(R=new et).port2,R.port1.onmessage=ct,M=o(N.postMessage,N,1)):n.addEventListener&&"function"==typeof postMessage&&!n.importScripts?(M=function(t){n.postMessage(t+"","*")},n.addEventListener("message",ct,!1)):M="onreadystatechange"in b("script")?function(t){X.appendChild(b("script")).onreadystatechange=function(){X.removeChild(this),it.call(t)}}:function(t){setTimeout(o(it,t,1),0)});var at={set:$,clear:tt},ut=at.set,st=n.MutationObserver||n.WebKitMutationObserver,ft=n.process,lt=n.Promise,ht="process"==c(ft);function pt(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)}var vt={f:function(t){return new pt(t)}},dt=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}},yt=n.navigator,mt=yt&&yt.userAgent||"",gt=S.f,_t=h("toStringTag"),wt=h("species"),xt=h("iterator"),bt=!1;try{var jt=[7][xt]();jt.return=function(){bt=!0},Array.from(jt,(function(){throw 2}))}catch(t){}var Et,St,Pt,Lt,kt,Ot,Ft,Tt,Mt=at.set,Rt=function(){var t,e,r,o=function(){var n,o;for(ht&&(n=ft.domain)&&n.exit();t;){o=t.fn,t=t.next;try{o()}catch(n){throw t?r():e=void 0,n}}e=void 0,n&&n.enter()};if(ht)r=function(){ft.nextTick(o)};else if(!st||n.navigator&&n.navigator.standalone)if(lt&&lt.resolve){var i=lt.resolve(void 0);r=function(){i.then(o)}}else r=function(){ut.call(n,o)};else{var c=!0,a=document.createTextNode("");new st(o).observe(a,{characterData:!0}),r=function(){a.data=c=!c}}return function(n){var o={fn:n,next:void 0};e&&(e.next=o),t||(t=o,r()),e=o}}(),Nt=n.TypeError,At=n.process,Gt=At&&At.versions,zt=Gt&&Gt.v8||"",Ct=n.Promise,It="process"==d(At),Wt=function(){},Bt=St=vt.f,Ut=!!function(){try{var t=Ct.resolve(1),e=(t.constructor={})[h("species")]=function(t){t(Wt,Wt)};return(It||"function"==typeof PromiseRejectionEvent)&&t.then(Wt)instanceof e&&0!==zt.indexOf("6.6")&&-1===mt.indexOf("Chrome/66")}catch(t){}}(),qt=function(t){var e;return!(!y(t)||"function"!=typeof(e=t.then))&&e},Dt=function(t,e){if(!t._n){t._n=!0;var n=t._c;Rt((function(){for(var r=t._v,o=1==t._s,i=0,c=function(e){var n,i,c,a=o?e.ok:e.fail,u=e.resolve,s=e.reject,f=e.domain;try{a?(o||(2==t._h&&Yt(t),t._h=1),!0===a?n=r:(f&&f.enter(),n=a(r),f&&(f.exit(),c=!0)),n===e.promise?s(Nt("Promise-chain cycle")):(i=qt(n))?i.call(n,u,s):u(n)):s(r)}catch(t){f&&!c&&f.exit(),s(t)}};n.length>i;)c(n[i++]);t._c=[],t._n=!1,e&&!t._h&&Kt(t)}))}},Kt=function(t){Mt.call(n,(function(){var e,r,o,i=t._v,c=Ht(t);if(c&&(e=dt((function(){It?At.emit("unhandledRejection",i,t):(r=n.onunhandledrejection)?r({promise:t,reason:i}):(o=n.console)&&o.error&&o.error("Unhandled promise rejection",i)})),t._h=It||Ht(t)?2:1),t._a=void 0,c&&e.e)throw e.v}))},Ht=function(t){return 1!==t._h&&0===(t._a||t._c).length},Yt=function(t){Mt.call(n,(function(){var e;It?At.emit("rejectionHandled",t):(e=n.onrejectionhandled)&&e({promise:t,reason:t._v})}))},Jt=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),Dt(e,!0))},Qt=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw Nt("Promise can't be resolved itself");(e=qt(t))?Rt((function(){var r={_w:n,_d:!1};try{e.call(t,o(Qt,r,1),o(Jt,r,1))}catch(t){Jt.call(r,t)}})):(n._v=t,n._s=1,Dt(n,!1))}catch(t){Jt.call({_w:n,_d:!1},t)}}};Ut||(Ct=function(t){!function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!")}(this,Ct,"Promise","_h"),r(t),Et.call(this);try{t(o(Qt,this,1),o(Jt,this,1))}catch(t){Jt.call(this,t)}},(Et=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=function(t,e,n){for(var r in e)F(t,r,e[r],n);return t}(Ct.prototype,{then:function(t,e){var n,o,i,c=Bt((n=Ct,void 0===(i=m(this).constructor)||null==(o=m(i)[J])?n:r(o)));return c.ok="function"!=typeof t||t,c.fail="function"==typeof e&&e,c.domain=It?At.domain:void 0,this._c.push(c),this._a&&this._a.push(c),this._s&&Dt(this,!1),c.promise},catch:function(t){return this.then(void 0,t)}}),Pt=function(){var t=new Et;this.promise=t,this.resolve=o(Qt,t,1),this.reject=o(Jt,t,1)},vt.f=Bt=function(t){return t===Ct||t===Lt?new Pt(t):St(t)}),A(A.G+A.W+A.F*!Ut,{Promise:Ct}),Ot="Promise",(kt=Ct)&&!k(kt=Ft?kt:kt.prototype,_t)&&gt(kt,_t,{configurable:!0,value:Ot}),Tt=n["Promise"],_&&Tt&&!Tt[wt]&&S.f(Tt,wt,{configurable:!0,get:function(){return this}}),Lt=a.Promise,A(A.S+A.F*!Ut,"Promise",{reject:function(t){var e=Bt(this);return(0,e.reject)(t),e.promise}}),A(A.S+A.F*!Ut,"Promise",{resolve:function(t){return function(t,e){if(m(t),y(e)&&e.constructor===t)return e;var n=vt.f(t);return(0,n.resolve)(e),n.promise}(this,t)}}),A(A.S+A.F*!(Ut&&function(t,e){if(!e&&!bt)return!1;var n=!1;try{var r=[7],o=r[xt]();o.next=function(){return{done:n=!0}},r[xt]=function(){return o},t(r)}catch(t){}return n}((function(t){Ct.all(t).catch(Wt)}))),"Promise",{all:function(t){var e=this,n=Bt(e),r=n.resolve,o=n.reject,i=dt((function(){var n=[],i=0,c=1;Y(t,!1,(function(t){var a=i++,u=!1;n.push(void 0),c++,e.resolve(t).then((function(t){u||(u=!0,n[a]=t,--c||r(n))}),o)})),--c||r(n)}));return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=Bt(e),r=n.reject,o=dt((function(){Y(t,!1,(function(t){e.resolve(t).then(n.resolve,r)}))}));return o.e&&r(o.v),n.promise}});var Vt={};Vt[h("toStringTag")]="z",Vt+""!="[object z]"&&F(Object.prototype,"toString",(function(){return"[object "+d(this)+"]"}),!0);var Xt=e((function(t){var e=function(t){var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function a(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),c=new b(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return E()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=_(c,n);if(a){if(a===s)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var f=u(t,e,n);if("normal"===f.type){if(r=n.done?"completed":"suspendedYield",f.arg===s)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(r="completed",n.method="throw",n.arg=f.arg)}}}(t,n,c),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=a;var s={};function f(){}function l(){}function h(){}var p={};p[o]=function(){return this};var v=Object.getPrototypeOf,d=v&&v(v(j([])));d&&d!==e&&n.call(d,o)&&(p=d);var y=h.prototype=f.prototype=Object.create(p);function m(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var r;this._invoke=function(o,i){function c(){return new e((function(r,c){!function r(o,i,c,a){var s=u(t[o],t,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,c,a)}),(function(t){r("throw",t,c,a)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,a)}))}a(s.arg)}(o,i,r,c)}))}return r=r?r.then(c,c):c()}}function _(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return l.prototype=y.constructor=h,h.constructor=l,h[c]=l.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===l||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},m(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new g(a(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},m(y),y[c]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}));function Zt(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}var $t=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){Zt(i,r,o,c,a,"next",t)}function a(t){Zt(i,r,o,c,a,"throw",t)}c(void 0)}))}};var te=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function ee(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var ne=function(t,e,n){return e&&ee(t.prototype,e),n&&ee(t,n),t},re=require("request"),oe=require("compressing"),ie=require("path"),ce=require("fs"),ae=function(){function t(e){te(this,t),this.url=e.url,this.toPath=e.toPath,this.cookie=e.cookie}var e,n;return ne(t,[{key:"handleProcess",value:(n=$t(Xt.mark((function t(){var e;return Xt.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getResponseBody(this.url);case 2:return e=t.sent,t.next=5,this.copyFile(e,this.toPath);case 5:return t.next=7,this.deleteFolderRecursive(ie.join(__dirname,"./iconfont"));case 7:return t.next=9,this.deleteFolderRecursive(ie.join(__dirname,"./iconfont.zip"));case 9:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"getResponseBody",value:function(t){var e=this;return new Promise((function(n){var r={url:t,encoding:null,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11",cookie:e.cookie},debug:!1,maxRedirects:5,followRedirect:!1,timeout:1e4};re(r,(function(t,e,r){return n(r)}))}))}},{key:"copyFile",value:(e=$t(Xt.mark((function t(e,n){var r;return Xt.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return ce.writeFileSync(ie.join(__dirname,"./iconfont.zip"),e),t.next=3,oe.zip.uncompress(ie.join(__dirname,"./iconfont.zip"),ie.join(__dirname,"./iconfont"));case 3:return r=ce.readdirSync(ie.join(__dirname,"./iconfont")),ce.readdirSync(ie.join(__dirname,"./iconfont/".concat(r[0]))).forEach((function(t){ce.copyFileSync(ie.join(__dirname,"./iconfont/".concat(r[0],"/").concat(t)),"".concat(n,"/").concat(t))})),t.abrupt("return",Promise.resolve());case 7:case"end":return t.stop()}}),t)}))),function(t,n){return e.apply(this,arguments)})},{key:"deleteFolderRecursive",value:function(t){var e=this;ce.existsSync(t)&&(ce.statSync(t).isDirectory()?(ce.readdirSync(t).forEach((function(n){var r=t+"/"+n;ce.statSync(r).isDirectory()?e.deleteFolderRecursive.call(this,r):ce.unlinkSync(r)})),ce.rmdirSync(t)):ce.unlinkSync(t))}}]),t}();t.Iconfont=ae,Object.defineProperty(t,"__esModule",{value:!0})}));