!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Orderly",[],t):"object"==typeof exports?exports.Orderly=t():e.Orderly=t()}(this,function(){return function(e){function __webpack_require__(n){if(t[n])return t[n].exports;var r=t[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,__webpack_require__),r.loaded=!0,r.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.p="",__webpack_require__(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";e.exports=n(2)},function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=n(3),o=n(4),u=_interopRequireDefault(o),s=n(11),a=_interopRequireDefault(s),c=n(12),f=_interopRequireDefault(c),l=n(15),d=_interopRequireDefault(l),p=function(){function Orderly(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];_classCallCheck(this,Orderly),this.options=e}return r(Orderly,[{key:"withOptions",value:function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=(e.as,_objectWithoutProperties(e,["as"]));return new Orderly(Object.assign({},this.options,t))}},{key:"ajax",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=new u["default"](e,Object.assign({},this.options,t)),r=new a["default"]({action:n.execute,priority:t.priority});return Orderly.queue.add(r),n}},{key:"get",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return this.ajax(e,Object.assign(t,{method:"GET"}))}},{key:"post",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return this.ajax(e,Object.assign(t,{method:"POST"}))}},{key:"put",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return this.ajax(e,Object.assign(t,{method:"PUT"}))}},{key:"del",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return this.ajax(e,Object.assign(t,{method:"DELETE"}))}}]),Orderly}();p.debugMode=function(e){return(0,i.setMode)(e),this},p.queue=void 0,p.worker=void 0,p.global=void 0,p.start=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.max,n=e.sleep;return this.worker||(this.queue=new f["default"],this.worker=new d["default"](this.queue,{max:t,sleep:n}),this["default"]=new p),this.worker.start(),this["default"]},p.pause=function(){this.worker&&this.worker.stop()},p.stop=function(){this.pause(),this.queue=this.worker=this["default"]=void 0},t["default"]=p},function(e,t){"use strict";function setMode(e){return r=e}function getMode(){return r}function log(e,t){var i=arguments.length<=2||void 0===arguments[2]?{}:arguments[2];if(r){var o=Object.keys(i).reduce(function(e,t){var r=i[t];return"object"===("undefined"==typeof r?"undefined":n(r))&&(r=JSON.stringify(r)),e+" "+t+":"+r},e);o=o+" "+t,console.log(o)}}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},r=!1;t.setMode=setMode,t.getMode=getMode,t.log=log},function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _objectWithoutProperties(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function buildResponse(e,t){var n;return n={},_defineProperty(n,a.STATUS_KEY,e),_defineProperty(n,a.VERSION_KEY,t),_defineProperty(n,"skipped",a.STATUS_SKIP===e),_defineProperty(n,"cancelled",a.STATUS_CANCEL===e),n}function anyConditionMet(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.some(function(e){return e.apply(void 0,n)})}function shouldSkip(e,t,n){return e!==!1&&(anyConditionMet(t)||n.sentIsOutdated())}function shouldCancel(e,t,n,r){if(anyConditionMet(t,e)||n.receivedIsOutdated())throw(0,c.debugLogger)("CANCELLED",n,r),buildResponse(a.STATUS_CANCEL,n);(0,c.debugLogger)("RECEIVED",n,r)}function appendVersion(e,t){e[a.VERSION_KEY]=t}function initHeader(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1],n=arguments[2];return Object.assign(e,(0,u.requestContentType)(t,n))}function initBody(e,t){return!e||"object"!==("undefined"==typeof e?"undefined":i(e))&&"json"!==t?e:JSON.stringify(e)}function initRequest(e,t){var n=t.headers,r=t.body,i=t.type,o=_objectWithoutProperties(t,["headers","body","type"]);return o.headers=initHeader(n,r,i),o.body=initBody(r,i),o}function initAction(e,t,n,r){var i=r.type,s=r.priority,f=r.skip;return function(r){return shouldSkip(f,r,n)?((0,c.debugLogger)("SKIPPED",n,s),Promise.reject(buildResponse(a.STATUS_SKIP,n))):(n.sent(),(0,c.debugLogger)("SENT",n,s),fetch(e,t).then((0,o.proxy)(shouldCancel,r,n,s)).then((0,o.proxy)(n.received)).then((0,o.proxy)(appendVersion,n)).then((0,u.parseResponse)(i)))}}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},o=n(5),u=n(6),s=n(7),a=n(8),c=n(9),f=n(10),l=_interopRequireDefault(f),d=function(){function Ajax(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=n.version,i=_objectWithoutProperties(n,["version"]);_classCallCheck(this,Ajax),this.__done__=function(e){return t.q=Promise.resolve(e)},this.__cleanup__=function(){t.execute=t.conditions=void 0},r=new l["default"]((0,s.filterParams)(e),r);var o=initRequest(e,i),u=initAction(e,o,r,i);this.conditions=[],this.q=new Promise(function(e,n){t.execute=function(){return u(t.conditions).then(t.__done__).then(e)["catch"](n).then(t.__cleanup__)}}),(0,c.debugLogger)("CREATED",r,i.priority)}return r(Ajax,[{key:"cancel",value:function(e){return this.conditions.push(e),this}},{key:"catch",value:function(e){return this.q=this.q["catch"](e),this}},{key:"fail",value:function(e){return this.then((0,o.onFail)(e))}},{key:"success",value:function(e){return this.then((0,o.onSuccess)(e))}},{key:"then",value:function(e){return this.q=this.q.then(e),this}}]),Ajax}();t["default"]=d},function(e,t){"use strict";function proxy(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(t){return e.apply(void 0,[t].concat(n)),t}}function conditionalProxy(e,t){return function(n){return t(n)&&e(n),n}}function onFail(e){return conditionalProxy(e,function(e){return e&&e.status>=400})}function onSuccess(e){return conditionalProxy(e,function(e){return e&&e.status<400})}Object.defineProperty(t,"__esModule",{value:!0}),t.proxy=proxy,t.conditionalProxy=conditionalProxy,t.onFail=onFail,t.onSuccess=onSuccess},function(e,t){"use strict";function bodyContainsJson(e){var t=e.headers.get("Content-Type");return t&&t.includes(r.json)}function includeData(e){return function(t){return e.data=t,e}}function includeType(e){return function(t){return e||(e=bodyContainsJson(t)?"json":"text"),t.orderly_type=e,t}}function convertType(e){return e[e.orderly_type]()}function parseResponse(e){return function(t){return Promise.resolve(t).then(includeType(e)).then(convertType).then(includeData(t))}}function accepts(e){if("json"===e)return{Accept:r.json}}function contentType(e,t){if("json"===t||"object"===("undefined"==typeof e?"undefined":n(e)))return{"Content-Type":r.json}}function requestContentType(e,t){return Object.assign({},accepts(t),contentType(e,t))}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},r={json:"application/json"};t.parseResponse=parseResponse,t.requestContentType=requestContentType},function(e,t){"use strict";function filterParams(e){return e.split("?")[0]}Object.defineProperty(t,"__esModule",{value:!0});new RegExp(/\?.*$/);t.filterParams=filterParams},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="statusText",r="skipped",i="cancelled",o="version";t.STATUS_KEY=n,t.STATUS_SKIP=r,t.STATUS_CANCEL=i,t.VERSION_KEY=o},function(e,t,n){"use strict";function debugLogger(e,t,n){var i=t.id,o=t.key;(0,r.log)("Orderly",e,{url:o,id:i,priority:n})}Object.defineProperty(t,"__esModule",{value:!0}),t.debugLogger=void 0;var r=n(3);t.debugLogger=debugLogger},function(e,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function initValue(){return{counter:0,sent:0,received:0}}Object.defineProperty(t,"__esModule",{value:!0});var n=function Version(e){var t=arguments.length<=1||void 0===arguments[1]||arguments[1];_classCallCheck(this,Version),r.call(this),this.check=t,this.key=e,this.id=Version.inc(e)};n.map={},n.get=function(e){return this.map[e]||(this.map[e]=initValue())},n.inc=function(e){return this.get(e).counter+=1};var r=function(){var e=this;this.sentIsOutdated=function(){return e.check&&n.get(e.key).sent>e.id},this.receivedIsOutdated=function(){return e.check&&n.get(e.key).received>e.id},this.sent=function(){var t=n.get(e.key);if(e.id>t.sent)return t.sent=e.id},this.received=function(){var t=n.get(e.key);if(e.id>t.received)return t.received=e.id}};t["default"]=n},function(e,t){"use strict";function _objectWithoutProperties(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function Job(){var e=this,t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=t.action,r=t.priority,i=void 0===r?0:r,o=_objectWithoutProperties(t,["action","priority"]);_classCallCheck(this,Job),this.execute=function(t){var n=e.action();return t&&"function"==typeof t&&(n&&n instanceof Promise?n.then(t):t(n)),n},this.action=n,this.priority=i,this.options=o};t["default"]=n},function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function defaultStrategy(e,t){var n=e.priority,r=void 0===n?0:n,i=e.queueId,o=t.priority,u=void 0===o?0:o,s=t.queueId;return r===u&&s>i||u<r}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(13),u=_interopRequireDefault(o),s=n(3),a=function(){function Queue(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.strategy,n=void 0===t?defaultStrategy:t;_classCallCheck(this,Queue),this.queue=new u["default"](n)}return i(Queue,[{key:"add",value:function(e){if("object"===("undefined"==typeof e?"undefined":r(e))&&"function"==typeof e.execute)return e.queueId=Queue.inc(),this.queue.add(e),e;throw new Error("trying to insert an invalid job",e)}},{key:"get",value:function(){return(0,s.log)("Queue","getting a job",{size:this.size()}),this.queue.poll()}},{key:"isEmpty",value:function(){return this.queue.isEmpty()}},{key:"size",value:function(){return this.queue.size}},{key:"cleanup",value:function(){return this.queue.trim()}}]),Queue}();a.counter=0,a.inc=function(){return this.counter+=1},t["default"]=a},function(e,t,n){(function(e){"use strict";function FastPriorityQueue(e){this.array=[],this.size=0,this.compare=e||t}var t=function(e,t){return e<t};FastPriorityQueue.prototype.add=function(e){var t=this.size;for(this.array[this.size++]=e;t>0;){var n=t-1>>1,r=this.array[n];if(!this.compare(e,r))break;this.array[t]=r,t=n}this.array[t]=e},FastPriorityQueue.prototype.heapify=function(e){this.array=e,this.size=e.length;for(var t=this.size>>1;t>=0;t--)this._percolateDown(t)},FastPriorityQueue.prototype._percolateUp=function(e){for(var t=this.array[e];e>0;){var n=e-1>>1,r=this.array[n];if(!this.compare(t,r))break;this.array[e]=r,e=n}this.array[e]=t},FastPriorityQueue.prototype._percolateDown=function(e){for(var t=this.size,n=this.size>>>1,r=this.array[e];e<n;){var i=(e<<1)+1,o=i+1,u=this.array[i];if(o<t&&this.compare(this.array[o],u)&&(i=o,u=this.array[o]),!this.compare(u,r))break;this.array[e]=u,e=i}this.array[e]=r},FastPriorityQueue.prototype.peek=function(e){return this.array[0]},FastPriorityQueue.prototype.poll=function(e){var t=this.array[0];return this.size>1?(this.array[0]=this.array[--this.size],this._percolateDown(0)):--this.size,t},FastPriorityQueue.prototype.trim=function(){this.array=this.array.slice(0,this.size)},FastPriorityQueue.prototype.isEmpty=function(e){return 0==this.size};var r=function(){var e=new FastPriorityQueue(function(e,t){return e<t});for(e.add(1),e.add(0),e.add(5),e.add(4),e.add(3);!e.isEmpty();)console.log(e.poll())};n.c[0]===e&&r(),e.exports=FastPriorityQueue}).call(t,n(14)(e))},function(e,t){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hasJob(e){return!e.isEmpty()}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=function(){function Worker(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=n.sleep,i=void 0===r?50:r,o=n.max,u=void 0===o?8:o;_classCallCheck(this,Worker),this.start=function(){for(;t.pending<=t.max&&hasJob(t.queue);){t.pending+=1;var e=t.queue.get();setTimeout(e.execute,0,t.complete)}t.queue.cleanup(),t["continue"]&&(t.setTimeout=setTimeout(t.start,t.sleep))},this.complete=function(){t.pending-=1},this.queue=e,this.sleep=i,this.max=u,this.pending=0,this["continue"]=!0}return n(Worker,[{key:"stop",value:function(){this["continue"]=!1,clearTimeout(this.setTimeout)}}]),Worker}();t["default"]=r}])});
//# sourceMappingURL=index.js.map