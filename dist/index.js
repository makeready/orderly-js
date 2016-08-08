!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Orderly",[],t):"object"==typeof exports?exports.Orderly=t():e.Orderly=t()}(this,function(){return function(e){function __webpack_require__(n){if(t[n])return t[n].exports;var r=t[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,__webpack_require__),r.loaded=!0,r.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.p="",__webpack_require__(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";e.exports=n(2)},function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function Orderly(){function ajax(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=new o["default"](e,t),r=new a["default"]({action:n.execute,priority:t.priority});return u.add(r),n}function get(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return ajax(e,Object.assign(t,{method:"GET"}))}function post(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return ajax(e,Object.assign(t,{method:"POST"}))}function put(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return ajax(e,Object.assign(t,{method:"PUT"}))}function del(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return ajax(e,Object.assign(t,{method:"DELETE"}))}var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.debug,n=e.max,i=e.sleep;(0,r.setMode)(t);var u=new c["default"],s=new l["default"](u,{max:n,sleep:i});return{ajax:ajax,get:get,post:post,put:put,del:del,queue:u,worker:s}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=n(4),o=_interopRequireDefault(i),u=n(9),a=_interopRequireDefault(u),s=n(10),c=_interopRequireDefault(s),f=n(13),l=_interopRequireDefault(f);t["default"]=Orderly},function(e,t){"use strict";function setMode(e){return r=e}function getMode(){return r}function log(e,t){var i=arguments.length<=2||void 0===arguments[2]?{}:arguments[2];if(r){var o=Object.keys(i).reduce(function(e,t){var r=i[t];return"object"===("undefined"==typeof r?"undefined":n(r))&&(r=JSON.stringify(r)),e+" "+t+":"+r},e);o=o+" "+t,console.log(o)}}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},r=!1;t.setMode=setMode,t.getMode=getMode,t.log=log},function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _objectWithoutProperties(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function logAction(e,t,n){(0,c.log)("Ajax",e,{url:t.key,id:t.id,priority:n})}function anyConditionMet(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.some(function(e){return e.apply(void 0,n)})}function shouldSkip(e,t,n){return e!==!1&&(anyConditionMet(t)||n.sentIsOutdated())}function shouldCancel(e,t,n,r,i){return anyConditionMet(t,e)||n.receivedIsOutdated()?(logAction("CANCELLED",n,r),e=o({},e,{status:y}),i(e)):void logAction("RECEIVED",n,r)}function insertVersion(e,t,n){e[t]=n}function initHeader(e,t,n){return new Headers(o({},e,(0,a.requestContentType)(t,n)))}function initBody(e,t){return!e||"object"!==("undefined"==typeof e?"undefined":i(e))&&"json"!==t?e:JSON.stringify(e)}function initRequest(e,t){var n=t.headers,r=t.body,i=t.type,u=_objectWithoutProperties(t,["headers","body","type"]);return n=initHeader(n,r,i),r=initBody(r,i),new Request(e,o({},u,{headers:n,body:r}))}function initAction(e,t,n){var r=t.type,i=t.priority,o=t.skip;return function(t,s){return function(c){return shouldSkip(o,c,n)?(logAction("SKIPPED",n,i),s({status:p})):(n.sent(),logAction("SENT",n,i),fetch(e).then((0,u.proxy)(shouldCancel,c,n,i,s)).then((0,u.proxy)(n.received)).then((0,u.proxy)(insertVersion,d,n)).then((0,a.parseResponse)(r,t,s))["catch"](s))}}}function initExecute(e,t){return function(){return e(t)}}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(5),a=n(6),s=n(7),c=n(3),f=n(8),l=_interopRequireDefault(f),p="skipped",y="cancelled",d="_v",h=function(){function Ajax(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=n.version,i=_objectWithoutProperties(n,["version"]);_classCallCheck(this,Ajax),r=new l["default"]((0,s.filterParams)(e),r);var o=initRequest(e,i),u=initAction(o,i,r);this.conditions=[],this.q=new Promise(function(e,n){u=u(e,n),t.execute=initExecute(u,t.conditions)}),logAction("CREATED",r,i.priority)}return r(Ajax,[{key:"cancel",value:function(e){return this.conditions.push(e),this}},{key:"catch",value:function(e){return this.q=this.q["catch"](e),this}},{key:"fail",value:function(e){return this.then((0,u.onFail)(e))}},{key:"success",value:function(e){return this.then((0,u.onSuccess)(e))}},{key:"then",value:function(e){return this.q=this.q.then(e),this}}]),Ajax}();t["default"]=h},function(e,t){"use strict";function proxy(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(t){return e.apply(void 0,[t].concat(n)),t}}function proxyWithCondition(e,t){return function(n){return t(n)&&(n=e(n)),n}}function onFail(e,t){return proxyWithCondition(e,function(e){return e.status>=400})}function onSuccess(e,t){return proxyWithCondition(e,function(e){return e.status<400})}Object.defineProperty(t,"__esModule",{value:!0}),t.proxy=proxy,t.proxyWithCondition=proxyWithCondition,t.onFail=onFail,t.onSuccess=onSuccess},function(e,t){"use strict";function bodyContainsJson(e){var t=e.headers.get("Content-Type");return t&&t.includes(r.json)}function parseResponse(e,t,n){return function(r){!e&&bodyContainsJson(r)&&(e="json"),r[e]().then(function(e){r.data=e,t(r)})["catch"](n)}}function accepts(e){if("json"===e)return{Accept:r.json}}function contentType(e,t){if(e&&"object"===("undefined"==typeof e?"undefined":n(e))||"json"===t)return{"Content-Type":r.json}}function requestContentType(e,t){return Object.assign({},accepts(t),contentType(e,t))}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},r={json:"application/json"};t.parseResponse=parseResponse,t.requestContentType=requestContentType},function(e,t){"use strict";function filterParams(e){return e.toString().replace(n,"")}Object.defineProperty(t,"__esModule",{value:!0});var n=new RegExp(/\?.*$/);t.filterParams=filterParams},function(e,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function initValue(){return{counter:0,sent:0,received:0}}Object.defineProperty(t,"__esModule",{value:!0});var n=function Version(e){var t=arguments.length<=1||void 0===arguments[1]||arguments[1];_classCallCheck(this,Version),r.call(this),this.check=t,this.key=e,this.id=Version.inc(e)};n.map={},n.get=function(e){return this.map[e]||(this.map[e]=initValue())},n.inc=function(e){return this.get(e).counter+=1};var r=function(){var e=this;this.sentIsOutdated=function(){return e.check&&n.get(e.key).sent>e.id},this.receivedIsOutdated=function(){return e.check&&n.get(e.key).received>e.id},this.sent=function(){var t=n.get(e.key);if(e.id>t.sent)return t.sent=e.id},this.received=function(){var t=n.get(e.key);if(e.id>t.received)return t.received=e.id}};t["default"]=n},function(e,t){"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function step(r,i){try{var o=t[r](i),u=o.value}catch(a){return void n(a)}return o.done?void e(u):Promise.resolve(u).then(function(e){return step("next",e)},function(e){return step("throw",e)})}return step("next")})}}function _objectWithoutProperties(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function Job(){var e=this,t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=t.action,r=t.priority,i=void 0===r?0:r,o=_objectWithoutProperties(t,["action","priority"]);_classCallCheck(this,Job),this.execute=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function _callee(t){var n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.action();case 2:return n=r.sent,t&&"function"==typeof t&&t(n),r.abrupt("return",n);case 5:case"end":return r.stop()}},_callee,e)}));return function(e){return t.apply(this,arguments)}}(),this.action=n,this.priority=i,this.options=o};t["default"]=n},function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function defaultStrategy(e,t){var n=e.priority,r=t.priority;return void 0===r||n>r}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(11),u=_interopRequireDefault(o),a=n(3),s=function(){function Queue(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.strategy,n=void 0===t?defaultStrategy:t;_classCallCheck(this,Queue),this.queue=new u["default"](n)}return i(Queue,[{key:"add",value:function(e){if("object"===("undefined"==typeof e?"undefined":r(e))&&"function"==typeof e.execute)return this.queue.add(e),e;throw new Error("trying to insert an invalid job",e)}},{key:"get",value:function(){return(0,a.log)("Queue","getting a job",{size:this.size()}),this.queue.poll()}},{key:"isEmpty",value:function(){return this.queue.isEmpty()}},{key:"size",value:function(){return this.queue.size}},{key:"cleanup",value:function(){return this.queue.trim()}}]),Queue}();t["default"]=s},function(e,t,n){(function(e){"use strict";function FastPriorityQueue(e){this.array=[],this.size=0,this.compare=e||t}var t=function(e,t){return e<t};FastPriorityQueue.prototype.add=function(e){var t=this.size;for(this.array[this.size++]=e;t>0;){var n=t-1>>1,r=this.array[n];if(!this.compare(e,r))break;this.array[t]=r,t=n}this.array[t]=e},FastPriorityQueue.prototype.heapify=function(e){this.array=e,this.size=e.length;for(var t=this.size>>1;t>=0;t--)this._percolateDown(t)},FastPriorityQueue.prototype._percolateUp=function(e){for(var t=this.array[e];e>0;){var n=e-1>>1,r=this.array[n];if(!this.compare(t,r))break;this.array[e]=r,e=n}this.array[e]=t},FastPriorityQueue.prototype._percolateDown=function(e){for(var t=this.size,n=this.size>>>1,r=this.array[e];e<n;){var i=(e<<1)+1,o=i+1,u=this.array[i];if(o<t&&this.compare(this.array[o],u)&&(i=o,u=this.array[o]),!this.compare(u,r))break;this.array[e]=u,e=i}this.array[e]=r},FastPriorityQueue.prototype.peek=function(e){return this.array[0]},FastPriorityQueue.prototype.poll=function(e){var t=this.array[0];return this.size>1?(this.array[0]=this.array[--this.size],this._percolateDown(0)):--this.size,t},FastPriorityQueue.prototype.trim=function(){this.array=this.array.slice(0,this.size)},FastPriorityQueue.prototype.isEmpty=function(e){return 0==this.size};var r=function(){var e=new FastPriorityQueue(function(e,t){return e<t});for(e.add(1),e.add(0),e.add(5),e.add(4),e.add(3);!e.isEmpty();)console.log(e.poll())};n.c[0]===e&&r(),e.exports=FastPriorityQueue}).call(t,n(12)(e))},function(e,t){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function isFree(e,t){return e<=t}function hasJob(e){return!e.isEmpty()}function dispatch(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return setTimeout.apply(void 0,[e,0].concat(n))}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=function(){function Worker(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=t.sleep,r=void 0===n?50:n,o=t.max,u=void 0===o?8:o;_classCallCheck(this,Worker),i.call(this),this.pending=0,this["continue"]=!0,this.start(e,r,u)}return n(Worker,[{key:"stop",value:function(){this["continue"]=!1,clearTimeout(this.setTimeout)}}]),Worker}(),i=function(){var e=this;this.start=function(t,n,r){for(;e["continue"]&&isFree(e.pending,r)&&hasJob(t);){e.pending+=1;var i=t.get();dispatch(i.execute,e.complete)}e["continue"]&&(t.cleanup(),e.setTimeout=setTimeout(e.start,n,t,n,r))},this.complete=function(){e.pending-=1}};t["default"]=r}])});
//# sourceMappingURL=index.js.map