/*! OvenPlayerv0.7.4 | (c)2018 AirenSoft Co., Ltd. | MIT license (https://github.com/AirenSoft/OvenPlayerPrivate/blob/master/LICENSE) | Github : https://github.com/AirenSoft/OvenPlayer */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"ovenplayer": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~7afd68cf":"ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~7afd68cf","ovenplayer.provider.DashProvider":"ovenplayer.provider.DashProvider","ovenplayer.provider.HlsProvider":"ovenplayer.provider.HlsProvider","ovenplayer.provider.Html5":"ovenplayer.provider.Html5","ovenplayer.provider.WebRTCProvider":"ovenplayer.provider.WebRTCProvider","ovenplayer.provider.RtmpProvider":"ovenplayer.provider.RtmpProvider"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/ovenplayer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js??ref--5-2!./src/css/ovenplayer.less":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js??ref--5-2!./src/css/ovenplayer.less ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";.ovp-wrapper{position:relative;max-height:100%;overflow:hidden;zoom:1 !important;width:100%;display:block;background-color:#000;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;color:#eee;font-family:'Noto Sans',sans-serif;font-size:11px;line-height:1.3;font-weight:normal;outline:0}.ovp-wrapper object{width:100%;height:100%}.ovp-wrapper:before,.ovp-wrapper:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.ovp-wrapper *,.ovp-wrapper *:before,.ovp-wrapper *:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.ovp-wrapper.ovp-fullscreen{height:100% !important}.ovp-wrapper.ovp-autohide{cursor:none}.ovp-wrapper.ovp-autohide .ovp-gradient-top,.ovp-wrapper.ovp-autohide .ovp-gradient-bottom,.ovp-wrapper.ovp-autohide .ovp-bottom-panel{opacity:0}.ovp-wrapper.ovp-autohide .ovp-progressbar-container,.ovp-wrapper.ovp-autohide .ovp-controls .ovp-button{cursor:none}.ovp-wrapper.ovp-autohide .ovp-caption-text-container{bottom:25px}.ovp-wrapper .ovp-ratio{padding-bottom:56.25%}.ovp-player{position:absolute;top:0;bottom:0;width:100%}.ovp-player .ovp-media-element-container{display:block;position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%}.ovp-player .ovp-media-element-container>*{width:100%;height:100%}.ovp-player .ovp-ui{position:absolute;top:0;width:100%;height:100%}.ovp-button{display:inline-block;border:none;background:transparent;padding:0;color:inherit;text-align:inherit;overflow:hidden;font-weight:100}.ovp-button:focus,.ovp-button{outline:0}.ovp-gradient-top,.ovp-gradient-bottom{width:100%;position:absolute;background-color:#12121c;pointer-events:none;opacity:.3;-moz-transition:opacity .25s cubic-bezier(0, 0, .2, 1);-webkit-transition:opacity .25s cubic-bezier(0, 0, .2, 1);transition:opacity .25s cubic-bezier(0, 0, .2, 1)}.ovp-gradient-bottom{height:50px;bottom:0;z-index:22}.ovp-spinner-container{position:absolute;top:0;left:0;width:100%;height:100%;display:none}.ovp-spinner-container .ovp-spinner{width:70px;height:18px;position:absolute;top:50%;left:50%;margin-top:-9px;margin-left:-35px;text-align:center}.ovp-spinner-container .ovp-spinner>div{width:18px;height:18px;background-color:#50e3c2;border-radius:100%;display:inline-block;-webkit-animation:sk-bouncedelay 1.4s infinite ease-in-out both;animation:sk-bouncedelay 1.4s infinite ease-in-out both}.ovp-spinner-container .ovp-spinner .bounce1{-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.ovp-spinner-container .ovp-spinner .bounce2{-webkit-animation-delay:-0.16s;animation-delay:-0.16s}@-webkit-keyframes sk-bouncedelay{0%,80%,100%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes sk-bouncedelay{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.ovp-message-box{position:absolute;top:0;left:0;width:100%;height:100%}.ovp-message-box .ovp-message-container{position:absolute;top:60px;width:100%;padding:0 12px;text-align:center}.ovp-message-box .ovp-message-container .ovp-message-text{font-size:140%;background-color:rgba(0,0,0,0.5);color:#fff;padding:.1em .3em;word-wrap:break-word;line-height:1.5em}.ovp-bigbutton-container{position:absolute;top:0;left:0;width:100%;height:100%}.ovp-bigbutton-container .ovp-bigbutton{position:absolute;top:50%;left:50%;width:80px;height:80px;margin-top:-40px;margin-left:-40px;text-align:center}.ovp-bigbutton-container .ovp-bigbutton.ovp-bigbutton-play{background:url(" + escape(__webpack_require__(/*! ../assets/images/ic-player-play-large.svg */ "./src/assets/images/ic-player-play-large.svg")) + ");background-size:100%}.ovp-bigbutton-container .ovp-bigbutton.ovp-bigbutton-pause{background:url(" + escape(__webpack_require__(/*! ../assets/images/ic-player-stop-large.svg */ "./src/assets/images/ic-player-stop-large.svg")) + ");background-size:100%}.ovp-bigbutton-container .ovp-bigbutton.ovp-bigbutton-replay{background:url(" + escape(__webpack_require__(/*! ../assets/images/ic-player-re-large.svg */ "./src/assets/images/ic-player-re-large.svg")) + ");background-size:100%}.ovp-setting-panel{position:absolute;bottom:55px;right:12px;overflow-y:auto;width:260px;font-size:120%;user-select:none;background-color:rgba(28,28,28,0.9);text-shadow:0 0 2px rgba(0,0,0,0.5)}.ovp-setting-panel .ovp-setting-title,.ovp-setting-panel .ovp-setting-item{width:100%;height:38px;line-height:38px;color:#eee;cursor:pointer;outline:none}.ovp-setting-panel .ovp-setting-title-container .ovp-setting-title .ovp-setting-title-title{padding-left:12px}.ovp-setting-panel .ovp-setting-title-container .ovp-setting-title .ovp-setting-title-previcon{padding:0 0 0 12px;margin-right:-6px}.ovp-setting-panel .ovp-setting-item-container .ovp-setting-item:hover{background-color:rgba(255,255,255,0.1)}.ovp-setting-panel .ovp-setting-item-container .ovp-setting-item .ovp-setting-item-title{padding-left:12px}.ovp-setting-panel .ovp-setting-item-container .ovp-setting-item .ovp-setting-item-nexticon{float:right;padding-right:12px;margin-left:-6px}.ovp-setting-panel .ovp-setting-item-container .ovp-setting-item span.ovp-setting-item-value{float:right;padding-right:12px}.ovp-setting-panel .ovp-setting-item-container .ovp-setting-item.ovp-setting-item-value .ovp-setting-item-title{margin-left:-6px}.ovp-setting-panel .ovp-setting-item-container .ovp-setting-item.ovp-setting-item-value .ovp-setting-item-checked{padding-left:12px;visibility:hidden}.ovp-setting-panel .ovp-setting-item-container .ovp-setting-item.ovp-setting-item-value .ovp-setting-item-checked.ovp-show{visibility:visible}.ovp-controls-container .ovp-bottom-panel{position:absolute;left:0px;right:0px;bottom:0px;height:50px;z-index:60;-moz-transition:opacity .25s cubic-bezier(0, 0, .2, 1);-webkit-transition:opacity .25s cubic-bezier(0, 0, .2, 1);transition:opacity .25s cubic-bezier(0, 0, .2, 1)}.ovp-controls-container .ovp-bottom-panel .ovp-progressbar-container{display:block;position:absolute;width:100%;bottom:50px;height:4px;cursor:pointer}.ovp-controls-container .ovp-bottom-panel .ovp-progressbar-container .ovp-progressbar-padding{position:absolute;width:100%;height:16px;bottom:0;z-index:28}.ovp-controls-container .ovp-bottom-panel .ovp-controls{position:absolute;bottom:0;width:100%;height:50px;text-align:left}.ovp-controls-container .ovp-bottom-panel .ovp-controls .ovp-button{min-width:30px;height:30px;cursor:pointer}.ovp-controls-container .ovp-bottom-panel .ovp-controls .ovp-left-controls{float:left;height:100%}.ovp-controls-container .ovp-bottom-panel .ovp-controls .ovp-right-controls{float:right;height:100%}.ovp-controls-container .ovp-bottom-panel .ovp-controls .ovp-right-controls .ovp-setting-button{position:relative;top:10px;margin-right:12px}.ovp-controls-container .ovp-bottom-panel .ovp-controls .ovp-right-controls .ovp-setting-button>i{display:inline-block;width:100%;height:100%;background-size:100%;background:url(" + escape(__webpack_require__(/*! ../assets/images/ic-player-setting.svg */ "./src/assets/images/ic-player-setting.svg")) + ")}.ovp-progressbar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:31;outline:none}.ovp-progressbar .ovp-play-background-color{background-color:#50e3c2}.ovp-progressbar .ovp-progress-list{position:relative;height:100%;background:rgba(255,255,255,0.2);z-index:39}.ovp-progressbar .ovp-progress-list .ovp-load-progress,.ovp-progressbar .ovp-progress-list .ovp-play-progress,.ovp-progressbar .ovp-progress-list .ovp-hover-progress{position:absolute;left:0;bottom:0;width:100%;height:100%;-moz-transform-origin:0 0;-ms-transform-origin:0 0;-webkit-transform-origin:0 0;transform-origin:0 0}.ovp-progressbar .ovp-progress-list .ovp-play-progress{width:0;z-index:34;-webkit-transition:width .1s ease;transition:width .1s ease}.ovp-progressbar .ovp-progress-list .ovp-load-progress{width:0;z-index:33;background-color:rgba(255,255,255,0.5);-webkit-transition:width .5s ease;transition:width .5s ease}.ovp-progressbar .ovp-progress-list .ovp-hover-progress{left:0;width:0;z-index:35;background-color:rgba(255,255,255,0.6)}.ovp-progressbar .ovp-progressbar-knob-container{position:absolute;top:-5px;left:0px;z-index:43;-moz-transition:-moz-transform .1s cubic-bezier(.4, 0, 1, 1);-webkit-transition:-webkit-transform .1s cubic-bezier(.4, 0, 1, 1);-ms-transition:-ms-transform .1s cubic-bezier(.4, 0, 1, 1);transition:transform .1s cubic-bezier(.4, 0, 1, 1);-moz-transform:scale(0);-ms-transform:scale(0);-webkit-transform:scale(0);transform:scale(0)}.ovp-progressbar .ovp-progressbar-knob-container .ovp-progressbar-knob{width:14px;height:14px;border-radius:7px;-webkit-transition:width .1s ease;transition:width .1s ease}.ovp-progressbar .ovp-progressbar-time{display:none;position:absolute;bottom:15px;left:auto;width:auto;background-color:rgba(28,28,28,0.9);border-radius:2px;padding:5px 9px;font-size:118%;line-height:15px;user-select:none}.ovp-progressbar-hover .ovp-progressbar-knob-container{-moz-transform:none;-ms-transform:none;-webkit-transform:none;transform:none;-moz-transition:-moz-transform .1s cubic-bezier(0, 0, .2, 1);-webkit-transition:-webkit-transform .1s cubic-bezier(0, 0, .2, 1);-ms-transition:-ms-transform .1s cubic-bezier(0, 0, .2, 1);transition:transform .1s cubic-bezier(0, 0, .2, 1)}.ovp-progressbar-hover .ovp-progressbar-time{display:inline-block}.ovp-on-error .ovp-progressbar-time{display:none}.ovp-play-button{position:relative;top:10px;margin-left:15px}.ovp-play-button>i{display:inline-block;width:100%;height:100%;background-size:100%}.ovp-play-button .ovp-play-button-playicon{background:url(" + escape(__webpack_require__(/*! ../assets/images/ic-player-play.svg */ "./src/assets/images/ic-player-play.svg")) + ")}.ovp-play-button .ovp-play-button-pauseicon{background:url(" + escape(__webpack_require__(/*! ../assets/images/ic-player-stop.svg */ "./src/assets/images/ic-player-stop.svg")) + ")}.ovp-volume-controller{display:inline-block;position:relative;top:10px;margin-left:12px;height:30px}.ovp-volume-controller .ovp-volume-button>i{display:inline-block;width:100%;height:100%;background-size:100%}.ovp-volume-controller .ovp-volume-button .ovp-volume-button-bigicon{background:url(" + escape(__webpack_require__(/*! ../assets/images/ic-player-volume.svg */ "./src/assets/images/ic-player-volume.svg")) + ")}.ovp-volume-controller .ovp-volume-button .ovp-volume-button-smallicon{background:url(" + escape(__webpack_require__(/*! ../assets/images/ic-player-volume-2.svg */ "./src/assets/images/ic-player-volume-2.svg")) + ")}.ovp-volume-controller .ovp-volume-button .ovp-volume-button-muteicon{background:url(" + escape(__webpack_require__(/*! ../assets/images/ic-player-volume-mute.svg */ "./src/assets/images/ic-player-volume-mute.svg")) + ")}.ovp-volume-controller .ovp-volume-slider-container{display:inline-block;position:relative;width:0px;height:100%;overflow:hidden;cursor:pointer;user-select:none;outline:none;-moz-transition:margin .2s cubic-bezier(.4, 0, 1, 1),width .2s cubic-bezier(.4, 0, 1, 1);-webkit-transition:margin .2s cubic-bezier(.4, 0, 1, 1),width .2s cubic-bezier(.4, 0, 1, 1);transition:margin .2s cubic-bezier(.4, 0, 1, 1),width .2s cubic-bezier(.4, 0, 1, 1)}.ovp-volume-controller .ovp-volume-slider-container.active{width:70px;margin-left:8px;margin-right:0;-moz-transition:margin .2s cubic-bezier(0, 0, .2, 1),width .2s cubic-bezier(0, 0, .2, 1);-webkit-transition:margin .2s cubic-bezier(0, 0, .2, 1),width .2s cubic-bezier(0, 0, .2, 1);transition:margin .2s cubic-bezier(0, 0, .2, 1),width .2s cubic-bezier(0, 0, .2, 1)}.ovp-volume-controller .ovp-volume-slider-container .ovp-volume-silder{height:100%;position:relative;overflow:hidden}.ovp-volume-controller .ovp-volume-slider-container .ovp-volume-silder .ovp-volume-slider-bg,.ovp-volume-controller .ovp-volume-slider-container .ovp-volume-silder .ovp-volume-slider-value{position:absolute;display:block;left:0;top:50%;height:4px;margin-top:-2px;border-radius:10px}.ovp-volume-controller .ovp-volume-slider-container .ovp-volume-silder .ovp-volume-slider-bg{width:100%;background:#fff}.ovp-volume-controller .ovp-volume-slider-container .ovp-volume-silder .ovp-volume-slider-value{width:100%;background:#50e3c2}.ovp-volume-controller .ovp-volume-slider-container .ovp-volume-silder .ovp-volume-slider-handle{position:absolute;top:50%;left:30px;width:12px;height:12px;border-radius:6px;margin-top:-6px;background:#fff}.ovp-volume-controller .ovp-volume-slider-container .ovp-volume-silder .ovp-volume-slider-handle:before,.ovp-volume-controller .ovp-volume-slider-container .ovp-volume-silder .ovp-volume-slider-handle:after{content:'';position:absolute;display:none;top:50%;height:4px;margin-top:-2px;width:80px;z-index:-1}.ovp-volume-controller .ovp-volume-slider-container .ovp-volume-silder .ovp-volume-slider-handle:before{left:-58px;background:#50e3c2}.ovp-volume-controller .ovp-volume-slider-container .ovp-volume-silder .ovp-volume-slider-handle:after{left:6px;background:#fff}.ovp-time-display{display:inline-block;position:relative;top:10px;margin-left:12px;height:30px;white-space:nowrap;line-height:30px;vertical-align:top;font-size:14px;user-select:none}.ovp-time-display .ovp-time-current,.ovp-time-display .ovp-time-separator,.ovp-time-display .ovp-time-duration{color:#fff}.ovp-time-display .ovp-live-badge{opacity:1;display:inline-block;width:auto;font-size:14px}.ovp-time-display .ovp-live-badge:before{background:#ff0000;display:inline-block;position:relative;top:-2px;width:6px;height:6px;margin-right:5px;content:'';border-radius:6px}.ovp-time-display .ovp-live-badge .ovp-live-badge-lowlatency{display:inline-block;margin-right:5px}.ovp-context-panel{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;overflow:hidden;width:200px;padding:6px 0;background:rgba(28,28,28,0.9);text-shadow:0 0 2px rgba(0,0,0,0.5);z-index:2300;font-family:Roboto,Arial,Helvetica,sans-serif;font-size:11px;font-weight:100;user-select:none}.ovp-context-panel:before,.ovp-context-panel:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.ovp-context-panel *,.ovp-context-panel *:before,.ovp-context-panel *:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.ovp-context-panel .ovp-context-item{width:100%;height:38px;padding-left:12px;line-height:38px;color:#eee;cursor:pointer;outline:none;font-size:120%}.ovp-context-panel .ovp-context-item:hover{background-color:rgba(255,255,255,0.1)}.ovp-fullscreen-button{position:relative;top:10px;margin-right:15px}.ovp-fullscreen-button>i{display:inline-block;width:100%;height:100%;background-size:100%}.ovp-fullscreen-button .ovp-fullscreen-button-expandicon{background:url(" + escape(__webpack_require__(/*! ../assets/images/ic-player-fullscreen-expand.svg */ "./src/assets/images/ic-player-fullscreen-expand.svg")) + ")}.ovp-fullscreen-button .ovp-fullscreen-button-compressicon{background:url(" + escape(__webpack_require__(/*! ../assets/images/ic-player-fullscreen-compress.svg */ "./src/assets/images/ic-player-fullscreen-compress.svg")) + ")}@keyframes fade{from{opacity:.3}55%{opacity:1}75%{opacity:1}to{opacity:.3}}@-webkit-keyframes shake{from,to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px, 0, 0);transform:translate3d(-10px, 0, 0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px, 0, 0);transform:translate3d(10px, 0, 0)}}@keyframes shake{from,to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px, 0, 0);transform:translate3d(-10px, 0, 0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px, 0, 0);transform:translate3d(10px, 0, 0)}}.ovp-player .shake{-webkit-animation-name:shake;animation-name:shake}@-webkit-keyframes bounceIn{from,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215, .61, .355, 1);animation-timing-function:cubic-bezier(.215, .61, .355, 1)}0%{opacity:0;-webkit-transform:scale3d(.5, .5, .5);transform:scale3d(.5, .5, .5)}20%{-webkit-transform:scale3d(1.1, 1.1, 1.1);transform:scale3d(1.1, 1.1, 1.1)}40%{-webkit-transform:scale3d(.9, .9, .9);transform:scale3d(.9, .9, .9)}60%{opacity:1;-webkit-transform:scale3d(1.03, 1.03, 1.03);transform:scale3d(1.03, 1.03, 1.03)}80%{-webkit-transform:scale3d(.97, .97, .97);transform:scale3d(.97, .97, .97)}to{opacity:1;-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}}@keyframes bounceIn{from,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215, .61, .355, 1);animation-timing-function:cubic-bezier(.215, .61, .355, 1)}0%{opacity:0;-webkit-transform:scale3d(.3, .3, .3);transform:scale3d(.3, .3, .3)}20%{-webkit-transform:scale3d(1.1, 1.1, 1.1);transform:scale3d(1.1, 1.1, 1.1)}40%{-webkit-transform:scale3d(.9, .9, .9);transform:scale3d(.9, .9, .9)}60%{opacity:1;-webkit-transform:scale3d(1.03, 1.03, 1.03);transform:scale3d(1.03, 1.03, 1.03)}80%{-webkit-transform:scale3d(.97, .97, .97);transform:scale3d(.97, .97, .97)}to{opacity:1;-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}}.ovp-player .bounceIn{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.ovp-player .fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}.ovp-player .animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@media (prefers-reduced-motion){.ovp-player .animated{-webkit-animation:unset !important;animation:unset !important;-webkit-transition:none !important;transition:none !important}}.ovp-caption-viewer{position:absolute;top:0;left:0;width:100%;height:100%}.ovp-caption-viewer .ovp-caption-text-container{position:absolute;bottom:60px;width:100%;padding:0 12px;text-align:center;-moz-transition:bottom .25s cubic-bezier(0, 0, .2, 1);-webkit-transition:bottom .25s cubic-bezier(0, 0, .2, 1);transition:bottom .25s cubic-bezier(0, 0, .2, 1)}.ovp-caption-viewer .ovp-caption-text-container .ovp-caption-text{display:none;font-size:220%;background-color:rgba(8,8,8,0.75);border-radius:3px;color:#fff;padding:.1em .3em;word-wrap:break-word;line-height:1.5em;user-select:none}.ovp-caption-button{width:36px}.ovp-caption-button>i{font-size:18px;-moz-transition:color .25s cubic-bezier(0, 0, .2, 1);-webkit-transition:color .25s cubic-bezier(0, 0, .2, 1);transition:color .25s cubic-bezier(0, 0, .2, 1)}.ovp-caption-active .ovp-caption-button>i{color:#F36446}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/assets/images/ic-player-fullscreen-compress.svg":
/*!*************************************************************!*\
  !*** ./src/assets/images/ic-player-fullscreen-compress.svg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiI+CiAgICAgICAgPHBhdGggZD0iTTcgMTdoNnY2TTIzIDEzaC02VjdNMTcgMTNsNy03TTYgMjRsNy03Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/images/ic-player-fullscreen-expand.svg":
/*!***********************************************************!*\
  !*** ./src/assets/images/ic-player-fullscreen-expand.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiI+CiAgICAgICAgPHBhdGggZD0iTTE4IDZoNnY2TTEyIDI0SDZ2LTZNMjQgNmwtNyA3TTYgMjRsNy03Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/images/ic-player-play-large.svg":
/*!****************************************************!*\
  !*** ./src/assets/images/ic-player-play-large.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjQ5IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik03NSA1MEwzNSA3NVYyNXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/assets/images/ic-player-play.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/ic-player-play.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTkgNmwxNCA5LTE0IDl6Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/images/ic-player-re-large.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/ic-player-re-large.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj4NCiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjQiPg0KICAgICAgICA8cGF0aCBkPSJNMTUgMjEuM3YxMy44aDEzLjgiLz4NCiAgICAgICAgPHBhdGggZD0iTTIwLjc3MyA0Ni42YTIwLjcgMjAuNyAwIDEgMCA0Ljg5OS0yMS41MjhMMTUgMzUuMSIvPg0KICAgIDwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/images/ic-player-setting.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/ic-player-setting.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCA0KSI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iMyIvPgogICAgICAgIDxwYXRoIGQ9Ik0xOC40IDE0YTEuNjUgMS42NSAwIDAgMCAuMzMgMS44MmwuMDYuMDZhMiAyIDAgMSAxLTIuODMgMi44M2wtLjA2LS4wNmExLjY1IDEuNjUgMCAwIDAtMS44Mi0uMzMgMS42NSAxLjY1IDAgMCAwLTEgMS41MVYyMGEyIDIgMCAxIDEtNCAwdi0uMDlBMS42NSAxLjY1IDAgMCAwIDggMTguNGExLjY1IDEuNjUgMCAwIDAtMS44Mi4zM2wtLjA2LjA2YTIgMiAwIDEgMS0yLjgzLTIuODNsLjA2LS4wNmExLjY1IDEuNjUgMCAwIDAgLjMzLTEuODIgMS42NSAxLjY1IDAgMCAwLTEuNTEtMUgyYTIgMiAwIDEgMSAwLTRoLjA5QTEuNjUgMS42NSAwIDAgMCAzLjYgOGExLjY1IDEuNjUgMCAwIDAtLjMzLTEuODJsLS4wNi0uMDZhMiAyIDAgMSAxIDIuODMtMi44M2wuMDYuMDZhMS42NSAxLjY1IDAgMCAwIDEuODIuMzNIOGExLjY1IDEuNjUgMCAwIDAgMS0xLjUxVjJhMiAyIDAgMSAxIDQgMHYuMDlhMS42NSAxLjY1IDAgMCAwIDEgMS41MSAxLjY1IDEuNjUgMCAwIDAgMS44Mi0uMzNsLjA2LS4wNmEyIDIgMCAxIDEgMi44MyAyLjgzbC0uMDYuMDZhMS42NSAxLjY1IDAgMCAwLS4zMyAxLjgyVjhjLjI2LjYwNC44NTIuOTk3IDEuNTEgMUgyMGEyIDIgMCAxIDEgMCA0aC0uMDlhMS42NSAxLjY1IDAgMCAwLTEuNTEgMXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/assets/images/ic-player-stop-large.svg":
/*!****************************************************!*\
  !*** ./src/assets/images/ic-player-stop-large.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjQ5IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0zNSAyOWg3djQyaC03ek01OCAyOWg3djQyaC03eiIvPgogICAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/assets/images/ic-player-stop.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/ic-player-stop.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiI+CiAgICAgICAgPHBhdGggZD0iTTEwIDZ2MThNMjAgNnYxOCIvPgogICAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/assets/images/ic-player-volume-2.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/ic-player-volume-2.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4NCiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiPg0KICAgICAgICA8cGF0aCBkPSJNOSAxMUg1djhoNGw2IDVWNnpNMTkuNTQgMTEuNDZhNSA1IDAgMCAxIDAgNy4wNyIvPg0KICAgIDwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/images/ic-player-volume-mute.svg":
/*!*****************************************************!*\
  !*** ./src/assets/images/ic-player-volume-mute.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiI+CiAgICAgICAgPHBhdGggZD0iTTkgMTFINXY4aDRsNiA1VjZ6TTI2IDEybC02IDZNMjAgMTJsNiA2Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/images/ic-player-volume.svg":
/*!************************************************!*\
  !*** ./src/assets/images/ic-player-volume.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiI+CiAgICAgICAgPHBhdGggZD0iTTkgMTFINXY4aDRsNiA1VjZ6TTIzLjA3IDcuOTNjMy45MDQgMy45MDUgMy45MDQgMTAuMjM1IDAgMTQuMTRtLTMuNTMtMTAuNjFhNSA1IDAgMCAxIDAgNy4wNyIvPgogICAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/css/ovenplayer.less":
/*!*********************************!*\
  !*** ./src/css/ovenplayer.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/less-loader/dist/cjs.js??ref--5-2!./ovenplayer.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js??ref--5-2!./src/css/ovenplayer.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js/api/Api.js":
/*!***************************!*\
  !*** ./src/js/api/Api.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //import CaptionManager from "api/caption/Manager";


var _Configurator = __webpack_require__(/*! api/Configurator */ "./src/js/api/Configurator.js");

var _Configurator2 = _interopRequireDefault(_Configurator);

var _EventEmitter = __webpack_require__(/*! api/EventEmitter */ "./src/js/api/EventEmitter.js");

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _LazyCommandExecutor = __webpack_require__(/*! api/LazyCommandExecutor */ "./src/js/api/LazyCommandExecutor.js");

var _LazyCommandExecutor2 = _interopRequireDefault(_LazyCommandExecutor);

var _logger = __webpack_require__(/*! utils/logger */ "./src/js/utils/logger.js");

var _logger2 = _interopRequireDefault(_logger);

var _Manager = __webpack_require__(/*! api/playlist/Manager */ "./src/js/api/playlist/Manager.js");

var _Manager2 = _interopRequireDefault(_Manager);

var _Controller = __webpack_require__(/*! api/provider/Controller */ "./src/js/api/provider/Controller.js");

var _Controller2 = _interopRequireDefault(_Controller);

var _promise = __webpack_require__(/*! api/shims/promise */ "./src/js/api/shims/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _constants = __webpack_require__(/*! api/constants */ "./src/js/api/constants.js");

var _version = __webpack_require__(/*! version */ "./src/js/version.js");

var _ApiExpansions = __webpack_require__(/*! api/ApiExpansions */ "./src/js/api/ApiExpansions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @brief   This object connects UI to the provider.
 * @param   {object}    container  dom element
 *
 * */

var Api = function Api(container) {
    var logManager = (0, _logger2.default)();
    var that = {};
    (0, _EventEmitter2.default)(that);

    OvenPlayerConsole.log("[[OvenPlayer]] v." + _version.version);
    OvenPlayerConsole.log("API loaded.");
    //let captionManager = CaptionManager(that);

    var playlistManager = (0, _Manager2.default)();
    var providerController = (0, _Controller2.default)();
    var currentProvider = "";
    var playerConfig = "";
    var lazyQueue = "";

    var initProvider = function initProvider(lastPlayPosition) {
        var pickQualityFromSource = function pickQualityFromSource(sources) {
            var quality = 0;
            if (sources) {
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i].default) {
                        quality = i;
                    }
                    if (playerConfig.getQualityLabel() && sources[i].label === playerConfig.getQualityLabel()) {
                        return i;
                    }
                }
            }
            return quality;
        };

        return providerController.loadProviders(playlistManager.getPlaylist()).then(function (Providers) {
            if (currentProvider) {
                currentProvider.destroy();
                currentProvider = null;
            }

            var currentSourceIndex = pickQualityFromSource(playlistManager.getCurrentSources());
            OvenPlayerConsole.log("current source index : " + currentSourceIndex);

            //Call Provider.
            currentProvider = Providers[currentSourceIndex](container, playerConfig);

            if (currentProvider.getName() === _constants.PROVIDER_RTMP) {
                //If provider type is RTMP, we accepts RtmpExpansion.
                _extends(that, (0, _ApiExpansions.ApiRtmpExpansion)(currentProvider));
            }

            //This passes the event created by the Provider to API.
            currentProvider.on("all", function (name, data) {
                that.trigger(name, data);

                //Auto next source when player load was fail by amiss source.
                if (name === _constants.ERROR && (data.code === _constants.PLAYER_FILE_ERROR || parseInt(data.code / 100) === 5) || name === _constants.NETWORK_UNSTABLED) {
                    var currentQuality = that.getCurrentQuality();
                    if (currentQuality.index + 1 < that.getQualityLevels().length) {
                        //this sequential has available source.
                        that.pause();

                        that.setCurrentQuality(currentQuality.index + 1);
                    }
                }
            });
        }).then(function () {

            //provider's preload() have to made Promise. Cuz it overcomes 'flash loading timing problem'.
            currentProvider.preload(playlistManager.getCurrentSources(), lastPlayPosition).then(function () {
                lazyQueue.flush();
                //This is no reason to exist anymore.
                lazyQueue.destroy();

                that.trigger(_constants.READY);
            });
        }).catch(function (error) {
            var errorObject = { code: _constants.INIT_ERROR, reason: "init error.", message: "Player init error.", error: error };
            that.trigger(_constants.ERROR, errorObject);

            //xxx : If you init empty sources. (I think this is strange case.)
            //This works for this case.
            //player = OvenPlayer.create("elId", {});
            //player.load(soruces);
            lazyQueue.removeAndExcuteOnce("load");
        });
    };

    /**
     * API 초기화 함수
     * init
     * @param      {object} options player initial option value.
     * @returns
     **/
    that.init = function (options) {
        //It collects the commands and executes them at the time when they are executable.
        lazyQueue = (0, _LazyCommandExecutor2.default)(that, ['load', 'play', 'pause', 'seek', 'stop', 'getDuration', 'getPosition', 'getVolume', 'getMute', 'getBuffer', 'getState']);
        playerConfig = (0, _Configurator2.default)(options);
        if (!playerConfig.isDebug()) {
            logManager.disable();
        }
        OvenPlayerConsole.log("API : init()");
        OvenPlayerConsole.log("API : init() config : ", playerConfig);

        playlistManager.setPlaylist(playerConfig.getPlaylist());
        OvenPlayerConsole.log("API : init() sources : ", playlistManager.getCurrentSources());
        initProvider();
    };

    /*that.getContainerId = () =>{
        return container.id;
    };*/

    that.getConfig = function () {
        OvenPlayerConsole.log("API : getConfig()", playerConfig.getConfig());
        return playerConfig.getConfig();
    };

    that.getDuration = function () {
        if (!currentProvider) {
            return;
        }
        OvenPlayerConsole.log("API : getDuration()", currentProvider.getDuration());
        return currentProvider.getDuration();
    };
    that.getPosition = function () {
        if (!currentProvider) {
            return;
        }
        OvenPlayerConsole.log("API : getPosition()", currentProvider.getPosition());
        return currentProvider.getPosition();
    };
    that.getVolume = function () {
        if (!currentProvider) {
            return;
        }
        OvenPlayerConsole.log("API : getVolume()", currentProvider.getVolume());
        return currentProvider.getVolume();
    };
    that.setVolume = function (volume) {
        if (!currentProvider) {
            return;
        }
        OvenPlayerConsole.log("API : setVolume() " + volume);
        currentProvider.setVolume(volume);
    };
    that.setMute = function (state) {
        if (!currentProvider) {
            return;
        }
        OvenPlayerConsole.log("API : setMute() " + state);
        return currentProvider.setMute(state);
    };
    that.getMute = function () {
        if (!currentProvider) {
            return;
        }
        OvenPlayerConsole.log("API : getMute() " + currentProvider.getMute());
        return currentProvider.getMute();
    };
    that.load = function (playlist) {
        OvenPlayerConsole.log("API : load() ", playlist);
        lazyQueue = (0, _LazyCommandExecutor2.default)(that, ['play', 'seek', 'stop']);

        if (playlist) {
            if (currentProvider) {
                currentProvider.setCurrentQuality(0);
            }
            playlistManager.setPlaylist(playlist);
        }
        return initProvider();
    };
    that.play = function () {
        OvenPlayerConsole.log("API : play() ");
        currentProvider.play();
    };
    that.pause = function () {
        OvenPlayerConsole.log("API : pause() ");
        currentProvider.pause();
    };
    that.seek = function (position) {
        OvenPlayerConsole.log("API : seek() " + position);
        currentProvider.seek(position);
    };
    that.setPlaybackRate = function (playbackRate) {
        OvenPlayerConsole.log("API : setPlaybackRate() ", playbackRate);
        return currentProvider.setPlaybackRate(playerConfig.setDefaultPlaybackRate(playbackRate));
    };
    that.getPlaybackRate = function () {
        OvenPlayerConsole.log("API : getPlaybackRate() ", currentProvider.getPlaybackRate());
        return currentProvider.getPlaybackRate();
    };
    that.getQualityLevels = function () {
        OvenPlayerConsole.log("API : getQualityLevels() ", currentProvider.getQualityLevels());
        return currentProvider.getQualityLevels();
    };
    that.getCurrentQuality = function () {
        OvenPlayerConsole.log("API : getCurrentQuality() ", currentProvider.getCurrentQuality());
        return currentProvider.getCurrentQuality();
    };
    that.setCurrentQuality = function (qualityIndex) {
        OvenPlayerConsole.log("API : setCurrentQuality() ", qualityIndex);

        var sources = playlistManager.getCurrentSources();
        var currentSource = sources[that.getCurrentQuality().index];
        var newSource = sources[qualityIndex];
        var lastPlayPosition = that.getPosition();
        var isSameProvider = providerController.isSameProvider(currentSource, newSource);
        // provider.serCurrentQuality -> playerConfig setting -> load
        var resQualityIndex = currentProvider.setCurrentQuality(qualityIndex, isSameProvider);

        if (!newSource) {
            return null;
        }

        OvenPlayerConsole.log("API : setCurrentQuality() isSameProvider", isSameProvider);

        if (!isSameProvider) {
            lazyQueue = (0, _LazyCommandExecutor2.default)(that, ['play']);
            initProvider(lastPlayPosition);
        }

        return resQualityIndex;
    };

    /* Captions : This is not supported in the current version.*/
    /*that.setCurrentCaption = (index) =>{
     return captionManager.setCurrentCaption(index);
     }
     that.getCurrentCaption = () =>{
     return captionManager.getCurrentCaption();
     }
     that.getCaptionList = () => {
     return captionManager.getCaptionList();
     }
     that.addCaption = (track) => {
     return captionManager.addCaption();
     }
     that.getCaptionList = () => {
     return captionManager.getCaptionList();
     }*/

    that.getBuffer = function () {
        OvenPlayerConsole.log("API : getBuffer() ", currentProvider.getBuffer());
        currentProvider.getBuffer();
    };
    that.getState = function () {
        if (!currentProvider) {
            return;
        }
        OvenPlayerConsole.log("API : getState() ", currentProvider.getState());
        return currentProvider.getState();
    };
    that.stop = function () {
        OvenPlayerConsole.log("API : stop() ");
        currentProvider.stop();
    };
    that.remove = function () {
        OvenPlayerConsole.log("API : remove() ");
        lazyQueue.destroy();
        currentProvider.destroy();
        currentProvider = null;
        providerController = null;
        playlistManager = null;
        playerConfig = null;
        lazyQueue = null;

        that.trigger(_constants.DESTROY);
        that.off();

        OvenPlayerConsole.log("API : remove() - lazyQueue, currentProvider, providerController, playlistManager, playerConfig, api event destroed. ");
        logManager.destroy();
        logManager = null;
        OvenPlayerSDK.removePlayer(that.getContainerId());
    };

    return that;
};

exports.default = Api;

/***/ }),

/***/ "./src/js/api/ApiExpansions.js":
/*!*************************************!*\
  !*** ./src/js/api/ApiExpansions.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by hoho on 2018. 8. 24..
 */

var ApiRtmpExpansion = exports.ApiRtmpExpansion = function ApiRtmpExpansion(currentProvider) {
    return {
        externalCallbackCreep: function externalCallbackCreep(result) {
            if (result.name && result.data) {
                return currentProvider.triggerEventFromExternal(result.name, result.data);
            } else {
                return null;
            }
        }
    };
};

/***/ }),

/***/ "./src/js/api/Configurator.js":
/*!************************************!*\
  !*** ./src/js/api/Configurator.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _underscore = __webpack_require__(/*! utils/underscore */ "./src/js/utils/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @brief   This initializes the input options.
 * @param   options
 *
 * */
var Configurator = function Configurator(options) {

    var composeSourceOptions = function composeSourceOptions(options) {
        var Defaults = {
            defaultPlaybackRate: 1,
            playbackRateControls: false,
            playbackRates: [0.25, 0.5, 1, 1.5, 2],
            mute: false,
            volume: 90,
            width: 640,
            height: 360
        };
        var serialize = function serialize(val) {
            if (val === undefined) {
                return null;
            }
            if (typeof val === 'string' && val.length < 6) {
                var lowercaseVal = val.toLowerCase();
                if (lowercaseVal === 'true') {
                    return true;
                }
                if (lowercaseVal === 'false') {
                    return false;
                }
                if (!isNaN(Number(val)) && !isNaN(parseFloat(val))) {
                    return Number(val);
                }
            }
            return val;
        };
        var deserialize = function deserialize(options) {
            Object.keys(options).forEach(function (key) {
                if (key === 'id') {
                    return;
                }
                options[key] = serialize(options[key]);
            });
        };
        var normalizeSize = function normalizeSize(val) {
            if (val.slice && val.slice(-2) === 'px') {
                val = val.slice(0, -2);
            }
            return val;
        };
        var evaluateAspectRatio = function evaluateAspectRatio(ar, width) {
            if (width.toString().indexOf('%') === -1) {
                return 0;
            }
            if (typeof ar !== 'string' || !ar) {
                return 0;
            }
            if (/^\d*\.?\d+%$/.test(ar)) {
                return ar;
            }
            var index = ar.indexOf(':');
            if (index === -1) {
                return 0;
            }
            var w = parseFloat(ar.substr(0, index));
            var h = parseFloat(ar.substr(index + 1));
            if (w <= 0 || h <= 0) {
                return 0;
            }
            return h / w * 100 + '%';
        };
        deserialize(options);
        var config = _extends({}, Defaults, options);
        config.width = normalizeSize(config.width);
        config.height = normalizeSize(config.height);
        config.aspectratio = evaluateAspectRatio(config.aspectratio, config.width);

        var rateControls = config.playbackRateControls;
        if (rateControls) {
            var rates = config.playbackRates;

            if (Array.isArray(rateControls)) {
                rates = rateControls;
            }
            rates = rates.filter(function (rate) {
                return _underscore2.default.isNumber(rate) && rate >= 0.25 && rate <= 4;
            }).map(function (rate) {
                return Math.round(rate * 4) / 4;
            });

            if (rates.indexOf(1) < 0) {
                rates.push(1);
            }
            rates.sort();

            config.playbackRateControls = true;
            config.playbackRates = rates;
        }

        if (!config.playbackRateControls || config.playbackRates.indexOf(config.defaultPlaybackRate) < 0) {
            config.defaultPlaybackRate = 1;
        }

        config.playbackRate = config.defaultPlaybackRate;

        if (!config.aspectratio) {
            delete config.aspectratio;
        }

        var configPlaylist = config.playlist;
        if (!configPlaylist) {
            var obj = _underscore2.default.pick(config, ['title', 'description', 'type', 'mediaid', 'image', 'file', 'sources', 'tracks', 'preload', 'duration', 'host', 'application', 'stream']);

            config.playlist = [obj];
        } else if (_underscore2.default.isArray(configPlaylist.playlist)) {
            config.feedData = configPlaylist;
            config.playlist = configPlaylist.playlist;
        }

        delete config.duration;
        return config;
    };
    OvenPlayerConsole.log("Configurator loaded.", options);
    var config = composeSourceOptions(options);

    var aspectratio = config.aspectratio || "16:9";
    var debug = config.debug;
    var defaultPlaybackRate = config.defaultPlaybackRate || 1;
    var image = config.image;
    var playbackRateControls = config.playbackRateControls || true;
    var playbackRates = config.playbackRates || [0.5, 1, 1.25, 1.5, 2];
    var playlist = config.playlist || [];
    var qualityLabel = config.qualityLabel || "";
    var repeat = config.repeat || false;
    var stretching = config.stretching || 'uniform';

    var that = {};
    that.getConfig = function () {
        return config;
    };

    that.getAspectratio = function () {
        return aspectratio;
    };
    that.setAspectratio = function (aspectratio_) {
        aspectratio = aspectratio_;
    };

    that.isDebug = function () {
        return debug;
    };

    that.getDefaultPlaybackRate = function () {
        return defaultPlaybackRate;
    };
    that.setDefaultPlaybackRate = function (playbackRate) {
        defaultPlaybackRate = playbackRate;return playbackRate;
    };

    that.getQualityLabel = function () {
        return qualityLabel;
    };
    that.setQualityLabel = function (newLabel) {
        qualityLabel = newLabel;
    };

    that.getPlaybackRates = function () {
        return playbackRates;
    };
    that.isPlaybackRateControls = function () {
        return playbackRateControls;
    };

    that.getPlaylist = function () {
        return playlist;
    };
    that.setPlaylist = function (playlist_) {
        if (_underscore2.default.isArray(playlist_)) {
            playlist = playlist_;
        } else {
            playlist = [playlist_];
        }
        return playlist;
    };

    that.isRepeat = function () {
        return repeat;
    };

    that.getStretching = function () {
        return stretching;
    };

    return that;
};

exports.default = Configurator;

/***/ }),

/***/ "./src/js/api/EventEmitter.js":
/*!************************************!*\
  !*** ./src/js/api/EventEmitter.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by hoho on 2018. 7. 3..
 */

/**
 * @brief   This module provide custom events.
 * @param   object    An object that requires custom events.
 *
 * */

var EventEmitter = function EventEmitter(object) {
    var that = object;
    var _events = [];

    var triggerEvents = function triggerEvents(events, args, context) {
        var i = 0;
        var length = events.length;
        for (i = 0; i < length; i++) {
            var event = events[i];
            event.listener.apply(event.context || context, args);
        }
    };

    that.on = function (name, listener, context) {
        (_events[name] || (_events[name] = [])).push({ listener: listener, context: context });
        return that;
    };
    that.trigger = function (name) {
        if (!_events) {
            return false;
        }
        var args = [].slice.call(arguments, 1);
        var events = _events[name];
        var allEvents = _events.all;

        if (events) {
            triggerEvents(events, args, that);
        }
        if (allEvents) {
            triggerEvents(allEvents, arguments, that);
        }
    };
    that.off = function (name, listener, context) {
        if (!_events) {
            return false;
        }

        if (!name && !listener && !context) {
            _events = [];
            return that;
        }

        var names = name ? [name] : Object.keys(_events);
        for (var i = 0, l = names.length; i < l; i++) {
            name = names[i];
            var events = _events[name];
            if (events) {
                var retain = _events[name] = [];
                if (listener || context) {
                    for (var j = 0, k = events.length; j < k; j++) {
                        var event = events[j];
                        if (listener && listener !== event.listener && listener !== event.listener.listener && listener !== event.listener._callback || context && context !== event.context) {
                            retain.push(event);
                        }
                    }
                }
                if (!retain.length) {
                    delete _events[name];
                }
            }
        }
        return that;
    };
    that.once = function (name, listener, context) {
        var count = 0;
        var onceCallback = function onceCallback() {
            if (count++) {
                return;
            }
            that.off(name, onceCallback);
            listener.apply(that, arguments);
        };
        onceCallback._listener = listener;
        return that.on(name, onceCallback, context);
    };

    return that;
};

exports.default = EventEmitter;

/***/ }),

/***/ "./src/js/api/LazyCommandExecutor.js":
/*!*******************************************!*\
  !*** ./src/js/api/LazyCommandExecutor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _underscore = __webpack_require__(/*! utils/underscore */ "./src/js/utils/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @brief   This executes the input commands at a specific point in time.
 * @param   instance
 * @param   queuedCommands
 * */
var LazyCommandExecutor = function LazyCommandExecutor(instance, queuedCommands) {
    var commandQueue = [];
    var undecoratedMethods = {};
    var executeMode = false;
    var that = {};
    OvenPlayerConsole.log("LazyCommandExecutor loaded.");
    queuedCommands.forEach(function (command) {
        var method = instance[command];
        undecoratedMethods[command] = method || function () {};

        instance[command] = function () {
            var args = Array.prototype.slice.call(arguments, 0);
            if (!executeMode) {
                //commandQueue.push({ command, args });
                that.addQueue(command, args);
            } else {
                executeQueuedCommands();
                if (method) {
                    method.apply(that, args);
                }
            }
        };
    });
    var executeQueuedCommands = function executeQueuedCommands() {
        while (commandQueue.length > 0) {
            var _commandQueue$shift = commandQueue.shift(),
                command = _commandQueue$shift.command,
                args = _commandQueue$shift.args;

            (undecoratedMethods[command] || instance[command]).apply(instance, args);
        }
    };

    that.setExecuteMode = function (mode) {
        executeMode = mode;
        OvenPlayerConsole.log("LazyCommandExecutor : setExecuteMode()", mode);
    };
    that.getUndecoratedMethods = function () {
        OvenPlayerConsole.log("LazyCommandExecutor : getUndecoratedMethods()", undecoratedMethods);
        return undecoratedMethods;
    };
    that.getQueue = function () {
        OvenPlayerConsole.log("LazyCommandExecutor : getQueue()", getQueue);
        return commandQueue;
    };
    that.addQueue = function (command, args) {
        OvenPlayerConsole.log("LazyCommandExecutor : addQueue()", command, args);
        commandQueue.push({ command: command, args: args });
    };

    that.flush = function () {
        OvenPlayerConsole.log("LazyCommandExecutor : flush()");
        executeQueuedCommands();
    };
    that.empty = function () {
        OvenPlayerConsole.log("LazyCommandExecutor : empty()");
        commandQueue.length = 0;
    };
    that.off = function () {
        OvenPlayerConsole.log("LazyCommandExecutor : off()");
        queuedCommands.forEach(function (command) {
            var method = undecoratedMethods[command];
            if (method) {
                instance[command] = method;
                delete undecoratedMethods[command];
            }
        });
    };

    //Run once at the end
    that.removeAndExcuteOnce = function (command_) {
        var commandQueueItem = _underscore2.default.findWhere(commandQueue, { command: command_ });
        OvenPlayerConsole.log("LazyCommandExecutor : removeAndExcuteOnce()", command_);
        commandQueue.splice(_underscore2.default.findIndex(commandQueue, { command: command_ }), 1);

        var method = undecoratedMethods[command_];
        if (method) {
            OvenPlayerConsole.log("removeCommand()");
            if (commandQueueItem) {
                (method || instance[command_]).apply(instance, commandQueueItem.args);
            }
            instance[command_] = method;
            delete undecoratedMethods[command_];
        }
    };

    that.destroy = function () {
        OvenPlayerConsole.log("LazyCommandExecutor : destroy()");
        that.off();
        that.empty();
    };
    return that;
};

exports.default = LazyCommandExecutor;

/***/ }),

/***/ "./src/js/api/SupportChecker.js":
/*!**************************************!*\
  !*** ./src/js/api/SupportChecker.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validator = __webpack_require__(/*! utils/validator */ "./src/js/utils/validator.js");

/**
 * @brief   This finds the provider that matches the input source.
 * @param
 * */

var SupportChecker = function SupportChecker() {
    var that = {};
    OvenPlayerConsole.log("SupportChecker loaded.");
    var supportList = [{
        name: 'html5',
        checkSupport: function checkSupport(source) {
            var MimeTypes = {
                aac: 'audio/mp4',
                mp4: 'video/mp4',
                f4v: 'video/mp4',
                m4v: 'video/mp4',
                mov: 'video/mp4',
                mp3: 'audio/mpeg',
                mpeg: 'audio/mpeg',
                ogv: 'video/ogg',
                ogg: 'video/ogg',
                oga: 'video/ogg',
                vorbis: 'video/ogg',
                webm: 'video/webm',
                f4a: 'video/aac',
                m3u8: 'application/vnd.apple.mpegurl',
                m3u: 'application/vnd.apple.mpegurl',
                hls: 'application/vnd.apple.mpegurl'
            };

            var video = function () {
                return document.createElement('video');
            }();
            if (!video.canPlayType) {
                return false;
            }

            var file = source.file;
            var type = source.type;
            if (!type) {
                return false;
            }
            var mimeType = source.mimeType || MimeTypes[type];

            if ((0, _validator.isRtmp)(file, type)) {
                return false;
            }

            if ((0, _validator.isWebRTC)(file, type)) {
                return false;
            }

            if (!mimeType) {
                return false;
            }

            return !!video.canPlayType(mimeType);
        }
    }, {
        name: 'webrtc',
        checkSupport: function checkSupport(source) {
            var video = function () {
                return document.createElement('video');
            }();
            if (!video.canPlayType) {
                return false;
            }

            var file = source.file;
            var type = source.type;

            if ((0, _validator.isWebRTC)(file, type)) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        name: 'dash',
        checkSupport: function checkSupport(source) {
            var file = source.file;

            //mpd application/dash+xml
            var type = source.type;
            if ((0, _validator.isDash)(file, type)) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        name: 'hls',
        checkSupport: function checkSupport(source) {
            var video = function () {
                return document.createElement('video');
            }();

            //this method from hls.js
            var isHlsSupport = function isHlsSupport() {
                function getMediaSource() {
                    if (typeof window !== 'undefined') {
                        return window.MediaSource || window.WebKitMediaSource;
                    }
                }
                var mediaSource = getMediaSource();
                var sourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer;
                var isTypeSupported = mediaSource && typeof mediaSource.isTypeSupported === 'function' && mediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');

                // if SourceBuffer is exposed ensure its API is valid
                // safari and old version of Chrome doe not expose SourceBuffer globally so checking SourceBuffer.prototype is impossible
                var sourceBufferValidAPI = !sourceBuffer || sourceBuffer.prototype && typeof sourceBuffer.prototype.appendBuffer === 'function' && typeof sourceBuffer.prototype.remove === 'function';
                return !!isTypeSupported && !!sourceBufferValidAPI;
            };
            //Remove this '!!video.canPlayType('application/vnd.apple.mpegurl')' if you want to use hlsjs.
            return isHlsSupport() && !!video.canPlayType('application/vnd.apple.mpegurl');
        }
    }, {
        name: 'rtmp',
        checkSupport: function checkSupport(source) {
            var file = source.file;
            var type = source.type;
            if ((0, _validator.isRtmp)(file, type)) {
                return true;
            } else {
                return false;
            }
        }
    }];

    that.findProviderNameBySource = function (soruce_) {
        OvenPlayerConsole.log("SupportChecker : findProviderNameBySource()", soruce_);
        var source = soruce_ === Object(soruce_) ? soruce_ : {};
        for (var i = 0; i < supportList.length; i++) {
            if (supportList[i].checkSupport(source)) {
                return supportList[i].name;
            }
        }
    };
    that.findProviderNamesByPlaylist = function (playlist_) {
        OvenPlayerConsole.log("SupportChecker : findProviderNamesByPlaylist()", playlist_);
        var supportNames = [];
        for (var i = playlist_.length; i--;) {
            var item = playlist_[i];
            var source = "";
            for (var j = 0; j < item.sources.length; j++) {
                source = item.sources[j];
                if (source) {
                    var supported = that.findProviderNameBySource(source);
                    if (supported) {
                        supportNames.push(supported);
                    }
                }
            }
        }

        return supportNames;
    };
    return that;
};

exports.default = SupportChecker;

/***/ }),

/***/ "./src/js/api/constants.js":
/*!*********************************!*\
  !*** ./src/js/api/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// STATE
var STATE_BUFFERING = exports.STATE_BUFFERING = 'buffering';
var STATE_IDLE = exports.STATE_IDLE = 'idle';
var STATE_COMPLETE = exports.STATE_COMPLETE = 'complete';
var STATE_PAUSED = exports.STATE_PAUSED = 'paused';
var STATE_PLAYING = exports.STATE_PLAYING = 'playing';
var STATE_ERROR = exports.STATE_ERROR = 'error';
var STATE_LOADING = exports.STATE_LOADING = 'loading';
var STATE_STALLED = exports.STATE_STALLED = 'stalled';

// PROVIDER
var PROVIDER_HTML5 = exports.PROVIDER_HTML5 = 'html5';
var PROVIDER_WEBRTC = exports.PROVIDER_WEBRTC = 'webrtc';
var PROVIDER_DASH = exports.PROVIDER_DASH = 'dash';
var PROVIDER_HLS = exports.PROVIDER_HLS = 'hls';
var PROVIDER_RTMP = exports.PROVIDER_RTMP = 'rtmp';

// EVENTS
var CONTENT_COMPLETE = exports.CONTENT_COMPLETE = STATE_COMPLETE;
var READY = exports.READY = 'ready';
var DESTROY = exports.DESTROY = 'destroy';
var CONTENT_SEEK = exports.CONTENT_SEEK = 'seek';
var CONTENT_BUFFER_FULL = exports.CONTENT_BUFFER_FULL = 'bufferFull';
var DISPLAY_CLICK = exports.DISPLAY_CLICK = 'displayClick';
var CONTENT_LOADED = exports.CONTENT_LOADED = 'loaded';
var CONTENT_SEEKED = exports.CONTENT_SEEKED = 'seeked';
var NETWORK_UNSTABLED = exports.NETWORK_UNSTABLED = 'unstableNetwork';

var ERROR = exports.ERROR = 'error';

// STATE OF PLAYER
var PLAYER_STATE = exports.PLAYER_STATE = 'stateChanged';
var PLAYER_COMPLETE = exports.PLAYER_COMPLETE = STATE_COMPLETE;
var PLAYER_PAUSE = exports.PLAYER_PAUSE = 'pause';
var PLAYER_PLAY = exports.PLAYER_PLAY = 'play';

var CONTENT_BUFFER = exports.CONTENT_BUFFER = 'bufferChanged';
var CONTENT_TIME = exports.CONTENT_TIME = 'time';
var CONTENT_RATE_CHANGE = exports.CONTENT_RATE_CHANGE = 'ratechange';
var CONTENT_VOLUME = exports.CONTENT_VOLUME = 'volumeChanged';
var CONTENT_MUTE = exports.CONTENT_MUTE = 'mute';
var CONTENT_META = exports.CONTENT_META = 'metaChanged';
var CONTENT_LEVELS = exports.CONTENT_LEVELS = 'qualityLevelChanged';
var CONTENT_LEVEL_CHANGED = exports.CONTENT_LEVEL_CHANGED = 'currentQualityLevelChanged';
var PLAYBACK_RATE_CHANGED = exports.PLAYBACK_RATE_CHANGED = 'playbackRateChanged';
var CONTENT_CAPTION_CUE_CHANGED = exports.CONTENT_CAPTION_CUE_CHANGED = 'cueChanged';
var CONTENT_CAPTION_CHANGED = exports.CONTENT_CAPTION_CHANGED = 'captionChanged';

var INIT_ERROR = exports.INIT_ERROR = 100;
var PLAYER_UNKNWON_ERROR = exports.PLAYER_UNKNWON_ERROR = 300;
var PLAYER_UNKNWON_OPERATION_ERROR = exports.PLAYER_UNKNWON_OPERATION_ERROR = 301;
var PLAYER_UNKNWON_NEWWORK_ERROR = exports.PLAYER_UNKNWON_NEWWORK_ERROR = 302;
var PLAYER_UNKNWON_DECODE_ERROR = exports.PLAYER_UNKNWON_DECODE_ERROR = 303;
var PLAYER_FILE_ERROR = exports.PLAYER_FILE_ERROR = 304;
var PLAYER_CAPTION_ERROR = exports.PLAYER_CAPTION_ERROR = 305;
var PLAYER_WEBRTC_WS_ERROR = exports.PLAYER_WEBRTC_WS_ERROR = 501;
var PLAYER_WEBRTC_WS_CLOSED = exports.PLAYER_WEBRTC_WS_CLOSED = 502;
var PLAYER_WEBRTC_ADD_ICECANDIDATE_ERROR = exports.PLAYER_WEBRTC_ADD_ICECANDIDATE_ERROR = 503;
var PLAYER_WEBRTC_SET_REMOTE_DESC_ERROR = exports.PLAYER_WEBRTC_SET_REMOTE_DESC_ERROR = 504;
var PLAYER_WEBRTC_CREATE_ANSWER_ERROR = exports.PLAYER_WEBRTC_CREATE_ANSWER_ERROR = 505;
var PLAYER_WEBRTC_SET_LOCAL_DESC_ERROR = exports.PLAYER_WEBRTC_SET_LOCAL_DESC_ERROR = 506;
var PLAYER_WEBRTC_NETWORK_SLOW = exports.PLAYER_WEBRTC_NETWORK_SLOW = 510;

/***/ }),

/***/ "./src/js/api/playlist/Manager.js":
/*!****************************************!*\
  !*** ./src/js/api/playlist/Manager.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _underscore = __webpack_require__(/*! utils/underscore */ "./src/js/utils/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

var _validator = __webpack_require__(/*! utils/validator */ "./src/js/utils/validator.js");

var _strings = __webpack_require__(/*! ../../utils/strings */ "./src/js/utils/strings.js");

var _SupportChecker = __webpack_require__(/*! ../SupportChecker */ "./src/js/api/SupportChecker.js");

var _SupportChecker2 = _interopRequireDefault(_SupportChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @brief   This manages Playlist or Sources.
 * @param
 *
 * */
var Manager = function Manager() {
    var that = {};
    var currentPlaylist = [];
    var supportChecker = (0, _SupportChecker2.default)();

    OvenPlayerConsole.log("PlaylistManager loaded.");

    var makePrettySource = function makePrettySource(source_) {
        if (!source_ || !source_.file && !(source_.host || source_.application || source_.stream)) {
            return;
        }

        var source = _extends({}, { 'default': false }, source_);
        source.file = (0, _strings.trim)('' + source.file);

        if (source.host && source.application && source.stream) {
            source.file = source.host + "/" + source.application + "/stream/" + source.stream;
            delete source.host;
            delete source.application;
            delete source.stream;
        }

        var mimetypeRegEx = /^[^/]+\/(?:x-)?([^/]+)$/;

        if (mimetypeRegEx.test(source.type)) {
            // if type is given as a mimetype
            source.mimeType = source.type;
            source.type = source.type.replace(mimetypeRegEx, '$1');
        }

        if ((0, _validator.isRtmp)(source.file)) {
            source.type = 'rtmp';
        } else if ((0, _validator.isWebRTC)(source.file)) {
            source.type = 'webrtc';
        } else if ((0, _validator.isDash)(source.file, source.type)) {
            source.type = 'dash';
        } else if (!source.type) {
            source.type = (0, _strings.extractExtension)(source.file);
        }

        if (!source.type) {
            return;
        }

        // normalize types
        switch (source.type) {
            case 'm3u8':
            case 'vnd.apple.mpegurl':
                source.type = 'hls';
                break;
            case 'm4a':
                source.type = 'aac';
                break;
            case 'smil':
                source.type = 'rtmp';
                break;
            default:
                break;
        }
        Object.keys(source).forEach(function (key) {
            if (source[key] === '') {
                delete source[key];
            }
        });

        return source;
    };

    that.setPlaylist = function (playlist) {
        OvenPlayerConsole.log("PlaylistManager setPlaylist() ", playlist);
        var prettiedPlaylist = (_underscore2.default.isArray(playlist) ? playlist : [playlist]).map(function (item) {
            if (!_underscore2.default.isArray(item.tracks)) {
                delete item.tracks;
            }
            var playlistItem = _extends({}, {
                sources: [],
                tracks: []
            }, item);

            if (playlistItem.sources === Object(playlistItem.sources) && !_underscore2.default.isArray(playlistItem.sources)) {
                playlistItem.sources = [makePrettySource(playlistItem.sources)];
            }

            if (!_underscore2.default.isArray(playlistItem.sources) || playlistItem.sources.length === 0) {
                if (item.levels) {
                    playlistItem.sources = item.levels;
                } else {
                    playlistItem.sources = [makePrettySource(item)];
                }
            }

            for (var i = 0; i < playlistItem.sources.length; i++) {
                var source = playlistItem.sources[i];
                var prettySource = "";
                if (!source) {
                    continue;
                }

                var defaultSource = source.default;
                if (defaultSource) {
                    source.default = defaultSource.toString() === 'true';
                } else {
                    source.default = false;
                }

                // If the source doesn't have a label, number it
                if (!playlistItem.sources[i].label) {
                    playlistItem.sources[i].label = playlistItem.sources[i].type + "-" + i.toString();
                }

                prettySource = makePrettySource(playlistItem.sources[i]);
                if (supportChecker.findProviderNameBySource(prettySource)) {
                    playlistItem.sources[i] = prettySource;
                } else {
                    playlistItem.sources[i] = null;
                }
            }

            playlistItem.sources = playlistItem.sources.filter(function (source) {
                return !!source;
            });

            // default 가 없을때 webrtc가 있다면 webrtc default : true로 자동 설정
            /*let haveDefault = _.find(playlistItem.sources, function(source){return source.default == true;});
            let webrtcSource = [];
            if(!haveDefault){
                webrtcSource = _.find(playlistItem.sources, function(source){return source.type == "webrtc";});
                if(webrtcSource){
                    webrtcSource.default = true;
                }
            }*/

            if (!_underscore2.default.isArray(playlistItem.tracks)) {
                playlistItem.tracks = [];
            }
            if (_underscore2.default.isArray(playlistItem.captions)) {
                playlistItem.tracks = playlistItem.tracks.concat(playlistItem.captions);
                delete playlistItem.captions;
            }

            playlistItem.tracks = playlistItem.tracks.map(function (track) {
                if (!track || !track.file) {
                    return false;
                }
                return _extends({}, {
                    'kind': 'captions',
                    'default': false
                }, track);
            }).filter(function (track) {
                return !!track;
            });

            return playlistItem;
        });
        currentPlaylist = prettiedPlaylist;
        return prettiedPlaylist;
    };
    that.getPlaylist = function () {
        OvenPlayerConsole.log("PlaylistManager getPlaylist() ", currentPlaylist);
        return currentPlaylist;
    };
    that.getCurrentSources = function () {
        //We do not support "PLAYLIST" not yet. So this returns playlist of 0.
        OvenPlayerConsole.log("PlaylistManager getCurrentSources() ", currentPlaylist[0].sources);
        return currentPlaylist[0].sources;
    };

    return that;
};

exports.default = Manager;

/***/ }),

/***/ "./src/js/api/provider/Controller.js":
/*!*******************************************!*\
  !*** ./src/js/api/provider/Controller.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SupportChecker = __webpack_require__(/*! api/SupportChecker */ "./src/js/api/SupportChecker.js");

var _SupportChecker2 = _interopRequireDefault(_SupportChecker);

var _promise = __webpack_require__(/*! api/shims/promise */ "./src/js/api/shims/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _ApiExpansions = __webpack_require__(/*! api/ApiExpansions */ "./src/js/api/ApiExpansions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @brief   This manages provider.
 * @param
 * */
var Controller = function Controller() {
    var supportChacker = (0, _SupportChecker2.default)();
    var Providers = {};

    var that = {};
    OvenPlayerConsole.log("ProviderController loaded.");

    var registeProvider = function registeProvider(name, provider) {
        if (Providers[name]) {
            return;
        }
        OvenPlayerConsole.log("ProviderController _registerProvider() ", name);
        Providers[name] = provider;
    };

    var ProviderLoader = {
        html5: function html5() {
            return Promise.all(/*! require.ensure | ovenplayer.provider.Html5 */[__webpack_require__.e("ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~7afd68cf"), __webpack_require__.e("ovenplayer.provider.Html5")]).then((function (require) {
                var provider = __webpack_require__(/*! api/provider/html5/Html5 */ "./src/js/api/provider/html5/Html5.js").default;
                registeProvider("html5", provider);
                return provider;
            }).bind(null, __webpack_require__)).catch(function (err) {
                throw new Error('Network error');
            });
        },
        webrtc: function webrtc() {
            return Promise.all(/*! require.ensure | ovenplayer.provider.WebRTCProvider */[__webpack_require__.e("ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~7afd68cf"), __webpack_require__.e("ovenplayer.provider.WebRTCProvider")]).then((function (require) {
                var provider = __webpack_require__(/*! api/provider/html5/WebRTC */ "./src/js/api/provider/html5/WebRTC.js").default;
                registeProvider("webrtc", provider);
                return provider;
            }).bind(null, __webpack_require__)).catch(function (err) {
                throw new Error('Network error');
            });
        },
        dash: function dash() {
            return Promise.all(/*! require.ensure | ovenplayer.provider.DashProvider */[__webpack_require__.e("ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~7afd68cf"), __webpack_require__.e("ovenplayer.provider.DashProvider")]).then((function (require) {
                var provider = __webpack_require__(/*! api/provider/html5/Dash */ "./src/js/api/provider/html5/Dash.js").default;
                registeProvider("dash", provider);
                return provider;
            }).bind(null, __webpack_require__)).catch(function (err) {
                throw new Error('Network error');
            });
        },
        hls: function hls() {
            return Promise.all(/*! require.ensure | ovenplayer.provider.HlsProvider */[__webpack_require__.e("ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~7afd68cf"), __webpack_require__.e("ovenplayer.provider.HlsProvider")]).then((function (require) {
                var provider = __webpack_require__(/*! api/provider/html5/Hls */ "./src/js/api/provider/html5/Hls.js").default;
                registeProvider("hls", provider);
                return provider;
            }).bind(null, __webpack_require__)).catch(function (err) {
                throw new Error('Network error');
            });
        },
        rtmp: function rtmp() {
            return __webpack_require__.e(/*! require.ensure | ovenplayer.provider.RtmpProvider */ "ovenplayer.provider.RtmpProvider").then((function (require) {
                var provider = __webpack_require__(/*! api/provider/flash/Rtmp */ "./src/js/api/provider/flash/Rtmp.js").default;
                registeProvider("rtmp", provider);
                return provider;
            }).bind(null, __webpack_require__)).catch(function (err) {
                throw new Error('Network error');
            });
        }
    };

    that.loadProviders = function (playlist) {
        var supportedProviderNames = supportChacker.findProviderNamesByPlaylist(playlist);
        OvenPlayerConsole.log("ProviderController loadProviders() ", supportedProviderNames);
        return _promise2.default.all(supportedProviderNames.filter(function (providerName) {
            return !!ProviderLoader[providerName];
        }).map(function (providerName) {
            var provider = ProviderLoader[providerName]();
            return provider;
        }));
    };

    that.findByName = function (name) {
        OvenPlayerConsole.log("ProviderController findByName() ", name);
        return Providers[name];
    };

    that.getProviderBySource = function (source) {
        var supportedProviderName = supportChacker.findProviderNameBySource(source);
        OvenPlayerConsole.log("ProviderController getProviderBySource() ", supportedProviderName);
        return that.findByName(supportedProviderName);
    };

    that.isSameProvider = function (currentSource, newSource) {
        OvenPlayerConsole.log("ProviderController isSameProvider() ", supportChacker.findProviderNameBySource(currentSource), supportChacker.findProviderNameBySource(newSource));
        return supportChacker.findProviderNameBySource(currentSource) === supportChacker.findProviderNameBySource(newSource);
    };

    return that;
};

exports.default = Controller;

/***/ }),

/***/ "./src/js/api/shims/promise.js":
/*!*************************************!*\
  !*** ./src/js/api/shims/promise.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//      Promise Polyfill
//      https://github.com/taylorhakes/promise-polyfill
//      Copyright (c) 2014 Taylor Hakes
//      Copyright (c) 2014 Forbes Lindesay
//      taylorhakes/promise-polyfill is licensed under the MIT License

var promiseFinally = function promiseFinally(callback) {
    var constructor = this.constructor;
    return this.then(function (value) {
        return constructor.resolve(callback()).then(function () {
            return value;
        });
    }, function (reason) {
        return constructor.resolve(callback()).then(function () {
            return constructor.reject(reason);
        });
    });
};

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = window.setTimeout;
var setImmediateFunc = window.setImmediate;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
    return function () {
        fn.apply(thisArg, arguments);
    };
}

var PromiseShim = function PromiseShim(fn) {
    if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
};

var handle = function handle(self, deferred) {
    while (self._state === 3) {
        self = self._value;
    }
    if (self._state === 0) {
        self._deferreds.push(deferred);
        return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
        var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
            (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
            return;
        }
        var ret;
        try {
            ret = cb(self._value);
        } catch (e) {
            reject(deferred.promise, e);
            return;
        }
        resolve(deferred.promise, ret);
    });
};

var resolve = function resolve(self, newValue) {
    try {
        // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
        if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
        if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
            var then = newValue.then;
            if (newValue instanceof Promise) {
                self._state = 3;
                self._value = newValue;
                finale(self);
                return;
            } else if (typeof then === 'function') {
                doResolve(bind(then, newValue), self);
                return;
            }
        }
        self._state = 1;
        self._value = newValue;
        finale(self);
    } catch (e) {
        reject(self, e);
    }
};

var reject = function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
};

var finale = function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
        Promise._immediateFn(function () {
            if (!self._handled) {
                Promise._unhandledRejectionFn(self._value);
            }
        });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
        handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
};

var Handler = function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
};

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
var doResolve = function doResolve(fn, self) {
    var done = false;
    try {
        fn(function (value) {
            if (done) return;
            done = true;
            resolve(self, value);
        }, function (reason) {
            if (done) return;
            done = true;
            reject(self, reason);
        });
    } catch (ex) {
        if (done) return;
        done = true;
        reject(self, ex);
    }
};

PromiseShim.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
};

PromiseShim.prototype.then = function (onFulfilled, onRejected) {
    var prom = new this.constructor(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
};

PromiseShim.prototype['finally'] = promiseFinally;

PromiseShim.all = function (arr) {
    return new Promise(function (resolve, reject) {
        if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
        var args = Array.prototype.slice.call(arr);
        if (args.length === 0) return resolve([]);
        var remaining = args.length;

        function res(i, val) {
            try {
                if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
                    var then = val.then;
                    if (typeof then === 'function') {
                        then.call(val, function (val) {
                            res(i, val);
                        }, reject);
                        return;
                    }
                }
                args[i] = val;
                if (--remaining === 0) {
                    resolve(args);
                }
            } catch (ex) {
                reject(ex);
            }
        }

        for (var i = 0; i < args.length; i++) {
            res(i, args[i]);
        }
    });
};

PromiseShim.resolve = function (value) {
    if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
        return value;
    }

    return new Promise(function (resolve) {
        resolve(value);
    });
};

PromiseShim.reject = function (value) {
    return new Promise(function (resolve, reject) {
        reject(value);
    });
};

PromiseShim.race = function (values) {
    return new Promise(function (resolve, reject) {
        for (var i = 0, len = values.length; i < len; i++) {
            values[i].then(resolve, reject);
        }
    });
};

// Use polyfill for setImmediate for performance gains
PromiseShim._immediateFn = typeof setImmediateFunc === 'function' && function (fn) {
    setImmediateFunc(fn);
} || function (fn) {
    setImmediateFunc(fn, 0);
};

PromiseShim._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
        console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
};

var Promise = window.Promise || (window.Promise = PromiseShim);

var resolved = exports.resolved = Promise.resolve();

exports.default = Promise;

/***/ }),

/***/ "./src/js/ovenplayer.js":
/*!******************************!*\
  !*** ./src/js/ovenplayer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ovenplayer = __webpack_require__(/*! ./ovenplayer.sdk */ "./src/js/ovenplayer.sdk.js");

var _ovenplayer2 = _interopRequireDefault(_ovenplayer);

var _view = __webpack_require__(/*! ./view/view */ "./src/js/view/view.js");

var _view2 = _interopRequireDefault(_view);

var _dom = __webpack_require__(/*! ./utils/polyfills/dom.js */ "./src/js/utils/polyfills/dom.js");

var _dom2 = _interopRequireDefault(_dom);

var _webpack = __webpack_require__(/*! utils/webpack */ "./src/js/utils/webpack.js");

var _browser = __webpack_require__(/*! utils/browser */ "./src/js/utils/browser.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__.p = (0, _webpack.getScriptPath)('ovenplayer.js');

var OvenPlayer = {};
window.OvenPlayer = OvenPlayer;

/**
 * Copy properties from OvenPlayerSDK object to OvenPlayer object
 */
_extends(OvenPlayer, _ovenplayer2.default);

OvenPlayer.create = function (container, options) {
    var browserName = (0, _browser.getBrowser)();
    if (browserName === "ie") {}
    var containerElement = (0, _ovenplayer.checkAndGetContainerElement)(container);

    var player = (0, _view2.default)(containerElement);

    var playerInstance = _ovenplayer2.default.create(player.getMediaElementContainer(), options);

    _extends(playerInstance, {
        getContainerId: function getContainerId() {
            return containerElement.id;
        }
    });

    player.setApi(playerInstance);

    return playerInstance;
};

/***/ }),

/***/ "./src/js/ovenplayer.sdk.js":
/*!**********************************!*\
  !*** ./src/js/ovenplayer.sdk.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkAndGetContainerElement = undefined;

var _Api = __webpack_require__(/*! api/Api */ "./src/js/api/Api.js");

var _Api2 = _interopRequireDefault(_Api);

var _validator = __webpack_require__(/*! utils/validator */ "./src/js/utils/validator.js");

var _underscore = __webpack_require__(/*! utils/underscore */ "./src/js/utils/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

var _likeA$ = __webpack_require__(/*! utils/likeA$ */ "./src/js/utils/likeA$.js");

var _likeA$2 = _interopRequireDefault(_likeA$);

var _webpack = __webpack_require__(/*! utils/webpack */ "./src/js/utils/webpack.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__.p = (0, _webpack.getScriptPath)('ovenplayer.sdk.js');

/**
 * Main OvenPlayerSDK object
 */
var OvenPlayerSDK = window.OvenPlayerSDK = {};

var playerList = OvenPlayerSDK.playerList = [];

var checkAndGetContainerElement = exports.checkAndGetContainerElement = function checkAndGetContainerElement(container) {

    if (!container) {

        // TODO(rock): Should cause an error.
        return null;
    }

    var containerElement = null;

    if (typeof container === 'string') {

        containerElement = document.getElementById(container);
    } else if (container.nodeType) {

        containerElement = container;
    } else {
        // TODO(rock): Should cause an error.
        return null;
    }

    return containerElement;
};

/**
 * Create player instance and return it.
 *
 * @param      {string | dom element} container  Id of container element or container element
 * @param      {object} options  The options
 */
OvenPlayerSDK.create = function (container, options) {

    var containerElement = checkAndGetContainerElement(container);

    var playerInstance = (0, _Api2.default)(containerElement);
    playerInstance.init(options);

    playerList.push(playerInstance);

    return playerInstance;
};

/**
 * Gets the player instance list.
 *
 * @return     {array}  The player list.
 */
OvenPlayerSDK.getPlayerList = function () {

    return playerList;
};

/**
 * Gets the player instance by container id.
 *
 * @param      {string}  containerId  The container identifier
 * @return     {obeject | null}  The player instance.
 */
OvenPlayerSDK.getPlayerByContainerId = function (containerId) {

    for (var i = 0; i < playerList.length; i++) {

        if (playerList[i].getContainerId() === containerId) {

            return playerList[i];
        }
    }

    return null;
};

/**
 * Gets the player instance by index.
 *
 * @param      {number}  index   The index
 * @return     {object | null}  The player instance.
 */
OvenPlayerSDK.getPlayerByIndex = function (index) {

    var playerInstance = playerList[index];

    if (playerInstance) {

        return playerInstance;
    } else {

        return null;
    }
};

/**
 * Remove the player instance by playerId.
 *
 * @param      {playerId}  id
 * @return     {null}
 */
OvenPlayerSDK.removePlayer = function (playerId) {
    console.log(playerId);
    for (var i = 0; i < playerList.length; i++) {

        if (playerList[i].getContainerId() === playerId) {

            playerList.splice(i, 1);
        }
    }
};

/**
 * Generate webrtc source for player source type.
 *
 * @param      {Object | Array}  source   webrtc source
 * @return     {Array}  Player source Obejct.
 */
OvenPlayerSDK.generateWebrtcUrls = function (sources) {
    return (_underscore2.default.isArray(sources) ? sources : [sources]).map(function (source, index) {
        if (source.host && (0, _validator.isWebRTC)(source.host) && source.application && source.stream) {
            return { file: source.host + "/" + source.application + "/" + source.stream, type: "webrtc", label: source.label ? source.label : "webrtc-" + (index + 1) };
        }
    });
};

exports.default = OvenPlayerSDK;

/***/ }),

/***/ "./src/js/utils/browser.js":
/*!*********************************!*\
  !*** ./src/js/utils/browser.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by hoho on 2018. 8. 24..
 */

var getBrowser = exports.getBrowser = function getBrowser() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        return 'opera';
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        return 'chrome';
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        return 'safari';
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        return 'firefox';
    } else if (navigator.userAgent.indexOf("MSIE") != -1) {
        var msie = navigator.userAgent.indexOf("MSIE");
        /*if(!!document.documentMode == true ){
            return 'ie';
        }else if(!!navigator.userAgent.match(/Trident.*rv\:11\./)){
            if (!isNaN(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))))) {
                return 'ie';
            }else{
                return 'unknown';
            }
        }else{
            return 'unknown';
        }*/
        var ie = function () {

            var undef,
                v = 3,
                div = document.createElement('div'),
                all = div.getElementsByTagName('i');

            while (div.innerHTML = '<!--[if gt IE ' + ++v + ']><i></i><![endif]-->', all[0]) {}

            return v > 4 ? v : undef;
        }();
        if (ie < 9) {
            return 'oldIE';
        } else {
            return 'modernIE';
        }
    } else {
        return 'unknown';
    }
};

/***/ }),

/***/ "./src/js/utils/likeA$.js":
/*!********************************!*\
  !*** ./src/js/utils/likeA$.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _underscore = __webpack_require__(/*! utils/underscore */ "./src/js/utils/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @brief   It was replace jquery's selector. It Often used by OvenTemplate. (/view/engine/OvenTemplate.js)
 * @param   selectorOrElement  string or element
 *
 * */

var La$ = function La$(selectorOrElement) {
    var that = {};
    var returnNode = function returnNode($element, selector) {
        var nodeList = $element.querySelectorAll(selector);
        if (nodeList.length > 1) {
            return nodeList;
        } else {
            return nodeList[0];
        }
    };

    var $element = "";

    if (_underscore2.default.every(selectorOrElement, function (item) {
        return _underscore2.default.isElement(item);
    })) {
        $element = selectorOrElement;
    } else if (selectorOrElement === "document") {
        $element = document;
    } else if (selectorOrElement === "window") {
        $element = window;
    } else {
        $element = returnNode(document, selectorOrElement);
    }

    if (!$element) {
        return null;
    }

    that.find = function (selector) {
        return La$(returnNode($element, selector));
    };

    that.css = function (name, value) {
        if ($element.length > 0) {
            $element.forEach(function (element) {
                element.style[name] = value;
            });
        } else {
            $element.style[name] = value;
        }
    };

    that.addClass = function (name) {
        if ($element.classList) {
            $element.classList.add(name);
        } else {
            var classNames = $element.className.split(" ");
            if (classNames.indexOf(name) === -1) {
                $element.className += " " + name;
            }
        }
    };

    that.removeClass = function (name) {
        if ($element.classList) {
            $element.classList.remove(name);
        } else {
            $element.className = $element.className.replace(new RegExp('(^|\\b)' + name.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };

    that.removeAttribute = function (attrName) {
        $element.removeAttribute(attrName);
    };

    that.show = function () {
        $element.style.display = 'block';
    };

    that.hide = function () {
        $element.style.display = 'none';
    };

    that.append = function (htmlCode) {
        $element.innerHTML += htmlCode;
    };

    that.text = function (text) {
        //IE8+
        if (text) {
            $element.textContent = text;
        } else {
            return $element.textContent;
        }
    };

    that.hasClass = function (name) {
        //IE8+
        if ($element.classList) {
            return $element.classList.contains(name);
        } else {
            return new RegExp('(^| )' + name + '( |$)', 'gi').test($element.name);
        }
    };

    that.is = function ($targetElement) {
        return $element === $targetElement;
    };

    that.offset = function () {
        //IE8+
        var rect = $element.getBoundingClientRect();

        return {
            top: rect.top + document.body.scrollTop,
            left: rect.left + document.body.scrollLeft
        };
    };

    that.width = function () {
        //IE8+
        return $element.clientWidth;
    };

    that.height = function () {
        //IE8+
        return $element.clientHeight;
    };

    that.attr = function (attr) {
        return $element.getAttribute(attr);
    };

    that.replace = function (html) {
        $element.replaceWith(html);
    };

    that.append = function (html) {
        $element.appendChild(html);
    };

    that.remove = function () {
        $element.remove();
    };

    that.removeChild = function () {
        while ($element.hasChildNodes()) {
            $element.removeChild($element.firstChild);
        }
    };

    that.get = function () {
        return $element;
    };

    that.closest = function (selectorString) {
        return $element.closest(selectorString);
    };

    return that;
}; /**
    * Created by hoho on 2018. 7. 23..
    */
exports.default = La$;

/***/ }),

/***/ "./src/js/utils/logger.js":
/*!********************************!*\
  !*** ./src/js/utils/logger.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by hoho on 2018. 5. 24..
 */

var logger = function logger() {
    var that = {};
    var prevConsoleLog = null;

    window.OvenPlayerConsole = { log: window['console']['log'] };

    that.enable = function () {
        if (prevConsoleLog == null) {
            return;
        }
        OvenPlayerConsole['log'] = prevConsoleLog;
    };
    that.disable = function () {
        prevConsoleLog = console.log;
        OvenPlayerConsole['log'] = function () {};
    };
    that.destroy = function () {
        window.OvenPlayerConsole = null;
    };

    return that;
};

exports.default = logger;

/***/ }),

/***/ "./src/js/utils/polyfills/dom.js":
/*!***************************************!*\
  !*** ./src/js/utils/polyfills/dom.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright 2018 Joshua Bell

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
* */

(function (global) {
    'use strict';

    if (!('window' in global && 'document' in global)) return;

    //----------------------------------------------------------------------
    //
    // DOM
    // https://dom.spec.whatwg.org/
    //
    //----------------------------------------------------------------------

    // Document.querySelectorAll method
    // http://ajaxian.com/archives/creating-a-queryselector-for-ie-that-runs-at-native-speed
    // Needed for: IE7-
    if (!document.querySelectorAll) {
        document.querySelectorAll = function (selectors) {
            var style = document.createElement('style'),
                elements = [],
                element;
            document.documentElement.firstChild.appendChild(style);
            document._qsa = [];

            style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
            window.scrollBy(0, 0);
            style.parentNode.removeChild(style);

            while (document._qsa.length) {
                element = document._qsa.shift();
                element.style.removeAttribute('x-qsa');
                elements.push(element);
            }
            document._qsa = null;
            return elements;
        };
    }

    // Document.querySelector method
    // Needed for: IE7-
    if (!document.querySelector) {
        document.querySelector = function (selectors) {
            var elements = document.querySelectorAll(selectors);
            return elements.length ? elements[0] : null;
        };
    }

    // Document.getElementsByClassName method
    // Needed for: IE8-
    if (!document.getElementsByClassName) {
        document.getElementsByClassName = function (classNames) {
            classNames = String(classNames).replace(/^|\s+/g, '.');
            return document.querySelectorAll(classNames);
        };
    }

    // Node interface constants
    // Needed for: IE8-
    global.Node = global.Node || function () {
        throw TypeError("Illegal constructor");
    };
    [['ELEMENT_NODE', 1], ['ATTRIBUTE_NODE', 2], ['TEXT_NODE', 3], ['CDATA_SECTION_NODE', 4], ['ENTITY_REFERENCE_NODE', 5], ['ENTITY_NODE', 6], ['PROCESSING_INSTRUCTION_NODE', 7], ['COMMENT_NODE', 8], ['DOCUMENT_NODE', 9], ['DOCUMENT_TYPE_NODE', 10], ['DOCUMENT_FRAGMENT_NODE', 11], ['NOTATION_NODE', 12]].forEach(function (p) {
        if (!(p[0] in global.Node)) global.Node[p[0]] = p[1];
    });

    // DOMException constants
    // Needed for: IE8-
    global.DOMException = global.DOMException || function () {
        throw TypeError("Illegal constructor");
    };
    [['INDEX_SIZE_ERR', 1], ['DOMSTRING_SIZE_ERR', 2], ['HIERARCHY_REQUEST_ERR', 3], ['WRONG_DOCUMENT_ERR', 4], ['INVALID_CHARACTER_ERR', 5], ['NO_DATA_ALLOWED_ERR', 6], ['NO_MODIFICATION_ALLOWED_ERR', 7], ['NOT_FOUND_ERR', 8], ['NOT_SUPPORTED_ERR', 9], ['INUSE_ATTRIBUTE_ERR', 10], ['INVALID_STATE_ERR', 11], ['SYNTAX_ERR', 12], ['INVALID_MODIFICATION_ERR', 13], ['NAMESPACE_ERR', 14], ['INVALID_ACCESS_ERR', 15]].forEach(function (p) {
        if (!(p[0] in global.DOMException)) global.DOMException[p[0]] = p[1];
    });

    // Event and EventTargets interfaces
    // Needed for: IE8
    (function () {
        if (!('Element' in global) || Element.prototype.addEventListener || !Object.defineProperty) return;

        // interface Event

        // PhaseType (const unsigned short)
        Event.CAPTURING_PHASE = 1;
        Event.AT_TARGET = 2;
        Event.BUBBLING_PHASE = 3;

        Object.defineProperties(Event.prototype, {
            CAPTURING_PHASE: { get: function get() {
                    return 1;
                } },
            AT_TARGET: { get: function get() {
                    return 2;
                } },
            BUBBLING_PHASE: { get: function get() {
                    return 3;
                } },
            target: {
                get: function get() {
                    return this.srcElement;
                } },
            currentTarget: {
                get: function get() {
                    return this._currentTarget;
                } },
            eventPhase: {
                get: function get() {
                    return this.srcElement === this.currentTarget ? Event.AT_TARGET : Event.BUBBLING_PHASE;
                } },
            bubbles: {
                get: function get() {
                    switch (this.type) {
                        // Mouse
                        case 'click':
                        case 'dblclick':
                        case 'mousedown':
                        case 'mouseup':
                        case 'mouseover':
                        case 'mousemove':
                        case 'mouseout':
                        case 'mousewheel':
                        // Keyboard
                        case 'keydown':
                        case 'keypress':
                        case 'keyup':
                        // Frame/Object
                        case 'resize':
                        case 'scroll':
                        // Form
                        case 'select':
                        case 'change':
                        case 'submit':
                        case 'reset':
                            return true;
                    }
                    return false;
                } },
            cancelable: {
                get: function get() {
                    switch (this.type) {
                        // Mouse
                        case 'click':
                        case 'dblclick':
                        case 'mousedown':
                        case 'mouseup':
                        case 'mouseover':
                        case 'mouseout':
                        case 'mousewheel':
                        // Keyboard
                        case 'keydown':
                        case 'keypress':
                        case 'keyup':
                        // Form
                        case 'submit':
                            return true;
                    }
                    return false;
                } },
            timeStamp: {
                get: function get() {
                    return this._timeStamp;
                } },
            stopPropagation: {
                value: function value() {
                    this.cancelBubble = true;
                } },
            preventDefault: {
                value: function value() {
                    this.returnValue = false;
                } },
            defaultPrevented: {
                get: function get() {
                    return this.returnValue === false;
                } }
        });

        // interface EventTarget

        function addEventListener(type, listener, useCapture) {
            if (typeof listener !== 'function') return;
            if (type === 'DOMContentLoaded') type = 'load';
            var target = this;
            var f = function f(e) {
                e._timeStamp = Date.now();
                e._currentTarget = target;
                listener.call(this, e);
                e._currentTarget = null;
            };
            this['_' + type + listener] = f;
            this.attachEvent('on' + type, f);
        }

        function removeEventListener(type, listener, useCapture) {
            if (typeof listener !== 'function') return;
            if (type === 'DOMContentLoaded') type = 'load';
            var f = this['_' + type + listener];
            if (f) {
                this.detachEvent('on' + type, f);
                this['_' + type + listener] = null;
            }
        }

        [Window, HTMLDocument, Element].forEach(function (o) {
            o.prototype.addEventListener = addEventListener;
            o.prototype.removeEventListener = removeEventListener;
        });
    })();

    // CustomEvent
    // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
    // Needed for: IE
    (function () {
        if ('CustomEvent' in global && typeof global.CustomEvent === "function") return;
        function CustomEvent(event, params) {
            params = params || { bubbles: false, cancelable: false, detail: undefined };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }
        CustomEvent.prototype = global.Event.prototype;
        global.CustomEvent = CustomEvent;
    })();

    // Shim for DOM Events for IE7-
    // http://www.quirksmode.org/blog/archives/2005/10/_and_the_winner_1.html
    // Use addEvent(object, event, handler) instead of object.addEventListener(event, handler)
    window.addEvent = function (obj, type, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(type, fn, false);
        } else if (obj.attachEvent) {
            obj["e" + type + fn] = fn;
            obj[type + fn] = function () {
                var e = window.event;
                e.currentTarget = obj;
                e.preventDefault = function () {
                    e.returnValue = false;
                };
                e.stopPropagation = function () {
                    e.cancelBubble = true;
                };
                e.target = e.srcElement;
                e.timeStamp = Date.now();
                obj["e" + type + fn].call(this, e);
            };
            obj.attachEvent("on" + type, obj[type + fn]);
        }
    };

    window.removeEvent = function (obj, type, fn) {
        if (obj.removeEventListener) {
            obj.removeEventListener(type, fn, false);
        } else if (obj.detachEvent) {
            obj.detachEvent("on" + type, obj[type + fn]);
            obj[type + fn] = null;
            obj["e" + type + fn] = null;
        }
    };

    // DOMTokenList interface and Element.classList / Element.relList
    // Needed for: IE9-
    // Use getClassList(elem) instead of elem.classList() if IE7- support is needed
    // Use getRelList(elem) instead of elem.relList() if IE7- support is needed
    (function () {
        function DOMTokenListShim(o, p) {
            function split(s) {
                return s.length ? s.split(/\s+/g) : [];
            }

            // NOTE: This does not exactly match the spec.
            function removeTokenFromString(token, string) {
                var tokens = split(string),
                    index = tokens.indexOf(token);
                if (index !== -1) {
                    tokens.splice(index, 1);
                }
                return tokens.join(' ');
            }

            Object.defineProperties(this, {
                length: {
                    get: function get() {
                        return split(o[p]).length;
                    }
                },

                item: {
                    value: function value(idx) {
                        var tokens = split(o[p]);
                        return 0 <= idx && idx < tokens.length ? tokens[idx] : null;
                    }
                },

                contains: {
                    value: function value(token) {
                        token = String(token);
                        if (token.length === 0) {
                            throw SyntaxError();
                        }
                        if (/\s/.test(token)) {
                            throw Error("InvalidCharacterError");
                        }
                        var tokens = split(o[p]);

                        return tokens.indexOf(token) !== -1;
                    }
                },

                add: {
                    value: function value() /*tokens...*/{
                        var tokens = Array.prototype.slice.call(arguments).map(String);
                        if (tokens.some(function (token) {
                            return token.length === 0;
                        })) {
                            throw SyntaxError();
                        }
                        if (tokens.some(function (token) {
                            return (/\s/.test(token)
                            );
                        })) {
                            throw Error("InvalidCharacterError");
                        }

                        try {
                            var underlying_string = o[p];
                            var token_list = split(underlying_string);
                            tokens = tokens.filter(function (token) {
                                return token_list.indexOf(token) === -1;
                            });
                            if (tokens.length === 0) {
                                return;
                            }
                            if (underlying_string.length !== 0 && !/\s$/.test(underlying_string)) {
                                underlying_string += ' ';
                            }
                            underlying_string += tokens.join(' ');
                            o[p] = underlying_string;
                        } finally {
                            var length = split(o[p]).length;
                            if (this.length !== length) {
                                this.length = length;
                            }
                        }
                    }
                },

                remove: {
                    value: function value() /*tokens...*/{
                        var tokens = Array.prototype.slice.call(arguments).map(String);
                        if (tokens.some(function (token) {
                            return token.length === 0;
                        })) {
                            throw SyntaxError();
                        }
                        if (tokens.some(function (token) {
                            return (/\s/.test(token)
                            );
                        })) {
                            throw Error("InvalidCharacterError");
                        }

                        try {
                            var underlying_string = o[p];
                            tokens.forEach(function (token) {
                                underlying_string = removeTokenFromString(token, underlying_string);
                            });
                            o[p] = underlying_string;
                        } finally {
                            var length = split(o[p]).length;
                            if (this.length !== length) {
                                this.length = length;
                            }
                        }
                    }
                },

                toggle: {
                    value: function value(token /*, force*/) {
                        var force = arguments[1];
                        try {
                            token = String(token);
                            if (token.length === 0) {
                                throw SyntaxError();
                            }
                            if (/\s/.test(token)) {
                                throw Error("InvalidCharacterError");
                            }
                            var tokens = split(o[p]),
                                index = tokens.indexOf(token);

                            if (index !== -1 && (!force || force === void 0)) {
                                o[p] = removeTokenFromString(token, o[p]);
                                return false;
                            }
                            if (index !== -1 && force) {
                                return true;
                            }
                            var underlying_string = o[p];
                            if (underlying_string.length !== 0 && !/\s$/.test(underlying_string)) {
                                underlying_string += ' ';
                            }
                            underlying_string += token;
                            o[p] = underlying_string;
                            return true;
                        } finally {
                            var length = split(o[p]).length;
                            if (this.length !== length) {
                                this.length = length;
                            }
                        }
                    }
                },

                toString: {
                    value: function value() {
                        return o[p];
                    }
                }
            });
            if (!('length' in this)) {
                // In case getters are not supported
                this.length = split(o[p]).length;
            } else {
                // If they are, shim in index getters (up to 100)
                for (var i = 0; i < 100; ++i) {
                    Object.defineProperty(this, String(i), {
                        get: function (n) {
                            return function () {
                                return this.item(n);
                            };
                        }(i)
                    });
                }
            }
        }

        function addToElementPrototype(p, f) {
            if ('Element' in global && Element.prototype && Object.defineProperty) {
                Object.defineProperty(Element.prototype, p, { get: f });
            }
        }

        // HTML - https://html.spec.whatwg.org
        // Element.classList
        if ('classList' in document.createElement('span')) {
            window.getClassList = function (elem) {
                return elem.classList;
            };
        } else {
            window.getClassList = function (elem) {
                return new DOMTokenListShim(elem, 'className');
            };
            addToElementPrototype('classList', function () {
                return new DOMTokenListShim(this, 'className');
            });
        }

        // HTML - https://html.spec.whatwg.org
        // HTMLAnchorElement.relList
        // HTMLLinkElement.relList
        if ('relList' in document.createElement('link')) {
            window.getRelList = function (elem) {
                return elem.relList;
            };
        } else {
            window.getRelList = function (elem) {
                return new DOMTokenListShim(elem, 'rel');
            };
            addToElementPrototype('relList', function () {
                return new DOMTokenListShim(this, 'rel');
            });
        }

        // Add second argument to native DOMTokenList.toggle() if necessary
        (function () {
            if (!('DOMTokenList' in global)) return;
            var e = document.createElement('span');
            if (!('classList' in e)) return;
            e.classList.toggle('x', false);
            if (!e.classList.contains('x')) return;
            global.DOMTokenList.prototype.toggle = function toggle(token /*, force*/) {
                var force = arguments[1];
                if (force === undefined) {
                    var add = !this.contains(token);
                    this[add ? 'add' : 'remove'](token);
                    return add;
                }
                force = !!force;
                this[force ? 'add' : 'remove'](token);
                return force;
            };
        })();

        // DOM - Interface NonDocumentTypeChildNode
        // Interface NonDocumentTypeChildNode
        // previousElementSibling / nextElementSibling - for IE8

        if (!('previousElementSibling' in document.documentElement)) {
            addToElementPrototype('previousElementSibling', function () {
                var n = this.previousSibling;
                while (n && n.nodeType !== Node.ELEMENT_NODE) {
                    n = n.previousSibling;
                }return n;
            });
        }

        if (!('nextElementSibling' in document.documentElement)) {
            addToElementPrototype('nextElementSibling', function () {
                var n = this.nextSibling;
                while (n && n.nodeType !== Node.ELEMENT_NODE) {
                    n = n.nextSibling;
                }return n;
            });
        }
    })();

    // Element.matches
    // https://developer.mozilla.org/en/docs/Web/API/Element/matches
    // Needed for: IE, Firefox 3.6, early Webkit and Opera 15.0
    // Use msMatchesSelector(selector) for IE
    // Use oMatchesSelector(selector) for Opera 15.0
    // Use mozMatchesSelector(selector) for Firefox 3.6
    // Use webkitMatchesSelector(selector) for early Webkit
    // Use polyfill if no matches() support, but querySelectorAll() support
    if ('Element' in global && !Element.prototype.matches) {
        if (Element.prototype.msMatchesSelector) {
            Element.prototype.matches = Element.prototype.msMatchesSelector;
        } else if (Element.prototype.oMatchesSelector) {
            Element.prototype.matches = Element.prototype.oMatchesSelector;
        } else if (Element.prototype.mozMatchesSelector) {
            Element.prototype.matches = Element.prototype.mozMatchesSelector;
        } else if (Element.prototype.webkitMatchesSelector) {
            Element.prototype.matches = Element.prototype.webkitMatchesSelector;
        } else if (document.querySelectorAll) {
            Element.prototype.matches = function matches(selector) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(selector),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
        }
    }

    // Element.closest
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
    if (window.Element && !Element.prototype.closest) {
        Element.prototype.closest = function (s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i,
                el = this;
            do {
                i = matches.length;
                while (--i >= 0 && matches.item(i) !== el) {};
            } while (i < 0 && (el = el.parentElement));
            return el;
        };
    }

    function mixin(o, ps) {
        if (!o) return;
        Object.keys(ps).forEach(function (p) {
            if (p in o || p in o.prototype) return;
            try {
                Object.defineProperty(o.prototype, p, Object.getOwnPropertyDescriptor(ps, p));
            } catch (ex) {
                // Throws in IE8; just copy it
                o[p] = ps[p];
            }
        });
    }

    // Mixin ParentNode
    // https://dom.spec.whatwg.org/#interface-parentnode

    function convertNodesIntoANode(nodes) {
        var node = null;
        nodes = nodes.map(function (node) {
            return !(node instanceof Node) ? document.createTextNode(node) : node;
        });
        if (nodes.length === 1) {
            node = nodes[0];
        } else {
            node = document.createDocumentFragment();
            nodes.forEach(function (n) {
                node.appendChild(n);
            });
        }
        return node;
    }

    var ParentNode = {
        prepend: function prepend() /*...nodes*/{
            var nodes = [].slice.call(arguments);
            nodes = convertNodesIntoANode(nodes);
            this.insertBefore(nodes, this.firstChild);
        },
        append: function append() /*...nodes*/{
            var nodes = [].slice.call(arguments);
            nodes = convertNodesIntoANode(nodes);
            this.appendChild(nodes);
        }
    };

    mixin(global.Document || global.HTMLDocument, ParentNode); // HTMLDocument for IE8
    mixin(global.DocumentFragment, ParentNode);
    mixin(global.Element, ParentNode);

    // Mixin ChildNode
    // https://dom.spec.whatwg.org/#interface-childnode

    var ChildNode = {
        before: function before() /*...nodes*/{
            var nodes = [].slice.call(arguments);
            var parent = this.parentNode;
            if (!parent) return;
            var viablePreviousSibling = this.previousSibling;
            while (nodes.indexOf(viablePreviousSibling) !== -1) {
                viablePreviousSibling = viablePreviousSibling.previousSibling;
            }var node = convertNodesIntoANode(nodes);
            parent.insertBefore(node, viablePreviousSibling ? viablePreviousSibling.nextSibling : parent.firstChild);
        },
        after: function after() /*...nodes*/{
            var nodes = [].slice.call(arguments);
            var parent = this.parentNode;
            if (!parent) return;
            var viableNextSibling = this.nextSibling;
            while (nodes.indexOf(viableNextSibling) !== -1) {
                viableNextSibling = viableNextSibling.nextSibling;
            }var node = convertNodesIntoANode(nodes);
            parent.insertBefore(node, viableNextSibling);
        },
        replaceWith: function replaceWith() /*...nodes*/{
            var nodes = [].slice.call(arguments);
            var parent = this.parentNode;
            if (!parent) return;
            var viableNextSibling = this.nextSibling;
            while (nodes.indexOf(viableNextSibling) !== -1) {
                viableNextSibling = viableNextSibling.nextSibling;
            }var node = convertNodesIntoANode(nodes);

            if (this.parentNode === parent) parent.replaceChild(node, this);else parent.insertBefore(node, viableNextSibling);
        },
        remove: function remove() {
            if (!this.parentNode) return;
            this.parentNode.removeChild(this);
        }
    };

    mixin(global.DocumentType, ChildNode);
    mixin(global.Element, ChildNode);
    mixin(global.CharacterData, ChildNode);
})(self);

/***/ }),

/***/ "./src/js/utils/strings.js":
/*!*********************************!*\
  !*** ./src/js/utils/strings.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extractExtension = undefined;
exports.trim = trim;
exports.naturalHms = naturalHms;

var _underscore = __webpack_require__(/*! ./underscore */ "./src/js/utils/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trim(string) {
    return string.replace(/^\s+|\s+$/g, '');
}

/**
 * extractExtension
 *
 * @param      {string} path for url
 * @return     {string}  Extension
 */
var extractExtension = exports.extractExtension = function extractExtension(path) {
    if (!path || path.substr(0, 4) == 'rtmp') {
        return "";
    }
    function getAzureFileFormat(path) {
        var extension = "";
        if (/[(,]format=mpd-/i.test(path)) {
            extension = 'mpd';
        } else if (/[(,]format=m3u8-/i.test(path)) {
            extension = 'm3u8';
        }
        return extension;
    }

    var azuredFormat = getAzureFileFormat(path);
    if (azuredFormat) {
        return azuredFormat;
    }
    path = path.split('?')[0].split('#')[0];
    if (path.lastIndexOf('.') > -1) {
        return path.substr(path.lastIndexOf('.') + 1, path.length).toLowerCase();
    } else {
        return "";
    }
};

/**
 * naturalHms
 *
 * @param      {number | string}  second  The second
 * @return     {string}  formatted String
 */
function naturalHms(second) {
    var secNum = parseInt(second, 10);
    var hours = Math.floor(secNum / 3600);
    var minutes = Math.floor((secNum - hours * 3600) / 60);
    var seconds = secNum - hours * 3600 - minutes * 60;

    if (hours > 0) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (hours > 0) {
        return hours + ':' + minutes + ':' + seconds;
    } else {
        return minutes + ':' + seconds;
    }
}

/***/ }),

/***/ "./src/js/utils/underscore.js":
/*!************************************!*\
  !*** ./src/js/utils/underscore.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function () {
  var n = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self.self === self && self || "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) && global.global === global && global || this || {},
      r = n._,
      e = Array.prototype,
      o = Object.prototype,
      s = "undefined" != typeof Symbol ? Symbol.prototype : null,
      u = e.push,
      c = e.slice,
      p = o.toString,
      i = o.hasOwnProperty,
      t = Array.isArray,
      a = Object.keys,
      l = Object.create,
      f = function f() {},
      h = function h(n) {
    return n instanceof h ? n : this instanceof h ? void (this._wrapped = n) : new h(n);
  };"undefined" == typeof exports || exports.nodeType ? n._ = h : ("undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = h), exports._ = h), h.VERSION = "1.9.1";var v,
      y = function y(u, i, n) {
    if (void 0 === i) return u;switch (null == n ? 3 : n) {case 1:
        return function (n) {
          return u.call(i, n);
        };case 3:
        return function (n, r, t) {
          return u.call(i, n, r, t);
        };case 4:
        return function (n, r, t, e) {
          return u.call(i, n, r, t, e);
        };}return function () {
      return u.apply(i, arguments);
    };
  },
      d = function d(n, r, t) {
    return h.iteratee !== v ? h.iteratee(n, r) : null == n ? h.identity : h.isFunction(n) ? y(n, r, t) : h.isObject(n) && !h.isArray(n) ? h.matcher(n) : h.property(n);
  };h.iteratee = v = function v(n, r) {
    return d(n, r, 1 / 0);
  };var g = function g(u, i) {
    return i = null == i ? u.length - 1 : +i, function () {
      for (var n = Math.max(arguments.length - i, 0), r = Array(n), t = 0; t < n; t++) {
        r[t] = arguments[t + i];
      }switch (i) {case 0:
          return u.call(this, r);case 1:
          return u.call(this, arguments[0], r);case 2:
          return u.call(this, arguments[0], arguments[1], r);}var e = Array(i + 1);for (t = 0; t < i; t++) {
        e[t] = arguments[t];
      }return e[i] = r, u.apply(this, e);
    };
  },
      m = function m(n) {
    if (!h.isObject(n)) return {};if (l) return l(n);f.prototype = n;var r = new f();return f.prototype = null, r;
  },
      b = function b(r) {
    return function (n) {
      return null == n ? void 0 : n[r];
    };
  },
      j = function j(n, r) {
    return null != n && i.call(n, r);
  },
      x = function x(n, r) {
    for (var t = r.length, e = 0; e < t; e++) {
      if (null == n) return;n = n[r[e]];
    }return t ? n : void 0;
  },
      _ = Math.pow(2, 53) - 1,
      A = b("length"),
      w = function w(n) {
    var r = A(n);return "number" == typeof r && 0 <= r && r <= _;
  };h.each = h.forEach = function (n, r, t) {
    var e, u;if (r = y(r, t), w(n)) for (e = 0, u = n.length; e < u; e++) {
      r(n[e], e, n);
    } else {
      var i = h.keys(n);for (e = 0, u = i.length; e < u; e++) {
        r(n[i[e]], i[e], n);
      }
    }return n;
  }, h.map = h.collect = function (n, r, t) {
    r = d(r, t);for (var e = !w(n) && h.keys(n), u = (e || n).length, i = Array(u), o = 0; o < u; o++) {
      var a = e ? e[o] : o;i[o] = r(n[a], a, n);
    }return i;
  };var O = function O(c) {
    return function (n, r, t, e) {
      var u = 3 <= arguments.length;return function (n, r, t, e) {
        var u = !w(n) && h.keys(n),
            i = (u || n).length,
            o = 0 < c ? 0 : i - 1;for (e || (t = n[u ? u[o] : o], o += c); 0 <= o && o < i; o += c) {
          var a = u ? u[o] : o;t = r(t, n[a], a, n);
        }return t;
      }(n, y(r, e, 4), t, u);
    };
  };h.reduce = h.foldl = h.inject = O(1), h.reduceRight = h.foldr = O(-1), h.find = h.detect = function (n, r, t) {
    var e = (w(n) ? h.findIndex : h.findKey)(n, r, t);if (void 0 !== e && -1 !== e) return n[e];
  }, h.filter = h.select = function (n, e, r) {
    var u = [];return e = d(e, r), h.each(n, function (n, r, t) {
      e(n, r, t) && u.push(n);
    }), u;
  }, h.reject = function (n, r, t) {
    return h.filter(n, h.negate(d(r)), t);
  }, h.every = h.all = function (n, r, t) {
    r = d(r, t);for (var e = !w(n) && h.keys(n), u = (e || n).length, i = 0; i < u; i++) {
      var o = e ? e[i] : i;if (!r(n[o], o, n)) return !1;
    }return !0;
  }, h.some = h.any = function (n, r, t) {
    r = d(r, t);for (var e = !w(n) && h.keys(n), u = (e || n).length, i = 0; i < u; i++) {
      var o = e ? e[i] : i;if (r(n[o], o, n)) return !0;
    }return !1;
  }, h.contains = h.includes = h.include = function (n, r, t, e) {
    return w(n) || (n = h.values(n)), ("number" != typeof t || e) && (t = 0), 0 <= h.indexOf(n, r, t);
  }, h.invoke = g(function (n, t, e) {
    var u, i;return h.isFunction(t) ? i = t : h.isArray(t) && (u = t.slice(0, -1), t = t[t.length - 1]), h.map(n, function (n) {
      var r = i;if (!r) {
        if (u && u.length && (n = x(n, u)), null == n) return;r = n[t];
      }return null == r ? r : r.apply(n, e);
    });
  }), h.pluck = function (n, r) {
    return h.map(n, h.property(r));
  }, h.where = function (n, r) {
    return h.filter(n, h.matcher(r));
  }, h.findWhere = function (n, r) {
    return h.find(n, h.matcher(r));
  }, h.max = function (n, e, r) {
    var t,
        u,
        i = -1 / 0,
        o = -1 / 0;if (null == e || "number" == typeof e && "object" != _typeof(n[0]) && null != n) for (var a = 0, c = (n = w(n) ? n : h.values(n)).length; a < c; a++) {
      null != (t = n[a]) && i < t && (i = t);
    } else e = d(e, r), h.each(n, function (n, r, t) {
      u = e(n, r, t), (o < u || u === -1 / 0 && i === -1 / 0) && (i = n, o = u);
    });return i;
  }, h.min = function (n, e, r) {
    var t,
        u,
        i = 1 / 0,
        o = 1 / 0;if (null == e || "number" == typeof e && "object" != _typeof(n[0]) && null != n) for (var a = 0, c = (n = w(n) ? n : h.values(n)).length; a < c; a++) {
      null != (t = n[a]) && t < i && (i = t);
    } else e = d(e, r), h.each(n, function (n, r, t) {
      ((u = e(n, r, t)) < o || u === 1 / 0 && i === 1 / 0) && (i = n, o = u);
    });return i;
  }, h.shuffle = function (n) {
    return h.sample(n, 1 / 0);
  }, h.sample = function (n, r, t) {
    if (null == r || t) return w(n) || (n = h.values(n)), n[h.random(n.length - 1)];var e = w(n) ? h.clone(n) : h.values(n),
        u = A(e);r = Math.max(Math.min(r, u), 0);for (var i = u - 1, o = 0; o < r; o++) {
      var a = h.random(o, i),
          c = e[o];e[o] = e[a], e[a] = c;
    }return e.slice(0, r);
  }, h.sortBy = function (n, e, r) {
    var u = 0;return e = d(e, r), h.pluck(h.map(n, function (n, r, t) {
      return { value: n, index: u++, criteria: e(n, r, t) };
    }).sort(function (n, r) {
      var t = n.criteria,
          e = r.criteria;if (t !== e) {
        if (e < t || void 0 === t) return 1;if (t < e || void 0 === e) return -1;
      }return n.index - r.index;
    }), "value");
  };var k = function k(o, r) {
    return function (e, u, n) {
      var i = r ? [[], []] : {};return u = d(u, n), h.each(e, function (n, r) {
        var t = u(n, r, e);o(i, n, t);
      }), i;
    };
  };h.groupBy = k(function (n, r, t) {
    j(n, t) ? n[t].push(r) : n[t] = [r];
  }), h.indexBy = k(function (n, r, t) {
    n[t] = r;
  }), h.countBy = k(function (n, r, t) {
    j(n, t) ? n[t]++ : n[t] = 1;
  });var S = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;h.toArray = function (n) {
    return n ? h.isArray(n) ? c.call(n) : h.isString(n) ? n.match(S) : w(n) ? h.map(n, h.identity) : h.values(n) : [];
  }, h.size = function (n) {
    return null == n ? 0 : w(n) ? n.length : h.keys(n).length;
  }, h.partition = k(function (n, r, t) {
    n[t ? 0 : 1].push(r);
  }, !0), h.first = h.head = h.take = function (n, r, t) {
    return null == n || n.length < 1 ? null == r ? void 0 : [] : null == r || t ? n[0] : h.initial(n, n.length - r);
  }, h.initial = function (n, r, t) {
    return c.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r)));
  }, h.last = function (n, r, t) {
    return null == n || n.length < 1 ? null == r ? void 0 : [] : null == r || t ? n[n.length - 1] : h.rest(n, Math.max(0, n.length - r));
  }, h.rest = h.tail = h.drop = function (n, r, t) {
    return c.call(n, null == r || t ? 1 : r);
  }, h.compact = function (n) {
    return h.filter(n, Boolean);
  };var M = function M(n, r, t, e) {
    for (var u = (e = e || []).length, i = 0, o = A(n); i < o; i++) {
      var a = n[i];if (w(a) && (h.isArray(a) || h.isArguments(a))) {
        if (r) for (var c = 0, l = a.length; c < l;) {
          e[u++] = a[c++];
        } else M(a, r, t, e), u = e.length;
      } else t || (e[u++] = a);
    }return e;
  };h.flatten = function (n, r) {
    return M(n, r, !1);
  }, h.without = g(function (n, r) {
    return h.difference(n, r);
  }), h.uniq = h.unique = function (n, r, t, e) {
    h.isBoolean(r) || (e = t, t = r, r = !1), null != t && (t = d(t, e));for (var u = [], i = [], o = 0, a = A(n); o < a; o++) {
      var c = n[o],
          l = t ? t(c, o, n) : c;r && !t ? (o && i === l || u.push(c), i = l) : t ? h.contains(i, l) || (i.push(l), u.push(c)) : h.contains(u, c) || u.push(c);
    }return u;
  }, h.union = g(function (n) {
    return h.uniq(M(n, !0, !0));
  }), h.intersection = function (n) {
    for (var r = [], t = arguments.length, e = 0, u = A(n); e < u; e++) {
      var i = n[e];if (!h.contains(r, i)) {
        var o;for (o = 1; o < t && h.contains(arguments[o], i); o++) {}o === t && r.push(i);
      }
    }return r;
  }, h.difference = g(function (n, r) {
    return r = M(r, !0, !0), h.filter(n, function (n) {
      return !h.contains(r, n);
    });
  }), h.unzip = function (n) {
    for (var r = n && h.max(n, A).length || 0, t = Array(r), e = 0; e < r; e++) {
      t[e] = h.pluck(n, e);
    }return t;
  }, h.zip = g(h.unzip), h.object = function (n, r) {
    for (var t = {}, e = 0, u = A(n); e < u; e++) {
      r ? t[n[e]] = r[e] : t[n[e][0]] = n[e][1];
    }return t;
  };var F = function F(i) {
    return function (n, r, t) {
      r = d(r, t);for (var e = A(n), u = 0 < i ? 0 : e - 1; 0 <= u && u < e; u += i) {
        if (r(n[u], u, n)) return u;
      }return -1;
    };
  };h.findIndex = F(1), h.findLastIndex = F(-1), h.sortedIndex = function (n, r, t, e) {
    for (var u = (t = d(t, e, 1))(r), i = 0, o = A(n); i < o;) {
      var a = Math.floor((i + o) / 2);t(n[a]) < u ? i = a + 1 : o = a;
    }return i;
  };var E = function E(i, o, a) {
    return function (n, r, t) {
      var e = 0,
          u = A(n);if ("number" == typeof t) 0 < i ? e = 0 <= t ? t : Math.max(t + u, e) : u = 0 <= t ? Math.min(t + 1, u) : t + u + 1;else if (a && t && u) return n[t = a(n, r)] === r ? t : -1;if (r != r) return 0 <= (t = o(c.call(n, e, u), h.isNaN)) ? t + e : -1;for (t = 0 < i ? e : u - 1; 0 <= t && t < u; t += i) {
        if (n[t] === r) return t;
      }return -1;
    };
  };h.indexOf = E(1, h.findIndex, h.sortedIndex), h.lastIndexOf = E(-1, h.findLastIndex), h.range = function (n, r, t) {
    null == r && (r = n || 0, n = 0), t || (t = r < n ? -1 : 1);for (var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), i = 0; i < e; i++, n += t) {
      u[i] = n;
    }return u;
  }, h.chunk = function (n, r) {
    if (null == r || r < 1) return [];for (var t = [], e = 0, u = n.length; e < u;) {
      t.push(c.call(n, e, e += r));
    }return t;
  };var N = function N(n, r, t, e, u) {
    if (!(e instanceof r)) return n.apply(t, u);var i = m(n.prototype),
        o = n.apply(i, u);return h.isObject(o) ? o : i;
  };h.bind = g(function (r, t, e) {
    if (!h.isFunction(r)) throw new TypeError("Bind must be called on a function");var u = g(function (n) {
      return N(r, u, t, this, e.concat(n));
    });return u;
  }), h.partial = g(function (u, i) {
    var o = h.partial.placeholder,
        a = function a() {
      for (var n = 0, r = i.length, t = Array(r), e = 0; e < r; e++) {
        t[e] = i[e] === o ? arguments[n++] : i[e];
      }for (; n < arguments.length;) {
        t.push(arguments[n++]);
      }return N(u, a, this, this, t);
    };return a;
  }), (h.partial.placeholder = h).bindAll = g(function (n, r) {
    var t = (r = M(r, !1, !1)).length;if (t < 1) throw new Error("bindAll must be passed function names");for (; t--;) {
      var e = r[t];n[e] = h.bind(n[e], n);
    }
  }), h.memoize = function (e, u) {
    var i = function i(n) {
      var r = i.cache,
          t = "" + (u ? u.apply(this, arguments) : n);return j(r, t) || (r[t] = e.apply(this, arguments)), r[t];
    };return i.cache = {}, i;
  }, h.delay = g(function (n, r, t) {
    return setTimeout(function () {
      return n.apply(null, t);
    }, r);
  }), h.defer = h.partial(h.delay, h, 1), h.throttle = function (t, e, u) {
    var i,
        o,
        a,
        c,
        l = 0;u || (u = {});var f = function f() {
      l = !1 === u.leading ? 0 : h.now(), i = null, c = t.apply(o, a), i || (o = a = null);
    },
        n = function n() {
      var n = h.now();l || !1 !== u.leading || (l = n);var r = e - (n - l);return o = this, a = arguments, r <= 0 || e < r ? (i && (clearTimeout(i), i = null), l = n, c = t.apply(o, a), i || (o = a = null)) : i || !1 === u.trailing || (i = setTimeout(f, r)), c;
    };return n.cancel = function () {
      clearTimeout(i), l = 0, i = o = a = null;
    }, n;
  }, h.debounce = function (t, e, u) {
    var i,
        o,
        a = function a(n, r) {
      i = null, r && (o = t.apply(n, r));
    },
        n = g(function (n) {
      if (i && clearTimeout(i), u) {
        var r = !i;i = setTimeout(a, e), r && (o = t.apply(this, n));
      } else i = h.delay(a, e, this, n);return o;
    });return n.cancel = function () {
      clearTimeout(i), i = null;
    }, n;
  }, h.wrap = function (n, r) {
    return h.partial(r, n);
  }, h.negate = function (n) {
    return function () {
      return !n.apply(this, arguments);
    };
  }, h.compose = function () {
    var t = arguments,
        e = t.length - 1;return function () {
      for (var n = e, r = t[e].apply(this, arguments); n--;) {
        r = t[n].call(this, r);
      }return r;
    };
  }, h.after = function (n, r) {
    return function () {
      if (--n < 1) return r.apply(this, arguments);
    };
  }, h.before = function (n, r) {
    var t;return function () {
      return 0 < --n && (t = r.apply(this, arguments)), n <= 1 && (r = null), t;
    };
  }, h.once = h.partial(h.before, 2), h.restArguments = g;var I = !{ toString: null }.propertyIsEnumerable("toString"),
      T = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
      B = function B(n, r) {
    var t = T.length,
        e = n.constructor,
        u = h.isFunction(e) && e.prototype || o,
        i = "constructor";for (j(n, i) && !h.contains(r, i) && r.push(i); t--;) {
      (i = T[t]) in n && n[i] !== u[i] && !h.contains(r, i) && r.push(i);
    }
  };h.keys = function (n) {
    if (!h.isObject(n)) return [];if (a) return a(n);var r = [];for (var t in n) {
      j(n, t) && r.push(t);
    }return I && B(n, r), r;
  }, h.allKeys = function (n) {
    if (!h.isObject(n)) return [];var r = [];for (var t in n) {
      r.push(t);
    }return I && B(n, r), r;
  }, h.values = function (n) {
    for (var r = h.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++) {
      e[u] = n[r[u]];
    }return e;
  }, h.mapObject = function (n, r, t) {
    r = d(r, t);for (var e = h.keys(n), u = e.length, i = {}, o = 0; o < u; o++) {
      var a = e[o];i[a] = r(n[a], a, n);
    }return i;
  }, h.pairs = function (n) {
    for (var r = h.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++) {
      e[u] = [r[u], n[r[u]]];
    }return e;
  }, h.invert = function (n) {
    for (var r = {}, t = h.keys(n), e = 0, u = t.length; e < u; e++) {
      r[n[t[e]]] = t[e];
    }return r;
  }, h.functions = h.methods = function (n) {
    var r = [];for (var t in n) {
      h.isFunction(n[t]) && r.push(t);
    }return r.sort();
  };var R = function R(c, l) {
    return function (n) {
      var r = arguments.length;if (l && (n = Object(n)), r < 2 || null == n) return n;for (var t = 1; t < r; t++) {
        for (var e = arguments[t], u = c(e), i = u.length, o = 0; o < i; o++) {
          var a = u[o];l && void 0 !== n[a] || (n[a] = e[a]);
        }
      }return n;
    };
  };h.extend = R(h.allKeys), h.extendOwn = h.assign = R(h.keys), h.findKey = function (n, r, t) {
    r = d(r, t);for (var e, u = h.keys(n), i = 0, o = u.length; i < o; i++) {
      if (r(n[e = u[i]], e, n)) return e;
    }
  };var q,
      K,
      z = function z(n, r, t) {
    return r in t;
  };h.pick = g(function (n, r) {
    var t = {},
        e = r[0];if (null == n) return t;h.isFunction(e) ? (1 < r.length && (e = y(e, r[1])), r = h.allKeys(n)) : (e = z, r = M(r, !1, !1), n = Object(n));for (var u = 0, i = r.length; u < i; u++) {
      var o = r[u],
          a = n[o];e(a, o, n) && (t[o] = a);
    }return t;
  }), h.omit = g(function (n, t) {
    var r,
        e = t[0];return h.isFunction(e) ? (e = h.negate(e), 1 < t.length && (r = t[1])) : (t = h.map(M(t, !1, !1), String), e = function e(n, r) {
      return !h.contains(t, r);
    }), h.pick(n, e, r);
  }), h.defaults = R(h.allKeys, !0), h.create = function (n, r) {
    var t = m(n);return r && h.extendOwn(t, r), t;
  }, h.clone = function (n) {
    return h.isObject(n) ? h.isArray(n) ? n.slice() : h.extend({}, n) : n;
  }, h.tap = function (n, r) {
    return r(n), n;
  }, h.isMatch = function (n, r) {
    var t = h.keys(r),
        e = t.length;if (null == n) return !e;for (var u = Object(n), i = 0; i < e; i++) {
      var o = t[i];if (r[o] !== u[o] || !(o in u)) return !1;
    }return !0;
  }, q = function q(n, r, t, e) {
    if (n === r) return 0 !== n || 1 / n == 1 / r;if (null == n || null == r) return !1;if (n != n) return r != r;var u = typeof n === "undefined" ? "undefined" : _typeof(n);return ("function" === u || "object" === u || "object" == (typeof r === "undefined" ? "undefined" : _typeof(r))) && K(n, r, t, e);
  }, K = function K(n, r, t, e) {
    n instanceof h && (n = n._wrapped), r instanceof h && (r = r._wrapped);var u = p.call(n);if (u !== p.call(r)) return !1;switch (u) {case "[object RegExp]":case "[object String]":
        return "" + n == "" + r;case "[object Number]":
        return +n != +n ? +r != +r : 0 == +n ? 1 / +n == 1 / r : +n == +r;case "[object Date]":case "[object Boolean]":
        return +n == +r;case "[object Symbol]":
        return s.valueOf.call(n) === s.valueOf.call(r);}var i = "[object Array]" === u;if (!i) {
      if ("object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) || "object" != (typeof r === "undefined" ? "undefined" : _typeof(r))) return !1;var o = n.constructor,
          a = r.constructor;if (o !== a && !(h.isFunction(o) && o instanceof o && h.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in r) return !1;
    }e = e || [];for (var c = (t = t || []).length; c--;) {
      if (t[c] === n) return e[c] === r;
    }if (t.push(n), e.push(r), i) {
      if ((c = n.length) !== r.length) return !1;for (; c--;) {
        if (!q(n[c], r[c], t, e)) return !1;
      }
    } else {
      var l,
          f = h.keys(n);if (c = f.length, h.keys(r).length !== c) return !1;for (; c--;) {
        if (l = f[c], !j(r, l) || !q(n[l], r[l], t, e)) return !1;
      }
    }return t.pop(), e.pop(), !0;
  }, h.isEqual = function (n, r) {
    return q(n, r);
  }, h.isEmpty = function (n) {
    return null == n || (w(n) && (h.isArray(n) || h.isString(n) || h.isArguments(n)) ? 0 === n.length : 0 === h.keys(n).length);
  }, h.isElement = function (n) {
    return !(!n || 1 !== n.nodeType);
  }, h.isArray = t || function (n) {
    return "[object Array]" === p.call(n);
  }, h.isObject = function (n) {
    var r = typeof n === "undefined" ? "undefined" : _typeof(n);return "function" === r || "object" === r && !!n;
  }, h.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"], function (r) {
    h["is" + r] = function (n) {
      return p.call(n) === "[object " + r + "]";
    };
  }), h.isArguments(arguments) || (h.isArguments = function (n) {
    return j(n, "callee");
  });var D = n.document && n.document.childNodes;"function" != typeof /./ && "object" != (typeof Int8Array === "undefined" ? "undefined" : _typeof(Int8Array)) && "function" != typeof D && (h.isFunction = function (n) {
    return "function" == typeof n || !1;
  }), h.isFinite = function (n) {
    return !h.isSymbol(n) && isFinite(n) && !isNaN(parseFloat(n));
  }, h.isNaN = function (n) {
    return h.isNumber(n) && isNaN(n);
  }, h.isBoolean = function (n) {
    return !0 === n || !1 === n || "[object Boolean]" === p.call(n);
  }, h.isNull = function (n) {
    return null === n;
  }, h.isUndefined = function (n) {
    return void 0 === n;
  }, h.has = function (n, r) {
    if (!h.isArray(r)) return j(n, r);for (var t = r.length, e = 0; e < t; e++) {
      var u = r[e];if (null == n || !i.call(n, u)) return !1;n = n[u];
    }return !!t;
  }, h.noConflict = function () {
    return n._ = r, this;
  }, h.identity = function (n) {
    return n;
  }, h.constant = function (n) {
    return function () {
      return n;
    };
  }, h.noop = function () {}, h.property = function (r) {
    return h.isArray(r) ? function (n) {
      return x(n, r);
    } : b(r);
  }, h.propertyOf = function (r) {
    return null == r ? function () {} : function (n) {
      return h.isArray(n) ? x(r, n) : r[n];
    };
  }, h.matcher = h.matches = function (r) {
    return r = h.extendOwn({}, r), function (n) {
      return h.isMatch(n, r);
    };
  }, h.times = function (n, r, t) {
    var e = Array(Math.max(0, n));r = y(r, t, 1);for (var u = 0; u < n; u++) {
      e[u] = r(u);
    }return e;
  }, h.random = function (n, r) {
    return null == r && (r = n, n = 0), n + Math.floor(Math.random() * (r - n + 1));
  }, h.now = Date.now || function () {
    return new Date().getTime();
  };var L = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
      P = h.invert(L),
      W = function W(r) {
    var t = function t(n) {
      return r[n];
    },
        n = "(?:" + h.keys(r).join("|") + ")",
        e = RegExp(n),
        u = RegExp(n, "g");return function (n) {
      return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n;
    };
  };h.escape = W(L), h.unescape = W(P), h.result = function (n, r, t) {
    h.isArray(r) || (r = [r]);var e = r.length;if (!e) return h.isFunction(t) ? t.call(n) : t;for (var u = 0; u < e; u++) {
      var i = null == n ? void 0 : n[r[u]];void 0 === i && (i = t, u = e), n = h.isFunction(i) ? i.call(n) : i;
    }return n;
  };var C = 0;h.uniqueId = function (n) {
    var r = ++C + "";return n ? n + r : r;
  }, h.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };var J = /(.)^/,
      U = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
      V = /\\|'|\r|\n|\u2028|\u2029/g,
      $ = function $(n) {
    return "\\" + U[n];
  };h.template = function (i, n, r) {
    !n && r && (n = r), n = h.defaults({}, n, h.templateSettings);var t,
        e = RegExp([(n.escape || J).source, (n.interpolate || J).source, (n.evaluate || J).source].join("|") + "|$", "g"),
        o = 0,
        a = "__p+='";i.replace(e, function (n, r, t, e, u) {
      return a += i.slice(o, u).replace(V, $), o = u + n.length, r ? a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : t ? a += "'+\n((__t=(" + t + "))==null?'':__t)+\n'" : e && (a += "';\n" + e + "\n__p+='"), n;
    }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";try {
      t = new Function(n.variable || "obj", "_", a);
    } catch (n) {
      throw n.source = a, n;
    }var u = function u(n) {
      return t.call(this, n, h);
    },
        c = n.variable || "obj";return u.source = "function(" + c + "){\n" + a + "}", u;
  }, h.chain = function (n) {
    var r = h(n);return r._chain = !0, r;
  };var G = function G(n, r) {
    return n._chain ? h(r).chain() : r;
  };h.mixin = function (t) {
    return h.each(h.functions(t), function (n) {
      var r = h[n] = t[n];h.prototype[n] = function () {
        var n = [this._wrapped];return u.apply(n, arguments), G(this, r.apply(h, n));
      };
    }), h;
  }, h.mixin(h), h.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (r) {
    var t = e[r];h.prototype[r] = function () {
      var n = this._wrapped;return t.apply(n, arguments), "shift" !== r && "splice" !== r || 0 !== n.length || delete n[0], G(this, n);
    };
  }), h.each(["concat", "join", "slice"], function (n) {
    var r = e[n];h.prototype[n] = function () {
      return G(this, r.apply(this._wrapped, arguments));
    };
  }), h.prototype.value = function () {
    return this._wrapped;
  }, h.prototype.valueOf = h.prototype.toJSON = h.prototype.value, h.prototype.toString = function () {
    return String(this._wrapped);
  }, "function" == "function" && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return h;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/js/utils/validator.js":
/*!***********************************!*\
  !*** ./src/js/utils/validator.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isDash = exports.isWebRTC = exports.isRtmp = undefined;

var _strings = __webpack_require__(/*! utils/strings */ "./src/js/utils/strings.js");

var isRtmp = exports.isRtmp = function isRtmp(file, type) {
    return file.indexOf('rtmp:') == 0 || type == 'rtmp';
};
var isWebRTC = exports.isWebRTC = function isWebRTC(file, type) {
    if (file) {
        return file.indexOf('ws:') === 0 || file.indexOf('wss:') === 0 || type === 'webrtc';
    }
    return false;
};
var isDash = exports.isDash = function isDash(file, type) {
    return type === 'mpd' || type === 'dash' || type === 'application/dash+xml' || (0, _strings.extractExtension)(file) == 'mpd';
};

/***/ }),

/***/ "./src/js/utils/webpack.js":
/*!*********************************!*\
  !*** ./src/js/utils/webpack.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * utils for webpack
 */

var getScriptPath = exports.getScriptPath = function getScriptPath(scriptName) {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
        var src = scripts[i].src;
        if (src) {
            var index = src.lastIndexOf('/' + scriptName);
            if (index >= 0) {
                return src.substr(0, index + 1);
            }
        }
    }
    return '';
};

/***/ }),

/***/ "./src/js/version.js":
/*!***************************!*\
  !*** ./src/js/version.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by hoho on 2018. 6. 29..
 */
var version = exports.version = '0.7.4-localbuild';

/***/ }),

/***/ "./src/js/view/controls/fullScreenButton.js":
/*!**************************************************!*\
  !*** ./src/js/view/controls/fullScreenButton.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _OvenTemplate = __webpack_require__(/*! view/engine/OvenTemplate */ "./src/js/view/engine/OvenTemplate.js");

var _OvenTemplate2 = _interopRequireDefault(_OvenTemplate);

var _likeA$ = __webpack_require__(/*! utils/likeA$ */ "./src/js/utils/likeA$.js");

var _likeA$2 = _interopRequireDefault(_likeA$);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by hoho on 2018. 7. 26..
 */
var FullScreenButton = function FullScreenButton($container, api) {
    var $root = (0, _likeA$2.default)("#" + api.getContainerId());
    var $iconExpand = "",
        $iconCompress = "",
        isFullScreen = false;

    var fullScreenEventTypes = {
        onfullscreenchange: "fullscreenchange",
        onmozfullscreenchange: "mozfullscreenchange",
        onwebkitfullscreenchange: "webkitfullscreenchange",
        MSFullscreenChange: "MSFullscreenChange"
    };

    var fullScreenChangedCallback = function fullScreenChangedCallback(event) {
        var checkFullScreen = function checkFullScreen() {
            return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
        };

        if (checkFullScreen()) {
            $root.addClass("ovp-fullscreen");
            isFullScreen = true;
            $iconExpand.hide();
            $iconCompress.show();
        } else {
            $root.removeClass("ovp-fullscreen");
            isFullScreen = false;
            $iconExpand.show();
            $iconCompress.hide();
        }
    };

    var requestFullScreen = function requestFullScreen() {
        if ($root.get().requestFullscreen) {
            $root.get().requestFullscreen();
        } else if ($root.get().webkitRequestFullscreen) {
            $root.get().webkitRequestFullscreen();
        } else if ($root.get().mozRequestFullScreen) {
            $root.get().mozRequestFullScreen();
        } else if ($root.get().msRequestFullscreen) {
            $root.get().msRequestFullscreen();
        } else {
            // TODO(rock): warn not supported
        }
    };
    var exitFullScreen = function exitFullScreen() {

        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else {
            // TODO(rock): warn not supported
        }
    };
    var toggleFullScreen = function toggleFullScreen() {
        if (!isFullScreen) {
            requestFullScreen();
        } else {
            exitFullScreen();
        }
    };

    var onRendered = function onRendered($current, template) {
        $iconExpand = $current.find('.ovp-fullscreen-button-expandicon');
        $iconCompress = $current.find('.ovp-fullscreen-button-compressicon');

        //Bind Global(document) Event
        Object.keys(fullScreenEventTypes).forEach(function (eventName) {
            //Difference between undefined and null.
            //undefined is not support. null is support but not inited.
            if (document[eventName] === null) {
                document.addEventListener(fullScreenEventTypes[eventName], fullScreenChangedCallback);
            }
        });
    };
    var onDestroyed = function onDestroyed() {
        //Unbind Global(document) Event
        Object.keys(fullScreenEventTypes).forEach(function (eventName) {
            if (document[eventName] === null) {
                document.removeEventListener(fullScreenEventTypes[eventName], fullScreenChangedCallback);
            }
        });
    };
    var events = {
        "click .ovp-fullscreen-button": function clickOvpFullscreenButton(event, $current, template) {
            event.preventDefault();
            toggleFullScreen();
        }
    };

    return (0, _OvenTemplate2.default)($container, "FullScreenButton", null, events, onRendered, onDestroyed);
};

exports.default = FullScreenButton;

/***/ }),

/***/ "./src/js/view/controls/fullScreenButtonTemplate.js":
/*!**********************************************************!*\
  !*** ./src/js/view/controls/fullScreenButtonTemplate.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return '<button class="ovp-button ovp-fullscreen-button">' + '<i class="ovp-fullscreen-button-expandicon"></i>' + '<i class="ovp-fullscreen-button-compressicon"></i>' + '</button>';
};

/***/ }),

/***/ "./src/js/view/controls/main.js":
/*!**************************************!*\
  !*** ./src/js/view/controls/main.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _OvenTemplate = __webpack_require__(/*! view/engine/OvenTemplate */ "./src/js/view/engine/OvenTemplate.js");

var _OvenTemplate2 = _interopRequireDefault(_OvenTemplate);

var _playButton = __webpack_require__(/*! view/controls/playButton */ "./src/js/view/controls/playButton.js");

var _playButton2 = _interopRequireDefault(_playButton);

var _volumeButton = __webpack_require__(/*! view/controls/volumeButton */ "./src/js/view/controls/volumeButton.js");

var _volumeButton2 = _interopRequireDefault(_volumeButton);

var _progressBar = __webpack_require__(/*! view/controls/progressBar */ "./src/js/view/controls/progressBar.js");

var _progressBar2 = _interopRequireDefault(_progressBar);

var _timeDisplay = __webpack_require__(/*! view/controls/timeDisplay */ "./src/js/view/controls/timeDisplay.js");

var _timeDisplay2 = _interopRequireDefault(_timeDisplay);

var _fullScreenButton = __webpack_require__(/*! view/controls/fullScreenButton */ "./src/js/view/controls/fullScreenButton.js");

var _fullScreenButton2 = _interopRequireDefault(_fullScreenButton);

var _settingPanel = __webpack_require__(/*! view/controls/settingPanel */ "./src/js/view/controls/settingPanel.js");

var _settingPanel2 = _interopRequireDefault(_settingPanel);

var _SettingPanelList = __webpack_require__(/*! view/global/SettingPanelList */ "./src/js/view/global/SettingPanelList.js");

var _SettingPanelList2 = _interopRequireDefault(_SettingPanelList);

var _underscore = __webpack_require__(/*! utils/underscore */ "./src/js/utils/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

var _constants = __webpack_require__(/*! api/constants */ "./src/js/api/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by hoho on 2018. 7. 20..
 */
var Controls = function Controls($container, api) {
    var volumeButton = "",
        playButton = "",
        progressBar = "",
        timeDisplay = "",
        fullScreenButton = "";

    var generateMainPanelData = function generateMainPanelData() {
        var panel = { title: "Settings", isMain: true, body: [] };
        var currentSource = api.getCurrentQuality();
        if (api.getDuration() !== Infinity && currentSource.type !== _constants.PROVIDER_RTMP) {
            var body = {
                title: "Speed",
                value: api.getPlaybackRate() === 1 ? "Normal" : api.getPlaybackRate(),
                type: "playbackrate"
            };
            panel.body.push(body);
        }

        if (api.getQualityLevels().length > 0) {
            var currentQuality = api.getCurrentQuality();

            var _body = {
                title: "Source",
                value: currentQuality ? currentQuality.label : "Default",
                type: "qualitylevel"
            };

            panel.body.push(_body);
        }
        return panel;
    };

    var onRendered = function onRendered($current, template) {

        var initTimeDisplay = function initTimeDisplay(data) {
            if (timeDisplay) {
                timeDisplay.destroy();
            }
            timeDisplay = (0, _timeDisplay2.default)($current.find(".ovp-left-controls"), api, data);
        };
        var initProgressBar = function initProgressBar() {
            if (progressBar) {
                progressBar.destroy();
            }
            progressBar = (0, _progressBar2.default)($current.find(".ovp-progressbar-container"), api);
        };

        playButton = (0, _playButton2.default)($current.find(".ovp-left-controls"), api);
        volumeButton = (0, _volumeButton2.default)($current.find(".ovp-left-controls"), api);
        fullScreenButton = (0, _fullScreenButton2.default)($current.find(".ovp-right-controls"), api);

        api.on(_constants.CONTENT_META, function (data) {
            initTimeDisplay(data);
            if (data.duration === Infinity) {
                //live
                if (progressBar) {
                    progressBar.destroy();
                }
            } else {
                //vod
                initProgressBar();
            }
        });
        api.on(_constants.ERROR, function (error) {
            template.destroy();
        });
    };
    var onDestroyed = function onDestroyed() {
        //Do nothing.
    };
    var events = {
        "mouseleave .ovp-controls": function mouseleaveOvpControls(event, $current, template) {
            event.preventDefault();

            volumeButton.setMouseDown(false);
            $current.find(".ovp-volume-slider-container").removeClass("active");
        },
        "click .ovp-setting-button": function clickOvpSettingButton(event, $current, template) {
            event.preventDefault();

            //toggle
            if (_SettingPanelList2.default.length > 0) {
                //clear all SettingPanelTemplate
                _underscore2.default.each(_SettingPanelList2.default, function (settingPanel) {
                    settingPanel.destroy();
                });
                _SettingPanelList2.default.splice(0, _SettingPanelList2.default.length);
            } else {
                _SettingPanelList2.default.push((0, _settingPanel2.default)($current, api, generateMainPanelData()));
            }
        }
    };

    return (0, _OvenTemplate2.default)($container, "Controls", null, events, onRendered, onDestroyed);
};

exports.default = Controls;

/***/ }),

/***/ "./src/js/view/controls/mainTemplate.js":
/*!**********************************************!*\
  !*** ./src/js/view/controls/mainTemplate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
     value: true
});

var Controls = function Controls() {
     return '<div class="ovp-controls-container">' + '<div class="ovp-gradient-bottom"></div>' + '<div class="ovp-bottom-panel">' + '    <div class="ovp-progressbar-container">' + '    </div>' + '    <div class="ovp-controls">' + '        <div class="ovp-left-controls">' + '        </div>' + '        <div class="ovp-right-controls">' + '               <button class="ovp-button ovp-setting-button"><i class="ovp-setting-button-icon"></i></button>' + '        </div>' + '    </div>' + '</div>';
     '</div>';
};

exports.default = Controls;

/***/ }),

/***/ "./src/js/view/controls/playButton.js":
/*!********************************************!*\
  !*** ./src/js/view/controls/playButton.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _OvenTemplate = __webpack_require__(/*! view/engine/OvenTemplate */ "./src/js/view/engine/OvenTemplate.js");

var _OvenTemplate2 = _interopRequireDefault(_OvenTemplate);

var _constants = __webpack_require__(/*! api/constants */ "./src/js/api/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by hoho on 2018. 7. 24..
 */
var PlayButton = function PlayButton($container, api) {
    var $iconPlay = "",
        $iconPause = "",
        $iconReplay = "";

    var setButtonState = function setButtonState(state) {
        $iconPlay.hide();
        $iconPause.hide();
        $iconReplay.hide();

        if (state === _constants.STATE_PLAYING) {
            $iconPause.show();
        } else if (state === _constants.STATE_PAUSED) {
            $iconPlay.show();
        } else if (state === _constants.STATE_COMPLETE) {
            $iconPlay.show();
        } else {
            $iconPlay.show();
        }
    };

    var onRendered = function onRendered($current, template) {
        $iconPlay = $current.find(".ovp-play-button-playicon");
        $iconPause = $current.find(".ovp-play-button-pauseicon");
        $iconReplay = $current.find(".ovp-play-button-replayicon");

        api.on(_constants.PLAYER_STATE, function (data) {
            if (data && data.newstate) {
                setButtonState(data.newstate);
            }
        });
    };
    var onDestroyed = function onDestroyed() {
        //Do nothing.
    };
    var events = {
        "click .ovp-play-button": function clickOvpPlayButton(event, $current, template) {
            event.preventDefault();
            var currentState = api.getState();
            if (currentState === _constants.STATE_IDLE) {
                api.play();
            } else if (currentState === _constants.STATE_PLAYING) {
                api.pause();
            } else if (currentState === _constants.STATE_PAUSED) {
                api.play();
            } else if (currentState === _constants.STATE_COMPLETE) {
                api.play();
            }
        }
    };

    return (0, _OvenTemplate2.default)($container, "PlayButton", null, events, onRendered, onDestroyed);
};

exports.default = PlayButton;

/***/ }),

/***/ "./src/js/view/controls/playButtonTemplate.js":
/*!****************************************************!*\
  !*** ./src/js/view/controls/playButtonTemplate.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return '<button class="ovp-button ovp-play-button" type="button">' + '<i class="ovp-play-button-playicon"></i>' + '<i class="ovp-play-button-pauseicon"></i>' + '<i class="ovp-play-button-replayicon"></i>' + '</button>';
};

/***/ }),

/***/ "./src/js/view/controls/progressBar.js":
/*!*********************************************!*\
  !*** ./src/js/view/controls/progressBar.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _OvenTemplate = __webpack_require__(/*! view/engine/OvenTemplate */ "./src/js/view/engine/OvenTemplate.js");

var _OvenTemplate2 = _interopRequireDefault(_OvenTemplate);

var _SettingPanelList = __webpack_require__(/*! view/global/SettingPanelList */ "./src/js/view/global/SettingPanelList.js");

var _SettingPanelList2 = _interopRequireDefault(_SettingPanelList);

var _strings = __webpack_require__(/*! utils/strings */ "./src/js/utils/strings.js");

var _likeA$ = __webpack_require__(/*! utils/likeA$ */ "./src/js/utils/likeA$.js");

var _likeA$2 = _interopRequireDefault(_likeA$);

var _constants = __webpack_require__(/*! api/constants */ "./src/js/api/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBar = function ProgressBar($container, api) {
    var $root = (0, _likeA$2.default)("#" + api.getContainerId());
    var currentPlayingPosition = 0;
    var currentPlayingPercentage = 0;
    var currentLoadedPercentage = 0;

    var mouseInside = false,
        mouseDown = false;

    var $progressBar = "",
        $progressLoad = "",
        $progressPlay = "",
        $progressHover = "",
        $knobContainer = "",
        $knob = "",
        knobWidth = 0,
        $time = "";

    var positionElements = function positionElements(percentage) {
        var progressBarWidth = $progressBar.width();
        var position = progressBarWidth * percentage;

        $progressPlay.css('width', position + 'px');
        $progressHover.css('left', position + 'px');

        var knobPostion = (progressBarWidth - knobWidth) * percentage;
        $knobContainer.css('left', knobPostion + 'px');

        currentPlayingPosition = position;
        currentPlayingPercentage = percentage;
    };

    var drawHoverProgress = function drawHoverProgress(percentage) {
        var progressBarWidth = $progressBar.width();
        var hoverPosition = progressBarWidth * percentage;

        $progressHover.css('width', percentage == 0 ? percentage : hoverPosition - currentPlayingPosition + 'px');
    };

    var drawLoadProgress = function drawLoadProgress(percentage) {
        var progressBarWidth = $progressBar.width();
        var loadPosition = progressBarWidth * percentage;

        $progressLoad.css('width', loadPosition + 'px');
        currentLoadedPercentage = percentage;
    };

    var calculatePercentage = function calculatePercentage(event) {
        var progressBarWidth = $progressBar.width();
        var progressBarOffsetX = $progressBar.offset().left;
        var pointerOffsetX = event.pageX;

        var percentage = (pointerOffsetX - progressBarOffsetX) / progressBarWidth;

        if (percentage < 0) {
            return 0;
        }

        if (percentage > 1) {
            return 1;
        }

        return percentage;
    };

    var drawTimeIndicator = function drawTimeIndicator(percentage, event) {
        if (_SettingPanelList2.default.length > 0) {
            $time.hide();
            return;
        }

        var duration = api.getDuration();
        var second = duration * percentage;

        var hms = (0, _strings.naturalHms)(second);

        $time.text(hms);

        var timeElemWidth = $time.width();
        var progressBarWidth = $progressBar.width();
        var position = progressBarWidth * percentage;
        var positionOfPixel = event.pageX - $progressBar.offset().left;

        var calculateMagnetic = function calculateMagnetic() {
            if (positionOfPixel < timeElemWidth / 2) {
                return 0;
            } else if (progressBarWidth - positionOfPixel < timeElemWidth / 2) {
                return progressBarWidth - timeElemWidth;
            } else {
                return position - timeElemWidth / 2;
            }
        };
        var magneticPosition = calculateMagnetic();
        $time.css('left', magneticPosition + "px");
    };

    var seek = function seek(percentage) {
        api.seek((api.getDuration() || 0) * percentage);
    };
    var onRendered = function onRendered($current, template) {
        $progressBar = $current;
        $progressLoad = $current.find(".ovp-load-progress");
        $progressPlay = $current.find(".ovp-play-progress");
        $progressHover = $current.find(".ovp-hover-progress");
        $knobContainer = $current.find(".ovp-progressbar-knob-container");
        $knob = $current.find(".ovp-progressbar-knob");
        knobWidth = $knob.width();
        $time = $current.find(".ovp-progressbar-time");

        api.on('time', function (data) {
            if (data && data.duration && data.position) {
                positionElements(data.position / data.duration);
            }
        });

        api.on('bufferChanged', function (data) {
            if (data && data.bufferPercent) {
                drawLoadProgress(data.bufferPercent / 100);
            }
        });
    };
    var onDestroyed = function onDestroyed() {};
    var events = {
        "resize window": function resizeWindow(event, $current, template) {
            event.preventDefault();

            positionElements(currentPlayingPercentage);
            drawLoadProgress(currentLoadedPercentage);
        },
        "mouseenter .ovp-progressbar": function mouseenterOvpProgressbar(event, $current, template) {
            event.preventDefault();

            mouseInside = true;
            $time.show();
            $root.addClass("ovp-progressbar-hover");
        },
        "mouseleave .ovp-progressbar": function mouseleaveOvpProgressbar(event, $current, template) {
            event.preventDefault();

            mouseInside = false;
            if (!mouseInside) {
                $root.removeClass("ovp-progressbar-hover");
                $time.hide();
            }
            drawHoverProgress(0);
        },
        "mousedown .ovp-progressbar": function mousedownOvpProgressbar(event, $current, template) {
            event.preventDefault();
            mouseDown = true;
            var percentage = calculatePercentage(event);
            positionElements(percentage);
            drawHoverProgress(0);
            seek(percentage);
        },
        "mousemove .ovp-progressbar": function mousemoveOvpProgressbar(event, $current, template) {
            event.preventDefault();

            if (!mouseDown) {
                var percentage = calculatePercentage(event);
                drawHoverProgress(percentage);
                drawTimeIndicator(percentage, event);
            }
        },
        "mousemove document": function mousemoveDocument(event, $current, template) {
            event.preventDefault();
            if (mouseDown) {
                var percentage = calculatePercentage(event);
                positionElements(percentage);
                drawHoverProgress(0);
                seek(percentage);
                drawTimeIndicator(percentage, event);
            }
        },
        "mouseup document": function mouseupDocument(event, $current, template) {
            event.preventDefault();

            if (mouseDown) {
                mouseDown = false;
                $root.removeClass("ovp-progressbar-hover");
            }
        }
    };

    return (0, _OvenTemplate2.default)($container, "ProgressBar", null, events, onRendered, onDestroyed);
}; /**
    * Created by hoho on 2018. 7. 24..
    */
exports.default = ProgressBar;

/***/ }),

/***/ "./src/js/view/controls/progressBarTemplate.js":
/*!*****************************************************!*\
  !*** ./src/js/view/controls/progressBarTemplate.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return '<div class="ovp-progressbar" tabindex="0">' + '<div class="ovp-progressbar-padding"></div>' + '<div class="ovp-progress-list">' + '<div class="ovp-load-progress"></div>' + '<div class="ovp-play-progress ovp-play-background-color"></div>' + '<div class="ovp-hover-progress"></div>' + '</div>' + '<div class="ovp-progressbar-knob-container">' + '<div class="ovp-progressbar-knob ovp-play-background-color"></div>' + '</div>' + '<span class="ovp-progressbar-time">0:00</span>' + '</div>';
};

/***/ }),

/***/ "./src/js/view/controls/settingPanel.js":
/*!**********************************************!*\
  !*** ./src/js/view/controls/settingPanel.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _OvenTemplate = __webpack_require__(/*! view/engine/OvenTemplate */ "./src/js/view/engine/OvenTemplate.js");

var _OvenTemplate2 = _interopRequireDefault(_OvenTemplate);

var _SettingPanelList = __webpack_require__(/*! view/global/SettingPanelList */ "./src/js/view/global/SettingPanelList.js");

var _SettingPanelList2 = _interopRequireDefault(_SettingPanelList);

var _likeA$ = __webpack_require__(/*! utils/likeA$ */ "./src/js/utils/likeA$.js");

var _likeA$2 = _interopRequireDefault(_likeA$);

var _underscore = __webpack_require__(/*! utils/underscore */ "./src/js/utils/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by hoho on 2018. 7. 26..
 */
var PLAYER_MIN_HEIGHT = 220;
var SettingPanel = function SettingPanel($container, api, data) {
    var $root = (0, _likeA$2.default)("#" + api.getContainerId());

    var extractPanelData = function extractPanelData(panelType) {
        var panel = { title: "", body: [], type: panelType };

        if (panelType === "playbackrate") {
            panel.title = "Speed";
            var playBackRates = api.getConfig().playbackRates;
            var currentPlaybackRate = api.getPlaybackRate();
            for (var i = 0; i < playBackRates.length; i++) {
                var body = {
                    title: playBackRates[i] === 1 ? "Normal" : playBackRates[i],
                    isCheck: currentPlaybackRate === playBackRates[i],
                    value: playBackRates[i]
                };
                panel.body.push(body);
            }
        } else if (panelType === "qualitylevel") {
            panel.title = "Source";

            var qualityLevels = api.getQualityLevels();
            var currentQuality = api.getCurrentQuality();

            for (var _i = 0; _i < qualityLevels.length; _i++) {
                var _body = {
                    title: qualityLevels[_i].label,
                    isCheck: currentQuality.index === _i,
                    value: _i
                };
                panel.body.push(_body);
            }
        }
        return panel;
    };

    var onRendered = function onRendered($current, template) {
        if (PLAYER_MIN_HEIGHT > $root.height()) {
            $root.find(".ovp-setting-panel").css("maxHeight", "114px");
        }
    };
    var onDestroyed = function onDestroyed() {
        //Do nothing.
    };
    var events = {
        "click .ovp-setting-main-item": function clickOvpSettingMainItem(event, $current, template) {
            event.preventDefault();
            var panelType = (0, _likeA$2.default)(event.currentTarget).attr("ovp-panel-type");
            //parent must be not $current!
            _SettingPanelList2.default.push(SettingPanel($container, api, extractPanelData(panelType)));
        },
        "click .ovp-setting-title": function clickOvpSettingTitle(event, $current, template) {
            event.preventDefault();

            //Remove Current Panel
            var last = _SettingPanelList2.default.pop();
            last.destroy();
        },
        "click .ovp-setting-item-value": function clickOvpSettingItemValue(event, $current, template) {
            event.preventDefault();

            var panelType = (0, _likeA$2.default)(event.currentTarget).attr("ovp-panel-type");
            var value = (0, _likeA$2.default)(event.currentTarget).attr("ovp-data-value");

            if (panelType && value) {
                if (panelType === "playbackrate") {
                    api.setPlaybackRate(parseFloat(value));
                } else if (panelType === "qualitylevel") {
                    api.setCurrentQuality(parseInt(value));
                }

                //clear all SettingPanelTemplate
                _underscore2.default.each(_SettingPanelList2.default, function (settingPanel) {
                    settingPanel.destroy();
                });
                _SettingPanelList2.default.splice(0, _SettingPanelList2.default.length);
            }
        }
    };

    return (0, _OvenTemplate2.default)($container, "SettingPanel", data, events, onRendered, onDestroyed);
};

exports.default = SettingPanel;

/***/ }),

/***/ "./src/js/view/controls/settingPanelTemplate.js":
/*!******************************************************!*\
  !*** ./src/js/view/controls/settingPanelTemplate.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.settingValueTemplate = exports.settingItemTemplate = undefined;

var _underscore = __webpack_require__(/*! utils/underscore */ "./src/js/utils/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (data) {
    var elements = '<div class="ovp-setting-panel ' + (data.isMain ? 'animated fadeIn' : '') + '">' + '<div class="ovp-setting-title-container">' + '<div class="ovp-setting-title" tabindex="0">' + (data.isMain ? '' : '<span class="ovp-setting-title-previcon">&lt;</span>') + '<span class="ovp-setting-title-title">' + data.title + '</span>' + '</div>' + '</div>' + '<div class="ovp-setting-item-container">';
    _underscore2.default.forEach(data.body, function (body) {
        if (data.isMain) {
            elements += settingItemTemplate(body.title, body.value, body.type);
        } else {
            elements += settingValueTemplate(body.title, body.value, data.type, body.isCheck);
        }
    });
    elements += '</div>' + '</div>';
    return elements;
};

var settingItemTemplate = exports.settingItemTemplate = function settingItemTemplate(title, value, type) {
    return '<div class="ovp-setting-item ovp-setting-main-item" ovp-panel-type="' + type + '">' + '<span class="ovp-setting-item-title">' + title + '</span>' + '<span class="ovp-setting-item-nexticon">&gt;</span>' + '<span class="ovp-setting-item-value">' + value + '</span>' + '</div>';
};

var settingValueTemplate = exports.settingValueTemplate = function settingValueTemplate(title, value, type, isCheck) {
    return '<div class="ovp-setting-item ovp-setting-item-value" ovp-panel-type="' + type + '" ovp-data-value="' + value + '">' + '<span class="ovp-setting-item-checked ' + (isCheck ? 'ovp-show' : '') + '">&#x2713;</span>' + '<span class="ovp-setting-item-title">' + title + '</span>' + '</div>';
};

/***/ }),

/***/ "./src/js/view/controls/timeDisplay.js":
/*!*********************************************!*\
  !*** ./src/js/view/controls/timeDisplay.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _OvenTemplate = __webpack_require__(/*! view/engine/OvenTemplate */ "./src/js/view/engine/OvenTemplate.js");

var _OvenTemplate2 = _interopRequireDefault(_OvenTemplate);

var _strings = __webpack_require__(/*! utils/strings */ "./src/js/utils/strings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by hoho on 2018. 7. 25..
 */
var TimeDisplay = function TimeDisplay($container, api, data) {

    var $position = "",
        $duration = "";
    var convertHumanizeTime = function convertHumanizeTime(time) {
        return (0, _strings.naturalHms)(time);
    };

    var onRendered = function onRendered($current, template) {
        $position = $current.find('.ovp-time-current');
        $duration = $current.find('.ovp-time-duration');

        if (data.duration !== Infinity) {

            $duration.text(convertHumanizeTime(data.duration));
            api.on('time', function (data) {
                $position.text(convertHumanizeTime(data.position));
            });
        }
    };
    var onDestroyed = function onDestroyed() {
        //Do nothing.
    };
    var events = {};

    return (0, _OvenTemplate2.default)($container, "TimeDisplay", data, events, onRendered, onDestroyed);
};

exports.default = TimeDisplay;

/***/ }),

/***/ "./src/js/view/controls/timeDisplayTemplate.js":
/*!*****************************************************!*\
  !*** ./src/js/view/controls/timeDisplayTemplate.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (data) {
    return '<div class="ovp-time-display">' + (data.duration === Infinity ? '<button class="ovp-live-badge ovp-button" disabled="disabled">' + (data.type == 'webrtc' ? '<span class="ovp-live-badge-lowlatency">low latency live</span>' : '<span>live</span>') + '</button>' : '<span class="ovp-time-current">0:00</span>' + '<span class="ovp-time-separator"> / </span>' + '<span class="ovp-time-duration">0:00</span>') + '</div>';
};

/***/ }),

/***/ "./src/js/view/controls/volumeButton.js":
/*!**********************************************!*\
  !*** ./src/js/view/controls/volumeButton.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by hoho on 2018. 7. 20..
                                                                                                                                                                                                                                                                   */


var _OvenTemplate = __webpack_require__(/*! view/engine/OvenTemplate */ "./src/js/view/engine/OvenTemplate.js");

var _OvenTemplate2 = _interopRequireDefault(_OvenTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VolumeButton = function VolumeButton($container, api) {

    var $sliderContainer = "",
        $slider = "",
        $sliderHandle = "",
        $sliderValue = "",
        $volumeIconBig = "",
        $volumeIconSmall = "",
        $volumeIconMute = "";
    var mouseDown = false;
    var sliderWidth = 70,
        handleWidth = 0,
        minRange = 0,
        maxRange = 0;

    /*private functions*/
    var setVolumeIcon = function setVolumeIcon(percentage) {
        $volumeIconBig.hide();
        $volumeIconSmall.hide();
        $volumeIconMute.hide();

        if (percentage >= 70) {
            $volumeIconBig.show();
        } else if (percentage < 70 && percentage > 0) {
            $volumeIconSmall.show();
        } else if (percentage == 0) {
            $volumeIconMute.show();
        }
    };

    var setVolumeUI = function setVolumeUI(percentage) {
        if (api.getMute()) {
            percentage = 0;
        }

        setVolumeIcon(percentage);

        var handlePosition = maxRange * percentage / 100;

        $sliderHandle.css('left', handlePosition + 'px');
        $sliderValue.css('width', handlePosition + 'px');
    };

    var calculatePercentage = function calculatePercentage(event) {
        var relativeX = event.pageX - $slider.offset().left;
        var percentage = relativeX / sliderWidth * 100;

        if (percentage < 0) {
            percentage = 0;
        }

        if (percentage > 100) {
            percentage = 100;
        }

        return percentage;
    };

    var onRendered = function onRendered($current, template) {
        $sliderContainer = $current.find(".ovp-volume-slider-container");
        $slider = $current.find(".ovp-volume-silder");
        $sliderHandle = $current.find(".ovp-volume-slider-handle");
        $sliderValue = $current.find(".ovp-volume-slider-value");

        $volumeIconBig = $current.find(".ovp-volume-button-bigicon");
        $volumeIconSmall = $current.find(".ovp-volume-button-smallicon");
        $volumeIconMute = $current.find(".ovp-volume-button-muteicon");

        handleWidth = $sliderHandle.width();
        maxRange = sliderWidth - handleWidth;

        api.on('ready', function () {
            setVolumeUI(api.getVolume());
        });
        api.on('volumeChanged', function (data) {
            setVolumeUI(data.volume);
        });
        api.on('mute', function (data) {
            if (data.mute) {
                setVolumeUI(0);
            } else {
                setVolumeUI(api.getVolume());
            }
        });
    };
    var onDestroyed = function onDestroyed() {};
    var events = {
        "click .ovp-volume-button": function clickOvpVolumeButton(event, $current, template) {
            event.preventDefault();

            if (api.getVolume() === 0) {
                api.setMute(false);
                api.setVolume(100);
            } else {
                api.setMute();
            }
        },
        "mouseenter .ovp-volume-button": function mouseenterOvpVolumeButton(event, $current, template) {
            event.preventDefault();
            $sliderContainer.addClass("active");
        },
        "mouseleave .ovp-volume-silder": function mouseleaveOvpVolumeSilder(event, $current, template) {
            event.preventDefault();

            mouseDown = false;
        },
        "mousedown .ovp-volume-silder": function mousedownOvpVolumeSilder(event, $current, template) {
            event.preventDefault();
            mouseDown = true;
            api.setMute(false);
            api.setVolume(calculatePercentage(event));
        },
        "mouseup .ovp-volume-silder": function mouseupOvpVolumeSilder(event, $current, template) {
            event.preventDefault();
            mouseDown = false;
        },
        "mousemove .ovp-volume-silder": function mousemoveOvpVolumeSilder(event, $current, template) {
            event.preventDefault();
            if (!mouseDown) {
                return false;
            }

            api.setVolume(calculatePercentage(event));
        }
    };

    return _extends((0, _OvenTemplate2.default)($container, "VolumeButton", null, events, onRendered, onDestroyed), {
        setMouseDown: function setMouseDown(state) {
            mouseDown = state;
        }
    });
};

exports.default = VolumeButton;

/***/ }),

/***/ "./src/js/view/controls/volumeButtonTemplate.js":
/*!******************************************************!*\
  !*** ./src/js/view/controls/volumeButtonTemplate.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

/**
 * Created by hoho on 2018. 7. 20..
 */
exports.default = function () {
    return '<div class="ovp-volume-controller">' + '<button class="ovp-button ovp-volume-button">' + '<i class="ovp-volume-button-bigicon"></i>' + '<i class="ovp-volume-button-smallicon"></i>' + '<i class="ovp-volume-button-muteicon"></i>' + '</button>' + '<div class="ovp-volume-slider-container">' + '<div class="ovp-volume-silder">' + '<div class="ovp-volume-slider-bg"></div>' + '<div class="ovp-volume-slider-value"></div>' + '<div class="ovp-volume-slider-handle"></div>' + '</div>' + '</div>' + '</div>';
};

/***/ }),

/***/ "./src/js/view/engine/OvenTemplate.js":
/*!********************************************!*\
  !*** ./src/js/view/engine/OvenTemplate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Templates = __webpack_require__(/*! view/engine/Templates */ "./src/js/view/engine/Templates.js");

var _Templates2 = _interopRequireDefault(_Templates);

var _likeA$ = __webpack_require__(/*! utils/likeA$ */ "./src/js/utils/likeA$.js");

var _likeA$2 = _interopRequireDefault(_likeA$);

var _underscore = __webpack_require__(/*! utils/underscore */ "./src/js/utils/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @brief   This is simple ui renderer. This returns onRendered callback, onDestroyed callback on Template. And this bind events for Templates.
 * @param   container  dom element or LA$ object
 * @param   templateName    templateName
 * @param   data    preload data
 * @param   events    Template's events.
 * @param   onRendered    This callback occurs after append template.
 * @param   onDestroyed    This callback occurs after destroyed template.
 * @param   isRoot
 *
 * */
var OvenTemplate = function OvenTemplate(container, templateName, data, events, onRendered, onDestroyed, isRoot) {
    var $container = _underscore2.default.isElement(container) ? (0, _likeA$2.default)(container) : container;
    var $template = void 0;
    var viewEvents = {};
    var that = {};

    var createAndSelectElement = function createAndSelectElement(html) {
        var newElement = document.createElement('div');
        newElement.innerHTML = html;

        $template = (0, _likeA$2.default)(newElement.firstChild);

        return newElement.firstChild;
    };

    if (isRoot) {
        $container.replace(createAndSelectElement(_Templates2.default[templateName + "Template"](data)));
    } else {
        $container.append(createAndSelectElement(_Templates2.default[templateName + "Template"](data)));
    }

    if (onRendered) {
        onRendered($template, that);
    }

    Object.keys(events).forEach(function (eventString) {
        var explodedText = eventString.split(" ");
        var eventName = explodedText[0].replace(/ /gi, "");
        var target = explodedText[1].replace(/ /gi, "");

        var $target = "";

        if (target === "document" || target === "window") {
            $target = (0, _likeA$2.default)(target);
        } else {
            $target = $template.find(target) || ($template.hasClass(target.replace(".", "")) ? $template : null);
        }

        if (eventName && target && $target) {
            var id = Object.keys(viewEvents).length++;

            //because It retuns another data.
            var wrappedFunc = function wrappedFunc(event) {
                return events[eventString](event, $template, that);
            };
            viewEvents[id] = { name: eventName, target: target, callback: wrappedFunc };

            //sometimes target is NodeList
            var nodeLength = $target.get().length;
            if (nodeLength > 1) {
                var nodeList = $target.get();
                for (var i = 0; i < nodeLength; i++) {
                    nodeList[i].addEventListener(eventName, wrappedFunc);
                }
                //IE NodeList doesn't have forEach. It's wack.
                /*$target.get().forEach(function($item){
                    $item.addEventListener(eventName, wrappedFunc);
                });*/
            } else {
                $target.get().addEventListener(eventName, wrappedFunc);
            }
        } else {
            return false;
        }
    });

    that.destroy = function () {
        Object.keys(viewEvents).forEach(function (id) {
            var event = viewEvents[id];
            var $target = "";

            if (event.target === "document" || event.target === "window") {
                $target = (0, _likeA$2.default)(event.target);
            } else {
                $target = $template.find(event.target) || ($template.hasClass(event.target.replace(".", "")) ? $template : null);
            }

            //sometimes target is NodeList
            var nodeLength = $target.get().length;
            if (nodeLength > 1) {
                var nodeList = $target.get();
                for (var i = 0; i < nodeLength; i++) {
                    nodeList[i].removeEventListener(event.name, event.callback);
                }
                /*$target.get().forEach(function($item){
                    $item.removeEventListener(event.name, event.callback);
                });*/
            } else {
                $target.get().removeEventListener(event.name, event.callback);
            }

            delete viewEvents[id];
        });

        if ($template) {
            $template.remove();
        }

        if (onDestroyed) {
            onDestroyed();
        }
    };
    return that;
}; /**
    * Created by hoho on 2018. 7. 19..
    */

exports.default = OvenTemplate;

/***/ }),

/***/ "./src/js/view/engine/Templates.js":
/*!*****************************************!*\
  !*** ./src/js/view/engine/Templates.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mainTemplate = __webpack_require__(/*! view/example/mainTemplate */ "./src/js/view/example/mainTemplate.js");

var _mainTemplate2 = _interopRequireDefault(_mainTemplate);

var _viewTemplate = __webpack_require__(/*! view/viewTemplate */ "./src/js/view/viewTemplate.js");

var _viewTemplate2 = _interopRequireDefault(_viewTemplate);

var _mainTemplate3 = __webpack_require__(/*! view/helper/mainTemplate */ "./src/js/view/helper/mainTemplate.js");

var _mainTemplate4 = _interopRequireDefault(_mainTemplate3);

var _bigButtonTemplate = __webpack_require__(/*! view/helper/bigButtonTemplate */ "./src/js/view/helper/bigButtonTemplate.js");

var _bigButtonTemplate2 = _interopRequireDefault(_bigButtonTemplate);

var _messageBoxTemplate = __webpack_require__(/*! view/helper/messageBoxTemplate */ "./src/js/view/helper/messageBoxTemplate.js");

var _messageBoxTemplate2 = _interopRequireDefault(_messageBoxTemplate);

var _spinnerTemplate = __webpack_require__(/*! view/helper/spinnerTemplate */ "./src/js/view/helper/spinnerTemplate.js");

var _spinnerTemplate2 = _interopRequireDefault(_spinnerTemplate);

var _contextPanelTemplate = __webpack_require__(/*! view/helper/contextPanelTemplate */ "./src/js/view/helper/contextPanelTemplate.js");

var _contextPanelTemplate2 = _interopRequireDefault(_contextPanelTemplate);

var _mainTemplate5 = __webpack_require__(/*! view/controls/mainTemplate */ "./src/js/view/controls/mainTemplate.js");

var _mainTemplate6 = _interopRequireDefault(_mainTemplate5);

var _volumeButtonTemplate = __webpack_require__(/*! view/controls/volumeButtonTemplate */ "./src/js/view/controls/volumeButtonTemplate.js");

var _volumeButtonTemplate2 = _interopRequireDefault(_volumeButtonTemplate);

var _progressBarTemplate = __webpack_require__(/*! view/controls/progressBarTemplate */ "./src/js/view/controls/progressBarTemplate.js");

var _progressBarTemplate2 = _interopRequireDefault(_progressBarTemplate);

var _playButtonTemplate = __webpack_require__(/*! view/controls/playButtonTemplate */ "./src/js/view/controls/playButtonTemplate.js");

var _playButtonTemplate2 = _interopRequireDefault(_playButtonTemplate);

var _timeDisplayTemplate = __webpack_require__(/*! view/controls/timeDisplayTemplate */ "./src/js/view/controls/timeDisplayTemplate.js");

var _timeDisplayTemplate2 = _interopRequireDefault(_timeDisplayTemplate);

var _fullScreenButtonTemplate = __webpack_require__(/*! view/controls/fullScreenButtonTemplate */ "./src/js/view/controls/fullScreenButtonTemplate.js");

var _fullScreenButtonTemplate2 = _interopRequireDefault(_fullScreenButtonTemplate);

var _settingPanelTemplate = __webpack_require__(/*! view/controls/settingPanelTemplate */ "./src/js/view/controls/settingPanelTemplate.js");

var _settingPanelTemplate2 = _interopRequireDefault(_settingPanelTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by hoho on 2018. 7. 20..
 */
var Templates = {
    TextViewTemplate: _mainTemplate2.default,
    ViewTemplate: _viewTemplate2.default,
    HelperTemplate: _mainTemplate4.default,
    BigButtonTemplate: _bigButtonTemplate2.default,
    MessageBoxTemplate: _messageBoxTemplate2.default,
    SpinnerTemplate: _spinnerTemplate2.default,
    ContextPanelTemplate: _contextPanelTemplate2.default,

    ControlsTemplate: _mainTemplate6.default,
    VolumeButtonTemplate: _volumeButtonTemplate2.default,
    ProgressBarTemplate: _progressBarTemplate2.default,
    PlayButtonTemplate: _playButtonTemplate2.default,
    TimeDisplayTemplate: _timeDisplayTemplate2.default,
    FullScreenButtonTemplate: _fullScreenButtonTemplate2.default,
    SettingPanelTemplate: _settingPanelTemplate2.default
};

exports.default = Templates;

/***/ }),

/***/ "./src/js/view/example/mainTemplate.js":
/*!*********************************************!*\
  !*** ./src/js/view/example/mainTemplate.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by hoho on 2018. 7. 19..
 */

var TextViewTemplate = function TextViewTemplate(text) {
  return '<div class="textView" style="padding : 5px; background: red">' + '<h3>' + text + '</h3>' + '<button type="button" class="btn">닫기</button>' + '</div>';
};

exports.default = TextViewTemplate;

/***/ }),

/***/ "./src/js/view/global/SettingPanelList.js":
/*!************************************************!*\
  !*** ./src/js/view/global/SettingPanelList.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by hoho on 2018. 7. 26..
 */
var SettingPanelList = [];

exports.default = SettingPanelList;

/***/ }),

/***/ "./src/js/view/helper/bigButton.js":
/*!*****************************************!*\
  !*** ./src/js/view/helper/bigButton.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _OvenTemplate = __webpack_require__(/*! view/engine/OvenTemplate */ "./src/js/view/engine/OvenTemplate.js");

var _OvenTemplate2 = _interopRequireDefault(_OvenTemplate);

var _constants = __webpack_require__(/*! api/constants */ "./src/js/api/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by hoho on 2018. 7. 24..
 */
var BigButton = function BigButton($container, api, playerState) {

    var onRendered = function onRendered($container, $current, template) {
        //Do nothing!
    };
    var onDestroyed = function onDestroyed() {
        //Do nothing!
    };
    var events = {
        /*"click .ovp-bigbutton-container" : function(event){
            event.preventDefault();
              const currentState = api.getState();
            if (currentState === STATE_IDLE || currentState === STATE_PAUSED || currentState === STATE_COMPLETE) {
                api.play();
            }
        }*/
    };

    return (0, _OvenTemplate2.default)($container, "BigButton", playerState, events, onRendered, onDestroyed);
};

exports.default = BigButton;

/***/ }),

/***/ "./src/js/view/helper/bigButtonTemplate.js":
/*!*************************************************!*\
  !*** ./src/js/view/helper/bigButtonTemplate.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(/*! api/constants */ "./src/js/api/constants.js");

exports.default = function (playerState) {
    return '<div class="ovp-bigbutton-container ">' + ( //animated bounceIn
    playerState === _constants.STATE_PLAYING ? '<i class="ovp-bigbutton ovp-bigbutton-pause"></i>' : '') + (playerState === _constants.STATE_PAUSED ? '<i class="ovp-bigbutton ovp-bigbutton-play"></i>' : '') + (playerState === _constants.STATE_COMPLETE ? '<i class="ovp-bigbutton ovp-bigbutton-replay"></i>' : '') + '</div>';
};

/***/ }),

/***/ "./src/js/view/helper/contextPanel.js":
/*!********************************************!*\
  !*** ./src/js/view/helper/contextPanel.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _OvenTemplate = __webpack_require__(/*! view/engine/OvenTemplate */ "./src/js/view/engine/OvenTemplate.js");

var _OvenTemplate2 = _interopRequireDefault(_OvenTemplate);

var _likeA$ = __webpack_require__(/*! utils/likeA$ */ "./src/js/utils/likeA$.js");

var _likeA$2 = _interopRequireDefault(_likeA$);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by hoho on 2018. 8. 1..
 */
var ContextPanel = function ContextPanel($container, api, position) {
    var $root = (0, _likeA$2.default)("#" + api.getContainerId());

    var onRendered = function onRendered($current, template) {
        var panelWidth = $current.width();
        var panelHeight = $current.height();

        var x = Math.min(position.pageX - $root.offset().left, $root.width() - panelWidth);
        var y = Math.min(position.pageY - $root.offset().top, $root.height() - panelHeight);

        $current.css("left", x + "px");
        $current.css("top", y + "px");
    };
    var onDestroyed = function onDestroyed() {
        //Do nothing.
    };
    var events = {
        "click .ovp-context-item": function clickOvpContextItem(event, $current, template) {
            event.preventDefault();

            window.open('https://github.com/AirenSoft/OvenPlayer', '_blank');
        }
    };

    return (0, _OvenTemplate2.default)($container, "ContextPanel", position, events, onRendered, onDestroyed);
};

exports.default = ContextPanel;

/***/ }),

/***/ "./src/js/view/helper/contextPanelTemplate.js":
/*!****************************************************!*\
  !*** ./src/js/view/helper/contextPanelTemplate.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _version = __webpack_require__(/*! version */ "./src/js/version.js");

exports.default = function () {
    return '<div class="ovp-context-panel animated fadeIn">' + '<div class="ovp-context-item" tabindex="0">' + '<span class="ovp-context-item-text">Help</span>' + '</div>' + '<div class="ovp-context-item" tabindex="1">' + '<span class="ovp-context-item-text">About OvenPlayer ' + _version.version + '</span>' + '</div>' + '</div>';
};

/***/ }),

/***/ "./src/js/view/helper/main.js":
/*!************************************!*\
  !*** ./src/js/view/helper/main.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _OvenTemplate = __webpack_require__(/*! view/engine/OvenTemplate */ "./src/js/view/engine/OvenTemplate.js");

var _OvenTemplate2 = _interopRequireDefault(_OvenTemplate);

var _bigButton = __webpack_require__(/*! view/helper/bigButton */ "./src/js/view/helper/bigButton.js");

var _bigButton2 = _interopRequireDefault(_bigButton);

var _messageBox = __webpack_require__(/*! view/helper/messageBox */ "./src/js/view/helper/messageBox.js");

var _messageBox2 = _interopRequireDefault(_messageBox);

var _spinner = __webpack_require__(/*! view/helper/spinner */ "./src/js/view/helper/spinner.js");

var _spinner2 = _interopRequireDefault(_spinner);

var _constants = __webpack_require__(/*! api/constants */ "./src/js/api/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Helper = function Helper($container, api) {
    var bigButton = "",
        messageBox = "",
        spinner = "";

    var onRendered = function onRendered($current, template) {
        var createBigButton = function createBigButton(state) {
            if (bigButton) {
                bigButton.destroy();
            }
            bigButton = (0, _bigButton2.default)($current, api, state);
        };
        var createMessage = function createMessage(message, withTimer) {
            if (messageBox) {
                messageBox.destroy();
            }
            messageBox = (0, _messageBox2.default)($current, api, message, withTimer);
        };
        spinner = (0, _spinner2.default)($current, api);

        api.on(_constants.READY, function () {
            createBigButton(_constants.STATE_PAUSED);
        });
        api.on(_constants.PLAYER_STATE, function (data) {
            if (data && data.newstate) {
                if (data.newstate === _constants.STATE_PLAYING) {
                    bigButton.destroy();
                    spinner.show(false);
                } else {
                    createBigButton(data.newstate);
                    if (data.newstate === _constants.STATE_STALLED || data.newstate === _constants.STATE_LOADING) {
                        spinner.show(true);
                    } else {
                        spinner.show(false);
                    }
                }
            }
        });
        api.on(_constants.ERROR, function (error) {
            var message = '';

            if (error.code === 100) {
                message = 'Initialization failed.';
            } else if (error.code === 301) {
                message = 'Media playback was canceled.';
            } else if (error.code === 302) {
                message = 'Some of the media could not be downloaded due to a network error.';
            } else if (error.code === 303) {
                message = 'Unable to load media. This may be due to a server or network error, or due to an unsupported format.';
            } else if (error.code === 304) {
                message = 'Media playback has been canceled. It looks like your media is corrupted or your browser does not support the features your media uses.';
            } else if (parseInt(error.code / 100) === 5) {
                message = 'Connection with low-latency server failed.';
            } else {
                message = 'Can not play due to unknown reasons.';
            }

            createMessage(message, null);
        });

        api.on(_constants.NETWORK_UNSTABLED, function (event) {
            var message = 'Because the network connection is unstable, the following media source will be played.';

            if (api.getCurrentQuality().index + 1 === api.getQualityLevels().length) {
                message = 'Network connection is unstable. Check the network connection.';
            }

            createMessage(message, 5000);
        });
    };
    var onDestroyed = function onDestroyed() {
        //Do nothing.
    };
    var events = {};

    return (0, _OvenTemplate2.default)($container, "Helper", null, events, onRendered, onDestroyed);
}; /**
    * Created by hoho on 2018. 7. 24..
    */
exports.default = Helper;

/***/ }),

/***/ "./src/js/view/helper/mainTemplate.js":
/*!********************************************!*\
  !*** ./src/js/view/helper/mainTemplate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by hoho on 2018. 7. 19..
 */

var HelperTemplate = function HelperTemplate(text) {
  return '<div class="ovp-helpers-container"></div>';
};

exports.default = HelperTemplate;

/***/ }),

/***/ "./src/js/view/helper/messageBox.js":
/*!******************************************!*\
  !*** ./src/js/view/helper/messageBox.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _OvenTemplate = __webpack_require__(/*! view/engine/OvenTemplate */ "./src/js/view/engine/OvenTemplate.js");

var _OvenTemplate2 = _interopRequireDefault(_OvenTemplate);

var _constants = __webpack_require__(/*! api/constants */ "./src/js/api/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by hoho on 2018. 7. 24..
 */
var MessageBox = function MessageBox($container, api, message, withTimer) {

    var autoDestroyTimer = "";

    var onRendered = function onRendered($current, template) {
        if (withTimer) {
            autoDestroyTimer = setTimeout(function () {
                template.destroy();
            }, withTimer || 5000);
        }
    };
    var onDestroyed = function onDestroyed() {};
    var events = {
        "click .ovp-message-text": function clickOvpMessageText(event, $current, template) {
            event.preventDefault();

            if (autoDestroyTimer) {
                clearTimeout(autoDestroyTimer);
            }
            template.destroy();
        }
    };

    return (0, _OvenTemplate2.default)($container, "MessageBox", message, events, onRendered, onDestroyed);
};

exports.default = MessageBox;

/***/ }),

/***/ "./src/js/view/helper/messageBoxTemplate.js":
/*!**************************************************!*\
  !*** ./src/js/view/helper/messageBoxTemplate.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (message) {
    return '<div class="ovp-message-box animated shake">' + '<div class="ovp-message-container">' + '<span class="ovp-message-text">' + message + '</span>' + '</div>' + '</div>';
};

/***/ }),

/***/ "./src/js/view/helper/spinner.js":
/*!***************************************!*\
  !*** ./src/js/view/helper/spinner.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by hoho on 2018. 7. 25..
                                                                                                                                                                                                                                                                   */


var _OvenTemplate = __webpack_require__(/*! view/engine/OvenTemplate */ "./src/js/view/engine/OvenTemplate.js");

var _OvenTemplate2 = _interopRequireDefault(_OvenTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner($container, api) {
    var $spinner = "";

    var onRendered = function onRendered($current, template) {
        $spinner = $current;
    };
    var onDestroyed = function onDestroyed() {
        //Do nothing.
    };
    var events = {};

    return _extends((0, _OvenTemplate2.default)($container, "Spinner", null, events, onRendered, onDestroyed), {
        show: function show(isShow) {
            if (isShow) {
                $spinner.show();
            } else {
                $spinner.hide();
            }
        }
    });
};

exports.default = Spinner;

/***/ }),

/***/ "./src/js/view/helper/spinnerTemplate.js":
/*!***********************************************!*\
  !*** ./src/js/view/helper/spinnerTemplate.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return '<div class="ovp-spinner-container"><div class="ovp-spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>';
};

/***/ }),

/***/ "./src/js/view/view.js":
/*!*****************************!*\
  !*** ./src/js/view/view.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by hoho on 2018. 7. 20..
                                                                                                                                                                                                                                                                   */


var _OvenTemplate = __webpack_require__(/*! view/engine/OvenTemplate */ "./src/js/view/engine/OvenTemplate.js");

var _OvenTemplate2 = _interopRequireDefault(_OvenTemplate);

var _main = __webpack_require__(/*! view/helper/main */ "./src/js/view/helper/main.js");

var _main2 = _interopRequireDefault(_main);

var _main3 = __webpack_require__(/*! view/controls/main */ "./src/js/view/controls/main.js");

var _main4 = _interopRequireDefault(_main3);

var _SettingPanelList = __webpack_require__(/*! view/global/SettingPanelList */ "./src/js/view/global/SettingPanelList.js");

var _SettingPanelList2 = _interopRequireDefault(_SettingPanelList);

var _contextPanel = __webpack_require__(/*! view/helper/contextPanel */ "./src/js/view/helper/contextPanel.js");

var _contextPanel2 = _interopRequireDefault(_contextPanel);

var _likeA$ = __webpack_require__(/*! utils/likeA$ */ "./src/js/utils/likeA$.js");

var _likeA$2 = _interopRequireDefault(_likeA$);

var _underscore = __webpack_require__(/*! utils/underscore */ "./src/js/utils/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

var _constants = __webpack_require__(/*! api/constants */ "./src/js/api/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(/*! ../../css/ovenplayer.less */ "./src/css/ovenplayer.less");

var View = function View($container) {
    var viewTemplate = "",
        controls = "",
        helper = "",
        $playerRoot = void 0,
        contextPanel = "",
        api = "",
        autoHideTimer = "";

    var setHide = function setHide(hide, autoHide) {

        if (autoHideTimer) {
            clearTimeout(autoHideTimer);
            autoHideTimer = null;
        }

        if (hide) {
            if (_SettingPanelList2.default.length > 0) {
                return false;
            }
            $playerRoot.addClass("ovp-autohide");
        } else {
            $playerRoot.removeClass("ovp-autohide");

            if (autoHide) {
                autoHideTimer = setTimeout(function () {
                    if (_SettingPanelList2.default.length > 0) {
                        return false;
                    }
                    $playerRoot.addClass("ovp-autohide");
                }, 1800);
            }
        }
    };
    var togglePlayPause = function togglePlayPause() {
        var currentState = api.getState();

        if (currentState === _constants.STATE_IDLE || currentState === _constants.STATE_PAUSED || currentState === _constants.STATE_COMPLETE) {
            api.play();
        } else if (currentState === _constants.STATE_PLAYING) {
            api.pause();
        }
    };
    var seek = function seek(seconds, isRewind) {

        var duration = api.getDuration();
        var currentPosition = api.getPosition();
        var position = 0;

        if (isRewind) {
            position = Math.max(currentPosition - seconds, 0);
        } else {
            position = Math.min(currentPosition + seconds, duration);
        }

        api.seek(position);
    };
    var volume = function volume(isUp) {
        var currentVolumn = api.getVolume();
        var newVolume = 0;
        if (isUp) {
            newVolume = Math.min(currentVolumn + 5, 100);
        } else {
            newVolume = Math.max(currentVolumn - 5, 0);
        }
        api.setVolume(newVolume);
    };
    var createContextPanel = function createContextPanel(pageX, pageY) {
        if (contextPanel) {
            contextPanel.destroy();
            contextPanel = null;
        }
        contextPanel = (0, _contextPanel2.default)($playerRoot, api, { pageX: pageX, pageY: pageY });
    };

    var onRendered = function onRendered($current, template) {
        $playerRoot = $current;
        viewTemplate = template;
    };
    var onDestroyed = function onDestroyed() {
        //Do nothing.
    };
    var events = {
        "click .ovenplayer": function clickOvenplayer(event, $current, template) {
            event.preventDefault();

            if (contextPanel) {
                contextPanel.destroy();
                contextPanel = null;
                return false;
            }
            if (!(0, _likeA$2.default)(event.target).closest(".ovp-bottom-panel") && !(0, _likeA$2.default)(event.target).closest(".ovp-setting-panel")) {
                togglePlayPause();
            }
            if (!(0, _likeA$2.default)(event.target).closest(".ovp-setting-panel") && !(0, _likeA$2.default)(event.target).closest(".ovp-setting-button") && _SettingPanelList2.default.length > 0) {
                //clear all SettingPanelTemplate
                _underscore2.default.each(_SettingPanelList2.default, function (settingPanel) {
                    settingPanel.destroy();
                });
                _SettingPanelList2.default.splice(0, _SettingPanelList2.default.length);
            }
        },
        "mouseenter .ovenplayer": function mouseenterOvenplayer(event, $current, template) {
            event.preventDefault();

            if (api.getState() === _constants.STATE_PLAYING) {
                setHide(false, true);
            } else {
                setHide(false);
            }
        },
        "mousemove .ovenplayer": function mousemoveOvenplayer(event, $current, template) {
            event.preventDefault();

            if (api.getState() === _constants.STATE_PLAYING) {
                setHide(false, true);
            } else {
                setHide(false);
            }
        },
        "mouseleave .ovenplayer": function mouseleaveOvenplayer(event, $current, template) {
            event.preventDefault();

            if (api.getState() === _constants.STATE_PLAYING) {
                setHide(true);
            }
        },

        "keydown .ovenplayer": function keydownOvenplayer(event, $current, template) {
            switch (event.keyCode) {
                case 32:
                    //sapce
                    event.preventDefault();
                    togglePlayPause();
                    break;
                case 37:
                    //arrow left
                    event.preventDefault();
                    seek(5, true);
                    break;
                case 39:
                    //arrow right
                    event.preventDefault();
                    seek(5, false);
                    break;
                case 38:
                    //arrow up
                    event.preventDefault();
                    volume(true);
                    break;
                case 40:
                    //arrow up
                    event.preventDefault();
                    volume(false);
                    break;
            }
        },
        "contextmenu .ovenplayer": function contextmenuOvenplayer(event, $current, template) {
            event.preventDefault();
            createContextPanel(event.pageX, event.pageY);
            return false;
        }
    };

    return _extends((0, _OvenTemplate2.default)($container, "View", $container.id, events, onRendered, onDestroyed, true), {
        getMediaElementContainer: function getMediaElementContainer() {
            return $playerRoot.find(".ovp-media-element-container").get();
        },
        setApi: function setApi(playerInstance) {
            api = playerInstance;
            helper = (0, _main2.default)($playerRoot.find(".ovp-ui"), playerInstance);
            controls = (0, _main4.default)($playerRoot.find(".ovp-ui"), playerInstance);

            api.on(_constants.DESTROY, function (data) {
                viewTemplate.destroy();
            });

            api.on(_constants.PLAYER_STATE, function (data) {
                if (data && data.newstate) {
                    if (data.newstate === _constants.STATE_PLAYING) {
                        setHide(false, true);
                    } else {
                        setHide(false);
                    }
                }
            });
        }
    });
};

exports.default = View;

/***/ }),

/***/ "./src/js/view/viewTemplate.js":
/*!*************************************!*\
  !*** ./src/js/view/viewTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by hoho on 2018. 7. 20..
 */

var ViewTemplate = function ViewTemplate(id) {
    return '<div class="ovenplayer ovp-wrapper" tabindex="-1" aria-label="" id="' + id + '">' + '<div class="ovp-ratio"></div>' + '<div class="ovp-player">' + '<div class="ovp-media-element-container" data-parent-id="' + id + '">' + '</div>' + '<div class="ovp-ui">' + '</div>' + '</div>' + '</div>';
};
exports.default = ViewTemplate;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9vdmVucGxheWVyLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWMtcGxheWVyLWZ1bGxzY3JlZW4tY29tcHJlc3Muc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljLXBsYXllci1mdWxsc2NyZWVuLWV4cGFuZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWMtcGxheWVyLXBsYXktbGFyZ2Uuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljLXBsYXllci1wbGF5LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pYy1wbGF5ZXItcmUtbGFyZ2Uuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljLXBsYXllci1zZXR0aW5nLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pYy1wbGF5ZXItc3RvcC1sYXJnZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWMtcGxheWVyLXN0b3Auc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljLXBsYXllci12b2x1bWUtMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWMtcGxheWVyLXZvbHVtZS1tdXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pYy1wbGF5ZXItdm9sdW1lLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL292ZW5wbGF5ZXIubGVzcz83MTVmIiwid2VicGFjazovLy8uL3NyYy9qcy9hcGkvQXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcGkvQXBpRXhwYW5zaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBpL0NvbmZpZ3VyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBpL0V2ZW50RW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBpL0xhenlDb21tYW5kRXhlY3V0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwaS9TdXBwb3J0Q2hlY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBpL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBpL3BsYXlsaXN0L01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwaS9wcm92aWRlci9Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcGkvc2hpbXMvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvb3ZlbnBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvb3ZlbnBsYXllci5zZGsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL2xpa2VBJC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy9wb2x5ZmlsbHMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy9zdHJpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy91bmRlcnNjb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL3dlYnBhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXcvY29udHJvbHMvZnVsbFNjcmVlbkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlldy9jb250cm9scy9mdWxsU2NyZWVuQnV0dG9uVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXcvY29udHJvbHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlldy9jb250cm9scy9tYWluVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXcvY29udHJvbHMvcGxheUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlldy9jb250cm9scy9wbGF5QnV0dG9uVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXcvY29udHJvbHMvcHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXcvY29udHJvbHMvcHJvZ3Jlc3NCYXJUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlldy9jb250cm9scy9zZXR0aW5nUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXcvY29udHJvbHMvc2V0dGluZ1BhbmVsVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXcvY29udHJvbHMvdGltZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXcvY29udHJvbHMvdGltZURpc3BsYXlUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlldy9jb250cm9scy92b2x1bWVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXcvY29udHJvbHMvdm9sdW1lQnV0dG9uVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXcvZW5naW5lL092ZW5UZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlldy9lbmdpbmUvVGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3L2V4YW1wbGUvbWFpblRlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3L2dsb2JhbC9TZXR0aW5nUGFuZWxMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3L2hlbHBlci9iaWdCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXcvaGVscGVyL2JpZ0J1dHRvblRlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3L2hlbHBlci9jb250ZXh0UGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXcvaGVscGVyL2NvbnRleHRQYW5lbFRlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3L2hlbHBlci9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3L2hlbHBlci9tYWluVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXcvaGVscGVyL21lc3NhZ2VCb3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXcvaGVscGVyL21lc3NhZ2VCb3hUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlldy9oZWxwZXIvc3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlldy9oZWxwZXIvc3Bpbm5lclRlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWV3L3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXcvdmlld1RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbIkFwaSIsImNvbnRhaW5lciIsImxvZ01hbmFnZXIiLCJ0aGF0IiwiT3ZlblBsYXllckNvbnNvbGUiLCJsb2ciLCJ2ZXJzaW9uIiwicGxheWxpc3RNYW5hZ2VyIiwicHJvdmlkZXJDb250cm9sbGVyIiwiY3VycmVudFByb3ZpZGVyIiwicGxheWVyQ29uZmlnIiwibGF6eVF1ZXVlIiwiaW5pdFByb3ZpZGVyIiwibGFzdFBsYXlQb3NpdGlvbiIsInBpY2tRdWFsaXR5RnJvbVNvdXJjZSIsInNvdXJjZXMiLCJxdWFsaXR5IiwiaSIsImxlbmd0aCIsImRlZmF1bHQiLCJnZXRRdWFsaXR5TGFiZWwiLCJsYWJlbCIsImxvYWRQcm92aWRlcnMiLCJnZXRQbGF5bGlzdCIsInRoZW4iLCJkZXN0cm95IiwiY3VycmVudFNvdXJjZUluZGV4IiwiZ2V0Q3VycmVudFNvdXJjZXMiLCJQcm92aWRlcnMiLCJnZXROYW1lIiwiUFJPVklERVJfUlRNUCIsIm9uIiwibmFtZSIsImRhdGEiLCJ0cmlnZ2VyIiwiRVJST1IiLCJjb2RlIiwiUExBWUVSX0ZJTEVfRVJST1IiLCJwYXJzZUludCIsIk5FVFdPUktfVU5TVEFCTEVEIiwiY3VycmVudFF1YWxpdHkiLCJnZXRDdXJyZW50UXVhbGl0eSIsImluZGV4IiwiZ2V0UXVhbGl0eUxldmVscyIsInBhdXNlIiwic2V0Q3VycmVudFF1YWxpdHkiLCJwcmVsb2FkIiwiZmx1c2giLCJSRUFEWSIsImNhdGNoIiwiZXJyb3IiLCJlcnJvck9iamVjdCIsIklOSVRfRVJST1IiLCJyZWFzb24iLCJtZXNzYWdlIiwicmVtb3ZlQW5kRXhjdXRlT25jZSIsImluaXQiLCJvcHRpb25zIiwiaXNEZWJ1ZyIsImRpc2FibGUiLCJzZXRQbGF5bGlzdCIsImdldENvbmZpZyIsImdldER1cmF0aW9uIiwiZ2V0UG9zaXRpb24iLCJnZXRWb2x1bWUiLCJzZXRWb2x1bWUiLCJ2b2x1bWUiLCJzZXRNdXRlIiwic3RhdGUiLCJnZXRNdXRlIiwibG9hZCIsInBsYXlsaXN0IiwicGxheSIsInNlZWsiLCJwb3NpdGlvbiIsInNldFBsYXliYWNrUmF0ZSIsInBsYXliYWNrUmF0ZSIsInNldERlZmF1bHRQbGF5YmFja1JhdGUiLCJnZXRQbGF5YmFja1JhdGUiLCJxdWFsaXR5SW5kZXgiLCJjdXJyZW50U291cmNlIiwibmV3U291cmNlIiwiaXNTYW1lUHJvdmlkZXIiLCJyZXNRdWFsaXR5SW5kZXgiLCJnZXRCdWZmZXIiLCJnZXRTdGF0ZSIsInN0b3AiLCJyZW1vdmUiLCJERVNUUk9ZIiwib2ZmIiwiT3ZlblBsYXllclNESyIsInJlbW92ZVBsYXllciIsImdldENvbnRhaW5lcklkIiwiQXBpUnRtcEV4cGFuc2lvbiIsImV4dGVybmFsQ2FsbGJhY2tDcmVlcCIsInJlc3VsdCIsInRyaWdnZXJFdmVudEZyb21FeHRlcm5hbCIsIkNvbmZpZ3VyYXRvciIsImNvbXBvc2VTb3VyY2VPcHRpb25zIiwiRGVmYXVsdHMiLCJkZWZhdWx0UGxheWJhY2tSYXRlIiwicGxheWJhY2tSYXRlQ29udHJvbHMiLCJwbGF5YmFja1JhdGVzIiwibXV0ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2VyaWFsaXplIiwidmFsIiwidW5kZWZpbmVkIiwibG93ZXJjYXNlVmFsIiwidG9Mb3dlckNhc2UiLCJpc05hTiIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJkZXNlcmlhbGl6ZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwibm9ybWFsaXplU2l6ZSIsInNsaWNlIiwiZXZhbHVhdGVBc3BlY3RSYXRpbyIsImFyIiwidG9TdHJpbmciLCJpbmRleE9mIiwidGVzdCIsInciLCJzdWJzdHIiLCJoIiwiY29uZmlnIiwiYXNwZWN0cmF0aW8iLCJyYXRlQ29udHJvbHMiLCJyYXRlcyIsIkFycmF5IiwiaXNBcnJheSIsImZpbHRlciIsIl8iLCJpc051bWJlciIsInJhdGUiLCJtYXAiLCJNYXRoIiwicm91bmQiLCJwdXNoIiwic29ydCIsImNvbmZpZ1BsYXlsaXN0Iiwib2JqIiwicGljayIsImZlZWREYXRhIiwiZHVyYXRpb24iLCJkZWJ1ZyIsImltYWdlIiwicXVhbGl0eUxhYmVsIiwicmVwZWF0Iiwic3RyZXRjaGluZyIsImdldEFzcGVjdHJhdGlvIiwic2V0QXNwZWN0cmF0aW8iLCJhc3BlY3RyYXRpb18iLCJnZXREZWZhdWx0UGxheWJhY2tSYXRlIiwic2V0UXVhbGl0eUxhYmVsIiwibmV3TGFiZWwiLCJnZXRQbGF5YmFja1JhdGVzIiwiaXNQbGF5YmFja1JhdGVDb250cm9scyIsInBsYXlsaXN0XyIsImlzUmVwZWF0IiwiZ2V0U3RyZXRjaGluZyIsIkV2ZW50RW1pdHRlciIsIm9iamVjdCIsIl9ldmVudHMiLCJ0cmlnZ2VyRXZlbnRzIiwiZXZlbnRzIiwiYXJncyIsImNvbnRleHQiLCJldmVudCIsImxpc3RlbmVyIiwiYXBwbHkiLCJjYWxsIiwiYXJndW1lbnRzIiwiYWxsRXZlbnRzIiwiYWxsIiwibmFtZXMiLCJsIiwicmV0YWluIiwiaiIsImsiLCJfY2FsbGJhY2siLCJvbmNlIiwiY291bnQiLCJvbmNlQ2FsbGJhY2siLCJfbGlzdGVuZXIiLCJMYXp5Q29tbWFuZEV4ZWN1dG9yIiwiaW5zdGFuY2UiLCJxdWV1ZWRDb21tYW5kcyIsImNvbW1hbmRRdWV1ZSIsInVuZGVjb3JhdGVkTWV0aG9kcyIsImV4ZWN1dGVNb2RlIiwiY29tbWFuZCIsIm1ldGhvZCIsInByb3RvdHlwZSIsImFkZFF1ZXVlIiwiZXhlY3V0ZVF1ZXVlZENvbW1hbmRzIiwic2hpZnQiLCJzZXRFeGVjdXRlTW9kZSIsIm1vZGUiLCJnZXRVbmRlY29yYXRlZE1ldGhvZHMiLCJnZXRRdWV1ZSIsImVtcHR5IiwiY29tbWFuZF8iLCJjb21tYW5kUXVldWVJdGVtIiwiZmluZFdoZXJlIiwic3BsaWNlIiwiZmluZEluZGV4IiwiU3VwcG9ydENoZWNrZXIiLCJzdXBwb3J0TGlzdCIsImNoZWNrU3VwcG9ydCIsInNvdXJjZSIsIk1pbWVUeXBlcyIsImFhYyIsIm1wNCIsImY0diIsIm00diIsIm1vdiIsIm1wMyIsIm1wZWciLCJvZ3YiLCJvZ2ciLCJvZ2EiLCJ2b3JiaXMiLCJ3ZWJtIiwiZjRhIiwibTN1OCIsIm0zdSIsImhscyIsInZpZGVvIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2FuUGxheVR5cGUiLCJmaWxlIiwidHlwZSIsIm1pbWVUeXBlIiwiaXNIbHNTdXBwb3J0IiwiZ2V0TWVkaWFTb3VyY2UiLCJ3aW5kb3ciLCJNZWRpYVNvdXJjZSIsIldlYktpdE1lZGlhU291cmNlIiwibWVkaWFTb3VyY2UiLCJzb3VyY2VCdWZmZXIiLCJTb3VyY2VCdWZmZXIiLCJXZWJLaXRTb3VyY2VCdWZmZXIiLCJpc1R5cGVTdXBwb3J0ZWQiLCJzb3VyY2VCdWZmZXJWYWxpZEFQSSIsImFwcGVuZEJ1ZmZlciIsImZpbmRQcm92aWRlck5hbWVCeVNvdXJjZSIsInNvcnVjZV8iLCJmaW5kUHJvdmlkZXJOYW1lc0J5UGxheWxpc3QiLCJzdXBwb3J0TmFtZXMiLCJpdGVtIiwic3VwcG9ydGVkIiwiU1RBVEVfQlVGRkVSSU5HIiwiU1RBVEVfSURMRSIsIlNUQVRFX0NPTVBMRVRFIiwiU1RBVEVfUEFVU0VEIiwiU1RBVEVfUExBWUlORyIsIlNUQVRFX0VSUk9SIiwiU1RBVEVfTE9BRElORyIsIlNUQVRFX1NUQUxMRUQiLCJQUk9WSURFUl9IVE1MNSIsIlBST1ZJREVSX1dFQlJUQyIsIlBST1ZJREVSX0RBU0giLCJQUk9WSURFUl9ITFMiLCJDT05URU5UX0NPTVBMRVRFIiwiQ09OVEVOVF9TRUVLIiwiQ09OVEVOVF9CVUZGRVJfRlVMTCIsIkRJU1BMQVlfQ0xJQ0siLCJDT05URU5UX0xPQURFRCIsIkNPTlRFTlRfU0VFS0VEIiwiUExBWUVSX1NUQVRFIiwiUExBWUVSX0NPTVBMRVRFIiwiUExBWUVSX1BBVVNFIiwiUExBWUVSX1BMQVkiLCJDT05URU5UX0JVRkZFUiIsIkNPTlRFTlRfVElNRSIsIkNPTlRFTlRfUkFURV9DSEFOR0UiLCJDT05URU5UX1ZPTFVNRSIsIkNPTlRFTlRfTVVURSIsIkNPTlRFTlRfTUVUQSIsIkNPTlRFTlRfTEVWRUxTIiwiQ09OVEVOVF9MRVZFTF9DSEFOR0VEIiwiUExBWUJBQ0tfUkFURV9DSEFOR0VEIiwiQ09OVEVOVF9DQVBUSU9OX0NVRV9DSEFOR0VEIiwiQ09OVEVOVF9DQVBUSU9OX0NIQU5HRUQiLCJQTEFZRVJfVU5LTldPTl9FUlJPUiIsIlBMQVlFUl9VTktOV09OX09QRVJBVElPTl9FUlJPUiIsIlBMQVlFUl9VTktOV09OX05FV1dPUktfRVJST1IiLCJQTEFZRVJfVU5LTldPTl9ERUNPREVfRVJST1IiLCJQTEFZRVJfQ0FQVElPTl9FUlJPUiIsIlBMQVlFUl9XRUJSVENfV1NfRVJST1IiLCJQTEFZRVJfV0VCUlRDX1dTX0NMT1NFRCIsIlBMQVlFUl9XRUJSVENfQUREX0lDRUNBTkRJREFURV9FUlJPUiIsIlBMQVlFUl9XRUJSVENfU0VUX1JFTU9URV9ERVNDX0VSUk9SIiwiUExBWUVSX1dFQlJUQ19DUkVBVEVfQU5TV0VSX0VSUk9SIiwiUExBWUVSX1dFQlJUQ19TRVRfTE9DQUxfREVTQ19FUlJPUiIsIlBMQVlFUl9XRUJSVENfTkVUV09SS19TTE9XIiwiTWFuYWdlciIsImN1cnJlbnRQbGF5bGlzdCIsInN1cHBvcnRDaGVja2VyIiwibWFrZVByZXR0eVNvdXJjZSIsInNvdXJjZV8iLCJob3N0IiwiYXBwbGljYXRpb24iLCJzdHJlYW0iLCJtaW1ldHlwZVJlZ0V4IiwicmVwbGFjZSIsInByZXR0aWVkUGxheWxpc3QiLCJ0cmFja3MiLCJwbGF5bGlzdEl0ZW0iLCJsZXZlbHMiLCJwcmV0dHlTb3VyY2UiLCJkZWZhdWx0U291cmNlIiwiY2FwdGlvbnMiLCJjb25jYXQiLCJ0cmFjayIsIkNvbnRyb2xsZXIiLCJzdXBwb3J0Q2hhY2tlciIsInJlZ2lzdGVQcm92aWRlciIsInByb3ZpZGVyIiwiUHJvdmlkZXJMb2FkZXIiLCJodG1sNSIsInJlcXVpcmUiLCJlcnIiLCJFcnJvciIsIndlYnJ0YyIsImRhc2giLCJydG1wIiwic3VwcG9ydGVkUHJvdmlkZXJOYW1lcyIsIlByb21pc2UiLCJwcm92aWRlck5hbWUiLCJmaW5kQnlOYW1lIiwiZ2V0UHJvdmlkZXJCeVNvdXJjZSIsInN1cHBvcnRlZFByb3ZpZGVyTmFtZSIsInByb21pc2VGaW5hbGx5IiwiY2FsbGJhY2siLCJjb25zdHJ1Y3RvciIsInZhbHVlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXRGdW5jIiwic2V0VGltZW91dCIsInNldEltbWVkaWF0ZUZ1bmMiLCJzZXRJbW1lZGlhdGUiLCJub29wIiwiYmluZCIsImZuIiwidGhpc0FyZyIsIlByb21pc2VTaGltIiwiVHlwZUVycm9yIiwiX3N0YXRlIiwiX2hhbmRsZWQiLCJfdmFsdWUiLCJfZGVmZXJyZWRzIiwiZG9SZXNvbHZlIiwiaGFuZGxlIiwic2VsZiIsImRlZmVycmVkIiwiX2ltbWVkaWF0ZUZuIiwiY2IiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJwcm9taXNlIiwicmV0IiwiZSIsIm5ld1ZhbHVlIiwiZmluYWxlIiwiX3VuaGFuZGxlZFJlamVjdGlvbkZuIiwibGVuIiwiSGFuZGxlciIsImRvbmUiLCJleCIsInByb20iLCJhcnIiLCJyZW1haW5pbmciLCJyZXMiLCJyYWNlIiwidmFsdWVzIiwiY29uc29sZSIsIndhcm4iLCJyZXNvbHZlZCIsIl9fd2VicGFja19wdWJsaWNfcGF0aF9fIiwiT3ZlblBsYXllciIsImNyZWF0ZSIsImJyb3dzZXJOYW1lIiwiY29udGFpbmVyRWxlbWVudCIsInBsYXllciIsInBsYXllckluc3RhbmNlIiwiZ2V0TWVkaWFFbGVtZW50Q29udGFpbmVyIiwiaWQiLCJzZXRBcGkiLCJwbGF5ZXJMaXN0IiwiY2hlY2tBbmRHZXRDb250YWluZXJFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJub2RlVHlwZSIsImdldFBsYXllckxpc3QiLCJnZXRQbGF5ZXJCeUNvbnRhaW5lcklkIiwiY29udGFpbmVySWQiLCJnZXRQbGF5ZXJCeUluZGV4IiwicGxheWVySWQiLCJnZW5lcmF0ZVdlYnJ0Y1VybHMiLCJnZXRCcm93c2VyIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibXNpZSIsImllIiwidW5kZWYiLCJ2IiwiZGl2IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbm5lckhUTUwiLCJMYSQiLCJzZWxlY3Rvck9yRWxlbWVudCIsInJldHVybk5vZGUiLCIkZWxlbWVudCIsInNlbGVjdG9yIiwibm9kZUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXZlcnkiLCJpc0VsZW1lbnQiLCJmaW5kIiwiY3NzIiwiZWxlbWVudCIsInN0eWxlIiwiYWRkQ2xhc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJjbGFzc05hbWVzIiwiY2xhc3NOYW1lIiwic3BsaXQiLCJyZW1vdmVDbGFzcyIsIlJlZ0V4cCIsImpvaW4iLCJyZW1vdmVBdHRyaWJ1dGUiLCJhdHRyTmFtZSIsInNob3ciLCJkaXNwbGF5IiwiaGlkZSIsImFwcGVuZCIsImh0bWxDb2RlIiwidGV4dCIsInRleHRDb250ZW50IiwiaGFzQ2xhc3MiLCJjb250YWlucyIsImlzIiwiJHRhcmdldEVsZW1lbnQiLCJvZmZzZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm9keSIsInNjcm9sbFRvcCIsImxlZnQiLCJzY3JvbGxMZWZ0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJhdHRyIiwiZ2V0QXR0cmlidXRlIiwiaHRtbCIsInJlcGxhY2VXaXRoIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsImhhc0NoaWxkTm9kZXMiLCJmaXJzdENoaWxkIiwiZ2V0IiwiY2xvc2VzdCIsInNlbGVjdG9yU3RyaW5nIiwibG9nZ2VyIiwicHJldkNvbnNvbGVMb2ciLCJlbmFibGUiLCJnbG9iYWwiLCJzZWxlY3RvcnMiLCJlbGVtZW50cyIsImRvY3VtZW50RWxlbWVudCIsIl9xc2EiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsInNjcm9sbEJ5IiwicGFyZW50Tm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiU3RyaW5nIiwiTm9kZSIsInAiLCJET01FeGNlcHRpb24iLCJFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlZmluZVByb3BlcnR5IiwiRXZlbnQiLCJDQVBUVVJJTkdfUEhBU0UiLCJBVF9UQVJHRVQiLCJCVUJCTElOR19QSEFTRSIsImRlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJzcmNFbGVtZW50IiwiY3VycmVudFRhcmdldCIsIl9jdXJyZW50VGFyZ2V0IiwiZXZlbnRQaGFzZSIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwidGltZVN0YW1wIiwiX3RpbWVTdGFtcCIsInN0b3BQcm9wYWdhdGlvbiIsImNhbmNlbEJ1YmJsZSIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJkZWZhdWx0UHJldmVudGVkIiwidXNlQ2FwdHVyZSIsImYiLCJEYXRlIiwibm93IiwiYXR0YWNoRXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGV0YWNoRXZlbnQiLCJXaW5kb3ciLCJIVE1MRG9jdW1lbnQiLCJvIiwiQ3VzdG9tRXZlbnQiLCJwYXJhbXMiLCJkZXRhaWwiLCJldnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImFkZEV2ZW50IiwicmVtb3ZlRXZlbnQiLCJET01Ub2tlbkxpc3RTaGltIiwicyIsInJlbW92ZVRva2VuRnJvbVN0cmluZyIsInRva2VuIiwic3RyaW5nIiwidG9rZW5zIiwiaWR4IiwiU3ludGF4RXJyb3IiLCJzb21lIiwidW5kZXJseWluZ19zdHJpbmciLCJ0b2tlbl9saXN0IiwidG9nZ2xlIiwiZm9yY2UiLCJuIiwiYWRkVG9FbGVtZW50UHJvdG90eXBlIiwiZ2V0Q2xhc3NMaXN0IiwiZWxlbSIsImdldFJlbExpc3QiLCJyZWxMaXN0IiwiRE9NVG9rZW5MaXN0IiwicHJldmlvdXNTaWJsaW5nIiwiRUxFTUVOVF9OT0RFIiwibmV4dFNpYmxpbmciLCJtYXRjaGVzIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJvTWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwib3duZXJEb2N1bWVudCIsImVsIiwicGFyZW50RWxlbWVudCIsIm1peGluIiwicHMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJjb252ZXJ0Tm9kZXNJbnRvQU5vZGUiLCJub2RlcyIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJQYXJlbnROb2RlIiwicHJlcGVuZCIsImluc2VydEJlZm9yZSIsIkRvY3VtZW50IiwiRG9jdW1lbnRGcmFnbWVudCIsIkNoaWxkTm9kZSIsImJlZm9yZSIsInBhcmVudCIsInZpYWJsZVByZXZpb3VzU2libGluZyIsImFmdGVyIiwidmlhYmxlTmV4dFNpYmxpbmciLCJyZXBsYWNlQ2hpbGQiLCJEb2N1bWVudFR5cGUiLCJDaGFyYWN0ZXJEYXRhIiwidHJpbSIsIm5hdHVyYWxIbXMiLCJleHRyYWN0RXh0ZW5zaW9uIiwicGF0aCIsImdldEF6dXJlRmlsZUZvcm1hdCIsImV4dGVuc2lvbiIsImF6dXJlZEZvcm1hdCIsImxhc3RJbmRleE9mIiwic2Vjb25kIiwic2VjTnVtIiwiaG91cnMiLCJmbG9vciIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiciIsIlN5bWJvbCIsInUiLCJjIiwiaGFzT3duUHJvcGVydHkiLCJ0IiwiYSIsIl93cmFwcGVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIlZFUlNJT04iLCJ5IiwiZCIsIml0ZXJhdGVlIiwiaWRlbnRpdHkiLCJpc0Z1bmN0aW9uIiwiaXNPYmplY3QiLCJtYXRjaGVyIiwicHJvcGVydHkiLCJnIiwibWF4IiwibSIsImIiLCJ4IiwicG93IiwiQSIsImVhY2giLCJjb2xsZWN0IiwiTyIsInJlZHVjZSIsImZvbGRsIiwiaW5qZWN0IiwicmVkdWNlUmlnaHQiLCJmb2xkciIsImRldGVjdCIsImZpbmRLZXkiLCJzZWxlY3QiLCJuZWdhdGUiLCJhbnkiLCJpbmNsdWRlcyIsImluY2x1ZGUiLCJpbnZva2UiLCJwbHVjayIsIndoZXJlIiwibWluIiwic2h1ZmZsZSIsInNhbXBsZSIsInJhbmRvbSIsImNsb25lIiwic29ydEJ5IiwiY3JpdGVyaWEiLCJncm91cEJ5IiwiaW5kZXhCeSIsImNvdW50QnkiLCJTIiwidG9BcnJheSIsImlzU3RyaW5nIiwibWF0Y2giLCJzaXplIiwicGFydGl0aW9uIiwiZmlyc3QiLCJoZWFkIiwidGFrZSIsImluaXRpYWwiLCJsYXN0IiwicmVzdCIsInRhaWwiLCJkcm9wIiwiY29tcGFjdCIsIkJvb2xlYW4iLCJNIiwiaXNBcmd1bWVudHMiLCJmbGF0dGVuIiwid2l0aG91dCIsImRpZmZlcmVuY2UiLCJ1bmlxIiwidW5pcXVlIiwiaXNCb29sZWFuIiwidW5pb24iLCJpbnRlcnNlY3Rpb24iLCJ1bnppcCIsInppcCIsIkYiLCJmaW5kTGFzdEluZGV4Iiwic29ydGVkSW5kZXgiLCJFIiwicmFuZ2UiLCJjZWlsIiwiY2h1bmsiLCJOIiwicGFydGlhbCIsInBsYWNlaG9sZGVyIiwiYmluZEFsbCIsIm1lbW9pemUiLCJjYWNoZSIsImRlbGF5IiwiZGVmZXIiLCJ0aHJvdHRsZSIsImxlYWRpbmciLCJjbGVhclRpbWVvdXQiLCJ0cmFpbGluZyIsImNhbmNlbCIsImRlYm91bmNlIiwid3JhcCIsImNvbXBvc2UiLCJyZXN0QXJndW1lbnRzIiwiSSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiVCIsIkIiLCJhbGxLZXlzIiwibWFwT2JqZWN0IiwicGFpcnMiLCJpbnZlcnQiLCJmdW5jdGlvbnMiLCJtZXRob2RzIiwiUiIsImV4dGVuZCIsImV4dGVuZE93biIsImFzc2lnbiIsInEiLCJLIiwieiIsIm9taXQiLCJkZWZhdWx0cyIsInRhcCIsImlzTWF0Y2giLCJ2YWx1ZU9mIiwicG9wIiwiaXNFcXVhbCIsImlzRW1wdHkiLCJEIiwiY2hpbGROb2RlcyIsIkludDhBcnJheSIsImlzRmluaXRlIiwiaXNTeW1ib2wiLCJpc051bGwiLCJpc1VuZGVmaW5lZCIsImhhcyIsIm5vQ29uZmxpY3QiLCJjb25zdGFudCIsInByb3BlcnR5T2YiLCJ0aW1lcyIsImdldFRpbWUiLCJMIiwiUCIsIlciLCJlc2NhcGUiLCJ1bmVzY2FwZSIsIkMiLCJ1bmlxdWVJZCIsInRlbXBsYXRlU2V0dGluZ3MiLCJldmFsdWF0ZSIsImludGVycG9sYXRlIiwiSiIsIlUiLCJWIiwiJCIsInRlbXBsYXRlIiwidmFyaWFibGUiLCJGdW5jdGlvbiIsImNoYWluIiwiX2NoYWluIiwiRyIsInRvSlNPTiIsImlzUnRtcCIsImlzV2ViUlRDIiwiaXNEYXNoIiwiZ2V0U2NyaXB0UGF0aCIsInNjcmlwdE5hbWUiLCJzY3JpcHRzIiwic3JjIiwiRnVsbFNjcmVlbkJ1dHRvbiIsIiRjb250YWluZXIiLCJhcGkiLCIkcm9vdCIsIiRpY29uRXhwYW5kIiwiJGljb25Db21wcmVzcyIsImlzRnVsbFNjcmVlbiIsImZ1bGxTY3JlZW5FdmVudFR5cGVzIiwib25mdWxsc2NyZWVuY2hhbmdlIiwib25tb3pmdWxsc2NyZWVuY2hhbmdlIiwib253ZWJraXRmdWxsc2NyZWVuY2hhbmdlIiwiTVNGdWxsc2NyZWVuQ2hhbmdlIiwiZnVsbFNjcmVlbkNoYW5nZWRDYWxsYmFjayIsImNoZWNrRnVsbFNjcmVlbiIsImZ1bGxzY3JlZW5FbGVtZW50Iiwid2Via2l0RnVsbHNjcmVlbkVsZW1lbnQiLCJtb3pGdWxsU2NyZWVuRWxlbWVudCIsIm1zRnVsbHNjcmVlbkVsZW1lbnQiLCJyZXF1ZXN0RnVsbFNjcmVlbiIsInJlcXVlc3RGdWxsc2NyZWVuIiwid2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4iLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsIm1zUmVxdWVzdEZ1bGxzY3JlZW4iLCJleGl0RnVsbFNjcmVlbiIsImV4aXRGdWxsc2NyZWVuIiwid2Via2l0RXhpdEZ1bGxzY3JlZW4iLCJtb3pDYW5jZWxGdWxsU2NyZWVuIiwibXNFeGl0RnVsbHNjcmVlbiIsInRvZ2dsZUZ1bGxTY3JlZW4iLCJvblJlbmRlcmVkIiwiJGN1cnJlbnQiLCJldmVudE5hbWUiLCJvbkRlc3Ryb3llZCIsIkNvbnRyb2xzIiwidm9sdW1lQnV0dG9uIiwicGxheUJ1dHRvbiIsInByb2dyZXNzQmFyIiwidGltZURpc3BsYXkiLCJmdWxsU2NyZWVuQnV0dG9uIiwiZ2VuZXJhdGVNYWluUGFuZWxEYXRhIiwicGFuZWwiLCJ0aXRsZSIsImlzTWFpbiIsIkluZmluaXR5IiwiaW5pdFRpbWVEaXNwbGF5IiwiaW5pdFByb2dyZXNzQmFyIiwic2V0TW91c2VEb3duIiwiU2V0dGluZ1BhbmVsTGlzdCIsInNldHRpbmdQYW5lbCIsIlBsYXlCdXR0b24iLCIkaWNvblBsYXkiLCIkaWNvblBhdXNlIiwiJGljb25SZXBsYXkiLCJzZXRCdXR0b25TdGF0ZSIsIm5ld3N0YXRlIiwiY3VycmVudFN0YXRlIiwiUHJvZ3Jlc3NCYXIiLCJjdXJyZW50UGxheWluZ1Bvc2l0aW9uIiwiY3VycmVudFBsYXlpbmdQZXJjZW50YWdlIiwiY3VycmVudExvYWRlZFBlcmNlbnRhZ2UiLCJtb3VzZUluc2lkZSIsIm1vdXNlRG93biIsIiRwcm9ncmVzc0JhciIsIiRwcm9ncmVzc0xvYWQiLCIkcHJvZ3Jlc3NQbGF5IiwiJHByb2dyZXNzSG92ZXIiLCIka25vYkNvbnRhaW5lciIsIiRrbm9iIiwia25vYldpZHRoIiwiJHRpbWUiLCJwb3NpdGlvbkVsZW1lbnRzIiwicGVyY2VudGFnZSIsInByb2dyZXNzQmFyV2lkdGgiLCJrbm9iUG9zdGlvbiIsImRyYXdIb3ZlclByb2dyZXNzIiwiaG92ZXJQb3NpdGlvbiIsImRyYXdMb2FkUHJvZ3Jlc3MiLCJsb2FkUG9zaXRpb24iLCJjYWxjdWxhdGVQZXJjZW50YWdlIiwicHJvZ3Jlc3NCYXJPZmZzZXRYIiwicG9pbnRlck9mZnNldFgiLCJwYWdlWCIsImRyYXdUaW1lSW5kaWNhdG9yIiwiaG1zIiwidGltZUVsZW1XaWR0aCIsInBvc2l0aW9uT2ZQaXhlbCIsImNhbGN1bGF0ZU1hZ25ldGljIiwibWFnbmV0aWNQb3NpdGlvbiIsImJ1ZmZlclBlcmNlbnQiLCJQTEFZRVJfTUlOX0hFSUdIVCIsIlNldHRpbmdQYW5lbCIsImV4dHJhY3RQYW5lbERhdGEiLCJwYW5lbFR5cGUiLCJwbGF5QmFja1JhdGVzIiwiY3VycmVudFBsYXliYWNrUmF0ZSIsImlzQ2hlY2siLCJxdWFsaXR5TGV2ZWxzIiwic2V0dGluZ0l0ZW1UZW1wbGF0ZSIsInNldHRpbmdWYWx1ZVRlbXBsYXRlIiwiVGltZURpc3BsYXkiLCIkcG9zaXRpb24iLCIkZHVyYXRpb24iLCJjb252ZXJ0SHVtYW5pemVUaW1lIiwidGltZSIsIlZvbHVtZUJ1dHRvbiIsIiRzbGlkZXJDb250YWluZXIiLCIkc2xpZGVyIiwiJHNsaWRlckhhbmRsZSIsIiRzbGlkZXJWYWx1ZSIsIiR2b2x1bWVJY29uQmlnIiwiJHZvbHVtZUljb25TbWFsbCIsIiR2b2x1bWVJY29uTXV0ZSIsInNsaWRlcldpZHRoIiwiaGFuZGxlV2lkdGgiLCJtaW5SYW5nZSIsIm1heFJhbmdlIiwic2V0Vm9sdW1lSWNvbiIsInNldFZvbHVtZVVJIiwiaGFuZGxlUG9zaXRpb24iLCJyZWxhdGl2ZVgiLCJPdmVuVGVtcGxhdGUiLCJ0ZW1wbGF0ZU5hbWUiLCJpc1Jvb3QiLCIkdGVtcGxhdGUiLCJ2aWV3RXZlbnRzIiwiY3JlYXRlQW5kU2VsZWN0RWxlbWVudCIsIm5ld0VsZW1lbnQiLCJUZW1wbGF0ZXMiLCJleHBsb2RlZFRleHQiLCJldmVudFN0cmluZyIsIiR0YXJnZXQiLCJ3cmFwcGVkRnVuYyIsIm5vZGVMZW5ndGgiLCJUZXh0Vmlld1RlbXBsYXRlIiwiVmlld1RlbXBsYXRlIiwiSGVscGVyVGVtcGxhdGUiLCJCaWdCdXR0b25UZW1wbGF0ZSIsIk1lc3NhZ2VCb3hUZW1wbGF0ZSIsIlNwaW5uZXJUZW1wbGF0ZSIsIkNvbnRleHRQYW5lbFRlbXBsYXRlIiwiQ29udHJvbHNUZW1wbGF0ZSIsIlZvbHVtZUJ1dHRvblRlbXBsYXRlIiwiUHJvZ3Jlc3NCYXJUZW1wbGF0ZSIsIlBsYXlCdXR0b25UZW1wbGF0ZSIsIlRpbWVEaXNwbGF5VGVtcGxhdGUiLCJGdWxsU2NyZWVuQnV0dG9uVGVtcGxhdGUiLCJTZXR0aW5nUGFuZWxUZW1wbGF0ZSIsIkJpZ0J1dHRvbiIsInBsYXllclN0YXRlIiwiQ29udGV4dFBhbmVsIiwicGFuZWxXaWR0aCIsInBhbmVsSGVpZ2h0IiwicGFnZVkiLCJvcGVuIiwiSGVscGVyIiwiYmlnQnV0dG9uIiwibWVzc2FnZUJveCIsInNwaW5uZXIiLCJjcmVhdGVCaWdCdXR0b24iLCJjcmVhdGVNZXNzYWdlIiwid2l0aFRpbWVyIiwiTWVzc2FnZUJveCIsImF1dG9EZXN0cm95VGltZXIiLCJTcGlubmVyIiwiJHNwaW5uZXIiLCJpc1Nob3ciLCJWaWV3Iiwidmlld1RlbXBsYXRlIiwiY29udHJvbHMiLCJoZWxwZXIiLCIkcGxheWVyUm9vdCIsImNvbnRleHRQYW5lbCIsImF1dG9IaWRlVGltZXIiLCJzZXRIaWRlIiwiYXV0b0hpZGUiLCJ0b2dnbGVQbGF5UGF1c2UiLCJpc1Jld2luZCIsImN1cnJlbnRQb3NpdGlvbiIsImlzVXAiLCJjdXJyZW50Vm9sdW1uIiwibmV3Vm9sdW1lIiwiY3JlYXRlQ29udGV4dFBhbmVsIiwia2V5Q29kZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLGlEQUF5QyxrakJBQWtqQjtBQUMzbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLHlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDckJBLHFDQUFxQyw0WDs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLDRYOzs7Ozs7Ozs7OztBQ0FyQyxxQ0FBcUMsNFc7Ozs7Ozs7Ozs7O0FDQXJDLHFDQUFxQyxnVTs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLG9jOzs7Ozs7Ozs7OztBQ0FyQyxxQ0FBcUMsZ3VDOzs7Ozs7Ozs7OztBQ0FyQyxxQ0FBcUMsNFg7Ozs7Ozs7Ozs7O0FDQXJDLHFDQUFxQyw0Vjs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLDRZOzs7Ozs7Ozs7OztBQ0FyQyxxQ0FBcUMsNFg7Ozs7Ozs7Ozs7O0FDQXJDLHFDQUFxQyxnYzs7Ozs7Ozs7Ozs7O0FDQ3JDOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tRQ25CQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOzs7Ozs7QUFNQSxJQUFNQSxNQUFNLFNBQU5BLEdBQU0sQ0FBU0MsU0FBVCxFQUFtQjtBQUMzQixRQUFJQyxhQUFhLHVCQUFqQjtBQUNBLFFBQU1DLE9BQU8sRUFBYjtBQUNBLGdDQUFhQSxJQUFiOztBQUVBQyxzQkFBa0JDLEdBQWxCLENBQXNCLHNCQUFxQkMsZ0JBQTNDO0FBQ0FGLHNCQUFrQkMsR0FBbEIsQ0FBc0IsYUFBdEI7QUFDQTs7QUFFQSxRQUFJRSxrQkFBa0Isd0JBQXRCO0FBQ0EsUUFBSUMscUJBQXFCLDJCQUF6QjtBQUNBLFFBQUlDLGtCQUFrQixFQUF0QjtBQUNBLFFBQUlDLGVBQWUsRUFBbkI7QUFDQSxRQUFJQyxZQUFZLEVBQWhCOztBQUVBLFFBQU1DLGVBQWUsU0FBZkEsWUFBZSxDQUFTQyxnQkFBVCxFQUEwQjtBQUMzQyxZQUFNQyx3QkFBd0IsU0FBeEJBLHFCQUF3QixDQUFDQyxPQUFELEVBQVk7QUFDdEMsZ0JBQUlDLFVBQVUsQ0FBZDtBQUNBLGdCQUFJRCxPQUFKLEVBQWE7QUFDVCxxQkFBSyxJQUFJRSxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLFFBQVFHLE1BQTVCLEVBQW9DRCxHQUFwQyxFQUF5QztBQUNyQyx3QkFBSUYsUUFBUUUsQ0FBUixFQUFXRSxPQUFmLEVBQXdCO0FBQ3BCSCxrQ0FBVUMsQ0FBVjtBQUNIO0FBQ0Qsd0JBQUlQLGFBQWFVLGVBQWIsTUFBa0NMLFFBQVFFLENBQVIsRUFBV0ksS0FBWCxLQUFxQlgsYUFBYVUsZUFBYixFQUEzRCxFQUE0RjtBQUN4RiwrQkFBT0gsQ0FBUDtBQUNIO0FBQ0o7QUFDSjtBQUNELG1CQUFPRCxPQUFQO0FBQ0gsU0FiRDs7QUFlQSxlQUFPUixtQkFBbUJjLGFBQW5CLENBQWlDZixnQkFBZ0JnQixXQUFoQixFQUFqQyxFQUFnRUMsSUFBaEUsQ0FBcUUscUJBQWE7QUFDckYsZ0JBQUdmLGVBQUgsRUFBbUI7QUFDZkEsZ0NBQWdCZ0IsT0FBaEI7QUFDQWhCLGtDQUFrQixJQUFsQjtBQUNIOztBQUVELGdCQUFJaUIscUJBQXFCWixzQkFBc0JQLGdCQUFnQm9CLGlCQUFoQixFQUF0QixDQUF6QjtBQUNBdkIsOEJBQWtCQyxHQUFsQixDQUF1Qiw0QkFBMkJxQixrQkFBbEQ7O0FBRUE7QUFDQWpCLDhCQUFrQm1CLFVBQVVGLGtCQUFWLEVBQThCekIsU0FBOUIsRUFBeUNTLFlBQXpDLENBQWxCOztBQUVBLGdCQUFHRCxnQkFBZ0JvQixPQUFoQixPQUE4QkMsd0JBQWpDLEVBQStDO0FBQzNDO0FBQ0EseUJBQWMzQixJQUFkLEVBQW9CLHFDQUFpQk0sZUFBakIsQ0FBcEI7QUFDSDs7QUFFRDtBQUNBQSw0QkFBZ0JzQixFQUFoQixDQUFtQixLQUFuQixFQUEwQixVQUFTQyxJQUFULEVBQWVDLElBQWYsRUFBb0I7QUFDMUM5QixxQkFBSytCLE9BQUwsQ0FBYUYsSUFBYixFQUFtQkMsSUFBbkI7O0FBRUE7QUFDQSxvQkFBS0QsU0FBU0csZ0JBQVQsS0FBbUJGLEtBQUtHLElBQUwsS0FBY0MsNEJBQWQsSUFBbUNDLFNBQVNMLEtBQUtHLElBQUwsR0FBVSxHQUFuQixNQUE0QixDQUFsRixDQUFELElBQXlGSixTQUFTTyw0QkFBdEcsRUFBeUg7QUFDckgsd0JBQUlDLGlCQUFpQnJDLEtBQUtzQyxpQkFBTCxFQUFyQjtBQUNBLHdCQUFHRCxlQUFlRSxLQUFmLEdBQXFCLENBQXJCLEdBQXlCdkMsS0FBS3dDLGdCQUFMLEdBQXdCekIsTUFBcEQsRUFBMkQ7QUFDdkQ7QUFDQWYsNkJBQUt5QyxLQUFMOztBQUVBekMsNkJBQUswQyxpQkFBTCxDQUF1QkwsZUFBZUUsS0FBZixHQUFxQixDQUE1QztBQUNIO0FBQ0o7QUFDSixhQWJEO0FBZUgsU0FqQ00sRUFpQ0psQixJQWpDSSxDQWlDQyxZQUFJOztBQUVSO0FBQ0FmLDRCQUFnQnFDLE9BQWhCLENBQXdCdkMsZ0JBQWdCb0IsaUJBQWhCLEVBQXhCLEVBQTZEZCxnQkFBN0QsRUFBZ0ZXLElBQWhGLENBQXFGLFlBQVU7QUFDM0ZiLDBCQUFVb0MsS0FBVjtBQUNBO0FBQ0FwQywwQkFBVWMsT0FBVjs7QUFFQXRCLHFCQUFLK0IsT0FBTCxDQUFhYyxnQkFBYjtBQUNILGFBTkQ7QUFPSCxTQTNDTSxFQTJDSkMsS0EzQ0ksQ0EyQ0UsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCLGdCQUFNQyxjQUFjLEVBQUNmLE1BQU9nQixxQkFBUixFQUFvQkMsUUFBUyxhQUE3QixFQUE0Q0MsU0FBVSxvQkFBdEQsRUFBNEVKLE9BQVFBLEtBQXBGLEVBQXBCO0FBQ0EvQyxpQkFBSytCLE9BQUwsQ0FBYUMsZ0JBQWIsRUFBb0JnQixXQUFwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBeEMsc0JBQVU0QyxtQkFBVixDQUE4QixNQUE5QjtBQUNILFNBcERNLENBQVA7QUFxREgsS0FyRUQ7O0FBd0VBOzs7Ozs7QUFNQXBELFNBQUtxRCxJQUFMLEdBQVksVUFBQ0MsT0FBRCxFQUFZO0FBQ3BCO0FBQ0E5QyxvQkFBWSxtQ0FBb0JSLElBQXBCLEVBQTBCLENBQUMsTUFBRCxFQUFRLE1BQVIsRUFBZSxPQUFmLEVBQXVCLE1BQXZCLEVBQThCLE1BQTlCLEVBQXNDLGFBQXRDLEVBQXFELGFBQXJELEVBQW9FLFdBQXBFLEVBQWlGLFNBQWpGLEVBQTRGLFdBQTVGLEVBQXlHLFVBQXpHLENBQTFCLENBQVo7QUFDQU8sdUJBQWUsNEJBQWErQyxPQUFiLENBQWY7QUFDQSxZQUFHLENBQUMvQyxhQUFhZ0QsT0FBYixFQUFKLEVBQTJCO0FBQ3ZCeEQsdUJBQVd5RCxPQUFYO0FBQ0g7QUFDRHZELDBCQUFrQkMsR0FBbEIsQ0FBc0IsY0FBdEI7QUFDQUQsMEJBQWtCQyxHQUFsQixDQUFzQix3QkFBdEIsRUFBZ0RLLFlBQWhEOztBQUVBSCx3QkFBZ0JxRCxXQUFoQixDQUE0QmxELGFBQWFhLFdBQWIsRUFBNUI7QUFDQW5CLDBCQUFrQkMsR0FBbEIsQ0FBc0IseUJBQXRCLEVBQWtERSxnQkFBZ0JvQixpQkFBaEIsRUFBbEQ7QUFDQWY7QUFDSCxLQWJEOztBQWVBOzs7O0FBSUFULFNBQUswRCxTQUFMLEdBQWlCLFlBQU07QUFDbkJ6RCwwQkFBa0JDLEdBQWxCLENBQXNCLG1CQUF0QixFQUEyQ0ssYUFBYW1ELFNBQWIsRUFBM0M7QUFDQSxlQUFPbkQsYUFBYW1ELFNBQWIsRUFBUDtBQUNILEtBSEQ7O0FBS0ExRCxTQUFLMkQsV0FBTCxHQUFtQixZQUFNO0FBQ3JCLFlBQUcsQ0FBQ3JELGVBQUosRUFBb0I7QUFBQztBQUFRO0FBQzdCTCwwQkFBa0JDLEdBQWxCLENBQXNCLHFCQUF0QixFQUE2Q0ksZ0JBQWdCcUQsV0FBaEIsRUFBN0M7QUFDQSxlQUFPckQsZ0JBQWdCcUQsV0FBaEIsRUFBUDtBQUNILEtBSkQ7QUFLQTNELFNBQUs0RCxXQUFMLEdBQW1CLFlBQU07QUFDckIsWUFBRyxDQUFDdEQsZUFBSixFQUFvQjtBQUFDO0FBQVE7QUFDN0JMLDBCQUFrQkMsR0FBbEIsQ0FBc0IscUJBQXRCLEVBQTZDSSxnQkFBZ0JzRCxXQUFoQixFQUE3QztBQUNBLGVBQU90RCxnQkFBZ0JzRCxXQUFoQixFQUFQO0FBQ0gsS0FKRDtBQUtBNUQsU0FBSzZELFNBQUwsR0FBaUIsWUFBTTtBQUNuQixZQUFHLENBQUN2RCxlQUFKLEVBQW9CO0FBQUM7QUFBUTtBQUM3QkwsMEJBQWtCQyxHQUFsQixDQUFzQixtQkFBdEIsRUFBMkNJLGdCQUFnQnVELFNBQWhCLEVBQTNDO0FBQ0EsZUFBT3ZELGdCQUFnQnVELFNBQWhCLEVBQVA7QUFDSCxLQUpEO0FBS0E3RCxTQUFLOEQsU0FBTCxHQUFpQixVQUFDQyxNQUFELEVBQVk7QUFDekIsWUFBRyxDQUFDekQsZUFBSixFQUFvQjtBQUFDO0FBQVE7QUFDN0JMLDBCQUFrQkMsR0FBbEIsQ0FBc0IsdUJBQXVCNkQsTUFBN0M7QUFDQXpELHdCQUFnQndELFNBQWhCLENBQTBCQyxNQUExQjtBQUNILEtBSkQ7QUFLQS9ELFNBQUtnRSxPQUFMLEdBQWUsVUFBQ0MsS0FBRCxFQUFXO0FBQ3RCLFlBQUcsQ0FBQzNELGVBQUosRUFBb0I7QUFBQztBQUFRO0FBQzdCTCwwQkFBa0JDLEdBQWxCLENBQXNCLHFCQUFxQitELEtBQTNDO0FBQ0EsZUFBTzNELGdCQUFnQjBELE9BQWhCLENBQXdCQyxLQUF4QixDQUFQO0FBQ0gsS0FKRDtBQUtBakUsU0FBS2tFLE9BQUwsR0FBZSxZQUFNO0FBQ2pCLFlBQUcsQ0FBQzVELGVBQUosRUFBb0I7QUFBQztBQUFRO0FBQzdCTCwwQkFBa0JDLEdBQWxCLENBQXNCLHFCQUFxQkksZ0JBQWdCNEQsT0FBaEIsRUFBM0M7QUFDQSxlQUFPNUQsZ0JBQWdCNEQsT0FBaEIsRUFBUDtBQUNILEtBSkQ7QUFLQWxFLFNBQUttRSxJQUFMLEdBQVksVUFBQ0MsUUFBRCxFQUFjO0FBQ3RCbkUsMEJBQWtCQyxHQUFsQixDQUFzQixlQUF0QixFQUF1Q2tFLFFBQXZDO0FBQ0E1RCxvQkFBWSxtQ0FBb0JSLElBQXBCLEVBQTBCLENBQUMsTUFBRCxFQUFRLE1BQVIsRUFBZSxNQUFmLENBQTFCLENBQVo7O0FBRUEsWUFBR29FLFFBQUgsRUFBWTtBQUNSLGdCQUFHOUQsZUFBSCxFQUFtQjtBQUNmQSxnQ0FBZ0JvQyxpQkFBaEIsQ0FBa0MsQ0FBbEM7QUFDSDtBQUNEdEMsNEJBQWdCcUQsV0FBaEIsQ0FBNEJXLFFBQTVCO0FBQ0g7QUFDRCxlQUFPM0QsY0FBUDtBQUVILEtBWkQ7QUFhQVQsU0FBS3FFLElBQUwsR0FBWSxZQUFNO0FBQ2RwRSwwQkFBa0JDLEdBQWxCLENBQXNCLGVBQXRCO0FBQ0FJLHdCQUFnQitELElBQWhCO0FBQ0gsS0FIRDtBQUlBckUsU0FBS3lDLEtBQUwsR0FBYSxZQUFNO0FBQ2Z4QywwQkFBa0JDLEdBQWxCLENBQXNCLGdCQUF0QjtBQUNBSSx3QkFBZ0JtQyxLQUFoQjtBQUNILEtBSEQ7QUFJQXpDLFNBQUtzRSxJQUFMLEdBQVksVUFBQ0MsUUFBRCxFQUFjO0FBQ3RCdEUsMEJBQWtCQyxHQUFsQixDQUFzQixrQkFBaUJxRSxRQUF2QztBQUNBakUsd0JBQWdCZ0UsSUFBaEIsQ0FBcUJDLFFBQXJCO0FBQ0gsS0FIRDtBQUlBdkUsU0FBS3dFLGVBQUwsR0FBdUIsVUFBQ0MsWUFBRCxFQUFpQjtBQUNwQ3hFLDBCQUFrQkMsR0FBbEIsQ0FBc0IsMEJBQXRCLEVBQWtEdUUsWUFBbEQ7QUFDQSxlQUFPbkUsZ0JBQWdCa0UsZUFBaEIsQ0FBZ0NqRSxhQUFhbUUsc0JBQWIsQ0FBb0NELFlBQXBDLENBQWhDLENBQVA7QUFDSCxLQUhEO0FBSUF6RSxTQUFLMkUsZUFBTCxHQUF1QixZQUFLO0FBQ3hCMUUsMEJBQWtCQyxHQUFsQixDQUFzQiwwQkFBdEIsRUFBa0RJLGdCQUFnQnFFLGVBQWhCLEVBQWxEO0FBQ0EsZUFBT3JFLGdCQUFnQnFFLGVBQWhCLEVBQVA7QUFDSCxLQUhEO0FBSUEzRSxTQUFLd0MsZ0JBQUwsR0FBd0IsWUFBSztBQUN6QnZDLDBCQUFrQkMsR0FBbEIsQ0FBc0IsMkJBQXRCLEVBQW1ESSxnQkFBZ0JrQyxnQkFBaEIsRUFBbkQ7QUFDQSxlQUFPbEMsZ0JBQWdCa0MsZ0JBQWhCLEVBQVA7QUFDSCxLQUhEO0FBSUF4QyxTQUFLc0MsaUJBQUwsR0FBeUIsWUFBSztBQUMxQnJDLDBCQUFrQkMsR0FBbEIsQ0FBc0IsNEJBQXRCLEVBQW9ESSxnQkFBZ0JnQyxpQkFBaEIsRUFBcEQ7QUFDQSxlQUFPaEMsZ0JBQWdCZ0MsaUJBQWhCLEVBQVA7QUFDSCxLQUhEO0FBSUF0QyxTQUFLMEMsaUJBQUwsR0FBeUIsVUFBQ2tDLFlBQUQsRUFBaUI7QUFDdEMzRSwwQkFBa0JDLEdBQWxCLENBQXNCLDRCQUF0QixFQUFvRDBFLFlBQXBEOztBQUVBLFlBQUloRSxVQUFVUixnQkFBZ0JvQixpQkFBaEIsRUFBZDtBQUNBLFlBQUlxRCxnQkFBZ0JqRSxRQUFRWixLQUFLc0MsaUJBQUwsR0FBeUJDLEtBQWpDLENBQXBCO0FBQ0EsWUFBSXVDLFlBQVlsRSxRQUFRZ0UsWUFBUixDQUFoQjtBQUNBLFlBQUlsRSxtQkFBbUJWLEtBQUs0RCxXQUFMLEVBQXZCO0FBQ0EsWUFBSW1CLGlCQUFpQjFFLG1CQUFtQjBFLGNBQW5CLENBQWtDRixhQUFsQyxFQUFpREMsU0FBakQsQ0FBckI7QUFDQTtBQUNBLFlBQUlFLGtCQUFrQjFFLGdCQUFnQm9DLGlCQUFoQixDQUFrQ2tDLFlBQWxDLEVBQWdERyxjQUFoRCxDQUF0Qjs7QUFFQSxZQUFHLENBQUNELFNBQUosRUFBYztBQUNWLG1CQUFPLElBQVA7QUFDSDs7QUFFRDdFLDBCQUFrQkMsR0FBbEIsQ0FBc0IsMENBQXRCLEVBQWtFNkUsY0FBbEU7O0FBRUEsWUFBRyxDQUFDQSxjQUFKLEVBQW1CO0FBQ2Z2RSx3QkFBWSxtQ0FBb0JSLElBQXBCLEVBQTBCLENBQUMsTUFBRCxDQUExQixDQUFaO0FBQ0FTLHlCQUFhQyxnQkFBYjtBQUNIOztBQUVELGVBQU9zRSxlQUFQO0FBQ0gsS0F2QkQ7O0FBeUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkFoRixTQUFLaUYsU0FBTCxHQUFpQixZQUFNO0FBQ25CaEYsMEJBQWtCQyxHQUFsQixDQUFzQixvQkFBdEIsRUFBNENJLGdCQUFnQjJFLFNBQWhCLEVBQTVDO0FBQ0EzRSx3QkFBZ0IyRSxTQUFoQjtBQUNILEtBSEQ7QUFJQWpGLFNBQUtrRixRQUFMLEdBQWdCLFlBQU07QUFDbEIsWUFBRyxDQUFDNUUsZUFBSixFQUFvQjtBQUFDO0FBQVE7QUFDN0JMLDBCQUFrQkMsR0FBbEIsQ0FBc0IsbUJBQXRCLEVBQTJDSSxnQkFBZ0I0RSxRQUFoQixFQUEzQztBQUNBLGVBQU81RSxnQkFBZ0I0RSxRQUFoQixFQUFQO0FBQ0gsS0FKRDtBQUtBbEYsU0FBS21GLElBQUwsR0FBWSxZQUFNO0FBQ2RsRiwwQkFBa0JDLEdBQWxCLENBQXNCLGVBQXRCO0FBQ0FJLHdCQUFnQjZFLElBQWhCO0FBQ0gsS0FIRDtBQUlBbkYsU0FBS29GLE1BQUwsR0FBYyxZQUFNO0FBQ2hCbkYsMEJBQWtCQyxHQUFsQixDQUFzQixpQkFBdEI7QUFDQU0sa0JBQVVjLE9BQVY7QUFDQWhCLHdCQUFnQmdCLE9BQWhCO0FBQ0FoQiwwQkFBa0IsSUFBbEI7QUFDQUQsNkJBQXFCLElBQXJCO0FBQ0FELDBCQUFrQixJQUFsQjtBQUNBRyx1QkFBZSxJQUFmO0FBQ0FDLG9CQUFZLElBQVo7O0FBRUFSLGFBQUsrQixPQUFMLENBQWFzRCxrQkFBYjtBQUNBckYsYUFBS3NGLEdBQUw7O0FBRUFyRiwwQkFBa0JDLEdBQWxCLENBQXNCLHNIQUF0QjtBQUNBSCxtQkFBV3VCLE9BQVg7QUFDQXZCLHFCQUFhLElBQWI7QUFDQXdGLHNCQUFjQyxZQUFkLENBQTJCeEYsS0FBS3lGLGNBQUwsRUFBM0I7QUFDSCxLQWpCRDs7QUFxQkEsV0FBT3pGLElBQVA7QUFDSCxDQXpRRDs7a0JBNlFlSCxHOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9SZjs7OztBQUlPLElBQU02Riw4Q0FBbUIsU0FBbkJBLGdCQUFtQixDQUFTcEYsZUFBVCxFQUF5QjtBQUNyRCxXQUFPO0FBQ0hxRiwrQkFBd0IsK0JBQUNDLE1BQUQsRUFBWTtBQUNoQyxnQkFBR0EsT0FBTy9ELElBQVAsSUFBZStELE9BQU85RCxJQUF6QixFQUE4QjtBQUMxQix1QkFBT3hCLGdCQUFnQnVGLHdCQUFoQixDQUF5Q0QsT0FBTy9ELElBQWhELEVBQXNEK0QsT0FBTzlELElBQTdELENBQVA7QUFDSCxhQUZELE1BRUs7QUFDRCx1QkFBTyxJQUFQO0FBQ0g7QUFDSjtBQVBFLEtBQVA7QUFTSCxDQVZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSlA7Ozs7OztBQUVBOzs7OztBQUtBLElBQU1nRSxlQUFlLFNBQWZBLFlBQWUsQ0FBU3hDLE9BQVQsRUFBaUI7O0FBRWxDLFFBQU15Qyx1QkFBdUIsU0FBdkJBLG9CQUF1QixDQUFTekMsT0FBVCxFQUFpQjtBQUMxQyxZQUFNMEMsV0FBVztBQUNiQyxpQ0FBcUIsQ0FEUjtBQUViQyxrQ0FBc0IsS0FGVDtBQUdiQywyQkFBZSxDQUFDLElBQUQsRUFBTyxHQUFQLEVBQVksQ0FBWixFQUFlLEdBQWYsRUFBb0IsQ0FBcEIsQ0FIRjtBQUliQyxrQkFBTSxLQUpPO0FBS2JyQyxvQkFBUSxFQUxLO0FBTWJzQyxtQkFBTyxHQU5NO0FBT2JDLG9CQUFRO0FBUEssU0FBakI7QUFTQSxZQUFNQyxZQUFZLFNBQVpBLFNBQVksQ0FBVUMsR0FBVixFQUFlO0FBQzdCLGdCQUFJQSxRQUFRQyxTQUFaLEVBQXVCO0FBQ25CLHVCQUFPLElBQVA7QUFDSDtBQUNELGdCQUFJLE9BQU9ELEdBQVAsS0FBZSxRQUFmLElBQTJCQSxJQUFJekYsTUFBSixHQUFhLENBQTVDLEVBQStDO0FBQzNDLG9CQUFNMkYsZUFBZUYsSUFBSUcsV0FBSixFQUFyQjtBQUNBLG9CQUFJRCxpQkFBaUIsTUFBckIsRUFBNkI7QUFDekIsMkJBQU8sSUFBUDtBQUNIO0FBQ0Qsb0JBQUlBLGlCQUFpQixPQUFyQixFQUE4QjtBQUMxQiwyQkFBTyxLQUFQO0FBQ0g7QUFDRCxvQkFBSSxDQUFDRSxNQUFNQyxPQUFPTCxHQUFQLENBQU4sQ0FBRCxJQUF1QixDQUFDSSxNQUFNRSxXQUFXTixHQUFYLENBQU4sQ0FBNUIsRUFBb0Q7QUFDaEQsMkJBQU9LLE9BQU9MLEdBQVAsQ0FBUDtBQUNIO0FBQ0o7QUFDRCxtQkFBT0EsR0FBUDtBQUNILFNBakJEO0FBa0JBLFlBQU1PLGNBQWMsU0FBZEEsV0FBYyxDQUFVekQsT0FBVixFQUFtQjtBQUNuQzBELG1CQUFPQyxJQUFQLENBQVkzRCxPQUFaLEVBQXFCNEQsT0FBckIsQ0FBNkIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2xDLG9CQUFJQSxRQUFRLElBQVosRUFBa0I7QUFDZDtBQUNIO0FBQ0Q3RCx3QkFBUTZELEdBQVIsSUFBZVosVUFBVWpELFFBQVE2RCxHQUFSLENBQVYsQ0FBZjtBQUNILGFBTEQ7QUFNSCxTQVBEO0FBUUEsWUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFVWixHQUFWLEVBQWU7QUFDakMsZ0JBQUlBLElBQUlhLEtBQUosSUFBYWIsSUFBSWEsS0FBSixDQUFVLENBQUMsQ0FBWCxNQUFrQixJQUFuQyxFQUF5QztBQUNyQ2Isc0JBQU1BLElBQUlhLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBQyxDQUFkLENBQU47QUFDSDtBQUNELG1CQUFPYixHQUFQO0FBQ0gsU0FMRDtBQU1BLFlBQU1jLHNCQUFzQixTQUF0QkEsbUJBQXNCLENBQVVDLEVBQVYsRUFBY2xCLEtBQWQsRUFBcUI7QUFDN0MsZ0JBQUlBLE1BQU1tQixRQUFOLEdBQWlCQyxPQUFqQixDQUF5QixHQUF6QixNQUFrQyxDQUFDLENBQXZDLEVBQTBDO0FBQ3RDLHVCQUFPLENBQVA7QUFDSDtBQUNELGdCQUFJLE9BQU9GLEVBQVAsS0FBYyxRQUFkLElBQTBCLENBQUNBLEVBQS9CLEVBQW1DO0FBQy9CLHVCQUFPLENBQVA7QUFDSDtBQUNELGdCQUFJLGVBQWVHLElBQWYsQ0FBb0JILEVBQXBCLENBQUosRUFBNkI7QUFDekIsdUJBQU9BLEVBQVA7QUFDSDtBQUNELGdCQUFNaEYsUUFBUWdGLEdBQUdFLE9BQUgsQ0FBVyxHQUFYLENBQWQ7QUFDQSxnQkFBSWxGLFVBQVUsQ0FBQyxDQUFmLEVBQWtCO0FBQ2QsdUJBQU8sQ0FBUDtBQUNIO0FBQ0QsZ0JBQU1vRixJQUFJYixXQUFXUyxHQUFHSyxNQUFILENBQVUsQ0FBVixFQUFhckYsS0FBYixDQUFYLENBQVY7QUFDQSxnQkFBTXNGLElBQUlmLFdBQVdTLEdBQUdLLE1BQUgsQ0FBVXJGLFFBQVEsQ0FBbEIsQ0FBWCxDQUFWO0FBQ0EsZ0JBQUlvRixLQUFLLENBQUwsSUFBVUUsS0FBSyxDQUFuQixFQUFzQjtBQUNsQix1QkFBTyxDQUFQO0FBQ0g7QUFDRCxtQkFBUUEsSUFBSUYsQ0FBSixHQUFRLEdBQVQsR0FBZ0IsR0FBdkI7QUFDSCxTQXBCRDtBQXFCQVosb0JBQVl6RCxPQUFaO0FBQ0EsWUFBSXdFLFNBQVMsU0FBYyxFQUFkLEVBQWtCOUIsUUFBbEIsRUFBNEIxQyxPQUE1QixDQUFiO0FBQ0F3RSxlQUFPekIsS0FBUCxHQUFlZSxjQUFjVSxPQUFPekIsS0FBckIsQ0FBZjtBQUNBeUIsZUFBT3hCLE1BQVAsR0FBZ0JjLGNBQWNVLE9BQU94QixNQUFyQixDQUFoQjtBQUNBd0IsZUFBT0MsV0FBUCxHQUFxQlQsb0JBQW9CUSxPQUFPQyxXQUEzQixFQUF3Q0QsT0FBT3pCLEtBQS9DLENBQXJCOztBQUVBLFlBQUkyQixlQUFlRixPQUFPNUIsb0JBQTFCO0FBQ0EsWUFBSThCLFlBQUosRUFBa0I7QUFDZCxnQkFBSUMsUUFBUUgsT0FBTzNCLGFBQW5COztBQUVBLGdCQUFJK0IsTUFBTUMsT0FBTixDQUFjSCxZQUFkLENBQUosRUFBaUM7QUFDN0JDLHdCQUFRRCxZQUFSO0FBQ0g7QUFDREMsb0JBQVFBLE1BQU1HLE1BQU4sQ0FBYTtBQUFBLHVCQUFRQyxxQkFBRUMsUUFBRixDQUFXQyxJQUFYLEtBQW9CQSxRQUFRLElBQTVCLElBQW9DQSxRQUFRLENBQXBEO0FBQUEsYUFBYixFQUNIQyxHQURHLENBQ0M7QUFBQSx1QkFBUUMsS0FBS0MsS0FBTCxDQUFXSCxPQUFPLENBQWxCLElBQXVCLENBQS9CO0FBQUEsYUFERCxDQUFSOztBQUdBLGdCQUFJTixNQUFNUixPQUFOLENBQWMsQ0FBZCxJQUFtQixDQUF2QixFQUEwQjtBQUN0QlEsc0JBQU1VLElBQU4sQ0FBVyxDQUFYO0FBQ0g7QUFDRFYsa0JBQU1XLElBQU47O0FBRUFkLG1CQUFPNUIsb0JBQVAsR0FBOEIsSUFBOUI7QUFDQTRCLG1CQUFPM0IsYUFBUCxHQUF1QjhCLEtBQXZCO0FBQ0g7O0FBR0QsWUFBSSxDQUFDSCxPQUFPNUIsb0JBQVIsSUFBZ0M0QixPQUFPM0IsYUFBUCxDQUFxQnNCLE9BQXJCLENBQTZCSyxPQUFPN0IsbUJBQXBDLElBQTJELENBQS9GLEVBQWtHO0FBQzlGNkIsbUJBQU83QixtQkFBUCxHQUE2QixDQUE3QjtBQUNIOztBQUVENkIsZUFBT3JELFlBQVAsR0FBc0JxRCxPQUFPN0IsbUJBQTdCOztBQUVBLFlBQUksQ0FBQzZCLE9BQU9DLFdBQVosRUFBeUI7QUFDckIsbUJBQU9ELE9BQU9DLFdBQWQ7QUFDSDs7QUFFRCxZQUFNYyxpQkFBaUJmLE9BQU8xRCxRQUE5QjtBQUNBLFlBQUksQ0FBQ3lFLGNBQUwsRUFBcUI7QUFDakIsZ0JBQU1DLE1BQU1ULHFCQUFFVSxJQUFGLENBQU9qQixNQUFQLEVBQWUsQ0FDdkIsT0FEdUIsRUFFdkIsYUFGdUIsRUFHdkIsTUFIdUIsRUFJdkIsU0FKdUIsRUFLdkIsT0FMdUIsRUFNdkIsTUFOdUIsRUFPdkIsU0FQdUIsRUFRdkIsUUFSdUIsRUFTdkIsU0FUdUIsRUFVdkIsVUFWdUIsRUFXdkIsTUFYdUIsRUFZdkIsYUFadUIsRUFhdkIsUUFidUIsQ0FBZixDQUFaOztBQWdCQUEsbUJBQU8xRCxRQUFQLEdBQWtCLENBQUUwRSxHQUFGLENBQWxCO0FBQ0gsU0FsQkQsTUFrQk8sSUFBSVQscUJBQUVGLE9BQUYsQ0FBVVUsZUFBZXpFLFFBQXpCLENBQUosRUFBd0M7QUFDM0MwRCxtQkFBT2tCLFFBQVAsR0FBa0JILGNBQWxCO0FBQ0FmLG1CQUFPMUQsUUFBUCxHQUFrQnlFLGVBQWV6RSxRQUFqQztBQUNIOztBQUVELGVBQU8wRCxPQUFPbUIsUUFBZDtBQUNBLGVBQU9uQixNQUFQO0FBQ0gsS0E3SEQ7QUE4SEE3SCxzQkFBa0JDLEdBQWxCLENBQXNCLHNCQUF0QixFQUE4Q29ELE9BQTlDO0FBQ0EsUUFBSXdFLFNBQVMvQixxQkFBcUJ6QyxPQUFyQixDQUFiOztBQUVBLFFBQUl5RSxjQUFjRCxPQUFPQyxXQUFQLElBQXNCLE1BQXhDO0FBQ0EsUUFBSW1CLFFBQVFwQixPQUFPb0IsS0FBbkI7QUFDQSxRQUFJakQsc0JBQXNCNkIsT0FBTzdCLG1CQUFQLElBQThCLENBQXhEO0FBQ0EsUUFBSWtELFFBQVFyQixPQUFPcUIsS0FBbkI7QUFDQSxRQUFJakQsdUJBQXVCNEIsT0FBTzVCLG9CQUFQLElBQStCLElBQTFEO0FBQ0EsUUFBSUMsZ0JBQWdCMkIsT0FBTzNCLGFBQVAsSUFBd0IsQ0FBQyxHQUFELEVBQU0sQ0FBTixFQUFTLElBQVQsRUFBZSxHQUFmLEVBQW9CLENBQXBCLENBQTVDO0FBQ0EsUUFBSS9CLFdBQVcwRCxPQUFPMUQsUUFBUCxJQUFtQixFQUFsQztBQUNBLFFBQUlnRixlQUFldEIsT0FBT3NCLFlBQVAsSUFBdUIsRUFBMUM7QUFDQSxRQUFJQyxTQUFTdkIsT0FBT3VCLE1BQVAsSUFBaUIsS0FBOUI7QUFDQSxRQUFJQyxhQUFheEIsT0FBT3dCLFVBQVAsSUFBcUIsU0FBdEM7O0FBSUEsUUFBTXRKLE9BQU8sRUFBYjtBQUNBQSxTQUFLMEQsU0FBTCxHQUFpQixZQUFNO0FBQUMsZUFBT29FLE1BQVA7QUFBZSxLQUF2Qzs7QUFFQTlILFNBQUt1SixjQUFMLEdBQXFCLFlBQUk7QUFBQyxlQUFPeEIsV0FBUDtBQUFvQixLQUE5QztBQUNBL0gsU0FBS3dKLGNBQUwsR0FBcUIsVUFBQ0MsWUFBRCxFQUFnQjtBQUFDMUIsc0JBQWMwQixZQUFkO0FBQTRCLEtBQWxFOztBQUVBekosU0FBS3VELE9BQUwsR0FBYyxZQUFJO0FBQUMsZUFBTzJGLEtBQVA7QUFBYyxLQUFqQzs7QUFFQWxKLFNBQUswSixzQkFBTCxHQUE2QixZQUFJO0FBQUMsZUFBT3pELG1CQUFQO0FBQTRCLEtBQTlEO0FBQ0FqRyxTQUFLMEUsc0JBQUwsR0FBNkIsVUFBQ0QsWUFBRCxFQUFnQjtBQUFDd0IsOEJBQXNCeEIsWUFBdEIsQ0FBb0MsT0FBT0EsWUFBUDtBQUFxQixLQUF2Rzs7QUFFQXpFLFNBQUtpQixlQUFMLEdBQXVCLFlBQU07QUFBQyxlQUFPbUksWUFBUDtBQUFxQixLQUFuRDtBQUNBcEosU0FBSzJKLGVBQUwsR0FBdUIsVUFBQ0MsUUFBRCxFQUFjO0FBQUNSLHVCQUFlUSxRQUFmO0FBQXlCLEtBQS9EOztBQUVBNUosU0FBSzZKLGdCQUFMLEdBQXVCLFlBQUk7QUFBQyxlQUFPMUQsYUFBUDtBQUFzQixLQUFsRDtBQUNBbkcsU0FBSzhKLHNCQUFMLEdBQTZCLFlBQUk7QUFBQyxlQUFPNUQsb0JBQVA7QUFBNkIsS0FBL0Q7O0FBRUFsRyxTQUFLb0IsV0FBTCxHQUFrQixZQUFJO0FBQUMsZUFBT2dELFFBQVA7QUFBaUIsS0FBeEM7QUFDQXBFLFNBQUt5RCxXQUFMLEdBQWtCLFVBQUNzRyxTQUFELEVBQWM7QUFDNUIsWUFBRzFCLHFCQUFFRixPQUFGLENBQVU0QixTQUFWLENBQUgsRUFBd0I7QUFDcEIzRix1QkFBVzJGLFNBQVg7QUFDSCxTQUZELE1BRUs7QUFDRDNGLHVCQUFXLENBQUMyRixTQUFELENBQVg7QUFDSDtBQUNELGVBQU8zRixRQUFQO0FBQ0gsS0FQRDs7QUFTQXBFLFNBQUtnSyxRQUFMLEdBQWUsWUFBSTtBQUFDLGVBQU9YLE1BQVA7QUFBZSxLQUFuQzs7QUFFQXJKLFNBQUtpSyxhQUFMLEdBQW9CLFlBQUk7QUFBQyxlQUFPWCxVQUFQO0FBQW1CLEtBQTVDOztBQUVBLFdBQU90SixJQUFQO0FBQ0gsQ0FoTEQ7O2tCQWtMZThGLFk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekxmOzs7O0FBSUE7Ozs7OztBQU1BLElBQU1vRSxlQUFlLFNBQWZBLFlBQWUsQ0FBU0MsTUFBVCxFQUFnQjtBQUNqQyxRQUFJbkssT0FBT21LLE1BQVg7QUFDQSxRQUFJQyxVQUFTLEVBQWI7O0FBRUEsUUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFTQyxNQUFULEVBQWlCQyxJQUFqQixFQUF1QkMsT0FBdkIsRUFBK0I7QUFDakQsWUFBSTFKLElBQUksQ0FBUjtBQUNBLFlBQUlDLFNBQVN1SixPQUFPdkosTUFBcEI7QUFDQSxhQUFJRCxJQUFJLENBQVIsRUFBV0EsSUFBSUMsTUFBZixFQUF1QkQsR0FBdkIsRUFBNEI7QUFDeEIsZ0JBQUkySixRQUFRSCxPQUFPeEosQ0FBUCxDQUFaO0FBQ0EySixrQkFBTUMsUUFBTixDQUFlQyxLQUFmLENBQXdCRixNQUFNRCxPQUFOLElBQWlCQSxPQUF6QyxFQUFvREQsSUFBcEQ7QUFDSDtBQUNKLEtBUEQ7O0FBU0F2SyxTQUFLNEIsRUFBTCxHQUFVLFVBQVNDLElBQVQsRUFBZTZJLFFBQWYsRUFBeUJGLE9BQXpCLEVBQWlDO0FBQ3ZDLFNBQUNKLFFBQVF2SSxJQUFSLE1BQWtCdUksUUFBUXZJLElBQVIsSUFBYyxFQUFoQyxDQUFELEVBQXVDOEcsSUFBdkMsQ0FBNEMsRUFBRStCLFVBQVVBLFFBQVosRUFBd0JGLFNBQVVBLE9BQWxDLEVBQTVDO0FBQ0EsZUFBT3hLLElBQVA7QUFDSCxLQUhEO0FBSUFBLFNBQUsrQixPQUFMLEdBQWUsVUFBU0YsSUFBVCxFQUFjO0FBQ3pCLFlBQUcsQ0FBQ3VJLE9BQUosRUFBWTtBQUNSLG1CQUFPLEtBQVA7QUFDSDtBQUNELFlBQU1HLE9BQU8sR0FBR2xELEtBQUgsQ0FBU3VELElBQVQsQ0FBY0MsU0FBZCxFQUF5QixDQUF6QixDQUFiO0FBQ0EsWUFBTVAsU0FBU0YsUUFBUXZJLElBQVIsQ0FBZjtBQUNBLFlBQU1pSixZQUFZVixRQUFRVyxHQUExQjs7QUFFQSxZQUFHVCxNQUFILEVBQVU7QUFDTkQsMEJBQWNDLE1BQWQsRUFBc0JDLElBQXRCLEVBQTRCdkssSUFBNUI7QUFDSDtBQUNELFlBQUc4SyxTQUFILEVBQWE7QUFDVFQsMEJBQWNTLFNBQWQsRUFBeUJELFNBQXpCLEVBQW9DN0ssSUFBcEM7QUFDSDtBQUNKLEtBZEQ7QUFlQUEsU0FBS3NGLEdBQUwsR0FBVyxVQUFTekQsSUFBVCxFQUFlNkksUUFBZixFQUF5QkYsT0FBekIsRUFBaUM7QUFDeEMsWUFBRyxDQUFDSixPQUFKLEVBQVk7QUFDUixtQkFBTyxLQUFQO0FBQ0g7O0FBRUQsWUFBSSxDQUFDdkksSUFBRCxJQUFTLENBQUM2SSxRQUFWLElBQXNCLENBQUNGLE9BQTNCLEVBQXFDO0FBQ2pDSixzQkFBVSxFQUFWO0FBQ0EsbUJBQU9wSyxJQUFQO0FBQ0g7O0FBRUQsWUFBTWdMLFFBQVFuSixPQUFPLENBQUNBLElBQUQsQ0FBUCxHQUFnQm1GLE9BQU9DLElBQVAsQ0FBWW1ELE9BQVosQ0FBOUI7QUFDQSxhQUFLLElBQUl0SixJQUFJLENBQVIsRUFBV21LLElBQUlELE1BQU1qSyxNQUExQixFQUFrQ0QsSUFBSW1LLENBQXRDLEVBQXlDbkssR0FBekMsRUFBOEM7QUFDMUNlLG1CQUFPbUosTUFBTWxLLENBQU4sQ0FBUDtBQUNBLGdCQUFNd0osU0FBU0YsUUFBUXZJLElBQVIsQ0FBZjtBQUNBLGdCQUFJeUksTUFBSixFQUFZO0FBQ1Isb0JBQU1ZLFNBQVNkLFFBQVF2SSxJQUFSLElBQWdCLEVBQS9CO0FBQ0Esb0JBQUk2SSxZQUFhRixPQUFqQixFQUEwQjtBQUN0Qix5QkFBSyxJQUFJVyxJQUFJLENBQVIsRUFBV0MsSUFBSWQsT0FBT3ZKLE1BQTNCLEVBQW1Db0ssSUFBSUMsQ0FBdkMsRUFBMENELEdBQTFDLEVBQStDO0FBQzNDLDRCQUFNVixRQUFRSCxPQUFPYSxDQUFQLENBQWQ7QUFDQSw0QkFBS1QsWUFBWUEsYUFBYUQsTUFBTUMsUUFBL0IsSUFBMkNBLGFBQWFELE1BQU1DLFFBQU4sQ0FBZUEsUUFBdkUsSUFBb0ZBLGFBQWFELE1BQU1DLFFBQU4sQ0FBZVcsU0FBakgsSUFDR2IsV0FBV0EsWUFBWUMsTUFBTUQsT0FEcEMsRUFFRTtBQUNFVSxtQ0FBT3ZDLElBQVAsQ0FBWThCLEtBQVo7QUFDSDtBQUNKO0FBQ0o7QUFDRCxvQkFBSSxDQUFDUyxPQUFPbkssTUFBWixFQUFvQjtBQUNoQiwyQkFBT3FKLFFBQVF2SSxJQUFSLENBQVA7QUFDSDtBQUNKO0FBQ0o7QUFDRCxlQUFPN0IsSUFBUDtBQUNILEtBaENEO0FBaUNBQSxTQUFLc0wsSUFBTCxHQUFZLFVBQVN6SixJQUFULEVBQWU2SSxRQUFmLEVBQXlCRixPQUF6QixFQUFpQztBQUN6QyxZQUFJZSxRQUFRLENBQVo7QUFDQSxZQUFNQyxlQUFlLFNBQWZBLFlBQWUsR0FBVztBQUM1QixnQkFBSUQsT0FBSixFQUFhO0FBQ1Q7QUFDSDtBQUNEdkwsaUJBQUtzRixHQUFMLENBQVN6RCxJQUFULEVBQWUySixZQUFmO0FBQ0FkLHFCQUFTQyxLQUFULENBQWUzSyxJQUFmLEVBQXFCNkssU0FBckI7QUFDSCxTQU5EO0FBT0FXLHFCQUFhQyxTQUFiLEdBQXlCZixRQUF6QjtBQUNBLGVBQU8xSyxLQUFLNEIsRUFBTCxDQUFRQyxJQUFSLEVBQWMySixZQUFkLEVBQTRCaEIsT0FBNUIsQ0FBUDtBQUNILEtBWEQ7O0FBYUEsV0FBT3hLLElBQVA7QUFDSCxDQS9FRDs7a0JBaUZla0ssWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZmOzs7Ozs7QUFFQTs7Ozs7QUFLQSxJQUFNd0Isc0JBQXNCLFNBQXRCQSxtQkFBc0IsQ0FBVUMsUUFBVixFQUFvQkMsY0FBcEIsRUFBb0M7QUFDNUQsUUFBSUMsZUFBZSxFQUFuQjtBQUNBLFFBQUlDLHFCQUFxQixFQUF6QjtBQUNBLFFBQUlDLGNBQWMsS0FBbEI7QUFDQSxRQUFJL0wsT0FBTyxFQUFYO0FBQ0FDLHNCQUFrQkMsR0FBbEIsQ0FBc0IsNkJBQXRCO0FBQ0EwTCxtQkFBZTFFLE9BQWYsQ0FBdUIsVUFBQzhFLE9BQUQsRUFBYTtBQUNoQyxZQUFNQyxTQUFTTixTQUFTSyxPQUFULENBQWY7QUFDQUYsMkJBQW1CRSxPQUFuQixJQUE4QkMsVUFBVSxZQUFVLENBQUUsQ0FBcEQ7O0FBRUFOLGlCQUFTSyxPQUFULElBQW9CLFlBQVc7QUFDM0IsZ0JBQU16QixPQUFPckMsTUFBTWdFLFNBQU4sQ0FBZ0I3RSxLQUFoQixDQUFzQnVELElBQXRCLENBQTJCQyxTQUEzQixFQUFzQyxDQUF0QyxDQUFiO0FBQ0UsZ0JBQUksQ0FBQ2tCLFdBQUwsRUFBa0I7QUFDaEI7QUFDQS9MLHFCQUFLbU0sUUFBTCxDQUFjSCxPQUFkLEVBQXVCekIsSUFBdkI7QUFDSCxhQUhDLE1BR0s7QUFDSDZCO0FBQ0Esb0JBQUlILE1BQUosRUFBWTtBQUNSQSwyQkFBT3RCLEtBQVAsQ0FBYTNLLElBQWIsRUFBbUJ1SyxJQUFuQjtBQUNIO0FBQ0o7QUFDSixTQVhEO0FBWUgsS0FoQkQ7QUFpQkEsUUFBSTZCLHdCQUF3QixTQUF4QkEscUJBQXdCLEdBQVk7QUFDcEMsZUFBT1AsYUFBYTlLLE1BQWIsR0FBc0IsQ0FBN0IsRUFBZ0M7QUFBQSxzQ0FDRjhLLGFBQWFRLEtBQWIsRUFERTtBQUFBLGdCQUNwQkwsT0FEb0IsdUJBQ3BCQSxPQURvQjtBQUFBLGdCQUNYekIsSUFEVyx1QkFDWEEsSUFEVzs7QUFFNUIsYUFBQ3VCLG1CQUFtQkUsT0FBbkIsS0FBK0JMLFNBQVNLLE9BQVQsQ0FBaEMsRUFBbURyQixLQUFuRCxDQUF5RGdCLFFBQXpELEVBQW1FcEIsSUFBbkU7QUFDSDtBQUNKLEtBTEQ7O0FBT0F2SyxTQUFLc00sY0FBTCxHQUFzQixVQUFDQyxJQUFELEVBQVU7QUFDNUJSLHNCQUFjUSxJQUFkO0FBQ0F0TSwwQkFBa0JDLEdBQWxCLENBQXNCLHdDQUF0QixFQUFnRXFNLElBQWhFO0FBQ0gsS0FIRDtBQUlBdk0sU0FBS3dNLHFCQUFMLEdBQTZCLFlBQVU7QUFDbkN2TSwwQkFBa0JDLEdBQWxCLENBQXNCLCtDQUF0QixFQUF1RTRMLGtCQUF2RTtBQUNBLGVBQU9BLGtCQUFQO0FBQ0gsS0FIRDtBQUlBOUwsU0FBS3lNLFFBQUwsR0FBZ0IsWUFBVTtBQUN0QnhNLDBCQUFrQkMsR0FBbEIsQ0FBc0Isa0NBQXRCLEVBQTBEdU0sUUFBMUQ7QUFDQSxlQUFPWixZQUFQO0FBQ0gsS0FIRDtBQUlBN0wsU0FBS21NLFFBQUwsR0FBZ0IsVUFBU0gsT0FBVCxFQUFrQnpCLElBQWxCLEVBQXVCO0FBQ25DdEssMEJBQWtCQyxHQUFsQixDQUFzQixrQ0FBdEIsRUFBMEQ4TCxPQUExRCxFQUFtRXpCLElBQW5FO0FBQ0FzQixxQkFBYWxELElBQWIsQ0FBa0IsRUFBRXFELGdCQUFGLEVBQVd6QixVQUFYLEVBQWxCO0FBQ0gsS0FIRDs7QUFLQXZLLFNBQUs0QyxLQUFMLEdBQWEsWUFBVTtBQUNuQjNDLDBCQUFrQkMsR0FBbEIsQ0FBc0IsK0JBQXRCO0FBQ0FrTTtBQUNILEtBSEQ7QUFJQXBNLFNBQUswTSxLQUFMLEdBQWEsWUFBVztBQUNwQnpNLDBCQUFrQkMsR0FBbEIsQ0FBc0IsK0JBQXRCO0FBQ0EyTCxxQkFBYTlLLE1BQWIsR0FBc0IsQ0FBdEI7QUFDSCxLQUhEO0FBSUFmLFNBQUtzRixHQUFMLEdBQVcsWUFBVztBQUNsQnJGLDBCQUFrQkMsR0FBbEIsQ0FBc0IsNkJBQXRCO0FBQ0EwTCx1QkFBZTFFLE9BQWYsQ0FBdUIsVUFBQzhFLE9BQUQsRUFBYTtBQUNoQyxnQkFBTUMsU0FBU0gsbUJBQW1CRSxPQUFuQixDQUFmO0FBQ0EsZ0JBQUlDLE1BQUosRUFBWTtBQUNSTix5QkFBU0ssT0FBVCxJQUFvQkMsTUFBcEI7QUFDQSx1QkFBT0gsbUJBQW1CRSxPQUFuQixDQUFQO0FBQ0g7QUFDSixTQU5EO0FBT0gsS0FURDs7QUFZQTtBQUNBaE0sU0FBS29ELG1CQUFMLEdBQTJCLFVBQVN1SixRQUFULEVBQWtCO0FBQ3pDLFlBQUlDLG1CQUFtQnZFLHFCQUFFd0UsU0FBRixDQUFZaEIsWUFBWixFQUEwQixFQUFDRyxTQUFVVyxRQUFYLEVBQTFCLENBQXZCO0FBQ0ExTSwwQkFBa0JDLEdBQWxCLENBQXNCLDZDQUF0QixFQUFxRXlNLFFBQXJFO0FBQ0FkLHFCQUFhaUIsTUFBYixDQUFvQnpFLHFCQUFFMEUsU0FBRixDQUFZbEIsWUFBWixFQUEwQixFQUFDRyxTQUFVVyxRQUFYLEVBQTFCLENBQXBCLEVBQXFFLENBQXJFOztBQUVBLFlBQU1WLFNBQVNILG1CQUFtQmEsUUFBbkIsQ0FBZjtBQUNBLFlBQUlWLE1BQUosRUFBWTtBQUNSaE0sOEJBQWtCQyxHQUFsQixDQUFzQixpQkFBdEI7QUFDQSxnQkFBRzBNLGdCQUFILEVBQW9CO0FBQ2hCLGlCQUFDWCxVQUFTTixTQUFTZ0IsUUFBVCxDQUFWLEVBQThCaEMsS0FBOUIsQ0FBb0NnQixRQUFwQyxFQUE4Q2lCLGlCQUFpQnJDLElBQS9EO0FBQ0g7QUFDRG9CLHFCQUFTZ0IsUUFBVCxJQUFxQlYsTUFBckI7QUFDQSxtQkFBT0gsbUJBQW1CYSxRQUFuQixDQUFQO0FBQ0g7QUFDSixLQWREOztBQWdCQTNNLFNBQUtzQixPQUFMLEdBQWUsWUFBVztBQUN0QnJCLDBCQUFrQkMsR0FBbEIsQ0FBc0IsaUNBQXRCO0FBQ0FGLGFBQUtzRixHQUFMO0FBQ0F0RixhQUFLME0sS0FBTDtBQUNILEtBSkQ7QUFLQSxXQUFPMU0sSUFBUDtBQUNILENBMUZEOztrQkE0RmUwTCxtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdmOztBQUVBOzs7OztBQUtBLElBQU1zQixpQkFBaUIsU0FBakJBLGNBQWlCLEdBQVU7QUFDN0IsUUFBTWhOLE9BQU8sRUFBYjtBQUNBQyxzQkFBa0JDLEdBQWxCLENBQXNCLHdCQUF0QjtBQUNBLFFBQU0rTSxjQUFjLENBQ2hCO0FBQ0lwTCxjQUFNLE9BRFY7QUFFSXFMLHNCQUFjLHNCQUFVQyxNQUFWLEVBQWtCO0FBQzVCLGdCQUFNQyxZQUFZO0FBQ2RDLHFCQUFLLFdBRFM7QUFFZEMscUJBQUssV0FGUztBQUdkQyxxQkFBSyxXQUhTO0FBSWRDLHFCQUFLLFdBSlM7QUFLZEMscUJBQUssV0FMUztBQU1kQyxxQkFBSyxZQU5TO0FBT2RDLHNCQUFNLFlBUFE7QUFRZEMscUJBQUssV0FSUztBQVNkQyxxQkFBSyxXQVRTO0FBVWRDLHFCQUFLLFdBVlM7QUFXZEMsd0JBQVEsV0FYTTtBQVlkQyxzQkFBTSxZQVpRO0FBYWRDLHFCQUFLLFdBYlM7QUFjZEMsc0JBQU0sK0JBZFE7QUFlZEMscUJBQUssK0JBZlM7QUFnQmRDLHFCQUFLO0FBaEJTLGFBQWxCOztBQW1CQSxnQkFBTUMsUUFBUSxZQUFVO0FBQ3BCLHVCQUFPQyxTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQVA7QUFDSCxhQUZhLEVBQWQ7QUFHQSxnQkFBSSxDQUFDRixNQUFNRyxXQUFYLEVBQXdCO0FBQ3BCLHVCQUFPLEtBQVA7QUFDSDs7QUFFRCxnQkFBTUMsT0FBT3RCLE9BQU9zQixJQUFwQjtBQUNBLGdCQUFNQyxPQUFPdkIsT0FBT3VCLElBQXBCO0FBQ0EsZ0JBQUcsQ0FBQ0EsSUFBSixFQUFTO0FBQUMsdUJBQU8sS0FBUDtBQUFjO0FBQ3hCLGdCQUFNQyxXQUFXeEIsT0FBT3dCLFFBQVAsSUFBbUJ2QixVQUFVc0IsSUFBVixDQUFwQzs7QUFFQSxnQkFBSSx1QkFBT0QsSUFBUCxFQUFhQyxJQUFiLENBQUosRUFBd0I7QUFDcEIsdUJBQU8sS0FBUDtBQUNIOztBQUVELGdCQUFHLHlCQUFTRCxJQUFULEVBQWVDLElBQWYsQ0FBSCxFQUF3QjtBQUNwQix1QkFBTyxLQUFQO0FBQ0g7O0FBRUQsZ0JBQUksQ0FBQ0MsUUFBTCxFQUFlO0FBQ1gsdUJBQU8sS0FBUDtBQUNIOztBQUVELG1CQUFPLENBQUMsQ0FBQ04sTUFBTUcsV0FBTixDQUFrQkcsUUFBbEIsQ0FBVDtBQUNIO0FBL0NMLEtBRGdCLEVBa0RoQjtBQUNJOU0sY0FBTSxRQURWO0FBRUlxTCxzQkFBYyxzQkFBVUMsTUFBVixFQUFrQjtBQUM1QixnQkFBTWtCLFFBQVEsWUFBVTtBQUNwQix1QkFBT0MsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUFQO0FBQ0gsYUFGYSxFQUFkO0FBR0EsZ0JBQUksQ0FBQ0YsTUFBTUcsV0FBWCxFQUF3QjtBQUNwQix1QkFBTyxLQUFQO0FBQ0g7O0FBRUQsZ0JBQU1DLE9BQU90QixPQUFPc0IsSUFBcEI7QUFDQSxnQkFBTUMsT0FBT3ZCLE9BQU91QixJQUFwQjs7QUFFQSxnQkFBRyx5QkFBU0QsSUFBVCxFQUFlQyxJQUFmLENBQUgsRUFBd0I7QUFDcEIsdUJBQU8sSUFBUDtBQUNILGFBRkQsTUFFSztBQUNELHVCQUFPLEtBQVA7QUFDSDtBQUNKO0FBbEJMLEtBbERnQixFQXNFaEI7QUFDSTdNLGNBQU0sTUFEVjtBQUVJcUwsc0JBQWMsc0JBQVVDLE1BQVYsRUFBa0I7QUFDNUIsZ0JBQU1zQixPQUFPdEIsT0FBT3NCLElBQXBCOztBQUVBO0FBQ0EsZ0JBQU1DLE9BQU92QixPQUFPdUIsSUFBcEI7QUFDQSxnQkFBSSx1QkFBT0QsSUFBUCxFQUFhQyxJQUFiLENBQUosRUFBd0I7QUFDcEIsdUJBQU8sSUFBUDtBQUNILGFBRkQsTUFFSztBQUNELHVCQUFPLEtBQVA7QUFDSDtBQUNKO0FBWkwsS0F0RWdCLEVBb0ZoQjtBQUNJN00sY0FBTSxLQURWO0FBRUlxTCxzQkFBYyxzQkFBVUMsTUFBVixFQUFrQjtBQUM1QixnQkFBTWtCLFFBQVEsWUFBVTtBQUNwQix1QkFBT0MsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUFQO0FBQ0gsYUFGYSxFQUFkOztBQUlBO0FBQ0EsZ0JBQU1LLGVBQWUsU0FBZkEsWUFBZSxHQUFLO0FBQ3JCLHlCQUFTQyxjQUFULEdBQTBCO0FBQ3ZCLHdCQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDL0IsK0JBQU9BLE9BQU9DLFdBQVAsSUFBc0JELE9BQU9FLGlCQUFwQztBQUNIO0FBQ0o7QUFDRCxvQkFBSUMsY0FBY0osZ0JBQWxCO0FBQ0Esb0JBQUlLLGVBQWVKLE9BQU9LLFlBQVAsSUFBdUJMLE9BQU9NLGtCQUFqRDtBQUNBLG9CQUFJQyxrQkFBa0JKLGVBQWUsT0FBT0EsWUFBWUksZUFBbkIsS0FBdUMsVUFBdEQsSUFBb0VKLFlBQVlJLGVBQVosQ0FBNEIsMkNBQTVCLENBQTFGOztBQUVBO0FBQ0E7QUFDQSxvQkFBSUMsdUJBQXVCLENBQUNKLFlBQUQsSUFBaUJBLGFBQWFoRCxTQUFiLElBQTBCLE9BQU9nRCxhQUFhaEQsU0FBYixDQUF1QnFELFlBQTlCLEtBQStDLFVBQXpFLElBQXVGLE9BQU9MLGFBQWFoRCxTQUFiLENBQXVCOUcsTUFBOUIsS0FBeUMsVUFBNUs7QUFDQSx1QkFBTyxDQUFDLENBQUNpSyxlQUFGLElBQXFCLENBQUMsQ0FBQ0Msb0JBQTlCO0FBQ0gsYUFkRDtBQWVBO0FBQ0EsbUJBQU9WLGtCQUFrQixDQUFDLENBQUNQLE1BQU1HLFdBQU4sQ0FBa0IsK0JBQWxCLENBQTNCO0FBQ0g7QUF6QkwsS0FwRmdCLEVBK0doQjtBQUNJM00sY0FBTSxNQURWO0FBRUlxTCxzQkFBYyxzQkFBVUMsTUFBVixFQUFrQjtBQUM1QixnQkFBTXNCLE9BQU90QixPQUFPc0IsSUFBcEI7QUFDQSxnQkFBTUMsT0FBT3ZCLE9BQU91QixJQUFwQjtBQUNBLGdCQUFJLHVCQUFPRCxJQUFQLEVBQWFDLElBQWIsQ0FBSixFQUF3QjtBQUNwQix1QkFBTyxJQUFQO0FBQ0gsYUFGRCxNQUVLO0FBQ0QsdUJBQU8sS0FBUDtBQUNIO0FBQ0o7QUFWTCxLQS9HZ0IsQ0FBcEI7O0FBNkhBMU8sU0FBS3dQLHdCQUFMLEdBQWdDLFVBQUNDLE9BQUQsRUFBYTtBQUN6Q3hQLDBCQUFrQkMsR0FBbEIsQ0FBc0IsNkNBQXRCLEVBQXFFdVAsT0FBckU7QUFDQSxZQUFNdEMsU0FBVXNDLFlBQVl6SSxPQUFPeUksT0FBUCxDQUFiLEdBQWdDQSxPQUFoQyxHQUEwQyxFQUF6RDtBQUNBLGFBQUksSUFBSTNPLElBQUksQ0FBWixFQUFlQSxJQUFJbU0sWUFBWWxNLE1BQS9CLEVBQXVDRCxHQUF2QyxFQUE0QztBQUN4QyxnQkFBR21NLFlBQVluTSxDQUFaLEVBQWVvTSxZQUFmLENBQTRCQyxNQUE1QixDQUFILEVBQXVDO0FBQ25DLHVCQUFPRixZQUFZbk0sQ0FBWixFQUFlZSxJQUF0QjtBQUNIO0FBQ0o7QUFDSixLQVJEO0FBU0E3QixTQUFLMFAsMkJBQUwsR0FBbUMsVUFBQzNGLFNBQUQsRUFBZTtBQUM5QzlKLDBCQUFrQkMsR0FBbEIsQ0FBc0IsZ0RBQXRCLEVBQXdFNkosU0FBeEU7QUFDQSxZQUFJNEYsZUFBZSxFQUFuQjtBQUNBLGFBQUssSUFBSTdPLElBQUlpSixVQUFVaEosTUFBdkIsRUFBK0JELEdBQS9CLEdBQXFDO0FBQ2pDLGdCQUFNOE8sT0FBTzdGLFVBQVVqSixDQUFWLENBQWI7QUFDQSxnQkFBSXFNLFNBQVMsRUFBYjtBQUNBLGlCQUFJLElBQUloQyxJQUFJLENBQVosRUFBZUEsSUFBSXlFLEtBQUtoUCxPQUFMLENBQWFHLE1BQWhDLEVBQXdDb0ssR0FBeEMsRUFBNkM7QUFDekNnQyx5QkFBU3lDLEtBQUtoUCxPQUFMLENBQWF1SyxDQUFiLENBQVQ7QUFDQSxvQkFBSWdDLE1BQUosRUFBWTtBQUNSLHdCQUFNMEMsWUFBWTdQLEtBQUt3UCx3QkFBTCxDQUE4QnJDLE1BQTlCLENBQWxCO0FBQ0Esd0JBQUkwQyxTQUFKLEVBQWU7QUFDWEYscUNBQWFoSCxJQUFiLENBQWtCa0gsU0FBbEI7QUFDSDtBQUNKO0FBQ0o7QUFHSjs7QUFFRCxlQUFPRixZQUFQO0FBQ0gsS0FwQkQ7QUFxQkEsV0FBTzNQLElBQVA7QUFDSCxDQS9KRDs7a0JBaUtlZ04sYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4S2Y7QUFDTyxJQUFNOEMsNENBQWtCLFdBQXhCO0FBQ0EsSUFBTUMsa0NBQWEsTUFBbkI7QUFDQSxJQUFNQywwQ0FBaUIsVUFBdkI7QUFDQSxJQUFNQyxzQ0FBZSxRQUFyQjtBQUNBLElBQU1DLHdDQUFnQixTQUF0QjtBQUNBLElBQU1DLG9DQUFjLE9BQXBCO0FBQ0EsSUFBTUMsd0NBQWdCLFNBQXRCO0FBQ0EsSUFBTUMsd0NBQWdCLFNBQXRCOztBQUdQO0FBQ08sSUFBTUMsMENBQWlCLE9BQXZCO0FBQ0EsSUFBTUMsNENBQWtCLFFBQXhCO0FBQ0EsSUFBTUMsd0NBQWdCLE1BQXRCO0FBQ0EsSUFBTUMsc0NBQWUsS0FBckI7QUFDQSxJQUFNOU8sd0NBQWdCLE1BQXRCOztBQUVQO0FBQ08sSUFBTStPLDhDQUFtQlYsY0FBekI7QUFDQSxJQUFNbk4sd0JBQVEsT0FBZDtBQUNBLElBQU13Qyw0QkFBVSxTQUFoQjtBQUNBLElBQU1zTCxzQ0FBZSxNQUFyQjtBQUNBLElBQU1DLG9EQUFzQixZQUE1QjtBQUNBLElBQU1DLHdDQUFnQixjQUF0QjtBQUNBLElBQU1DLDBDQUFpQixRQUF2QjtBQUNBLElBQU1DLDBDQUFpQixRQUF2QjtBQUNBLElBQU0zTyxnREFBb0IsaUJBQTFCOztBQUVBLElBQU1KLHdCQUFRLE9BQWQ7O0FBRVA7QUFDTyxJQUFNZ1Asc0NBQWUsY0FBckI7QUFDQSxJQUFNQyw0Q0FBa0JqQixjQUF4QjtBQUNBLElBQU1rQixzQ0FBZSxPQUFyQjtBQUNBLElBQU1DLG9DQUFjLE1BQXBCOztBQUVBLElBQU1DLDBDQUFpQixlQUF2QjtBQUNBLElBQU1DLHNDQUFlLE1BQXJCO0FBQ0EsSUFBTUMsb0RBQXNCLFlBQTVCO0FBQ0EsSUFBTUMsMENBQWlCLGVBQXZCO0FBQ0EsSUFBTUMsc0NBQWUsTUFBckI7QUFDQSxJQUFNQyxzQ0FBZSxhQUFyQjtBQUNBLElBQU1DLDBDQUFpQixxQkFBdkI7QUFDQSxJQUFNQyx3REFBd0IsNEJBQTlCO0FBQ0EsSUFBTUMsd0RBQXdCLHFCQUE5QjtBQUNBLElBQU1DLG9FQUE4QixZQUFwQztBQUNBLElBQU1DLDREQUEwQixnQkFBaEM7O0FBR0EsSUFBTTdPLGtDQUFhLEdBQW5CO0FBQ0EsSUFBTThPLHNEQUF1QixHQUE3QjtBQUNBLElBQU1DLDBFQUFpQyxHQUF2QztBQUNBLElBQU1DLHNFQUErQixHQUFyQztBQUNBLElBQU1DLG9FQUE4QixHQUFwQztBQUNBLElBQU1oUSxnREFBb0IsR0FBMUI7QUFDQSxJQUFNaVEsc0RBQXVCLEdBQTdCO0FBQ0EsSUFBTUMsMERBQXlCLEdBQS9CO0FBQ0EsSUFBTUMsNERBQTBCLEdBQWhDO0FBQ0EsSUFBTUMsc0ZBQXVDLEdBQTdDO0FBQ0EsSUFBTUMsb0ZBQXNDLEdBQTVDO0FBQ0EsSUFBTUMsZ0ZBQW9DLEdBQTFDO0FBQ0EsSUFBTUMsa0ZBQXFDLEdBQTNDO0FBQ0EsSUFBTUMsa0VBQTZCLEdBQW5DLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RQOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBOzs7OztBQUtBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxHQUFVO0FBQ3RCLFFBQU0zUyxPQUFPLEVBQWI7QUFDQSxRQUFJNFMsa0JBQWtCLEVBQXRCO0FBQ0EsUUFBSUMsaUJBQWlCLCtCQUFyQjs7QUFFQTVTLHNCQUFrQkMsR0FBbEIsQ0FBc0IseUJBQXRCOztBQUVBLFFBQU00UyxtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFTQyxPQUFULEVBQWlCO0FBQ3RDLFlBQUksQ0FBQ0EsT0FBRCxJQUFZLENBQUNBLFFBQVF0RSxJQUFULElBQWlCLEVBQUVzRSxRQUFRQyxJQUFSLElBQWdCRCxRQUFRRSxXQUF4QixJQUF1Q0YsUUFBUUcsTUFBakQsQ0FBakMsRUFBMkY7QUFDdkY7QUFDSDs7QUFFRCxZQUFJL0YsU0FBUyxTQUFjLEVBQWQsRUFBa0IsRUFBRSxXQUFXLEtBQWIsRUFBbEIsRUFBd0M0RixPQUF4QyxDQUFiO0FBQ0E1RixlQUFPc0IsSUFBUCxHQUFjLG1CQUFLLEtBQUt0QixPQUFPc0IsSUFBakIsQ0FBZDs7QUFFQSxZQUFHdEIsT0FBTzZGLElBQVAsSUFBZTdGLE9BQU84RixXQUF0QixJQUFxQzlGLE9BQU8rRixNQUEvQyxFQUFzRDtBQUNsRC9GLG1CQUFPc0IsSUFBUCxHQUFjdEIsT0FBTzZGLElBQVAsR0FBYyxHQUFkLEdBQW9CN0YsT0FBTzhGLFdBQTNCLEdBQXlDLFVBQXpDLEdBQXNEOUYsT0FBTytGLE1BQTNFO0FBQ0EsbUJBQU8vRixPQUFPNkYsSUFBZDtBQUNBLG1CQUFPN0YsT0FBTzhGLFdBQWQ7QUFDQSxtQkFBTzlGLE9BQU8rRixNQUFkO0FBQ0g7O0FBRUQsWUFBTUMsZ0JBQWdCLHlCQUF0Qjs7QUFFQSxZQUFJQSxjQUFjekwsSUFBZCxDQUFtQnlGLE9BQU91QixJQUExQixDQUFKLEVBQXFDO0FBQ2pDO0FBQ0F2QixtQkFBT3dCLFFBQVAsR0FBa0J4QixPQUFPdUIsSUFBekI7QUFDQXZCLG1CQUFPdUIsSUFBUCxHQUFjdkIsT0FBT3VCLElBQVAsQ0FBWTBFLE9BQVosQ0FBb0JELGFBQXBCLEVBQW1DLElBQW5DLENBQWQ7QUFDSDs7QUFFRCxZQUFHLHVCQUFPaEcsT0FBT3NCLElBQWQsQ0FBSCxFQUF1QjtBQUNuQnRCLG1CQUFPdUIsSUFBUCxHQUFjLE1BQWQ7QUFDSCxTQUZELE1BRU0sSUFBRyx5QkFBU3ZCLE9BQU9zQixJQUFoQixDQUFILEVBQXlCO0FBQzNCdEIsbUJBQU91QixJQUFQLEdBQWMsUUFBZDtBQUNILFNBRkssTUFFQSxJQUFHLHVCQUFPdkIsT0FBT3NCLElBQWQsRUFBb0J0QixPQUFPdUIsSUFBM0IsQ0FBSCxFQUFvQztBQUN0Q3ZCLG1CQUFPdUIsSUFBUCxHQUFjLE1BQWQ7QUFDSCxTQUZLLE1BRUEsSUFBSSxDQUFDdkIsT0FBT3VCLElBQVosRUFBa0I7QUFDcEJ2QixtQkFBT3VCLElBQVAsR0FBYywrQkFBaUJ2QixPQUFPc0IsSUFBeEIsQ0FBZDtBQUNIOztBQUVELFlBQUksQ0FBQ3RCLE9BQU91QixJQUFaLEVBQWtCO0FBQ2Q7QUFDSDs7QUFFRDtBQUNBLGdCQUFRdkIsT0FBT3VCLElBQWY7QUFDSSxpQkFBSyxNQUFMO0FBQ0EsaUJBQUssbUJBQUw7QUFDSXZCLHVCQUFPdUIsSUFBUCxHQUFjLEtBQWQ7QUFDQTtBQUNKLGlCQUFLLEtBQUw7QUFDSXZCLHVCQUFPdUIsSUFBUCxHQUFjLEtBQWQ7QUFDQTtBQUNKLGlCQUFLLE1BQUw7QUFDSXZCLHVCQUFPdUIsSUFBUCxHQUFjLE1BQWQ7QUFDQTtBQUNKO0FBQ0k7QUFaUjtBQWNBMUgsZUFBT0MsSUFBUCxDQUFZa0csTUFBWixFQUFvQmpHLE9BQXBCLENBQTRCLFVBQVNDLEdBQVQsRUFBYztBQUN0QyxnQkFBSWdHLE9BQU9oRyxHQUFQLE1BQWdCLEVBQXBCLEVBQXdCO0FBQ3BCLHVCQUFPZ0csT0FBT2hHLEdBQVAsQ0FBUDtBQUNIO0FBQ0osU0FKRDs7QUFNQSxlQUFPZ0csTUFBUDtBQUVILEtBNUREOztBQThEQW5OLFNBQUt5RCxXQUFMLEdBQWtCLFVBQUNXLFFBQUQsRUFBYTtBQUMzQm5FLDBCQUFrQkMsR0FBbEIsQ0FBc0IsZ0NBQXRCLEVBQXdEa0UsUUFBeEQ7QUFDQSxZQUFNaVAsbUJBQW1CLENBQUNoTCxxQkFBRUYsT0FBRixDQUFVL0QsUUFBVixJQUFzQkEsUUFBdEIsR0FBaUMsQ0FBQ0EsUUFBRCxDQUFsQyxFQUE4Q29FLEdBQTlDLENBQWtELFVBQVNvSCxJQUFULEVBQWM7QUFDckYsZ0JBQUcsQ0FBQ3ZILHFCQUFFRixPQUFGLENBQVV5SCxLQUFLMEQsTUFBZixDQUFKLEVBQTRCO0FBQ3hCLHVCQUFPMUQsS0FBSzBELE1BQVo7QUFDSDtBQUNELGdCQUFJQyxlQUFlLFNBQWMsRUFBZCxFQUFpQjtBQUNoQzNTLHlCQUFTLEVBRHVCO0FBRWhDMFMsd0JBQVE7QUFGd0IsYUFBakIsRUFHaEIxRCxJQUhnQixDQUFuQjs7QUFLQSxnQkFBSTJELGFBQWEzUyxPQUFiLEtBQXlCb0csT0FBT3VNLGFBQWEzUyxPQUFwQixDQUExQixJQUEyRCxDQUFDeUgscUJBQUVGLE9BQUYsQ0FBVW9MLGFBQWEzUyxPQUF2QixDQUEvRCxFQUFnRztBQUM1RjJTLDZCQUFhM1MsT0FBYixHQUF1QixDQUFDa1MsaUJBQWlCUyxhQUFhM1MsT0FBOUIsQ0FBRCxDQUF2QjtBQUNIOztBQUVELGdCQUFHLENBQUN5SCxxQkFBRUYsT0FBRixDQUFVb0wsYUFBYTNTLE9BQXZCLENBQUQsSUFBb0MyUyxhQUFhM1MsT0FBYixDQUFxQkcsTUFBckIsS0FBZ0MsQ0FBdkUsRUFBMEU7QUFDdEUsb0JBQUk2TyxLQUFLNEQsTUFBVCxFQUFpQjtBQUNiRCxpQ0FBYTNTLE9BQWIsR0FBdUJnUCxLQUFLNEQsTUFBNUI7QUFDSCxpQkFGRCxNQUVPO0FBQ0hELGlDQUFhM1MsT0FBYixHQUF1QixDQUFDa1MsaUJBQWlCbEQsSUFBakIsQ0FBRCxDQUF2QjtBQUNIO0FBQ0o7O0FBR0QsaUJBQUksSUFBSTlPLElBQUksQ0FBWixFQUFlQSxJQUFJeVMsYUFBYTNTLE9BQWIsQ0FBcUJHLE1BQXhDLEVBQWdERCxHQUFoRCxFQUFxRDtBQUNqRCxvQkFBSXFNLFNBQVNvRyxhQUFhM1MsT0FBYixDQUFxQkUsQ0FBckIsQ0FBYjtBQUNBLG9CQUFJMlMsZUFBZSxFQUFuQjtBQUNBLG9CQUFJLENBQUN0RyxNQUFMLEVBQWE7QUFDVDtBQUNIOztBQUVELG9CQUFJdUcsZ0JBQWdCdkcsT0FBT25NLE9BQTNCO0FBQ0Esb0JBQUkwUyxhQUFKLEVBQW1CO0FBQ2Z2RywyQkFBT25NLE9BQVAsR0FBa0IwUyxjQUFjbE0sUUFBZCxPQUE2QixNQUEvQztBQUNILGlCQUZELE1BRU87QUFDSDJGLDJCQUFPbk0sT0FBUCxHQUFpQixLQUFqQjtBQUNIOztBQUVEO0FBQ0Esb0JBQUksQ0FBQ3VTLGFBQWEzUyxPQUFiLENBQXFCRSxDQUFyQixFQUF3QkksS0FBN0IsRUFBb0M7QUFDaENxUyxpQ0FBYTNTLE9BQWIsQ0FBcUJFLENBQXJCLEVBQXdCSSxLQUF4QixHQUFnQ3FTLGFBQWEzUyxPQUFiLENBQXFCRSxDQUFyQixFQUF3QjROLElBQXhCLEdBQTZCLEdBQTdCLEdBQWlDNU4sRUFBRTBHLFFBQUYsRUFBakU7QUFDSDs7QUFFRGlNLCtCQUFlWCxpQkFBaUJTLGFBQWEzUyxPQUFiLENBQXFCRSxDQUFyQixDQUFqQixDQUFmO0FBQ0Esb0JBQUcrUixlQUFlckQsd0JBQWYsQ0FBd0NpRSxZQUF4QyxDQUFILEVBQXlEO0FBQ3JERixpQ0FBYTNTLE9BQWIsQ0FBcUJFLENBQXJCLElBQTBCMlMsWUFBMUI7QUFDSCxpQkFGRCxNQUVLO0FBQ0RGLGlDQUFhM1MsT0FBYixDQUFxQkUsQ0FBckIsSUFBMEIsSUFBMUI7QUFDSDtBQUNKOztBQUVEeVMseUJBQWEzUyxPQUFiLEdBQXVCMlMsYUFBYTNTLE9BQWIsQ0FBcUJ3SCxNQUFyQixDQUE0QjtBQUFBLHVCQUFVLENBQUMsQ0FBQytFLE1BQVo7QUFBQSxhQUE1QixDQUF2Qjs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUFXQSxnQkFBRyxDQUFDOUUscUJBQUVGLE9BQUYsQ0FBVW9MLGFBQWFELE1BQXZCLENBQUosRUFBbUM7QUFDL0JDLDZCQUFhRCxNQUFiLEdBQXNCLEVBQXRCO0FBQ0g7QUFDRCxnQkFBR2pMLHFCQUFFRixPQUFGLENBQVVvTCxhQUFhSSxRQUF2QixDQUFILEVBQW9DO0FBQ2hDSiw2QkFBYUQsTUFBYixHQUFzQkMsYUFBYUQsTUFBYixDQUFvQk0sTUFBcEIsQ0FBMkJMLGFBQWFJLFFBQXhDLENBQXRCO0FBQ0EsdUJBQU9KLGFBQWFJLFFBQXBCO0FBQ0g7O0FBRURKLHlCQUFhRCxNQUFiLEdBQXNCQyxhQUFhRCxNQUFiLENBQW9COUssR0FBcEIsQ0FBd0IsVUFBU3FMLEtBQVQsRUFBZTtBQUN6RCxvQkFBRyxDQUFDQSxLQUFELElBQVUsQ0FBQ0EsTUFBTXBGLElBQXBCLEVBQXlCO0FBQ3JCLDJCQUFPLEtBQVA7QUFDSDtBQUNELHVCQUFPLFNBQWMsRUFBZCxFQUFrQjtBQUNyQiw0QkFBUSxVQURhO0FBRXJCLCtCQUFXO0FBRlUsaUJBQWxCLEVBR0pvRixLQUhJLENBQVA7QUFJSCxhQVJxQixFQVFuQnpMLE1BUm1CLENBUVo7QUFBQSx1QkFBUyxDQUFDLENBQUN5TCxLQUFYO0FBQUEsYUFSWSxDQUF0Qjs7QUFVQSxtQkFBT04sWUFBUDtBQUNILFNBbEZ3QixDQUF6QjtBQW1GQVgsMEJBQWtCUyxnQkFBbEI7QUFDQSxlQUFPQSxnQkFBUDtBQUNILEtBdkZEO0FBd0ZBclQsU0FBS29CLFdBQUwsR0FBbUIsWUFBTTtBQUNyQm5CLDBCQUFrQkMsR0FBbEIsQ0FBc0IsZ0NBQXRCLEVBQXdEMFMsZUFBeEQ7QUFDQSxlQUFPQSxlQUFQO0FBQ0gsS0FIRDtBQUlBNVMsU0FBS3dCLGlCQUFMLEdBQXlCLFlBQU07QUFDM0I7QUFDQXZCLDBCQUFrQkMsR0FBbEIsQ0FBc0Isc0NBQXRCLEVBQThEMFMsZ0JBQWdCLENBQWhCLEVBQW1CaFMsT0FBakY7QUFDQSxlQUFPZ1MsZ0JBQWdCLENBQWhCLEVBQW1CaFMsT0FBMUI7QUFDSCxLQUpEOztBQU1BLFdBQU9aLElBQVA7QUFDSCxDQXhLRDs7a0JBMktlMlMsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckxmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBSUEsSUFBTW1CLGFBQWEsU0FBYkEsVUFBYSxHQUFVO0FBQ3pCLFFBQUlDLGlCQUFpQiwrQkFBckI7QUFDQSxRQUFNdFMsWUFBWSxFQUFsQjs7QUFFQSxRQUFNekIsT0FBTyxFQUFiO0FBQ0FDLHNCQUFrQkMsR0FBbEIsQ0FBc0IsNEJBQXRCOztBQUVBLFFBQU04VCxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNuUyxJQUFELEVBQU9vUyxRQUFQLEVBQW1CO0FBQ3ZDLFlBQUd4UyxVQUFVSSxJQUFWLENBQUgsRUFBbUI7QUFDZjtBQUNIO0FBQ0Q1QiwwQkFBa0JDLEdBQWxCLENBQXNCLHlDQUF0QixFQUFpRTJCLElBQWpFO0FBQ0FKLGtCQUFVSSxJQUFWLElBQWtCb1MsUUFBbEI7QUFDSCxLQU5EOztBQVFBLFFBQU1DLGlCQUFnQjtBQUNsQkMsZUFBTyxpQkFBVztBQUNkLG1CQUFPLGlRQUE2QyxVQUFTQyxPQUFULEVBQWtCO0FBQzlELG9CQUFNSCxXQUFXLG1CQUFBRyxDQUFRLHNFQUFSLEVBQW9DcFQsT0FBckQ7QUFDQWdULGdDQUFnQixPQUFoQixFQUF5QkMsUUFBekI7QUFDQSx1QkFBT0EsUUFBUDtBQUNILGFBSkUseUNBSUEsVUFBU0ksR0FBVCxFQUFhO0FBQ1osc0JBQU0sSUFBSUMsS0FBSixDQUFVLGVBQVYsQ0FBTjtBQUNILGFBTkUsQ0FBUDtBQVFILFNBVmlCO0FBV2xCQyxnQkFBUyxrQkFBVTtBQUNmLG1CQUFPLG1SQUE4QyxVQUFTSCxPQUFULEVBQWtCO0FBQy9ELG9CQUFNSCxXQUFXLG1CQUFBRyxDQUFRLHdFQUFSLEVBQXFDcFQsT0FBdEQ7QUFDQWdULGdDQUFnQixRQUFoQixFQUEwQkMsUUFBMUI7QUFDQSx1QkFBT0EsUUFBUDtBQUNILGFBSkUseUNBSUEsVUFBU0ksR0FBVCxFQUFhO0FBQ1osc0JBQU0sSUFBSUMsS0FBSixDQUFVLGVBQVYsQ0FBTjtBQUNILGFBTkUsQ0FBUDtBQVFILFNBcEJpQjtBQXFCbEJFLGNBQU8sZ0JBQVU7QUFDYixtQkFBTywrUUFBNEMsVUFBU0osT0FBVCxFQUFrQjtBQUM3RCxvQkFBTUgsV0FBVyxtQkFBQUcsQ0FBUSxvRUFBUixFQUFtQ3BULE9BQXBEO0FBQ0FnVCxnQ0FBZ0IsTUFBaEIsRUFBd0JDLFFBQXhCO0FBQ0EsdUJBQU9BLFFBQVA7QUFDSCxhQUpFLHlDQUlBLFVBQVNJLEdBQVQsRUFBYTtBQUNaLHNCQUFNLElBQUlDLEtBQUosQ0FBVSxlQUFWLENBQU47QUFDSCxhQU5FLENBQVA7QUFRSCxTQTlCaUI7QUErQmxCbEcsYUFBTSxlQUFVO0FBQ1osbUJBQU8sNlFBQTJDLFVBQVNnRyxPQUFULEVBQWtCO0FBQzVELG9CQUFNSCxXQUFXLG1CQUFBRyxDQUFRLGtFQUFSLEVBQWtDcFQsT0FBbkQ7QUFDQWdULGdDQUFnQixLQUFoQixFQUF1QkMsUUFBdkI7QUFDQSx1QkFBT0EsUUFBUDtBQUNILGFBSkUseUNBSUEsVUFBU0ksR0FBVCxFQUFhO0FBQ1osc0JBQU0sSUFBSUMsS0FBSixDQUFVLGVBQVYsQ0FBTjtBQUNILGFBTkUsQ0FBUDtBQVFILFNBeENpQjtBQXlDbEJHLGNBQU8sZ0JBQVU7QUFDYixtQkFBTyx5SEFBNEMsVUFBU0wsT0FBVCxFQUFrQjtBQUM3RCxvQkFBTUgsV0FBVyxtQkFBQUcsQ0FBUSxvRUFBUixFQUFtQ3BULE9BQXBEO0FBQ0FnVCxnQ0FBZ0IsTUFBaEIsRUFBd0JDLFFBQXhCO0FBQ0EsdUJBQU9BLFFBQVA7QUFDSCxhQUpFLHlDQUlBLFVBQVNJLEdBQVQsRUFBYTtBQUNaLHNCQUFNLElBQUlDLEtBQUosQ0FBVSxlQUFWLENBQU47QUFDSCxhQU5FLENBQVA7QUFRSDtBQWxEaUIsS0FBdEI7O0FBc0RBdFUsU0FBS21CLGFBQUwsR0FBcUIsVUFBQ2lELFFBQUQsRUFBYTtBQUM5QixZQUFNc1EseUJBQXlCWCxlQUFlckUsMkJBQWYsQ0FBMkN0TCxRQUEzQyxDQUEvQjtBQUNBbkUsMEJBQWtCQyxHQUFsQixDQUFzQixxQ0FBdEIsRUFBNkR3VSxzQkFBN0Q7QUFDQSxlQUFPQyxrQkFBUTVKLEdBQVIsQ0FDSDJKLHVCQUF1QnRNLE1BQXZCLENBQThCLFVBQVN3TSxZQUFULEVBQXNCO0FBQ2hELG1CQUFPLENBQUMsQ0FBQ1YsZUFBZVUsWUFBZixDQUFUO0FBQ0gsU0FGRCxFQUVHcE0sR0FGSCxDQUVPLFVBQVNvTSxZQUFULEVBQXNCO0FBQ3pCLGdCQUFNWCxXQUFXQyxlQUFlVSxZQUFmLEdBQWpCO0FBQ0EsbUJBQU9YLFFBQVA7QUFDSCxTQUxELENBREcsQ0FBUDtBQVFILEtBWEQ7O0FBYUFqVSxTQUFLNlUsVUFBTCxHQUFrQixVQUFDaFQsSUFBRCxFQUFVO0FBQ3hCNUIsMEJBQWtCQyxHQUFsQixDQUFzQixrQ0FBdEIsRUFBMEQyQixJQUExRDtBQUNBLGVBQU9KLFVBQVVJLElBQVYsQ0FBUDtBQUNILEtBSEQ7O0FBS0E3QixTQUFLOFUsbUJBQUwsR0FBMkIsVUFBQzNILE1BQUQsRUFBWTtBQUNuQyxZQUFNNEgsd0JBQXdCaEIsZUFBZXZFLHdCQUFmLENBQXdDckMsTUFBeEMsQ0FBOUI7QUFDQWxOLDBCQUFrQkMsR0FBbEIsQ0FBc0IsMkNBQXRCLEVBQW1FNlUscUJBQW5FO0FBQ0EsZUFBTy9VLEtBQUs2VSxVQUFMLENBQWdCRSxxQkFBaEIsQ0FBUDtBQUNILEtBSkQ7O0FBTUEvVSxTQUFLK0UsY0FBTCxHQUFzQixVQUFDRixhQUFELEVBQWdCQyxTQUFoQixFQUE4QjtBQUNoRDdFLDBCQUFrQkMsR0FBbEIsQ0FBc0Isc0NBQXRCLEVBQThENlQsZUFBZXZFLHdCQUFmLENBQXdDM0ssYUFBeEMsQ0FBOUQsRUFBdUhrUCxlQUFldkUsd0JBQWYsQ0FBd0MxSyxTQUF4QyxDQUF2SDtBQUNBLGVBQU9pUCxlQUFldkUsd0JBQWYsQ0FBd0MzSyxhQUF4QyxNQUEyRGtQLGVBQWV2RSx3QkFBZixDQUF3QzFLLFNBQXhDLENBQWxFO0FBRUgsS0FKRDs7QUFNQSxXQUFPOUUsSUFBUDtBQUNILENBcEdEOztrQkFzR2U4VCxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlHZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1rQixpQkFBaUIsU0FBakJBLGNBQWlCLENBQVNDLFFBQVQsRUFBbUI7QUFDdEMsUUFBSUMsY0FBYyxLQUFLQSxXQUF2QjtBQUNBLFdBQU8sS0FBSzdULElBQUwsQ0FDSCxVQUFTOFQsS0FBVCxFQUFnQjtBQUNaLGVBQU9ELFlBQVlFLE9BQVosQ0FBb0JILFVBQXBCLEVBQWdDNVQsSUFBaEMsQ0FBcUMsWUFBVztBQUNuRCxtQkFBTzhULEtBQVA7QUFDSCxTQUZNLENBQVA7QUFHSCxLQUxFLEVBTUgsVUFBU2pTLE1BQVQsRUFBaUI7QUFDYixlQUFPZ1MsWUFBWUUsT0FBWixDQUFvQkgsVUFBcEIsRUFBZ0M1VCxJQUFoQyxDQUFxQyxZQUFXO0FBQ25ELG1CQUFPNlQsWUFBWUcsTUFBWixDQUFtQm5TLE1BQW5CLENBQVA7QUFDSCxTQUZNLENBQVA7QUFHSCxLQVZFLENBQVA7QUFZSCxDQWREOztBQWdCQTtBQUNBO0FBQ0EsSUFBTW9TLGlCQUFpQnhHLE9BQU95RyxVQUE5QjtBQUNBLElBQU1DLG1CQUFtQjFHLE9BQU8yRyxZQUFoQzs7QUFFQSxTQUFTQyxJQUFULEdBQWdCLENBQUU7O0FBRWxCO0FBQ0EsU0FBU0MsSUFBVCxDQUFjQyxFQUFkLEVBQWtCQyxPQUFsQixFQUEyQjtBQUN2QixXQUFPLFlBQVc7QUFDZEQsV0FBR2pMLEtBQUgsQ0FBU2tMLE9BQVQsRUFBa0JoTCxTQUFsQjtBQUNILEtBRkQ7QUFHSDs7QUFFRCxJQUFNaUwsY0FBYyxTQUFkQSxXQUFjLENBQVVGLEVBQVYsRUFBYztBQUM5QixRQUFJLEVBQUUsZ0JBQWdCakIsT0FBbEIsQ0FBSixFQUNJLE1BQU0sSUFBSW9CLFNBQUosQ0FBYyxzQ0FBZCxDQUFOO0FBQ0osUUFBSSxPQUFPSCxFQUFQLEtBQWMsVUFBbEIsRUFBOEIsTUFBTSxJQUFJRyxTQUFKLENBQWMsZ0JBQWQsQ0FBTjtBQUM5QixTQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWN6UCxTQUFkO0FBQ0EsU0FBSzBQLFVBQUwsR0FBa0IsRUFBbEI7O0FBRUFDLGNBQVVSLEVBQVYsRUFBYyxJQUFkO0FBQ0gsQ0FWRDs7QUFZQSxJQUFNUyxTQUFTLFNBQVRBLE1BQVMsQ0FBVUMsSUFBVixFQUFnQkMsUUFBaEIsRUFBMEI7QUFDckMsV0FBT0QsS0FBS04sTUFBTCxLQUFnQixDQUF2QixFQUEwQjtBQUN0Qk0sZUFBT0EsS0FBS0osTUFBWjtBQUNIO0FBQ0QsUUFBSUksS0FBS04sTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUNuQk0sYUFBS0gsVUFBTCxDQUFnQnhOLElBQWhCLENBQXFCNE4sUUFBckI7QUFDQTtBQUNIO0FBQ0RELFNBQUtMLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQXRCLFlBQVE2QixZQUFSLENBQXFCLFlBQVc7QUFDNUIsWUFBSUMsS0FBS0gsS0FBS04sTUFBTCxLQUFnQixDQUFoQixHQUFvQk8sU0FBU0csV0FBN0IsR0FBMkNILFNBQVNJLFVBQTdEO0FBQ0EsWUFBSUYsT0FBTyxJQUFYLEVBQWlCO0FBQ2IsYUFBQ0gsS0FBS04sTUFBTCxLQUFnQixDQUFoQixHQUFvQlosT0FBcEIsR0FBOEJDLE1BQS9CLEVBQXVDa0IsU0FBU0ssT0FBaEQsRUFBeUROLEtBQUtKLE1BQTlEO0FBQ0E7QUFDSDtBQUNELFlBQUlXLEdBQUo7QUFDQSxZQUFJO0FBQ0FBLGtCQUFNSixHQUFHSCxLQUFLSixNQUFSLENBQU47QUFDSCxTQUZELENBRUUsT0FBT1ksQ0FBUCxFQUFVO0FBQ1J6QixtQkFBT2tCLFNBQVNLLE9BQWhCLEVBQXlCRSxDQUF6QjtBQUNBO0FBQ0g7QUFDRDFCLGdCQUFRbUIsU0FBU0ssT0FBakIsRUFBMEJDLEdBQTFCO0FBQ0gsS0FkRDtBQWVILENBeEJEOztBQTBCQSxJQUFNekIsVUFBVSxTQUFWQSxPQUFVLENBQVVrQixJQUFWLEVBQWdCUyxRQUFoQixFQUEwQjtBQUN0QyxRQUFJO0FBQ0E7QUFDQSxZQUFJQSxhQUFhVCxJQUFqQixFQUNJLE1BQU0sSUFBSVAsU0FBSixDQUFjLDJDQUFkLENBQU47QUFDSixZQUNJZ0IsYUFDQyxRQUFPQSxRQUFQLHlDQUFPQSxRQUFQLE9BQW9CLFFBQXBCLElBQWdDLE9BQU9BLFFBQVAsS0FBb0IsVUFEckQsQ0FESixFQUdFO0FBQ0UsZ0JBQUkxVixPQUFPMFYsU0FBUzFWLElBQXBCO0FBQ0EsZ0JBQUkwVixvQkFBb0JwQyxPQUF4QixFQUFpQztBQUM3QjJCLHFCQUFLTixNQUFMLEdBQWMsQ0FBZDtBQUNBTSxxQkFBS0osTUFBTCxHQUFjYSxRQUFkO0FBQ0FDLHVCQUFPVixJQUFQO0FBQ0E7QUFDSCxhQUxELE1BS08sSUFBSSxPQUFPalYsSUFBUCxLQUFnQixVQUFwQixFQUFnQztBQUNuQytVLDBCQUFVVCxLQUFLdFUsSUFBTCxFQUFXMFYsUUFBWCxDQUFWLEVBQWdDVCxJQUFoQztBQUNBO0FBQ0g7QUFDSjtBQUNEQSxhQUFLTixNQUFMLEdBQWMsQ0FBZDtBQUNBTSxhQUFLSixNQUFMLEdBQWNhLFFBQWQ7QUFDQUMsZUFBT1YsSUFBUDtBQUNILEtBdEJELENBc0JFLE9BQU9RLENBQVAsRUFBVTtBQUNSekIsZUFBT2lCLElBQVAsRUFBYVEsQ0FBYjtBQUNIO0FBQ0osQ0ExQkQ7O0FBNEJBLElBQU16QixTQUFRLFNBQVJBLE1BQVEsQ0FBVWlCLElBQVYsRUFBZ0JTLFFBQWhCLEVBQTBCO0FBQ3BDVCxTQUFLTixNQUFMLEdBQWMsQ0FBZDtBQUNBTSxTQUFLSixNQUFMLEdBQWNhLFFBQWQ7QUFDQUMsV0FBT1YsSUFBUDtBQUNILENBSkQ7O0FBTUEsSUFBTVUsU0FBUyxTQUFUQSxNQUFTLENBQVVWLElBQVYsRUFBZ0I7QUFDM0IsUUFBSUEsS0FBS04sTUFBTCxLQUFnQixDQUFoQixJQUFxQk0sS0FBS0gsVUFBTCxDQUFnQnBWLE1BQWhCLEtBQTJCLENBQXBELEVBQXVEO0FBQ25ENFQsZ0JBQVE2QixZQUFSLENBQXFCLFlBQVc7QUFDNUIsZ0JBQUksQ0FBQ0YsS0FBS0wsUUFBVixFQUFvQjtBQUNoQnRCLHdCQUFRc0MscUJBQVIsQ0FBOEJYLEtBQUtKLE1BQW5DO0FBQ0g7QUFDSixTQUpEO0FBS0g7O0FBRUQsU0FBSyxJQUFJcFYsSUFBSSxDQUFSLEVBQVdvVyxNQUFNWixLQUFLSCxVQUFMLENBQWdCcFYsTUFBdEMsRUFBOENELElBQUlvVyxHQUFsRCxFQUF1RHBXLEdBQXZELEVBQTREO0FBQ3hEdVYsZUFBT0MsSUFBUCxFQUFhQSxLQUFLSCxVQUFMLENBQWdCclYsQ0FBaEIsQ0FBYjtBQUNIO0FBQ0R3VixTQUFLSCxVQUFMLEdBQWtCLElBQWxCO0FBQ0gsQ0FiRDs7QUFlQSxJQUFNZ0IsVUFBVSxTQUFWQSxPQUFVLENBQVVULFdBQVYsRUFBdUJDLFVBQXZCLEVBQW1DQyxPQUFuQyxFQUE0QztBQUN4RCxTQUFLRixXQUFMLEdBQW1CLE9BQU9BLFdBQVAsS0FBdUIsVUFBdkIsR0FBb0NBLFdBQXBDLEdBQWtELElBQXJFO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixPQUFPQSxVQUFQLEtBQXNCLFVBQXRCLEdBQW1DQSxVQUFuQyxHQUFnRCxJQUFsRTtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNILENBSkQ7O0FBTUE7Ozs7OztBQU1BLElBQU1SLFlBQVksU0FBWkEsU0FBWSxDQUFVUixFQUFWLEVBQWNVLElBQWQsRUFBb0I7QUFDbEMsUUFBSWMsT0FBTyxLQUFYO0FBQ0EsUUFBSTtBQUNBeEIsV0FDSSxVQUFTVCxLQUFULEVBQWdCO0FBQ1osZ0JBQUlpQyxJQUFKLEVBQVU7QUFDVkEsbUJBQU8sSUFBUDtBQUNBaEMsb0JBQVFrQixJQUFSLEVBQWNuQixLQUFkO0FBQ0gsU0FMTCxFQU1JLFVBQVNqUyxNQUFULEVBQWlCO0FBQ2IsZ0JBQUlrVSxJQUFKLEVBQVU7QUFDVkEsbUJBQU8sSUFBUDtBQUNBL0IsbUJBQU9pQixJQUFQLEVBQWFwVCxNQUFiO0FBQ0gsU0FWTDtBQVlILEtBYkQsQ0FhRSxPQUFPbVUsRUFBUCxFQUFXO0FBQ1QsWUFBSUQsSUFBSixFQUFVO0FBQ1ZBLGVBQU8sSUFBUDtBQUNBL0IsZUFBT2lCLElBQVAsRUFBYWUsRUFBYjtBQUNIO0FBQ0osQ0FwQkQ7O0FBc0JBdkIsWUFBWTVKLFNBQVosQ0FBc0IsT0FBdEIsSUFBaUMsVUFBU3lLLFVBQVQsRUFBcUI7QUFDbEQsV0FBTyxLQUFLdFYsSUFBTCxDQUFVLElBQVYsRUFBZ0JzVixVQUFoQixDQUFQO0FBQ0gsQ0FGRDs7QUFJQWIsWUFBWTVKLFNBQVosQ0FBc0I3SyxJQUF0QixHQUE2QixVQUFTcVYsV0FBVCxFQUFzQkMsVUFBdEIsRUFBa0M7QUFDM0QsUUFBSVcsT0FBTyxJQUFJLEtBQUtwQyxXQUFULENBQXFCUSxJQUFyQixDQUFYOztBQUVBVyxXQUFPLElBQVAsRUFBYSxJQUFJYyxPQUFKLENBQVlULFdBQVosRUFBeUJDLFVBQXpCLEVBQXFDVyxJQUFyQyxDQUFiO0FBQ0EsV0FBT0EsSUFBUDtBQUNILENBTEQ7O0FBT0F4QixZQUFZNUosU0FBWixDQUFzQixTQUF0QixJQUFtQzhJLGNBQW5DOztBQUVBYyxZQUFZL0ssR0FBWixHQUFrQixVQUFTd00sR0FBVCxFQUFjO0FBQzVCLFdBQU8sSUFBSTVDLE9BQUosQ0FBWSxVQUFTUyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjtBQUN6QyxZQUFJLENBQUNrQyxHQUFELElBQVEsT0FBT0EsSUFBSXhXLE1BQVgsS0FBc0IsV0FBbEMsRUFDSSxNQUFNLElBQUlnVixTQUFKLENBQWMsOEJBQWQsQ0FBTjtBQUNKLFlBQUl4TCxPQUFPckMsTUFBTWdFLFNBQU4sQ0FBZ0I3RSxLQUFoQixDQUFzQnVELElBQXRCLENBQTJCMk0sR0FBM0IsQ0FBWDtBQUNBLFlBQUloTixLQUFLeEosTUFBTCxLQUFnQixDQUFwQixFQUF1QixPQUFPcVUsUUFBUSxFQUFSLENBQVA7QUFDdkIsWUFBSW9DLFlBQVlqTixLQUFLeEosTUFBckI7O0FBRUEsaUJBQVMwVyxHQUFULENBQWEzVyxDQUFiLEVBQWdCMEYsR0FBaEIsRUFBcUI7QUFDakIsZ0JBQUk7QUFDQSxvQkFBSUEsUUFBUSxRQUFPQSxHQUFQLHlDQUFPQSxHQUFQLE9BQWUsUUFBZixJQUEyQixPQUFPQSxHQUFQLEtBQWUsVUFBbEQsQ0FBSixFQUFtRTtBQUMvRCx3QkFBSW5GLE9BQU9tRixJQUFJbkYsSUFBZjtBQUNBLHdCQUFJLE9BQU9BLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7QUFDNUJBLDZCQUFLdUosSUFBTCxDQUNJcEUsR0FESixFQUVJLFVBQVNBLEdBQVQsRUFBYztBQUNWaVIsZ0NBQUkzVyxDQUFKLEVBQU8wRixHQUFQO0FBQ0gseUJBSkwsRUFLSTZPLE1BTEo7QUFPQTtBQUNIO0FBQ0o7QUFDRDlLLHFCQUFLekosQ0FBTCxJQUFVMEYsR0FBVjtBQUNBLG9CQUFJLEVBQUVnUixTQUFGLEtBQWdCLENBQXBCLEVBQXVCO0FBQ25CcEMsNEJBQVE3SyxJQUFSO0FBQ0g7QUFDSixhQWxCRCxDQWtCRSxPQUFPOE0sRUFBUCxFQUFXO0FBQ1RoQyx1QkFBT2dDLEVBQVA7QUFDSDtBQUNKOztBQUVELGFBQUssSUFBSXZXLElBQUksQ0FBYixFQUFnQkEsSUFBSXlKLEtBQUt4SixNQUF6QixFQUFpQ0QsR0FBakMsRUFBc0M7QUFDbEMyVyxnQkFBSTNXLENBQUosRUFBT3lKLEtBQUt6SixDQUFMLENBQVA7QUFDSDtBQUNKLEtBbENNLENBQVA7QUFtQ0gsQ0FwQ0Q7O0FBc0NBZ1YsWUFBWVYsT0FBWixHQUFzQixVQUFTRCxLQUFULEVBQWdCO0FBQ2xDLFFBQUlBLFNBQVMsUUFBT0EsS0FBUCx5Q0FBT0EsS0FBUCxPQUFpQixRQUExQixJQUFzQ0EsTUFBTUQsV0FBTixLQUFzQlAsT0FBaEUsRUFBeUU7QUFDckUsZUFBT1EsS0FBUDtBQUNIOztBQUVELFdBQU8sSUFBSVIsT0FBSixDQUFZLFVBQVNTLE9BQVQsRUFBa0I7QUFDakNBLGdCQUFRRCxLQUFSO0FBQ0gsS0FGTSxDQUFQO0FBR0gsQ0FSRDs7QUFVQVcsWUFBWVQsTUFBWixHQUFxQixVQUFTRixLQUFULEVBQWdCO0FBQ2pDLFdBQU8sSUFBSVIsT0FBSixDQUFZLFVBQVNTLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCO0FBQ3pDQSxlQUFPRixLQUFQO0FBQ0gsS0FGTSxDQUFQO0FBR0gsQ0FKRDs7QUFNQVcsWUFBWTRCLElBQVosR0FBbUIsVUFBU0MsTUFBVCxFQUFpQjtBQUNoQyxXQUFPLElBQUloRCxPQUFKLENBQVksVUFBU1MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDekMsYUFBSyxJQUFJdlUsSUFBSSxDQUFSLEVBQVdvVyxNQUFNUyxPQUFPNVcsTUFBN0IsRUFBcUNELElBQUlvVyxHQUF6QyxFQUE4Q3BXLEdBQTlDLEVBQW1EO0FBQy9DNlcsbUJBQU83VyxDQUFQLEVBQVVPLElBQVYsQ0FBZStULE9BQWYsRUFBd0JDLE1BQXhCO0FBQ0g7QUFDSixLQUpNLENBQVA7QUFLSCxDQU5EOztBQVFBO0FBQ0FTLFlBQVlVLFlBQVosR0FDSyxPQUFPaEIsZ0JBQVAsS0FBNEIsVUFBNUIsSUFDRCxVQUFTSSxFQUFULEVBQWE7QUFDVEoscUJBQWlCSSxFQUFqQjtBQUNILENBSEQsSUFJQSxVQUFTQSxFQUFULEVBQWE7QUFDVEoscUJBQWlCSSxFQUFqQixFQUFxQixDQUFyQjtBQUNILENBUEw7O0FBU0FFLFlBQVltQixxQkFBWixHQUFvQyxTQUFTQSxxQkFBVCxDQUErQjVDLEdBQS9CLEVBQW9DO0FBQ3BFLFFBQUksT0FBT3VELE9BQVAsS0FBbUIsV0FBbkIsSUFBa0NBLE9BQXRDLEVBQStDO0FBQzNDQSxnQkFBUUMsSUFBUixDQUFhLHVDQUFiLEVBQXNEeEQsR0FBdEQsRUFEMkMsQ0FDaUI7QUFDL0Q7QUFDSixDQUpEOztBQU1BLElBQU1NLFVBQVU3RixPQUFPNkYsT0FBUCxLQUFtQjdGLE9BQU82RixPQUFQLEdBQWlCbUIsV0FBcEMsQ0FBaEI7O0FBRU8sSUFBTWdDLDhCQUFXbkQsUUFBUVMsT0FBUixFQUFqQjs7a0JBRVFULE87Ozs7Ozs7Ozs7Ozs7Ozs7QUM1UGY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFHQSxxQkFBQW9ELEdBQTBCLDRCQUFjLGVBQWQsQ0FBMUI7O0FBRUEsSUFBTUMsYUFBYSxFQUFuQjtBQUNBbEosT0FBT2tKLFVBQVAsR0FBb0JBLFVBQXBCOztBQUdBOzs7QUFHQSxTQUFjQSxVQUFkLEVBQTBCelMsb0JBQTFCOztBQUVBeVMsV0FBV0MsTUFBWCxHQUFvQixVQUFVblksU0FBVixFQUFxQndELE9BQXJCLEVBQThCO0FBQzlDLFFBQUk0VSxjQUFjLDBCQUFsQjtBQUNBLFFBQUdBLGdCQUFnQixJQUFuQixFQUF3QixDQUV2QjtBQUNELFFBQUlDLG1CQUFtQiw2Q0FBNEJyWSxTQUE1QixDQUF2Qjs7QUFFQSxRQUFJc1ksU0FBUyxvQkFBS0QsZ0JBQUwsQ0FBYjs7QUFFQSxRQUFNRSxpQkFBaUI5UyxxQkFBYzBTLE1BQWQsQ0FBcUJHLE9BQU9FLHdCQUFQLEVBQXJCLEVBQXdEaFYsT0FBeEQsQ0FBdkI7O0FBRUEsYUFBYytVLGNBQWQsRUFBOEI7QUFDMUI1Uyx3QkFBaUIsMEJBQVU7QUFDeEIsbUJBQU8wUyxpQkFBaUJJLEVBQXhCO0FBQ0g7QUFIMEIsS0FBOUI7O0FBTUFILFdBQU9JLE1BQVAsQ0FBY0gsY0FBZDs7QUFFQSxXQUFPQSxjQUFQO0FBQ0gsQ0FwQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBLHFCQUFBTixHQUEwQiw0QkFBYyxtQkFBZCxDQUExQjs7QUFFQTs7O0FBR0EsSUFBTXhTLGdCQUFnQnVKLE9BQU92SixhQUFQLEdBQXVCLEVBQTdDOztBQUVBLElBQU1rVCxhQUFhbFQsY0FBY2tULFVBQWQsR0FBMkIsRUFBOUM7O0FBRU8sSUFBTUMsb0VBQThCLFNBQTlCQSwyQkFBOEIsQ0FBUzVZLFNBQVQsRUFBb0I7O0FBRTNELFFBQUksQ0FBQ0EsU0FBTCxFQUFnQjs7QUFFWjtBQUNBLGVBQU8sSUFBUDtBQUNIOztBQUVELFFBQUlxWSxtQkFBbUIsSUFBdkI7O0FBRUEsUUFBSSxPQUFPclksU0FBUCxLQUFxQixRQUF6QixFQUFtQzs7QUFFL0JxWSwyQkFBbUI3SixTQUFTcUssY0FBVCxDQUF3QjdZLFNBQXhCLENBQW5CO0FBQ0gsS0FIRCxNQUdPLElBQUlBLFVBQVU4WSxRQUFkLEVBQXdCOztBQUUzQlQsMkJBQW1CclksU0FBbkI7QUFDSCxLQUhNLE1BR0E7QUFDSDtBQUNBLGVBQU8sSUFBUDtBQUNIOztBQUVELFdBQU9xWSxnQkFBUDtBQUNILENBdEJNOztBQXdCUDs7Ozs7O0FBTUE1UyxjQUFjMFMsTUFBZCxHQUF1QixVQUFTblksU0FBVCxFQUFvQndELE9BQXBCLEVBQTZCOztBQUVoRCxRQUFJNlUsbUJBQW1CTyw0QkFBNEI1WSxTQUE1QixDQUF2Qjs7QUFFQSxRQUFNdVksaUJBQWlCLG1CQUFJRixnQkFBSixDQUF2QjtBQUNBRSxtQkFBZWhWLElBQWYsQ0FBb0JDLE9BQXBCOztBQUVBbVYsZUFBVzlQLElBQVgsQ0FBZ0IwUCxjQUFoQjs7QUFFQSxXQUFPQSxjQUFQO0FBQ0gsQ0FWRDs7QUFZQTs7Ozs7QUFLQTlTLGNBQWNzVCxhQUFkLEdBQThCLFlBQVc7O0FBRXJDLFdBQU9KLFVBQVA7QUFDSCxDQUhEOztBQUtBOzs7Ozs7QUFNQWxULGNBQWN1VCxzQkFBZCxHQUF1QyxVQUFTQyxXQUFULEVBQXNCOztBQUV6RCxTQUFLLElBQUlqWSxJQUFJLENBQWIsRUFBZ0JBLElBQUkyWCxXQUFXMVgsTUFBL0IsRUFBdUNELEdBQXZDLEVBQTZDOztBQUV6QyxZQUFJMlgsV0FBVzNYLENBQVgsRUFBYzJFLGNBQWQsT0FBbUNzVCxXQUF2QyxFQUFvRDs7QUFFaEQsbUJBQU9OLFdBQVczWCxDQUFYLENBQVA7QUFDSDtBQUNKOztBQUVELFdBQU8sSUFBUDtBQUNILENBWEQ7O0FBYUE7Ozs7OztBQU1BeUUsY0FBY3lULGdCQUFkLEdBQWlDLFVBQVN6VyxLQUFULEVBQWdCOztBQUU3QyxRQUFNOFYsaUJBQWlCSSxXQUFXbFcsS0FBWCxDQUF2Qjs7QUFFQSxRQUFJOFYsY0FBSixFQUFvQjs7QUFFaEIsZUFBT0EsY0FBUDtBQUNILEtBSEQsTUFHTzs7QUFFSCxlQUFPLElBQVA7QUFDSDtBQUNKLENBWEQ7O0FBYUE7Ozs7OztBQU1BOVMsY0FBY0MsWUFBZCxHQUE2QixVQUFTeVQsUUFBVCxFQUFtQjtBQUM1Q3JCLFlBQVExWCxHQUFSLENBQVkrWSxRQUFaO0FBQ0EsU0FBSyxJQUFJblksSUFBSSxDQUFiLEVBQWdCQSxJQUFJMlgsV0FBVzFYLE1BQS9CLEVBQXVDRCxHQUF2QyxFQUE2Qzs7QUFFekMsWUFBSTJYLFdBQVczWCxDQUFYLEVBQWMyRSxjQUFkLE9BQW1Dd1QsUUFBdkMsRUFBaUQ7O0FBRTdDUix1QkFBVzNMLE1BQVgsQ0FBa0JoTSxDQUFsQixFQUFxQixDQUFyQjtBQUNIO0FBQ0o7QUFFSixDQVZEOztBQVlBOzs7Ozs7QUFNQXlFLGNBQWMyVCxrQkFBZCxHQUFtQyxVQUFTdFksT0FBVCxFQUFrQjtBQUNqRCxXQUFPLENBQUN5SCxxQkFBRUYsT0FBRixDQUFVdkgsT0FBVixJQUFxQkEsT0FBckIsR0FBK0IsQ0FBQ0EsT0FBRCxDQUFoQyxFQUEyQzRILEdBQTNDLENBQStDLFVBQVMyRSxNQUFULEVBQWlCNUssS0FBakIsRUFBdUI7QUFDekUsWUFBRzRLLE9BQU82RixJQUFQLElBQWUseUJBQVM3RixPQUFPNkYsSUFBaEIsQ0FBZixJQUF3QzdGLE9BQU84RixXQUEvQyxJQUE4RDlGLE9BQU8rRixNQUF4RSxFQUErRTtBQUMzRSxtQkFBTyxFQUFDekUsTUFBT3RCLE9BQU82RixJQUFQLEdBQWMsR0FBZCxHQUFvQjdGLE9BQU84RixXQUEzQixHQUF5QyxHQUF6QyxHQUErQzlGLE9BQU8rRixNQUE5RCxFQUFzRXhFLE1BQU8sUUFBN0UsRUFBdUZ4TixPQUFRaU0sT0FBT2pNLEtBQVAsR0FBZWlNLE9BQU9qTSxLQUF0QixHQUE4QixhQUFXcUIsUUFBTSxDQUFqQixDQUE3SCxFQUFQO0FBQ0g7QUFDSixLQUpNLENBQVA7QUFLSCxDQU5EOztrQkFRZWdELGE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUlmOzs7O0FBS08sSUFBTTRULGtDQUFhLFNBQWJBLFVBQWEsR0FBVTtBQUNoQyxRQUFHLENBQUNDLFVBQVVDLFNBQVYsQ0FBb0I1UixPQUFwQixDQUE0QixPQUE1QixLQUF3QzJSLFVBQVVDLFNBQVYsQ0FBb0I1UixPQUFwQixDQUE0QixLQUE1QixDQUF6QyxLQUFnRixDQUFDLENBQXBGLEVBQXVGO0FBQ25GLGVBQU8sT0FBUDtBQUNILEtBRkQsTUFFTSxJQUFHMlIsVUFBVUMsU0FBVixDQUFvQjVSLE9BQXBCLENBQTRCLFFBQTVCLEtBQXlDLENBQUMsQ0FBN0MsRUFBZ0Q7QUFDbEQsZUFBTyxRQUFQO0FBQ0gsS0FGSyxNQUVBLElBQUcyUixVQUFVQyxTQUFWLENBQW9CNVIsT0FBcEIsQ0FBNEIsUUFBNUIsS0FBeUMsQ0FBQyxDQUE3QyxFQUErQztBQUNqRCxlQUFPLFFBQVA7QUFDSCxLQUZLLE1BRUEsSUFBRzJSLFVBQVVDLFNBQVYsQ0FBb0I1UixPQUFwQixDQUE0QixTQUE1QixLQUEwQyxDQUFDLENBQTlDLEVBQWlEO0FBQ25ELGVBQU8sU0FBUDtBQUNILEtBRkssTUFFQSxJQUFJMlIsVUFBVUMsU0FBVixDQUFvQjVSLE9BQXBCLENBQTRCLE1BQTVCLEtBQXVDLENBQUMsQ0FBNUMsRUFBZ0Q7QUFDbEQsWUFBSTZSLE9BQU9GLFVBQVVDLFNBQVYsQ0FBb0I1UixPQUFwQixDQUE0QixNQUE1QixDQUFYO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0EsWUFBSThSLEtBQU0sWUFBVTs7QUFFaEIsZ0JBQUlDLEtBQUo7QUFBQSxnQkFDSUMsSUFBSSxDQURSO0FBQUEsZ0JBRUlDLE1BQU1wTCxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBRlY7QUFBQSxnQkFHSXhELE1BQU0yTyxJQUFJQyxvQkFBSixDQUF5QixHQUF6QixDQUhWOztBQUtBLG1CQUNJRCxJQUFJRSxTQUFKLEdBQWdCLG1CQUFvQixFQUFFSCxDQUF0QixHQUEyQix1QkFBM0MsRUFDSTFPLElBQUksQ0FBSixDQUZSOztBQUtBLG1CQUFPME8sSUFBSSxDQUFKLEdBQVFBLENBQVIsR0FBWUQsS0FBbkI7QUFFSCxTQWRTLEVBQVY7QUFlQSxZQUFHRCxLQUFLLENBQVIsRUFBVTtBQUNOLG1CQUFPLE9BQVA7QUFDSCxTQUZELE1BRUs7QUFDRCxtQkFBTyxVQUFQO0FBQ0g7QUFFSixLQWxDSyxNQWtDRDtBQUNELGVBQU8sU0FBUDtBQUNIO0FBRUosQ0EvQ00sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7Ozs7OztBQUVBOzs7Ozs7QUFPQSxJQUFNTSxNQUFNLFNBQU5BLEdBQU0sQ0FBU0MsaUJBQVQsRUFBMkI7QUFDbkMsUUFBTTlaLE9BQU8sRUFBYjtBQUNBLFFBQU0rWixhQUFhLFNBQWJBLFVBQWEsQ0FBU0MsUUFBVCxFQUFvQkMsUUFBcEIsRUFBNkI7QUFDNUMsWUFBSUMsV0FBWUYsU0FBU0csZ0JBQVQsQ0FBMEJGLFFBQTFCLENBQWhCO0FBQ0EsWUFBR0MsU0FBU25aLE1BQVQsR0FBa0IsQ0FBckIsRUFBdUI7QUFDbkIsbUJBQU9tWixRQUFQO0FBQ0gsU0FGRCxNQUVLO0FBQ0QsbUJBQU9BLFNBQVMsQ0FBVCxDQUFQO0FBQ0g7QUFFSixLQVJEOztBQVVBLFFBQUlGLFdBQVcsRUFBZjs7QUFFQSxRQUFJM1IscUJBQUUrUixLQUFGLENBQVFOLGlCQUFSLEVBQTJCLFVBQVNsSyxJQUFULEVBQWM7QUFBQyxlQUFPdkgscUJBQUVnUyxTQUFGLENBQVl6SyxJQUFaLENBQVA7QUFBeUIsS0FBbkUsQ0FBSixFQUF5RTtBQUNyRW9LLG1CQUFXRixpQkFBWDtBQUNILEtBRkQsTUFFTSxJQUFHQSxzQkFBc0IsVUFBekIsRUFBb0M7QUFDdENFLG1CQUFXMUwsUUFBWDtBQUNILEtBRkssTUFFQSxJQUFHd0wsc0JBQXNCLFFBQXpCLEVBQWtDO0FBQ3BDRSxtQkFBV2xMLE1BQVg7QUFDSCxLQUZLLE1BRUQ7QUFDRGtMLG1CQUFXRCxXQUFXekwsUUFBWCxFQUFxQndMLGlCQUFyQixDQUFYO0FBQ0g7O0FBR0QsUUFBRyxDQUFDRSxRQUFKLEVBQWE7QUFDVCxlQUFPLElBQVA7QUFDSDs7QUFFRGhhLFNBQUtzYSxJQUFMLEdBQVksVUFBQ0wsUUFBRCxFQUFhO0FBQ3JCLGVBQU9KLElBQUlFLFdBQVdDLFFBQVgsRUFBcUJDLFFBQXJCLENBQUosQ0FBUDtBQUNILEtBRkQ7O0FBSUFqYSxTQUFLdWEsR0FBTCxHQUFXLFVBQUMxWSxJQUFELEVBQU9zVCxLQUFQLEVBQWlCO0FBQ3hCLFlBQUc2RSxTQUFTalosTUFBVCxHQUFrQixDQUFyQixFQUF1QjtBQUNuQmlaLHFCQUFTOVMsT0FBVCxDQUFpQixVQUFTc1QsT0FBVCxFQUFpQjtBQUM5QkEsd0JBQVFDLEtBQVIsQ0FBYzVZLElBQWQsSUFBc0JzVCxLQUF0QjtBQUNILGFBRkQ7QUFHSCxTQUpELE1BSUs7QUFDRDZFLHFCQUFTUyxLQUFULENBQWU1WSxJQUFmLElBQXVCc1QsS0FBdkI7QUFDSDtBQUNKLEtBUkQ7O0FBVUFuVixTQUFLMGEsUUFBTCxHQUFnQixVQUFDN1ksSUFBRCxFQUFTO0FBQ3JCLFlBQUdtWSxTQUFTVyxTQUFaLEVBQXNCO0FBQ2xCWCxxQkFBU1csU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIvWSxJQUF2QjtBQUNILFNBRkQsTUFFSztBQUNELGdCQUFJZ1osYUFBYWIsU0FBU2MsU0FBVCxDQUFtQkMsS0FBbkIsQ0FBeUIsR0FBekIsQ0FBakI7QUFDQSxnQkFBR0YsV0FBV3BULE9BQVgsQ0FBbUI1RixJQUFuQixNQUE2QixDQUFDLENBQWpDLEVBQW1DO0FBQy9CbVkseUJBQVNjLFNBQVQsSUFBc0IsTUFBTWpaLElBQTVCO0FBQ0g7QUFDSjtBQUVKLEtBVkQ7O0FBWUE3QixTQUFLZ2IsV0FBTCxHQUFtQixVQUFDblosSUFBRCxFQUFTO0FBQ3hCLFlBQUltWSxTQUFTVyxTQUFiLEVBQXVCO0FBQ25CWCxxQkFBU1csU0FBVCxDQUFtQnZWLE1BQW5CLENBQTBCdkQsSUFBMUI7QUFDSCxTQUZELE1BRUs7QUFDRG1ZLHFCQUFTYyxTQUFULEdBQXFCZCxTQUFTYyxTQUFULENBQW1CMUgsT0FBbkIsQ0FBMkIsSUFBSTZILE1BQUosQ0FBVyxZQUFZcFosS0FBS2taLEtBQUwsQ0FBVyxHQUFYLEVBQWdCRyxJQUFoQixDQUFxQixHQUFyQixDQUFaLEdBQXdDLFNBQW5ELEVBQThELElBQTlELENBQTNCLEVBQWdHLEdBQWhHLENBQXJCO0FBRUg7QUFDSixLQVBEOztBQVNBbGIsU0FBS21iLGVBQUwsR0FBdUIsVUFBQ0MsUUFBRCxFQUFjO0FBQ2pDcEIsaUJBQVNtQixlQUFULENBQXlCQyxRQUF6QjtBQUNILEtBRkQ7O0FBSUFwYixTQUFLcWIsSUFBTCxHQUFZLFlBQUs7QUFDYnJCLGlCQUFTUyxLQUFULENBQWVhLE9BQWYsR0FBeUIsT0FBekI7QUFDSCxLQUZEOztBQUlBdGIsU0FBS3ViLElBQUwsR0FBWSxZQUFLO0FBQ2J2QixpQkFBU1MsS0FBVCxDQUFlYSxPQUFmLEdBQXlCLE1BQXpCO0FBQ0gsS0FGRDs7QUFJQXRiLFNBQUt3YixNQUFMLEdBQWMsVUFBQ0MsUUFBRCxFQUFhO0FBQ3ZCekIsaUJBQVNKLFNBQVQsSUFBc0I2QixRQUF0QjtBQUNILEtBRkQ7O0FBSUF6YixTQUFLMGIsSUFBTCxHQUFZLFVBQUNBLElBQUQsRUFBVTtBQUFFO0FBQ3BCLFlBQUdBLElBQUgsRUFBUTtBQUNKMUIscUJBQVMyQixXQUFULEdBQXVCRCxJQUF2QjtBQUNILFNBRkQsTUFFSztBQUNELG1CQUFPMUIsU0FBUzJCLFdBQWhCO0FBQ0g7QUFDSixLQU5EOztBQVFBM2IsU0FBSzRiLFFBQUwsR0FBZ0IsVUFBQy9aLElBQUQsRUFBVTtBQUFFO0FBQ3hCLFlBQUdtWSxTQUFTVyxTQUFaLEVBQXNCO0FBQ2xCLG1CQUFPWCxTQUFTVyxTQUFULENBQW1Ca0IsUUFBbkIsQ0FBNEJoYSxJQUE1QixDQUFQO0FBQ0gsU0FGRCxNQUVLO0FBQ0QsbUJBQU8sSUFBSW9aLE1BQUosQ0FBVyxVQUFVcFosSUFBVixHQUFpQixPQUE1QixFQUFxQyxJQUFyQyxFQUEyQzZGLElBQTNDLENBQWdEc1MsU0FBU25ZLElBQXpELENBQVA7QUFDSDtBQUNKLEtBTkQ7O0FBUUE3QixTQUFLOGIsRUFBTCxHQUFVLFVBQUNDLGNBQUQsRUFBb0I7QUFDMUIsZUFBTy9CLGFBQWErQixjQUFwQjtBQUNILEtBRkQ7O0FBSUEvYixTQUFLZ2MsTUFBTCxHQUFjLFlBQUs7QUFBSztBQUNwQixZQUFJQyxPQUFPakMsU0FBU2tDLHFCQUFULEVBQVg7O0FBRUEsZUFBTztBQUNIQyxpQkFBS0YsS0FBS0UsR0FBTCxHQUFXN04sU0FBUzhOLElBQVQsQ0FBY0MsU0FEM0I7QUFFSEMsa0JBQU1MLEtBQUtLLElBQUwsR0FBWWhPLFNBQVM4TixJQUFULENBQWNHO0FBRjdCLFNBQVA7QUFJSCxLQVBEOztBQVNBdmMsU0FBS3FHLEtBQUwsR0FBYSxZQUFNO0FBQUs7QUFDcEIsZUFBTzJULFNBQVN3QyxXQUFoQjtBQUNILEtBRkQ7O0FBSUF4YyxTQUFLc0csTUFBTCxHQUFjLFlBQU07QUFBSTtBQUNwQixlQUFPMFQsU0FBU3lDLFlBQWhCO0FBQ0gsS0FGRDs7QUFJQXpjLFNBQUswYyxJQUFMLEdBQVksVUFBQ0EsSUFBRCxFQUFVO0FBQ2xCLGVBQU8xQyxTQUFTMkMsWUFBVCxDQUFzQkQsSUFBdEIsQ0FBUDtBQUNILEtBRkQ7O0FBSUExYyxTQUFLb1QsT0FBTCxHQUFlLFVBQUN3SixJQUFELEVBQVU7QUFDckI1QyxpQkFBUzZDLFdBQVQsQ0FBcUJELElBQXJCO0FBQ0gsS0FGRDs7QUFJQTVjLFNBQUt3YixNQUFMLEdBQWMsVUFBQ29CLElBQUQsRUFBVTtBQUNwQjVDLGlCQUFTOEMsV0FBVCxDQUFxQkYsSUFBckI7QUFDSCxLQUZEOztBQUlBNWMsU0FBS29GLE1BQUwsR0FBYyxZQUFNO0FBQ2hCNFUsaUJBQVM1VSxNQUFUO0FBQ0gsS0FGRDs7QUFJQXBGLFNBQUsrYyxXQUFMLEdBQW1CLFlBQU07QUFDckIsZUFBTy9DLFNBQVNnRCxhQUFULEVBQVAsRUFBaUM7QUFDN0JoRCxxQkFBUytDLFdBQVQsQ0FBcUIvQyxTQUFTaUQsVUFBOUI7QUFDSDtBQUNKLEtBSkQ7O0FBTUFqZCxTQUFLa2QsR0FBTCxHQUFXLFlBQU07QUFDYixlQUFPbEQsUUFBUDtBQUNILEtBRkQ7O0FBSUFoYSxTQUFLbWQsT0FBTCxHQUFlLFVBQUNDLGNBQUQsRUFBb0I7QUFDL0IsZUFBT3BELFNBQVNtRCxPQUFULENBQWlCQyxjQUFqQixDQUFQO0FBQ0gsS0FGRDs7QUFJQSxXQUFPcGQsSUFBUDtBQUNILENBcEpELEMsQ0FaQTs7O2tCQWtLZTZaLEc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEtmOzs7O0FBSUEsSUFBTXdELFNBQVMsU0FBVEEsTUFBUyxHQUFVO0FBQ3JCLFFBQU1yZCxPQUFPLEVBQWI7QUFDQSxRQUFJc2QsaUJBQWlCLElBQXJCOztBQUVBeE8sV0FBTzdPLGlCQUFQLEdBQTJCLEVBQUNDLEtBQU00TyxPQUFPLFNBQVAsRUFBa0IsS0FBbEIsQ0FBUCxFQUEzQjs7QUFFQTlPLFNBQUt1ZCxNQUFMLEdBQWMsWUFBSztBQUNmLFlBQUdELGtCQUFrQixJQUFyQixFQUEwQjtBQUN0QjtBQUNIO0FBQ0RyZCwwQkFBa0IsS0FBbEIsSUFBMkJxZCxjQUEzQjtBQUNILEtBTEQ7QUFNQXRkLFNBQUt3RCxPQUFMLEdBQWUsWUFBSztBQUNoQjhaLHlCQUFpQjFGLFFBQVExWCxHQUF6QjtBQUNBRCwwQkFBa0IsS0FBbEIsSUFBMkIsWUFBVSxDQUFFLENBQXZDO0FBQ0gsS0FIRDtBQUlBRCxTQUFLc0IsT0FBTCxHQUFlLFlBQUs7QUFDaEJ3TixlQUFPN08saUJBQVAsR0FBMkIsSUFBM0I7QUFDSCxLQUZEOztBQUlBLFdBQU9ELElBQVA7QUFDSCxDQXJCRDs7a0JBd0JlcWQsTTs7Ozs7Ozs7Ozs7Ozs7QUM1QmY7Ozs7Ozs7Ozs7QUFVQyxXQUFTRyxNQUFULEVBQWlCO0FBQ2Q7O0FBQ0EsUUFBSSxFQUFFLFlBQVlBLE1BQVosSUFBc0IsY0FBY0EsTUFBdEMsQ0FBSixFQUNJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFJLENBQUNsUCxTQUFTNkwsZ0JBQWQsRUFBZ0M7QUFDNUI3TCxpQkFBUzZMLGdCQUFULEdBQTRCLFVBQVNzRCxTQUFULEVBQW9CO0FBQzVDLGdCQUFJaEQsUUFBUW5NLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUFBLGdCQUE2Q21QLFdBQVcsRUFBeEQ7QUFBQSxnQkFBNERsRCxPQUE1RDtBQUNBbE0scUJBQVNxUCxlQUFULENBQXlCVixVQUF6QixDQUFvQ0gsV0FBcEMsQ0FBZ0RyQyxLQUFoRDtBQUNBbk0scUJBQVNzUCxJQUFULEdBQWdCLEVBQWhCOztBQUVBbkQsa0JBQU1vRCxVQUFOLENBQWlCQyxPQUFqQixHQUEyQkwsWUFBWSwrREFBdkM7QUFDQTNPLG1CQUFPaVAsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNBdEQsa0JBQU11RCxVQUFOLENBQWlCakIsV0FBakIsQ0FBNkJ0QyxLQUE3Qjs7QUFFQSxtQkFBT25NLFNBQVNzUCxJQUFULENBQWM3YyxNQUFyQixFQUE2QjtBQUN6QnlaLDBCQUFVbE0sU0FBU3NQLElBQVQsQ0FBY3ZSLEtBQWQsRUFBVjtBQUNBbU8sd0JBQVFDLEtBQVIsQ0FBY1UsZUFBZCxDQUE4QixPQUE5QjtBQUNBdUMseUJBQVMvVSxJQUFULENBQWM2UixPQUFkO0FBQ0g7QUFDRGxNLHFCQUFTc1AsSUFBVCxHQUFnQixJQUFoQjtBQUNBLG1CQUFPRixRQUFQO0FBQ0gsU0FoQkQ7QUFpQkg7O0FBRUQ7QUFDQTtBQUNBLFFBQUksQ0FBQ3BQLFNBQVMyUCxhQUFkLEVBQTZCO0FBQ3pCM1AsaUJBQVMyUCxhQUFULEdBQXlCLFVBQVNSLFNBQVQsRUFBb0I7QUFDekMsZ0JBQUlDLFdBQVdwUCxTQUFTNkwsZ0JBQVQsQ0FBMEJzRCxTQUExQixDQUFmO0FBQ0EsbUJBQVFDLFNBQVMzYyxNQUFWLEdBQW9CMmMsU0FBUyxDQUFULENBQXBCLEdBQWtDLElBQXpDO0FBQ0gsU0FIRDtBQUlIOztBQUVEO0FBQ0E7QUFDQSxRQUFJLENBQUNwUCxTQUFTNFAsc0JBQWQsRUFBc0M7QUFDbEM1UCxpQkFBUzRQLHNCQUFULEdBQWtDLFVBQVNyRCxVQUFULEVBQXFCO0FBQ25EQSx5QkFBYXNELE9BQU90RCxVQUFQLEVBQW1CekgsT0FBbkIsQ0FBMkIsUUFBM0IsRUFBcUMsR0FBckMsQ0FBYjtBQUNBLG1CQUFPOUUsU0FBUzZMLGdCQUFULENBQTBCVSxVQUExQixDQUFQO0FBQ0gsU0FIRDtBQUlIOztBQUVEO0FBQ0E7QUFDQTJDLFdBQU9ZLElBQVAsR0FBY1osT0FBT1ksSUFBUCxJQUFlLFlBQVc7QUFBRSxjQUFNckksVUFBVSxxQkFBVixDQUFOO0FBQXlDLEtBQW5GO0FBQ0EsS0FDSSxDQUFDLGNBQUQsRUFBaUIsQ0FBakIsQ0FESixFQUVJLENBQUMsZ0JBQUQsRUFBbUIsQ0FBbkIsQ0FGSixFQUdJLENBQUMsV0FBRCxFQUFjLENBQWQsQ0FISixFQUlJLENBQUMsb0JBQUQsRUFBdUIsQ0FBdkIsQ0FKSixFQUtJLENBQUMsdUJBQUQsRUFBMEIsQ0FBMUIsQ0FMSixFQU1JLENBQUMsYUFBRCxFQUFnQixDQUFoQixDQU5KLEVBT0ksQ0FBQyw2QkFBRCxFQUFnQyxDQUFoQyxDQVBKLEVBUUksQ0FBQyxjQUFELEVBQWlCLENBQWpCLENBUkosRUFTSSxDQUFDLGVBQUQsRUFBa0IsQ0FBbEIsQ0FUSixFQVVJLENBQUMsb0JBQUQsRUFBdUIsRUFBdkIsQ0FWSixFQVdJLENBQUMsd0JBQUQsRUFBMkIsRUFBM0IsQ0FYSixFQVlJLENBQUMsZUFBRCxFQUFrQixFQUFsQixDQVpKLEVBYUU3TyxPQWJGLENBYVUsVUFBU21YLENBQVQsRUFBWTtBQUFFLFlBQUksRUFBRUEsRUFBRSxDQUFGLEtBQVFiLE9BQU9ZLElBQWpCLENBQUosRUFBNEJaLE9BQU9ZLElBQVAsQ0FBWUMsRUFBRSxDQUFGLENBQVosSUFBb0JBLEVBQUUsQ0FBRixDQUFwQjtBQUEyQixLQWIvRTs7QUFlQTtBQUNBO0FBQ0FiLFdBQU9jLFlBQVAsR0FBc0JkLE9BQU9jLFlBQVAsSUFBdUIsWUFBVztBQUFFLGNBQU12SSxVQUFVLHFCQUFWLENBQU47QUFBeUMsS0FBbkc7QUFDQSxLQUNJLENBQUMsZ0JBQUQsRUFBbUIsQ0FBbkIsQ0FESixFQUVJLENBQUMsb0JBQUQsRUFBdUIsQ0FBdkIsQ0FGSixFQUdJLENBQUMsdUJBQUQsRUFBMEIsQ0FBMUIsQ0FISixFQUlJLENBQUMsb0JBQUQsRUFBdUIsQ0FBdkIsQ0FKSixFQUtJLENBQUMsdUJBQUQsRUFBMEIsQ0FBMUIsQ0FMSixFQU1JLENBQUMscUJBQUQsRUFBd0IsQ0FBeEIsQ0FOSixFQU9JLENBQUMsNkJBQUQsRUFBZ0MsQ0FBaEMsQ0FQSixFQVFJLENBQUMsZUFBRCxFQUFrQixDQUFsQixDQVJKLEVBU0ksQ0FBQyxtQkFBRCxFQUFzQixDQUF0QixDQVRKLEVBVUksQ0FBQyxxQkFBRCxFQUF3QixFQUF4QixDQVZKLEVBV0ksQ0FBQyxtQkFBRCxFQUFzQixFQUF0QixDQVhKLEVBWUksQ0FBQyxZQUFELEVBQWUsRUFBZixDQVpKLEVBYUksQ0FBQywwQkFBRCxFQUE2QixFQUE3QixDQWJKLEVBY0ksQ0FBQyxlQUFELEVBQWtCLEVBQWxCLENBZEosRUFlSSxDQUFDLG9CQUFELEVBQXVCLEVBQXZCLENBZkosRUFnQkU3TyxPQWhCRixDQWdCVSxVQUFTbVgsQ0FBVCxFQUFZO0FBQUUsWUFBSSxFQUFFQSxFQUFFLENBQUYsS0FBUWIsT0FBT2MsWUFBakIsQ0FBSixFQUFvQ2QsT0FBT2MsWUFBUCxDQUFvQkQsRUFBRSxDQUFGLENBQXBCLElBQTRCQSxFQUFFLENBQUYsQ0FBNUI7QUFBbUMsS0FoQi9GOztBQWtCQTtBQUNBO0FBQ0MsaUJBQVU7QUFDUCxZQUFJLEVBQUUsYUFBYWIsTUFBZixLQUEwQmUsUUFBUXJTLFNBQVIsQ0FBa0JzUyxnQkFBNUMsSUFBZ0UsQ0FBQ3hYLE9BQU95WCxjQUE1RSxFQUNJOztBQUVKOztBQUVBO0FBQ0FDLGNBQU1DLGVBQU4sR0FBd0IsQ0FBeEI7QUFDQUQsY0FBTUUsU0FBTixHQUF3QixDQUF4QjtBQUNBRixjQUFNRyxjQUFOLEdBQXdCLENBQXhCOztBQUVBN1gsZUFBTzhYLGdCQUFQLENBQXdCSixNQUFNeFMsU0FBOUIsRUFBeUM7QUFDckN5Uyw2QkFBaUIsRUFBRXpCLEtBQUssZUFBVztBQUFFLDJCQUFPLENBQVA7QUFBVyxpQkFBL0IsRUFEb0I7QUFFckMwQix1QkFBaUIsRUFBRTFCLEtBQUssZUFBVztBQUFFLDJCQUFPLENBQVA7QUFBVyxpQkFBL0IsRUFGb0I7QUFHckMyQiw0QkFBa0IsRUFBRTNCLEtBQUssZUFBVztBQUFFLDJCQUFPLENBQVA7QUFBVyxpQkFBL0IsRUFIbUI7QUFJckM2QixvQkFBUTtBQUNKN0IscUJBQUssZUFBVztBQUNaLDJCQUFPLEtBQUs4QixVQUFaO0FBQ0gsaUJBSEcsRUFKNkI7QUFRckNDLDJCQUFlO0FBQ1gvQixxQkFBSyxlQUFXO0FBQ1osMkJBQU8sS0FBS2dDLGNBQVo7QUFDSCxpQkFIVSxFQVJzQjtBQVlyQ0Msd0JBQVk7QUFDUmpDLHFCQUFLLGVBQVc7QUFDWiwyQkFBUSxLQUFLOEIsVUFBTCxLQUFvQixLQUFLQyxhQUExQixHQUEyQ1AsTUFBTUUsU0FBakQsR0FBNkRGLE1BQU1HLGNBQTFFO0FBQ0gsaUJBSE8sRUFaeUI7QUFnQnJDTyxxQkFBUztBQUNMbEMscUJBQUssZUFBVztBQUNaLDRCQUFRLEtBQUt4TyxJQUFiO0FBQ0k7QUFDQSw2QkFBSyxPQUFMO0FBQ0EsNkJBQUssVUFBTDtBQUNBLDZCQUFLLFdBQUw7QUFDQSw2QkFBSyxTQUFMO0FBQ0EsNkJBQUssV0FBTDtBQUNBLDZCQUFLLFdBQUw7QUFDQSw2QkFBSyxVQUFMO0FBQ0EsNkJBQUssWUFBTDtBQUNBO0FBQ0EsNkJBQUssU0FBTDtBQUNBLDZCQUFLLFVBQUw7QUFDQSw2QkFBSyxPQUFMO0FBQ0E7QUFDQSw2QkFBSyxRQUFMO0FBQ0EsNkJBQUssUUFBTDtBQUNBO0FBQ0EsNkJBQUssUUFBTDtBQUNBLDZCQUFLLFFBQUw7QUFDQSw2QkFBSyxRQUFMO0FBQ0EsNkJBQUssT0FBTDtBQUNJLG1DQUFPLElBQVA7QUF0QlI7QUF3QkEsMkJBQU8sS0FBUDtBQUNILGlCQTNCSSxFQWhCNEI7QUE0Q3JDMlEsd0JBQVk7QUFDUm5DLHFCQUFLLGVBQVc7QUFDWiw0QkFBUSxLQUFLeE8sSUFBYjtBQUNJO0FBQ0EsNkJBQUssT0FBTDtBQUNBLDZCQUFLLFVBQUw7QUFDQSw2QkFBSyxXQUFMO0FBQ0EsNkJBQUssU0FBTDtBQUNBLDZCQUFLLFdBQUw7QUFDQSw2QkFBSyxVQUFMO0FBQ0EsNkJBQUssWUFBTDtBQUNBO0FBQ0EsNkJBQUssU0FBTDtBQUNBLDZCQUFLLFVBQUw7QUFDQSw2QkFBSyxPQUFMO0FBQ0E7QUFDQSw2QkFBSyxRQUFMO0FBQ0ksbUNBQU8sSUFBUDtBQWZSO0FBaUJBLDJCQUFPLEtBQVA7QUFDSCxpQkFwQk8sRUE1Q3lCO0FBaUVyQzRRLHVCQUFXO0FBQ1BwQyxxQkFBSyxlQUFXO0FBQ1osMkJBQU8sS0FBS3FDLFVBQVo7QUFDSCxpQkFITSxFQWpFMEI7QUFxRXJDQyw2QkFBaUI7QUFDYnJLLHVCQUFPLGlCQUFXO0FBQ2QseUJBQUtzSyxZQUFMLEdBQW9CLElBQXBCO0FBQ0gsaUJBSFksRUFyRW9CO0FBeUVyQ0MsNEJBQWdCO0FBQ1p2Syx1QkFBTyxpQkFBVztBQUNkLHlCQUFLd0ssV0FBTCxHQUFtQixLQUFuQjtBQUNILGlCQUhXLEVBekVxQjtBQTZFckNDLDhCQUFrQjtBQUNkMUMscUJBQUssZUFBVztBQUNaLDJCQUFPLEtBQUt5QyxXQUFMLEtBQXFCLEtBQTVCO0FBQ0gsaUJBSGE7QUE3RW1CLFNBQXpDOztBQW1GQTs7QUFFQSxpQkFBU25CLGdCQUFULENBQTBCOVAsSUFBMUIsRUFBZ0NoRSxRQUFoQyxFQUEwQ21WLFVBQTFDLEVBQXNEO0FBQ2xELGdCQUFJLE9BQU9uVixRQUFQLEtBQW9CLFVBQXhCLEVBQW9DO0FBQ3BDLGdCQUFJZ0UsU0FBUyxrQkFBYixFQUFpQ0EsT0FBTyxNQUFQO0FBQ2pDLGdCQUFJcVEsU0FBUyxJQUFiO0FBQ0EsZ0JBQUllLElBQUksU0FBSkEsQ0FBSSxDQUFTaEosQ0FBVCxFQUFZO0FBQ2hCQSxrQkFBRXlJLFVBQUYsR0FBZVEsS0FBS0MsR0FBTCxFQUFmO0FBQ0FsSixrQkFBRW9JLGNBQUYsR0FBbUJILE1BQW5CO0FBQ0FyVSx5QkFBU0UsSUFBVCxDQUFjLElBQWQsRUFBb0JrTSxDQUFwQjtBQUNBQSxrQkFBRW9JLGNBQUYsR0FBbUIsSUFBbkI7QUFDSCxhQUxEO0FBTUEsaUJBQUssTUFBTXhRLElBQU4sR0FBYWhFLFFBQWxCLElBQThCb1YsQ0FBOUI7QUFDQSxpQkFBS0csV0FBTCxDQUFpQixPQUFPdlIsSUFBeEIsRUFBOEJvUixDQUE5QjtBQUNIOztBQUVELGlCQUFTSSxtQkFBVCxDQUE2QnhSLElBQTdCLEVBQW1DaEUsUUFBbkMsRUFBNkNtVixVQUE3QyxFQUF5RDtBQUNyRCxnQkFBSSxPQUFPblYsUUFBUCxLQUFvQixVQUF4QixFQUFvQztBQUNwQyxnQkFBSWdFLFNBQVMsa0JBQWIsRUFBaUNBLE9BQU8sTUFBUDtBQUNqQyxnQkFBSW9SLElBQUksS0FBSyxNQUFNcFIsSUFBTixHQUFhaEUsUUFBbEIsQ0FBUjtBQUNBLGdCQUFJb1YsQ0FBSixFQUFPO0FBQ0gscUJBQUtLLFdBQUwsQ0FBaUIsT0FBT3pSLElBQXhCLEVBQThCb1IsQ0FBOUI7QUFDQSxxQkFBSyxNQUFNcFIsSUFBTixHQUFhaEUsUUFBbEIsSUFBOEIsSUFBOUI7QUFDSDtBQUNKOztBQUVELFNBQUMwVixNQUFELEVBQVNDLFlBQVQsRUFBdUI5QixPQUF2QixFQUFnQ3JYLE9BQWhDLENBQXdDLFVBQVNvWixDQUFULEVBQVk7QUFDaERBLGNBQUVwVSxTQUFGLENBQVlzUyxnQkFBWixHQUErQkEsZ0JBQS9CO0FBQ0E4QixjQUFFcFUsU0FBRixDQUFZZ1UsbUJBQVosR0FBa0NBLG1CQUFsQztBQUNILFNBSEQ7QUFJSCxLQTVIQSxHQUFEOztBQThIQTtBQUNBO0FBQ0E7QUFDQSxLQUFDLFlBQVk7QUFDVCxZQUFJLGlCQUFpQjFDLE1BQWpCLElBQTJCLE9BQU9BLE9BQU8rQyxXQUFkLEtBQThCLFVBQTdELEVBQ0k7QUFDSixpQkFBU0EsV0FBVCxDQUF1QjlWLEtBQXZCLEVBQThCK1YsTUFBOUIsRUFBdUM7QUFDbkNBLHFCQUFTQSxVQUFVLEVBQUVwQixTQUFTLEtBQVgsRUFBa0JDLFlBQVksS0FBOUIsRUFBcUNvQixRQUFRaGEsU0FBN0MsRUFBbkI7QUFDQSxnQkFBSWlhLE1BQU1wUyxTQUFTcVMsV0FBVCxDQUFzQixhQUF0QixDQUFWO0FBQ0FELGdCQUFJRSxlQUFKLENBQXFCblcsS0FBckIsRUFBNEIrVixPQUFPcEIsT0FBbkMsRUFBNENvQixPQUFPbkIsVUFBbkQsRUFBK0RtQixPQUFPQyxNQUF0RTtBQUNBLG1CQUFPQyxHQUFQO0FBQ0g7QUFDREgsb0JBQVlyVSxTQUFaLEdBQXdCc1IsT0FBT2tCLEtBQVAsQ0FBYXhTLFNBQXJDO0FBQ0FzUixlQUFPK0MsV0FBUCxHQUFxQkEsV0FBckI7QUFDSCxLQVhEOztBQWFBO0FBQ0E7QUFDQTtBQUNBelIsV0FBTytSLFFBQVAsR0FBa0IsVUFBUy9YLEdBQVQsRUFBYzRGLElBQWQsRUFBb0JrSCxFQUFwQixFQUF3QjtBQUN0QyxZQUFJOU0sSUFBSTBWLGdCQUFSLEVBQTBCO0FBQ3RCMVYsZ0JBQUkwVixnQkFBSixDQUFxQjlQLElBQXJCLEVBQTJCa0gsRUFBM0IsRUFBK0IsS0FBL0I7QUFDSCxTQUZELE1BRU8sSUFBSTlNLElBQUltWCxXQUFSLEVBQXFCO0FBQ3hCblgsZ0JBQUksTUFBTTRGLElBQU4sR0FBYWtILEVBQWpCLElBQXVCQSxFQUF2QjtBQUNBOU0sZ0JBQUk0RixPQUFPa0gsRUFBWCxJQUFpQixZQUFXO0FBQ3hCLG9CQUFJa0IsSUFBSWhJLE9BQU9yRSxLQUFmO0FBQ0FxTSxrQkFBRW1JLGFBQUYsR0FBa0JuVyxHQUFsQjtBQUNBZ08sa0JBQUU0SSxjQUFGLEdBQW1CLFlBQVc7QUFBRTVJLHNCQUFFNkksV0FBRixHQUFnQixLQUFoQjtBQUF3QixpQkFBeEQ7QUFDQTdJLGtCQUFFMEksZUFBRixHQUFvQixZQUFXO0FBQUUxSSxzQkFBRTJJLFlBQUYsR0FBaUIsSUFBakI7QUFBd0IsaUJBQXpEO0FBQ0EzSSxrQkFBRWlJLE1BQUYsR0FBV2pJLEVBQUVrSSxVQUFiO0FBQ0FsSSxrQkFBRXdJLFNBQUYsR0FBY1MsS0FBS0MsR0FBTCxFQUFkO0FBQ0FsWCxvQkFBSSxNQUFNNEYsSUFBTixHQUFha0gsRUFBakIsRUFBcUJoTCxJQUFyQixDQUEwQixJQUExQixFQUFnQ2tNLENBQWhDO0FBQ0gsYUFSRDtBQVNBaE8sZ0JBQUltWCxXQUFKLENBQWdCLE9BQU92UixJQUF2QixFQUE2QjVGLElBQUk0RixPQUFPa0gsRUFBWCxDQUE3QjtBQUNIO0FBQ0osS0FoQkQ7O0FBa0JBOUcsV0FBT2dTLFdBQVAsR0FBcUIsVUFBU2hZLEdBQVQsRUFBYzRGLElBQWQsRUFBb0JrSCxFQUFwQixFQUF3QjtBQUN6QyxZQUFJOU0sSUFBSW9YLG1CQUFSLEVBQTZCO0FBQ3pCcFgsZ0JBQUlvWCxtQkFBSixDQUF3QnhSLElBQXhCLEVBQThCa0gsRUFBOUIsRUFBa0MsS0FBbEM7QUFDSCxTQUZELE1BRU8sSUFBSTlNLElBQUlxWCxXQUFSLEVBQXFCO0FBQ3hCclgsZ0JBQUlxWCxXQUFKLENBQWdCLE9BQU96UixJQUF2QixFQUE2QjVGLElBQUk0RixPQUFPa0gsRUFBWCxDQUE3QjtBQUNBOU0sZ0JBQUk0RixPQUFPa0gsRUFBWCxJQUFpQixJQUFqQjtBQUNBOU0sZ0JBQUksTUFBTTRGLElBQU4sR0FBYWtILEVBQWpCLElBQXVCLElBQXZCO0FBQ0g7QUFDSixLQVJEOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0MsaUJBQVc7QUFDUixpQkFBU21MLGdCQUFULENBQTBCVCxDQUExQixFQUE2QmpDLENBQTdCLEVBQWdDO0FBQzVCLHFCQUFTdEQsS0FBVCxDQUFlaUcsQ0FBZixFQUFrQjtBQUFFLHVCQUFPQSxFQUFFamdCLE1BQUYsR0FBV2lnQixFQUFFakcsS0FBRixDQUFRLE1BQVIsQ0FBWCxHQUE2QixFQUFwQztBQUF5Qzs7QUFFN0Q7QUFDQSxxQkFBU2tHLHFCQUFULENBQStCQyxLQUEvQixFQUFzQ0MsTUFBdEMsRUFBOEM7QUFDMUMsb0JBQUlDLFNBQVNyRyxNQUFNb0csTUFBTixDQUFiO0FBQUEsb0JBQ0k1ZSxRQUFRNmUsT0FBTzNaLE9BQVAsQ0FBZXlaLEtBQWYsQ0FEWjtBQUVBLG9CQUFJM2UsVUFBVSxDQUFDLENBQWYsRUFBa0I7QUFDZDZlLDJCQUFPdFUsTUFBUCxDQUFjdkssS0FBZCxFQUFxQixDQUFyQjtBQUNIO0FBQ0QsdUJBQU82ZSxPQUFPbEcsSUFBUCxDQUFZLEdBQVosQ0FBUDtBQUNIOztBQUVEbFUsbUJBQU84WCxnQkFBUCxDQUNJLElBREosRUFFSTtBQUNJL2Qsd0JBQVE7QUFDSm1jLHlCQUFLLGVBQVc7QUFBRSwrQkFBT25DLE1BQU11RixFQUFFakMsQ0FBRixDQUFOLEVBQVl0ZCxNQUFuQjtBQUE0QjtBQUQxQyxpQkFEWjs7QUFLSTZPLHNCQUFNO0FBQ0Z1RiwyQkFBTyxlQUFTa00sR0FBVCxFQUFjO0FBQ2pCLDRCQUFJRCxTQUFTckcsTUFBTXVGLEVBQUVqQyxDQUFGLENBQU4sQ0FBYjtBQUNBLCtCQUFPLEtBQUtnRCxHQUFMLElBQVlBLE1BQU1ELE9BQU9yZ0IsTUFBekIsR0FBa0NxZ0IsT0FBT0MsR0FBUCxDQUFsQyxHQUFnRCxJQUF2RDtBQUNIO0FBSkMsaUJBTFY7O0FBWUl4RiwwQkFBVTtBQUNOMUcsMkJBQU8sZUFBUytMLEtBQVQsRUFBZ0I7QUFDbkJBLGdDQUFRL0MsT0FBTytDLEtBQVAsQ0FBUjtBQUNBLDRCQUFJQSxNQUFNbmdCLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFBRSxrQ0FBTXVnQixhQUFOO0FBQXNCO0FBQ2hELDRCQUFJLEtBQUs1WixJQUFMLENBQVV3WixLQUFWLENBQUosRUFBc0I7QUFBRSxrQ0FBTTVNLE1BQU0sdUJBQU4sQ0FBTjtBQUF1QztBQUMvRCw0QkFBSThNLFNBQVNyRyxNQUFNdUYsRUFBRWpDLENBQUYsQ0FBTixDQUFiOztBQUVBLCtCQUFPK0MsT0FBTzNaLE9BQVAsQ0FBZXlaLEtBQWYsTUFBMEIsQ0FBQyxDQUFsQztBQUNIO0FBUkssaUJBWmQ7O0FBdUJJdEcscUJBQUs7QUFDRHpGLDJCQUFPLGlCQUFTLGFBQWU7QUFDM0IsNEJBQUlpTSxTQUFTbFosTUFBTWdFLFNBQU4sQ0FBZ0I3RSxLQUFoQixDQUFzQnVELElBQXRCLENBQTJCQyxTQUEzQixFQUFzQ3JDLEdBQXRDLENBQTBDMlYsTUFBMUMsQ0FBYjtBQUNBLDRCQUFJaUQsT0FBT0csSUFBUCxDQUFZLFVBQVNMLEtBQVQsRUFBZ0I7QUFBRSxtQ0FBT0EsTUFBTW5nQixNQUFOLEtBQWlCLENBQXhCO0FBQTRCLHlCQUExRCxDQUFKLEVBQWlFO0FBQzdELGtDQUFNdWdCLGFBQU47QUFDSDtBQUNELDRCQUFJRixPQUFPRyxJQUFQLENBQVksVUFBU0wsS0FBVCxFQUFnQjtBQUFFLG1DQUFRLEtBQUQsQ0FBT3haLElBQVAsQ0FBWXdaLEtBQVo7QUFBUDtBQUE0Qix5QkFBMUQsQ0FBSixFQUFpRTtBQUM3RCxrQ0FBTTVNLE1BQU0sdUJBQU4sQ0FBTjtBQUNIOztBQUVELDRCQUFJO0FBQ0EsZ0NBQUlrTixvQkFBb0JsQixFQUFFakMsQ0FBRixDQUF4QjtBQUNBLGdDQUFJb0QsYUFBYTFHLE1BQU15RyxpQkFBTixDQUFqQjtBQUNBSixxQ0FBU0EsT0FBT2haLE1BQVAsQ0FBYyxVQUFTOFksS0FBVCxFQUFnQjtBQUFFLHVDQUFPTyxXQUFXaGEsT0FBWCxDQUFtQnlaLEtBQW5CLE1BQThCLENBQUMsQ0FBdEM7QUFBMEMsNkJBQTFFLENBQVQ7QUFDQSxnQ0FBSUUsT0FBT3JnQixNQUFQLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3JCO0FBQ0g7QUFDRCxnQ0FBSXlnQixrQkFBa0J6Z0IsTUFBbEIsS0FBNkIsQ0FBN0IsSUFBa0MsQ0FBRSxLQUFELENBQVEyRyxJQUFSLENBQWE4WixpQkFBYixDQUF2QyxFQUF3RTtBQUNwRUEscURBQXFCLEdBQXJCO0FBQ0g7QUFDREEsaURBQXFCSixPQUFPbEcsSUFBUCxDQUFZLEdBQVosQ0FBckI7QUFDQW9GLDhCQUFFakMsQ0FBRixJQUFPbUQsaUJBQVA7QUFDSCx5QkFaRCxTQVlVO0FBQ04sZ0NBQUl6Z0IsU0FBU2dhLE1BQU11RixFQUFFakMsQ0FBRixDQUFOLEVBQVl0ZCxNQUF6QjtBQUNBLGdDQUFJLEtBQUtBLE1BQUwsS0FBZ0JBLE1BQXBCLEVBQTRCO0FBQUUscUNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUF1QjtBQUN4RDtBQUNKO0FBMUJBLGlCQXZCVDs7QUFvRElxRSx3QkFBUTtBQUNKK1AsMkJBQU8saUJBQVMsYUFBZTtBQUMzQiw0QkFBSWlNLFNBQVNsWixNQUFNZ0UsU0FBTixDQUFnQjdFLEtBQWhCLENBQXNCdUQsSUFBdEIsQ0FBMkJDLFNBQTNCLEVBQXNDckMsR0FBdEMsQ0FBMEMyVixNQUExQyxDQUFiO0FBQ0EsNEJBQUlpRCxPQUFPRyxJQUFQLENBQVksVUFBU0wsS0FBVCxFQUFnQjtBQUFFLG1DQUFPQSxNQUFNbmdCLE1BQU4sS0FBaUIsQ0FBeEI7QUFBNEIseUJBQTFELENBQUosRUFBaUU7QUFDN0Qsa0NBQU11Z0IsYUFBTjtBQUNIO0FBQ0QsNEJBQUlGLE9BQU9HLElBQVAsQ0FBWSxVQUFTTCxLQUFULEVBQWdCO0FBQUUsbUNBQVEsS0FBRCxDQUFPeFosSUFBUCxDQUFZd1osS0FBWjtBQUFQO0FBQTRCLHlCQUExRCxDQUFKLEVBQWlFO0FBQzdELGtDQUFNNU0sTUFBTSx1QkFBTixDQUFOO0FBQ0g7O0FBRUQsNEJBQUk7QUFDQSxnQ0FBSWtOLG9CQUFvQmxCLEVBQUVqQyxDQUFGLENBQXhCO0FBQ0ErQyxtQ0FBT2xhLE9BQVAsQ0FBZSxVQUFTZ2EsS0FBVCxFQUFnQjtBQUMzQk0sb0RBQW9CUCxzQkFBc0JDLEtBQXRCLEVBQTZCTSxpQkFBN0IsQ0FBcEI7QUFDSCw2QkFGRDtBQUdBbEIsOEJBQUVqQyxDQUFGLElBQU9tRCxpQkFBUDtBQUNILHlCQU5ELFNBTVU7QUFDTixnQ0FBSXpnQixTQUFTZ2EsTUFBTXVGLEVBQUVqQyxDQUFGLENBQU4sRUFBWXRkLE1BQXpCO0FBQ0EsZ0NBQUksS0FBS0EsTUFBTCxLQUFnQkEsTUFBcEIsRUFBNEI7QUFBRSxxQ0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQXVCO0FBQ3hEO0FBQ0o7QUFwQkcsaUJBcERaOztBQTJFSTJnQix3QkFBUTtBQUNKdk0sMkJBQU8sZUFBUytMLEtBQVQsQ0FBYyxXQUFkLEVBQTJCO0FBQzlCLDRCQUFJUyxRQUFROVcsVUFBVSxDQUFWLENBQVo7QUFDQSw0QkFBSTtBQUNBcVcsb0NBQVEvQyxPQUFPK0MsS0FBUCxDQUFSO0FBQ0EsZ0NBQUlBLE1BQU1uZ0IsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUFFLHNDQUFNdWdCLGFBQU47QUFBc0I7QUFDaEQsZ0NBQUksS0FBSzVaLElBQUwsQ0FBVXdaLEtBQVYsQ0FBSixFQUFzQjtBQUFFLHNDQUFNNU0sTUFBTSx1QkFBTixDQUFOO0FBQXVDO0FBQy9ELGdDQUFJOE0sU0FBU3JHLE1BQU11RixFQUFFakMsQ0FBRixDQUFOLENBQWI7QUFBQSxnQ0FDSTliLFFBQVE2ZSxPQUFPM1osT0FBUCxDQUFleVosS0FBZixDQURaOztBQUdBLGdDQUFJM2UsVUFBVSxDQUFDLENBQVgsS0FBaUIsQ0FBQ29mLEtBQUQsSUFBVUEsVUFBVyxLQUFLLENBQTNDLENBQUosRUFBb0Q7QUFDaERyQixrQ0FBRWpDLENBQUYsSUFBTzRDLHNCQUFzQkMsS0FBdEIsRUFBNkJaLEVBQUVqQyxDQUFGLENBQTdCLENBQVA7QUFDQSx1Q0FBTyxLQUFQO0FBQ0g7QUFDRCxnQ0FBSTliLFVBQVUsQ0FBQyxDQUFYLElBQWdCb2YsS0FBcEIsRUFBMkI7QUFDdkIsdUNBQU8sSUFBUDtBQUNIO0FBQ0QsZ0NBQUlILG9CQUFvQmxCLEVBQUVqQyxDQUFGLENBQXhCO0FBQ0EsZ0NBQUltRCxrQkFBa0J6Z0IsTUFBbEIsS0FBNkIsQ0FBN0IsSUFBa0MsQ0FBQyxNQUFNMkcsSUFBTixDQUFXOFosaUJBQVgsQ0FBdkMsRUFBc0U7QUFDbEVBLHFEQUFxQixHQUFyQjtBQUNIO0FBQ0RBLGlEQUFxQk4sS0FBckI7QUFDQVosOEJBQUVqQyxDQUFGLElBQU9tRCxpQkFBUDtBQUNBLG1DQUFPLElBQVA7QUFDSCx5QkFyQkQsU0FxQlU7QUFDTixnQ0FBSXpnQixTQUFTZ2EsTUFBTXVGLEVBQUVqQyxDQUFGLENBQU4sRUFBWXRkLE1BQXpCO0FBQ0EsZ0NBQUksS0FBS0EsTUFBTCxLQUFnQkEsTUFBcEIsRUFBNEI7QUFBRSxxQ0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQXVCO0FBQ3hEO0FBQ0o7QUE1QkcsaUJBM0VaOztBQTBHSXlHLDBCQUFVO0FBQ04yTiwyQkFBTyxpQkFBVztBQUNkLCtCQUFPbUwsRUFBRWpDLENBQUYsQ0FBUDtBQUNIO0FBSEs7QUExR2QsYUFGSjtBQWtIQSxnQkFBSSxFQUFFLFlBQVksSUFBZCxDQUFKLEVBQXlCO0FBQ3JCO0FBQ0EscUJBQUt0ZCxNQUFMLEdBQWNnYSxNQUFNdUYsRUFBRWpDLENBQUYsQ0FBTixFQUFZdGQsTUFBMUI7QUFDSCxhQUhELE1BR087QUFDSDtBQUNBLHFCQUFLLElBQUlELElBQUksQ0FBYixFQUFnQkEsSUFBSSxHQUFwQixFQUF5QixFQUFFQSxDQUEzQixFQUE4QjtBQUMxQmtHLDJCQUFPeVgsY0FBUCxDQUFzQixJQUF0QixFQUE0Qk4sT0FBT3JkLENBQVAsQ0FBNUIsRUFBdUM7QUFDbkNvYyw2QkFBTSxVQUFTMEUsQ0FBVCxFQUFZO0FBQUUsbUNBQU8sWUFBVztBQUFFLHVDQUFPLEtBQUtoUyxJQUFMLENBQVVnUyxDQUFWLENBQVA7QUFBc0IsNkJBQTFDO0FBQTZDLHlCQUEzRCxDQUE0RDlnQixDQUE1RDtBQUQ2QixxQkFBdkM7QUFHSDtBQUNKO0FBQ0o7O0FBRUQsaUJBQVMrZ0IscUJBQVQsQ0FBK0J4RCxDQUEvQixFQUFrQ3lCLENBQWxDLEVBQXFDO0FBQ2pDLGdCQUFJLGFBQWF0QyxNQUFiLElBQXVCZSxRQUFRclMsU0FBL0IsSUFBNENsRixPQUFPeVgsY0FBdkQsRUFBdUU7QUFDbkV6WCx1QkFBT3lYLGNBQVAsQ0FBc0JGLFFBQVFyUyxTQUE5QixFQUF5Q21TLENBQXpDLEVBQTRDLEVBQUVuQixLQUFLNEMsQ0FBUCxFQUE1QztBQUNIO0FBQ0o7O0FBRUQ7QUFDQTtBQUNBLFlBQUksZUFBZXhSLFNBQVNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBbkIsRUFBbUQ7QUFDL0NPLG1CQUFPZ1QsWUFBUCxHQUFzQixVQUFTQyxJQUFULEVBQWU7QUFBRSx1QkFBT0EsS0FBS3BILFNBQVo7QUFBd0IsYUFBL0Q7QUFDSCxTQUZELE1BRU87QUFDSDdMLG1CQUFPZ1QsWUFBUCxHQUFzQixVQUFTQyxJQUFULEVBQWU7QUFBRSx1QkFBTyxJQUFJaEIsZ0JBQUosQ0FBcUJnQixJQUFyQixFQUEyQixXQUEzQixDQUFQO0FBQWlELGFBQXhGO0FBQ0FGLGtDQUFzQixXQUF0QixFQUFtQyxZQUFXO0FBQUUsdUJBQU8sSUFBSWQsZ0JBQUosQ0FBcUIsSUFBckIsRUFBMkIsV0FBM0IsQ0FBUDtBQUFpRCxhQUFqRztBQUNIOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFlBQUksYUFBYXpTLFNBQVNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBakIsRUFBaUQ7QUFDN0NPLG1CQUFPa1QsVUFBUCxHQUFvQixVQUFTRCxJQUFULEVBQWU7QUFBRSx1QkFBT0EsS0FBS0UsT0FBWjtBQUFzQixhQUEzRDtBQUNILFNBRkQsTUFFTztBQUNIblQsbUJBQU9rVCxVQUFQLEdBQW9CLFVBQVNELElBQVQsRUFBZTtBQUFFLHVCQUFPLElBQUloQixnQkFBSixDQUFxQmdCLElBQXJCLEVBQTJCLEtBQTNCLENBQVA7QUFBMkMsYUFBaEY7QUFDQUYsa0NBQXNCLFNBQXRCLEVBQWlDLFlBQVc7QUFBRSx1QkFBTyxJQUFJZCxnQkFBSixDQUFxQixJQUFyQixFQUEyQixLQUEzQixDQUFQO0FBQTJDLGFBQXpGO0FBQ0g7O0FBRUQ7QUFDQyxxQkFBVztBQUNSLGdCQUFJLEVBQUUsa0JBQWtCdkQsTUFBcEIsQ0FBSixFQUFpQztBQUNqQyxnQkFBSTFHLElBQUl4SSxTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBQVI7QUFDQSxnQkFBSSxFQUFFLGVBQWV1SSxDQUFqQixDQUFKLEVBQXlCO0FBQ3pCQSxjQUFFNkQsU0FBRixDQUFZK0csTUFBWixDQUFtQixHQUFuQixFQUF3QixLQUF4QjtBQUNBLGdCQUFJLENBQUM1SyxFQUFFNkQsU0FBRixDQUFZa0IsUUFBWixDQUFxQixHQUFyQixDQUFMLEVBQWdDO0FBQ2hDMkIsbUJBQU8wRSxZQUFQLENBQW9CaFcsU0FBcEIsQ0FBOEJ3VixNQUE5QixHQUF1QyxTQUFTQSxNQUFULENBQWdCUixLQUFoQixDQUFxQixXQUFyQixFQUFrQztBQUNyRSxvQkFBSVMsUUFBUTlXLFVBQVUsQ0FBVixDQUFaO0FBQ0Esb0JBQUk4VyxVQUFVbGIsU0FBZCxFQUF5QjtBQUNyQix3QkFBSW1VLE1BQU0sQ0FBQyxLQUFLaUIsUUFBTCxDQUFjcUYsS0FBZCxDQUFYO0FBQ0EseUJBQUt0RyxNQUFNLEtBQU4sR0FBYyxRQUFuQixFQUE2QnNHLEtBQTdCO0FBQ0EsMkJBQU90RyxHQUFQO0FBQ0g7QUFDRCtHLHdCQUFRLENBQUMsQ0FBQ0EsS0FBVjtBQUNBLHFCQUFLQSxRQUFRLEtBQVIsR0FBZ0IsUUFBckIsRUFBK0JULEtBQS9CO0FBQ0EsdUJBQU9TLEtBQVA7QUFDSCxhQVZEO0FBV0gsU0FqQkEsR0FBRDs7QUFvQkE7QUFDQTtBQUNBOztBQUVBLFlBQUksRUFBRSw0QkFBNEJyVCxTQUFTcVAsZUFBdkMsQ0FBSixFQUE2RDtBQUN6RGtFLGtDQUFzQix3QkFBdEIsRUFBZ0QsWUFBVztBQUN2RCxvQkFBSUQsSUFBSSxLQUFLTyxlQUFiO0FBQ0EsdUJBQU9QLEtBQUtBLEVBQUVoSixRQUFGLEtBQWV3RixLQUFLZ0UsWUFBaEM7QUFDSVIsd0JBQUlBLEVBQUVPLGVBQU47QUFESixpQkFFQSxPQUFPUCxDQUFQO0FBQ0gsYUFMRDtBQU1IOztBQUVELFlBQUksRUFBRSx3QkFBd0J0VCxTQUFTcVAsZUFBbkMsQ0FBSixFQUF5RDtBQUNyRGtFLGtDQUFzQixvQkFBdEIsRUFBNEMsWUFBVztBQUNuRCxvQkFBSUQsSUFBSSxLQUFLUyxXQUFiO0FBQ0EsdUJBQU9ULEtBQUtBLEVBQUVoSixRQUFGLEtBQWV3RixLQUFLZ0UsWUFBaEM7QUFDSVIsd0JBQUlBLEVBQUVTLFdBQU47QUFESixpQkFFQSxPQUFPVCxDQUFQO0FBQ0gsYUFMRDtBQU1IO0FBQ0osS0FoTkEsR0FBRDs7QUFrTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQUksYUFBYXBFLE1BQWIsSUFBdUIsQ0FBQ2UsUUFBUXJTLFNBQVIsQ0FBa0JvVyxPQUE5QyxFQUF1RDtBQUNuRCxZQUFJL0QsUUFBUXJTLFNBQVIsQ0FBa0JxVyxpQkFBdEIsRUFBeUM7QUFDckNoRSxvQkFBUXJTLFNBQVIsQ0FBa0JvVyxPQUFsQixHQUE0Qi9ELFFBQVFyUyxTQUFSLENBQWtCcVcsaUJBQTlDO0FBQ0gsU0FGRCxNQUVPLElBQUloRSxRQUFRclMsU0FBUixDQUFrQnNXLGdCQUF0QixFQUF3QztBQUMzQ2pFLG9CQUFRclMsU0FBUixDQUFrQm9XLE9BQWxCLEdBQTRCL0QsUUFBUXJTLFNBQVIsQ0FBa0JzVyxnQkFBOUM7QUFDSCxTQUZNLE1BRUEsSUFBSWpFLFFBQVFyUyxTQUFSLENBQWtCdVcsa0JBQXRCLEVBQTBDO0FBQzdDbEUsb0JBQVFyUyxTQUFSLENBQWtCb1csT0FBbEIsR0FBNEIvRCxRQUFRclMsU0FBUixDQUFrQnVXLGtCQUE5QztBQUNILFNBRk0sTUFFQSxJQUFJbEUsUUFBUXJTLFNBQVIsQ0FBa0J3VyxxQkFBdEIsRUFBNkM7QUFDaERuRSxvQkFBUXJTLFNBQVIsQ0FBa0JvVyxPQUFsQixHQUE0Qi9ELFFBQVFyUyxTQUFSLENBQWtCd1cscUJBQTlDO0FBQ0gsU0FGTSxNQUVBLElBQUlwVSxTQUFTNkwsZ0JBQWIsRUFBK0I7QUFDbENvRSxvQkFBUXJTLFNBQVIsQ0FBa0JvVyxPQUFsQixHQUE0QixTQUFTQSxPQUFULENBQWlCckksUUFBakIsRUFBMkI7QUFDbkQsb0JBQUlxSSxVQUFVLENBQUMsS0FBS2hVLFFBQUwsSUFBaUIsS0FBS3FVLGFBQXZCLEVBQXNDeEksZ0JBQXRDLENBQXVERixRQUF2RCxDQUFkO0FBQUEsb0JBQ0luWixJQUFJd2hCLFFBQVF2aEIsTUFEaEI7QUFFQSx1QkFBTyxFQUFFRCxDQUFGLElBQU8sQ0FBUCxJQUFZd2hCLFFBQVExUyxJQUFSLENBQWE5TyxDQUFiLE1BQW9CLElBQXZDLEVBQTZDLENBQUU7QUFDL0MsdUJBQU9BLElBQUksQ0FBQyxDQUFaO0FBQ0gsYUFMRDtBQU1IO0FBQ0o7O0FBRUQ7QUFDQTtBQUNBLFFBQUlnTyxPQUFPeVAsT0FBUCxJQUFrQixDQUFDQSxRQUFRclMsU0FBUixDQUFrQmlSLE9BQXpDLEVBQWtEO0FBQzlDb0IsZ0JBQVFyUyxTQUFSLENBQWtCaVIsT0FBbEIsR0FBNEIsVUFBUzZELENBQVQsRUFBWTtBQUNwQyxnQkFBSXNCLFVBQVUsQ0FBQyxLQUFLaFUsUUFBTCxJQUFpQixLQUFLcVUsYUFBdkIsRUFBc0N4SSxnQkFBdEMsQ0FBdUQ2RyxDQUF2RCxDQUFkO0FBQUEsZ0JBQ0lsZ0IsQ0FESjtBQUFBLGdCQUVJOGhCLEtBQUssSUFGVDtBQUdBLGVBQUc7QUFDQzloQixvQkFBSXdoQixRQUFRdmhCLE1BQVo7QUFDQSx1QkFBTyxFQUFFRCxDQUFGLElBQU8sQ0FBUCxJQUFZd2hCLFFBQVExUyxJQUFSLENBQWE5TyxDQUFiLE1BQW9COGhCLEVBQXZDLEVBQTJDLENBQUU7QUFDaEQsYUFIRCxRQUdVOWhCLElBQUksQ0FBTCxLQUFZOGhCLEtBQUtBLEdBQUdDLGFBQXBCLENBSFQ7QUFJQSxtQkFBT0QsRUFBUDtBQUNILFNBVEQ7QUFVSDs7QUFFRCxhQUFTRSxLQUFULENBQWV4QyxDQUFmLEVBQWtCeUMsRUFBbEIsRUFBc0I7QUFDbEIsWUFBSSxDQUFDekMsQ0FBTCxFQUFRO0FBQ1J0WixlQUFPQyxJQUFQLENBQVk4YixFQUFaLEVBQWdCN2IsT0FBaEIsQ0FBd0IsVUFBU21YLENBQVQsRUFBWTtBQUNoQyxnQkFBS0EsS0FBS2lDLENBQU4sSUFBYWpDLEtBQUtpQyxFQUFFcFUsU0FBeEIsRUFBb0M7QUFDcEMsZ0JBQUk7QUFDQWxGLHVCQUFPeVgsY0FBUCxDQUNJNkIsRUFBRXBVLFNBRE4sRUFFSW1TLENBRkosRUFHSXJYLE9BQU9nYyx3QkFBUCxDQUFnQ0QsRUFBaEMsRUFBb0MxRSxDQUFwQyxDQUhKO0FBS0gsYUFORCxDQU1FLE9BQU9oSCxFQUFQLEVBQVc7QUFDVDtBQUNBaUosa0JBQUVqQyxDQUFGLElBQU8wRSxHQUFHMUUsQ0FBSCxDQUFQO0FBQ0g7QUFDSixTQVpEO0FBYUg7O0FBRUQ7QUFDQTs7QUFFQSxhQUFTNEUscUJBQVQsQ0FBK0JDLEtBQS9CLEVBQXNDO0FBQ2xDLFlBQUlDLE9BQU8sSUFBWDtBQUNBRCxnQkFBUUEsTUFBTTFhLEdBQU4sQ0FBVSxVQUFTMmEsSUFBVCxFQUFlO0FBQzdCLG1CQUFPLEVBQUVBLGdCQUFnQi9FLElBQWxCLElBQTBCOVAsU0FBUzhVLGNBQVQsQ0FBd0JELElBQXhCLENBQTFCLEdBQTBEQSxJQUFqRTtBQUNILFNBRk8sQ0FBUjtBQUdBLFlBQUlELE1BQU1uaUIsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUNwQm9pQixtQkFBT0QsTUFBTSxDQUFOLENBQVA7QUFDSCxTQUZELE1BRU87QUFDSEMsbUJBQU83VSxTQUFTK1Usc0JBQVQsRUFBUDtBQUNBSCxrQkFBTWhjLE9BQU4sQ0FBYyxVQUFTMGEsQ0FBVCxFQUFZO0FBQUV1QixxQkFBS3JHLFdBQUwsQ0FBaUI4RSxDQUFqQjtBQUFzQixhQUFsRDtBQUNIO0FBQ0QsZUFBT3VCLElBQVA7QUFDSDs7QUFFRCxRQUFJRyxhQUFhO0FBQ2JDLGlCQUFTLG1CQUFTLFlBQWM7QUFDNUIsZ0JBQUlMLFFBQVEsR0FBRzdiLEtBQUgsQ0FBU3VELElBQVQsQ0FBY0MsU0FBZCxDQUFaO0FBQ0FxWSxvQkFBUUQsc0JBQXNCQyxLQUF0QixDQUFSO0FBQ0EsaUJBQUtNLFlBQUwsQ0FBa0JOLEtBQWxCLEVBQXlCLEtBQUtqRyxVQUE5QjtBQUNILFNBTFk7QUFNYnpCLGdCQUFRLGtCQUFTLFlBQWM7QUFDM0IsZ0JBQUkwSCxRQUFRLEdBQUc3YixLQUFILENBQVN1RCxJQUFULENBQWNDLFNBQWQsQ0FBWjtBQUNBcVksb0JBQVFELHNCQUFzQkMsS0FBdEIsQ0FBUjtBQUNBLGlCQUFLcEcsV0FBTCxDQUFpQm9HLEtBQWpCO0FBQ0g7QUFWWSxLQUFqQjs7QUFhQUosVUFBTXRGLE9BQU9pRyxRQUFQLElBQW1CakcsT0FBTzZDLFlBQWhDLEVBQThDaUQsVUFBOUMsRUExakJjLENBMGpCNkM7QUFDM0RSLFVBQU10RixPQUFPa0csZ0JBQWIsRUFBK0JKLFVBQS9CO0FBQ0FSLFVBQU10RixPQUFPZSxPQUFiLEVBQXNCK0UsVUFBdEI7O0FBRUE7QUFDQTs7QUFFQSxRQUFJSyxZQUFZO0FBQ1pDLGdCQUFRLGtCQUFTLFlBQWM7QUFDM0IsZ0JBQUlWLFFBQVEsR0FBRzdiLEtBQUgsQ0FBU3VELElBQVQsQ0FBY0MsU0FBZCxDQUFaO0FBQ0EsZ0JBQUlnWixTQUFTLEtBQUs3RixVQUFsQjtBQUNBLGdCQUFJLENBQUM2RixNQUFMLEVBQWE7QUFDYixnQkFBSUMsd0JBQXdCLEtBQUszQixlQUFqQztBQUNBLG1CQUFPZSxNQUFNemIsT0FBTixDQUFjcWMscUJBQWQsTUFBeUMsQ0FBQyxDQUFqRDtBQUNJQSx3Q0FBd0JBLHNCQUFzQjNCLGVBQTlDO0FBREosYUFFQSxJQUFJZ0IsT0FBT0Ysc0JBQXNCQyxLQUF0QixDQUFYO0FBQ0FXLG1CQUFPTCxZQUFQLENBQW9CTCxJQUFwQixFQUEwQlcsd0JBQ3RCQSxzQkFBc0J6QixXQURBLEdBQ2N3QixPQUFPNUcsVUFEL0M7QUFFSCxTQVhXO0FBWVo4RyxlQUFPLGlCQUFTLFlBQWM7QUFDMUIsZ0JBQUliLFFBQVEsR0FBRzdiLEtBQUgsQ0FBU3VELElBQVQsQ0FBY0MsU0FBZCxDQUFaO0FBQ0EsZ0JBQUlnWixTQUFTLEtBQUs3RixVQUFsQjtBQUNBLGdCQUFJLENBQUM2RixNQUFMLEVBQWE7QUFDYixnQkFBSUcsb0JBQW9CLEtBQUszQixXQUE3QjtBQUNBLG1CQUFPYSxNQUFNemIsT0FBTixDQUFjdWMsaUJBQWQsTUFBcUMsQ0FBQyxDQUE3QztBQUNJQSxvQ0FBb0JBLGtCQUFrQjNCLFdBQXRDO0FBREosYUFFQSxJQUFJYyxPQUFPRixzQkFBc0JDLEtBQXRCLENBQVg7QUFDQVcsbUJBQU9MLFlBQVAsQ0FBb0JMLElBQXBCLEVBQTBCYSxpQkFBMUI7QUFDSCxTQXJCVztBQXNCWm5ILHFCQUFhLHVCQUFTLFlBQWM7QUFDaEMsZ0JBQUlxRyxRQUFRLEdBQUc3YixLQUFILENBQVN1RCxJQUFULENBQWNDLFNBQWQsQ0FBWjtBQUNBLGdCQUFJZ1osU0FBUyxLQUFLN0YsVUFBbEI7QUFDQSxnQkFBSSxDQUFDNkYsTUFBTCxFQUFhO0FBQ2IsZ0JBQUlHLG9CQUFvQixLQUFLM0IsV0FBN0I7QUFDQSxtQkFBT2EsTUFBTXpiLE9BQU4sQ0FBY3VjLGlCQUFkLE1BQXFDLENBQUMsQ0FBN0M7QUFDSUEsb0NBQW9CQSxrQkFBa0IzQixXQUF0QztBQURKLGFBRUEsSUFBSWMsT0FBT0Ysc0JBQXNCQyxLQUF0QixDQUFYOztBQUVBLGdCQUFJLEtBQUtsRixVQUFMLEtBQW9CNkYsTUFBeEIsRUFDSUEsT0FBT0ksWUFBUCxDQUFvQmQsSUFBcEIsRUFBMEIsSUFBMUIsRUFESixLQUdJVSxPQUFPTCxZQUFQLENBQW9CTCxJQUFwQixFQUEwQmEsaUJBQTFCO0FBQ1AsU0FuQ1c7QUFvQ1o1ZSxnQkFBUSxrQkFBVztBQUNmLGdCQUFJLENBQUMsS0FBSzRZLFVBQVYsRUFBc0I7QUFDdEIsaUJBQUtBLFVBQUwsQ0FBZ0JqQixXQUFoQixDQUE0QixJQUE1QjtBQUNIO0FBdkNXLEtBQWhCOztBQTBDQStGLFVBQU10RixPQUFPMEcsWUFBYixFQUEyQlAsU0FBM0I7QUFDQWIsVUFBTXRGLE9BQU9lLE9BQWIsRUFBc0JvRixTQUF0QjtBQUNBYixVQUFNdEYsT0FBTzJHLGFBQWIsRUFBNEJSLFNBQTVCO0FBRUgsQ0EvbUJBLEVBK21CQ3JOLElBL21CRCxDQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQ1JnQjhOLEksR0FBQUEsSTtRQTJDQUMsVSxHQUFBQSxVOztBQTdDaEI7Ozs7OztBQUVPLFNBQVNELElBQVQsQ0FBY2pELE1BQWQsRUFBc0I7QUFDekIsV0FBT0EsT0FBTy9OLE9BQVAsQ0FBZSxZQUFmLEVBQTZCLEVBQTdCLENBQVA7QUFDSDs7QUFFRDs7Ozs7O0FBTU8sSUFBTWtSLDhDQUFtQixTQUFuQkEsZ0JBQW1CLENBQVNDLElBQVQsRUFBZTtBQUMzQyxRQUFHLENBQUNBLElBQUQsSUFBU0EsS0FBSzNjLE1BQUwsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxLQUFrQixNQUE5QixFQUFzQztBQUNsQyxlQUFPLEVBQVA7QUFDSDtBQUNELGFBQVM0YyxrQkFBVCxDQUE0QkQsSUFBNUIsRUFBa0M7QUFDOUIsWUFBSUUsWUFBWSxFQUFoQjtBQUNBLFlBQUssa0JBQUQsQ0FBcUIvYyxJQUFyQixDQUEwQjZjLElBQTFCLENBQUosRUFBcUM7QUFDakNFLHdCQUFZLEtBQVo7QUFDSCxTQUZELE1BRU0sSUFBSyxtQkFBRCxDQUFzQi9jLElBQXRCLENBQTJCNmMsSUFBM0IsQ0FBSixFQUFzQztBQUN4Q0Usd0JBQVksTUFBWjtBQUNIO0FBQ0QsZUFBT0EsU0FBUDtBQUNIOztBQUVELFFBQUlDLGVBQWVGLG1CQUFtQkQsSUFBbkIsQ0FBbkI7QUFDQSxRQUFHRyxZQUFILEVBQWlCO0FBQ2IsZUFBT0EsWUFBUDtBQUNIO0FBQ0RILFdBQU9BLEtBQUt4SixLQUFMLENBQVcsR0FBWCxFQUFnQixDQUFoQixFQUFtQkEsS0FBbkIsQ0FBeUIsR0FBekIsRUFBOEIsQ0FBOUIsQ0FBUDtBQUNBLFFBQUd3SixLQUFLSSxXQUFMLENBQWlCLEdBQWpCLElBQXdCLENBQUMsQ0FBNUIsRUFBK0I7QUFDM0IsZUFBT0osS0FBSzNjLE1BQUwsQ0FBWTJjLEtBQUtJLFdBQUwsQ0FBaUIsR0FBakIsSUFBd0IsQ0FBcEMsRUFBdUNKLEtBQUt4akIsTUFBNUMsRUFBb0Q0RixXQUFwRCxFQUFQO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsZUFBTyxFQUFQO0FBQ0g7QUFDSixDQXhCTTs7QUEyQlA7Ozs7OztBQU1PLFNBQVMwZCxVQUFULENBQW9CTyxNQUFwQixFQUE0QjtBQUMvQixRQUFJQyxTQUFTMWlCLFNBQVN5aUIsTUFBVCxFQUFpQixFQUFqQixDQUFiO0FBQ0EsUUFBSUUsUUFBVXJjLEtBQUtzYyxLQUFMLENBQVdGLFNBQVMsSUFBcEIsQ0FBZDtBQUNBLFFBQUlHLFVBQVV2YyxLQUFLc2MsS0FBTCxDQUFXLENBQUNGLFNBQVVDLFFBQVEsSUFBbkIsSUFBNEIsRUFBdkMsQ0FBZDtBQUNBLFFBQUlHLFVBQVVKLFNBQVVDLFFBQVEsSUFBbEIsR0FBMkJFLFVBQVUsRUFBbkQ7O0FBRUEsUUFBSUYsUUFBUSxDQUFaLEVBQWU7QUFBQ0Usa0JBQVUsTUFBSUEsT0FBZDtBQUF1QjtBQUN2QyxRQUFJQyxVQUFVLEVBQWQsRUFBa0I7QUFBQ0Esa0JBQVUsTUFBSUEsT0FBZDtBQUF1Qjs7QUFFMUMsUUFBSUgsUUFBUSxDQUFaLEVBQWU7QUFDWCxlQUFPQSxRQUFNLEdBQU4sR0FBVUUsT0FBVixHQUFrQixHQUFsQixHQUFzQkMsT0FBN0I7QUFDSCxLQUZELE1BRU87QUFDSCxlQUFPRCxVQUFRLEdBQVIsR0FBWUMsT0FBbkI7QUFDSDtBQUNKLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFlBQVU7QUFBQyxNQUFJckQsSUFBRSxvQkFBaUJ0TCxJQUFqQix5Q0FBaUJBLElBQWpCLE1BQXVCQSxLQUFLQSxJQUFMLEtBQVlBLElBQW5DLElBQXlDQSxJQUF6QyxJQUErQyxvQkFBaUJrSCxNQUFqQix5Q0FBaUJBLE1BQWpCLE1BQXlCQSxPQUFPQSxNQUFQLEtBQWdCQSxNQUF6QyxJQUFpREEsTUFBaEcsSUFBd0csSUFBeEcsSUFBOEcsRUFBcEg7QUFBQSxNQUF1SDBILElBQUV0RCxFQUFFdlosQ0FBM0g7QUFBQSxNQUE2SHlPLElBQUU1TyxNQUFNZ0UsU0FBckk7QUFBQSxNQUErSW9VLElBQUV0WixPQUFPa0YsU0FBeEo7QUFBQSxNQUFrSzhVLElBQUUsZUFBYSxPQUFPbUUsTUFBcEIsR0FBMkJBLE9BQU9qWixTQUFsQyxHQUE0QyxJQUFoTjtBQUFBLE1BQXFOa1osSUFBRXRPLEVBQUVuTyxJQUF6TjtBQUFBLE1BQThOMGMsSUFBRXZPLEVBQUV6UCxLQUFsTztBQUFBLE1BQXdPZ1gsSUFBRWlDLEVBQUU5WSxRQUE1TztBQUFBLE1BQXFQMUcsSUFBRXdmLEVBQUVnRixjQUF6UDtBQUFBLE1BQXdRQyxJQUFFcmQsTUFBTUMsT0FBaFI7QUFBQSxNQUF3UnFkLElBQUV4ZSxPQUFPQyxJQUFqUztBQUFBLE1BQXNTZ0UsSUFBRWpFLE9BQU9pUixNQUEvUztBQUFBLE1BQXNUNkgsSUFBRSxTQUFGQSxDQUFFLEdBQVUsQ0FBRSxDQUFwVTtBQUFBLE1BQXFValksSUFBRSxTQUFGQSxDQUFFLENBQVMrWixDQUFULEVBQVc7QUFBQyxXQUFPQSxhQUFhL1osQ0FBYixHQUFlK1osQ0FBZixHQUFpQixnQkFBZ0IvWixDQUFoQixHQUFrQixNQUFLLEtBQUs0ZCxRQUFMLEdBQWM3RCxDQUFuQixDQUFsQixHQUF3QyxJQUFJL1osQ0FBSixDQUFNK1osQ0FBTixDQUFoRTtBQUF5RSxHQUE1WixDQUE2WixlQUFhLE9BQU84RCxPQUFwQixJQUE2QkEsUUFBUTlNLFFBQXJDLEdBQThDZ0osRUFBRXZaLENBQUYsR0FBSVIsQ0FBbEQsSUFBcUQsZUFBYSxPQUFPOGQsTUFBcEIsSUFBNEIsQ0FBQ0EsT0FBTy9NLFFBQXBDLElBQThDK00sT0FBT0QsT0FBckQsS0FBK0RBLFVBQVFDLE9BQU9ELE9BQVAsR0FBZTdkLENBQXRGLEdBQXlGNmQsUUFBUXJkLENBQVIsR0FBVVIsQ0FBeEosR0FBMkpBLEVBQUUrZCxPQUFGLEdBQVUsT0FBckssQ0FBNkssSUFBSW5NLENBQUo7QUFBQSxNQUFNb00sSUFBRSxTQUFGQSxDQUFFLENBQVNULENBQVQsRUFBV3RrQixDQUFYLEVBQWE4Z0IsQ0FBYixFQUFlO0FBQUMsUUFBRyxLQUFLLENBQUwsS0FBUzlnQixDQUFaLEVBQWMsT0FBT3NrQixDQUFQLENBQVMsUUFBTyxRQUFNeEQsQ0FBTixHQUFRLENBQVIsR0FBVUEsQ0FBakIsR0FBb0IsS0FBSyxDQUFMO0FBQU8sZUFBTyxVQUFTQSxDQUFULEVBQVc7QUFBQyxpQkFBT3dELEVBQUV4YSxJQUFGLENBQU85SixDQUFQLEVBQVM4Z0IsQ0FBVCxDQUFQO0FBQW1CLFNBQXRDLENBQXVDLEtBQUssQ0FBTDtBQUFPLGVBQU8sVUFBU0EsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhSyxDQUFiLEVBQWU7QUFBQyxpQkFBT0gsRUFBRXhhLElBQUYsQ0FBTzlKLENBQVAsRUFBUzhnQixDQUFULEVBQVdzRCxDQUFYLEVBQWFLLENBQWIsQ0FBUDtBQUF1QixTQUE5QyxDQUErQyxLQUFLLENBQUw7QUFBTyxlQUFPLFVBQVMzRCxDQUFULEVBQVdzRCxDQUFYLEVBQWFLLENBQWIsRUFBZXpPLENBQWYsRUFBaUI7QUFBQyxpQkFBT3NPLEVBQUV4YSxJQUFGLENBQU85SixDQUFQLEVBQVM4Z0IsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhSyxDQUFiLEVBQWV6TyxDQUFmLENBQVA7QUFBeUIsU0FBbEQsQ0FBL0gsQ0FBa0wsT0FBTyxZQUFVO0FBQUMsYUFBT3NPLEVBQUV6YSxLQUFGLENBQVE3SixDQUFSLEVBQVUrSixTQUFWLENBQVA7QUFBNEIsS0FBOUM7QUFBK0MsR0FBaFI7QUFBQSxNQUFpUmliLElBQUUsU0FBRkEsQ0FBRSxDQUFTbEUsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhSyxDQUFiLEVBQWU7QUFBQyxXQUFPMWQsRUFBRWtlLFFBQUYsS0FBYXRNLENBQWIsR0FBZTVSLEVBQUVrZSxRQUFGLENBQVduRSxDQUFYLEVBQWFzRCxDQUFiLENBQWYsR0FBK0IsUUFBTXRELENBQU4sR0FBUS9aLEVBQUVtZSxRQUFWLEdBQW1CbmUsRUFBRW9lLFVBQUYsQ0FBYXJFLENBQWIsSUFBZ0JpRSxFQUFFakUsQ0FBRixFQUFJc0QsQ0FBSixFQUFNSyxDQUFOLENBQWhCLEdBQXlCMWQsRUFBRXFlLFFBQUYsQ0FBV3RFLENBQVgsS0FBZSxDQUFDL1osRUFBRU0sT0FBRixDQUFVeVosQ0FBVixDQUFoQixHQUE2Qi9aLEVBQUVzZSxPQUFGLENBQVV2RSxDQUFWLENBQTdCLEdBQTBDL1osRUFBRXVlLFFBQUYsQ0FBV3hFLENBQVgsQ0FBNUg7QUFBMEksR0FBN2EsQ0FBOGEvWixFQUFFa2UsUUFBRixHQUFXdE0sSUFBRSxXQUFTbUksQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhO0FBQUMsV0FBT1ksRUFBRWxFLENBQUYsRUFBSXNELENBQUosRUFBTSxJQUFFLENBQVIsQ0FBUDtBQUFrQixHQUE3QyxDQUE4QyxJQUFJbUIsSUFBRSxTQUFGQSxDQUFFLENBQVNqQixDQUFULEVBQVd0a0IsQ0FBWCxFQUFhO0FBQUMsV0FBT0EsSUFBRSxRQUFNQSxDQUFOLEdBQVFza0IsRUFBRXJrQixNQUFGLEdBQVMsQ0FBakIsR0FBbUIsQ0FBQ0QsQ0FBdEIsRUFBd0IsWUFBVTtBQUFDLFdBQUksSUFBSThnQixJQUFFblosS0FBSzZkLEdBQUwsQ0FBU3piLFVBQVU5SixNQUFWLEdBQWlCRCxDQUExQixFQUE0QixDQUE1QixDQUFOLEVBQXFDb2tCLElBQUVoZCxNQUFNMFosQ0FBTixDQUF2QyxFQUFnRDJELElBQUUsQ0FBdEQsRUFBd0RBLElBQUUzRCxDQUExRCxFQUE0RDJELEdBQTVEO0FBQWdFTCxVQUFFSyxDQUFGLElBQUsxYSxVQUFVMGEsSUFBRXprQixDQUFaLENBQUw7QUFBaEUsT0FBb0YsUUFBT0EsQ0FBUCxHQUFVLEtBQUssQ0FBTDtBQUFPLGlCQUFPc2tCLEVBQUV4YSxJQUFGLENBQU8sSUFBUCxFQUFZc2EsQ0FBWixDQUFQLENBQXNCLEtBQUssQ0FBTDtBQUFPLGlCQUFPRSxFQUFFeGEsSUFBRixDQUFPLElBQVAsRUFBWUMsVUFBVSxDQUFWLENBQVosRUFBeUJxYSxDQUF6QixDQUFQLENBQW1DLEtBQUssQ0FBTDtBQUFPLGlCQUFPRSxFQUFFeGEsSUFBRixDQUFPLElBQVAsRUFBWUMsVUFBVSxDQUFWLENBQVosRUFBeUJBLFVBQVUsQ0FBVixDQUF6QixFQUFzQ3FhLENBQXRDLENBQVAsQ0FBeEYsQ0FBd0ksSUFBSXBPLElBQUU1TyxNQUFNcEgsSUFBRSxDQUFSLENBQU4sQ0FBaUIsS0FBSXlrQixJQUFFLENBQU4sRUFBUUEsSUFBRXprQixDQUFWLEVBQVl5a0IsR0FBWjtBQUFnQnpPLFVBQUV5TyxDQUFGLElBQUsxYSxVQUFVMGEsQ0FBVixDQUFMO0FBQWhCLE9BQWtDLE9BQU96TyxFQUFFaFcsQ0FBRixJQUFLb2tCLENBQUwsRUFBT0UsRUFBRXphLEtBQUYsQ0FBUSxJQUFSLEVBQWFtTSxDQUFiLENBQWQ7QUFBOEIsS0FBdlY7QUFBd1YsR0FBNVc7QUFBQSxNQUE2V3lQLElBQUUsU0FBRkEsQ0FBRSxDQUFTM0UsQ0FBVCxFQUFXO0FBQUMsUUFBRyxDQUFDL1osRUFBRXFlLFFBQUYsQ0FBV3RFLENBQVgsQ0FBSixFQUFrQixPQUFNLEVBQU4sQ0FBUyxJQUFHM1csQ0FBSCxFQUFLLE9BQU9BLEVBQUUyVyxDQUFGLENBQVAsQ0FBWTlCLEVBQUU1VCxTQUFGLEdBQVkwVixDQUFaLENBQWMsSUFBSXNELElBQUUsSUFBSXBGLENBQUosRUFBTixDQUFZLE9BQU9BLEVBQUU1VCxTQUFGLEdBQVksSUFBWixFQUFpQmdaLENBQXhCO0FBQTBCLEdBQTNkO0FBQUEsTUFBNGRzQixJQUFFLFNBQUZBLENBQUUsQ0FBU3RCLENBQVQsRUFBVztBQUFDLFdBQU8sVUFBU3RELENBQVQsRUFBVztBQUFDLGFBQU8sUUFBTUEsQ0FBTixHQUFRLEtBQUssQ0FBYixHQUFlQSxFQUFFc0QsQ0FBRixDQUF0QjtBQUEyQixLQUE5QztBQUErQyxHQUF6aEI7QUFBQSxNQUEwaEIvWixJQUFFLFNBQUZBLENBQUUsQ0FBU3lXLENBQVQsRUFBV3NELENBQVgsRUFBYTtBQUFDLFdBQU8sUUFBTXRELENBQU4sSUFBUzlnQixFQUFFOEosSUFBRixDQUFPZ1gsQ0FBUCxFQUFTc0QsQ0FBVCxDQUFoQjtBQUE0QixHQUF0a0I7QUFBQSxNQUF1a0J1QixJQUFFLFNBQUZBLENBQUUsQ0FBUzdFLENBQVQsRUFBV3NELENBQVgsRUFBYTtBQUFDLFNBQUksSUFBSUssSUFBRUwsRUFBRW5rQixNQUFSLEVBQWUrVixJQUFFLENBQXJCLEVBQXVCQSxJQUFFeU8sQ0FBekIsRUFBMkJ6TyxHQUEzQixFQUErQjtBQUFDLFVBQUcsUUFBTThLLENBQVQsRUFBVyxPQUFPQSxJQUFFQSxFQUFFc0QsRUFBRXBPLENBQUYsQ0FBRixDQUFGO0FBQVUsWUFBT3lPLElBQUUzRCxDQUFGLEdBQUksS0FBSyxDQUFoQjtBQUFrQixHQUFycUI7QUFBQSxNQUFzcUJ2WixJQUFFSSxLQUFLaWUsR0FBTCxDQUFTLENBQVQsRUFBVyxFQUFYLElBQWUsQ0FBdnJCO0FBQUEsTUFBeXJCQyxJQUFFSCxFQUFFLFFBQUYsQ0FBM3JCO0FBQUEsTUFBdXNCN2UsSUFBRSxTQUFGQSxDQUFFLENBQVNpYSxDQUFULEVBQVc7QUFBQyxRQUFJc0QsSUFBRXlCLEVBQUUvRSxDQUFGLENBQU4sQ0FBVyxPQUFNLFlBQVUsT0FBT3NELENBQWpCLElBQW9CLEtBQUdBLENBQXZCLElBQTBCQSxLQUFHN2MsQ0FBbkM7QUFBcUMsR0FBcndCLENBQXN3QlIsRUFBRStlLElBQUYsR0FBTy9lLEVBQUVYLE9BQUYsR0FBVSxVQUFTMGEsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhSyxDQUFiLEVBQWU7QUFBQyxRQUFJek8sQ0FBSixFQUFNc08sQ0FBTixDQUFRLElBQUdGLElBQUVXLEVBQUVYLENBQUYsRUFBSUssQ0FBSixDQUFGLEVBQVM1ZCxFQUFFaWEsQ0FBRixDQUFaLEVBQWlCLEtBQUk5SyxJQUFFLENBQUYsRUFBSXNPLElBQUV4RCxFQUFFN2dCLE1BQVosRUFBbUIrVixJQUFFc08sQ0FBckIsRUFBdUJ0TyxHQUF2QjtBQUEyQm9PLFFBQUV0RCxFQUFFOUssQ0FBRixDQUFGLEVBQU9BLENBQVAsRUFBUzhLLENBQVQ7QUFBM0IsS0FBakIsTUFBNEQ7QUFBQyxVQUFJOWdCLElBQUUrRyxFQUFFWixJQUFGLENBQU8yYSxDQUFQLENBQU4sQ0FBZ0IsS0FBSTlLLElBQUUsQ0FBRixFQUFJc08sSUFBRXRrQixFQUFFQyxNQUFaLEVBQW1CK1YsSUFBRXNPLENBQXJCLEVBQXVCdE8sR0FBdkI7QUFBMkJvTyxVQUFFdEQsRUFBRTlnQixFQUFFZ1csQ0FBRixDQUFGLENBQUYsRUFBVWhXLEVBQUVnVyxDQUFGLENBQVYsRUFBZThLLENBQWY7QUFBM0I7QUFBNkMsWUFBT0EsQ0FBUDtBQUFTLEdBQTVLLEVBQTZLL1osRUFBRVcsR0FBRixHQUFNWCxFQUFFZ2YsT0FBRixHQUFVLFVBQVNqRixDQUFULEVBQVdzRCxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDTCxRQUFFWSxFQUFFWixDQUFGLEVBQUlLLENBQUosQ0FBRixDQUFTLEtBQUksSUFBSXpPLElBQUUsQ0FBQ25QLEVBQUVpYSxDQUFGLENBQUQsSUFBTy9aLEVBQUVaLElBQUYsQ0FBTzJhLENBQVAsQ0FBYixFQUF1QndELElBQUUsQ0FBQ3RPLEtBQUc4SyxDQUFKLEVBQU83Z0IsTUFBaEMsRUFBdUNELElBQUVvSCxNQUFNa2QsQ0FBTixDQUF6QyxFQUFrRDlFLElBQUUsQ0FBeEQsRUFBMERBLElBQUU4RSxDQUE1RCxFQUE4RDlFLEdBQTlELEVBQWtFO0FBQUMsVUFBSWtGLElBQUUxTyxJQUFFQSxFQUFFd0osQ0FBRixDQUFGLEdBQU9BLENBQWIsQ0FBZXhmLEVBQUV3ZixDQUFGLElBQUs0RSxFQUFFdEQsRUFBRTRELENBQUYsQ0FBRixFQUFPQSxDQUFQLEVBQVM1RCxDQUFULENBQUw7QUFBaUIsWUFBTzlnQixDQUFQO0FBQVMsR0FBbFUsQ0FBbVUsSUFBSWdtQixJQUFFLFNBQUZBLENBQUUsQ0FBU3pCLENBQVQsRUFBVztBQUFDLFdBQU8sVUFBU3pELENBQVQsRUFBV3NELENBQVgsRUFBYUssQ0FBYixFQUFlek8sQ0FBZixFQUFpQjtBQUFDLFVBQUlzTyxJQUFFLEtBQUd2YSxVQUFVOUosTUFBbkIsQ0FBMEIsT0FBTyxVQUFTNmdCLENBQVQsRUFBV3NELENBQVgsRUFBYUssQ0FBYixFQUFlek8sQ0FBZixFQUFpQjtBQUFDLFlBQUlzTyxJQUFFLENBQUN6ZCxFQUFFaWEsQ0FBRixDQUFELElBQU8vWixFQUFFWixJQUFGLENBQU8yYSxDQUFQLENBQWI7QUFBQSxZQUF1QjlnQixJQUFFLENBQUNza0IsS0FBR3hELENBQUosRUFBTzdnQixNQUFoQztBQUFBLFlBQXVDdWYsSUFBRSxJQUFFK0UsQ0FBRixHQUFJLENBQUosR0FBTXZrQixJQUFFLENBQWpELENBQW1ELEtBQUlnVyxNQUFJeU8sSUFBRTNELEVBQUV3RCxJQUFFQSxFQUFFOUUsQ0FBRixDQUFGLEdBQU9BLENBQVQsQ0FBRixFQUFjQSxLQUFHK0UsQ0FBckIsQ0FBSixFQUE0QixLQUFHL0UsQ0FBSCxJQUFNQSxJQUFFeGYsQ0FBcEMsRUFBc0N3ZixLQUFHK0UsQ0FBekMsRUFBMkM7QUFBQyxjQUFJRyxJQUFFSixJQUFFQSxFQUFFOUUsQ0FBRixDQUFGLEdBQU9BLENBQWIsQ0FBZWlGLElBQUVMLEVBQUVLLENBQUYsRUFBSTNELEVBQUU0RCxDQUFGLENBQUosRUFBU0EsQ0FBVCxFQUFXNUQsQ0FBWCxDQUFGO0FBQWdCLGdCQUFPMkQsQ0FBUDtBQUFTLE9BQXpKLENBQTBKM0QsQ0FBMUosRUFBNEppRSxFQUFFWCxDQUFGLEVBQUlwTyxDQUFKLEVBQU0sQ0FBTixDQUE1SixFQUFxS3lPLENBQXJLLEVBQXVLSCxDQUF2SyxDQUFQO0FBQWlMLEtBQXBPO0FBQXFPLEdBQXZQLENBQXdQdmQsRUFBRWtmLE1BQUYsR0FBU2xmLEVBQUVtZixLQUFGLEdBQVFuZixFQUFFb2YsTUFBRixHQUFTSCxFQUFFLENBQUYsQ0FBMUIsRUFBK0JqZixFQUFFcWYsV0FBRixHQUFjcmYsRUFBRXNmLEtBQUYsR0FBUUwsRUFBRSxDQUFDLENBQUgsQ0FBckQsRUFBMkRqZixFQUFFeVMsSUFBRixHQUFPelMsRUFBRXVmLE1BQUYsR0FBUyxVQUFTeEYsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhSyxDQUFiLEVBQWU7QUFBQyxRQUFJek8sSUFBRSxDQUFDblAsRUFBRWlhLENBQUYsSUFBSy9aLEVBQUVrRixTQUFQLEdBQWlCbEYsRUFBRXdmLE9BQXBCLEVBQTZCekYsQ0FBN0IsRUFBK0JzRCxDQUEvQixFQUFpQ0ssQ0FBakMsQ0FBTixDQUEwQyxJQUFHLEtBQUssQ0FBTCxLQUFTek8sQ0FBVCxJQUFZLENBQUMsQ0FBRCxLQUFLQSxDQUFwQixFQUFzQixPQUFPOEssRUFBRTlLLENBQUYsQ0FBUDtBQUFZLEdBQXZLLEVBQXdLalAsRUFBRU8sTUFBRixHQUFTUCxFQUFFeWYsTUFBRixHQUFTLFVBQVMxRixDQUFULEVBQVc5SyxDQUFYLEVBQWFvTyxDQUFiLEVBQWU7QUFBQyxRQUFJRSxJQUFFLEVBQU4sQ0FBUyxPQUFPdE8sSUFBRWdQLEVBQUVoUCxDQUFGLEVBQUlvTyxDQUFKLENBQUYsRUFBU3JkLEVBQUUrZSxJQUFGLENBQU9oRixDQUFQLEVBQVMsVUFBU0EsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhSyxDQUFiLEVBQWU7QUFBQ3pPLFFBQUU4SyxDQUFGLEVBQUlzRCxDQUFKLEVBQU1LLENBQU4sS0FBVUgsRUFBRXpjLElBQUYsQ0FBT2laLENBQVAsQ0FBVjtBQUFvQixLQUE3QyxDQUFULEVBQXdEd0QsQ0FBL0Q7QUFBaUUsR0FBcFIsRUFBcVJ2ZCxFQUFFd04sTUFBRixHQUFTLFVBQVN1TSxDQUFULEVBQVdzRCxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDLFdBQU8xZCxFQUFFTyxNQUFGLENBQVN3WixDQUFULEVBQVcvWixFQUFFMGYsTUFBRixDQUFTekIsRUFBRVosQ0FBRixDQUFULENBQVgsRUFBMEJLLENBQTFCLENBQVA7QUFBb0MsR0FBbFYsRUFBbVYxZCxFQUFFdVMsS0FBRixHQUFRdlMsRUFBRWtELEdBQUYsR0FBTSxVQUFTNlcsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhSyxDQUFiLEVBQWU7QUFBQ0wsUUFBRVksRUFBRVosQ0FBRixFQUFJSyxDQUFKLENBQUYsQ0FBUyxLQUFJLElBQUl6TyxJQUFFLENBQUNuUCxFQUFFaWEsQ0FBRixDQUFELElBQU8vWixFQUFFWixJQUFGLENBQU8yYSxDQUFQLENBQWIsRUFBdUJ3RCxJQUFFLENBQUN0TyxLQUFHOEssQ0FBSixFQUFPN2dCLE1BQWhDLEVBQXVDRCxJQUFFLENBQTdDLEVBQStDQSxJQUFFc2tCLENBQWpELEVBQW1EdGtCLEdBQW5ELEVBQXVEO0FBQUMsVUFBSXdmLElBQUV4SixJQUFFQSxFQUFFaFcsQ0FBRixDQUFGLEdBQU9BLENBQWIsQ0FBZSxJQUFHLENBQUNva0IsRUFBRXRELEVBQUV0QixDQUFGLENBQUYsRUFBT0EsQ0FBUCxFQUFTc0IsQ0FBVCxDQUFKLEVBQWdCLE9BQU0sQ0FBQyxDQUFQO0FBQVMsWUFBTSxDQUFDLENBQVA7QUFBUyxHQUFuZSxFQUFvZS9aLEVBQUUwWixJQUFGLEdBQU8xWixFQUFFMmYsR0FBRixHQUFNLFVBQVM1RixDQUFULEVBQVdzRCxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDTCxRQUFFWSxFQUFFWixDQUFGLEVBQUlLLENBQUosQ0FBRixDQUFTLEtBQUksSUFBSXpPLElBQUUsQ0FBQ25QLEVBQUVpYSxDQUFGLENBQUQsSUFBTy9aLEVBQUVaLElBQUYsQ0FBTzJhLENBQVAsQ0FBYixFQUF1QndELElBQUUsQ0FBQ3RPLEtBQUc4SyxDQUFKLEVBQU83Z0IsTUFBaEMsRUFBdUNELElBQUUsQ0FBN0MsRUFBK0NBLElBQUVza0IsQ0FBakQsRUFBbUR0a0IsR0FBbkQsRUFBdUQ7QUFBQyxVQUFJd2YsSUFBRXhKLElBQUVBLEVBQUVoVyxDQUFGLENBQUYsR0FBT0EsQ0FBYixDQUFlLElBQUdva0IsRUFBRXRELEVBQUV0QixDQUFGLENBQUYsRUFBT0EsQ0FBUCxFQUFTc0IsQ0FBVCxDQUFILEVBQWUsT0FBTSxDQUFDLENBQVA7QUFBUyxZQUFNLENBQUMsQ0FBUDtBQUFTLEdBQWxuQixFQUFtbkIvWixFQUFFZ1UsUUFBRixHQUFXaFUsRUFBRTRmLFFBQUYsR0FBVzVmLEVBQUU2ZixPQUFGLEdBQVUsVUFBUzlGLENBQVQsRUFBV3NELENBQVgsRUFBYUssQ0FBYixFQUFlek8sQ0FBZixFQUFpQjtBQUFDLFdBQU9uUCxFQUFFaWEsQ0FBRixNQUFPQSxJQUFFL1osRUFBRThQLE1BQUYsQ0FBU2lLLENBQVQsQ0FBVCxHQUFzQixDQUFDLFlBQVUsT0FBTzJELENBQWpCLElBQW9Cek8sQ0FBckIsTUFBMEJ5TyxJQUFFLENBQTVCLENBQXRCLEVBQXFELEtBQUcxZCxFQUFFSixPQUFGLENBQVVtYSxDQUFWLEVBQVlzRCxDQUFaLEVBQWNLLENBQWQsQ0FBL0Q7QUFBZ0YsR0FBcnZCLEVBQXN2QjFkLEVBQUU4ZixNQUFGLEdBQVN0QixFQUFFLFVBQVN6RSxDQUFULEVBQVcyRCxDQUFYLEVBQWF6TyxDQUFiLEVBQWU7QUFBQyxRQUFJc08sQ0FBSixFQUFNdGtCLENBQU4sQ0FBUSxPQUFPK0csRUFBRW9lLFVBQUYsQ0FBYVYsQ0FBYixJQUFnQnprQixJQUFFeWtCLENBQWxCLEdBQW9CMWQsRUFBRU0sT0FBRixDQUFVb2QsQ0FBVixNQUFlSCxJQUFFRyxFQUFFbGUsS0FBRixDQUFRLENBQVIsRUFBVSxDQUFDLENBQVgsQ0FBRixFQUFnQmtlLElBQUVBLEVBQUVBLEVBQUV4a0IsTUFBRixHQUFTLENBQVgsQ0FBakMsQ0FBcEIsRUFBb0U4RyxFQUFFVyxHQUFGLENBQU1vWixDQUFOLEVBQVEsVUFBU0EsQ0FBVCxFQUFXO0FBQUMsVUFBSXNELElBQUVwa0IsQ0FBTixDQUFRLElBQUcsQ0FBQ29rQixDQUFKLEVBQU07QUFBQyxZQUFHRSxLQUFHQSxFQUFFcmtCLE1BQUwsS0FBYzZnQixJQUFFNkUsRUFBRTdFLENBQUYsRUFBSXdELENBQUosQ0FBaEIsR0FBd0IsUUFBTXhELENBQWpDLEVBQW1DLE9BQU9zRCxJQUFFdEQsRUFBRTJELENBQUYsQ0FBRjtBQUFPLGNBQU8sUUFBTUwsQ0FBTixHQUFRQSxDQUFSLEdBQVVBLEVBQUV2YSxLQUFGLENBQVFpWCxDQUFSLEVBQVU5SyxDQUFWLENBQWpCO0FBQThCLEtBQWxILENBQTNFO0FBQStMLEdBQXpOLENBQS92QixFQUEwOUJqUCxFQUFFK2YsS0FBRixHQUFRLFVBQVNoRyxDQUFULEVBQVdzRCxDQUFYLEVBQWE7QUFBQyxXQUFPcmQsRUFBRVcsR0FBRixDQUFNb1osQ0FBTixFQUFRL1osRUFBRXVlLFFBQUYsQ0FBV2xCLENBQVgsQ0FBUixDQUFQO0FBQThCLEdBQTlnQyxFQUErZ0NyZCxFQUFFZ2dCLEtBQUYsR0FBUSxVQUFTakcsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhO0FBQUMsV0FBT3JkLEVBQUVPLE1BQUYsQ0FBU3daLENBQVQsRUFBVy9aLEVBQUVzZSxPQUFGLENBQVVqQixDQUFWLENBQVgsQ0FBUDtBQUFnQyxHQUFya0MsRUFBc2tDcmQsRUFBRWdGLFNBQUYsR0FBWSxVQUFTK1UsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhO0FBQUMsV0FBT3JkLEVBQUV5UyxJQUFGLENBQU9zSCxDQUFQLEVBQVMvWixFQUFFc2UsT0FBRixDQUFVakIsQ0FBVixDQUFULENBQVA7QUFBOEIsR0FBOW5DLEVBQStuQ3JkLEVBQUV5ZSxHQUFGLEdBQU0sVUFBUzFFLENBQVQsRUFBVzlLLENBQVgsRUFBYW9PLENBQWIsRUFBZTtBQUFDLFFBQUlLLENBQUo7QUFBQSxRQUFNSCxDQUFOO0FBQUEsUUFBUXRrQixJQUFFLENBQUMsQ0FBRCxHQUFHLENBQWI7QUFBQSxRQUFld2YsSUFBRSxDQUFDLENBQUQsR0FBRyxDQUFwQixDQUFzQixJQUFHLFFBQU14SixDQUFOLElBQVMsWUFBVSxPQUFPQSxDQUFqQixJQUFvQixvQkFBaUI4SyxFQUFFLENBQUYsQ0FBakIsQ0FBcEIsSUFBMkMsUUFBTUEsQ0FBN0QsRUFBK0QsS0FBSSxJQUFJNEQsSUFBRSxDQUFOLEVBQVFILElBQUUsQ0FBQ3pELElBQUVqYSxFQUFFaWEsQ0FBRixJQUFLQSxDQUFMLEdBQU8vWixFQUFFOFAsTUFBRixDQUFTaUssQ0FBVCxDQUFWLEVBQXVCN2dCLE1BQXJDLEVBQTRDeWtCLElBQUVILENBQTlDLEVBQWdERyxHQUFoRDtBQUFvRCxlQUFPRCxJQUFFM0QsRUFBRTRELENBQUYsQ0FBVCxLQUFnQjFrQixJQUFFeWtCLENBQWxCLEtBQXNCemtCLElBQUV5a0IsQ0FBeEI7QUFBcEQsS0FBL0QsTUFBbUp6TyxJQUFFZ1AsRUFBRWhQLENBQUYsRUFBSW9PLENBQUosQ0FBRixFQUFTcmQsRUFBRStlLElBQUYsQ0FBT2hGLENBQVAsRUFBUyxVQUFTQSxDQUFULEVBQVdzRCxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDSCxVQUFFdE8sRUFBRThLLENBQUYsRUFBSXNELENBQUosRUFBTUssQ0FBTixDQUFGLEVBQVcsQ0FBQ2pGLElBQUU4RSxDQUFGLElBQUtBLE1BQUksQ0FBQyxDQUFELEdBQUcsQ0FBUCxJQUFVdGtCLE1BQUksQ0FBQyxDQUFELEdBQUcsQ0FBdkIsTUFBNEJBLElBQUU4Z0IsQ0FBRixFQUFJdEIsSUFBRThFLENBQWxDLENBQVg7QUFBZ0QsS0FBekUsQ0FBVCxDQUFvRixPQUFPdGtCLENBQVA7QUFBUyxHQUEzNUMsRUFBNDVDK0csRUFBRWlnQixHQUFGLEdBQU0sVUFBU2xHLENBQVQsRUFBVzlLLENBQVgsRUFBYW9PLENBQWIsRUFBZTtBQUFDLFFBQUlLLENBQUo7QUFBQSxRQUFNSCxDQUFOO0FBQUEsUUFBUXRrQixJQUFFLElBQUUsQ0FBWjtBQUFBLFFBQWN3ZixJQUFFLElBQUUsQ0FBbEIsQ0FBb0IsSUFBRyxRQUFNeEosQ0FBTixJQUFTLFlBQVUsT0FBT0EsQ0FBakIsSUFBb0Isb0JBQWlCOEssRUFBRSxDQUFGLENBQWpCLENBQXBCLElBQTJDLFFBQU1BLENBQTdELEVBQStELEtBQUksSUFBSTRELElBQUUsQ0FBTixFQUFRSCxJQUFFLENBQUN6RCxJQUFFamEsRUFBRWlhLENBQUYsSUFBS0EsQ0FBTCxHQUFPL1osRUFBRThQLE1BQUYsQ0FBU2lLLENBQVQsQ0FBVixFQUF1QjdnQixNQUFyQyxFQUE0Q3lrQixJQUFFSCxDQUE5QyxFQUFnREcsR0FBaEQ7QUFBb0QsZUFBT0QsSUFBRTNELEVBQUU0RCxDQUFGLENBQVQsS0FBZ0JELElBQUV6a0IsQ0FBbEIsS0FBc0JBLElBQUV5a0IsQ0FBeEI7QUFBcEQsS0FBL0QsTUFBbUp6TyxJQUFFZ1AsRUFBRWhQLENBQUYsRUFBSW9PLENBQUosQ0FBRixFQUFTcmQsRUFBRStlLElBQUYsQ0FBT2hGLENBQVAsRUFBUyxVQUFTQSxDQUFULEVBQVdzRCxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDLE9BQUMsQ0FBQ0gsSUFBRXRPLEVBQUU4SyxDQUFGLEVBQUlzRCxDQUFKLEVBQU1LLENBQU4sQ0FBSCxJQUFhakYsQ0FBYixJQUFnQjhFLE1BQUksSUFBRSxDQUFOLElBQVN0a0IsTUFBSSxJQUFFLENBQWhDLE1BQXFDQSxJQUFFOGdCLENBQUYsRUFBSXRCLElBQUU4RSxDQUEzQztBQUE4QyxLQUF2RSxDQUFULENBQWtGLE9BQU90a0IsQ0FBUDtBQUFTLEdBQXByRCxFQUFxckQrRyxFQUFFa2dCLE9BQUYsR0FBVSxVQUFTbkcsQ0FBVCxFQUFXO0FBQUMsV0FBTy9aLEVBQUVtZ0IsTUFBRixDQUFTcEcsQ0FBVCxFQUFXLElBQUUsQ0FBYixDQUFQO0FBQXVCLEdBQWx1RCxFQUFtdUQvWixFQUFFbWdCLE1BQUYsR0FBUyxVQUFTcEcsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhSyxDQUFiLEVBQWU7QUFBQyxRQUFHLFFBQU1MLENBQU4sSUFBU0ssQ0FBWixFQUFjLE9BQU81ZCxFQUFFaWEsQ0FBRixNQUFPQSxJQUFFL1osRUFBRThQLE1BQUYsQ0FBU2lLLENBQVQsQ0FBVCxHQUFzQkEsRUFBRS9aLEVBQUVvZ0IsTUFBRixDQUFTckcsRUFBRTdnQixNQUFGLEdBQVMsQ0FBbEIsQ0FBRixDQUE3QixDQUFxRCxJQUFJK1YsSUFBRW5QLEVBQUVpYSxDQUFGLElBQUsvWixFQUFFcWdCLEtBQUYsQ0FBUXRHLENBQVIsQ0FBTCxHQUFnQi9aLEVBQUU4UCxNQUFGLENBQVNpSyxDQUFULENBQXRCO0FBQUEsUUFBa0N3RCxJQUFFdUIsRUFBRTdQLENBQUYsQ0FBcEMsQ0FBeUNvTyxJQUFFemMsS0FBSzZkLEdBQUwsQ0FBUzdkLEtBQUtxZixHQUFMLENBQVM1QyxDQUFULEVBQVdFLENBQVgsQ0FBVCxFQUF1QixDQUF2QixDQUFGLENBQTRCLEtBQUksSUFBSXRrQixJQUFFc2tCLElBQUUsQ0FBUixFQUFVOUUsSUFBRSxDQUFoQixFQUFrQkEsSUFBRTRFLENBQXBCLEVBQXNCNUUsR0FBdEIsRUFBMEI7QUFBQyxVQUFJa0YsSUFBRTNkLEVBQUVvZ0IsTUFBRixDQUFTM0gsQ0FBVCxFQUFXeGYsQ0FBWCxDQUFOO0FBQUEsVUFBb0J1a0IsSUFBRXZPLEVBQUV3SixDQUFGLENBQXRCLENBQTJCeEosRUFBRXdKLENBQUYsSUFBS3hKLEVBQUUwTyxDQUFGLENBQUwsRUFBVTFPLEVBQUUwTyxDQUFGLElBQUtILENBQWY7QUFBaUIsWUFBT3ZPLEVBQUV6UCxLQUFGLENBQVEsQ0FBUixFQUFVNmQsQ0FBVixDQUFQO0FBQW9CLEdBQS85RCxFQUFnK0RyZCxFQUFFc2dCLE1BQUYsR0FBUyxVQUFTdkcsQ0FBVCxFQUFXOUssQ0FBWCxFQUFhb08sQ0FBYixFQUFlO0FBQUMsUUFBSUUsSUFBRSxDQUFOLENBQVEsT0FBT3RPLElBQUVnUCxFQUFFaFAsQ0FBRixFQUFJb08sQ0FBSixDQUFGLEVBQVNyZCxFQUFFK2YsS0FBRixDQUFRL2YsRUFBRVcsR0FBRixDQUFNb1osQ0FBTixFQUFRLFVBQVNBLENBQVQsRUFBV3NELENBQVgsRUFBYUssQ0FBYixFQUFlO0FBQUMsYUFBTSxFQUFDcFEsT0FBTXlNLENBQVAsRUFBU3JmLE9BQU02aUIsR0FBZixFQUFtQmdELFVBQVN0UixFQUFFOEssQ0FBRixFQUFJc0QsQ0FBSixFQUFNSyxDQUFOLENBQTVCLEVBQU47QUFBNEMsS0FBcEUsRUFBc0UzYyxJQUF0RSxDQUEyRSxVQUFTZ1osQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhO0FBQUMsVUFBSUssSUFBRTNELEVBQUV3RyxRQUFSO0FBQUEsVUFBaUJ0UixJQUFFb08sRUFBRWtELFFBQXJCLENBQThCLElBQUc3QyxNQUFJek8sQ0FBUCxFQUFTO0FBQUMsWUFBR0EsSUFBRXlPLENBQUYsSUFBSyxLQUFLLENBQUwsS0FBU0EsQ0FBakIsRUFBbUIsT0FBTyxDQUFQLENBQVMsSUFBR0EsSUFBRXpPLENBQUYsSUFBSyxLQUFLLENBQUwsS0FBU0EsQ0FBakIsRUFBbUIsT0FBTSxDQUFDLENBQVA7QUFBUyxjQUFPOEssRUFBRXJmLEtBQUYsR0FBUTJpQixFQUFFM2lCLEtBQWpCO0FBQXVCLEtBQWhOLENBQVIsRUFBME4sT0FBMU4sQ0FBaEI7QUFBbVAsR0FBcHZFLENBQXF2RSxJQUFJNkksSUFBRSxTQUFGQSxDQUFFLENBQVNrVixDQUFULEVBQVc0RSxDQUFYLEVBQWE7QUFBQyxXQUFPLFVBQVNwTyxDQUFULEVBQVdzTyxDQUFYLEVBQWF4RCxDQUFiLEVBQWU7QUFBQyxVQUFJOWdCLElBQUVva0IsSUFBRSxDQUFDLEVBQUQsRUFBSSxFQUFKLENBQUYsR0FBVSxFQUFoQixDQUFtQixPQUFPRSxJQUFFVSxFQUFFVixDQUFGLEVBQUl4RCxDQUFKLENBQUYsRUFBUy9aLEVBQUUrZSxJQUFGLENBQU85UCxDQUFQLEVBQVMsVUFBUzhLLENBQVQsRUFBV3NELENBQVgsRUFBYTtBQUFDLFlBQUlLLElBQUVILEVBQUV4RCxDQUFGLEVBQUlzRCxDQUFKLEVBQU1wTyxDQUFOLENBQU4sQ0FBZXdKLEVBQUV4ZixDQUFGLEVBQUk4Z0IsQ0FBSixFQUFNMkQsQ0FBTjtBQUFTLE9BQS9DLENBQVQsRUFBMER6a0IsQ0FBakU7QUFBbUUsS0FBN0c7QUFBOEcsR0FBbEksQ0FBbUkrRyxFQUFFd2dCLE9BQUYsR0FBVWpkLEVBQUUsVUFBU3dXLENBQVQsRUFBV3NELENBQVgsRUFBYUssQ0FBYixFQUFlO0FBQUNwYSxNQUFFeVcsQ0FBRixFQUFJMkQsQ0FBSixJQUFPM0QsRUFBRTJELENBQUYsRUFBSzVjLElBQUwsQ0FBVXVjLENBQVYsQ0FBUCxHQUFvQnRELEVBQUUyRCxDQUFGLElBQUssQ0FBQ0wsQ0FBRCxDQUF6QjtBQUE2QixHQUEvQyxDQUFWLEVBQTJEcmQsRUFBRXlnQixPQUFGLEdBQVVsZCxFQUFFLFVBQVN3VyxDQUFULEVBQVdzRCxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDM0QsTUFBRTJELENBQUYsSUFBS0wsQ0FBTDtBQUFPLEdBQXpCLENBQXJFLEVBQWdHcmQsRUFBRTBnQixPQUFGLEdBQVVuZCxFQUFFLFVBQVN3VyxDQUFULEVBQVdzRCxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDcGEsTUFBRXlXLENBQUYsRUFBSTJELENBQUosSUFBTzNELEVBQUUyRCxDQUFGLEdBQVAsR0FBYzNELEVBQUUyRCxDQUFGLElBQUssQ0FBbkI7QUFBcUIsR0FBdkMsQ0FBMUcsQ0FBbUosSUFBSWlELElBQUUsa0VBQU4sQ0FBeUUzZ0IsRUFBRTRnQixPQUFGLEdBQVUsVUFBUzdHLENBQVQsRUFBVztBQUFDLFdBQU9BLElBQUUvWixFQUFFTSxPQUFGLENBQVV5WixDQUFWLElBQWF5RCxFQUFFemEsSUFBRixDQUFPZ1gsQ0FBUCxDQUFiLEdBQXVCL1osRUFBRTZnQixRQUFGLENBQVc5RyxDQUFYLElBQWNBLEVBQUUrRyxLQUFGLENBQVFILENBQVIsQ0FBZCxHQUF5QjdnQixFQUFFaWEsQ0FBRixJQUFLL1osRUFBRVcsR0FBRixDQUFNb1osQ0FBTixFQUFRL1osRUFBRW1lLFFBQVYsQ0FBTCxHQUF5Qm5lLEVBQUU4UCxNQUFGLENBQVNpSyxDQUFULENBQTNFLEdBQXVGLEVBQTlGO0FBQWlHLEdBQXZILEVBQXdIL1osRUFBRStnQixJQUFGLEdBQU8sVUFBU2hILENBQVQsRUFBVztBQUFDLFdBQU8sUUFBTUEsQ0FBTixHQUFRLENBQVIsR0FBVWphLEVBQUVpYSxDQUFGLElBQUtBLEVBQUU3Z0IsTUFBUCxHQUFjOEcsRUFBRVosSUFBRixDQUFPMmEsQ0FBUCxFQUFVN2dCLE1BQXpDO0FBQWdELEdBQTNMLEVBQTRMOEcsRUFBRWdoQixTQUFGLEdBQVl6ZCxFQUFFLFVBQVN3VyxDQUFULEVBQVdzRCxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDM0QsTUFBRTJELElBQUUsQ0FBRixHQUFJLENBQU4sRUFBUzVjLElBQVQsQ0FBY3VjLENBQWQ7QUFBaUIsR0FBbkMsRUFBb0MsQ0FBQyxDQUFyQyxDQUF4TSxFQUFnUHJkLEVBQUVpaEIsS0FBRixHQUFRamhCLEVBQUVraEIsSUFBRixHQUFPbGhCLEVBQUVtaEIsSUFBRixHQUFPLFVBQVNwSCxDQUFULEVBQVdzRCxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDLFdBQU8sUUFBTTNELENBQU4sSUFBU0EsRUFBRTdnQixNQUFGLEdBQVMsQ0FBbEIsR0FBb0IsUUFBTW1rQixDQUFOLEdBQVEsS0FBSyxDQUFiLEdBQWUsRUFBbkMsR0FBc0MsUUFBTUEsQ0FBTixJQUFTSyxDQUFULEdBQVczRCxFQUFFLENBQUYsQ0FBWCxHQUFnQi9aLEVBQUVvaEIsT0FBRixDQUFVckgsQ0FBVixFQUFZQSxFQUFFN2dCLE1BQUYsR0FBU21rQixDQUFyQixDQUE3RDtBQUFxRixHQUEzVyxFQUE0V3JkLEVBQUVvaEIsT0FBRixHQUFVLFVBQVNySCxDQUFULEVBQVdzRCxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDLFdBQU9GLEVBQUV6YSxJQUFGLENBQU9nWCxDQUFQLEVBQVMsQ0FBVCxFQUFXblosS0FBSzZkLEdBQUwsQ0FBUyxDQUFULEVBQVcxRSxFQUFFN2dCLE1BQUYsSUFBVSxRQUFNbWtCLENBQU4sSUFBU0ssQ0FBVCxHQUFXLENBQVgsR0FBYUwsQ0FBdkIsQ0FBWCxDQUFYLENBQVA7QUFBeUQsR0FBL2IsRUFBZ2NyZCxFQUFFcWhCLElBQUYsR0FBTyxVQUFTdEgsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhSyxDQUFiLEVBQWU7QUFBQyxXQUFPLFFBQU0zRCxDQUFOLElBQVNBLEVBQUU3Z0IsTUFBRixHQUFTLENBQWxCLEdBQW9CLFFBQU1ta0IsQ0FBTixHQUFRLEtBQUssQ0FBYixHQUFlLEVBQW5DLEdBQXNDLFFBQU1BLENBQU4sSUFBU0ssQ0FBVCxHQUFXM0QsRUFBRUEsRUFBRTdnQixNQUFGLEdBQVMsQ0FBWCxDQUFYLEdBQXlCOEcsRUFBRXNoQixJQUFGLENBQU92SCxDQUFQLEVBQVNuWixLQUFLNmQsR0FBTCxDQUFTLENBQVQsRUFBVzFFLEVBQUU3Z0IsTUFBRixHQUFTbWtCLENBQXBCLENBQVQsQ0FBdEU7QUFBdUcsR0FBOWpCLEVBQStqQnJkLEVBQUVzaEIsSUFBRixHQUFPdGhCLEVBQUV1aEIsSUFBRixHQUFPdmhCLEVBQUV3aEIsSUFBRixHQUFPLFVBQVN6SCxDQUFULEVBQVdzRCxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDLFdBQU9GLEVBQUV6YSxJQUFGLENBQU9nWCxDQUFQLEVBQVMsUUFBTXNELENBQU4sSUFBU0ssQ0FBVCxHQUFXLENBQVgsR0FBYUwsQ0FBdEIsQ0FBUDtBQUFnQyxHQUFwb0IsRUFBcW9CcmQsRUFBRXloQixPQUFGLEdBQVUsVUFBUzFILENBQVQsRUFBVztBQUFDLFdBQU8vWixFQUFFTyxNQUFGLENBQVN3WixDQUFULEVBQVcySCxPQUFYLENBQVA7QUFBMkIsR0FBdHJCLENBQXVyQixJQUFJQyxJQUFFLFNBQUZBLENBQUUsQ0FBUzVILENBQVQsRUFBV3NELENBQVgsRUFBYUssQ0FBYixFQUFlek8sQ0FBZixFQUFpQjtBQUFDLFNBQUksSUFBSXNPLElBQUUsQ0FBQ3RPLElBQUVBLEtBQUcsRUFBTixFQUFVL1YsTUFBaEIsRUFBdUJELElBQUUsQ0FBekIsRUFBMkJ3ZixJQUFFcUcsRUFBRS9FLENBQUYsQ0FBakMsRUFBc0M5Z0IsSUFBRXdmLENBQXhDLEVBQTBDeGYsR0FBMUMsRUFBOEM7QUFBQyxVQUFJMGtCLElBQUU1RCxFQUFFOWdCLENBQUYsQ0FBTixDQUFXLElBQUc2RyxFQUFFNmQsQ0FBRixNQUFPM2QsRUFBRU0sT0FBRixDQUFVcWQsQ0FBVixLQUFjM2QsRUFBRTRoQixXQUFGLENBQWNqRSxDQUFkLENBQXJCLENBQUg7QUFBMEMsWUFBR04sQ0FBSCxFQUFLLEtBQUksSUFBSUcsSUFBRSxDQUFOLEVBQVFwYSxJQUFFdWEsRUFBRXprQixNQUFoQixFQUF1QnNrQixJQUFFcGEsQ0FBekI7QUFBNEI2TCxZQUFFc08sR0FBRixJQUFPSSxFQUFFSCxHQUFGLENBQVA7QUFBNUIsU0FBTCxNQUFvRG1FLEVBQUVoRSxDQUFGLEVBQUlOLENBQUosRUFBTUssQ0FBTixFQUFRek8sQ0FBUixHQUFXc08sSUFBRXRPLEVBQUUvVixNQUFmO0FBQTlGLGFBQXlId2tCLE1BQUl6TyxFQUFFc08sR0FBRixJQUFPSSxDQUFYO0FBQWMsWUFBTzFPLENBQVA7QUFBUyxHQUFsTyxDQUFtT2pQLEVBQUU2aEIsT0FBRixHQUFVLFVBQVM5SCxDQUFULEVBQVdzRCxDQUFYLEVBQWE7QUFBQyxXQUFPc0UsRUFBRTVILENBQUYsRUFBSXNELENBQUosRUFBTSxDQUFDLENBQVAsQ0FBUDtBQUFpQixHQUF6QyxFQUEwQ3JkLEVBQUU4aEIsT0FBRixHQUFVdEQsRUFBRSxVQUFTekUsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhO0FBQUMsV0FBT3JkLEVBQUUraEIsVUFBRixDQUFhaEksQ0FBYixFQUFlc0QsQ0FBZixDQUFQO0FBQXlCLEdBQXpDLENBQXBELEVBQStGcmQsRUFBRWdpQixJQUFGLEdBQU9oaUIsRUFBRWlpQixNQUFGLEdBQVMsVUFBU2xJLENBQVQsRUFBV3NELENBQVgsRUFBYUssQ0FBYixFQUFlek8sQ0FBZixFQUFpQjtBQUFDalAsTUFBRWtpQixTQUFGLENBQVk3RSxDQUFaLE1BQWlCcE8sSUFBRXlPLENBQUYsRUFBSUEsSUFBRUwsQ0FBTixFQUFRQSxJQUFFLENBQUMsQ0FBNUIsR0FBK0IsUUFBTUssQ0FBTixLQUFVQSxJQUFFTyxFQUFFUCxDQUFGLEVBQUl6TyxDQUFKLENBQVosQ0FBL0IsQ0FBbUQsS0FBSSxJQUFJc08sSUFBRSxFQUFOLEVBQVN0a0IsSUFBRSxFQUFYLEVBQWN3ZixJQUFFLENBQWhCLEVBQWtCa0YsSUFBRW1CLEVBQUUvRSxDQUFGLENBQXhCLEVBQTZCdEIsSUFBRWtGLENBQS9CLEVBQWlDbEYsR0FBakMsRUFBcUM7QUFBQyxVQUFJK0UsSUFBRXpELEVBQUV0QixDQUFGLENBQU47QUFBQSxVQUFXclYsSUFBRXNhLElBQUVBLEVBQUVGLENBQUYsRUFBSS9FLENBQUosRUFBTXNCLENBQU4sQ0FBRixHQUFXeUQsQ0FBeEIsQ0FBMEJILEtBQUcsQ0FBQ0ssQ0FBSixJQUFPakYsS0FBR3hmLE1BQUltSyxDQUFQLElBQVVtYSxFQUFFemMsSUFBRixDQUFPMGMsQ0FBUCxDQUFWLEVBQW9CdmtCLElBQUVtSyxDQUE3QixJQUFnQ3NhLElBQUUxZCxFQUFFZ1UsUUFBRixDQUFXL2EsQ0FBWCxFQUFhbUssQ0FBYixNQUFrQm5LLEVBQUU2SCxJQUFGLENBQU9zQyxDQUFQLEdBQVVtYSxFQUFFemMsSUFBRixDQUFPMGMsQ0FBUCxDQUE1QixDQUFGLEdBQXlDeGQsRUFBRWdVLFFBQUYsQ0FBV3VKLENBQVgsRUFBYUMsQ0FBYixLQUFpQkQsRUFBRXpjLElBQUYsQ0FBTzBjLENBQVAsQ0FBMUY7QUFBb0csWUFBT0QsQ0FBUDtBQUFTLEdBQWpXLEVBQWtXdmQsRUFBRW1pQixLQUFGLEdBQVEzRCxFQUFFLFVBQVN6RSxDQUFULEVBQVc7QUFBQyxXQUFPL1osRUFBRWdpQixJQUFGLENBQU9MLEVBQUU1SCxDQUFGLEVBQUksQ0FBQyxDQUFMLEVBQU8sQ0FBQyxDQUFSLENBQVAsQ0FBUDtBQUEwQixHQUF4QyxDQUExVyxFQUFvWi9aLEVBQUVvaUIsWUFBRixHQUFlLFVBQVNySSxDQUFULEVBQVc7QUFBQyxTQUFJLElBQUlzRCxJQUFFLEVBQU4sRUFBU0ssSUFBRTFhLFVBQVU5SixNQUFyQixFQUE0QitWLElBQUUsQ0FBOUIsRUFBZ0NzTyxJQUFFdUIsRUFBRS9FLENBQUYsQ0FBdEMsRUFBMkM5SyxJQUFFc08sQ0FBN0MsRUFBK0N0TyxHQUEvQyxFQUFtRDtBQUFDLFVBQUloVyxJQUFFOGdCLEVBQUU5SyxDQUFGLENBQU4sQ0FBVyxJQUFHLENBQUNqUCxFQUFFZ1UsUUFBRixDQUFXcUosQ0FBWCxFQUFhcGtCLENBQWIsQ0FBSixFQUFvQjtBQUFDLFlBQUl3ZixDQUFKLENBQU0sS0FBSUEsSUFBRSxDQUFOLEVBQVFBLElBQUVpRixDQUFGLElBQUsxZCxFQUFFZ1UsUUFBRixDQUFXaFIsVUFBVXlWLENBQVYsQ0FBWCxFQUF3QnhmLENBQXhCLENBQWIsRUFBd0N3ZixHQUF4QyxJQUE2Q0EsTUFBSWlGLENBQUosSUFBT0wsRUFBRXZjLElBQUYsQ0FBTzdILENBQVAsQ0FBUDtBQUFpQjtBQUFDLFlBQU9va0IsQ0FBUDtBQUFTLEdBQWpsQixFQUFrbEJyZCxFQUFFK2hCLFVBQUYsR0FBYXZELEVBQUUsVUFBU3pFLENBQVQsRUFBV3NELENBQVgsRUFBYTtBQUFDLFdBQU9BLElBQUVzRSxFQUFFdEUsQ0FBRixFQUFJLENBQUMsQ0FBTCxFQUFPLENBQUMsQ0FBUixDQUFGLEVBQWFyZCxFQUFFTyxNQUFGLENBQVN3WixDQUFULEVBQVcsVUFBU0EsQ0FBVCxFQUFXO0FBQUMsYUFBTSxDQUFDL1osRUFBRWdVLFFBQUYsQ0FBV3FKLENBQVgsRUFBYXRELENBQWIsQ0FBUDtBQUF1QixLQUE5QyxDQUFwQjtBQUFvRSxHQUFwRixDQUEvbEIsRUFBcXJCL1osRUFBRXFpQixLQUFGLEdBQVEsVUFBU3RJLENBQVQsRUFBVztBQUFDLFNBQUksSUFBSXNELElBQUV0RCxLQUFHL1osRUFBRXllLEdBQUYsQ0FBTTFFLENBQU4sRUFBUStFLENBQVIsRUFBVzVsQixNQUFkLElBQXNCLENBQTVCLEVBQThCd2tCLElBQUVyZCxNQUFNZ2QsQ0FBTixDQUFoQyxFQUF5Q3BPLElBQUUsQ0FBL0MsRUFBaURBLElBQUVvTyxDQUFuRCxFQUFxRHBPLEdBQXJEO0FBQXlEeU8sUUFBRXpPLENBQUYsSUFBS2pQLEVBQUUrZixLQUFGLENBQVFoRyxDQUFSLEVBQVU5SyxDQUFWLENBQUw7QUFBekQsS0FBMkUsT0FBT3lPLENBQVA7QUFBUyxHQUE3eEIsRUFBOHhCMWQsRUFBRXNpQixHQUFGLEdBQU05RCxFQUFFeGUsRUFBRXFpQixLQUFKLENBQXB5QixFQUEreUJyaUIsRUFBRXNDLE1BQUYsR0FBUyxVQUFTeVgsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhO0FBQUMsU0FBSSxJQUFJSyxJQUFFLEVBQU4sRUFBU3pPLElBQUUsQ0FBWCxFQUFhc08sSUFBRXVCLEVBQUUvRSxDQUFGLENBQW5CLEVBQXdCOUssSUFBRXNPLENBQTFCLEVBQTRCdE8sR0FBNUI7QUFBZ0NvTyxVQUFFSyxFQUFFM0QsRUFBRTlLLENBQUYsQ0FBRixJQUFRb08sRUFBRXBPLENBQUYsQ0FBVixHQUFleU8sRUFBRTNELEVBQUU5SyxDQUFGLEVBQUssQ0FBTCxDQUFGLElBQVc4SyxFQUFFOUssQ0FBRixFQUFLLENBQUwsQ0FBMUI7QUFBaEMsS0FBa0UsT0FBT3lPLENBQVA7QUFBUyxHQUFqNUIsQ0FBazVCLElBQUk2RSxJQUFFLFNBQUZBLENBQUUsQ0FBU3RwQixDQUFULEVBQVc7QUFBQyxXQUFPLFVBQVM4Z0IsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhSyxDQUFiLEVBQWU7QUFBQ0wsVUFBRVksRUFBRVosQ0FBRixFQUFJSyxDQUFKLENBQUYsQ0FBUyxLQUFJLElBQUl6TyxJQUFFNlAsRUFBRS9FLENBQUYsQ0FBTixFQUFXd0QsSUFBRSxJQUFFdGtCLENBQUYsR0FBSSxDQUFKLEdBQU1nVyxJQUFFLENBQXpCLEVBQTJCLEtBQUdzTyxDQUFILElBQU1BLElBQUV0TyxDQUFuQyxFQUFxQ3NPLEtBQUd0a0IsQ0FBeEM7QUFBMEMsWUFBR29rQixFQUFFdEQsRUFBRXdELENBQUYsQ0FBRixFQUFPQSxDQUFQLEVBQVN4RCxDQUFULENBQUgsRUFBZSxPQUFPd0QsQ0FBUDtBQUF6RCxPQUFrRSxPQUFNLENBQUMsQ0FBUDtBQUFTLEtBQTNHO0FBQTRHLEdBQTlILENBQStIdmQsRUFBRWtGLFNBQUYsR0FBWXFkLEVBQUUsQ0FBRixDQUFaLEVBQWlCdmlCLEVBQUV3aUIsYUFBRixHQUFnQkQsRUFBRSxDQUFDLENBQUgsQ0FBakMsRUFBdUN2aUIsRUFBRXlpQixXQUFGLEdBQWMsVUFBUzFJLENBQVQsRUFBV3NELENBQVgsRUFBYUssQ0FBYixFQUFlek8sQ0FBZixFQUFpQjtBQUFDLFNBQUksSUFBSXNPLElBQUUsQ0FBQ0csSUFBRU8sRUFBRVAsQ0FBRixFQUFJek8sQ0FBSixFQUFNLENBQU4sQ0FBSCxFQUFhb08sQ0FBYixDQUFOLEVBQXNCcGtCLElBQUUsQ0FBeEIsRUFBMEJ3ZixJQUFFcUcsRUFBRS9FLENBQUYsQ0FBaEMsRUFBcUM5Z0IsSUFBRXdmLENBQXZDLEdBQTBDO0FBQUMsVUFBSWtGLElBQUUvYyxLQUFLc2MsS0FBTCxDQUFXLENBQUNqa0IsSUFBRXdmLENBQUgsSUFBTSxDQUFqQixDQUFOLENBQTBCaUYsRUFBRTNELEVBQUU0RCxDQUFGLENBQUYsSUFBUUosQ0FBUixHQUFVdGtCLElBQUUwa0IsSUFBRSxDQUFkLEdBQWdCbEYsSUFBRWtGLENBQWxCO0FBQW9CLFlBQU8xa0IsQ0FBUDtBQUFTLEdBQXpLLENBQTBLLElBQUl5cEIsSUFBRSxTQUFGQSxDQUFFLENBQVN6cEIsQ0FBVCxFQUFXd2YsQ0FBWCxFQUFha0YsQ0FBYixFQUFlO0FBQUMsV0FBTyxVQUFTNUQsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhSyxDQUFiLEVBQWU7QUFBQyxVQUFJek8sSUFBRSxDQUFOO0FBQUEsVUFBUXNPLElBQUV1QixFQUFFL0UsQ0FBRixDQUFWLENBQWUsSUFBRyxZQUFVLE9BQU8yRCxDQUFwQixFQUFzQixJQUFFemtCLENBQUYsR0FBSWdXLElBQUUsS0FBR3lPLENBQUgsR0FBS0EsQ0FBTCxHQUFPOWMsS0FBSzZkLEdBQUwsQ0FBU2YsSUFBRUgsQ0FBWCxFQUFhdE8sQ0FBYixDQUFiLEdBQTZCc08sSUFBRSxLQUFHRyxDQUFILEdBQUs5YyxLQUFLcWYsR0FBTCxDQUFTdkMsSUFBRSxDQUFYLEVBQWFILENBQWIsQ0FBTCxHQUFxQkcsSUFBRUgsQ0FBRixHQUFJLENBQXhELENBQXRCLEtBQXFGLElBQUdJLEtBQUdELENBQUgsSUFBTUgsQ0FBVCxFQUFXLE9BQU94RCxFQUFFMkQsSUFBRUMsRUFBRTVELENBQUYsRUFBSXNELENBQUosQ0FBSixNQUFjQSxDQUFkLEdBQWdCSyxDQUFoQixHQUFrQixDQUFDLENBQTFCLENBQTRCLElBQUdMLEtBQUdBLENBQU4sRUFBUSxPQUFPLE1BQUlLLElBQUVqRixFQUFFK0UsRUFBRXphLElBQUYsQ0FBT2dYLENBQVAsRUFBUzlLLENBQVQsRUFBV3NPLENBQVgsQ0FBRixFQUFnQnZkLEVBQUVqQixLQUFsQixDQUFOLElBQWdDMmUsSUFBRXpPLENBQWxDLEdBQW9DLENBQUMsQ0FBNUMsQ0FBOEMsS0FBSXlPLElBQUUsSUFBRXprQixDQUFGLEdBQUlnVyxDQUFKLEdBQU1zTyxJQUFFLENBQWQsRUFBZ0IsS0FBR0csQ0FBSCxJQUFNQSxJQUFFSCxDQUF4QixFQUEwQkcsS0FBR3prQixDQUE3QjtBQUErQixZQUFHOGdCLEVBQUUyRCxDQUFGLE1BQU9MLENBQVYsRUFBWSxPQUFPSyxDQUFQO0FBQTNDLE9BQW9ELE9BQU0sQ0FBQyxDQUFQO0FBQVMsS0FBclI7QUFBc1IsR0FBNVMsQ0FBNlMxZCxFQUFFSixPQUFGLEdBQVU4aUIsRUFBRSxDQUFGLEVBQUkxaUIsRUFBRWtGLFNBQU4sRUFBZ0JsRixFQUFFeWlCLFdBQWxCLENBQVYsRUFBeUN6aUIsRUFBRThjLFdBQUYsR0FBYzRGLEVBQUUsQ0FBQyxDQUFILEVBQUsxaUIsRUFBRXdpQixhQUFQLENBQXZELEVBQTZFeGlCLEVBQUUyaUIsS0FBRixHQUFRLFVBQVM1SSxDQUFULEVBQVdzRCxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDLFlBQU1MLENBQU4sS0FBVUEsSUFBRXRELEtBQUcsQ0FBTCxFQUFPQSxJQUFFLENBQW5CLEdBQXNCMkQsTUFBSUEsSUFBRUwsSUFBRXRELENBQUYsR0FBSSxDQUFDLENBQUwsR0FBTyxDQUFiLENBQXRCLENBQXNDLEtBQUksSUFBSTlLLElBQUVyTyxLQUFLNmQsR0FBTCxDQUFTN2QsS0FBS2dpQixJQUFMLENBQVUsQ0FBQ3ZGLElBQUV0RCxDQUFILElBQU0yRCxDQUFoQixDQUFULEVBQTRCLENBQTVCLENBQU4sRUFBcUNILElBQUVsZCxNQUFNNE8sQ0FBTixDQUF2QyxFQUFnRGhXLElBQUUsQ0FBdEQsRUFBd0RBLElBQUVnVyxDQUExRCxFQUE0RGhXLEtBQUk4Z0IsS0FBRzJELENBQW5FO0FBQXFFSCxRQUFFdGtCLENBQUYsSUFBSzhnQixDQUFMO0FBQXJFLEtBQTRFLE9BQU93RCxDQUFQO0FBQVMsR0FBaE8sRUFBaU92ZCxFQUFFNmlCLEtBQUYsR0FBUSxVQUFTOUksQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhO0FBQUMsUUFBRyxRQUFNQSxDQUFOLElBQVNBLElBQUUsQ0FBZCxFQUFnQixPQUFNLEVBQU4sQ0FBUyxLQUFJLElBQUlLLElBQUUsRUFBTixFQUFTek8sSUFBRSxDQUFYLEVBQWFzTyxJQUFFeEQsRUFBRTdnQixNQUFyQixFQUE0QitWLElBQUVzTyxDQUE5QjtBQUFpQ0csUUFBRTVjLElBQUYsQ0FBTzBjLEVBQUV6YSxJQUFGLENBQU9nWCxDQUFQLEVBQVM5SyxDQUFULEVBQVdBLEtBQUdvTyxDQUFkLENBQVA7QUFBakMsS0FBMEQsT0FBT0ssQ0FBUDtBQUFTLEdBQW5WLENBQW9WLElBQUlvRixJQUFFLFNBQUZBLENBQUUsQ0FBUy9JLENBQVQsRUFBV3NELENBQVgsRUFBYUssQ0FBYixFQUFlek8sQ0FBZixFQUFpQnNPLENBQWpCLEVBQW1CO0FBQUMsUUFBRyxFQUFFdE8sYUFBYW9PLENBQWYsQ0FBSCxFQUFxQixPQUFPdEQsRUFBRWpYLEtBQUYsQ0FBUTRhLENBQVIsRUFBVUgsQ0FBVixDQUFQLENBQW9CLElBQUl0a0IsSUFBRXlsQixFQUFFM0UsRUFBRTFWLFNBQUosQ0FBTjtBQUFBLFFBQXFCb1UsSUFBRXNCLEVBQUVqWCxLQUFGLENBQVE3SixDQUFSLEVBQVVza0IsQ0FBVixDQUF2QixDQUFvQyxPQUFPdmQsRUFBRXFlLFFBQUYsQ0FBVzVGLENBQVgsSUFBY0EsQ0FBZCxHQUFnQnhmLENBQXZCO0FBQXlCLEdBQWhJLENBQWlJK0csRUFBRThOLElBQUYsR0FBTzBRLEVBQUUsVUFBU25CLENBQVQsRUFBV0ssQ0FBWCxFQUFhek8sQ0FBYixFQUFlO0FBQUMsUUFBRyxDQUFDalAsRUFBRW9lLFVBQUYsQ0FBYWYsQ0FBYixDQUFKLEVBQW9CLE1BQU0sSUFBSW5QLFNBQUosQ0FBYyxtQ0FBZCxDQUFOLENBQXlELElBQUlxUCxJQUFFaUIsRUFBRSxVQUFTekUsQ0FBVCxFQUFXO0FBQUMsYUFBTytJLEVBQUV6RixDQUFGLEVBQUlFLENBQUosRUFBTUcsQ0FBTixFQUFRLElBQVIsRUFBYXpPLEVBQUVsRCxNQUFGLENBQVNnTyxDQUFULENBQWIsQ0FBUDtBQUFpQyxLQUEvQyxDQUFOLENBQXVELE9BQU93RCxDQUFQO0FBQVMsR0FBL0osQ0FBUCxFQUF3S3ZkLEVBQUUraUIsT0FBRixHQUFVdkUsRUFBRSxVQUFTakIsQ0FBVCxFQUFXdGtCLENBQVgsRUFBYTtBQUFDLFFBQUl3ZixJQUFFelksRUFBRStpQixPQUFGLENBQVVDLFdBQWhCO0FBQUEsUUFBNEJyRixJQUFFLFNBQUZBLENBQUUsR0FBVTtBQUFDLFdBQUksSUFBSTVELElBQUUsQ0FBTixFQUFRc0QsSUFBRXBrQixFQUFFQyxNQUFaLEVBQW1Cd2tCLElBQUVyZCxNQUFNZ2QsQ0FBTixDQUFyQixFQUE4QnBPLElBQUUsQ0FBcEMsRUFBc0NBLElBQUVvTyxDQUF4QyxFQUEwQ3BPLEdBQTFDO0FBQThDeU8sVUFBRXpPLENBQUYsSUFBS2hXLEVBQUVnVyxDQUFGLE1BQU93SixDQUFQLEdBQVN6VixVQUFVK1csR0FBVixDQUFULEdBQXdCOWdCLEVBQUVnVyxDQUFGLENBQTdCO0FBQTlDLE9BQWdGLE9BQUs4SyxJQUFFL1csVUFBVTlKLE1BQWpCO0FBQXlCd2tCLFVBQUU1YyxJQUFGLENBQU9rQyxVQUFVK1csR0FBVixDQUFQO0FBQXpCLE9BQWdELE9BQU8rSSxFQUFFdkYsQ0FBRixFQUFJSSxDQUFKLEVBQU0sSUFBTixFQUFXLElBQVgsRUFBZ0JELENBQWhCLENBQVA7QUFBMEIsS0FBbk0sQ0FBb00sT0FBT0MsQ0FBUDtBQUFTLEdBQTdOLENBQWxMLEVBQWlaLENBQUMzZCxFQUFFK2lCLE9BQUYsQ0FBVUMsV0FBVixHQUFzQmhqQixDQUF2QixFQUEwQmlqQixPQUExQixHQUFrQ3pFLEVBQUUsVUFBU3pFLENBQVQsRUFBV3NELENBQVgsRUFBYTtBQUFDLFFBQUlLLElBQUUsQ0FBQ0wsSUFBRXNFLEVBQUV0RSxDQUFGLEVBQUksQ0FBQyxDQUFMLEVBQU8sQ0FBQyxDQUFSLENBQUgsRUFBZW5rQixNQUFyQixDQUE0QixJQUFHd2tCLElBQUUsQ0FBTCxFQUFPLE1BQU0sSUFBSWpSLEtBQUosQ0FBVSx1Q0FBVixDQUFOLENBQXlELE9BQUtpUixHQUFMLEdBQVU7QUFBQyxVQUFJek8sSUFBRW9PLEVBQUVLLENBQUYsQ0FBTixDQUFXM0QsRUFBRTlLLENBQUYsSUFBS2pQLEVBQUU4TixJQUFGLENBQU9pTSxFQUFFOUssQ0FBRixDQUFQLEVBQVk4SyxDQUFaLENBQUw7QUFBb0I7QUFBQyxHQUF2SixDQUFuYixFQUE0a0IvWixFQUFFa2pCLE9BQUYsR0FBVSxVQUFTalUsQ0FBVCxFQUFXc08sQ0FBWCxFQUFhO0FBQUMsUUFBSXRrQixJQUFFLFNBQUZBLENBQUUsQ0FBUzhnQixDQUFULEVBQVc7QUFBQyxVQUFJc0QsSUFBRXBrQixFQUFFa3FCLEtBQVI7QUFBQSxVQUFjekYsSUFBRSxNQUFJSCxJQUFFQSxFQUFFemEsS0FBRixDQUFRLElBQVIsRUFBYUUsU0FBYixDQUFGLEdBQTBCK1csQ0FBOUIsQ0FBaEIsQ0FBaUQsT0FBT3pXLEVBQUUrWixDQUFGLEVBQUlLLENBQUosTUFBU0wsRUFBRUssQ0FBRixJQUFLek8sRUFBRW5NLEtBQUYsQ0FBUSxJQUFSLEVBQWFFLFNBQWIsQ0FBZCxHQUF1Q3FhLEVBQUVLLENBQUYsQ0FBOUM7QUFBbUQsS0FBdEgsQ0FBdUgsT0FBT3prQixFQUFFa3FCLEtBQUYsR0FBUSxFQUFSLEVBQVdscUIsQ0FBbEI7QUFBb0IsR0FBL3VCLEVBQWd2QitHLEVBQUVvakIsS0FBRixHQUFRNUUsRUFBRSxVQUFTekUsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhSyxDQUFiLEVBQWU7QUFBQyxXQUFPaFEsV0FBVyxZQUFVO0FBQUMsYUFBT3FNLEVBQUVqWCxLQUFGLENBQVEsSUFBUixFQUFhNGEsQ0FBYixDQUFQO0FBQXVCLEtBQTdDLEVBQThDTCxDQUE5QyxDQUFQO0FBQXdELEdBQTFFLENBQXh2QixFQUFvMEJyZCxFQUFFcWpCLEtBQUYsR0FBUXJqQixFQUFFK2lCLE9BQUYsQ0FBVS9pQixFQUFFb2pCLEtBQVosRUFBa0JwakIsQ0FBbEIsRUFBb0IsQ0FBcEIsQ0FBNTBCLEVBQW0yQkEsRUFBRXNqQixRQUFGLEdBQVcsVUFBUzVGLENBQVQsRUFBV3pPLENBQVgsRUFBYXNPLENBQWIsRUFBZTtBQUFDLFFBQUl0a0IsQ0FBSjtBQUFBLFFBQU13ZixDQUFOO0FBQUEsUUFBUWtGLENBQVI7QUFBQSxRQUFVSCxDQUFWO0FBQUEsUUFBWXBhLElBQUUsQ0FBZCxDQUFnQm1hLE1BQUlBLElBQUUsRUFBTixFQUFVLElBQUl0RixJQUFFLFNBQUZBLENBQUUsR0FBVTtBQUFDN1UsVUFBRSxDQUFDLENBQUQsS0FBS21hLEVBQUVnRyxPQUFQLEdBQWUsQ0FBZixHQUFpQnZqQixFQUFFbVksR0FBRixFQUFuQixFQUEyQmxmLElBQUUsSUFBN0IsRUFBa0N1a0IsSUFBRUUsRUFBRTVhLEtBQUYsQ0FBUTJWLENBQVIsRUFBVWtGLENBQVYsQ0FBcEMsRUFBaUQxa0IsTUFBSXdmLElBQUVrRixJQUFFLElBQVIsQ0FBakQ7QUFBK0QsS0FBaEY7QUFBQSxRQUFpRjVELElBQUUsYUFBVTtBQUFDLFVBQUlBLElBQUUvWixFQUFFbVksR0FBRixFQUFOLENBQWMvVSxLQUFHLENBQUMsQ0FBRCxLQUFLbWEsRUFBRWdHLE9BQVYsS0FBb0JuZ0IsSUFBRTJXLENBQXRCLEVBQXlCLElBQUlzRCxJQUFFcE8sS0FBRzhLLElBQUUzVyxDQUFMLENBQU4sQ0FBYyxPQUFPcVYsSUFBRSxJQUFGLEVBQU9rRixJQUFFM2EsU0FBVCxFQUFtQnFhLEtBQUcsQ0FBSCxJQUFNcE8sSUFBRW9PLENBQVIsSUFBV3BrQixNQUFJdXFCLGFBQWF2cUIsQ0FBYixHQUFnQkEsSUFBRSxJQUF0QixHQUE0Qm1LLElBQUUyVyxDQUE5QixFQUFnQ3lELElBQUVFLEVBQUU1YSxLQUFGLENBQVEyVixDQUFSLEVBQVVrRixDQUFWLENBQWxDLEVBQStDMWtCLE1BQUl3ZixJQUFFa0YsSUFBRSxJQUFSLENBQTFELElBQXlFMWtCLEtBQUcsQ0FBQyxDQUFELEtBQUtza0IsRUFBRWtHLFFBQVYsS0FBcUJ4cUIsSUFBRXlVLFdBQVd1SyxDQUFYLEVBQWFvRixDQUFiLENBQXZCLENBQTVGLEVBQW9JRyxDQUEzSTtBQUE2SSxLQUFoUyxDQUFpUyxPQUFPekQsRUFBRTJKLE1BQUYsR0FBUyxZQUFVO0FBQUNGLG1CQUFhdnFCLENBQWIsR0FBZ0JtSyxJQUFFLENBQWxCLEVBQW9CbkssSUFBRXdmLElBQUVrRixJQUFFLElBQTFCO0FBQStCLEtBQW5ELEVBQW9ENUQsQ0FBM0Q7QUFBNkQsR0FBdHZDLEVBQXV2Qy9aLEVBQUUyakIsUUFBRixHQUFXLFVBQVNqRyxDQUFULEVBQVd6TyxDQUFYLEVBQWFzTyxDQUFiLEVBQWU7QUFBQyxRQUFJdGtCLENBQUo7QUFBQSxRQUFNd2YsQ0FBTjtBQUFBLFFBQVFrRixJQUFFLFNBQUZBLENBQUUsQ0FBUzVELENBQVQsRUFBV3NELENBQVgsRUFBYTtBQUFDcGtCLFVBQUUsSUFBRixFQUFPb2tCLE1BQUk1RSxJQUFFaUYsRUFBRTVhLEtBQUYsQ0FBUWlYLENBQVIsRUFBVXNELENBQVYsQ0FBTixDQUFQO0FBQTJCLEtBQW5EO0FBQUEsUUFBb0R0RCxJQUFFeUUsRUFBRSxVQUFTekUsQ0FBVCxFQUFXO0FBQUMsVUFBRzlnQixLQUFHdXFCLGFBQWF2cUIsQ0FBYixDQUFILEVBQW1Cc2tCLENBQXRCLEVBQXdCO0FBQUMsWUFBSUYsSUFBRSxDQUFDcGtCLENBQVAsQ0FBU0EsSUFBRXlVLFdBQVdpUSxDQUFYLEVBQWExTyxDQUFiLENBQUYsRUFBa0JvTyxNQUFJNUUsSUFBRWlGLEVBQUU1YSxLQUFGLENBQVEsSUFBUixFQUFhaVgsQ0FBYixDQUFOLENBQWxCO0FBQXlDLE9BQTNFLE1BQWdGOWdCLElBQUUrRyxFQUFFb2pCLEtBQUYsQ0FBUXpGLENBQVIsRUFBVTFPLENBQVYsRUFBWSxJQUFaLEVBQWlCOEssQ0FBakIsQ0FBRixDQUFzQixPQUFPdEIsQ0FBUDtBQUFTLEtBQTdILENBQXRELENBQXFMLE9BQU9zQixFQUFFMkosTUFBRixHQUFTLFlBQVU7QUFBQ0YsbUJBQWF2cUIsQ0FBYixHQUFnQkEsSUFBRSxJQUFsQjtBQUF1QixLQUEzQyxFQUE0QzhnQixDQUFuRDtBQUFxRCxHQUE1L0MsRUFBNi9DL1osRUFBRTRqQixJQUFGLEdBQU8sVUFBUzdKLENBQVQsRUFBV3NELENBQVgsRUFBYTtBQUFDLFdBQU9yZCxFQUFFK2lCLE9BQUYsQ0FBVTFGLENBQVYsRUFBWXRELENBQVosQ0FBUDtBQUFzQixHQUF4aUQsRUFBeWlEL1osRUFBRTBmLE1BQUYsR0FBUyxVQUFTM0YsQ0FBVCxFQUFXO0FBQUMsV0FBTyxZQUFVO0FBQUMsYUFBTSxDQUFDQSxFQUFFalgsS0FBRixDQUFRLElBQVIsRUFBYUUsU0FBYixDQUFQO0FBQStCLEtBQWpEO0FBQWtELEdBQWhuRCxFQUFpbkRoRCxFQUFFNmpCLE9BQUYsR0FBVSxZQUFVO0FBQUMsUUFBSW5HLElBQUUxYSxTQUFOO0FBQUEsUUFBZ0JpTSxJQUFFeU8sRUFBRXhrQixNQUFGLEdBQVMsQ0FBM0IsQ0FBNkIsT0FBTyxZQUFVO0FBQUMsV0FBSSxJQUFJNmdCLElBQUU5SyxDQUFOLEVBQVFvTyxJQUFFSyxFQUFFek8sQ0FBRixFQUFLbk0sS0FBTCxDQUFXLElBQVgsRUFBZ0JFLFNBQWhCLENBQWQsRUFBeUMrVyxHQUF6QztBQUE4Q3NELFlBQUVLLEVBQUUzRCxDQUFGLEVBQUtoWCxJQUFMLENBQVUsSUFBVixFQUFlc2EsQ0FBZixDQUFGO0FBQTlDLE9BQWtFLE9BQU9BLENBQVA7QUFBUyxLQUE3RjtBQUE4RixHQUFqd0QsRUFBa3dEcmQsRUFBRWtjLEtBQUYsR0FBUSxVQUFTbkMsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhO0FBQUMsV0FBTyxZQUFVO0FBQUMsVUFBRyxFQUFFdEQsQ0FBRixHQUFJLENBQVAsRUFBUyxPQUFPc0QsRUFBRXZhLEtBQUYsQ0FBUSxJQUFSLEVBQWFFLFNBQWIsQ0FBUDtBQUErQixLQUExRDtBQUEyRCxHQUFuMUQsRUFBbzFEaEQsRUFBRStiLE1BQUYsR0FBUyxVQUFTaEMsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhO0FBQUMsUUFBSUssQ0FBSixDQUFNLE9BQU8sWUFBVTtBQUFDLGFBQU8sSUFBRSxFQUFFM0QsQ0FBSixLQUFRMkQsSUFBRUwsRUFBRXZhLEtBQUYsQ0FBUSxJQUFSLEVBQWFFLFNBQWIsQ0FBVixHQUFtQytXLEtBQUcsQ0FBSCxLQUFPc0QsSUFBRSxJQUFULENBQW5DLEVBQWtESyxDQUF6RDtBQUEyRCxLQUE3RTtBQUE4RSxHQUEvN0QsRUFBZzhEMWQsRUFBRXlELElBQUYsR0FBT3pELEVBQUUraUIsT0FBRixDQUFVL2lCLEVBQUUrYixNQUFaLEVBQW1CLENBQW5CLENBQXY4RCxFQUE2OUQvYixFQUFFOGpCLGFBQUYsR0FBZ0J0RixDQUE3K0QsQ0FBKytELElBQUl1RixJQUFFLENBQUMsRUFBQ3BrQixVQUFTLElBQVYsR0FBZ0Jxa0Isb0JBQWhCLENBQXFDLFVBQXJDLENBQVA7QUFBQSxNQUF3REMsSUFBRSxDQUFDLFNBQUQsRUFBVyxlQUFYLEVBQTJCLFVBQTNCLEVBQXNDLHNCQUF0QyxFQUE2RCxnQkFBN0QsRUFBOEUsZ0JBQTlFLENBQTFEO0FBQUEsTUFBMEpDLElBQUUsU0FBRkEsQ0FBRSxDQUFTbkssQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhO0FBQUMsUUFBSUssSUFBRXVHLEVBQUUvcUIsTUFBUjtBQUFBLFFBQWUrVixJQUFFOEssRUFBRTFNLFdBQW5CO0FBQUEsUUFBK0JrUSxJQUFFdmQsRUFBRW9lLFVBQUYsQ0FBYW5QLENBQWIsS0FBaUJBLEVBQUU1SyxTQUFuQixJQUE4Qm9VLENBQS9EO0FBQUEsUUFBaUV4ZixJQUFFLGFBQW5FLENBQWlGLEtBQUlxSyxFQUFFeVcsQ0FBRixFQUFJOWdCLENBQUosS0FBUSxDQUFDK0csRUFBRWdVLFFBQUYsQ0FBV3FKLENBQVgsRUFBYXBrQixDQUFiLENBQVQsSUFBMEJva0IsRUFBRXZjLElBQUYsQ0FBTzdILENBQVAsQ0FBOUIsRUFBd0N5a0IsR0FBeEM7QUFBNkMsT0FBQ3prQixJQUFFZ3JCLEVBQUV2RyxDQUFGLENBQUgsS0FBVzNELENBQVgsSUFBY0EsRUFBRTlnQixDQUFGLE1BQU9za0IsRUFBRXRrQixDQUFGLENBQXJCLElBQTJCLENBQUMrRyxFQUFFZ1UsUUFBRixDQUFXcUosQ0FBWCxFQUFhcGtCLENBQWIsQ0FBNUIsSUFBNkNva0IsRUFBRXZjLElBQUYsQ0FBTzdILENBQVAsQ0FBN0M7QUFBN0M7QUFBb0csR0FBL1YsQ0FBZ1crRyxFQUFFWixJQUFGLEdBQU8sVUFBUzJhLENBQVQsRUFBVztBQUFDLFFBQUcsQ0FBQy9aLEVBQUVxZSxRQUFGLENBQVd0RSxDQUFYLENBQUosRUFBa0IsT0FBTSxFQUFOLENBQVMsSUFBRzRELENBQUgsRUFBSyxPQUFPQSxFQUFFNUQsQ0FBRixDQUFQLENBQVksSUFBSXNELElBQUUsRUFBTixDQUFTLEtBQUksSUFBSUssQ0FBUixJQUFhM0QsQ0FBYjtBQUFlelcsUUFBRXlXLENBQUYsRUFBSTJELENBQUosS0FBUUwsRUFBRXZjLElBQUYsQ0FBTzRjLENBQVAsQ0FBUjtBQUFmLEtBQWlDLE9BQU9xRyxLQUFHRyxFQUFFbkssQ0FBRixFQUFJc0QsQ0FBSixDQUFILEVBQVVBLENBQWpCO0FBQW1CLEdBQTVILEVBQTZIcmQsRUFBRW1rQixPQUFGLEdBQVUsVUFBU3BLLENBQVQsRUFBVztBQUFDLFFBQUcsQ0FBQy9aLEVBQUVxZSxRQUFGLENBQVd0RSxDQUFYLENBQUosRUFBa0IsT0FBTSxFQUFOLENBQVMsSUFBSXNELElBQUUsRUFBTixDQUFTLEtBQUksSUFBSUssQ0FBUixJQUFhM0QsQ0FBYjtBQUFlc0QsUUFBRXZjLElBQUYsQ0FBTzRjLENBQVA7QUFBZixLQUF5QixPQUFPcUcsS0FBR0csRUFBRW5LLENBQUYsRUFBSXNELENBQUosQ0FBSCxFQUFVQSxDQUFqQjtBQUFtQixHQUFuTyxFQUFvT3JkLEVBQUU4UCxNQUFGLEdBQVMsVUFBU2lLLENBQVQsRUFBVztBQUFDLFNBQUksSUFBSXNELElBQUVyZCxFQUFFWixJQUFGLENBQU8yYSxDQUFQLENBQU4sRUFBZ0IyRCxJQUFFTCxFQUFFbmtCLE1BQXBCLEVBQTJCK1YsSUFBRTVPLE1BQU1xZCxDQUFOLENBQTdCLEVBQXNDSCxJQUFFLENBQTVDLEVBQThDQSxJQUFFRyxDQUFoRCxFQUFrREgsR0FBbEQ7QUFBc0R0TyxRQUFFc08sQ0FBRixJQUFLeEQsRUFBRXNELEVBQUVFLENBQUYsQ0FBRixDQUFMO0FBQXRELEtBQW1FLE9BQU90TyxDQUFQO0FBQVMsR0FBclUsRUFBc1VqUCxFQUFFb2tCLFNBQUYsR0FBWSxVQUFTckssQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhSyxDQUFiLEVBQWU7QUFBQ0wsUUFBRVksRUFBRVosQ0FBRixFQUFJSyxDQUFKLENBQUYsQ0FBUyxLQUFJLElBQUl6TyxJQUFFalAsRUFBRVosSUFBRixDQUFPMmEsQ0FBUCxDQUFOLEVBQWdCd0QsSUFBRXRPLEVBQUUvVixNQUFwQixFQUEyQkQsSUFBRSxFQUE3QixFQUFnQ3dmLElBQUUsQ0FBdEMsRUFBd0NBLElBQUU4RSxDQUExQyxFQUE0QzlFLEdBQTVDLEVBQWdEO0FBQUMsVUFBSWtGLElBQUUxTyxFQUFFd0osQ0FBRixDQUFOLENBQVd4ZixFQUFFMGtCLENBQUYsSUFBS04sRUFBRXRELEVBQUU0RCxDQUFGLENBQUYsRUFBT0EsQ0FBUCxFQUFTNUQsQ0FBVCxDQUFMO0FBQWlCLFlBQU85Z0IsQ0FBUDtBQUFTLEdBQWpjLEVBQWtjK0csRUFBRXFrQixLQUFGLEdBQVEsVUFBU3RLLENBQVQsRUFBVztBQUFDLFNBQUksSUFBSXNELElBQUVyZCxFQUFFWixJQUFGLENBQU8yYSxDQUFQLENBQU4sRUFBZ0IyRCxJQUFFTCxFQUFFbmtCLE1BQXBCLEVBQTJCK1YsSUFBRTVPLE1BQU1xZCxDQUFOLENBQTdCLEVBQXNDSCxJQUFFLENBQTVDLEVBQThDQSxJQUFFRyxDQUFoRCxFQUFrREgsR0FBbEQ7QUFBc0R0TyxRQUFFc08sQ0FBRixJQUFLLENBQUNGLEVBQUVFLENBQUYsQ0FBRCxFQUFNeEQsRUFBRXNELEVBQUVFLENBQUYsQ0FBRixDQUFOLENBQUw7QUFBdEQsS0FBMEUsT0FBT3RPLENBQVA7QUFBUyxHQUF6aUIsRUFBMGlCalAsRUFBRXNrQixNQUFGLEdBQVMsVUFBU3ZLLENBQVQsRUFBVztBQUFDLFNBQUksSUFBSXNELElBQUUsRUFBTixFQUFTSyxJQUFFMWQsRUFBRVosSUFBRixDQUFPMmEsQ0FBUCxDQUFYLEVBQXFCOUssSUFBRSxDQUF2QixFQUF5QnNPLElBQUVHLEVBQUV4a0IsTUFBakMsRUFBd0MrVixJQUFFc08sQ0FBMUMsRUFBNEN0TyxHQUE1QztBQUFnRG9PLFFBQUV0RCxFQUFFMkQsRUFBRXpPLENBQUYsQ0FBRixDQUFGLElBQVd5TyxFQUFFek8sQ0FBRixDQUFYO0FBQWhELEtBQWdFLE9BQU9vTyxDQUFQO0FBQVMsR0FBeG9CLEVBQXlvQnJkLEVBQUV1a0IsU0FBRixHQUFZdmtCLEVBQUV3a0IsT0FBRixHQUFVLFVBQVN6SyxDQUFULEVBQVc7QUFBQyxRQUFJc0QsSUFBRSxFQUFOLENBQVMsS0FBSSxJQUFJSyxDQUFSLElBQWEzRCxDQUFiO0FBQWUvWixRQUFFb2UsVUFBRixDQUFhckUsRUFBRTJELENBQUYsQ0FBYixLQUFvQkwsRUFBRXZjLElBQUYsQ0FBTzRjLENBQVAsQ0FBcEI7QUFBZixLQUE2QyxPQUFPTCxFQUFFdGMsSUFBRixFQUFQO0FBQWdCLEdBQWp2QixDQUFrdkIsSUFBSTBqQixJQUFFLFNBQUZBLENBQUUsQ0FBU2pILENBQVQsRUFBV3BhLENBQVgsRUFBYTtBQUFDLFdBQU8sVUFBUzJXLENBQVQsRUFBVztBQUFDLFVBQUlzRCxJQUFFcmEsVUFBVTlKLE1BQWhCLENBQXVCLElBQUdrSyxNQUFJMlcsSUFBRTVhLE9BQU80YSxDQUFQLENBQU4sR0FBaUJzRCxJQUFFLENBQUYsSUFBSyxRQUFNdEQsQ0FBL0IsRUFBaUMsT0FBT0EsQ0FBUCxDQUFTLEtBQUksSUFBSTJELElBQUUsQ0FBVixFQUFZQSxJQUFFTCxDQUFkLEVBQWdCSyxHQUFoQjtBQUFvQixhQUFJLElBQUl6TyxJQUFFak0sVUFBVTBhLENBQVYsQ0FBTixFQUFtQkgsSUFBRUMsRUFBRXZPLENBQUYsQ0FBckIsRUFBMEJoVyxJQUFFc2tCLEVBQUVya0IsTUFBOUIsRUFBcUN1ZixJQUFFLENBQTNDLEVBQTZDQSxJQUFFeGYsQ0FBL0MsRUFBaUR3ZixHQUFqRCxFQUFxRDtBQUFDLGNBQUlrRixJQUFFSixFQUFFOUUsQ0FBRixDQUFOLENBQVdyVixLQUFHLEtBQUssQ0FBTCxLQUFTMlcsRUFBRTRELENBQUYsQ0FBWixLQUFtQjVELEVBQUU0RCxDQUFGLElBQUsxTyxFQUFFME8sQ0FBRixDQUF4QjtBQUE4QjtBQUFuSCxPQUFtSCxPQUFPNUQsQ0FBUDtBQUFTLEtBQWhOO0FBQWlOLEdBQXJPLENBQXNPL1osRUFBRTBrQixNQUFGLEdBQVNELEVBQUV6a0IsRUFBRW1rQixPQUFKLENBQVQsRUFBc0Jua0IsRUFBRTJrQixTQUFGLEdBQVkza0IsRUFBRTRrQixNQUFGLEdBQVNILEVBQUV6a0IsRUFBRVosSUFBSixDQUEzQyxFQUFxRFksRUFBRXdmLE9BQUYsR0FBVSxVQUFTekYsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhSyxDQUFiLEVBQWU7QUFBQ0wsUUFBRVksRUFBRVosQ0FBRixFQUFJSyxDQUFKLENBQUYsQ0FBUyxLQUFJLElBQUl6TyxDQUFKLEVBQU1zTyxJQUFFdmQsRUFBRVosSUFBRixDQUFPMmEsQ0FBUCxDQUFSLEVBQWtCOWdCLElBQUUsQ0FBcEIsRUFBc0J3ZixJQUFFOEUsRUFBRXJrQixNQUE5QixFQUFxQ0QsSUFBRXdmLENBQXZDLEVBQXlDeGYsR0FBekM7QUFBNkMsVUFBR29rQixFQUFFdEQsRUFBRTlLLElBQUVzTyxFQUFFdGtCLENBQUYsQ0FBSixDQUFGLEVBQVlnVyxDQUFaLEVBQWM4SyxDQUFkLENBQUgsRUFBb0IsT0FBTzlLLENBQVA7QUFBakU7QUFBMEUsR0FBbEssQ0FBbUssSUFBSTRWLENBQUo7QUFBQSxNQUFNQyxDQUFOO0FBQUEsTUFBUUMsSUFBRSxTQUFGQSxDQUFFLENBQVNoTCxDQUFULEVBQVdzRCxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDLFdBQU9MLEtBQUtLLENBQVo7QUFBYyxHQUF4QyxDQUF5QzFkLEVBQUVrQixJQUFGLEdBQU9zZCxFQUFFLFVBQVN6RSxDQUFULEVBQVdzRCxDQUFYLEVBQWE7QUFBQyxRQUFJSyxJQUFFLEVBQU47QUFBQSxRQUFTek8sSUFBRW9PLEVBQUUsQ0FBRixDQUFYLENBQWdCLElBQUcsUUFBTXRELENBQVQsRUFBVyxPQUFPMkQsQ0FBUCxDQUFTMWQsRUFBRW9lLFVBQUYsQ0FBYW5QLENBQWIsS0FBaUIsSUFBRW9PLEVBQUVua0IsTUFBSixLQUFhK1YsSUFBRStPLEVBQUUvTyxDQUFGLEVBQUlvTyxFQUFFLENBQUYsQ0FBSixDQUFmLEdBQTBCQSxJQUFFcmQsRUFBRW1rQixPQUFGLENBQVVwSyxDQUFWLENBQTdDLEtBQTREOUssSUFBRThWLENBQUYsRUFBSTFILElBQUVzRSxFQUFFdEUsQ0FBRixFQUFJLENBQUMsQ0FBTCxFQUFPLENBQUMsQ0FBUixDQUFOLEVBQWlCdEQsSUFBRTVhLE9BQU80YSxDQUFQLENBQS9FLEVBQTBGLEtBQUksSUFBSXdELElBQUUsQ0FBTixFQUFRdGtCLElBQUVva0IsRUFBRW5rQixNQUFoQixFQUF1QnFrQixJQUFFdGtCLENBQXpCLEVBQTJCc2tCLEdBQTNCLEVBQStCO0FBQUMsVUFBSTlFLElBQUU0RSxFQUFFRSxDQUFGLENBQU47QUFBQSxVQUFXSSxJQUFFNUQsRUFBRXRCLENBQUYsQ0FBYixDQUFrQnhKLEVBQUUwTyxDQUFGLEVBQUlsRixDQUFKLEVBQU1zQixDQUFOLE1BQVcyRCxFQUFFakYsQ0FBRixJQUFLa0YsQ0FBaEI7QUFBbUIsWUFBT0QsQ0FBUDtBQUFTLEdBQTVOLENBQVAsRUFBcU8xZCxFQUFFZ2xCLElBQUYsR0FBT3hHLEVBQUUsVUFBU3pFLENBQVQsRUFBVzJELENBQVgsRUFBYTtBQUFDLFFBQUlMLENBQUo7QUFBQSxRQUFNcE8sSUFBRXlPLEVBQUUsQ0FBRixDQUFSLENBQWEsT0FBTzFkLEVBQUVvZSxVQUFGLENBQWFuUCxDQUFiLEtBQWlCQSxJQUFFalAsRUFBRTBmLE1BQUYsQ0FBU3pRLENBQVQsQ0FBRixFQUFjLElBQUV5TyxFQUFFeGtCLE1BQUosS0FBYW1rQixJQUFFSyxFQUFFLENBQUYsQ0FBZixDQUEvQixLQUFzREEsSUFBRTFkLEVBQUVXLEdBQUYsQ0FBTWdoQixFQUFFakUsQ0FBRixFQUFJLENBQUMsQ0FBTCxFQUFPLENBQUMsQ0FBUixDQUFOLEVBQWlCcEgsTUFBakIsQ0FBRixFQUEyQnJILElBQUUsV0FBUzhLLENBQVQsRUFBV3NELENBQVgsRUFBYTtBQUFDLGFBQU0sQ0FBQ3JkLEVBQUVnVSxRQUFGLENBQVcwSixDQUFYLEVBQWFMLENBQWIsQ0FBUDtBQUF1QixLQUF4SCxHQUEwSHJkLEVBQUVrQixJQUFGLENBQU82WSxDQUFQLEVBQVM5SyxDQUFULEVBQVdvTyxDQUFYLENBQWpJO0FBQStJLEdBQTVLLENBQTVPLEVBQTBacmQsRUFBRWlsQixRQUFGLEdBQVdSLEVBQUV6a0IsRUFBRW1rQixPQUFKLEVBQVksQ0FBQyxDQUFiLENBQXJhLEVBQXFibmtCLEVBQUVvUSxNQUFGLEdBQVMsVUFBUzJKLENBQVQsRUFBV3NELENBQVgsRUFBYTtBQUFDLFFBQUlLLElBQUVnQixFQUFFM0UsQ0FBRixDQUFOLENBQVcsT0FBT3NELEtBQUdyZCxFQUFFMmtCLFNBQUYsQ0FBWWpILENBQVosRUFBY0wsQ0FBZCxDQUFILEVBQW9CSyxDQUEzQjtBQUE2QixHQUFwZixFQUFxZjFkLEVBQUVxZ0IsS0FBRixHQUFRLFVBQVN0RyxDQUFULEVBQVc7QUFBQyxXQUFPL1osRUFBRXFlLFFBQUYsQ0FBV3RFLENBQVgsSUFBYy9aLEVBQUVNLE9BQUYsQ0FBVXlaLENBQVYsSUFBYUEsRUFBRXZhLEtBQUYsRUFBYixHQUF1QlEsRUFBRTBrQixNQUFGLENBQVMsRUFBVCxFQUFZM0ssQ0FBWixDQUFyQyxHQUFvREEsQ0FBM0Q7QUFBNkQsR0FBdGtCLEVBQXVrQi9aLEVBQUVrbEIsR0FBRixHQUFNLFVBQVNuTCxDQUFULEVBQVdzRCxDQUFYLEVBQWE7QUFBQyxXQUFPQSxFQUFFdEQsQ0FBRixHQUFLQSxDQUFaO0FBQWMsR0FBem1CLEVBQTBtQi9aLEVBQUVtbEIsT0FBRixHQUFVLFVBQVNwTCxDQUFULEVBQVdzRCxDQUFYLEVBQWE7QUFBQyxRQUFJSyxJQUFFMWQsRUFBRVosSUFBRixDQUFPaWUsQ0FBUCxDQUFOO0FBQUEsUUFBZ0JwTyxJQUFFeU8sRUFBRXhrQixNQUFwQixDQUEyQixJQUFHLFFBQU02Z0IsQ0FBVCxFQUFXLE9BQU0sQ0FBQzlLLENBQVAsQ0FBUyxLQUFJLElBQUlzTyxJQUFFcGUsT0FBTzRhLENBQVAsQ0FBTixFQUFnQjlnQixJQUFFLENBQXRCLEVBQXdCQSxJQUFFZ1csQ0FBMUIsRUFBNEJoVyxHQUE1QixFQUFnQztBQUFDLFVBQUl3ZixJQUFFaUYsRUFBRXprQixDQUFGLENBQU4sQ0FBVyxJQUFHb2tCLEVBQUU1RSxDQUFGLE1BQU84RSxFQUFFOUUsQ0FBRixDQUFQLElBQWEsRUFBRUEsS0FBSzhFLENBQVAsQ0FBaEIsRUFBMEIsT0FBTSxDQUFDLENBQVA7QUFBUyxZQUFNLENBQUMsQ0FBUDtBQUFTLEdBQXp3QixFQUEwd0JzSCxJQUFFLFdBQVM5SyxDQUFULEVBQVdzRCxDQUFYLEVBQWFLLENBQWIsRUFBZXpPLENBQWYsRUFBaUI7QUFBQyxRQUFHOEssTUFBSXNELENBQVAsRUFBUyxPQUFPLE1BQUl0RCxDQUFKLElBQU8sSUFBRUEsQ0FBRixJQUFLLElBQUVzRCxDQUFyQixDQUF1QixJQUFHLFFBQU10RCxDQUFOLElBQVMsUUFBTXNELENBQWxCLEVBQW9CLE9BQU0sQ0FBQyxDQUFQLENBQVMsSUFBR3RELEtBQUdBLENBQU4sRUFBUSxPQUFPc0QsS0FBR0EsQ0FBVixDQUFZLElBQUlFLFdBQVN4RCxDQUFULHlDQUFTQSxDQUFULENBQUosQ0FBZSxPQUFNLENBQUMsZUFBYXdELENBQWIsSUFBZ0IsYUFBV0EsQ0FBM0IsSUFBOEIsb0JBQWlCRixDQUFqQix5Q0FBaUJBLENBQWpCLEVBQS9CLEtBQW9EeUgsRUFBRS9LLENBQUYsRUFBSXNELENBQUosRUFBTUssQ0FBTixFQUFRek8sQ0FBUixDQUExRDtBQUFxRSxHQUFuOEIsRUFBbzhCNlYsSUFBRSxXQUFTL0ssQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhSyxDQUFiLEVBQWV6TyxDQUFmLEVBQWlCO0FBQUM4SyxpQkFBYS9aLENBQWIsS0FBaUIrWixJQUFFQSxFQUFFNkQsUUFBckIsR0FBK0JQLGFBQWFyZCxDQUFiLEtBQWlCcWQsSUFBRUEsRUFBRU8sUUFBckIsQ0FBL0IsQ0FBOEQsSUFBSUwsSUFBRS9HLEVBQUV6VCxJQUFGLENBQU9nWCxDQUFQLENBQU4sQ0FBZ0IsSUFBR3dELE1BQUkvRyxFQUFFelQsSUFBRixDQUFPc2EsQ0FBUCxDQUFQLEVBQWlCLE9BQU0sQ0FBQyxDQUFQLENBQVMsUUFBT0UsQ0FBUCxHQUFVLEtBQUksaUJBQUosQ0FBc0IsS0FBSSxpQkFBSjtBQUFzQixlQUFNLEtBQUd4RCxDQUFILElBQU0sS0FBR3NELENBQWYsQ0FBaUIsS0FBSSxpQkFBSjtBQUFzQixlQUFNLENBQUN0RCxDQUFELElBQUksQ0FBQ0EsQ0FBTCxHQUFPLENBQUNzRCxDQUFELElBQUksQ0FBQ0EsQ0FBWixHQUFjLEtBQUcsQ0FBQ3RELENBQUosR0FBTSxJQUFFLENBQUNBLENBQUgsSUFBTSxJQUFFc0QsQ0FBZCxHQUFnQixDQUFDdEQsQ0FBRCxJQUFJLENBQUNzRCxDQUF6QyxDQUEyQyxLQUFJLGVBQUosQ0FBb0IsS0FBSSxrQkFBSjtBQUF1QixlQUFNLENBQUN0RCxDQUFELElBQUksQ0FBQ3NELENBQVgsQ0FBYSxLQUFJLGlCQUFKO0FBQXNCLGVBQU9sRSxFQUFFaU0sT0FBRixDQUFVcmlCLElBQVYsQ0FBZWdYLENBQWYsTUFBb0JaLEVBQUVpTSxPQUFGLENBQVVyaUIsSUFBVixDQUFlc2EsQ0FBZixDQUEzQixDQUF0TixDQUFtUSxJQUFJcGtCLElBQUUscUJBQW1Cc2tCLENBQXpCLENBQTJCLElBQUcsQ0FBQ3RrQixDQUFKLEVBQU07QUFBQyxVQUFHLG9CQUFpQjhnQixDQUFqQix5Q0FBaUJBLENBQWpCLE1BQW9CLG9CQUFpQnNELENBQWpCLHlDQUFpQkEsQ0FBakIsRUFBdkIsRUFBMEMsT0FBTSxDQUFDLENBQVAsQ0FBUyxJQUFJNUUsSUFBRXNCLEVBQUUxTSxXQUFSO0FBQUEsVUFBb0JzUSxJQUFFTixFQUFFaFEsV0FBeEIsQ0FBb0MsSUFBR29MLE1BQUlrRixDQUFKLElBQU8sRUFBRTNkLEVBQUVvZSxVQUFGLENBQWEzRixDQUFiLEtBQWlCQSxhQUFhQSxDQUE5QixJQUFpQ3pZLEVBQUVvZSxVQUFGLENBQWFULENBQWIsQ0FBakMsSUFBa0RBLGFBQWFBLENBQWpFLENBQVAsSUFBNEUsaUJBQWdCNUQsQ0FBNUYsSUFBK0YsaUJBQWdCc0QsQ0FBbEgsRUFBb0gsT0FBTSxDQUFDLENBQVA7QUFBUyxTQUFFcE8sS0FBRyxFQUFMLENBQVEsS0FBSSxJQUFJdU8sSUFBRSxDQUFDRSxJQUFFQSxLQUFHLEVBQU4sRUFBVXhrQixNQUFwQixFQUEyQnNrQixHQUEzQjtBQUFnQyxVQUFHRSxFQUFFRixDQUFGLE1BQU96RCxDQUFWLEVBQVksT0FBTzlLLEVBQUV1TyxDQUFGLE1BQU9ILENBQWQ7QUFBNUMsS0FBNEQsSUFBR0ssRUFBRTVjLElBQUYsQ0FBT2laLENBQVAsR0FBVTlLLEVBQUVuTyxJQUFGLENBQU91YyxDQUFQLENBQVYsRUFBb0Jwa0IsQ0FBdkIsRUFBeUI7QUFBQyxVQUFHLENBQUN1a0IsSUFBRXpELEVBQUU3Z0IsTUFBTCxNQUFlbWtCLEVBQUVua0IsTUFBcEIsRUFBMkIsT0FBTSxDQUFDLENBQVAsQ0FBUyxPQUFLc2tCLEdBQUw7QUFBVSxZQUFHLENBQUNxSCxFQUFFOUssRUFBRXlELENBQUYsQ0FBRixFQUFPSCxFQUFFRyxDQUFGLENBQVAsRUFBWUUsQ0FBWixFQUFjek8sQ0FBZCxDQUFKLEVBQXFCLE9BQU0sQ0FBQyxDQUFQO0FBQS9CO0FBQXdDLEtBQXRHLE1BQTBHO0FBQUMsVUFBSTdMLENBQUo7QUFBQSxVQUFNNlUsSUFBRWpZLEVBQUVaLElBQUYsQ0FBTzJhLENBQVAsQ0FBUixDQUFrQixJQUFHeUQsSUFBRXZGLEVBQUUvZSxNQUFKLEVBQVc4RyxFQUFFWixJQUFGLENBQU9pZSxDQUFQLEVBQVVua0IsTUFBVixLQUFtQnNrQixDQUFqQyxFQUFtQyxPQUFNLENBQUMsQ0FBUCxDQUFTLE9BQUtBLEdBQUw7QUFBVSxZQUFHcGEsSUFBRTZVLEVBQUV1RixDQUFGLENBQUYsRUFBTyxDQUFDbGEsRUFBRStaLENBQUYsRUFBSWphLENBQUosQ0FBRCxJQUFTLENBQUN5aEIsRUFBRTlLLEVBQUUzVyxDQUFGLENBQUYsRUFBT2lhLEVBQUVqYSxDQUFGLENBQVAsRUFBWXNhLENBQVosRUFBY3pPLENBQWQsQ0FBcEIsRUFBcUMsT0FBTSxDQUFDLENBQVA7QUFBL0M7QUFBd0QsWUFBT3lPLEVBQUUySCxHQUFGLElBQVFwVyxFQUFFb1csR0FBRixFQUFSLEVBQWdCLENBQUMsQ0FBeEI7QUFBMEIsR0FBeDNELEVBQXkzRHJsQixFQUFFc2xCLE9BQUYsR0FBVSxVQUFTdkwsQ0FBVCxFQUFXc0QsQ0FBWCxFQUFhO0FBQUMsV0FBT3dILEVBQUU5SyxDQUFGLEVBQUlzRCxDQUFKLENBQVA7QUFBYyxHQUEvNUQsRUFBZzZEcmQsRUFBRXVsQixPQUFGLEdBQVUsVUFBU3hMLENBQVQsRUFBVztBQUFDLFdBQU8sUUFBTUEsQ0FBTixLQUFVamEsRUFBRWlhLENBQUYsTUFBTy9aLEVBQUVNLE9BQUYsQ0FBVXlaLENBQVYsS0FBYy9aLEVBQUU2Z0IsUUFBRixDQUFXOUcsQ0FBWCxDQUFkLElBQTZCL1osRUFBRTRoQixXQUFGLENBQWM3SCxDQUFkLENBQXBDLElBQXNELE1BQUlBLEVBQUU3Z0IsTUFBNUQsR0FBbUUsTUFBSThHLEVBQUVaLElBQUYsQ0FBTzJhLENBQVAsRUFBVTdnQixNQUEzRixDQUFQO0FBQTBHLEdBQWhpRSxFQUFpaUU4RyxFQUFFd1MsU0FBRixHQUFZLFVBQVN1SCxDQUFULEVBQVc7QUFBQyxXQUFNLEVBQUUsQ0FBQ0EsQ0FBRCxJQUFJLE1BQUlBLEVBQUVoSixRQUFaLENBQU47QUFBNEIsR0FBcmxFLEVBQXNsRS9RLEVBQUVNLE9BQUYsR0FBVW9kLEtBQUcsVUFBUzNELENBQVQsRUFBVztBQUFDLFdBQU0scUJBQW1CdkQsRUFBRXpULElBQUYsQ0FBT2dYLENBQVAsQ0FBekI7QUFBbUMsR0FBbHBFLEVBQW1wRS9aLEVBQUVxZSxRQUFGLEdBQVcsVUFBU3RFLENBQVQsRUFBVztBQUFDLFFBQUlzRCxXQUFTdEQsQ0FBVCx5Q0FBU0EsQ0FBVCxDQUFKLENBQWUsT0FBTSxlQUFhc0QsQ0FBYixJQUFnQixhQUFXQSxDQUFYLElBQWMsQ0FBQyxDQUFDdEQsQ0FBdEM7QUFBd0MsR0FBanVFLEVBQWt1RS9aLEVBQUUrZSxJQUFGLENBQU8sQ0FBQyxXQUFELEVBQWEsVUFBYixFQUF3QixRQUF4QixFQUFpQyxRQUFqQyxFQUEwQyxNQUExQyxFQUFpRCxRQUFqRCxFQUEwRCxPQUExRCxFQUFrRSxRQUFsRSxFQUEyRSxLQUEzRSxFQUFpRixTQUFqRixFQUEyRixLQUEzRixFQUFpRyxTQUFqRyxDQUFQLEVBQW1ILFVBQVMxQixDQUFULEVBQVc7QUFBQ3JkLE1BQUUsT0FBS3FkLENBQVAsSUFBVSxVQUFTdEQsQ0FBVCxFQUFXO0FBQUMsYUFBT3ZELEVBQUV6VCxJQUFGLENBQU9nWCxDQUFQLE1BQVksYUFBV3NELENBQVgsR0FBYSxHQUFoQztBQUFvQyxLQUExRDtBQUEyRCxHQUExTCxDQUFsdUUsRUFBODVFcmQsRUFBRTRoQixXQUFGLENBQWM1ZSxTQUFkLE1BQTJCaEQsRUFBRTRoQixXQUFGLEdBQWMsVUFBUzdILENBQVQsRUFBVztBQUFDLFdBQU96VyxFQUFFeVcsQ0FBRixFQUFJLFFBQUosQ0FBUDtBQUFxQixHQUExRSxDQUE5NUUsQ0FBMCtFLElBQUl5TCxJQUFFekwsRUFBRXRULFFBQUYsSUFBWXNULEVBQUV0VCxRQUFGLENBQVdnZixVQUE3QixDQUF3QyxjQUFZLE9BQU0sR0FBbEIsSUFBdUIsb0JBQWlCQyxTQUFqQix5Q0FBaUJBLFNBQWpCLEVBQXZCLElBQW1ELGNBQVksT0FBT0YsQ0FBdEUsS0FBMEV4bEIsRUFBRW9lLFVBQUYsR0FBYSxVQUFTckUsQ0FBVCxFQUFXO0FBQUMsV0FBTSxjQUFZLE9BQU9BLENBQW5CLElBQXNCLENBQUMsQ0FBN0I7QUFBK0IsR0FBbEksR0FBb0kvWixFQUFFMmxCLFFBQUYsR0FBVyxVQUFTNUwsQ0FBVCxFQUFXO0FBQUMsV0FBTSxDQUFDL1osRUFBRTRsQixRQUFGLENBQVc3TCxDQUFYLENBQUQsSUFBZ0I0TCxTQUFTNUwsQ0FBVCxDQUFoQixJQUE2QixDQUFDaGIsTUFBTUUsV0FBVzhhLENBQVgsQ0FBTixDQUFwQztBQUF5RCxHQUFwTixFQUFxTi9aLEVBQUVqQixLQUFGLEdBQVEsVUFBU2diLENBQVQsRUFBVztBQUFDLFdBQU8vWixFQUFFUyxRQUFGLENBQVdzWixDQUFYLEtBQWVoYixNQUFNZ2IsQ0FBTixDQUF0QjtBQUErQixHQUF4USxFQUF5US9aLEVBQUVraUIsU0FBRixHQUFZLFVBQVNuSSxDQUFULEVBQVc7QUFBQyxXQUFNLENBQUMsQ0FBRCxLQUFLQSxDQUFMLElBQVEsQ0FBQyxDQUFELEtBQUtBLENBQWIsSUFBZ0IsdUJBQXFCdkQsRUFBRXpULElBQUYsQ0FBT2dYLENBQVAsQ0FBM0M7QUFBcUQsR0FBdFYsRUFBdVYvWixFQUFFNmxCLE1BQUYsR0FBUyxVQUFTOUwsQ0FBVCxFQUFXO0FBQUMsV0FBTyxTQUFPQSxDQUFkO0FBQWdCLEdBQTVYLEVBQTZYL1osRUFBRThsQixXQUFGLEdBQWMsVUFBUy9MLENBQVQsRUFBVztBQUFDLFdBQU8sS0FBSyxDQUFMLEtBQVNBLENBQWhCO0FBQWtCLEdBQXphLEVBQTBhL1osRUFBRStsQixHQUFGLEdBQU0sVUFBU2hNLENBQVQsRUFBV3NELENBQVgsRUFBYTtBQUFDLFFBQUcsQ0FBQ3JkLEVBQUVNLE9BQUYsQ0FBVStjLENBQVYsQ0FBSixFQUFpQixPQUFPL1osRUFBRXlXLENBQUYsRUFBSXNELENBQUosQ0FBUCxDQUFjLEtBQUksSUFBSUssSUFBRUwsRUFBRW5rQixNQUFSLEVBQWUrVixJQUFFLENBQXJCLEVBQXVCQSxJQUFFeU8sQ0FBekIsRUFBMkJ6TyxHQUEzQixFQUErQjtBQUFDLFVBQUlzTyxJQUFFRixFQUFFcE8sQ0FBRixDQUFOLENBQVcsSUFBRyxRQUFNOEssQ0FBTixJQUFTLENBQUM5Z0IsRUFBRThKLElBQUYsQ0FBT2dYLENBQVAsRUFBU3dELENBQVQsQ0FBYixFQUF5QixPQUFNLENBQUMsQ0FBUCxDQUFTeEQsSUFBRUEsRUFBRXdELENBQUYsQ0FBRjtBQUFPLFlBQU0sQ0FBQyxDQUFDRyxDQUFSO0FBQVUsR0FBM2pCLEVBQTRqQjFkLEVBQUVnbUIsVUFBRixHQUFhLFlBQVU7QUFBQyxXQUFPak0sRUFBRXZaLENBQUYsR0FBSTZjLENBQUosRUFBTSxJQUFiO0FBQWtCLEdBQXRtQixFQUF1bUJyZCxFQUFFbWUsUUFBRixHQUFXLFVBQVNwRSxDQUFULEVBQVc7QUFBQyxXQUFPQSxDQUFQO0FBQVMsR0FBdm9CLEVBQXdvQi9aLEVBQUVpbUIsUUFBRixHQUFXLFVBQVNsTSxDQUFULEVBQVc7QUFBQyxXQUFPLFlBQVU7QUFBQyxhQUFPQSxDQUFQO0FBQVMsS0FBM0I7QUFBNEIsR0FBM3JCLEVBQTRyQi9aLEVBQUU2TixJQUFGLEdBQU8sWUFBVSxDQUFFLENBQS9zQixFQUFndEI3TixFQUFFdWUsUUFBRixHQUFXLFVBQVNsQixDQUFULEVBQVc7QUFBQyxXQUFPcmQsRUFBRU0sT0FBRixDQUFVK2MsQ0FBVixJQUFhLFVBQVN0RCxDQUFULEVBQVc7QUFBQyxhQUFPNkUsRUFBRTdFLENBQUYsRUFBSXNELENBQUosQ0FBUDtBQUFjLEtBQXZDLEdBQXdDc0IsRUFBRXRCLENBQUYsQ0FBL0M7QUFBb0QsR0FBM3hCLEVBQTR4QnJkLEVBQUVrbUIsVUFBRixHQUFhLFVBQVM3SSxDQUFULEVBQVc7QUFBQyxXQUFPLFFBQU1BLENBQU4sR0FBUSxZQUFVLENBQUUsQ0FBcEIsR0FBcUIsVUFBU3RELENBQVQsRUFBVztBQUFDLGFBQU8vWixFQUFFTSxPQUFGLENBQVV5WixDQUFWLElBQWE2RSxFQUFFdkIsQ0FBRixFQUFJdEQsQ0FBSixDQUFiLEdBQW9Cc0QsRUFBRXRELENBQUYsQ0FBM0I7QUFBZ0MsS0FBeEU7QUFBeUUsR0FBOTNCLEVBQSszQi9aLEVBQUVzZSxPQUFGLEdBQVV0ZSxFQUFFeWEsT0FBRixHQUFVLFVBQVM0QyxDQUFULEVBQVc7QUFBQyxXQUFPQSxJQUFFcmQsRUFBRTJrQixTQUFGLENBQVksRUFBWixFQUFldEgsQ0FBZixDQUFGLEVBQW9CLFVBQVN0RCxDQUFULEVBQVc7QUFBQyxhQUFPL1osRUFBRW1sQixPQUFGLENBQVVwTCxDQUFWLEVBQVlzRCxDQUFaLENBQVA7QUFBc0IsS0FBN0Q7QUFBOEQsR0FBNzlCLEVBQTg5QnJkLEVBQUVtbUIsS0FBRixHQUFRLFVBQVNwTSxDQUFULEVBQVdzRCxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDLFFBQUl6TyxJQUFFNU8sTUFBTU8sS0FBSzZkLEdBQUwsQ0FBUyxDQUFULEVBQVcxRSxDQUFYLENBQU4sQ0FBTixDQUEyQnNELElBQUVXLEVBQUVYLENBQUYsRUFBSUssQ0FBSixFQUFNLENBQU4sQ0FBRixDQUFXLEtBQUksSUFBSUgsSUFBRSxDQUFWLEVBQVlBLElBQUV4RCxDQUFkLEVBQWdCd0QsR0FBaEI7QUFBb0J0TyxRQUFFc08sQ0FBRixJQUFLRixFQUFFRSxDQUFGLENBQUw7QUFBcEIsS0FBOEIsT0FBT3RPLENBQVA7QUFBUyxHQUFua0MsRUFBb2tDalAsRUFBRW9nQixNQUFGLEdBQVMsVUFBU3JHLENBQVQsRUFBV3NELENBQVgsRUFBYTtBQUFDLFdBQU8sUUFBTUEsQ0FBTixLQUFVQSxJQUFFdEQsQ0FBRixFQUFJQSxJQUFFLENBQWhCLEdBQW1CQSxJQUFFblosS0FBS3NjLEtBQUwsQ0FBV3RjLEtBQUt3ZixNQUFMLE1BQWUvQyxJQUFFdEQsQ0FBRixHQUFJLENBQW5CLENBQVgsQ0FBNUI7QUFBOEQsR0FBenBDLEVBQTBwQy9aLEVBQUVtWSxHQUFGLEdBQU1ELEtBQUtDLEdBQUwsSUFBVSxZQUFVO0FBQUMsV0FBTyxJQUFJRCxJQUFKLEVBQUQsQ0FBV2tPLE9BQVgsRUFBTjtBQUEyQixHQUFodEMsQ0FBaXRDLElBQUlDLElBQUUsRUFBQyxLQUFJLE9BQUwsRUFBYSxLQUFJLE1BQWpCLEVBQXdCLEtBQUksTUFBNUIsRUFBbUMsS0FBSSxRQUF2QyxFQUFnRCxLQUFJLFFBQXBELEVBQTZELEtBQUksUUFBakUsRUFBTjtBQUFBLE1BQWlGQyxJQUFFdG1CLEVBQUVza0IsTUFBRixDQUFTK0IsQ0FBVCxDQUFuRjtBQUFBLE1BQStGRSxJQUFFLFNBQUZBLENBQUUsQ0FBU2xKLENBQVQsRUFBVztBQUFDLFFBQUlLLElBQUUsU0FBRkEsQ0FBRSxDQUFTM0QsQ0FBVCxFQUFXO0FBQUMsYUFBT3NELEVBQUV0RCxDQUFGLENBQVA7QUFBWSxLQUE5QjtBQUFBLFFBQStCQSxJQUFFLFFBQU0vWixFQUFFWixJQUFGLENBQU9pZSxDQUFQLEVBQVVoSyxJQUFWLENBQWUsR0FBZixDQUFOLEdBQTBCLEdBQTNEO0FBQUEsUUFBK0RwRSxJQUFFbUUsT0FBTzJHLENBQVAsQ0FBakU7QUFBQSxRQUEyRXdELElBQUVuSyxPQUFPMkcsQ0FBUCxFQUFTLEdBQVQsQ0FBN0UsQ0FBMkYsT0FBTyxVQUFTQSxDQUFULEVBQVc7QUFBQyxhQUFPQSxJQUFFLFFBQU1BLENBQU4sR0FBUSxFQUFSLEdBQVcsS0FBR0EsQ0FBaEIsRUFBa0I5SyxFQUFFcFAsSUFBRixDQUFPa2EsQ0FBUCxJQUFVQSxFQUFFeE8sT0FBRixDQUFVZ1MsQ0FBVixFQUFZRyxDQUFaLENBQVYsR0FBeUIzRCxDQUFsRDtBQUFvRCxLQUF2RTtBQUF3RSxHQUFoUixDQUFpUi9aLEVBQUV3bUIsTUFBRixHQUFTRCxFQUFFRixDQUFGLENBQVQsRUFBY3JtQixFQUFFeW1CLFFBQUYsR0FBV0YsRUFBRUQsQ0FBRixDQUF6QixFQUE4QnRtQixFQUFFakMsTUFBRixHQUFTLFVBQVNnYyxDQUFULEVBQVdzRCxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDMWQsTUFBRU0sT0FBRixDQUFVK2MsQ0FBVixNQUFlQSxJQUFFLENBQUNBLENBQUQsQ0FBakIsRUFBc0IsSUFBSXBPLElBQUVvTyxFQUFFbmtCLE1BQVIsQ0FBZSxJQUFHLENBQUMrVixDQUFKLEVBQU0sT0FBT2pQLEVBQUVvZSxVQUFGLENBQWFWLENBQWIsSUFBZ0JBLEVBQUUzYSxJQUFGLENBQU9nWCxDQUFQLENBQWhCLEdBQTBCMkQsQ0FBakMsQ0FBbUMsS0FBSSxJQUFJSCxJQUFFLENBQVYsRUFBWUEsSUFBRXRPLENBQWQsRUFBZ0JzTyxHQUFoQixFQUFvQjtBQUFDLFVBQUl0a0IsSUFBRSxRQUFNOGdCLENBQU4sR0FBUSxLQUFLLENBQWIsR0FBZUEsRUFBRXNELEVBQUVFLENBQUYsQ0FBRixDQUFyQixDQUE2QixLQUFLLENBQUwsS0FBU3RrQixDQUFULEtBQWFBLElBQUV5a0IsQ0FBRixFQUFJSCxJQUFFdE8sQ0FBbkIsR0FBc0I4SyxJQUFFL1osRUFBRW9lLFVBQUYsQ0FBYW5sQixDQUFiLElBQWdCQSxFQUFFOEosSUFBRixDQUFPZ1gsQ0FBUCxDQUFoQixHQUEwQjlnQixDQUFsRDtBQUFvRCxZQUFPOGdCLENBQVA7QUFBUyxHQUFwUCxDQUFxUCxJQUFJMk0sSUFBRSxDQUFOLENBQVExbUIsRUFBRTJtQixRQUFGLEdBQVcsVUFBUzVNLENBQVQsRUFBVztBQUFDLFFBQUlzRCxJQUFFLEVBQUVxSixDQUFGLEdBQUksRUFBVixDQUFhLE9BQU8zTSxJQUFFQSxJQUFFc0QsQ0FBSixHQUFNQSxDQUFiO0FBQWUsR0FBbkQsRUFBb0RyZCxFQUFFNG1CLGdCQUFGLEdBQW1CLEVBQUNDLFVBQVMsaUJBQVYsRUFBNEJDLGFBQVksa0JBQXhDLEVBQTJETixRQUFPLGtCQUFsRSxFQUF2RSxDQUE2SixJQUFJTyxJQUFFLE1BQU47QUFBQSxNQUFhQyxJQUFFLEVBQUMsS0FBSSxHQUFMLEVBQVMsTUFBSyxJQUFkLEVBQW1CLE1BQUssR0FBeEIsRUFBNEIsTUFBSyxHQUFqQyxFQUFxQyxVQUFTLE9BQTlDLEVBQXNELFVBQVMsT0FBL0QsRUFBZjtBQUFBLE1BQXVGQyxJQUFFLDJCQUF6RjtBQUFBLE1BQXFIQyxJQUFFLFNBQUZBLENBQUUsQ0FBU25OLENBQVQsRUFBVztBQUFDLFdBQU0sT0FBS2lOLEVBQUVqTixDQUFGLENBQVg7QUFBZ0IsR0FBbkosQ0FBb0ovWixFQUFFbW5CLFFBQUYsR0FBVyxVQUFTbHVCLENBQVQsRUFBVzhnQixDQUFYLEVBQWFzRCxDQUFiLEVBQWU7QUFBQyxLQUFDdEQsQ0FBRCxJQUFJc0QsQ0FBSixLQUFRdEQsSUFBRXNELENBQVYsR0FBYXRELElBQUUvWixFQUFFaWxCLFFBQUYsQ0FBVyxFQUFYLEVBQWNsTCxDQUFkLEVBQWdCL1osRUFBRTRtQixnQkFBbEIsQ0FBZixDQUFtRCxJQUFJbEosQ0FBSjtBQUFBLFFBQU16TyxJQUFFbUUsT0FBTyxDQUFDLENBQUMyRyxFQUFFeU0sTUFBRixJQUFVTyxDQUFYLEVBQWN6aEIsTUFBZixFQUFzQixDQUFDeVUsRUFBRStNLFdBQUYsSUFBZUMsQ0FBaEIsRUFBbUJ6aEIsTUFBekMsRUFBZ0QsQ0FBQ3lVLEVBQUU4TSxRQUFGLElBQVlFLENBQWIsRUFBZ0J6aEIsTUFBaEUsRUFBd0UrTixJQUF4RSxDQUE2RSxHQUE3RSxJQUFrRixJQUF6RixFQUE4RixHQUE5RixDQUFSO0FBQUEsUUFBMkdvRixJQUFFLENBQTdHO0FBQUEsUUFBK0drRixJQUFFLFFBQWpILENBQTBIMWtCLEVBQUVzUyxPQUFGLENBQVUwRCxDQUFWLEVBQVksVUFBUzhLLENBQVQsRUFBV3NELENBQVgsRUFBYUssQ0FBYixFQUFlek8sQ0FBZixFQUFpQnNPLENBQWpCLEVBQW1CO0FBQUMsYUFBT0ksS0FBRzFrQixFQUFFdUcsS0FBRixDQUFRaVosQ0FBUixFQUFVOEUsQ0FBVixFQUFhaFMsT0FBYixDQUFxQjBiLENBQXJCLEVBQXVCQyxDQUF2QixDQUFILEVBQTZCek8sSUFBRThFLElBQUV4RCxFQUFFN2dCLE1BQW5DLEVBQTBDbWtCLElBQUVNLEtBQUcsZ0JBQWNOLENBQWQsR0FBZ0IsZ0NBQXJCLEdBQXNESyxJQUFFQyxLQUFHLGdCQUFjRCxDQUFkLEdBQWdCLHNCQUFyQixHQUE0Q3pPLE1BQUkwTyxLQUFHLFNBQU8xTyxDQUFQLEdBQVMsVUFBaEIsQ0FBNUksRUFBd0s4SyxDQUEvSztBQUFpTCxLQUFqTixHQUFtTjRELEtBQUcsTUFBdE4sRUFBNk41RCxFQUFFcU4sUUFBRixLQUFhekosSUFBRSxxQkFBbUJBLENBQW5CLEdBQXFCLEtBQXBDLENBQTdOLEVBQXdRQSxJQUFFLDZDQUEyQyxtREFBM0MsR0FBK0ZBLENBQS9GLEdBQWlHLGVBQTNXLENBQTJYLElBQUc7QUFBQ0QsVUFBRSxJQUFJMkosUUFBSixDQUFhdE4sRUFBRXFOLFFBQUYsSUFBWSxLQUF6QixFQUErQixHQUEvQixFQUFtQ3pKLENBQW5DLENBQUY7QUFBd0MsS0FBNUMsQ0FBNEMsT0FBTTVELENBQU4sRUFBUTtBQUFDLFlBQU1BLEVBQUV6VSxNQUFGLEdBQVNxWSxDQUFULEVBQVc1RCxDQUFqQjtBQUFtQixTQUFJd0QsSUFBRSxTQUFGQSxDQUFFLENBQVN4RCxDQUFULEVBQVc7QUFBQyxhQUFPMkQsRUFBRTNhLElBQUYsQ0FBTyxJQUFQLEVBQVlnWCxDQUFaLEVBQWMvWixDQUFkLENBQVA7QUFBd0IsS0FBMUM7QUFBQSxRQUEyQ3dkLElBQUV6RCxFQUFFcU4sUUFBRixJQUFZLEtBQXpELENBQStELE9BQU83SixFQUFFalksTUFBRixHQUFTLGNBQVlrWSxDQUFaLEdBQWMsTUFBZCxHQUFxQkcsQ0FBckIsR0FBdUIsR0FBaEMsRUFBb0NKLENBQTNDO0FBQTZDLEdBQXZ2QixFQUF3dkJ2ZCxFQUFFc25CLEtBQUYsR0FBUSxVQUFTdk4sQ0FBVCxFQUFXO0FBQUMsUUFBSXNELElBQUVyZCxFQUFFK1osQ0FBRixDQUFOLENBQVcsT0FBT3NELEVBQUVrSyxNQUFGLEdBQVMsQ0FBQyxDQUFWLEVBQVlsSyxDQUFuQjtBQUFxQixHQUE1eUIsQ0FBNnlCLElBQUltSyxJQUFFLFNBQUZBLENBQUUsQ0FBU3pOLENBQVQsRUFBV3NELENBQVgsRUFBYTtBQUFDLFdBQU90RCxFQUFFd04sTUFBRixHQUFTdm5CLEVBQUVxZCxDQUFGLEVBQUtpSyxLQUFMLEVBQVQsR0FBc0JqSyxDQUE3QjtBQUErQixHQUFuRCxDQUFvRHJkLEVBQUVpYixLQUFGLEdBQVEsVUFBU3lDLENBQVQsRUFBVztBQUFDLFdBQU8xZCxFQUFFK2UsSUFBRixDQUFPL2UsRUFBRXVrQixTQUFGLENBQVk3RyxDQUFaLENBQVAsRUFBc0IsVUFBUzNELENBQVQsRUFBVztBQUFDLFVBQUlzRCxJQUFFcmQsRUFBRStaLENBQUYsSUFBSzJELEVBQUUzRCxDQUFGLENBQVgsQ0FBZ0IvWixFQUFFcUUsU0FBRixDQUFZMFYsQ0FBWixJQUFlLFlBQVU7QUFBQyxZQUFJQSxJQUFFLENBQUMsS0FBSzZELFFBQU4sQ0FBTixDQUFzQixPQUFPTCxFQUFFemEsS0FBRixDQUFRaVgsQ0FBUixFQUFVL1csU0FBVixHQUFxQndrQixFQUFFLElBQUYsRUFBT25LLEVBQUV2YSxLQUFGLENBQVE5QyxDQUFSLEVBQVUrWixDQUFWLENBQVAsQ0FBNUI7QUFBaUQsT0FBakc7QUFBa0csS0FBcEosR0FBc0ovWixDQUE3SjtBQUErSixHQUFuTCxFQUFvTEEsRUFBRWliLEtBQUYsQ0FBUWpiLENBQVIsQ0FBcEwsRUFBK0xBLEVBQUUrZSxJQUFGLENBQU8sQ0FBQyxLQUFELEVBQU8sTUFBUCxFQUFjLFNBQWQsRUFBd0IsT0FBeEIsRUFBZ0MsTUFBaEMsRUFBdUMsUUFBdkMsRUFBZ0QsU0FBaEQsQ0FBUCxFQUFrRSxVQUFTMUIsQ0FBVCxFQUFXO0FBQUMsUUFBSUssSUFBRXpPLEVBQUVvTyxDQUFGLENBQU4sQ0FBV3JkLEVBQUVxRSxTQUFGLENBQVlnWixDQUFaLElBQWUsWUFBVTtBQUFDLFVBQUl0RCxJQUFFLEtBQUs2RCxRQUFYLENBQW9CLE9BQU9GLEVBQUU1YSxLQUFGLENBQVFpWCxDQUFSLEVBQVUvVyxTQUFWLEdBQXFCLFlBQVVxYSxDQUFWLElBQWEsYUFBV0EsQ0FBeEIsSUFBMkIsTUFBSXRELEVBQUU3Z0IsTUFBakMsSUFBeUMsT0FBTzZnQixFQUFFLENBQUYsQ0FBckUsRUFBMEV5TixFQUFFLElBQUYsRUFBT3pOLENBQVAsQ0FBakY7QUFBMkYsS0FBekk7QUFBMEksR0FBbk8sQ0FBL0wsRUFBb2EvWixFQUFFK2UsSUFBRixDQUFPLENBQUMsUUFBRCxFQUFVLE1BQVYsRUFBaUIsT0FBakIsQ0FBUCxFQUFpQyxVQUFTaEYsQ0FBVCxFQUFXO0FBQUMsUUFBSXNELElBQUVwTyxFQUFFOEssQ0FBRixDQUFOLENBQVcvWixFQUFFcUUsU0FBRixDQUFZMFYsQ0FBWixJQUFlLFlBQVU7QUFBQyxhQUFPeU4sRUFBRSxJQUFGLEVBQU9uSyxFQUFFdmEsS0FBRixDQUFRLEtBQUs4YSxRQUFiLEVBQXNCNWEsU0FBdEIsQ0FBUCxDQUFQO0FBQWdELEtBQTFFO0FBQTJFLEdBQW5JLENBQXBhLEVBQXlpQmhELEVBQUVxRSxTQUFGLENBQVlpSixLQUFaLEdBQWtCLFlBQVU7QUFBQyxXQUFPLEtBQUtzUSxRQUFaO0FBQXFCLEdBQTNsQixFQUE0bEI1ZCxFQUFFcUUsU0FBRixDQUFZK2dCLE9BQVosR0FBb0JwbEIsRUFBRXFFLFNBQUYsQ0FBWW9qQixNQUFaLEdBQW1Cem5CLEVBQUVxRSxTQUFGLENBQVlpSixLQUEvb0IsRUFBcXBCdE4sRUFBRXFFLFNBQUYsQ0FBWTFFLFFBQVosR0FBcUIsWUFBVTtBQUFDLFdBQU8yVyxPQUFPLEtBQUtzSCxRQUFaLENBQVA7QUFBNkIsR0FBbHRCLEVBQW10QixjQUFZLFVBQVosSUFBMkIsZ0dBQTNCLElBQXVDLGlDQUFvQixFQUFwQixtQ0FBdUIsWUFBVTtBQUFDLFdBQU81ZCxDQUFQO0FBQVMsR0FBM0M7QUFBQSxvR0FBMXZCO0FBQXV5QixDQUExN2lCLEVBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7QUFFTyxJQUFNMG5CLDBCQUFTLFNBQVRBLE1BQVMsQ0FBVTlnQixJQUFWLEVBQWdCQyxJQUFoQixFQUFzQjtBQUN4QyxXQUFRRCxLQUFLaEgsT0FBTCxDQUFhLE9BQWIsS0FBeUIsQ0FBekIsSUFBOEJpSCxRQUFRLE1BQTlDO0FBQ0gsQ0FGTTtBQUdBLElBQU04Z0IsOEJBQVcsU0FBWEEsUUFBVyxDQUFVL2dCLElBQVYsRUFBZ0JDLElBQWhCLEVBQXNCO0FBQzFDLFFBQUdELElBQUgsRUFBUTtBQUNKLGVBQVFBLEtBQUtoSCxPQUFMLENBQWEsS0FBYixNQUF3QixDQUF4QixJQUE2QmdILEtBQUtoSCxPQUFMLENBQWEsTUFBYixNQUF5QixDQUF0RCxJQUEyRGlILFNBQVMsUUFBNUU7QUFDSDtBQUNELFdBQU8sS0FBUDtBQUNILENBTE07QUFNQSxJQUFNK2dCLDBCQUFTLFNBQVRBLE1BQVMsQ0FBVWhoQixJQUFWLEVBQWdCQyxJQUFoQixFQUFzQjtBQUN4QyxXQUFTQSxTQUFTLEtBQVQsSUFBbUJBLFNBQVMsTUFBNUIsSUFBc0NBLFNBQVMsc0JBQS9DLElBQXlFLCtCQUFpQkQsSUFBakIsS0FBMEIsS0FBNUc7QUFDSCxDQUZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWFA7Ozs7QUFJTyxJQUFNaWhCLHdDQUFnQixTQUFoQkEsYUFBZ0IsQ0FBU0MsVUFBVCxFQUFxQjtBQUM5QyxRQUFNQyxVQUFVdGhCLFNBQVNxTCxvQkFBVCxDQUE4QixRQUE5QixDQUFoQjtBQUNBLFNBQUssSUFBSTdZLElBQUksQ0FBYixFQUFnQkEsSUFBSTh1QixRQUFRN3VCLE1BQTVCLEVBQW9DRCxHQUFwQyxFQUF5QztBQUNyQyxZQUFNK3VCLE1BQU1ELFFBQVE5dUIsQ0FBUixFQUFXK3VCLEdBQXZCO0FBQ0EsWUFBSUEsR0FBSixFQUFTO0FBQ0wsZ0JBQU10dEIsUUFBUXN0QixJQUFJbEwsV0FBSixDQUFnQixNQUFNZ0wsVUFBdEIsQ0FBZDtBQUNBLGdCQUFJcHRCLFNBQVMsQ0FBYixFQUFnQjtBQUNaLHVCQUFPc3RCLElBQUlqb0IsTUFBSixDQUFXLENBQVgsRUFBY3JGLFFBQVEsQ0FBdEIsQ0FBUDtBQUNIO0FBQ0o7QUFDSjtBQUNELFdBQU8sRUFBUDtBQUNILENBWk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKUDs7O0FBR08sSUFBTXBDLDRCQUFVLGtCQUFoQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDs7OztBQUNBOzs7Ozs7QUFKQTs7O0FBTUEsSUFBTTJ2QixtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFTQyxVQUFULEVBQXFCQyxHQUFyQixFQUF5QjtBQUM5QyxRQUFNQyxRQUFRLHNCQUFJLE1BQUlELElBQUl2cUIsY0FBSixFQUFSLENBQWQ7QUFDQSxRQUFJeXFCLGNBQWMsRUFBbEI7QUFBQSxRQUFzQkMsZ0JBQWdCLEVBQXRDO0FBQUEsUUFBMENDLGVBQWUsS0FBekQ7O0FBRUEsUUFBSUMsdUJBQXVCO0FBQ3ZCQyw0QkFBcUIsa0JBREU7QUFFdkJDLCtCQUF3QixxQkFGRDtBQUd2QkMsa0NBQTJCLHdCQUhKO0FBSXZCQyw0QkFBcUI7QUFKRSxLQUEzQjs7QUFPQSxRQUFJQyw0QkFBNEIsU0FBNUJBLHlCQUE0QixDQUFTam1CLEtBQVQsRUFBZTtBQUMzQyxZQUFJa21CLGtCQUFrQixTQUFsQkEsZUFBa0IsR0FBVTtBQUM1QixtQkFBT3JpQixTQUFTc2lCLGlCQUFULElBQThCdGlCLFNBQVN1aUIsdUJBQXZDLElBQWtFdmlCLFNBQVN3aUIsb0JBQTNFLElBQW1HeGlCLFNBQVN5aUIsbUJBQW5IO0FBQ0gsU0FGRDs7QUFJQSxZQUFJSixpQkFBSixFQUF1QjtBQUNuQlYsa0JBQU12VixRQUFOLENBQWUsZ0JBQWY7QUFDQTBWLDJCQUFlLElBQWY7QUFDQUYsd0JBQVkzVSxJQUFaO0FBQ0E0VSwwQkFBYzlVLElBQWQ7QUFDSCxTQUxELE1BS087QUFDSDRVLGtCQUFNalYsV0FBTixDQUFrQixnQkFBbEI7QUFDQW9WLDJCQUFlLEtBQWY7QUFDQUYsd0JBQVk3VSxJQUFaO0FBQ0E4VSwwQkFBYzVVLElBQWQ7QUFDSDtBQUNKLEtBaEJEOztBQWtCQSxRQUFJeVYsb0JBQW9CLFNBQXBCQSxpQkFBb0IsR0FBWTtBQUNoQyxZQUFJZixNQUFNL1MsR0FBTixHQUFZK1QsaUJBQWhCLEVBQW1DO0FBQy9CaEIsa0JBQU0vUyxHQUFOLEdBQVkrVCxpQkFBWjtBQUNILFNBRkQsTUFFTyxJQUFJaEIsTUFBTS9TLEdBQU4sR0FBWWdVLHVCQUFoQixFQUF5QztBQUM1Q2pCLGtCQUFNL1MsR0FBTixHQUFZZ1UsdUJBQVo7QUFDSCxTQUZNLE1BRUEsSUFBSWpCLE1BQU0vUyxHQUFOLEdBQVlpVSxvQkFBaEIsRUFBc0M7QUFDekNsQixrQkFBTS9TLEdBQU4sR0FBWWlVLG9CQUFaO0FBQ0gsU0FGTSxNQUVBLElBQUlsQixNQUFNL1MsR0FBTixHQUFZa1UsbUJBQWhCLEVBQXFDO0FBQ3hDbkIsa0JBQU0vUyxHQUFOLEdBQVlrVSxtQkFBWjtBQUNILFNBRk0sTUFFQTtBQUNIO0FBQ0g7QUFDSixLQVpEO0FBYUEsUUFBSUMsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUFZOztBQUU3QixZQUFJL2lCLFNBQVNnakIsY0FBYixFQUE2QjtBQUN6QmhqQixxQkFBU2dqQixjQUFUO0FBQ0gsU0FGRCxNQUVPLElBQUloakIsU0FBU2lqQixvQkFBYixFQUFtQztBQUN0Q2pqQixxQkFBU2lqQixvQkFBVDtBQUNILFNBRk0sTUFFQSxJQUFJampCLFNBQVNrakIsbUJBQWIsRUFBa0M7QUFDckNsakIscUJBQVNrakIsbUJBQVQ7QUFDSCxTQUZNLE1BRUEsSUFBSWxqQixTQUFTbWpCLGdCQUFiLEVBQStCO0FBQ2xDbmpCLHFCQUFTbWpCLGdCQUFUO0FBQ0gsU0FGTSxNQUVBO0FBQ0g7QUFDSDtBQUNKLEtBYkQ7QUFjQSxRQUFJQyxtQkFBbUIsU0FBbkJBLGdCQUFtQixHQUFZO0FBQy9CLFlBQUksQ0FBQ3RCLFlBQUwsRUFBbUI7QUFDZlk7QUFDSCxTQUZELE1BRU87QUFDSEs7QUFDSDtBQUNKLEtBTkQ7O0FBUUEsUUFBTU0sYUFBYSxTQUFiQSxVQUFhLENBQVNDLFFBQVQsRUFBbUI1QyxRQUFuQixFQUE0QjtBQUMzQ2tCLHNCQUFjMEIsU0FBU3RYLElBQVQsQ0FBYyxtQ0FBZCxDQUFkO0FBQ0E2Vix3QkFBZ0J5QixTQUFTdFgsSUFBVCxDQUFjLHFDQUFkLENBQWhCOztBQUVBO0FBQ0F0VCxlQUFPQyxJQUFQLENBQVlvcEIsb0JBQVosRUFBa0NucEIsT0FBbEMsQ0FBMEMscUJBQWE7QUFDbkQ7QUFDQTtBQUNBLGdCQUFHb0gsU0FBU3VqQixTQUFULE1BQXdCLElBQTNCLEVBQWdDO0FBQzVCdmpCLHlCQUFTa1EsZ0JBQVQsQ0FBMEI2UixxQkFBcUJ3QixTQUFyQixDQUExQixFQUEyRG5CLHlCQUEzRDtBQUNIO0FBRUosU0FQRDtBQVNILEtBZEQ7QUFlQSxRQUFNb0IsY0FBYyxTQUFkQSxXQUFjLEdBQVU7QUFDMUI7QUFDQTlxQixlQUFPQyxJQUFQLENBQVlvcEIsb0JBQVosRUFBa0NucEIsT0FBbEMsQ0FBMEMscUJBQWE7QUFDbkQsZ0JBQUdvSCxTQUFTdWpCLFNBQVQsTUFBd0IsSUFBM0IsRUFBZ0M7QUFDNUJ2akIseUJBQVM0UixtQkFBVCxDQUE2Qm1RLHFCQUFxQndCLFNBQXJCLENBQTdCLEVBQThEbkIseUJBQTlEO0FBQ0g7QUFFSixTQUxEO0FBTUgsS0FSRDtBQVNBLFFBQU1wbUIsU0FBUztBQUNYLHdDQUFpQyxrQ0FBU0csS0FBVCxFQUFnQm1uQixRQUFoQixFQUEwQjVDLFFBQTFCLEVBQW1DO0FBQ2hFdmtCLGtCQUFNaVYsY0FBTjtBQUNBZ1M7QUFDSDtBQUpVLEtBQWY7O0FBT0EsV0FBTyw0QkFBYTNCLFVBQWIsRUFBeUIsa0JBQXpCLEVBQTZDLElBQTdDLEVBQW1EemxCLE1BQW5ELEVBQTJEcW5CLFVBQTNELEVBQXVFRyxXQUF2RSxDQUFQO0FBRUgsQ0FqR0Q7O2tCQW1HZWhDLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDekdBLFlBQU07QUFDakIsV0FDSSxzREFDSSxrREFESixHQUVJLG9EQUZKLEdBR0EsV0FKSjtBQU1ILEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pEOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBWkE7OztBQW1CQSxJQUFNaUMsV0FBVyxTQUFYQSxRQUFXLENBQVNoQyxVQUFULEVBQXFCQyxHQUFyQixFQUF5QjtBQUN0QyxRQUFJZ0MsZUFBZSxFQUFuQjtBQUFBLFFBQXVCQyxhQUFZLEVBQW5DO0FBQUEsUUFBdUNDLGNBQWMsRUFBckQ7QUFBQSxRQUF5REMsY0FBYyxFQUF2RTtBQUFBLFFBQTJFQyxtQkFBbUIsRUFBOUY7O0FBRUEsUUFBSUMsd0JBQXdCLFNBQXhCQSxxQkFBd0IsR0FBVTtBQUNsQyxZQUFJQyxRQUFRLEVBQUNDLE9BQVEsVUFBVCxFQUFxQkMsUUFBUyxJQUE5QixFQUFvQ3BXLE1BQU8sRUFBM0MsRUFBWjtBQUNBLFlBQUl2WCxnQkFBZ0JtckIsSUFBSTF0QixpQkFBSixFQUFwQjtBQUNBLFlBQUcwdEIsSUFBSXJzQixXQUFKLE9BQXNCOHVCLFFBQXRCLElBQWtDNXRCLGNBQWM2SixJQUFkLEtBQXVCL00sd0JBQTVELEVBQTBFO0FBQ3RFLGdCQUFJeWEsT0FBTztBQUNQbVcsdUJBQVEsT0FERDtBQUVQcGQsdUJBQVM2YSxJQUFJcnJCLGVBQUosT0FBMEIsQ0FBMUIsR0FBOEIsUUFBOUIsR0FBeUNxckIsSUFBSXJyQixlQUFKLEVBRjNDO0FBR1ArSixzQkFBTztBQUhBLGFBQVg7QUFLQTRqQixrQkFBTWxXLElBQU4sQ0FBV3pULElBQVgsQ0FBZ0J5VCxJQUFoQjtBQUNIOztBQUVELFlBQUk0VCxJQUFJeHRCLGdCQUFKLEdBQXVCekIsTUFBdkIsR0FBZ0MsQ0FBcEMsRUFBdUM7QUFDbkMsZ0JBQUlzQixpQkFBaUIydEIsSUFBSTF0QixpQkFBSixFQUFyQjs7QUFFQSxnQkFBSThaLFFBQU87QUFDUG1XLHVCQUFRLFFBREQ7QUFFUHBkLHVCQUFROVMsaUJBQWlCQSxlQUFlbkIsS0FBaEMsR0FBd0MsU0FGekM7QUFHUHdOLHNCQUFPO0FBSEEsYUFBWDs7QUFNQTRqQixrQkFBTWxXLElBQU4sQ0FBV3pULElBQVgsQ0FBZ0J5VCxLQUFoQjtBQUNIO0FBQ0QsZUFBT2tXLEtBQVA7QUFDSCxLQXhCRDs7QUEwQkEsUUFBTVgsYUFBYSxTQUFiQSxVQUFhLENBQVNDLFFBQVQsRUFBbUI1QyxRQUFuQixFQUE0Qjs7QUFFM0MsWUFBSTBELGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBUzV3QixJQUFULEVBQWM7QUFDaEMsZ0JBQUdxd0IsV0FBSCxFQUFlO0FBQ1hBLDRCQUFZN3dCLE9BQVo7QUFDSDtBQUNENndCLDBCQUFjLDJCQUFZUCxTQUFTdFgsSUFBVCxDQUFjLG9CQUFkLENBQVosRUFBaUQwVixHQUFqRCxFQUFzRGx1QixJQUF0RCxDQUFkO0FBQ0gsU0FMRDtBQU1BLFlBQUk2d0Isa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFVO0FBQzVCLGdCQUFHVCxXQUFILEVBQWU7QUFDWEEsNEJBQVk1d0IsT0FBWjtBQUNIO0FBQ0Q0d0IsMEJBQWMsMkJBQVlOLFNBQVN0WCxJQUFULENBQWMsNEJBQWQsQ0FBWixFQUF5RDBWLEdBQXpELENBQWQ7QUFDSCxTQUxEOztBQU9BaUMscUJBQWEsMEJBQVdMLFNBQVN0WCxJQUFULENBQWMsb0JBQWQsQ0FBWCxFQUFnRDBWLEdBQWhELENBQWI7QUFDQWdDLHVCQUFlLDRCQUFhSixTQUFTdFgsSUFBVCxDQUFjLG9CQUFkLENBQWIsRUFBa0QwVixHQUFsRCxDQUFmO0FBQ0FvQywyQkFBbUIsZ0NBQWlCUixTQUFTdFgsSUFBVCxDQUFjLHFCQUFkLENBQWpCLEVBQXVEMFYsR0FBdkQsQ0FBbkI7O0FBR0FBLFlBQUlwdUIsRUFBSixDQUFPNlAsdUJBQVAsRUFBcUIsVUFBUzNQLElBQVQsRUFBZTtBQUNoQzR3Qiw0QkFBZ0I1d0IsSUFBaEI7QUFDQSxnQkFBR0EsS0FBS21ILFFBQUwsS0FBa0J3cEIsUUFBckIsRUFBOEI7QUFDMUI7QUFDQSxvQkFBR1AsV0FBSCxFQUFlO0FBQ1hBLGdDQUFZNXdCLE9BQVo7QUFDSDtBQUNKLGFBTEQsTUFLSztBQUNEO0FBQ0FxeEI7QUFDSDtBQUNKLFNBWEQ7QUFZQTNDLFlBQUlwdUIsRUFBSixDQUFPSSxnQkFBUCxFQUFjLFVBQVNlLEtBQVQsRUFBZ0I7QUFDMUJpc0IscUJBQVMxdEIsT0FBVDtBQUNILFNBRkQ7QUFHSCxLQW5DRDtBQW9DQSxRQUFNd3dCLGNBQWMsU0FBZEEsV0FBYyxHQUFVO0FBQzFCO0FBQ0gsS0FGRDtBQUdBLFFBQU14bkIsU0FBUztBQUNYLG9DQUE2QiwrQkFBU0csS0FBVCxFQUFnQm1uQixRQUFoQixFQUEwQjVDLFFBQTFCLEVBQW1DO0FBQzVEdmtCLGtCQUFNaVYsY0FBTjs7QUFFQXNTLHlCQUFhWSxZQUFiLENBQTBCLEtBQTFCO0FBQ0FoQixxQkFBU3RYLElBQVQsQ0FBYyw4QkFBZCxFQUE4Q1UsV0FBOUMsQ0FBMEQsUUFBMUQ7QUFDSCxTQU5VO0FBT1gscUNBQThCLCtCQUFTdlEsS0FBVCxFQUFnQm1uQixRQUFoQixFQUEwQjVDLFFBQTFCLEVBQW1DO0FBQzdEdmtCLGtCQUFNaVYsY0FBTjs7QUFFQTtBQUNBLGdCQUFHbVQsMkJBQWlCOXhCLE1BQWpCLEdBQTBCLENBQTdCLEVBQStCO0FBQzNCO0FBQ0FzSCxxQ0FBRXVlLElBQUYsQ0FBT2lNLDBCQUFQLEVBQXlCLFVBQVNDLFlBQVQsRUFBc0I7QUFDM0NBLGlDQUFheHhCLE9BQWI7QUFDSCxpQkFGRDtBQUdBdXhCLDJDQUFpQi9sQixNQUFqQixDQUF3QixDQUF4QixFQUEyQitsQiwyQkFBaUI5eEIsTUFBNUM7QUFDSCxhQU5ELE1BTUs7QUFDRDh4QiwyQ0FBaUJscUIsSUFBakIsQ0FBc0IsNEJBQWFpcEIsUUFBYixFQUF1QjVCLEdBQXZCLEVBQTRCcUMsdUJBQTVCLENBQXRCO0FBQ0g7QUFDSjtBQXBCVSxLQUFmOztBQTBCQSxXQUFPLDRCQUFhdEMsVUFBYixFQUF5QixVQUF6QixFQUFzQyxJQUF0QyxFQUE2Q3psQixNQUE3QyxFQUFxRHFuQixVQUFyRCxFQUFpRUcsV0FBakUsQ0FBUDtBQUNILENBL0ZEOztrQkFpR2VDLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25IZixJQUFNQSxXQUFXLFNBQVhBLFFBQVcsR0FBVTtBQUN2QixZQUFPLHlDQUNGLHlDQURFLEdBRUYsZ0NBRkUsR0FHRiw2Q0FIRSxHQUlGLFlBSkUsR0FLRixnQ0FMRSxHQU1GLHlDQU5FLEdBT0YsZ0JBUEUsR0FRRiwwQ0FSRSxHQVNGLCtHQVRFLEdBVUYsZ0JBVkUsR0FXRixZQVhFLEdBWUYsUUFaTDtBQWFBO0FBRUgsQ0FoQkQ7O2tCQW9CZUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJmOzs7O0FBQ0E7Ozs7QUFKQTs7O0FBZ0JBLElBQU1nQixhQUFhLFNBQWJBLFVBQWEsQ0FBVWhELFVBQVYsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQzFDLFFBQUlnRCxZQUFZLEVBQWhCO0FBQUEsUUFDSUMsYUFBYSxFQURqQjtBQUFBLFFBRUlDLGNBQWMsRUFGbEI7O0FBS0EsUUFBSUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFTbHZCLEtBQVQsRUFBZTtBQUNoQyt1QixrQkFBVXpYLElBQVY7QUFDQTBYLG1CQUFXMVgsSUFBWDtBQUNBMlgsb0JBQVkzWCxJQUFaOztBQUVBLFlBQUd0WCxVQUFVaU0sd0JBQWIsRUFBMkI7QUFDdkIraUIsdUJBQVc1WCxJQUFYO0FBQ0gsU0FGRCxNQUVNLElBQUdwWCxVQUFVZ00sdUJBQWIsRUFBMEI7QUFDNUIraUIsc0JBQVUzWCxJQUFWO0FBQ0gsU0FGSyxNQUVBLElBQUdwWCxVQUFVK0wseUJBQWIsRUFBNEI7QUFDOUJnakIsc0JBQVUzWCxJQUFWO0FBQ0gsU0FGSyxNQUVEO0FBQ0QyWCxzQkFBVTNYLElBQVY7QUFDSDtBQUVKLEtBZkQ7O0FBbUJBLFFBQU1zVyxhQUFhLFNBQWJBLFVBQWEsQ0FBU0MsUUFBVCxFQUFtQjVDLFFBQW5CLEVBQTRCO0FBQzNDZ0Usb0JBQVlwQixTQUFTdFgsSUFBVCxDQUFlLDJCQUFmLENBQVo7QUFDQTJZLHFCQUFhckIsU0FBU3RYLElBQVQsQ0FBYyw0QkFBZCxDQUFiO0FBQ0E0WSxzQkFBY3RCLFNBQVN0WCxJQUFULENBQWMsNkJBQWQsQ0FBZDs7QUFFQTBWLFlBQUlwdUIsRUFBSixDQUFPb1AsdUJBQVAsRUFBcUIsVUFBU2xQLElBQVQsRUFBYztBQUMvQixnQkFBR0EsUUFBUUEsS0FBS3N4QixRQUFoQixFQUF5QjtBQUNyQkQsK0JBQWVyeEIsS0FBS3N4QixRQUFwQjtBQUNIO0FBQ0osU0FKRDtBQUtILEtBVkQ7QUFXQSxRQUFNdEIsY0FBYyxTQUFkQSxXQUFjLEdBQVU7QUFDMUI7QUFDSCxLQUZEO0FBR0EsUUFBTXhuQixTQUFTO0FBQ1gsa0NBQTJCLDRCQUFTRyxLQUFULEVBQWdCbW5CLFFBQWhCLEVBQTBCNUMsUUFBMUIsRUFBbUM7QUFDMUR2a0Isa0JBQU1pVixjQUFOO0FBQ0EsZ0JBQU0yVCxlQUFlckQsSUFBSTlxQixRQUFKLEVBQXJCO0FBQ0EsZ0JBQUltdUIsaUJBQWlCdGpCLHFCQUFyQixFQUFpQztBQUM3QmlnQixvQkFBSTNyQixJQUFKO0FBQ0gsYUFGRCxNQUVPLElBQUlndkIsaUJBQWlCbmpCLHdCQUFyQixFQUFvQztBQUN2QzhmLG9CQUFJdnRCLEtBQUo7QUFDSCxhQUZNLE1BRUEsSUFBSTR3QixpQkFBaUJwakIsdUJBQXJCLEVBQW1DO0FBQ3RDK2Ysb0JBQUkzckIsSUFBSjtBQUNILGFBRk0sTUFFQSxJQUFJZ3ZCLGlCQUFpQnJqQix5QkFBckIsRUFBcUM7QUFDeENnZ0Isb0JBQUkzckIsSUFBSjtBQUNIO0FBQ0o7QUFiVSxLQUFmOztBQWdCQSxXQUFPLDRCQUFhMHJCLFVBQWIsRUFBeUIsWUFBekIsRUFBdUMsSUFBdkMsRUFBNkN6bEIsTUFBN0MsRUFBcURxbkIsVUFBckQsRUFBaUVHLFdBQWpFLENBQVA7QUFDSCxDQXhERDs7a0JBMERlaUIsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQzFFQSxZQUFNO0FBQ2pCLFdBQ0ksOERBQ0ksMENBREosR0FFSSwyQ0FGSixHQUdJLDRDQUhKLEdBSUEsV0FMSjtBQU9ILEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xEOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBT0EsSUFBTU8sY0FBYyxTQUFkQSxXQUFjLENBQVN2RCxVQUFULEVBQXFCQyxHQUFyQixFQUF5QjtBQUN6QyxRQUFNQyxRQUFRLHNCQUFJLE1BQUlELElBQUl2cUIsY0FBSixFQUFSLENBQWQ7QUFDQSxRQUFJOHRCLHlCQUF5QixDQUE3QjtBQUNBLFFBQUlDLDJCQUEyQixDQUEvQjtBQUNBLFFBQUlDLDBCQUEwQixDQUE5Qjs7QUFFQSxRQUFJQyxjQUFjLEtBQWxCO0FBQUEsUUFBeUJDLFlBQVksS0FBckM7O0FBRUEsUUFBSUMsZUFBZSxFQUFuQjtBQUFBLFFBQ0lDLGdCQUFnQixFQURwQjtBQUFBLFFBRUlDLGdCQUFnQixFQUZwQjtBQUFBLFFBR0lDLGlCQUFpQixFQUhyQjtBQUFBLFFBSUlDLGlCQUFpQixFQUpyQjtBQUFBLFFBS0lDLFFBQVEsRUFMWjtBQUFBLFFBTUlDLFlBQVksQ0FOaEI7QUFBQSxRQU9JQyxRQUFRLEVBUFo7O0FBVUEsUUFBSUMsbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBVUMsVUFBVixFQUFzQjtBQUN6QyxZQUFNQyxtQkFBbUJWLGFBQWF2dEIsS0FBYixFQUF6QjtBQUNBLFlBQU05QixXQUFXK3ZCLG1CQUFtQkQsVUFBcEM7O0FBRUFQLHNCQUFjdlosR0FBZCxDQUFrQixPQUFsQixFQUEyQmhXLFdBQVUsSUFBckM7QUFDQXd2Qix1QkFBZXhaLEdBQWYsQ0FBbUIsTUFBbkIsRUFBMkJoVyxXQUFVLElBQXJDOztBQUVBLFlBQU1nd0IsY0FBYyxDQUFDRCxtQkFBbUJKLFNBQXBCLElBQWlDRyxVQUFyRDtBQUNBTCx1QkFBZXpaLEdBQWYsQ0FBbUIsTUFBbkIsRUFBMkJnYSxjQUFhLElBQXhDOztBQUVBaEIsaUNBQXlCaHZCLFFBQXpCO0FBQ0FpdkIsbUNBQTJCYSxVQUEzQjtBQUNILEtBWkQ7O0FBY0EsUUFBSUcsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBVUgsVUFBVixFQUFzQjtBQUMxQyxZQUFNQyxtQkFBbUJWLGFBQWF2dEIsS0FBYixFQUF6QjtBQUNBLFlBQU1vdUIsZ0JBQWdCSCxtQkFBbUJELFVBQXpDOztBQUVBTix1QkFBZXhaLEdBQWYsQ0FBbUIsT0FBbkIsRUFBNEI4WixjQUFjLENBQWQsR0FBaUJBLFVBQWpCLEdBQStCSSxnQkFBZ0JsQixzQkFBakIsR0FBMEMsSUFBcEc7QUFDSCxLQUxEOztBQU9BLFFBQUltQixtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFTTCxVQUFULEVBQXFCO0FBQ3hDLFlBQU1DLG1CQUFtQlYsYUFBYXZ0QixLQUFiLEVBQXpCO0FBQ0EsWUFBTXN1QixlQUFlTCxtQkFBbUJELFVBQXhDOztBQUVBUixzQkFBY3RaLEdBQWQsQ0FBa0IsT0FBbEIsRUFBMkJvYSxlQUFjLElBQXpDO0FBQ0FsQixrQ0FBMEJZLFVBQTFCO0FBQ0gsS0FORDs7QUFRQSxRQUFJTyxzQkFBc0IsU0FBdEJBLG1CQUFzQixDQUFVbnFCLEtBQVYsRUFBaUI7QUFDdkMsWUFBTTZwQixtQkFBbUJWLGFBQWF2dEIsS0FBYixFQUF6QjtBQUNBLFlBQU13dUIscUJBQXFCakIsYUFBYTVYLE1BQWIsR0FBc0JNLElBQWpEO0FBQ0EsWUFBTXdZLGlCQUFpQnJxQixNQUFNc3FCLEtBQTdCOztBQUVBLFlBQU1WLGFBQWEsQ0FBQ1MsaUJBQWlCRCxrQkFBbEIsSUFBd0NQLGdCQUEzRDs7QUFFQSxZQUFJRCxhQUFhLENBQWpCLEVBQW9CO0FBQ2hCLG1CQUFPLENBQVA7QUFDSDs7QUFFRCxZQUFJQSxhQUFhLENBQWpCLEVBQW9CO0FBQ2hCLG1CQUFPLENBQVA7QUFDSDs7QUFFRCxlQUFPQSxVQUFQO0FBQ0gsS0FoQkQ7O0FBa0JBLFFBQUlXLG9CQUFvQixTQUFwQkEsaUJBQW9CLENBQVVYLFVBQVYsRUFBc0I1cEIsS0FBdEIsRUFBNkI7QUFDbEQsWUFBR29vQiwyQkFBaUI5eEIsTUFBakIsR0FBMEIsQ0FBN0IsRUFBK0I7QUFDM0JvekIsa0JBQU01WSxJQUFOO0FBQ0E7QUFDSDs7QUFFQSxZQUFNdFMsV0FBVyttQixJQUFJcnNCLFdBQUosRUFBakI7QUFDQSxZQUFNaWhCLFNBQVMzYixXQUFXb3JCLFVBQTFCOztBQUVBLFlBQU1ZLE1BQU0seUJBQVdyUSxNQUFYLENBQVo7O0FBRUF1UCxjQUFNelksSUFBTixDQUFXdVosR0FBWDs7QUFFQSxZQUFNQyxnQkFBZ0JmLE1BQU05dEIsS0FBTixFQUF0QjtBQUNBLFlBQU1pdUIsbUJBQW1CVixhQUFhdnRCLEtBQWIsRUFBekI7QUFDQSxZQUFNOUIsV0FBVyt2QixtQkFBbUJELFVBQXBDO0FBQ0EsWUFBTWMsa0JBQWtCMXFCLE1BQU1zcUIsS0FBTixHQUFjbkIsYUFBYTVYLE1BQWIsR0FBc0JNLElBQTVEOztBQUdBLFlBQU04WSxvQkFBb0IsU0FBcEJBLGlCQUFvQixHQUFVO0FBQ2hDLGdCQUFHRCxrQkFBa0JELGdCQUFnQixDQUFyQyxFQUF1QztBQUNuQyx1QkFBTyxDQUFQO0FBQ0gsYUFGRCxNQUVNLElBQUdaLG1CQUFpQmEsZUFBakIsR0FBb0NELGdCQUFnQixDQUF2RCxFQUF5RDtBQUMzRCx1QkFBT1osbUJBQW1CWSxhQUExQjtBQUNILGFBRkssTUFFRDtBQUNELHVCQUFPM3dCLFdBQVcyd0IsZ0JBQWdCLENBQWxDO0FBQ0g7QUFDSixTQVJEO0FBU0EsWUFBSUcsbUJBQW1CRCxtQkFBdkI7QUFDQWpCLGNBQU01WixHQUFOLENBQVUsTUFBVixFQUFrQjhhLG1CQUFrQixJQUFwQztBQUNILEtBOUJEOztBQWdDQSxRQUFJL3dCLE9BQU8sU0FBUEEsSUFBTyxDQUFVK3ZCLFVBQVYsRUFBc0I7QUFDN0JyRSxZQUFJMXJCLElBQUosQ0FBVSxDQUFDMHJCLElBQUlyc0IsV0FBSixNQUFtQixDQUFwQixJQUF5QjB3QixVQUFuQztBQUNILEtBRkQ7QUFHQSxRQUFNMUMsYUFBYSxTQUFiQSxVQUFhLENBQVNDLFFBQVQsRUFBbUI1QyxRQUFuQixFQUE0QjtBQUMzQzRFLHVCQUFlaEMsUUFBZjtBQUNBaUMsd0JBQWdCakMsU0FBU3RYLElBQVQsQ0FBYyxvQkFBZCxDQUFoQjtBQUNBd1osd0JBQWdCbEMsU0FBU3RYLElBQVQsQ0FBYyxvQkFBZCxDQUFoQjtBQUNBeVoseUJBQWlCbkMsU0FBU3RYLElBQVQsQ0FBYyxxQkFBZCxDQUFqQjtBQUNBMFoseUJBQWlCcEMsU0FBU3RYLElBQVQsQ0FBYyxpQ0FBZCxDQUFqQjtBQUNBMlosZ0JBQVFyQyxTQUFTdFgsSUFBVCxDQUFjLHVCQUFkLENBQVI7QUFDQTRaLG9CQUFZRCxNQUFNNXRCLEtBQU4sRUFBWjtBQUNBOHRCLGdCQUFRdkMsU0FBU3RYLElBQVQsQ0FBYyx1QkFBZCxDQUFSOztBQUVBMFYsWUFBSXB1QixFQUFKLENBQU8sTUFBUCxFQUFlLFVBQVNFLElBQVQsRUFBZTtBQUMxQixnQkFBR0EsUUFBUUEsS0FBS21ILFFBQWIsSUFBeUJuSCxLQUFLeUMsUUFBakMsRUFBMEM7QUFDdEM2dkIsaUNBQWlCdHlCLEtBQUt5QyxRQUFMLEdBQWdCekMsS0FBS21ILFFBQXRDO0FBQ0g7QUFDSixTQUpEOztBQU1BK21CLFlBQUlwdUIsRUFBSixDQUFPLGVBQVAsRUFBd0IsVUFBU0UsSUFBVCxFQUFlO0FBQ25DLGdCQUFHQSxRQUFRQSxLQUFLd3pCLGFBQWhCLEVBQThCO0FBQzFCWixpQ0FBaUI1eUIsS0FBS3d6QixhQUFMLEdBQXFCLEdBQXRDO0FBQ0g7QUFDSixTQUpEO0FBTUgsS0F0QkQ7QUF1QkEsUUFBTXhELGNBQWMsU0FBZEEsV0FBYyxHQUFVLENBRTdCLENBRkQ7QUFHQSxRQUFNeG5CLFNBQVM7QUFDWCx5QkFBa0Isc0JBQVNHLEtBQVQsRUFBZ0JtbkIsUUFBaEIsRUFBMEI1QyxRQUExQixFQUFtQztBQUNqRHZrQixrQkFBTWlWLGNBQU47O0FBRUEwVSw2QkFBaUJaLHdCQUFqQjtBQUNBa0IsNkJBQWlCakIsdUJBQWpCO0FBQ0gsU0FOVTtBQU9YLHVDQUFnQyxrQ0FBU2hwQixLQUFULEVBQWdCbW5CLFFBQWhCLEVBQTBCNUMsUUFBMUIsRUFBbUM7QUFDL0R2a0Isa0JBQU1pVixjQUFOOztBQUVBZ1UsMEJBQWMsSUFBZDtBQUNBUyxrQkFBTTlZLElBQU47QUFDQTRVLGtCQUFNdlYsUUFBTixDQUFlLHVCQUFmO0FBRUgsU0FkVTtBQWVYLHVDQUFnQyxrQ0FBU2pRLEtBQVQsRUFBZ0JtbkIsUUFBaEIsRUFBMEI1QyxRQUExQixFQUFtQztBQUMvRHZrQixrQkFBTWlWLGNBQU47O0FBRUFnVSwwQkFBYyxLQUFkO0FBQ0EsZ0JBQUksQ0FBQ0EsV0FBTCxFQUFrQjtBQUNkekQsc0JBQU1qVixXQUFOLENBQWtCLHVCQUFsQjtBQUNBbVosc0JBQU01WSxJQUFOO0FBQ0g7QUFDRGlaLDhCQUFrQixDQUFsQjtBQUNILFNBeEJVO0FBeUJYLHNDQUErQixpQ0FBUy9wQixLQUFULEVBQWdCbW5CLFFBQWhCLEVBQTBCNUMsUUFBMUIsRUFBbUM7QUFDOUR2a0Isa0JBQU1pVixjQUFOO0FBQ0FpVSx3QkFBWSxJQUFaO0FBQ0EsZ0JBQU1VLGFBQWFPLG9CQUFvQm5xQixLQUFwQixDQUFuQjtBQUNBMnBCLDZCQUFpQkMsVUFBakI7QUFDQUcsOEJBQWtCLENBQWxCO0FBQ0Fsd0IsaUJBQUsrdkIsVUFBTDtBQUNILFNBaENVO0FBaUNYLHNDQUErQixpQ0FBUzVwQixLQUFULEVBQWdCbW5CLFFBQWhCLEVBQTBCNUMsUUFBMUIsRUFBbUM7QUFDOUR2a0Isa0JBQU1pVixjQUFOOztBQUVBLGdCQUFJLENBQUNpVSxTQUFMLEVBQWdCO0FBQ1osb0JBQU1VLGFBQWFPLG9CQUFvQm5xQixLQUFwQixDQUFuQjtBQUNBK3BCLGtDQUFrQkgsVUFBbEI7QUFDQVcsa0NBQWtCWCxVQUFsQixFQUE4QjVwQixLQUE5QjtBQUNIO0FBQ0osU0F6Q1U7QUEwQ1gsOEJBQXVCLDJCQUFTQSxLQUFULEVBQWdCbW5CLFFBQWhCLEVBQTBCNUMsUUFBMUIsRUFBbUM7QUFDdER2a0Isa0JBQU1pVixjQUFOO0FBQ0EsZ0JBQUlpVSxTQUFKLEVBQWU7QUFDWCxvQkFBTVUsYUFBYU8sb0JBQW9CbnFCLEtBQXBCLENBQW5CO0FBQ0EycEIsaUNBQWlCQyxVQUFqQjtBQUNBRyxrQ0FBa0IsQ0FBbEI7QUFDQWx3QixxQkFBSyt2QixVQUFMO0FBQ0FXLGtDQUFrQlgsVUFBbEIsRUFBOEI1cEIsS0FBOUI7QUFDSDtBQUNKLFNBbkRVO0FBb0RYLDRCQUFxQix5QkFBU0EsS0FBVCxFQUFnQm1uQixRQUFoQixFQUEwQjVDLFFBQTFCLEVBQW1DO0FBQ3BEdmtCLGtCQUFNaVYsY0FBTjs7QUFFQSxnQkFBR2lVLFNBQUgsRUFBYTtBQUNUQSw0QkFBWSxLQUFaO0FBQ0ExRCxzQkFBTWpWLFdBQU4sQ0FBa0IsdUJBQWxCO0FBQ0g7QUFFSjtBQTVEVSxLQUFmOztBQStEQSxXQUFPLDRCQUFhK1UsVUFBYixFQUF5QixhQUF6QixFQUF3QyxJQUF4QyxFQUE4Q3psQixNQUE5QyxFQUFzRHFuQixVQUF0RCxFQUFrRUcsV0FBbEUsQ0FBUDtBQUNILENBOUxELEMsQ0FkQTs7O2tCQThNZXdCLFc7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkM5TUEsWUFBTTtBQUNqQixXQUNJLCtDQUNJLDZDQURKLEdBRUksaUNBRkosR0FHUSx1Q0FIUixHQUlRLGlFQUpSLEdBS1Esd0NBTFIsR0FNSSxRQU5KLEdBT0ksOENBUEosR0FRUSxvRUFSUixHQVNJLFFBVEosR0FVSSxnREFWSixHQVdBLFFBWko7QUFjSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBTkE7OztBQU9BLElBQU1pQyxvQkFBb0IsR0FBMUI7QUFDQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWUsQ0FBU3pGLFVBQVQsRUFBcUJDLEdBQXJCLEVBQTBCbHVCLElBQTFCLEVBQStCO0FBQ2hELFFBQU1tdUIsUUFBUSxzQkFBSSxNQUFJRCxJQUFJdnFCLGNBQUosRUFBUixDQUFkOztBQUVBLFFBQUlnd0IsbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBU0MsU0FBVCxFQUFtQjtBQUN0QyxZQUFJcEQsUUFBUSxFQUFDQyxPQUFRLEVBQVQsRUFBYW5XLE1BQU8sRUFBcEIsRUFBd0IxTixNQUFPZ25CLFNBQS9CLEVBQVo7O0FBRUEsWUFBR0EsY0FBYyxjQUFqQixFQUFnQztBQUM1QnBELGtCQUFNQyxLQUFOLEdBQWMsT0FBZDtBQUNBLGdCQUFJb0QsZ0JBQWdCM0YsSUFBSXRzQixTQUFKLEdBQWdCeUMsYUFBcEM7QUFDQSxnQkFBSXl2QixzQkFBc0I1RixJQUFJcnJCLGVBQUosRUFBMUI7QUFDQSxpQkFBSyxJQUFJN0QsSUFBSSxDQUFiLEVBQWdCQSxJQUFJNjBCLGNBQWM1MEIsTUFBbEMsRUFBMENELEdBQTFDLEVBQWdEO0FBQzVDLG9CQUFJc2IsT0FBTztBQUNQbVcsMkJBQVNvRCxjQUFjNzBCLENBQWQsTUFBcUIsQ0FBckIsR0FBd0IsUUFBeEIsR0FBbUM2MEIsY0FBYzcwQixDQUFkLENBRHJDO0FBRVArMEIsNkJBQVVELHdCQUF3QkQsY0FBYzcwQixDQUFkLENBRjNCO0FBR1BxVSwyQkFBUXdnQixjQUFjNzBCLENBQWQ7QUFIRCxpQkFBWDtBQUtBd3hCLHNCQUFNbFcsSUFBTixDQUFXelQsSUFBWCxDQUFnQnlULElBQWhCO0FBQ0g7QUFFSixTQWJELE1BYU0sSUFBR3NaLGNBQWMsY0FBakIsRUFBZ0M7QUFDbENwRCxrQkFBTUMsS0FBTixHQUFjLFFBQWQ7O0FBRUEsZ0JBQUl1RCxnQkFBZ0I5RixJQUFJeHRCLGdCQUFKLEVBQXBCO0FBQ0EsZ0JBQUlILGlCQUFpQjJ0QixJQUFJMXRCLGlCQUFKLEVBQXJCOztBQUVBLGlCQUFLLElBQUl4QixLQUFJLENBQWIsRUFBZ0JBLEtBQUlnMUIsY0FBYy8wQixNQUFsQyxFQUEwQ0QsSUFBMUMsRUFBZ0Q7QUFDNUMsb0JBQUlzYixRQUFPO0FBQ1BtVywyQkFBUXVELGNBQWNoMUIsRUFBZCxFQUFpQkksS0FEbEI7QUFFUDIwQiw2QkFBVXh6QixlQUFlRSxLQUFmLEtBQXlCekIsRUFGNUI7QUFHUHFVLDJCQUFRclU7QUFIRCxpQkFBWDtBQUtBd3hCLHNCQUFNbFcsSUFBTixDQUFXelQsSUFBWCxDQUFnQnlULEtBQWhCO0FBQ0g7QUFFSjtBQUNELGVBQU9rVyxLQUFQO0FBQ0gsS0FqQ0Q7O0FBbUNBLFFBQU1YLGFBQWEsU0FBYkEsVUFBYSxDQUFTQyxRQUFULEVBQW1CNUMsUUFBbkIsRUFBNEI7QUFDM0MsWUFBR3VHLG9CQUFvQnRGLE1BQU0zcEIsTUFBTixFQUF2QixFQUFzQztBQUNsQzJwQixrQkFBTTNWLElBQU4sQ0FBVyxvQkFBWCxFQUFpQ0MsR0FBakMsQ0FBcUMsV0FBckMsRUFBa0QsT0FBbEQ7QUFDSDtBQUNKLEtBSkQ7QUFLQSxRQUFNdVgsY0FBYyxTQUFkQSxXQUFjLEdBQVU7QUFDMUI7QUFDSCxLQUZEO0FBR0EsUUFBTXhuQixTQUFTO0FBQ1gsd0NBQWdDLGlDQUFVRyxLQUFWLEVBQWlCbW5CLFFBQWpCLEVBQTJCNUMsUUFBM0IsRUFBcUM7QUFDakV2a0Isa0JBQU1pVixjQUFOO0FBQ0EsZ0JBQUlnVyxZQUFZLHNCQUFJanJCLE1BQU13VSxhQUFWLEVBQXlCdkMsSUFBekIsQ0FBOEIsZ0JBQTlCLENBQWhCO0FBQ0E7QUFDQW1XLHVDQUFpQmxxQixJQUFqQixDQUFzQjZzQixhQUFhekYsVUFBYixFQUF5QkMsR0FBekIsRUFBOEJ5RixpQkFBaUJDLFNBQWpCLENBQTlCLENBQXRCO0FBQ0gsU0FOVTtBQU9YLG9DQUE2Qiw4QkFBU2pyQixLQUFULEVBQWdCbW5CLFFBQWhCLEVBQTBCNUMsUUFBMUIsRUFBbUM7QUFDNUR2a0Isa0JBQU1pVixjQUFOOztBQUVBO0FBQ0EsZ0JBQUl3SixPQUFPMkosMkJBQWlCM0YsR0FBakIsRUFBWDtBQUNBaEUsaUJBQUs1bkIsT0FBTDtBQUNILFNBYlU7QUFjWCx5Q0FBa0Msa0NBQVNtSixLQUFULEVBQWdCbW5CLFFBQWhCLEVBQTBCNUMsUUFBMUIsRUFBbUM7QUFDakV2a0Isa0JBQU1pVixjQUFOOztBQUVBLGdCQUFJZ1csWUFBWSxzQkFBSWpyQixNQUFNd1UsYUFBVixFQUF5QnZDLElBQXpCLENBQThCLGdCQUE5QixDQUFoQjtBQUNBLGdCQUFJdkgsUUFBUSxzQkFBSTFLLE1BQU13VSxhQUFWLEVBQXlCdkMsSUFBekIsQ0FBOEIsZ0JBQTlCLENBQVo7O0FBRUEsZ0JBQUdnWixhQUFhdmdCLEtBQWhCLEVBQXNCO0FBQ2xCLG9CQUFHdWdCLGNBQWMsY0FBakIsRUFBZ0M7QUFDNUIxRix3QkFBSXhyQixlQUFKLENBQW9Cc0MsV0FBV3FPLEtBQVgsQ0FBcEI7QUFDSCxpQkFGRCxNQUVNLElBQUd1Z0IsY0FBYyxjQUFqQixFQUFnQztBQUNsQzFGLHdCQUFJdHRCLGlCQUFKLENBQXNCUCxTQUFTZ1QsS0FBVCxDQUF0QjtBQUNIOztBQUVEO0FBQ0E5TSxxQ0FBRXVlLElBQUYsQ0FBT2lNLDBCQUFQLEVBQXlCLFVBQVNDLFlBQVQsRUFBc0I7QUFDM0NBLGlDQUFheHhCLE9BQWI7QUFDSCxpQkFGRDtBQUdBdXhCLDJDQUFpQi9sQixNQUFqQixDQUF3QixDQUF4QixFQUEyQitsQiwyQkFBaUI5eEIsTUFBNUM7QUFDSDtBQUVKO0FBbENVLEtBQWY7O0FBcUNBLFdBQU8sNEJBQWFndkIsVUFBYixFQUF5QixjQUF6QixFQUF5Q2p1QixJQUF6QyxFQUErQ3dJLE1BQS9DLEVBQXVEcW5CLFVBQXZELEVBQW1FRyxXQUFuRSxDQUFQO0FBRUgsQ0FyRkQ7O2tCQXVGZTBELFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRmY7Ozs7OztrQkFFZSxVQUFDMXpCLElBQUQsRUFBVTtBQUNyQixRQUFJNGIsV0FBVyxvQ0FBa0M1YixLQUFLMHdCLE1BQUwsR0FBYyxpQkFBZCxHQUFpQyxFQUFuRSxJQUF1RSxJQUF2RSxHQUNLLDJDQURMLEdBRVMsOENBRlQsSUFHYzF3QixLQUFLMHdCLE1BQUwsR0FBYyxFQUFkLEdBQW1CLHNEQUhqQyxJQUlhLHdDQUpiLEdBSXNEMXdCLEtBQUt5d0IsS0FKM0QsR0FJaUUsU0FKakUsR0FLUyxRQUxULEdBTUssUUFOTCxHQU9LLDBDQVBwQjtBQVF3QmxxQix5QkFBRW5CLE9BQUYsQ0FBVXBGLEtBQUtzYSxJQUFmLEVBQXFCLFVBQVNBLElBQVQsRUFBYztBQUMvQixZQUFHdGEsS0FBSzB3QixNQUFSLEVBQWU7QUFDWDlVLHdCQUFZcVksb0JBQW9CM1osS0FBS21XLEtBQXpCLEVBQWdDblcsS0FBS2pILEtBQXJDLEVBQTRDaUgsS0FBSzFOLElBQWpELENBQVo7QUFDSCxTQUZELE1BRUs7QUFDRGdQLHdCQUFZc1kscUJBQXFCNVosS0FBS21XLEtBQTFCLEVBQWlDblcsS0FBS2pILEtBQXRDLEVBQTZDclQsS0FBSzRNLElBQWxELEVBQXdEME4sS0FBS3laLE9BQTdELENBQVo7QUFDSDtBQUNKLEtBTkQ7QUFPeEJuWSxnQkFBb0IsV0FDSixRQURoQjtBQUVBLFdBQU9BLFFBQVA7QUFDSCxDOztBQUVNLElBQU1xWSxvREFBc0IsU0FBdEJBLG1CQUFzQixDQUFDeEQsS0FBRCxFQUFRcGQsS0FBUixFQUFlekcsSUFBZixFQUF3QjtBQUN2RCxXQUNJLHlFQUF1RUEsSUFBdkUsR0FBNEUsSUFBNUUsR0FDSSx1Q0FESixHQUM0QzZqQixLQUQ1QyxHQUNrRCxTQURsRCxHQUVJLHFEQUZKLEdBR0ksdUNBSEosR0FHNENwZCxLQUg1QyxHQUdrRCxTQUhsRCxHQUlBLFFBTEo7QUFPSCxDQVJNOztBQVVBLElBQU02Z0Isc0RBQXVCLFNBQXZCQSxvQkFBdUIsQ0FBQ3pELEtBQUQsRUFBUXBkLEtBQVIsRUFBZXpHLElBQWYsRUFBcUJtbkIsT0FBckIsRUFBaUM7QUFDakUsV0FDSSwwRUFBd0VubkIsSUFBeEUsR0FBNkUsb0JBQTdFLEdBQWtHeUcsS0FBbEcsR0FBd0csSUFBeEcsR0FDSSx3Q0FESixJQUM4QzBnQixVQUFRLFVBQVIsR0FBbUIsRUFEakUsSUFDcUUsbUJBRHJFLEdBRUksdUNBRkosR0FFNEN0RCxLQUY1QyxHQUVrRCxTQUZsRCxHQUdBLFFBSko7QUFNSCxDQVBNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCUDs7OztBQUNBOzs7O0FBSkE7OztBQU1BLElBQU0wRCxjQUFjLFNBQWRBLFdBQWMsQ0FBU2xHLFVBQVQsRUFBcUJDLEdBQXJCLEVBQTBCbHVCLElBQTFCLEVBQStCOztBQUUvQyxRQUFJbzBCLFlBQVksRUFBaEI7QUFBQSxRQUFvQkMsWUFBWSxFQUFoQztBQUNBLFFBQUlDLHNCQUFzQixTQUF0QkEsbUJBQXNCLENBQVNDLElBQVQsRUFBYztBQUNwQyxlQUFPLHlCQUFXQSxJQUFYLENBQVA7QUFDSCxLQUZEOztBQUlBLFFBQU0xRSxhQUFhLFNBQWJBLFVBQWEsQ0FBU0MsUUFBVCxFQUFtQjVDLFFBQW5CLEVBQTRCO0FBQzNDa0gsb0JBQVl0RSxTQUFTdFgsSUFBVCxDQUFjLG1CQUFkLENBQVo7QUFDQTZiLG9CQUFZdkUsU0FBU3RYLElBQVQsQ0FBYyxvQkFBZCxDQUFaOztBQUVBLFlBQUd4WSxLQUFLbUgsUUFBTCxLQUFrQndwQixRQUFyQixFQUE4Qjs7QUFFMUIwRCxzQkFBVXphLElBQVYsQ0FBZTBhLG9CQUFvQnQwQixLQUFLbUgsUUFBekIsQ0FBZjtBQUNBK21CLGdCQUFJcHVCLEVBQUosQ0FBTyxNQUFQLEVBQWUsVUFBU0UsSUFBVCxFQUFlO0FBQzFCbzBCLDBCQUFVeGEsSUFBVixDQUFlMGEsb0JBQW9CdDBCLEtBQUt5QyxRQUF6QixDQUFmO0FBQ0gsYUFGRDtBQUdIO0FBRUosS0FaRDtBQWFBLFFBQU11dEIsY0FBYyxTQUFkQSxXQUFjLEdBQVU7QUFDMUI7QUFDSCxLQUZEO0FBR0EsUUFBTXhuQixTQUFTLEVBQWY7O0FBSUEsV0FBTyw0QkFBYXlsQixVQUFiLEVBQXlCLGFBQXpCLEVBQXdDanVCLElBQXhDLEVBQThDd0ksTUFBOUMsRUFBc0RxbkIsVUFBdEQsRUFBa0VHLFdBQWxFLENBQVA7QUFDSCxDQTVCRDs7a0JBK0JlbUUsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ3JDQSxVQUFDbjBCLElBQUQsRUFBVTtBQUNyQixXQUNJLG9DQUNLQSxLQUFLbUgsUUFBTCxLQUFrQndwQixRQUFsQixHQUVJLG9FQUNJM3dCLEtBQUs0TSxJQUFMLElBQVksUUFBWixHQUVHLGlFQUZILEdBSUcsbUJBTFAsSUFNRCxXQVJILEdBVUksK0NBQ0csNkNBREgsR0FFRyw2Q0FiWixJQWVBLFFBaEJKO0FBa0JILEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztrUUNuQkQ7Ozs7O0FBR0E7Ozs7OztBQUVBLElBQU00bkIsZUFBZSxTQUFmQSxZQUFlLENBQVN2RyxVQUFULEVBQXFCQyxHQUFyQixFQUF5Qjs7QUFFMUMsUUFBSXVHLG1CQUFtQixFQUF2QjtBQUFBLFFBQ0lDLFVBQVUsRUFEZDtBQUFBLFFBRUlDLGdCQUFnQixFQUZwQjtBQUFBLFFBR0lDLGVBQWUsRUFIbkI7QUFBQSxRQUlJQyxpQkFBaUIsRUFKckI7QUFBQSxRQUtJQyxtQkFBbUIsRUFMdkI7QUFBQSxRQU1JQyxrQkFBa0IsRUFOdEI7QUFPQSxRQUFJbEQsWUFBWSxLQUFoQjtBQUNBLFFBQUltRCxjQUFjLEVBQWxCO0FBQUEsUUFBdUJDLGNBQWMsQ0FBckM7QUFBQSxRQUF3Q0MsV0FBVyxDQUFuRDtBQUFBLFFBQXNEQyxXQUFXLENBQWpFOztBQUdBO0FBQ0EsUUFBSUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFTN0MsVUFBVCxFQUFxQjtBQUNyQ3NDLHVCQUFlcGIsSUFBZjtBQUNBcWIseUJBQWlCcmIsSUFBakI7QUFDQXNiLHdCQUFnQnRiLElBQWhCOztBQUVBLFlBQUk4WSxjQUFjLEVBQWxCLEVBQXNCO0FBQ2xCc0MsMkJBQWV0YixJQUFmO0FBQ0gsU0FGRCxNQUVPLElBQUlnWixhQUFhLEVBQWIsSUFBbUJBLGFBQWEsQ0FBcEMsRUFBdUM7QUFDMUN1Qyw2QkFBaUJ2YixJQUFqQjtBQUNILFNBRk0sTUFFQSxJQUFJZ1osY0FBYyxDQUFsQixFQUFxQjtBQUN4QndDLDRCQUFnQnhiLElBQWhCO0FBQ0g7QUFDSixLQVpEOztBQWNBLFFBQUk4YixjQUFjLFNBQWRBLFdBQWMsQ0FBUzlDLFVBQVQsRUFBcUI7QUFDbkMsWUFBSXJFLElBQUk5ckIsT0FBSixFQUFKLEVBQW1CO0FBQ2Ztd0IseUJBQWEsQ0FBYjtBQUNIOztBQUVENkMsc0JBQWM3QyxVQUFkOztBQUVBLFlBQU0rQyxpQkFBaUJILFdBQVc1QyxVQUFYLEdBQXdCLEdBQS9DOztBQUVBb0Msc0JBQWNsYyxHQUFkLENBQWtCLE1BQWxCLEVBQTBCNmMsaUJBQWdCLElBQTFDO0FBQ0FWLHFCQUFhbmMsR0FBYixDQUFpQixPQUFqQixFQUEwQjZjLGlCQUFnQixJQUExQztBQUNILEtBWEQ7O0FBYUEsUUFBSXhDLHNCQUFzQixTQUF0QkEsbUJBQXNCLENBQVVucUIsS0FBVixFQUFpQjtBQUN2QyxZQUFNNHNCLFlBQVk1c0IsTUFBTXNxQixLQUFOLEdBQWN5QixRQUFReGEsTUFBUixHQUFpQk0sSUFBakQ7QUFDQSxZQUFJK1gsYUFBYWdELFlBQVlQLFdBQVosR0FBMEIsR0FBM0M7O0FBRUEsWUFBSXpDLGFBQWEsQ0FBakIsRUFBb0I7QUFDaEJBLHlCQUFhLENBQWI7QUFDSDs7QUFFRCxZQUFJQSxhQUFhLEdBQWpCLEVBQXNCO0FBQ2xCQSx5QkFBYSxHQUFiO0FBQ0g7O0FBRUQsZUFBT0EsVUFBUDtBQUNILEtBYkQ7O0FBZ0JBLFFBQU0xQyxhQUFhLFNBQWJBLFVBQWEsQ0FBU0MsUUFBVCxFQUFtQjVDLFFBQW5CLEVBQTRCO0FBQzNDdUgsMkJBQW1CM0UsU0FBU3RYLElBQVQsQ0FBYyw4QkFBZCxDQUFuQjtBQUNBa2Msa0JBQVU1RSxTQUFTdFgsSUFBVCxDQUFjLG9CQUFkLENBQVY7QUFDQW1jLHdCQUFnQjdFLFNBQVN0WCxJQUFULENBQWMsMkJBQWQsQ0FBaEI7QUFDQW9jLHVCQUFlOUUsU0FBU3RYLElBQVQsQ0FBYywwQkFBZCxDQUFmOztBQUVBcWMseUJBQWlCL0UsU0FBU3RYLElBQVQsQ0FBZSw0QkFBZixDQUFqQjtBQUNBc2MsMkJBQW1CaEYsU0FBU3RYLElBQVQsQ0FBYyw4QkFBZCxDQUFuQjtBQUNBdWMsMEJBQWtCakYsU0FBU3RYLElBQVQsQ0FBYyw2QkFBZCxDQUFsQjs7QUFFQXljLHNCQUFjTixjQUFjcHdCLEtBQWQsRUFBZDtBQUNBNHdCLG1CQUFXSCxjQUFjQyxXQUF6Qjs7QUFFQS9HLFlBQUlwdUIsRUFBSixDQUFPLE9BQVAsRUFBZ0IsWUFBVztBQUN2QnUxQix3QkFBWW5ILElBQUluc0IsU0FBSixFQUFaO0FBQ0gsU0FGRDtBQUdBbXNCLFlBQUlwdUIsRUFBSixDQUFPLGVBQVAsRUFBd0IsVUFBU0UsSUFBVCxFQUFlO0FBQ25DcTFCLHdCQUFZcjFCLEtBQUtpQyxNQUFqQjtBQUNILFNBRkQ7QUFHQWlzQixZQUFJcHVCLEVBQUosQ0FBTyxNQUFQLEVBQWUsVUFBU0UsSUFBVCxFQUFlO0FBQzFCLGdCQUFJQSxLQUFLc0UsSUFBVCxFQUFlO0FBQ1grd0IsNEJBQVksQ0FBWjtBQUNILGFBRkQsTUFFTztBQUNIQSw0QkFBWW5ILElBQUluc0IsU0FBSixFQUFaO0FBQ0g7QUFDSixTQU5EO0FBUUgsS0EzQkQ7QUE0QkEsUUFBTWl1QixjQUFjLFNBQWRBLFdBQWMsR0FBVSxDQUU3QixDQUZEO0FBR0EsUUFBTXhuQixTQUFTO0FBQ1gsb0NBQTZCLDhCQUFTRyxLQUFULEVBQWdCbW5CLFFBQWhCLEVBQTBCNUMsUUFBMUIsRUFBbUM7QUFDNUR2a0Isa0JBQU1pVixjQUFOOztBQUVBLGdCQUFJc1EsSUFBSW5zQixTQUFKLE9BQW9CLENBQXhCLEVBQTJCO0FBQ3ZCbXNCLG9CQUFJaHNCLE9BQUosQ0FBWSxLQUFaO0FBQ0Fnc0Isb0JBQUlsc0IsU0FBSixDQUFjLEdBQWQ7QUFDSCxhQUhELE1BR087QUFDSGtzQixvQkFBSWhzQixPQUFKO0FBQ0g7QUFDSixTQVZVO0FBV1gseUNBQWtDLG1DQUFTeUcsS0FBVCxFQUFnQm1uQixRQUFoQixFQUEwQjVDLFFBQTFCLEVBQW1DO0FBQ2pFdmtCLGtCQUFNaVYsY0FBTjtBQUNBNlcsNkJBQWlCN2IsUUFBakIsQ0FBMEIsUUFBMUI7QUFDSCxTQWRVO0FBZVgseUNBQWtDLG1DQUFTalEsS0FBVCxFQUFnQm1uQixRQUFoQixFQUEwQjVDLFFBQTFCLEVBQW1DO0FBQ2pFdmtCLGtCQUFNaVYsY0FBTjs7QUFFQWlVLHdCQUFZLEtBQVo7QUFDSCxTQW5CVTtBQW9CWCx3Q0FBaUMsa0NBQVNscEIsS0FBVCxFQUFnQm1uQixRQUFoQixFQUEwQjVDLFFBQTFCLEVBQW1DO0FBQ2hFdmtCLGtCQUFNaVYsY0FBTjtBQUNBaVUsd0JBQVksSUFBWjtBQUNBM0QsZ0JBQUloc0IsT0FBSixDQUFZLEtBQVo7QUFDQWdzQixnQkFBSWxzQixTQUFKLENBQWM4d0Isb0JBQW9CbnFCLEtBQXBCLENBQWQ7QUFDSCxTQXpCVTtBQTBCWCxzQ0FBK0IsZ0NBQVNBLEtBQVQsRUFBZ0JtbkIsUUFBaEIsRUFBMEI1QyxRQUExQixFQUFtQztBQUM5RHZrQixrQkFBTWlWLGNBQU47QUFDQWlVLHdCQUFZLEtBQVo7QUFDSCxTQTdCVTtBQThCWCx3Q0FBaUMsa0NBQVNscEIsS0FBVCxFQUFnQm1uQixRQUFoQixFQUEwQjVDLFFBQTFCLEVBQW1DO0FBQ2hFdmtCLGtCQUFNaVYsY0FBTjtBQUNBLGdCQUFJLENBQUNpVSxTQUFMLEVBQWdCO0FBQ1osdUJBQU8sS0FBUDtBQUNIOztBQUVEM0QsZ0JBQUlsc0IsU0FBSixDQUFjOHdCLG9CQUFvQm5xQixLQUFwQixDQUFkO0FBQ0g7QUFyQ1UsS0FBZjs7QUF3Q0EsV0FBTyxTQUFjLDRCQUFhc2xCLFVBQWIsRUFBeUIsY0FBekIsRUFBeUMsSUFBekMsRUFBK0N6bEIsTUFBL0MsRUFBdURxbkIsVUFBdkQsRUFBbUVHLFdBQW5FLENBQWQsRUFBK0Y7QUFDbEdjLHNCQUFjLHNCQUFVM3VCLEtBQVYsRUFBaUI7QUFDM0IwdkIsd0JBQVkxdkIsS0FBWjtBQUNIO0FBSGlHLEtBQS9GLENBQVA7QUFLSCxDQXJJRDs7a0JBdUllcXlCLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVJZjs7O2tCQUdlLFlBQU07QUFDakIsV0FDSSx3Q0FDSSwrQ0FESixHQUVRLDJDQUZSLEdBR1EsNkNBSFIsR0FJUSw0Q0FKUixHQUtJLFdBTEosR0FNSSwyQ0FOSixHQU9RLGlDQVBSLEdBUVksMENBUlosR0FTWSw2Q0FUWixHQVVZLDhDQVZaLEdBV1EsUUFYUixHQVlJLFFBWkosR0FhQSxRQWRKO0FBZ0JILEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRDs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7Ozs7Ozs7OztBQVdBLElBQU1nQixlQUFlLFNBQWZBLFlBQWUsQ0FBVXgzQixTQUFWLEVBQXFCeTNCLFlBQXJCLEVBQW1DejFCLElBQW5DLEVBQXlDd0ksTUFBekMsRUFBaURxbkIsVUFBakQsRUFBNkRHLFdBQTdELEVBQTBFMEYsTUFBMUUsRUFBa0Y7QUFDbkcsUUFBSXpILGFBQWExbkIscUJBQUVnUyxTQUFGLENBQVl2YSxTQUFaLElBQXlCLHNCQUFJQSxTQUFKLENBQXpCLEdBQTBDQSxTQUEzRDtBQUNBLFFBQUkyM0Isa0JBQUo7QUFDQSxRQUFJQyxhQUFhLEVBQWpCO0FBQ0EsUUFBSTEzQixPQUFPLEVBQVg7O0FBRUEsUUFBSTIzQix5QkFBeUIsU0FBekJBLHNCQUF5QixDQUFVL2EsSUFBVixFQUFnQjtBQUN6QyxZQUFNZ2IsYUFBYXRwQixTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQ0FxcEIsbUJBQVdoZSxTQUFYLEdBQXVCZ0QsSUFBdkI7O0FBRUE2YSxvQkFBWSxzQkFBSUcsV0FBVzNhLFVBQWYsQ0FBWjs7QUFFQSxlQUFPMmEsV0FBVzNhLFVBQWxCO0FBQ0gsS0FQRDs7QUFTQSxRQUFJdWEsTUFBSixFQUFZO0FBQ1J6SCxtQkFBVzNjLE9BQVgsQ0FBbUJ1a0IsdUJBQXVCRSxvQkFBVU4sZUFBZSxVQUF6QixFQUFxQ3oxQixJQUFyQyxDQUF2QixDQUFuQjtBQUNILEtBRkQsTUFFTztBQUNIaXVCLG1CQUFXdlUsTUFBWCxDQUFrQm1jLHVCQUF1QkUsb0JBQVVOLGVBQWUsVUFBekIsRUFBcUN6MUIsSUFBckMsQ0FBdkIsQ0FBbEI7QUFDSDs7QUFFRCxRQUFJNnZCLFVBQUosRUFBZ0I7QUFDWkEsbUJBQVc4RixTQUFYLEVBQXNCejNCLElBQXRCO0FBQ0g7O0FBRURnSCxXQUFPQyxJQUFQLENBQVlxRCxNQUFaLEVBQW9CcEQsT0FBcEIsQ0FBNEIsdUJBQWU7QUFDdkMsWUFBSTR3QixlQUFlQyxZQUFZaGQsS0FBWixDQUFrQixHQUFsQixDQUFuQjtBQUNBLFlBQUk4VyxZQUFZaUcsYUFBYSxDQUFiLEVBQWdCMWtCLE9BQWhCLENBQXdCLEtBQXhCLEVBQStCLEVBQS9CLENBQWhCO0FBQ0EsWUFBSTJMLFNBQVMrWSxhQUFhLENBQWIsRUFBZ0Ixa0IsT0FBaEIsQ0FBd0IsS0FBeEIsRUFBK0IsRUFBL0IsQ0FBYjs7QUFFQSxZQUFJNGtCLFVBQVUsRUFBZDs7QUFFQSxZQUFHalosV0FBVyxVQUFYLElBQXlCQSxXQUFXLFFBQXZDLEVBQWdEO0FBQzVDaVosc0JBQVUsc0JBQUlqWixNQUFKLENBQVY7QUFDSCxTQUZELE1BRUs7QUFDRGlaLHNCQUFVUCxVQUFVbmQsSUFBVixDQUFleUUsTUFBZixNQUEyQjBZLFVBQVU3YixRQUFWLENBQW1CbUQsT0FBTzNMLE9BQVAsQ0FBZSxHQUFmLEVBQW1CLEVBQW5CLENBQW5CLElBQTZDcWtCLFNBQTdDLEdBQXlELElBQXBGLENBQVY7QUFDSDs7QUFHRCxZQUFJNUYsYUFBYTlTLE1BQWIsSUFBdUJpWixPQUEzQixFQUFvQztBQUNoQyxnQkFBSXpmLEtBQUt2UixPQUFPQyxJQUFQLENBQVl5d0IsVUFBWixFQUF3QjMyQixNQUF4QixFQUFUOztBQUVBO0FBQ0EsZ0JBQUlrM0IsY0FBYyxTQUFkQSxXQUFjLENBQVV4dEIsS0FBVixFQUFpQjtBQUMvQix1QkFBT0gsT0FBT3l0QixXQUFQLEVBQW9CdHRCLEtBQXBCLEVBQTJCZ3RCLFNBQTNCLEVBQXNDejNCLElBQXRDLENBQVA7QUFDSCxhQUZEO0FBR0EwM0IsdUJBQVduZixFQUFYLElBQWlCLEVBQUMxVyxNQUFNZ3dCLFNBQVAsRUFBa0I5UyxRQUFRQSxNQUExQixFQUFrQzlKLFVBQVVnakIsV0FBNUMsRUFBakI7O0FBRUE7QUFDQSxnQkFBSUMsYUFBYUYsUUFBUTlhLEdBQVIsR0FBY25jLE1BQS9CO0FBQ0EsZ0JBQUdtM0IsYUFBYSxDQUFoQixFQUFrQjtBQUNkLG9CQUFJaGUsV0FBVzhkLFFBQVE5YSxHQUFSLEVBQWY7QUFDQSxxQkFBSSxJQUFJcGMsSUFBSSxDQUFaLEVBQWVBLElBQUlvM0IsVUFBbkIsRUFBK0JwM0IsR0FBL0IsRUFBb0M7QUFDaENvWiw2QkFBU3BaLENBQVQsRUFBWTBkLGdCQUFaLENBQTZCcVQsU0FBN0IsRUFBd0NvRyxXQUF4QztBQUNIO0FBQ0Q7QUFDQTs7O0FBR0gsYUFURCxNQVNLO0FBQ0RELHdCQUFROWEsR0FBUixHQUFjc0IsZ0JBQWQsQ0FBK0JxVCxTQUEvQixFQUEwQ29HLFdBQTFDO0FBQ0g7QUFHSixTQXpCRCxNQXlCTztBQUNILG1CQUFPLEtBQVA7QUFDSDtBQUNKLEtBMUNEOztBQTRDQWo0QixTQUFLc0IsT0FBTCxHQUFlLFlBQVk7QUFDdkIwRixlQUFPQyxJQUFQLENBQVl5d0IsVUFBWixFQUF3Qnh3QixPQUF4QixDQUFnQyxjQUFNO0FBQ2xDLGdCQUFJdUQsUUFBUWl0QixXQUFXbmYsRUFBWCxDQUFaO0FBQ0EsZ0JBQUl5ZixVQUFVLEVBQWQ7O0FBRUEsZ0JBQUd2dEIsTUFBTXNVLE1BQU4sS0FBaUIsVUFBakIsSUFBK0J0VSxNQUFNc1UsTUFBTixLQUFpQixRQUFuRCxFQUE0RDtBQUN4RGlaLDBCQUFVLHNCQUFJdnRCLE1BQU1zVSxNQUFWLENBQVY7QUFDSCxhQUZELE1BRUs7QUFDRGlaLDBCQUFVUCxVQUFVbmQsSUFBVixDQUFlN1AsTUFBTXNVLE1BQXJCLE1BQWlDMFksVUFBVTdiLFFBQVYsQ0FBbUJuUixNQUFNc1UsTUFBTixDQUFhM0wsT0FBYixDQUFxQixHQUFyQixFQUF5QixFQUF6QixDQUFuQixJQUFtRHFrQixTQUFuRCxHQUErRCxJQUFoRyxDQUFWO0FBQ0g7O0FBRUQ7QUFDQSxnQkFBSVMsYUFBYUYsUUFBUTlhLEdBQVIsR0FBY25jLE1BQS9CO0FBQ0EsZ0JBQUdtM0IsYUFBYSxDQUFoQixFQUFrQjtBQUNkLG9CQUFJaGUsV0FBVzhkLFFBQVE5YSxHQUFSLEVBQWY7QUFDQSxxQkFBSSxJQUFJcGMsSUFBSSxDQUFaLEVBQWVBLElBQUlvM0IsVUFBbkIsRUFBK0JwM0IsR0FBL0IsRUFBb0M7QUFDaENvWiw2QkFBU3BaLENBQVQsRUFBWW9mLG1CQUFaLENBQWdDelYsTUFBTTVJLElBQXRDLEVBQTRDNEksTUFBTXdLLFFBQWxEO0FBQ0g7QUFDRDs7O0FBR0gsYUFSRCxNQVFLO0FBQ0QraUIsd0JBQVE5YSxHQUFSLEdBQWNnRCxtQkFBZCxDQUFrQ3pWLE1BQU01SSxJQUF4QyxFQUE4QzRJLE1BQU13SyxRQUFwRDtBQUNIOztBQUVELG1CQUFPeWlCLFdBQVduZixFQUFYLENBQVA7QUFDSCxTQXpCRDs7QUEyQkEsWUFBR2tmLFNBQUgsRUFBYTtBQUNUQSxzQkFBVXJ5QixNQUFWO0FBQ0g7O0FBRUQsWUFBSTBzQixXQUFKLEVBQWlCO0FBQ2JBO0FBQ0g7QUFDSixLQW5DRDtBQW9DQSxXQUFPOXhCLElBQVA7QUFFSCxDQTNHRCxDLENBbkJBOzs7O2tCQWlJZXMzQixZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SGY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBakJBOzs7QUFtQkEsSUFBTU8sWUFBWTtBQUNkTSw0Q0FEYztBQUVkQyx3Q0FGYztBQUdkQywwQ0FIYztBQUlkQyxrREFKYztBQUtkQyxvREFMYztBQU1kQyw4Q0FOYztBQU9kQyx3REFQYzs7QUFTZEMsNENBVGM7QUFVZEMsd0RBVmM7QUFXZEMsc0RBWGM7QUFZZEMsb0RBWmM7QUFhZEMsc0RBYmM7QUFjZEMsZ0VBZGM7QUFlZEM7QUFmYyxDQUFsQjs7a0JBa0JlbkIsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ2Y7Ozs7QUFJQSxJQUFNTSxtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFTemMsSUFBVCxFQUFjO0FBQ25DLFNBQU8sa0VBQ0ssTUFETCxHQUNZQSxJQURaLEdBQ2lCLE9BRGpCLEdBRUssK0NBRkwsR0FHQyxRQUhSO0FBSUgsQ0FMRDs7a0JBT2V5YyxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYZjs7O0FBR0EsSUFBTXRGLG1CQUFtQixFQUF6Qjs7a0JBRWVBLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQUNBOzs7O0FBSkE7OztBQVdBLElBQU1vRyxZQUFZLFNBQVpBLFNBQVksQ0FBU2xKLFVBQVQsRUFBcUJDLEdBQXJCLEVBQTBCa0osV0FBMUIsRUFBc0M7O0FBRXBELFFBQU12SCxhQUFhLFNBQWJBLFVBQWEsQ0FBUzVCLFVBQVQsRUFBcUI2QixRQUFyQixFQUErQjVDLFFBQS9CLEVBQXdDO0FBQ3ZEO0FBQ0gsS0FGRDtBQUdBLFFBQU04QyxjQUFjLFNBQWRBLFdBQWMsR0FBVTtBQUMxQjtBQUNILEtBRkQ7QUFHQSxRQUFNeG5CLFNBQVM7QUFDWDs7Ozs7OztBQURXLEtBQWY7O0FBV0EsV0FBTyw0QkFBYXlsQixVQUFiLEVBQXlCLFdBQXpCLEVBQXNDbUosV0FBdEMsRUFBbUQ1dUIsTUFBbkQsRUFBMkRxbkIsVUFBM0QsRUFBdUVHLFdBQXZFLENBQVA7QUFDSCxDQXBCRDs7a0JBc0JlbUgsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNmOztrQkFXZSxVQUFDQyxXQUFELEVBQWlCO0FBQzVCLFdBQ0ksNkNBQWdEO0FBQzNDQSxvQkFBZ0JocEIsd0JBQWhCLEdBQWdDLG1EQUFoQyxHQUFzRixFQUQzRixLQUVLZ3BCLGdCQUFnQmpwQix1QkFBaEIsR0FBZ0Msa0RBQWhDLEdBQXFGLEVBRjFGLEtBR0tpcEIsZ0JBQWdCbHBCLHlCQUFoQixHQUFpQyxvREFBakMsR0FBd0YsRUFIN0YsSUFJQSxRQUxKO0FBT0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJEOzs7O0FBQ0E7Ozs7OztBQUpBOzs7QUFNQSxJQUFNbXBCLGVBQWUsU0FBZkEsWUFBZSxDQUFTcEosVUFBVCxFQUFxQkMsR0FBckIsRUFBMEJ6ckIsUUFBMUIsRUFBbUM7QUFDcEQsUUFBTTByQixRQUFRLHNCQUFJLE1BQUlELElBQUl2cUIsY0FBSixFQUFSLENBQWQ7O0FBRUEsUUFBTWtzQixhQUFhLFNBQWJBLFVBQWEsQ0FBU0MsUUFBVCxFQUFtQjVDLFFBQW5CLEVBQTRCO0FBQzNDLFlBQU1vSyxhQUFheEgsU0FBU3ZyQixLQUFULEVBQW5CO0FBQ0EsWUFBTWd6QixjQUFjekgsU0FBU3RyQixNQUFULEVBQXBCOztBQUVBLFlBQU1tZ0IsSUFBSWhlLEtBQUtxZixHQUFMLENBQVN2akIsU0FBU3d3QixLQUFULEdBQWlCOUUsTUFBTWpVLE1BQU4sR0FBZU0sSUFBekMsRUFBK0MyVCxNQUFNNXBCLEtBQU4sS0FBZ0IreUIsVUFBL0QsQ0FBVjtBQUNBLFlBQU12VCxJQUFJcGQsS0FBS3FmLEdBQUwsQ0FBU3ZqQixTQUFTKzBCLEtBQVQsR0FBaUJySixNQUFNalUsTUFBTixHQUFlRyxHQUF6QyxFQUE4QzhULE1BQU0zcEIsTUFBTixLQUFpQit5QixXQUEvRCxDQUFWOztBQUVBekgsaUJBQVNyWCxHQUFULENBQWEsTUFBYixFQUFzQmtNLElBQUksSUFBMUI7QUFDQW1MLGlCQUFTclgsR0FBVCxDQUFhLEtBQWIsRUFBcUJzTCxJQUFJLElBQXpCO0FBQ0gsS0FURDtBQVVBLFFBQU1pTSxjQUFjLFNBQWRBLFdBQWMsR0FBVTtBQUMxQjtBQUNILEtBRkQ7QUFHQSxRQUFNeG5CLFNBQVM7QUFDWCxtQ0FBNEIsNkJBQVNHLEtBQVQsRUFBZ0JtbkIsUUFBaEIsRUFBMEI1QyxRQUExQixFQUFtQztBQUMzRHZrQixrQkFBTWlWLGNBQU47O0FBRUE1USxtQkFBT3lxQixJQUFQLENBQ0kseUNBREosRUFFSSxRQUZKO0FBSUg7QUFSVSxLQUFmOztBQVdBLFdBQU8sNEJBQWF4SixVQUFiLEVBQXlCLGNBQXpCLEVBQXlDeHJCLFFBQXpDLEVBQW1EK0YsTUFBbkQsRUFBMkRxbkIsVUFBM0QsRUFBdUVHLFdBQXZFLENBQVA7QUFFSCxDQTdCRDs7a0JBK0JlcUgsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNmOztrQkFDZSxZQUFNO0FBQ2pCLFdBQ0ksb0RBQ0ksNkNBREosR0FFUSxpREFGUixHQUdJLFFBSEosR0FJSSw2Q0FKSixHQUtRLHVEQUxSLEdBS2dFaDVCLGdCQUxoRSxHQUt3RSxTQUx4RSxHQU1JLFFBTkosR0FPQSxRQVJKO0FBVUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEQ7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQWNBLElBQU1xNUIsU0FBUyxTQUFUQSxNQUFTLENBQVN6SixVQUFULEVBQXFCQyxHQUFyQixFQUF5QjtBQUNwQyxRQUFJeUosWUFBWSxFQUFoQjtBQUFBLFFBQW9CQyxhQUFhLEVBQWpDO0FBQUEsUUFBcUNDLFVBQVUsRUFBL0M7O0FBSUEsUUFBTWhJLGFBQWEsU0FBYkEsVUFBYSxDQUFTQyxRQUFULEVBQW1CNUMsUUFBbkIsRUFBNEI7QUFDM0MsWUFBSTRLLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBUzMxQixLQUFULEVBQWU7QUFDakMsZ0JBQUd3MUIsU0FBSCxFQUFhO0FBQ1RBLDBCQUFVbjRCLE9BQVY7QUFDSDtBQUNEbTRCLHdCQUFZLHlCQUFVN0gsUUFBVixFQUFvQjVCLEdBQXBCLEVBQXlCL3JCLEtBQXpCLENBQVo7QUFDSCxTQUxEO0FBTUEsWUFBSTQxQixnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQVMxMkIsT0FBVCxFQUFrQjIyQixTQUFsQixFQUE0QjtBQUM1QyxnQkFBR0osVUFBSCxFQUFjO0FBQ1ZBLDJCQUFXcDRCLE9BQVg7QUFDSDtBQUNEbzRCLHlCQUFhLDBCQUFXOUgsUUFBWCxFQUFxQjVCLEdBQXJCLEVBQTBCN3NCLE9BQTFCLEVBQW1DMjJCLFNBQW5DLENBQWI7QUFDSCxTQUxEO0FBTUFILGtCQUFVLHVCQUFRL0gsUUFBUixFQUFrQjVCLEdBQWxCLENBQVY7O0FBRUFBLFlBQUlwdUIsRUFBSixDQUFPaUIsZ0JBQVAsRUFBYyxZQUFXO0FBQ3JCKzJCLDRCQUFnQjNwQix1QkFBaEI7QUFDSCxTQUZEO0FBR0ErZixZQUFJcHVCLEVBQUosQ0FBT29QLHVCQUFQLEVBQXFCLFVBQVNsUCxJQUFULEVBQWM7QUFDL0IsZ0JBQUdBLFFBQVFBLEtBQUtzeEIsUUFBaEIsRUFBeUI7QUFDckIsb0JBQUd0eEIsS0FBS3N4QixRQUFMLEtBQWtCbGpCLHdCQUFyQixFQUFtQztBQUMvQnVwQiw4QkFBVW40QixPQUFWO0FBQ0FxNEIsNEJBQVF0ZSxJQUFSLENBQWEsS0FBYjtBQUNILGlCQUhELE1BR0s7QUFDRHVlLG9DQUFnQjkzQixLQUFLc3hCLFFBQXJCO0FBQ0Esd0JBQUd0eEIsS0FBS3N4QixRQUFMLEtBQWtCL2lCLHdCQUFsQixJQUFtQ3ZPLEtBQUtzeEIsUUFBTCxLQUFrQmhqQix3QkFBeEQsRUFBdUU7QUFDbkV1cEIsZ0NBQVF0ZSxJQUFSLENBQWEsSUFBYjtBQUNILHFCQUZELE1BRUs7QUFDRHNlLGdDQUFRdGUsSUFBUixDQUFhLEtBQWI7QUFDSDtBQUNKO0FBQ0o7QUFDSixTQWREO0FBZUEyVSxZQUFJcHVCLEVBQUosQ0FBT0ksZ0JBQVAsRUFBYyxVQUFTZSxLQUFULEVBQWdCO0FBQzFCLGdCQUFJSSxVQUFVLEVBQWQ7O0FBRUEsZ0JBQUlKLE1BQU1kLElBQU4sS0FBZSxHQUFuQixFQUF3QjtBQUNwQmtCLDBCQUFVLHdCQUFWO0FBQ0gsYUFGRCxNQUVPLElBQUlKLE1BQU1kLElBQU4sS0FBZSxHQUFuQixFQUF3QjtBQUMzQmtCLDBCQUFVLDhCQUFWO0FBQ0gsYUFGTSxNQUVBLElBQUlKLE1BQU1kLElBQU4sS0FBZSxHQUFuQixFQUF3QjtBQUMzQmtCLDBCQUFVLG1FQUFWO0FBQ0gsYUFGTSxNQUVBLElBQUlKLE1BQU1kLElBQU4sS0FBZSxHQUFuQixFQUF3QjtBQUMzQmtCLDBCQUFVLHNHQUFWO0FBQ0gsYUFGTSxNQUVBLElBQUlKLE1BQU1kLElBQU4sS0FBZSxHQUFuQixFQUF3QjtBQUMzQmtCLDBCQUFVLHdJQUFWO0FBQ0gsYUFGTSxNQUVBLElBQUloQixTQUFTWSxNQUFNZCxJQUFOLEdBQVcsR0FBcEIsTUFBNkIsQ0FBakMsRUFBb0M7QUFDdkNrQiwwQkFBVSw0Q0FBVjtBQUNILGFBRk0sTUFFQTtBQUNIQSwwQkFBVSxzQ0FBVjtBQUNIOztBQUVEMDJCLDBCQUFjMTJCLE9BQWQsRUFBdUIsSUFBdkI7QUFDSCxTQXBCRDs7QUFzQkE2c0IsWUFBSXB1QixFQUFKLENBQU9RLDRCQUFQLEVBQTBCLFVBQVNxSSxLQUFULEVBQWU7QUFDckMsZ0JBQUl0SCxVQUFVLHdGQUFkOztBQUVBLGdCQUFHNnNCLElBQUkxdEIsaUJBQUosR0FBd0JDLEtBQXhCLEdBQThCLENBQTlCLEtBQXFDeXRCLElBQUl4dEIsZ0JBQUosR0FBdUJ6QixNQUEvRCxFQUFzRTtBQUNsRW9DLDBCQUFVLCtEQUFWO0FBQ0g7O0FBRUQwMkIsMEJBQWMxMkIsT0FBZCxFQUF1QixJQUF2QjtBQUNILFNBUkQ7QUFVSCxLQWpFRDtBQWtFQSxRQUFNMnVCLGNBQWMsU0FBZEEsV0FBYyxHQUFVO0FBQzFCO0FBQ0gsS0FGRDtBQUdBLFFBQU14bkIsU0FBUyxFQUFmOztBQUlBLFdBQU8sNEJBQWF5bEIsVUFBYixFQUF5QixRQUF6QixFQUFtQyxJQUFuQyxFQUF5Q3psQixNQUF6QyxFQUFpRHFuQixVQUFqRCxFQUE2REcsV0FBN0QsQ0FBUDtBQUNILENBL0VELEMsQ0F0QkE7OztrQkF1R2UwSCxNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHZjs7OztBQUlBLElBQU1uQixpQkFBaUIsU0FBakJBLGNBQWlCLENBQVMzYyxJQUFULEVBQWM7QUFDakMsU0FBTywyQ0FBUDtBQUNILENBRkQ7O2tCQUllMmMsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGY7Ozs7QUFDQTs7OztBQUpBOzs7QUFXQSxJQUFNMEIsYUFBYSxTQUFiQSxVQUFhLENBQVNoSyxVQUFULEVBQXFCQyxHQUFyQixFQUEwQjdzQixPQUExQixFQUFtQzIyQixTQUFuQyxFQUE2Qzs7QUFFNUQsUUFBSUUsbUJBQW1CLEVBQXZCOztBQUVBLFFBQU1ySSxhQUFhLFNBQWJBLFVBQWEsQ0FBU0MsUUFBVCxFQUFtQjVDLFFBQW5CLEVBQTRCO0FBQzNDLFlBQUc4SyxTQUFILEVBQWE7QUFDVEUsK0JBQW1CemtCLFdBQVcsWUFBVTtBQUNwQ3laLHlCQUFTMXRCLE9BQVQ7QUFDSCxhQUZrQixFQUVoQnc0QixhQUFXLElBRkssQ0FBbkI7QUFHSDtBQUNKLEtBTkQ7QUFPQSxRQUFNaEksY0FBYyxTQUFkQSxXQUFjLEdBQVUsQ0FDN0IsQ0FERDtBQUVBLFFBQU14bkIsU0FBUztBQUNYLG1DQUE0Qiw2QkFBU0csS0FBVCxFQUFnQm1uQixRQUFoQixFQUEwQjVDLFFBQTFCLEVBQW1DO0FBQzNEdmtCLGtCQUFNaVYsY0FBTjs7QUFFQSxnQkFBR3NhLGdCQUFILEVBQW9CO0FBQ2hCM08sNkJBQWEyTyxnQkFBYjtBQUNIO0FBQ0RoTCxxQkFBUzF0QixPQUFUO0FBQ0g7QUFSVSxLQUFmOztBQVdBLFdBQU8sNEJBQWF5dUIsVUFBYixFQUF5QixZQUF6QixFQUF1QzVzQixPQUF2QyxFQUFnRG1ILE1BQWhELEVBQXdEcW5CLFVBQXhELEVBQW9FRyxXQUFwRSxDQUFQO0FBQ0gsQ0F6QkQ7O2tCQTRCZWlJLFU7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkN2Q0EsVUFBQzUyQixPQUFELEVBQWE7QUFDeEIsV0FDSSxpREFDSSxxQ0FESixHQUVRLGlDQUZSLEdBRTBDQSxPQUYxQyxHQUVrRCxTQUZsRCxHQUdJLFFBSEosR0FJQSxRQUxKO0FBT0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tRQ1JEOzs7OztBQUdBOzs7Ozs7QUFFQSxJQUFNODJCLFVBQVUsU0FBVkEsT0FBVSxDQUFTbEssVUFBVCxFQUFxQkMsR0FBckIsRUFBeUI7QUFDckMsUUFBSWtLLFdBQVcsRUFBZjs7QUFFQSxRQUFNdkksYUFBYSxTQUFiQSxVQUFhLENBQVNDLFFBQVQsRUFBbUI1QyxRQUFuQixFQUE0QjtBQUMzQ2tMLG1CQUFXdEksUUFBWDtBQUNILEtBRkQ7QUFHQSxRQUFNRSxjQUFjLFNBQWRBLFdBQWMsR0FBVTtBQUMxQjtBQUNILEtBRkQ7QUFHQSxRQUFNeG5CLFNBQVMsRUFBZjs7QUFFQSxXQUFPLFNBQWMsNEJBQWF5bEIsVUFBYixFQUF5QixTQUF6QixFQUFvQyxJQUFwQyxFQUEwQ3psQixNQUExQyxFQUFrRHFuQixVQUFsRCxFQUE4REcsV0FBOUQsQ0FBZCxFQUEyRjtBQUM5RnpXLGNBQU0sY0FBVThlLE1BQVYsRUFBa0I7QUFDcEIsZ0JBQUdBLE1BQUgsRUFBVTtBQUNORCx5QkFBUzdlLElBQVQ7QUFDSCxhQUZELE1BRUs7QUFDRDZlLHlCQUFTM2UsSUFBVDtBQUNIO0FBQ0o7QUFQNkYsS0FBM0YsQ0FBUDtBQVNILENBcEJEOztrQkF1QmUwZSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDNUJBLFlBQU07QUFDakIsV0FBTywySkFBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztrUUNGRDs7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBZUEsbUJBQUE3bEIsQ0FBUSw0REFBUjs7QUFFQSxJQUFNZ21CLE9BQU8sU0FBUEEsSUFBTyxDQUFTckssVUFBVCxFQUFvQjtBQUM3QixRQUFJc0ssZUFBZSxFQUFuQjtBQUFBLFFBQXVCQyxXQUFXLEVBQWxDO0FBQUEsUUFBc0NDLFNBQVMsRUFBL0M7QUFBQSxRQUFtREMsb0JBQW5EO0FBQUEsUUFBZ0VDLGVBQWUsRUFBL0U7QUFBQSxRQUFtRnpLLE1BQU0sRUFBekY7QUFBQSxRQUE2RjBLLGdCQUFnQixFQUE3Rzs7QUFFQSxRQUFJQyxVQUFVLFNBQVZBLE9BQVUsQ0FBVXBmLElBQVYsRUFBZ0JxZixRQUFoQixFQUEwQjs7QUFFcEMsWUFBSUYsYUFBSixFQUFtQjtBQUNmclAseUJBQWFxUCxhQUFiO0FBQ0FBLDRCQUFnQixJQUFoQjtBQUNIOztBQUVELFlBQUluZixJQUFKLEVBQVU7QUFDTixnQkFBR3NYLDJCQUFpQjl4QixNQUFqQixHQUEwQixDQUE3QixFQUErQjtBQUMzQix1QkFBTyxLQUFQO0FBQ0g7QUFDRHk1Qix3QkFBWTlmLFFBQVosQ0FBcUIsY0FBckI7QUFDSCxTQUxELE1BS087QUFDSDhmLHdCQUFZeGYsV0FBWixDQUF3QixjQUF4Qjs7QUFFQSxnQkFBSTRmLFFBQUosRUFBYztBQUNWRixnQ0FBZ0JubEIsV0FBVyxZQUFXO0FBQ2xDLHdCQUFHc2QsMkJBQWlCOXhCLE1BQWpCLEdBQTBCLENBQTdCLEVBQStCO0FBQzNCLCtCQUFPLEtBQVA7QUFDSDtBQUNEeTVCLGdDQUFZOWYsUUFBWixDQUFxQixjQUFyQjtBQUNILGlCQUxlLEVBS2IsSUFMYSxDQUFoQjtBQU1IO0FBQ0o7QUFDSixLQXhCRDtBQXlCQSxRQUFJbWdCLGtCQUFrQixTQUFsQkEsZUFBa0IsR0FBWTtBQUM5QixZQUFNeEgsZUFBZXJELElBQUk5cUIsUUFBSixFQUFyQjs7QUFFQSxZQUFJbXVCLGlCQUFpQnRqQixxQkFBakIsSUFBK0JzakIsaUJBQWlCcGpCLHVCQUFoRCxJQUFnRW9qQixpQkFBaUJyakIseUJBQXJGLEVBQXFHO0FBQ2pHZ2dCLGdCQUFJM3JCLElBQUo7QUFDSCxTQUZELE1BRU0sSUFBR2d2QixpQkFBaUJuakIsd0JBQXBCLEVBQWtDO0FBQ3BDOGYsZ0JBQUl2dEIsS0FBSjtBQUNIO0FBQ0osS0FSRDtBQVNBLFFBQUk2QixPQUFPLFNBQVBBLElBQU8sQ0FBVTJnQixPQUFWLEVBQW1CNlYsUUFBbkIsRUFBNkI7O0FBRXBDLFlBQU03eEIsV0FBVyttQixJQUFJcnNCLFdBQUosRUFBakI7QUFDQSxZQUFNbzNCLGtCQUFrQi9LLElBQUlwc0IsV0FBSixFQUF4QjtBQUNBLFlBQUlXLFdBQVcsQ0FBZjs7QUFFQSxZQUFHdTJCLFFBQUgsRUFBWTtBQUNSdjJCLHVCQUFXa0UsS0FBSzZkLEdBQUwsQ0FBU3lVLGtCQUFrQjlWLE9BQTNCLEVBQW9DLENBQXBDLENBQVg7QUFDSCxTQUZELE1BRUs7QUFDRDFnQix1QkFBV2tFLEtBQUtxZixHQUFMLENBQVNpVCxrQkFBa0I5VixPQUEzQixFQUFvQ2hjLFFBQXBDLENBQVg7QUFDSDs7QUFFRCttQixZQUFJMXJCLElBQUosQ0FBU0MsUUFBVDtBQUNILEtBYkQ7QUFjQSxRQUFJUixTQUFTLFNBQVRBLE1BQVMsQ0FBU2kzQixJQUFULEVBQWM7QUFDdkIsWUFBTUMsZ0JBQWdCakwsSUFBSW5zQixTQUFKLEVBQXRCO0FBQ0EsWUFBSXEzQixZQUFZLENBQWhCO0FBQ0EsWUFBR0YsSUFBSCxFQUFRO0FBQ0pFLHdCQUFhenlCLEtBQUtxZixHQUFMLENBQVNtVCxnQkFBZ0IsQ0FBekIsRUFBNEIsR0FBNUIsQ0FBYjtBQUNILFNBRkQsTUFFSztBQUNEQyx3QkFBWXp5QixLQUFLNmQsR0FBTCxDQUFTMlUsZ0JBQWdCLENBQXpCLEVBQTRCLENBQTVCLENBQVo7QUFDSDtBQUNEakwsWUFBSWxzQixTQUFKLENBQWNvM0IsU0FBZDtBQUNILEtBVEQ7QUFVQSxRQUFJQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFTcEcsS0FBVCxFQUFnQnVFLEtBQWhCLEVBQXNCO0FBQzNDLFlBQUdtQixZQUFILEVBQWdCO0FBQ1pBLHlCQUFhbjVCLE9BQWI7QUFDQW01QiwyQkFBZSxJQUFmO0FBQ0g7QUFDREEsdUJBQWUsNEJBQWFELFdBQWIsRUFBMEJ4SyxHQUExQixFQUErQixFQUFDK0UsT0FBUUEsS0FBVCxFQUFnQnVFLE9BQVFBLEtBQXhCLEVBQS9CLENBQWY7QUFDSCxLQU5EOztBQVdBLFFBQU0zSCxhQUFhLFNBQWJBLFVBQWEsQ0FBU0MsUUFBVCxFQUFtQjVDLFFBQW5CLEVBQTRCO0FBQzNDd0wsc0JBQWM1SSxRQUFkO0FBQ0F5SSx1QkFBZXJMLFFBQWY7QUFDSCxLQUhEO0FBSUEsUUFBTThDLGNBQWMsU0FBZEEsV0FBYyxHQUFVO0FBQzFCO0FBQ0gsS0FGRDtBQUdBLFFBQU14bkIsU0FBUztBQUNYLDZCQUFzQix5QkFBU0csS0FBVCxFQUFnQm1uQixRQUFoQixFQUEwQjVDLFFBQTFCLEVBQW1DO0FBQ3JEdmtCLGtCQUFNaVYsY0FBTjs7QUFFQSxnQkFBRythLFlBQUgsRUFBZ0I7QUFDWkEsNkJBQWFuNUIsT0FBYjtBQUNBbTVCLCtCQUFlLElBQWY7QUFDQSx1QkFBTyxLQUFQO0FBQ0g7QUFDRCxnQkFBRyxDQUFDLHNCQUFJaHdCLE1BQU1zVSxNQUFWLEVBQWtCNUIsT0FBbEIsQ0FBMEIsbUJBQTFCLENBQUQsSUFDQyxDQUFDLHNCQUFJMVMsTUFBTXNVLE1BQVYsRUFBa0I1QixPQUFsQixDQUEwQixvQkFBMUIsQ0FETCxFQUNxRDtBQUNqRDBkO0FBQ0g7QUFDRCxnQkFBRyxDQUFDLHNCQUFJcHdCLE1BQU1zVSxNQUFWLEVBQWtCNUIsT0FBbEIsQ0FBMEIsb0JBQTFCLENBQUQsSUFBb0QsQ0FBQyxzQkFBSTFTLE1BQU1zVSxNQUFWLEVBQWtCNUIsT0FBbEIsQ0FBMEIscUJBQTFCLENBQXJELElBQXlHMFYsMkJBQWlCOXhCLE1BQWpCLEdBQTBCLENBQXRJLEVBQXdJO0FBQ3BJO0FBQ0FzSCxxQ0FBRXVlLElBQUYsQ0FBT2lNLDBCQUFQLEVBQXlCLFVBQVNDLFlBQVQsRUFBc0I7QUFDM0NBLGlDQUFheHhCLE9BQWI7QUFDSCxpQkFGRDtBQUdBdXhCLDJDQUFpQi9sQixNQUFqQixDQUF3QixDQUF4QixFQUEyQitsQiwyQkFBaUI5eEIsTUFBNUM7QUFDSDtBQUNKLFNBcEJVO0FBcUJYLGtDQUEyQiw4QkFBUzBKLEtBQVQsRUFBZ0JtbkIsUUFBaEIsRUFBMEI1QyxRQUExQixFQUFtQztBQUMxRHZrQixrQkFBTWlWLGNBQU47O0FBRUEsZ0JBQUlzUSxJQUFJOXFCLFFBQUosT0FBbUJnTCx3QkFBdkIsRUFBc0M7QUFDbEN5cUIsd0JBQVEsS0FBUixFQUFlLElBQWY7QUFDSCxhQUZELE1BRU87QUFDSEEsd0JBQVEsS0FBUjtBQUNIO0FBQ0osU0E3QlU7QUE4QlgsaUNBQTBCLDZCQUFTbHdCLEtBQVQsRUFBZ0JtbkIsUUFBaEIsRUFBMEI1QyxRQUExQixFQUFtQztBQUN6RHZrQixrQkFBTWlWLGNBQU47O0FBRUEsZ0JBQUlzUSxJQUFJOXFCLFFBQUosT0FBbUJnTCx3QkFBdkIsRUFBc0M7QUFDbEN5cUIsd0JBQVEsS0FBUixFQUFlLElBQWY7QUFDSCxhQUZELE1BRU87QUFDSEEsd0JBQVEsS0FBUjtBQUNIO0FBQ0osU0F0Q1U7QUF1Q1gsa0NBQTJCLDhCQUFTbHdCLEtBQVQsRUFBZ0JtbkIsUUFBaEIsRUFBMEI1QyxRQUExQixFQUFtQztBQUMxRHZrQixrQkFBTWlWLGNBQU47O0FBRUEsZ0JBQUdzUSxJQUFJOXFCLFFBQUosT0FBbUJnTCx3QkFBdEIsRUFBb0M7QUFDaEN5cUIsd0JBQVEsSUFBUjtBQUNIO0FBQ0osU0E3Q1U7O0FBK0NYLCtCQUF3QiwyQkFBU2x3QixLQUFULEVBQWdCbW5CLFFBQWhCLEVBQTBCNUMsUUFBMUIsRUFBbUM7QUFDdkQsb0JBQU92a0IsTUFBTTJ3QixPQUFiO0FBQ0kscUJBQUssRUFBTDtBQUFZO0FBQ1Izd0IsMEJBQU1pVixjQUFOO0FBQ0FtYjtBQUNBO0FBQ0oscUJBQUssRUFBTDtBQUFVO0FBQ05wd0IsMEJBQU1pVixjQUFOO0FBQ0FwYix5QkFBSyxDQUFMLEVBQVEsSUFBUjtBQUNBO0FBQ0oscUJBQUssRUFBTDtBQUFVO0FBQ05tRywwQkFBTWlWLGNBQU47QUFDQXBiLHlCQUFLLENBQUwsRUFBUSxLQUFSO0FBQ0E7QUFDSixxQkFBSyxFQUFMO0FBQVU7QUFDTm1HLDBCQUFNaVYsY0FBTjtBQUNBM2IsMkJBQU8sSUFBUDtBQUNBO0FBQ0oscUJBQUssRUFBTDtBQUFVO0FBQ04wRywwQkFBTWlWLGNBQU47QUFDQTNiLDJCQUFPLEtBQVA7QUFDQTtBQXBCUjtBQXNCSCxTQXRFVTtBQXVFWCxtQ0FBNEIsK0JBQVMwRyxLQUFULEVBQWdCbW5CLFFBQWhCLEVBQTBCNUMsUUFBMUIsRUFBbUM7QUFDM0R2a0Isa0JBQU1pVixjQUFOO0FBQ0F5YiwrQkFBbUIxd0IsTUFBTXNxQixLQUF6QixFQUFnQ3RxQixNQUFNNnVCLEtBQXRDO0FBQ0EsbUJBQU8sS0FBUDtBQUNIO0FBM0VVLEtBQWY7O0FBK0VBLFdBQU8sU0FBYyw0QkFBYXZKLFVBQWIsRUFBeUIsTUFBekIsRUFBaUNBLFdBQVd4WCxFQUE1QyxFQUFnRGpPLE1BQWhELEVBQXdEcW5CLFVBQXhELEVBQW9FRyxXQUFwRSxFQUFpRixJQUFqRixDQUFkLEVBQXNHO0FBQ3pHeFosa0NBQTBCLG9DQUFZO0FBQ2xDLG1CQUFPa2lCLFlBQVlsZ0IsSUFBWixDQUFpQiw4QkFBakIsRUFBaUQ0QyxHQUFqRCxFQUFQO0FBQ0gsU0FId0c7QUFJekcxRSxnQkFBUSxnQkFBVUgsY0FBVixFQUEwQjtBQUM5QjJYLGtCQUFNM1gsY0FBTjtBQUNBa2lCLHFCQUFTLG9CQUFPQyxZQUFZbGdCLElBQVosQ0FBaUIsU0FBakIsQ0FBUCxFQUFvQ2pDLGNBQXBDLENBQVQ7QUFDQWlpQix1QkFBVyxvQkFBU0UsWUFBWWxnQixJQUFaLENBQWlCLFNBQWpCLENBQVQsRUFBc0NqQyxjQUF0QyxDQUFYOztBQUVBMlgsZ0JBQUlwdUIsRUFBSixDQUFPeUQsa0JBQVAsRUFBZ0IsVUFBU3ZELElBQVQsRUFBZTtBQUMzQnU0Qiw2QkFBYS80QixPQUFiO0FBQ0gsYUFGRDs7QUFJQTB1QixnQkFBSXB1QixFQUFKLENBQU9vUCx1QkFBUCxFQUFxQixVQUFTbFAsSUFBVCxFQUFjO0FBQy9CLG9CQUFHQSxRQUFRQSxLQUFLc3hCLFFBQWhCLEVBQXlCO0FBQ3JCLHdCQUFHdHhCLEtBQUtzeEIsUUFBTCxLQUFrQmxqQix3QkFBckIsRUFBbUM7QUFDL0J5cUIsZ0NBQVEsS0FBUixFQUFlLElBQWY7QUFDSCxxQkFGRCxNQUVLO0FBQ0RBLGdDQUFRLEtBQVI7QUFDSDtBQUNKO0FBQ0osYUFSRDtBQVNIO0FBdEJ3RyxLQUF0RyxDQUFQO0FBd0JILENBdExEOztrQkEwTGVQLEk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDck5mOzs7O0FBSUEsSUFBTWhDLGVBQWUsU0FBZkEsWUFBZSxDQUFTN2YsRUFBVCxFQUFZO0FBQzdCLFdBQU8seUVBQXVFQSxFQUF2RSxHQUEwRSxJQUExRSxHQUNLLCtCQURMLEdBRUssMEJBRkwsR0FHUywyREFIVCxHQUdxRUEsRUFIckUsR0FHd0UsSUFIeEUsR0FJUyxRQUpULEdBS1Msc0JBTFQsR0FNUyxRQU5ULEdBT0ssUUFQTCxHQVFDLFFBUlI7QUFTSCxDQVZEO2tCQVdlNmYsWSIsImZpbGUiOiJvdmVucGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJvdmVucGxheWVyXCI6IDBcbiBcdH07XG5cblxuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7XCJvdmVucGxheWVyLnByb3ZpZGVyLkRhc2hQcm92aWRlcn5vdmVucGxheWVyLnByb3ZpZGVyLkhsc1Byb3ZpZGVyfm92ZW5wbGF5ZXIucHJvdmlkZXIuSHRtbDV+b3ZlbnBsYXllfjdhZmQ2OGNmXCI6XCJvdmVucGxheWVyLnByb3ZpZGVyLkRhc2hQcm92aWRlcn5vdmVucGxheWVyLnByb3ZpZGVyLkhsc1Byb3ZpZGVyfm92ZW5wbGF5ZXIucHJvdmlkZXIuSHRtbDV+b3ZlbnBsYXllfjdhZmQ2OGNmXCIsXCJvdmVucGxheWVyLnByb3ZpZGVyLkRhc2hQcm92aWRlclwiOlwib3ZlbnBsYXllci5wcm92aWRlci5EYXNoUHJvdmlkZXJcIixcIm92ZW5wbGF5ZXIucHJvdmlkZXIuSGxzUHJvdmlkZXJcIjpcIm92ZW5wbGF5ZXIucHJvdmlkZXIuSGxzUHJvdmlkZXJcIixcIm92ZW5wbGF5ZXIucHJvdmlkZXIuSHRtbDVcIjpcIm92ZW5wbGF5ZXIucHJvdmlkZXIuSHRtbDVcIixcIm92ZW5wbGF5ZXIucHJvdmlkZXIuV2ViUlRDUHJvdmlkZXJcIjpcIm92ZW5wbGF5ZXIucHJvdmlkZXIuV2ViUlRDUHJvdmlkZXJcIixcIm92ZW5wbGF5ZXIucHJvdmlkZXIuUnRtcFByb3ZpZGVyXCI6XCJvdmVucGxheWVyLnByb3ZpZGVyLlJ0bXBQcm92aWRlclwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcignTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKScpO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvb3ZlbnBsYXllci5qc1wiKTtcbiIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7Lm92cC13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO21heC1oZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW47em9vbToxICFpbXBvcnRhbnQ7d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQtY29sb3I6IzAwMDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y29sb3I6I2VlZTtmb250LWZhbWlseTonTm90byBTYW5zJyxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMXB4O2xpbmUtaGVpZ2h0OjEuMztmb250LXdlaWdodDpub3JtYWw7b3V0bGluZTowfS5vdnAtd3JhcHBlciBvYmplY3R7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ub3ZwLXdyYXBwZXI6YmVmb3JlLC5vdnAtd3JhcHBlcjphZnRlcnstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm92cC13cmFwcGVyICosLm92cC13cmFwcGVyICo6YmVmb3JlLC5vdnAtd3JhcHBlciAqOmFmdGVyey1tb3otYm94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ub3ZwLXdyYXBwZXIub3ZwLWZ1bGxzY3JlZW57aGVpZ2h0OjEwMCUgIWltcG9ydGFudH0ub3ZwLXdyYXBwZXIub3ZwLWF1dG9oaWRle2N1cnNvcjpub25lfS5vdnAtd3JhcHBlci5vdnAtYXV0b2hpZGUgLm92cC1ncmFkaWVudC10b3AsLm92cC13cmFwcGVyLm92cC1hdXRvaGlkZSAub3ZwLWdyYWRpZW50LWJvdHRvbSwub3ZwLXdyYXBwZXIub3ZwLWF1dG9oaWRlIC5vdnAtYm90dG9tLXBhbmVse29wYWNpdHk6MH0ub3ZwLXdyYXBwZXIub3ZwLWF1dG9oaWRlIC5vdnAtcHJvZ3Jlc3NiYXItY29udGFpbmVyLC5vdnAtd3JhcHBlci5vdnAtYXV0b2hpZGUgLm92cC1jb250cm9scyAub3ZwLWJ1dHRvbntjdXJzb3I6bm9uZX0ub3ZwLXdyYXBwZXIub3ZwLWF1dG9oaWRlIC5vdnAtY2FwdGlvbi10ZXh0LWNvbnRhaW5lcntib3R0b206MjVweH0ub3ZwLXdyYXBwZXIgLm92cC1yYXRpb3twYWRkaW5nLWJvdHRvbTo1Ni4yNSV9Lm92cC1wbGF5ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7d2lkdGg6MTAwJX0ub3ZwLXBsYXllciAub3ZwLW1lZGlhLWVsZW1lbnQtY29udGFpbmVye2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0ub3ZwLXBsYXllciAub3ZwLW1lZGlhLWVsZW1lbnQtY29udGFpbmVyPip7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ub3ZwLXBsYXllciAub3ZwLXVpe3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9Lm92cC1idXR0b257ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyOm5vbmU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtwYWRkaW5nOjA7Y29sb3I6aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7b3ZlcmZsb3c6aGlkZGVuO2ZvbnQtd2VpZ2h0OjEwMH0ub3ZwLWJ1dHRvbjpmb2N1cywub3ZwLWJ1dHRvbntvdXRsaW5lOjB9Lm92cC1ncmFkaWVudC10b3AsLm92cC1ncmFkaWVudC1ib3R0b217d2lkdGg6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kLWNvbG9yOiMxMjEyMWM7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5Oi4zOy1tb3otdHJhbnNpdGlvbjpvcGFjaXR5IC4yNXMgY3ViaWMtYmV6aWVyKDAsIDAsIC4yLCAxKTstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuMjVzIGN1YmljLWJlemllcigwLCAwLCAuMiwgMSk7dHJhbnNpdGlvbjpvcGFjaXR5IC4yNXMgY3ViaWMtYmV6aWVyKDAsIDAsIC4yLCAxKX0ub3ZwLWdyYWRpZW50LWJvdHRvbXtoZWlnaHQ6NTBweDtib3R0b206MDt6LWluZGV4OjIyfS5vdnAtc3Bpbm5lci1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpub25lfS5vdnAtc3Bpbm5lci1jb250YWluZXIgLm92cC1zcGlubmVye3dpZHRoOjcwcHg7aGVpZ2h0OjE4cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTttYXJnaW4tdG9wOi05cHg7bWFyZ2luLWxlZnQ6LTM1cHg7dGV4dC1hbGlnbjpjZW50ZXJ9Lm92cC1zcGlubmVyLWNvbnRhaW5lciAub3ZwLXNwaW5uZXI+ZGl2e3dpZHRoOjE4cHg7aGVpZ2h0OjE4cHg7YmFja2dyb3VuZC1jb2xvcjojNTBlM2MyO2JvcmRlci1yYWRpdXM6MTAwJTtkaXNwbGF5OmlubGluZS1ibG9jazstd2Via2l0LWFuaW1hdGlvbjpzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7YW5pbWF0aW9uOnNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aH0ub3ZwLXNwaW5uZXItY29udGFpbmVyIC5vdnAtc3Bpbm5lciAuYm91bmNlMXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMC4zMnM7YW5pbWF0aW9uLWRlbGF5Oi0wLjMyc30ub3ZwLXNwaW5uZXItY29udGFpbmVyIC5vdnAtc3Bpbm5lciAuYm91bmNlMnstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMC4xNnM7YW5pbWF0aW9uLWRlbGF5Oi0wLjE2c31ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXl7MCUsODAlLDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5ezAlLDgwJSwxMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX00MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX0ub3ZwLW1lc3NhZ2UtYm94e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5vdnAtbWVzc2FnZS1ib3ggLm92cC1tZXNzYWdlLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NjBweDt3aWR0aDoxMDAlO3BhZGRpbmc6MCAxMnB4O3RleHQtYWxpZ246Y2VudGVyfS5vdnAtbWVzc2FnZS1ib3ggLm92cC1tZXNzYWdlLWNvbnRhaW5lciAub3ZwLW1lc3NhZ2UtdGV4dHtmb250LXNpemU6MTQwJTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC41KTtjb2xvcjojZmZmO3BhZGRpbmc6LjFlbSAuM2VtO3dvcmQtd3JhcDpicmVhay13b3JkO2xpbmUtaGVpZ2h0OjEuNWVtfS5vdnAtYmlnYnV0dG9uLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ub3ZwLWJpZ2J1dHRvbi1jb250YWluZXIgLm92cC1iaWdidXR0b257cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt3aWR0aDo4MHB4O2hlaWdodDo4MHB4O21hcmdpbi10b3A6LTQwcHg7bWFyZ2luLWxlZnQ6LTQwcHg7dGV4dC1hbGlnbjpjZW50ZXJ9Lm92cC1iaWdidXR0b24tY29udGFpbmVyIC5vdnAtYmlnYnV0dG9uLm92cC1iaWdidXR0b24tcGxheXtiYWNrZ3JvdW5kOnVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vYXNzZXRzL2ltYWdlcy9pYy1wbGF5ZXItcGxheS1sYXJnZS5zdmdcIikpICsgXCIpO2JhY2tncm91bmQtc2l6ZToxMDAlfS5vdnAtYmlnYnV0dG9uLWNvbnRhaW5lciAub3ZwLWJpZ2J1dHRvbi5vdnAtYmlnYnV0dG9uLXBhdXNle2JhY2tncm91bmQ6dXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9hc3NldHMvaW1hZ2VzL2ljLXBsYXllci1zdG9wLWxhcmdlLnN2Z1wiKSkgKyBcIik7YmFja2dyb3VuZC1zaXplOjEwMCV9Lm92cC1iaWdidXR0b24tY29udGFpbmVyIC5vdnAtYmlnYnV0dG9uLm92cC1iaWdidXR0b24tcmVwbGF5e2JhY2tncm91bmQ6dXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9hc3NldHMvaW1hZ2VzL2ljLXBsYXllci1yZS1sYXJnZS5zdmdcIikpICsgXCIpO2JhY2tncm91bmQtc2l6ZToxMDAlfS5vdnAtc2V0dGluZy1wYW5lbHtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206NTVweDtyaWdodDoxMnB4O292ZXJmbG93LXk6YXV0bzt3aWR0aDoyNjBweDtmb250LXNpemU6MTIwJTt1c2VyLXNlbGVjdDpub25lO2JhY2tncm91bmQtY29sb3I6cmdiYSgyOCwyOCwyOCwwLjkpO3RleHQtc2hhZG93OjAgMCAycHggcmdiYSgwLDAsMCwwLjUpfS5vdnAtc2V0dGluZy1wYW5lbCAub3ZwLXNldHRpbmctdGl0bGUsLm92cC1zZXR0aW5nLXBhbmVsIC5vdnAtc2V0dGluZy1pdGVte3dpZHRoOjEwMCU7aGVpZ2h0OjM4cHg7bGluZS1oZWlnaHQ6MzhweDtjb2xvcjojZWVlO2N1cnNvcjpwb2ludGVyO291dGxpbmU6bm9uZX0ub3ZwLXNldHRpbmctcGFuZWwgLm92cC1zZXR0aW5nLXRpdGxlLWNvbnRhaW5lciAub3ZwLXNldHRpbmctdGl0bGUgLm92cC1zZXR0aW5nLXRpdGxlLXRpdGxle3BhZGRpbmctbGVmdDoxMnB4fS5vdnAtc2V0dGluZy1wYW5lbCAub3ZwLXNldHRpbmctdGl0bGUtY29udGFpbmVyIC5vdnAtc2V0dGluZy10aXRsZSAub3ZwLXNldHRpbmctdGl0bGUtcHJldmljb257cGFkZGluZzowIDAgMCAxMnB4O21hcmdpbi1yaWdodDotNnB4fS5vdnAtc2V0dGluZy1wYW5lbCAub3ZwLXNldHRpbmctaXRlbS1jb250YWluZXIgLm92cC1zZXR0aW5nLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuMSl9Lm92cC1zZXR0aW5nLXBhbmVsIC5vdnAtc2V0dGluZy1pdGVtLWNvbnRhaW5lciAub3ZwLXNldHRpbmctaXRlbSAub3ZwLXNldHRpbmctaXRlbS10aXRsZXtwYWRkaW5nLWxlZnQ6MTJweH0ub3ZwLXNldHRpbmctcGFuZWwgLm92cC1zZXR0aW5nLWl0ZW0tY29udGFpbmVyIC5vdnAtc2V0dGluZy1pdGVtIC5vdnAtc2V0dGluZy1pdGVtLW5leHRpY29ue2Zsb2F0OnJpZ2h0O3BhZGRpbmctcmlnaHQ6MTJweDttYXJnaW4tbGVmdDotNnB4fS5vdnAtc2V0dGluZy1wYW5lbCAub3ZwLXNldHRpbmctaXRlbS1jb250YWluZXIgLm92cC1zZXR0aW5nLWl0ZW0gc3Bhbi5vdnAtc2V0dGluZy1pdGVtLXZhbHVle2Zsb2F0OnJpZ2h0O3BhZGRpbmctcmlnaHQ6MTJweH0ub3ZwLXNldHRpbmctcGFuZWwgLm92cC1zZXR0aW5nLWl0ZW0tY29udGFpbmVyIC5vdnAtc2V0dGluZy1pdGVtLm92cC1zZXR0aW5nLWl0ZW0tdmFsdWUgLm92cC1zZXR0aW5nLWl0ZW0tdGl0bGV7bWFyZ2luLWxlZnQ6LTZweH0ub3ZwLXNldHRpbmctcGFuZWwgLm92cC1zZXR0aW5nLWl0ZW0tY29udGFpbmVyIC5vdnAtc2V0dGluZy1pdGVtLm92cC1zZXR0aW5nLWl0ZW0tdmFsdWUgLm92cC1zZXR0aW5nLWl0ZW0tY2hlY2tlZHtwYWRkaW5nLWxlZnQ6MTJweDt2aXNpYmlsaXR5OmhpZGRlbn0ub3ZwLXNldHRpbmctcGFuZWwgLm92cC1zZXR0aW5nLWl0ZW0tY29udGFpbmVyIC5vdnAtc2V0dGluZy1pdGVtLm92cC1zZXR0aW5nLWl0ZW0tdmFsdWUgLm92cC1zZXR0aW5nLWl0ZW0tY2hlY2tlZC5vdnAtc2hvd3t2aXNpYmlsaXR5OnZpc2libGV9Lm92cC1jb250cm9scy1jb250YWluZXIgLm92cC1ib3R0b20tcGFuZWx7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowcHg7cmlnaHQ6MHB4O2JvdHRvbTowcHg7aGVpZ2h0OjUwcHg7ei1pbmRleDo2MDstbW96LXRyYW5zaXRpb246b3BhY2l0eSAuMjVzIGN1YmljLWJlemllcigwLCAwLCAuMiwgMSk7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjI1cyBjdWJpYy1iZXppZXIoMCwgMCwgLjIsIDEpO3RyYW5zaXRpb246b3BhY2l0eSAuMjVzIGN1YmljLWJlemllcigwLCAwLCAuMiwgMSl9Lm92cC1jb250cm9scy1jb250YWluZXIgLm92cC1ib3R0b20tcGFuZWwgLm92cC1wcm9ncmVzc2Jhci1jb250YWluZXJ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2JvdHRvbTo1MHB4O2hlaWdodDo0cHg7Y3Vyc29yOnBvaW50ZXJ9Lm92cC1jb250cm9scy1jb250YWluZXIgLm92cC1ib3R0b20tcGFuZWwgLm92cC1wcm9ncmVzc2Jhci1jb250YWluZXIgLm92cC1wcm9ncmVzc2Jhci1wYWRkaW5ne3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjE2cHg7Ym90dG9tOjA7ei1pbmRleDoyOH0ub3ZwLWNvbnRyb2xzLWNvbnRhaW5lciAub3ZwLWJvdHRvbS1wYW5lbCAub3ZwLWNvbnRyb2xze3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO3dpZHRoOjEwMCU7aGVpZ2h0OjUwcHg7dGV4dC1hbGlnbjpsZWZ0fS5vdnAtY29udHJvbHMtY29udGFpbmVyIC5vdnAtYm90dG9tLXBhbmVsIC5vdnAtY29udHJvbHMgLm92cC1idXR0b257bWluLXdpZHRoOjMwcHg7aGVpZ2h0OjMwcHg7Y3Vyc29yOnBvaW50ZXJ9Lm92cC1jb250cm9scy1jb250YWluZXIgLm92cC1ib3R0b20tcGFuZWwgLm92cC1jb250cm9scyAub3ZwLWxlZnQtY29udHJvbHN7ZmxvYXQ6bGVmdDtoZWlnaHQ6MTAwJX0ub3ZwLWNvbnRyb2xzLWNvbnRhaW5lciAub3ZwLWJvdHRvbS1wYW5lbCAub3ZwLWNvbnRyb2xzIC5vdnAtcmlnaHQtY29udHJvbHN7ZmxvYXQ6cmlnaHQ7aGVpZ2h0OjEwMCV9Lm92cC1jb250cm9scy1jb250YWluZXIgLm92cC1ib3R0b20tcGFuZWwgLm92cC1jb250cm9scyAub3ZwLXJpZ2h0LWNvbnRyb2xzIC5vdnAtc2V0dGluZy1idXR0b257cG9zaXRpb246cmVsYXRpdmU7dG9wOjEwcHg7bWFyZ2luLXJpZ2h0OjEycHh9Lm92cC1jb250cm9scy1jb250YWluZXIgLm92cC1ib3R0b20tcGFuZWwgLm92cC1jb250cm9scyAub3ZwLXJpZ2h0LWNvbnRyb2xzIC5vdnAtc2V0dGluZy1idXR0b24+aXtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQtc2l6ZToxMDAlO2JhY2tncm91bmQ6dXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9hc3NldHMvaW1hZ2VzL2ljLXBsYXllci1zZXR0aW5nLnN2Z1wiKSkgKyBcIil9Lm92cC1wcm9ncmVzc2Jhcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjMxO291dGxpbmU6bm9uZX0ub3ZwLXByb2dyZXNzYmFyIC5vdnAtcGxheS1iYWNrZ3JvdW5kLWNvbG9ye2JhY2tncm91bmQtY29sb3I6IzUwZTNjMn0ub3ZwLXByb2dyZXNzYmFyIC5vdnAtcHJvZ3Jlc3MtbGlzdHtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMC4yKTt6LWluZGV4OjM5fS5vdnAtcHJvZ3Jlc3NiYXIgLm92cC1wcm9ncmVzcy1saXN0IC5vdnAtbG9hZC1wcm9ncmVzcywub3ZwLXByb2dyZXNzYmFyIC5vdnAtcHJvZ3Jlc3MtbGlzdCAub3ZwLXBsYXktcHJvZ3Jlc3MsLm92cC1wcm9ncmVzc2JhciAub3ZwLXByb2dyZXNzLWxpc3QgLm92cC1ob3Zlci1wcm9ncmVzc3twb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7Ym90dG9tOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTstbW96LXRyYW5zZm9ybS1vcmlnaW46MCAwOy1tcy10cmFuc2Zvcm0tb3JpZ2luOjAgMDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MCAwO3RyYW5zZm9ybS1vcmlnaW46MCAwfS5vdnAtcHJvZ3Jlc3NiYXIgLm92cC1wcm9ncmVzcy1saXN0IC5vdnAtcGxheS1wcm9ncmVzc3t3aWR0aDowO3otaW5kZXg6MzQ7LXdlYmtpdC10cmFuc2l0aW9uOndpZHRoIC4xcyBlYXNlO3RyYW5zaXRpb246d2lkdGggLjFzIGVhc2V9Lm92cC1wcm9ncmVzc2JhciAub3ZwLXByb2dyZXNzLWxpc3QgLm92cC1sb2FkLXByb2dyZXNze3dpZHRoOjA7ei1pbmRleDozMztiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC41KTstd2Via2l0LXRyYW5zaXRpb246d2lkdGggLjVzIGVhc2U7dHJhbnNpdGlvbjp3aWR0aCAuNXMgZWFzZX0ub3ZwLXByb2dyZXNzYmFyIC5vdnAtcHJvZ3Jlc3MtbGlzdCAub3ZwLWhvdmVyLXByb2dyZXNze2xlZnQ6MDt3aWR0aDowO3otaW5kZXg6MzU7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuNil9Lm92cC1wcm9ncmVzc2JhciAub3ZwLXByb2dyZXNzYmFyLWtub2ItY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDotNXB4O2xlZnQ6MHB4O3otaW5kZXg6NDM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIC4xcyBjdWJpYy1iZXppZXIoLjQsIDAsIDEsIDEpOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMXMgY3ViaWMtYmV6aWVyKC40LCAwLCAxLCAxKTstbXMtdHJhbnNpdGlvbjotbXMtdHJhbnNmb3JtIC4xcyBjdWJpYy1iZXppZXIoLjQsIDAsIDEsIDEpO3RyYW5zaXRpb246dHJhbnNmb3JtIC4xcyBjdWJpYy1iZXppZXIoLjQsIDAsIDEsIDEpOy1tb3otdHJhbnNmb3JtOnNjYWxlKDApOy1tcy10cmFuc2Zvcm06c2NhbGUoMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfS5vdnAtcHJvZ3Jlc3NiYXIgLm92cC1wcm9ncmVzc2Jhci1rbm9iLWNvbnRhaW5lciAub3ZwLXByb2dyZXNzYmFyLWtub2J7d2lkdGg6MTRweDtoZWlnaHQ6MTRweDtib3JkZXItcmFkaXVzOjdweDstd2Via2l0LXRyYW5zaXRpb246d2lkdGggLjFzIGVhc2U7dHJhbnNpdGlvbjp3aWR0aCAuMXMgZWFzZX0ub3ZwLXByb2dyZXNzYmFyIC5vdnAtcHJvZ3Jlc3NiYXItdGltZXtkaXNwbGF5Om5vbmU7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjE1cHg7bGVmdDphdXRvO3dpZHRoOmF1dG87YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI4LDI4LDI4LDAuOSk7Ym9yZGVyLXJhZGl1czoycHg7cGFkZGluZzo1cHggOXB4O2ZvbnQtc2l6ZToxMTglO2xpbmUtaGVpZ2h0OjE1cHg7dXNlci1zZWxlY3Q6bm9uZX0ub3ZwLXByb2dyZXNzYmFyLWhvdmVyIC5vdnAtcHJvZ3Jlc3NiYXIta25vYi1jb250YWluZXJ7LW1vei10cmFuc2Zvcm06bm9uZTstbXMtdHJhbnNmb3JtOm5vbmU7LXdlYmtpdC10cmFuc2Zvcm06bm9uZTt0cmFuc2Zvcm06bm9uZTstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gLjFzIGN1YmljLWJlemllcigwLCAwLCAuMiwgMSk7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4xcyBjdWJpYy1iZXppZXIoMCwgMCwgLjIsIDEpOy1tcy10cmFuc2l0aW9uOi1tcy10cmFuc2Zvcm0gLjFzIGN1YmljLWJlemllcigwLCAwLCAuMiwgMSk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjFzIGN1YmljLWJlemllcigwLCAwLCAuMiwgMSl9Lm92cC1wcm9ncmVzc2Jhci1ob3ZlciAub3ZwLXByb2dyZXNzYmFyLXRpbWV7ZGlzcGxheTppbmxpbmUtYmxvY2t9Lm92cC1vbi1lcnJvciAub3ZwLXByb2dyZXNzYmFyLXRpbWV7ZGlzcGxheTpub25lfS5vdnAtcGxheS1idXR0b257cG9zaXRpb246cmVsYXRpdmU7dG9wOjEwcHg7bWFyZ2luLWxlZnQ6MTVweH0ub3ZwLXBsYXktYnV0dG9uPml7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLXNpemU6MTAwJX0ub3ZwLXBsYXktYnV0dG9uIC5vdnAtcGxheS1idXR0b24tcGxheWljb257YmFja2dyb3VuZDp1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2Fzc2V0cy9pbWFnZXMvaWMtcGxheWVyLXBsYXkuc3ZnXCIpKSArIFwiKX0ub3ZwLXBsYXktYnV0dG9uIC5vdnAtcGxheS1idXR0b24tcGF1c2VpY29ue2JhY2tncm91bmQ6dXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9hc3NldHMvaW1hZ2VzL2ljLXBsYXllci1zdG9wLnN2Z1wiKSkgKyBcIil9Lm92cC12b2x1bWUtY29udHJvbGxlcntkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MTBweDttYXJnaW4tbGVmdDoxMnB4O2hlaWdodDozMHB4fS5vdnAtdm9sdW1lLWNvbnRyb2xsZXIgLm92cC12b2x1bWUtYnV0dG9uPml7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLXNpemU6MTAwJX0ub3ZwLXZvbHVtZS1jb250cm9sbGVyIC5vdnAtdm9sdW1lLWJ1dHRvbiAub3ZwLXZvbHVtZS1idXR0b24tYmlnaWNvbntiYWNrZ3JvdW5kOnVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vYXNzZXRzL2ltYWdlcy9pYy1wbGF5ZXItdm9sdW1lLnN2Z1wiKSkgKyBcIil9Lm92cC12b2x1bWUtY29udHJvbGxlciAub3ZwLXZvbHVtZS1idXR0b24gLm92cC12b2x1bWUtYnV0dG9uLXNtYWxsaWNvbntiYWNrZ3JvdW5kOnVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vYXNzZXRzL2ltYWdlcy9pYy1wbGF5ZXItdm9sdW1lLTIuc3ZnXCIpKSArIFwiKX0ub3ZwLXZvbHVtZS1jb250cm9sbGVyIC5vdnAtdm9sdW1lLWJ1dHRvbiAub3ZwLXZvbHVtZS1idXR0b24tbXV0ZWljb257YmFja2dyb3VuZDp1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2Fzc2V0cy9pbWFnZXMvaWMtcGxheWVyLXZvbHVtZS1tdXRlLnN2Z1wiKSkgKyBcIil9Lm92cC12b2x1bWUtY29udHJvbGxlciAub3ZwLXZvbHVtZS1zbGlkZXItY29udGFpbmVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjBweDtoZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW47Y3Vyc29yOnBvaW50ZXI7dXNlci1zZWxlY3Q6bm9uZTtvdXRsaW5lOm5vbmU7LW1vei10cmFuc2l0aW9uOm1hcmdpbiAuMnMgY3ViaWMtYmV6aWVyKC40LCAwLCAxLCAxKSx3aWR0aCAuMnMgY3ViaWMtYmV6aWVyKC40LCAwLCAxLCAxKTstd2Via2l0LXRyYW5zaXRpb246bWFyZ2luIC4ycyBjdWJpYy1iZXppZXIoLjQsIDAsIDEsIDEpLHdpZHRoIC4ycyBjdWJpYy1iZXppZXIoLjQsIDAsIDEsIDEpO3RyYW5zaXRpb246bWFyZ2luIC4ycyBjdWJpYy1iZXppZXIoLjQsIDAsIDEsIDEpLHdpZHRoIC4ycyBjdWJpYy1iZXppZXIoLjQsIDAsIDEsIDEpfS5vdnAtdm9sdW1lLWNvbnRyb2xsZXIgLm92cC12b2x1bWUtc2xpZGVyLWNvbnRhaW5lci5hY3RpdmV7d2lkdGg6NzBweDttYXJnaW4tbGVmdDo4cHg7bWFyZ2luLXJpZ2h0OjA7LW1vei10cmFuc2l0aW9uOm1hcmdpbiAuMnMgY3ViaWMtYmV6aWVyKDAsIDAsIC4yLCAxKSx3aWR0aCAuMnMgY3ViaWMtYmV6aWVyKDAsIDAsIC4yLCAxKTstd2Via2l0LXRyYW5zaXRpb246bWFyZ2luIC4ycyBjdWJpYy1iZXppZXIoMCwgMCwgLjIsIDEpLHdpZHRoIC4ycyBjdWJpYy1iZXppZXIoMCwgMCwgLjIsIDEpO3RyYW5zaXRpb246bWFyZ2luIC4ycyBjdWJpYy1iZXppZXIoMCwgMCwgLjIsIDEpLHdpZHRoIC4ycyBjdWJpYy1iZXppZXIoMCwgMCwgLjIsIDEpfS5vdnAtdm9sdW1lLWNvbnRyb2xsZXIgLm92cC12b2x1bWUtc2xpZGVyLWNvbnRhaW5lciAub3ZwLXZvbHVtZS1zaWxkZXJ7aGVpZ2h0OjEwMCU7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVufS5vdnAtdm9sdW1lLWNvbnRyb2xsZXIgLm92cC12b2x1bWUtc2xpZGVyLWNvbnRhaW5lciAub3ZwLXZvbHVtZS1zaWxkZXIgLm92cC12b2x1bWUtc2xpZGVyLWJnLC5vdnAtdm9sdW1lLWNvbnRyb2xsZXIgLm92cC12b2x1bWUtc2xpZGVyLWNvbnRhaW5lciAub3ZwLXZvbHVtZS1zaWxkZXIgLm92cC12b2x1bWUtc2xpZGVyLXZhbHVle3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2s7bGVmdDowO3RvcDo1MCU7aGVpZ2h0OjRweDttYXJnaW4tdG9wOi0ycHg7Ym9yZGVyLXJhZGl1czoxMHB4fS5vdnAtdm9sdW1lLWNvbnRyb2xsZXIgLm92cC12b2x1bWUtc2xpZGVyLWNvbnRhaW5lciAub3ZwLXZvbHVtZS1zaWxkZXIgLm92cC12b2x1bWUtc2xpZGVyLWJne3dpZHRoOjEwMCU7YmFja2dyb3VuZDojZmZmfS5vdnAtdm9sdW1lLWNvbnRyb2xsZXIgLm92cC12b2x1bWUtc2xpZGVyLWNvbnRhaW5lciAub3ZwLXZvbHVtZS1zaWxkZXIgLm92cC12b2x1bWUtc2xpZGVyLXZhbHVle3dpZHRoOjEwMCU7YmFja2dyb3VuZDojNTBlM2MyfS5vdnAtdm9sdW1lLWNvbnRyb2xsZXIgLm92cC12b2x1bWUtc2xpZGVyLWNvbnRhaW5lciAub3ZwLXZvbHVtZS1zaWxkZXIgLm92cC12b2x1bWUtc2xpZGVyLWhhbmRsZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6MzBweDt3aWR0aDoxMnB4O2hlaWdodDoxMnB4O2JvcmRlci1yYWRpdXM6NnB4O21hcmdpbi10b3A6LTZweDtiYWNrZ3JvdW5kOiNmZmZ9Lm92cC12b2x1bWUtY29udHJvbGxlciAub3ZwLXZvbHVtZS1zbGlkZXItY29udGFpbmVyIC5vdnAtdm9sdW1lLXNpbGRlciAub3ZwLXZvbHVtZS1zbGlkZXItaGFuZGxlOmJlZm9yZSwub3ZwLXZvbHVtZS1jb250cm9sbGVyIC5vdnAtdm9sdW1lLXNsaWRlci1jb250YWluZXIgLm92cC12b2x1bWUtc2lsZGVyIC5vdnAtdm9sdW1lLXNsaWRlci1oYW5kbGU6YWZ0ZXJ7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5Om5vbmU7dG9wOjUwJTtoZWlnaHQ6NHB4O21hcmdpbi10b3A6LTJweDt3aWR0aDo4MHB4O3otaW5kZXg6LTF9Lm92cC12b2x1bWUtY29udHJvbGxlciAub3ZwLXZvbHVtZS1zbGlkZXItY29udGFpbmVyIC5vdnAtdm9sdW1lLXNpbGRlciAub3ZwLXZvbHVtZS1zbGlkZXItaGFuZGxlOmJlZm9yZXtsZWZ0Oi01OHB4O2JhY2tncm91bmQ6IzUwZTNjMn0ub3ZwLXZvbHVtZS1jb250cm9sbGVyIC5vdnAtdm9sdW1lLXNsaWRlci1jb250YWluZXIgLm92cC12b2x1bWUtc2lsZGVyIC5vdnAtdm9sdW1lLXNsaWRlci1oYW5kbGU6YWZ0ZXJ7bGVmdDo2cHg7YmFja2dyb3VuZDojZmZmfS5vdnAtdGltZS1kaXNwbGF5e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDoxMHB4O21hcmdpbi1sZWZ0OjEycHg7aGVpZ2h0OjMwcHg7d2hpdGUtc3BhY2U6bm93cmFwO2xpbmUtaGVpZ2h0OjMwcHg7dmVydGljYWwtYWxpZ246dG9wO2ZvbnQtc2l6ZToxNHB4O3VzZXItc2VsZWN0Om5vbmV9Lm92cC10aW1lLWRpc3BsYXkgLm92cC10aW1lLWN1cnJlbnQsLm92cC10aW1lLWRpc3BsYXkgLm92cC10aW1lLXNlcGFyYXRvciwub3ZwLXRpbWUtZGlzcGxheSAub3ZwLXRpbWUtZHVyYXRpb257Y29sb3I6I2ZmZn0ub3ZwLXRpbWUtZGlzcGxheSAub3ZwLWxpdmUtYmFkZ2V7b3BhY2l0eToxO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOmF1dG87Zm9udC1zaXplOjE0cHh9Lm92cC10aW1lLWRpc3BsYXkgLm92cC1saXZlLWJhZGdlOmJlZm9yZXtiYWNrZ3JvdW5kOiNmZjAwMDA7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7dG9wOi0ycHg7d2lkdGg6NnB4O2hlaWdodDo2cHg7bWFyZ2luLXJpZ2h0OjVweDtjb250ZW50OicnO2JvcmRlci1yYWRpdXM6NnB4fS5vdnAtdGltZS1kaXNwbGF5IC5vdnAtbGl2ZS1iYWRnZSAub3ZwLWxpdmUtYmFkZ2UtbG93bGF0ZW5jeXtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tcmlnaHQ6NXB4fS5vdnAtY29udGV4dC1wYW5lbHstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzpoaWRkZW47d2lkdGg6MjAwcHg7cGFkZGluZzo2cHggMDtiYWNrZ3JvdW5kOnJnYmEoMjgsMjgsMjgsMC45KTt0ZXh0LXNoYWRvdzowIDAgMnB4IHJnYmEoMCwwLDAsMC41KTt6LWluZGV4OjIzMDA7Zm9udC1mYW1pbHk6Um9ib3RvLEFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMXB4O2ZvbnQtd2VpZ2h0OjEwMDt1c2VyLXNlbGVjdDpub25lfS5vdnAtY29udGV4dC1wYW5lbDpiZWZvcmUsLm92cC1jb250ZXh0LXBhbmVsOmFmdGVyey1tb3otYm94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ub3ZwLWNvbnRleHQtcGFuZWwgKiwub3ZwLWNvbnRleHQtcGFuZWwgKjpiZWZvcmUsLm92cC1jb250ZXh0LXBhbmVsICo6YWZ0ZXJ7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5vdnAtY29udGV4dC1wYW5lbCAub3ZwLWNvbnRleHQtaXRlbXt3aWR0aDoxMDAlO2hlaWdodDozOHB4O3BhZGRpbmctbGVmdDoxMnB4O2xpbmUtaGVpZ2h0OjM4cHg7Y29sb3I6I2VlZTtjdXJzb3I6cG9pbnRlcjtvdXRsaW5lOm5vbmU7Zm9udC1zaXplOjEyMCV9Lm92cC1jb250ZXh0LXBhbmVsIC5vdnAtY29udGV4dC1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwwLjEpfS5vdnAtZnVsbHNjcmVlbi1idXR0b257cG9zaXRpb246cmVsYXRpdmU7dG9wOjEwcHg7bWFyZ2luLXJpZ2h0OjE1cHh9Lm92cC1mdWxsc2NyZWVuLWJ1dHRvbj5pe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZC1zaXplOjEwMCV9Lm92cC1mdWxsc2NyZWVuLWJ1dHRvbiAub3ZwLWZ1bGxzY3JlZW4tYnV0dG9uLWV4cGFuZGljb257YmFja2dyb3VuZDp1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2Fzc2V0cy9pbWFnZXMvaWMtcGxheWVyLWZ1bGxzY3JlZW4tZXhwYW5kLnN2Z1wiKSkgKyBcIil9Lm92cC1mdWxsc2NyZWVuLWJ1dHRvbiAub3ZwLWZ1bGxzY3JlZW4tYnV0dG9uLWNvbXByZXNzaWNvbntiYWNrZ3JvdW5kOnVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vYXNzZXRzL2ltYWdlcy9pYy1wbGF5ZXItZnVsbHNjcmVlbi1jb21wcmVzcy5zdmdcIikpICsgXCIpfUBrZXlmcmFtZXMgZmFkZXtmcm9te29wYWNpdHk6LjN9NTUle29wYWNpdHk6MX03NSV7b3BhY2l0eToxfXRve29wYWNpdHk6LjN9fUAtd2Via2l0LWtleWZyYW1lcyBzaGFrZXtmcm9tLHRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDAsIDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKX0xMCUsMzAlLDUwJSw3MCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApfTIwJSw0MCUsNjAlLDgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwgMCwgMCl9fUBrZXlmcmFtZXMgc2hha2V7ZnJvbSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgMCwgMCl9MTAlLDMwJSw1MCUsNzAlLDkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKX0yMCUsNDAlLDYwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApfX0ub3ZwLXBsYXllciAuc2hha2V7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpzaGFrZTthbmltYXRpb24tbmFtZTpzaGFrZX1ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW57ZnJvbSwyMCUsNDAlLDYwJSw4MCUsdG97LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LCAuNjEsIC4zNTUsIDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsIC42MSwgLjM1NSwgMSl9MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjUsIC41LCAuNSk7dHJhbnNmb3JtOnNjYWxlM2QoLjUsIC41LCAuNSl9MjAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7dHJhbnNmb3JtOnNjYWxlM2QoMS4xLCAxLjEsIDEuMSl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjksIC45LCAuOSk7dHJhbnNmb3JtOnNjYWxlM2QoLjksIC45LCAuOSl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMDMsIDEuMDMsIDEuMDMpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMDMsIDEuMDMsIDEuMDMpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45NywgLjk3LCAuOTcpO3RyYW5zZm9ybTpzY2FsZTNkKC45NywgLjk3LCAuOTcpfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsIDEsIDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsIDEsIDEpfX1Aa2V5ZnJhbWVzIGJvdW5jZUlue2Zyb20sMjAlLDQwJSw2MCUsODAlLHRvey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwgLjYxLCAuMzU1LCAxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LCAuNjEsIC4zNTUsIDEpfTAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4zLCAuMywgLjMpO3RyYW5zZm9ybTpzY2FsZTNkKC4zLCAuMywgLjMpfTIwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMSwgMS4xLCAxLjEpfTQwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45LCAuOSwgLjkpO3RyYW5zZm9ybTpzY2FsZTNkKC45LCAuOSwgLjkpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjAzLCAxLjAzLCAxLjAzKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjAzLCAxLjAzLCAxLjAzKX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOTcsIC45NywgLjk3KTt0cmFuc2Zvcm06c2NhbGUzZCguOTcsIC45NywgLjk3KX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLCAxLCAxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLCAxLCAxKX19Lm92cC1wbGF5ZXIgLmJvdW5jZUluey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi43NXM7YW5pbWF0aW9uLWR1cmF0aW9uOi43NXM7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpib3VuY2VJbjthbmltYXRpb24tbmFtZTpib3VuY2VJbn1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QGtleWZyYW1lcyBmYWRlSW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX0ub3ZwLXBsYXllciAuZmFkZUluey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZUluO2FuaW1hdGlvbi1uYW1lOmZhZGVJbn0ub3ZwLXBsYXllciAuYW5pbWF0ZWR7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7YW5pbWF0aW9uLWR1cmF0aW9uOjFzOy13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aH1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb24pey5vdnAtcGxheWVyIC5hbmltYXRlZHstd2Via2l0LWFuaW1hdGlvbjp1bnNldCAhaW1wb3J0YW50O2FuaW1hdGlvbjp1bnNldCAhaW1wb3J0YW50Oy13ZWJraXQtdHJhbnNpdGlvbjpub25lICFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpub25lICFpbXBvcnRhbnR9fS5vdnAtY2FwdGlvbi12aWV3ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9Lm92cC1jYXB0aW9uLXZpZXdlciAub3ZwLWNhcHRpb24tdGV4dC1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjYwcHg7d2lkdGg6MTAwJTtwYWRkaW5nOjAgMTJweDt0ZXh0LWFsaWduOmNlbnRlcjstbW96LXRyYW5zaXRpb246Ym90dG9tIC4yNXMgY3ViaWMtYmV6aWVyKDAsIDAsIC4yLCAxKTstd2Via2l0LXRyYW5zaXRpb246Ym90dG9tIC4yNXMgY3ViaWMtYmV6aWVyKDAsIDAsIC4yLCAxKTt0cmFuc2l0aW9uOmJvdHRvbSAuMjVzIGN1YmljLWJlemllcigwLCAwLCAuMiwgMSl9Lm92cC1jYXB0aW9uLXZpZXdlciAub3ZwLWNhcHRpb24tdGV4dC1jb250YWluZXIgLm92cC1jYXB0aW9uLXRleHR7ZGlzcGxheTpub25lO2ZvbnQtc2l6ZToyMjAlO2JhY2tncm91bmQtY29sb3I6cmdiYSg4LDgsOCwwLjc1KTtib3JkZXItcmFkaXVzOjNweDtjb2xvcjojZmZmO3BhZGRpbmc6LjFlbSAuM2VtO3dvcmQtd3JhcDpicmVhay13b3JkO2xpbmUtaGVpZ2h0OjEuNWVtO3VzZXItc2VsZWN0Om5vbmV9Lm92cC1jYXB0aW9uLWJ1dHRvbnt3aWR0aDozNnB4fS5vdnAtY2FwdGlvbi1idXR0b24+aXtmb250LXNpemU6MThweDstbW96LXRyYW5zaXRpb246Y29sb3IgLjI1cyBjdWJpYy1iZXppZXIoMCwgMCwgLjIsIDEpOy13ZWJraXQtdHJhbnNpdGlvbjpjb2xvciAuMjVzIGN1YmljLWJlemllcigwLCAwLCAuMiwgMSk7dHJhbnNpdGlvbjpjb2xvciAuMjVzIGN1YmljLWJlemllcigwLCAwLCAuMiwgMSl9Lm92cC1jYXB0aW9uLWFjdGl2ZSAub3ZwLWNhcHRpb24tYnV0dG9uPml7Y29sb3I6I0YzNjQ0Nn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwpIHtcbiAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAgICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgICB9XG4gICAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAgIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gICAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInXG4gICAgfVxuXG4gICAgcmV0dXJuIHVybFxufVxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIi8qIGdsb2JhbHMgX193ZWJwYWNrX2FtZF9vcHRpb25zX18gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcclxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXpNQ0lnYUdWcFoyaDBQU0l6TUNJZ2RtbGxkMEp2ZUQwaU1DQXdJRE13SURNd0lqNEtJQ0FnSUR4bklHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnYzNSeWIydGxQU0lqUmtaR0lpQnpkSEp2YTJVdGJHbHVaV05oY0QwaWNtOTFibVFpSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlJSE4wY205clpTMTNhV1IwYUQwaU1pSStDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVGNnTVRkb05uWTJUVEl6SURFemFDMDJWamROTVRjZ01UTnNOeTAzVFRZZ01qUnNOeTAzSWk4K0NpQWdJQ0E4TDJjK0Nqd3ZjM1puUGdvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJek1DSWdhR1ZwWjJoMFBTSXpNQ0lnZG1sbGQwSnZlRDBpTUNBd0lETXdJRE13SWo0S0lDQWdJRHhuSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdjM1J5YjJ0bFBTSWpSa1pHSWlCemRISnZhMlV0YkdsdVpXTmhjRDBpY205MWJtUWlJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaUlITjBjbTlyWlMxM2FXUjBhRDBpTWlJK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRURTRJRFpvTm5ZMlRURXlJREkwU0RaMkxUWk5NalFnTm13dE55QTNUVFlnTWpSc055MDNJaTgrQ2lBZ0lDQThMMmMrQ2p3dmMzWm5QZ289XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0l4TURBaUlHaGxhV2RvZEQwaU1UQXdJaUIyYVdWM1FtOTRQU0l3SURBZ01UQXdJREV3TUNJK0NpQWdJQ0E4WnlCbWFXeHNQU0p1YjI1bElpQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlQZ29nSUNBZ0lDQWdJRHhqYVhKamJHVWdZM2c5SWpVd0lpQmplVDBpTlRBaUlISTlJalE1SWlCemRISnZhMlU5SWlOR1JrWWlJSE4wY205clpTMTNhV1IwYUQwaU1pSXZQZ29nSUNBZ0lDQWdJRHh3WVhSb0lHWnBiR3c5SWlOR1JrWWlJR1E5SWswM05TQTFNRXd6TlNBM05WWXlOWG9pTHo0S0lDQWdJRHd2Wno0S1BDOXpkbWMrQ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJek1DSWdhR1ZwWjJoMFBTSXpNQ0lnZG1sbGQwSnZlRDBpTUNBd0lETXdJRE13SWo0S0lDQWdJRHh3WVhSb0lHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnYzNSeWIydGxQU0lqUmtaR0lpQnpkSEp2YTJVdGJHbHVaV05oY0QwaWNtOTFibVFpSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlJSE4wY205clpTMTNhV1IwYUQwaU1pSWdaRDBpVFRrZ05td3hOQ0E1TFRFMElEbDZJaTgrQ2p3dmMzWm5QZ289XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0k0TUNJZ2FHVnBaMmgwUFNJNE1DSWdkbWxsZDBKdmVEMGlNQ0F3SURnd0lEZ3dJajROQ2lBZ0lDQThaeUJtYVd4c1BTSnViMjVsSWlCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlITjBjbTlyWlQwaUkwWkdSaUlnYzNSeWIydGxMV3hwYm1WallYQTlJbkp2ZFc1a0lpQnpkSEp2YTJVdGJHbHVaV3B2YVc0OUluSnZkVzVrSWlCemRISnZhMlV0ZDJsa2RHZzlJalFpUGcwS0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk1UVWdNakV1TTNZeE15NDRhREV6TGpnaUx6NE5DaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEl3TGpjM015QTBOaTQyWVRJd0xqY2dNakF1TnlBd0lERWdNQ0EwTGpnNU9TMHlNUzQxTWpoTU1UVWdNelV1TVNJdlBnMEtJQ0FnSUR3dlp6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXpNQ0lnYUdWcFoyaDBQU0l6TUNJZ2RtbGxkMEp2ZUQwaU1DQXdJRE13SURNd0lqNEtJQ0FnSUR4bklHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnYzNSeWIydGxQU0lqUmtaR0lpQnpkSEp2YTJVdGJHbHVaV05oY0QwaWNtOTFibVFpSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlJSE4wY205clpTMTNhV1IwYUQwaU1pSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTkNBMEtTSStDaUFnSUNBZ0lDQWdQR05wY21Oc1pTQmplRDBpTVRFaUlHTjVQU0l4TVNJZ2NqMGlNeUl2UGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWsweE9DNDBJREUwWVRFdU5qVWdNUzQyTlNBd0lEQWdNQ0F1TXpNZ01TNDRNbXd1TURZdU1EWmhNaUF5SURBZ01TQXhMVEl1T0RNZ01pNDRNMnd0TGpBMkxTNHdObUV4TGpZMUlERXVOalVnTUNBd0lEQXRNUzQ0TWkwdU16TWdNUzQyTlNBeExqWTFJREFnTUNBd0xURWdNUzQxTVZZeU1HRXlJRElnTUNBeElERXROQ0F3ZGkwdU1EbEJNUzQyTlNBeExqWTFJREFnTUNBd0lEZ2dNVGd1TkdFeExqWTFJREV1TmpVZ01DQXdJREF0TVM0NE1pNHpNMnd0TGpBMkxqQTJZVElnTWlBd0lERWdNUzB5TGpnekxUSXVPRE5zTGpBMkxTNHdObUV4TGpZMUlERXVOalVnTUNBd0lEQWdMak16TFRFdU9ESWdNUzQyTlNBeExqWTFJREFnTUNBd0xURXVOVEV0TVVneVlUSWdNaUF3SURFZ01TQXdMVFJvTGpBNVFURXVOalVnTVM0Mk5TQXdJREFnTUNBekxqWWdPR0V4TGpZMUlERXVOalVnTUNBd0lEQXRMak16TFRFdU9ESnNMUzR3TmkwdU1EWmhNaUF5SURBZ01TQXhJREl1T0RNdE1pNDRNMnd1TURZdU1EWmhNUzQyTlNBeExqWTFJREFnTUNBd0lERXVPREl1TXpOSU9HRXhMalkxSURFdU5qVWdNQ0F3SURBZ01TMHhMalV4VmpKaE1pQXlJREFnTVNBeElEUWdNSFl1TURsaE1TNDJOU0F4TGpZMUlEQWdNQ0F3SURFZ01TNDFNU0F4TGpZMUlERXVOalVnTUNBd0lEQWdNUzQ0TWkwdU16TnNMakEyTFM0d05tRXlJRElnTUNBeElERWdNaTQ0TXlBeUxqZ3piQzB1TURZdU1EWmhNUzQyTlNBeExqWTFJREFnTUNBd0xTNHpNeUF4TGpneVZqaGpMakkyTGpZd05DNDROVEl1T1RrM0lERXVOVEVnTVVneU1HRXlJRElnTUNBeElERWdNQ0EwYUMwdU1EbGhNUzQyTlNBeExqWTFJREFnTUNBd0xURXVOVEVnTVhvaUx6NEtJQ0FnSUR3dlp6NEtQQzl6ZG1jK0NnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhNREFpSUdobGFXZG9kRDBpTVRBd0lpQjJhV1YzUW05NFBTSXdJREFnTVRBd0lERXdNQ0krQ2lBZ0lDQThaeUJtYVd4c1BTSnViMjVsSWlCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaVBnb2dJQ0FnSUNBZ0lEeGphWEpqYkdVZ1kzZzlJalV3SWlCamVUMGlOVEFpSUhJOUlqUTVJaUJ6ZEhKdmEyVTlJaU5HUmtZaUlITjBjbTlyWlMxM2FXUjBhRDBpTWlJdlBnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdacGJHdzlJaU5HUmtZaUlHUTlJazB6TlNBeU9XZzNkalF5YUMwM2VrMDFPQ0F5T1dnM2RqUXlhQzAzZWlJdlBnb2dJQ0FnUEM5blBnbzhMM04yWno0S1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJek1DSWdhR1ZwWjJoMFBTSXpNQ0lnZG1sbGQwSnZlRDBpTUNBd0lETXdJRE13SWo0S0lDQWdJRHhuSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdjM1J5YjJ0bFBTSWpSa1pHSWlCemRISnZhMlV0YkdsdVpXTmhjRDBpY205MWJtUWlJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaUlITjBjbTlyWlMxM2FXUjBhRDBpTWlJK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRURXdJRFoyTVRoTk1qQWdObll4T0NJdlBnb2dJQ0FnUEM5blBnbzhMM04yWno0S1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJek1DSWdhR1ZwWjJoMFBTSXpNQ0lnZG1sbGQwSnZlRDBpTUNBd0lETXdJRE13SWo0TkNpQWdJQ0E4WnlCbWFXeHNQU0p1YjI1bElpQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJSE4wY205clpUMGlJMFpHUmlJZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5KdmRXNWtJaUJ6ZEhKdmEyVXRiR2x1WldwdmFXNDlJbkp2ZFc1a0lpQnpkSEp2YTJVdGQybGtkR2c5SWpJaVBnMEtJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5PU0F4TVVnMWRqaG9OR3cySURWV05ucE5NVGt1TlRRZ01URXVORFpoTlNBMUlEQWdNQ0F4SURBZ055NHdOeUl2UGcwS0lDQWdJRHd2Wno0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJek1DSWdhR1ZwWjJoMFBTSXpNQ0lnZG1sbGQwSnZlRDBpTUNBd0lETXdJRE13SWo0S0lDQWdJRHhuSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdjM1J5YjJ0bFBTSWpSa1pHSWlCemRISnZhMlV0YkdsdVpXTmhjRDBpY205MWJtUWlJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaUlITjBjbTlyWlMxM2FXUjBhRDBpTWlJK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRUa2dNVEZJTlhZNGFEUnNOaUExVmpaNlRUSTJJREV5YkMwMklEWk5NakFnTVRKc05pQTJJaTgrQ2lBZ0lDQThMMmMrQ2p3dmMzWm5QZ289XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0l6TUNJZ2FHVnBaMmgwUFNJek1DSWdkbWxsZDBKdmVEMGlNQ0F3SURNd0lETXdJajRLSUNBZ0lEeG5JR1pwYkd3OUltNXZibVVpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ2MzUnliMnRsUFNJalJrWkdJaUJ6ZEhKdmEyVXRiR2x1WldOaGNEMGljbTkxYm1RaUlITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpSUhOMGNtOXJaUzEzYVdSMGFEMGlNaUkrQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRrZ01URklOWFk0YURSc05pQTFWalo2VFRJekxqQTNJRGN1T1ROak15NDVNRFFnTXk0NU1EVWdNeTQ1TURRZ01UQXVNak0xSURBZ01UUXVNVFJ0TFRNdU5UTXRNVEF1TmpGaE5TQTFJREFnTUNBeElEQWdOeTR3TnlJdlBnb2dJQ0FnUEM5blBnbzhMM04yWno0S1wiIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi9vdmVucGxheWVyLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi9vdmVucGxheWVyLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4vb3ZlbnBsYXllci5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy9pbXBvcnQgQ2FwdGlvbk1hbmFnZXIgZnJvbSBcImFwaS9jYXB0aW9uL01hbmFnZXJcIjtcclxuaW1wb3J0IENvbmZpZ3VyYXRvciBmcm9tIFwiYXBpL0NvbmZpZ3VyYXRvclwiO1xyXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCJhcGkvRXZlbnRFbWl0dGVyXCI7XHJcbmltcG9ydCBMYXp5Q29tbWFuZEV4ZWN1dG9yIGZyb20gXCJhcGkvTGF6eUNvbW1hbmRFeGVjdXRvclwiO1xyXG5pbXBvcnQgTG9nTWFuYWdlciBmcm9tIFwidXRpbHMvbG9nZ2VyXCI7XHJcbmltcG9ydCBQbGF5bGlzdE1hbmFnZXIgZnJvbSBcImFwaS9wbGF5bGlzdC9NYW5hZ2VyXCI7XHJcbmltcG9ydCBQcm92aWRlckNvbnRyb2xsZXIgZnJvbSBcImFwaS9wcm92aWRlci9Db250cm9sbGVyXCI7XHJcbmltcG9ydCBQcm9taXNlLCB7cmVzb2x2ZWR9IGZyb20gXCJhcGkvc2hpbXMvcHJvbWlzZVwiO1xyXG5pbXBvcnQge1JFQURZLCBFUlJPUiwgSU5JVF9FUlJPUiwgREVTVFJPWSwgTkVUV09SS19VTlNUQUJMRUQsIFBMQVlFUl9GSUxFX0VSUk9SLCBQUk9WSURFUl9EQVNILCBQUk9WSURFUl9ITFMsIFBST1ZJREVSX1dFQlJUQywgUFJPVklERVJfSFRNTDUsIFBST1ZJREVSX1JUTVB9IGZyb20gXCJhcGkvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7dmVyc2lvbn0gZnJvbSAndmVyc2lvbic7XHJcbmltcG9ydCB7QXBpUnRtcEV4cGFuc2lvbn0gZnJvbSAnYXBpL0FwaUV4cGFuc2lvbnMnO1xyXG5cclxuLyoqXHJcbiAqIEBicmllZiAgIFRoaXMgb2JqZWN0IGNvbm5lY3RzIFVJIHRvIHRoZSBwcm92aWRlci5cclxuICogQHBhcmFtICAge29iamVjdH0gICAgY29udGFpbmVyICBkb20gZWxlbWVudFxyXG4gKlxyXG4gKiAqL1xyXG5cclxuY29uc3QgQXBpID0gZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgIGxldCBsb2dNYW5hZ2VyID0gTG9nTWFuYWdlcigpO1xyXG4gICAgY29uc3QgdGhhdCA9IHt9O1xyXG4gICAgRXZlbnRFbWl0dGVyKHRoYXQpO1xyXG5cclxuICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIltbT3ZlblBsYXllcl1dIHYuXCIrIHZlcnNpb24pO1xyXG4gICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQVBJIGxvYWRlZC5cIik7XHJcbiAgICAvL2xldCBjYXB0aW9uTWFuYWdlciA9IENhcHRpb25NYW5hZ2VyKHRoYXQpO1xyXG4gICBcclxuICAgIGxldCBwbGF5bGlzdE1hbmFnZXIgPSBQbGF5bGlzdE1hbmFnZXIoKTtcclxuICAgIGxldCBwcm92aWRlckNvbnRyb2xsZXIgPSBQcm92aWRlckNvbnRyb2xsZXIoKTtcclxuICAgIGxldCBjdXJyZW50UHJvdmlkZXIgPSBcIlwiO1xyXG4gICAgbGV0IHBsYXllckNvbmZpZyA9IFwiXCI7XHJcbiAgICBsZXQgbGF6eVF1ZXVlID0gXCJcIjtcclxuXHJcbiAgICBjb25zdCBpbml0UHJvdmlkZXIgPSBmdW5jdGlvbihsYXN0UGxheVBvc2l0aW9uKXtcclxuICAgICAgICBjb25zdCBwaWNrUXVhbGl0eUZyb21Tb3VyY2UgPSAoc291cmNlcykgPT57XHJcbiAgICAgICAgICAgIHZhciBxdWFsaXR5ID0gMDtcclxuICAgICAgICAgICAgaWYgKHNvdXJjZXMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VzW2ldLmRlZmF1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eSA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJDb25maWcuZ2V0UXVhbGl0eUxhYmVsKCkgJiYgc291cmNlc1tpXS5sYWJlbCA9PT0gcGxheWVyQ29uZmlnLmdldFF1YWxpdHlMYWJlbCgpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHF1YWxpdHk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb3ZpZGVyQ29udHJvbGxlci5sb2FkUHJvdmlkZXJzKHBsYXlsaXN0TWFuYWdlci5nZXRQbGF5bGlzdCgpKS50aGVuKFByb3ZpZGVycyA9PiB7XHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRQcm92aWRlcil7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvdmlkZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFByb3ZpZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTb3VyY2VJbmRleCA9IHBpY2tRdWFsaXR5RnJvbVNvdXJjZShwbGF5bGlzdE1hbmFnZXIuZ2V0Q3VycmVudFNvdXJjZXMoKSk7XHJcbiAgICAgICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyggXCJjdXJyZW50IHNvdXJjZSBpbmRleCA6IFwiKyBjdXJyZW50U291cmNlSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgLy9DYWxsIFByb3ZpZGVyLlxyXG4gICAgICAgICAgICBjdXJyZW50UHJvdmlkZXIgPSBQcm92aWRlcnNbY3VycmVudFNvdXJjZUluZGV4XShjb250YWluZXIsIHBsYXllckNvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICBpZihjdXJyZW50UHJvdmlkZXIuZ2V0TmFtZSgpID09PSBQUk9WSURFUl9SVE1QKXtcclxuICAgICAgICAgICAgICAgIC8vSWYgcHJvdmlkZXIgdHlwZSBpcyBSVE1QLCB3ZSBhY2NlcHRzIFJ0bXBFeHBhbnNpb24uXHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoYXQsIEFwaVJ0bXBFeHBhbnNpb24oY3VycmVudFByb3ZpZGVyKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vVGhpcyBwYXNzZXMgdGhlIGV2ZW50IGNyZWF0ZWQgYnkgdGhlIFByb3ZpZGVyIHRvIEFQSS5cclxuICAgICAgICAgICAgY3VycmVudFByb3ZpZGVyLm9uKFwiYWxsXCIsIGZ1bmN0aW9uKG5hbWUsIGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgdGhhdC50cmlnZ2VyKG5hbWUsIGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vQXV0byBuZXh0IHNvdXJjZSB3aGVuIHBsYXllciBsb2FkIHdhcyBmYWlsIGJ5IGFtaXNzIHNvdXJjZS5cclxuICAgICAgICAgICAgICAgIGlmKCAobmFtZSA9PT0gRVJST1IgJiYgKGRhdGEuY29kZSA9PT0gUExBWUVSX0ZJTEVfRVJST1IgfHwgcGFyc2VJbnQoZGF0YS5jb2RlLzEwMCkgPT09IDUpKXx8IG5hbWUgPT09IE5FVFdPUktfVU5TVEFCTEVEICl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRRdWFsaXR5ID0gdGhhdC5nZXRDdXJyZW50UXVhbGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRRdWFsaXR5LmluZGV4KzEgPCB0aGF0LmdldFF1YWxpdHlMZXZlbHMoKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMgc2VxdWVudGlhbCBoYXMgYXZhaWxhYmxlIHNvdXJjZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wYXVzZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXRDdXJyZW50UXVhbGl0eShjdXJyZW50UXVhbGl0eS5pbmRleCsxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KS50aGVuKCgpPT57XHJcblxyXG4gICAgICAgICAgICAvL3Byb3ZpZGVyJ3MgcHJlbG9hZCgpIGhhdmUgdG8gbWFkZSBQcm9taXNlLiBDdXogaXQgb3ZlcmNvbWVzICdmbGFzaCBsb2FkaW5nIHRpbWluZyBwcm9ibGVtJy5cclxuICAgICAgICAgICAgY3VycmVudFByb3ZpZGVyLnByZWxvYWQocGxheWxpc3RNYW5hZ2VyLmdldEN1cnJlbnRTb3VyY2VzKCksIGxhc3RQbGF5UG9zaXRpb24gKS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBsYXp5UXVldWUuZmx1c2goKTtcclxuICAgICAgICAgICAgICAgIC8vVGhpcyBpcyBubyByZWFzb24gdG8gZXhpc3QgYW55bW9yZS5cclxuICAgICAgICAgICAgICAgIGxhenlRdWV1ZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhhdC50cmlnZ2VyKFJFQURZKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yT2JqZWN0ID0ge2NvZGUgOiBJTklUX0VSUk9SLCByZWFzb24gOiBcImluaXQgZXJyb3IuXCIsIG1lc3NhZ2UgOiBcIlBsYXllciBpbml0IGVycm9yLlwiLCBlcnJvciA6IGVycm9yfTtcclxuICAgICAgICAgICAgdGhhdC50cmlnZ2VyKEVSUk9SLCBlcnJvck9iamVjdCk7XHJcblxyXG4gICAgICAgICAgICAvL3h4eCA6IElmIHlvdSBpbml0IGVtcHR5IHNvdXJjZXMuIChJIHRoaW5rIHRoaXMgaXMgc3RyYW5nZSBjYXNlLilcclxuICAgICAgICAgICAgLy9UaGlzIHdvcmtzIGZvciB0aGlzIGNhc2UuXHJcbiAgICAgICAgICAgIC8vcGxheWVyID0gT3ZlblBsYXllci5jcmVhdGUoXCJlbElkXCIsIHt9KTtcclxuICAgICAgICAgICAgLy9wbGF5ZXIubG9hZChzb3J1Y2VzKTtcclxuICAgICAgICAgICAgbGF6eVF1ZXVlLnJlbW92ZUFuZEV4Y3V0ZU9uY2UoXCJsb2FkXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBUEkg7LSI6riw7ZmUIO2VqOyImFxyXG4gICAgICogaW5pdFxyXG4gICAgICogQHBhcmFtICAgICAge29iamVjdH0gb3B0aW9ucyBwbGF5ZXIgaW5pdGlhbCBvcHRpb24gdmFsdWUuXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICoqL1xyXG4gICAgdGhhdC5pbml0ID0gKG9wdGlvbnMpID0+e1xyXG4gICAgICAgIC8vSXQgY29sbGVjdHMgdGhlIGNvbW1hbmRzIGFuZCBleGVjdXRlcyB0aGVtIGF0IHRoZSB0aW1lIHdoZW4gdGhleSBhcmUgZXhlY3V0YWJsZS5cclxuICAgICAgICBsYXp5UXVldWUgPSBMYXp5Q29tbWFuZEV4ZWN1dG9yKHRoYXQsIFsnbG9hZCcsJ3BsYXknLCdwYXVzZScsJ3NlZWsnLCdzdG9wJywgJ2dldER1cmF0aW9uJywgJ2dldFBvc2l0aW9uJywgJ2dldFZvbHVtZScsICdnZXRNdXRlJywgJ2dldEJ1ZmZlcicsICdnZXRTdGF0ZSddKTtcclxuICAgICAgICBwbGF5ZXJDb25maWcgPSBDb25maWd1cmF0b3Iob3B0aW9ucyk7XHJcbiAgICAgICAgaWYoIXBsYXllckNvbmZpZy5pc0RlYnVnKCkpe1xyXG4gICAgICAgICAgICBsb2dNYW5hZ2VyLmRpc2FibGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQVBJIDogaW5pdCgpXCIpO1xyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IGluaXQoKSBjb25maWcgOiBcIiwgcGxheWVyQ29uZmlnKTtcclxuXHJcbiAgICAgICAgcGxheWxpc3RNYW5hZ2VyLnNldFBsYXlsaXN0KHBsYXllckNvbmZpZy5nZXRQbGF5bGlzdCgpKTtcclxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBpbml0KCkgc291cmNlcyA6IFwiICwgcGxheWxpc3RNYW5hZ2VyLmdldEN1cnJlbnRTb3VyY2VzKCkpO1xyXG4gICAgICAgIGluaXRQcm92aWRlcigpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKnRoYXQuZ2V0Q29udGFpbmVySWQgPSAoKSA9PntcclxuICAgICAgICByZXR1cm4gY29udGFpbmVyLmlkO1xyXG4gICAgfTsqL1xyXG5cclxuICAgIHRoYXQuZ2V0Q29uZmlnID0gKCkgPT4ge1xyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IGdldENvbmZpZygpXCIsIHBsYXllckNvbmZpZy5nZXRDb25maWcoKSk7XHJcbiAgICAgICAgcmV0dXJuIHBsYXllckNvbmZpZy5nZXRDb25maWcoKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhhdC5nZXREdXJhdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZighY3VycmVudFByb3ZpZGVyKXtyZXR1cm47fVxyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IGdldER1cmF0aW9uKClcIiwgY3VycmVudFByb3ZpZGVyLmdldER1cmF0aW9uKCkpO1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvdmlkZXIuZ2V0RHVyYXRpb24oKTtcclxuICAgIH07XHJcbiAgICB0aGF0LmdldFBvc2l0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCFjdXJyZW50UHJvdmlkZXIpe3JldHVybjt9XHJcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQVBJIDogZ2V0UG9zaXRpb24oKVwiLCBjdXJyZW50UHJvdmlkZXIuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm92aWRlci5nZXRQb3NpdGlvbigpO1xyXG4gICAgfTtcclxuICAgIHRoYXQuZ2V0Vm9sdW1lID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCFjdXJyZW50UHJvdmlkZXIpe3JldHVybjt9XHJcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQVBJIDogZ2V0Vm9sdW1lKClcIiwgY3VycmVudFByb3ZpZGVyLmdldFZvbHVtZSgpKTtcclxuICAgICAgICByZXR1cm4gY3VycmVudFByb3ZpZGVyLmdldFZvbHVtZSgpO1xyXG4gICAgfTtcclxuICAgIHRoYXQuc2V0Vm9sdW1lID0gKHZvbHVtZSkgPT4ge1xyXG4gICAgICAgIGlmKCFjdXJyZW50UHJvdmlkZXIpe3JldHVybjt9XHJcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQVBJIDogc2V0Vm9sdW1lKCkgXCIgKyB2b2x1bWUpO1xyXG4gICAgICAgIGN1cnJlbnRQcm92aWRlci5zZXRWb2x1bWUodm9sdW1lKTtcclxuICAgIH07XHJcbiAgICB0aGF0LnNldE11dGUgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICBpZighY3VycmVudFByb3ZpZGVyKXtyZXR1cm47fVxyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IHNldE11dGUoKSBcIiArIHN0YXRlKTtcclxuICAgICAgICByZXR1cm4gY3VycmVudFByb3ZpZGVyLnNldE11dGUoc3RhdGUpO1xyXG4gICAgfTtcclxuICAgIHRoYXQuZ2V0TXV0ZSA9ICgpID0+IHtcclxuICAgICAgICBpZighY3VycmVudFByb3ZpZGVyKXtyZXR1cm47fVxyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IGdldE11dGUoKSBcIiArIGN1cnJlbnRQcm92aWRlci5nZXRNdXRlKCkpO1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvdmlkZXIuZ2V0TXV0ZSgpO1xyXG4gICAgfTtcclxuICAgIHRoYXQubG9hZCA9IChwbGF5bGlzdCkgPT4ge1xyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IGxvYWQoKSBcIiwgcGxheWxpc3QpO1xyXG4gICAgICAgIGxhenlRdWV1ZSA9IExhenlDb21tYW5kRXhlY3V0b3IodGhhdCwgWydwbGF5Jywnc2VlaycsJ3N0b3AnXSk7XHJcblxyXG4gICAgICAgIGlmKHBsYXlsaXN0KXtcclxuICAgICAgICAgICAgaWYoY3VycmVudFByb3ZpZGVyKXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm92aWRlci5zZXRDdXJyZW50UXVhbGl0eSgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwbGF5bGlzdE1hbmFnZXIuc2V0UGxheWxpc3QocGxheWxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5pdFByb3ZpZGVyKCk7XHJcblxyXG4gICAgfTtcclxuICAgIHRoYXQucGxheSA9ICgpID0+IHtcclxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBwbGF5KCkgXCIpO1xyXG4gICAgICAgIGN1cnJlbnRQcm92aWRlci5wbGF5KCk7XHJcbiAgICB9XHJcbiAgICB0aGF0LnBhdXNlID0gKCkgPT4ge1xyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IHBhdXNlKCkgXCIpO1xyXG4gICAgICAgIGN1cnJlbnRQcm92aWRlci5wYXVzZSgpO1xyXG4gICAgfTtcclxuICAgIHRoYXQuc2VlayA9IChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IHNlZWsoKSBcIisgcG9zaXRpb24pO1xyXG4gICAgICAgIGN1cnJlbnRQcm92aWRlci5zZWVrKHBvc2l0aW9uKTtcclxuICAgIH07XHJcbiAgICB0aGF0LnNldFBsYXliYWNrUmF0ZSA9IChwbGF5YmFja1JhdGUpID0+e1xyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IHNldFBsYXliYWNrUmF0ZSgpIFwiLCBwbGF5YmFja1JhdGUpO1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvdmlkZXIuc2V0UGxheWJhY2tSYXRlKHBsYXllckNvbmZpZy5zZXREZWZhdWx0UGxheWJhY2tSYXRlKHBsYXliYWNrUmF0ZSkpO1xyXG4gICAgfTtcclxuICAgIHRoYXQuZ2V0UGxheWJhY2tSYXRlID0gKCkgPT57XHJcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQVBJIDogZ2V0UGxheWJhY2tSYXRlKCkgXCIsIGN1cnJlbnRQcm92aWRlci5nZXRQbGF5YmFja1JhdGUoKSk7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm92aWRlci5nZXRQbGF5YmFja1JhdGUoKTtcclxuICAgIH07XHJcbiAgICB0aGF0LmdldFF1YWxpdHlMZXZlbHMgPSAoKSA9PntcclxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBnZXRRdWFsaXR5TGV2ZWxzKCkgXCIsIGN1cnJlbnRQcm92aWRlci5nZXRRdWFsaXR5TGV2ZWxzKCkpO1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvdmlkZXIuZ2V0UXVhbGl0eUxldmVscygpO1xyXG4gICAgfTtcclxuICAgIHRoYXQuZ2V0Q3VycmVudFF1YWxpdHkgPSAoKSA9PntcclxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBnZXRDdXJyZW50UXVhbGl0eSgpIFwiLCBjdXJyZW50UHJvdmlkZXIuZ2V0Q3VycmVudFF1YWxpdHkoKSk7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm92aWRlci5nZXRDdXJyZW50UXVhbGl0eSgpO1xyXG4gICAgfTtcclxuICAgIHRoYXQuc2V0Q3VycmVudFF1YWxpdHkgPSAocXVhbGl0eUluZGV4KSA9PntcclxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBzZXRDdXJyZW50UXVhbGl0eSgpIFwiLCBxdWFsaXR5SW5kZXgpO1xyXG5cclxuICAgICAgICBsZXQgc291cmNlcyA9IHBsYXlsaXN0TWFuYWdlci5nZXRDdXJyZW50U291cmNlcygpO1xyXG4gICAgICAgIGxldCBjdXJyZW50U291cmNlID0gc291cmNlc1t0aGF0LmdldEN1cnJlbnRRdWFsaXR5KCkuaW5kZXhdO1xyXG4gICAgICAgIGxldCBuZXdTb3VyY2UgPSBzb3VyY2VzW3F1YWxpdHlJbmRleF07XHJcbiAgICAgICAgbGV0IGxhc3RQbGF5UG9zaXRpb24gPSB0aGF0LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IGlzU2FtZVByb3ZpZGVyID0gcHJvdmlkZXJDb250cm9sbGVyLmlzU2FtZVByb3ZpZGVyKGN1cnJlbnRTb3VyY2UsIG5ld1NvdXJjZSk7XHJcbiAgICAgICAgLy8gcHJvdmlkZXIuc2VyQ3VycmVudFF1YWxpdHkgLT4gcGxheWVyQ29uZmlnIHNldHRpbmcgLT4gbG9hZFxyXG4gICAgICAgIGxldCByZXNRdWFsaXR5SW5kZXggPSBjdXJyZW50UHJvdmlkZXIuc2V0Q3VycmVudFF1YWxpdHkocXVhbGl0eUluZGV4LCBpc1NhbWVQcm92aWRlcik7XHJcblxyXG4gICAgICAgIGlmKCFuZXdTb3VyY2Upe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IHNldEN1cnJlbnRRdWFsaXR5KCkgaXNTYW1lUHJvdmlkZXJcIiwgaXNTYW1lUHJvdmlkZXIpO1xyXG5cclxuICAgICAgICBpZighaXNTYW1lUHJvdmlkZXIpe1xyXG4gICAgICAgICAgICBsYXp5UXVldWUgPSBMYXp5Q29tbWFuZEV4ZWN1dG9yKHRoYXQsIFsncGxheSddKTtcclxuICAgICAgICAgICAgaW5pdFByb3ZpZGVyKGxhc3RQbGF5UG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc1F1YWxpdHlJbmRleDtcclxuICAgIH07XHJcblxyXG4gICAgLyogQ2FwdGlvbnMgOiBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhlIGN1cnJlbnQgdmVyc2lvbi4qL1xyXG4gICAgLyp0aGF0LnNldEN1cnJlbnRDYXB0aW9uID0gKGluZGV4KSA9PntcclxuICAgICByZXR1cm4gY2FwdGlvbk1hbmFnZXIuc2V0Q3VycmVudENhcHRpb24oaW5kZXgpO1xyXG4gICAgIH1cclxuICAgICB0aGF0LmdldEN1cnJlbnRDYXB0aW9uID0gKCkgPT57XHJcbiAgICAgcmV0dXJuIGNhcHRpb25NYW5hZ2VyLmdldEN1cnJlbnRDYXB0aW9uKCk7XHJcbiAgICAgfVxyXG4gICAgIHRoYXQuZ2V0Q2FwdGlvbkxpc3QgPSAoKSA9PiB7XHJcbiAgICAgcmV0dXJuIGNhcHRpb25NYW5hZ2VyLmdldENhcHRpb25MaXN0KCk7XHJcbiAgICAgfVxyXG4gICAgIHRoYXQuYWRkQ2FwdGlvbiA9ICh0cmFjaykgPT4ge1xyXG4gICAgIHJldHVybiBjYXB0aW9uTWFuYWdlci5hZGRDYXB0aW9uKCk7XHJcbiAgICAgfVxyXG4gICAgIHRoYXQuZ2V0Q2FwdGlvbkxpc3QgPSAoKSA9PiB7XHJcbiAgICAgcmV0dXJuIGNhcHRpb25NYW5hZ2VyLmdldENhcHRpb25MaXN0KCk7XHJcbiAgICAgfSovXHJcblxyXG4gICAgdGhhdC5nZXRCdWZmZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQVBJIDogZ2V0QnVmZmVyKCkgXCIsIGN1cnJlbnRQcm92aWRlci5nZXRCdWZmZXIoKSk7XHJcbiAgICAgICAgY3VycmVudFByb3ZpZGVyLmdldEJ1ZmZlcigpO1xyXG4gICAgfTtcclxuICAgIHRoYXQuZ2V0U3RhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIWN1cnJlbnRQcm92aWRlcil7cmV0dXJuO31cclxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBnZXRTdGF0ZSgpIFwiLCBjdXJyZW50UHJvdmlkZXIuZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm92aWRlci5nZXRTdGF0ZSgpO1xyXG4gICAgfTtcclxuICAgIHRoYXQuc3RvcCA9ICgpID0+IHtcclxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBzdG9wKCkgXCIpO1xyXG4gICAgICAgIGN1cnJlbnRQcm92aWRlci5zdG9wKCk7XHJcbiAgICB9O1xyXG4gICAgdGhhdC5yZW1vdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQVBJIDogcmVtb3ZlKCkgXCIpO1xyXG4gICAgICAgIGxhenlRdWV1ZS5kZXN0cm95KCk7XHJcbiAgICAgICAgY3VycmVudFByb3ZpZGVyLmRlc3Ryb3koKTtcclxuICAgICAgICBjdXJyZW50UHJvdmlkZXIgPSBudWxsO1xyXG4gICAgICAgIHByb3ZpZGVyQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICAgICAgcGxheWxpc3RNYW5hZ2VyID0gbnVsbDtcclxuICAgICAgICBwbGF5ZXJDb25maWcgPSBudWxsO1xyXG4gICAgICAgIGxhenlRdWV1ZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoYXQudHJpZ2dlcihERVNUUk9ZKTtcclxuICAgICAgICB0aGF0Lm9mZigpO1xyXG5cclxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiByZW1vdmUoKSAtIGxhenlRdWV1ZSwgY3VycmVudFByb3ZpZGVyLCBwcm92aWRlckNvbnRyb2xsZXIsIHBsYXlsaXN0TWFuYWdlciwgcGxheWVyQ29uZmlnLCBhcGkgZXZlbnQgZGVzdHJvZWQuIFwiKTtcclxuICAgICAgICBsb2dNYW5hZ2VyLmRlc3Ryb3koKTtcclxuICAgICAgICBsb2dNYW5hZ2VyID0gbnVsbDtcclxuICAgICAgICBPdmVuUGxheWVyU0RLLnJlbW92ZVBsYXllcih0aGF0LmdldENvbnRhaW5lcklkKCkpO1xyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiB0aGF0O1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcGk7XHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgaG9obyBvbiAyMDE4LiA4LiAyNC4uXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwaVJ0bXBFeHBhbnNpb24gPSBmdW5jdGlvbihjdXJyZW50UHJvdmlkZXIpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBleHRlcm5hbENhbGxiYWNrQ3JlZXAgOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5uYW1lICYmIHJlc3VsdC5kYXRhKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50UHJvdmlkZXIudHJpZ2dlckV2ZW50RnJvbUV4dGVybmFsKHJlc3VsdC5uYW1lLCByZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG4iLCJpbXBvcnQgXyBmcm9tIFwidXRpbHMvdW5kZXJzY29yZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBicmllZiAgIFRoaXMgaW5pdGlhbGl6ZXMgdGhlIGlucHV0IG9wdGlvbnMuXHJcbiAqIEBwYXJhbSAgIG9wdGlvbnNcclxuICpcclxuICogKi9cclxuY29uc3QgQ29uZmlndXJhdG9yID0gZnVuY3Rpb24ob3B0aW9ucyl7XHJcblxyXG4gICAgY29uc3QgY29tcG9zZVNvdXJjZU9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKXtcclxuICAgICAgICBjb25zdCBEZWZhdWx0cyA9IHtcclxuICAgICAgICAgICAgZGVmYXVsdFBsYXliYWNrUmF0ZTogMSxcclxuICAgICAgICAgICAgcGxheWJhY2tSYXRlQ29udHJvbHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBwbGF5YmFja1JhdGVzOiBbMC4yNSwgMC41LCAxLCAxLjUsIDJdLFxyXG4gICAgICAgICAgICBtdXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgdm9sdW1lOiA5MCxcclxuICAgICAgICAgICAgd2lkdGg6IDY0MCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNjBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZSA9IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA8IDYpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvd2VyY2FzZVZhbCA9IHZhbC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvd2VyY2FzZVZhbCA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobG93ZXJjYXNlVmFsID09PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTihOdW1iZXIodmFsKSkgJiYgIWlzTmFOKHBhcnNlRmxvYXQodmFsKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGVzZXJpYWxpemUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdpZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zW2tleV0gPSBzZXJpYWxpemUob3B0aW9uc1trZXldKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZVNpemUgPSBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWwuc2xpY2UgJiYgdmFsLnNsaWNlKC0yKSA9PT0gJ3B4Jykge1xyXG4gICAgICAgICAgICAgICAgdmFsID0gdmFsLnNsaWNlKDAsIC0yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBldmFsdWF0ZUFzcGVjdFJhdGlvID0gZnVuY3Rpb24gKGFyLCB3aWR0aCkge1xyXG4gICAgICAgICAgICBpZiAod2lkdGgudG9TdHJpbmcoKS5pbmRleE9mKCclJykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyICE9PSAnc3RyaW5nJyB8fCAhYXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgvXlxcZCpcXC4/XFxkKyUkLy50ZXN0KGFyKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXIuaW5kZXhPZignOicpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB3ID0gcGFyc2VGbG9hdChhci5zdWJzdHIoMCwgaW5kZXgpKTtcclxuICAgICAgICAgICAgY29uc3QgaCA9IHBhcnNlRmxvYXQoYXIuc3Vic3RyKGluZGV4ICsgMSkpO1xyXG4gICAgICAgICAgICBpZiAodyA8PSAwIHx8IGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIChoIC8gdyAqIDEwMCkgKyAnJSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlc2VyaWFsaXplKG9wdGlvbnMpO1xyXG4gICAgICAgIGxldCBjb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgb3B0aW9ucyk7XHJcbiAgICAgICAgY29uZmlnLndpZHRoID0gbm9ybWFsaXplU2l6ZShjb25maWcud2lkdGgpO1xyXG4gICAgICAgIGNvbmZpZy5oZWlnaHQgPSBub3JtYWxpemVTaXplKGNvbmZpZy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbmZpZy5hc3BlY3RyYXRpbyA9IGV2YWx1YXRlQXNwZWN0UmF0aW8oY29uZmlnLmFzcGVjdHJhdGlvLCBjb25maWcud2lkdGgpO1xyXG5cclxuICAgICAgICBsZXQgcmF0ZUNvbnRyb2xzID0gY29uZmlnLnBsYXliYWNrUmF0ZUNvbnRyb2xzO1xyXG4gICAgICAgIGlmIChyYXRlQ29udHJvbHMpIHtcclxuICAgICAgICAgICAgbGV0IHJhdGVzID0gY29uZmlnLnBsYXliYWNrUmF0ZXM7XHJcblxyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyYXRlQ29udHJvbHMpKSB7XHJcbiAgICAgICAgICAgICAgICByYXRlcyA9IHJhdGVDb250cm9scztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByYXRlcyA9IHJhdGVzLmZpbHRlcihyYXRlID0+IF8uaXNOdW1iZXIocmF0ZSkgJiYgcmF0ZSA+PSAwLjI1ICYmIHJhdGUgPD0gNClcclxuICAgICAgICAgICAgICAgIC5tYXAocmF0ZSA9PiBNYXRoLnJvdW5kKHJhdGUgKiA0KSAvIDQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJhdGVzLmluZGV4T2YoMSkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICByYXRlcy5wdXNoKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJhdGVzLnNvcnQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbmZpZy5wbGF5YmFja1JhdGVDb250cm9scyA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbmZpZy5wbGF5YmFja1JhdGVzID0gcmF0ZXM7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcucGxheWJhY2tSYXRlQ29udHJvbHMgfHwgY29uZmlnLnBsYXliYWNrUmF0ZXMuaW5kZXhPZihjb25maWcuZGVmYXVsdFBsYXliYWNrUmF0ZSkgPCAwKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5kZWZhdWx0UGxheWJhY2tSYXRlID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbmZpZy5wbGF5YmFja1JhdGUgPSBjb25maWcuZGVmYXVsdFBsYXliYWNrUmF0ZTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuYXNwZWN0cmF0aW8pIHtcclxuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5hc3BlY3RyYXRpbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbmZpZ1BsYXlsaXN0ID0gY29uZmlnLnBsYXlsaXN0O1xyXG4gICAgICAgIGlmICghY29uZmlnUGxheWxpc3QpIHtcclxuICAgICAgICAgICAgY29uc3Qgb2JqID0gXy5waWNrKGNvbmZpZywgW1xyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAndHlwZScsXHJcbiAgICAgICAgICAgICAgICAnbWVkaWFpZCcsXHJcbiAgICAgICAgICAgICAgICAnaW1hZ2UnLFxyXG4gICAgICAgICAgICAgICAgJ2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgJ3NvdXJjZXMnLFxyXG4gICAgICAgICAgICAgICAgJ3RyYWNrcycsXHJcbiAgICAgICAgICAgICAgICAncHJlbG9hZCcsXHJcbiAgICAgICAgICAgICAgICAnZHVyYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgJ2hvc3QnLFxyXG4gICAgICAgICAgICAgICAgJ2FwcGxpY2F0aW9uJyxcclxuICAgICAgICAgICAgICAgICdzdHJlYW0nXHJcbiAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICAgICAgY29uZmlnLnBsYXlsaXN0ID0gWyBvYmogXTtcclxuICAgICAgICB9IGVsc2UgaWYgKF8uaXNBcnJheShjb25maWdQbGF5bGlzdC5wbGF5bGlzdCkpIHtcclxuICAgICAgICAgICAgY29uZmlnLmZlZWREYXRhID0gY29uZmlnUGxheWxpc3Q7XHJcbiAgICAgICAgICAgIGNvbmZpZy5wbGF5bGlzdCA9IGNvbmZpZ1BsYXlsaXN0LnBsYXlsaXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5kdXJhdGlvbjtcclxuICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfTtcclxuICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkNvbmZpZ3VyYXRvciBsb2FkZWQuXCIsIG9wdGlvbnMpO1xyXG4gICAgbGV0IGNvbmZpZyA9IGNvbXBvc2VTb3VyY2VPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuICAgIGxldCBhc3BlY3RyYXRpbyA9IGNvbmZpZy5hc3BlY3RyYXRpbyB8fCBcIjE2OjlcIjtcclxuICAgIGxldCBkZWJ1ZyA9IGNvbmZpZy5kZWJ1ZztcclxuICAgIGxldCBkZWZhdWx0UGxheWJhY2tSYXRlID0gY29uZmlnLmRlZmF1bHRQbGF5YmFja1JhdGUgfHwgMTtcclxuICAgIGxldCBpbWFnZSA9IGNvbmZpZy5pbWFnZTtcclxuICAgIGxldCBwbGF5YmFja1JhdGVDb250cm9scyA9IGNvbmZpZy5wbGF5YmFja1JhdGVDb250cm9scyB8fCB0cnVlO1xyXG4gICAgbGV0IHBsYXliYWNrUmF0ZXMgPSBjb25maWcucGxheWJhY2tSYXRlcyB8fCBbMC41LCAxLCAxLjI1LCAxLjUsIDJdO1xyXG4gICAgbGV0IHBsYXlsaXN0ID0gY29uZmlnLnBsYXlsaXN0IHx8IFtdO1xyXG4gICAgbGV0IHF1YWxpdHlMYWJlbCA9IGNvbmZpZy5xdWFsaXR5TGFiZWwgfHwgXCJcIjtcclxuICAgIGxldCByZXBlYXQgPSBjb25maWcucmVwZWF0IHx8IGZhbHNlO1xyXG4gICAgbGV0IHN0cmV0Y2hpbmcgPSBjb25maWcuc3RyZXRjaGluZyB8fCAndW5pZm9ybSc7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCB0aGF0ID0ge307XHJcbiAgICB0aGF0LmdldENvbmZpZyA9ICgpID0+IHtyZXR1cm4gY29uZmlnO307XHJcblxyXG4gICAgdGhhdC5nZXRBc3BlY3RyYXRpbyA9KCk9PntyZXR1cm4gYXNwZWN0cmF0aW87fTtcclxuICAgIHRoYXQuc2V0QXNwZWN0cmF0aW8gPShhc3BlY3RyYXRpb18pPT57YXNwZWN0cmF0aW8gPSBhc3BlY3RyYXRpb187fTtcclxuXHJcbiAgICB0aGF0LmlzRGVidWcgPSgpPT57cmV0dXJuIGRlYnVnO307XHJcblxyXG4gICAgdGhhdC5nZXREZWZhdWx0UGxheWJhY2tSYXRlID0oKT0+e3JldHVybiBkZWZhdWx0UGxheWJhY2tSYXRlO307XHJcbiAgICB0aGF0LnNldERlZmF1bHRQbGF5YmFja1JhdGUgPShwbGF5YmFja1JhdGUpPT57ZGVmYXVsdFBsYXliYWNrUmF0ZSA9IHBsYXliYWNrUmF0ZTsgcmV0dXJuIHBsYXliYWNrUmF0ZTt9O1xyXG5cclxuICAgIHRoYXQuZ2V0UXVhbGl0eUxhYmVsID0gKCkgPT4ge3JldHVybiBxdWFsaXR5TGFiZWw7fTtcclxuICAgIHRoYXQuc2V0UXVhbGl0eUxhYmVsID0gKG5ld0xhYmVsKSA9PiB7cXVhbGl0eUxhYmVsID0gbmV3TGFiZWw7fTtcclxuXHJcbiAgICB0aGF0LmdldFBsYXliYWNrUmF0ZXMgPSgpPT57cmV0dXJuIHBsYXliYWNrUmF0ZXM7fTtcclxuICAgIHRoYXQuaXNQbGF5YmFja1JhdGVDb250cm9scyA9KCk9PntyZXR1cm4gcGxheWJhY2tSYXRlQ29udHJvbHM7fTtcclxuXHJcbiAgICB0aGF0LmdldFBsYXlsaXN0ID0oKT0+e3JldHVybiBwbGF5bGlzdDt9O1xyXG4gICAgdGhhdC5zZXRQbGF5bGlzdCA9KHBsYXlsaXN0XyApPT57XHJcbiAgICAgICAgaWYoXy5pc0FycmF5KHBsYXlsaXN0Xykpe1xyXG4gICAgICAgICAgICBwbGF5bGlzdCA9IHBsYXlsaXN0XztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcGxheWxpc3QgPSBbcGxheWxpc3RfXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBsYXlsaXN0O1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGF0LmlzUmVwZWF0ID0oKT0+e3JldHVybiByZXBlYXQ7fTtcclxuXHJcbiAgICB0aGF0LmdldFN0cmV0Y2hpbmcgPSgpPT57cmV0dXJuIHN0cmV0Y2hpbmc7fTtcclxuXHJcbiAgICByZXR1cm4gdGhhdDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpZ3VyYXRvcjtcclxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhvaG8gb24gMjAxOC4gNy4gMy4uXG4gKi9cblxuLyoqXG4gKiBAYnJpZWYgICBUaGlzIG1vZHVsZSBwcm92aWRlIGN1c3RvbSBldmVudHMuXG4gKiBAcGFyYW0gICBvYmplY3QgICAgQW4gb2JqZWN0IHRoYXQgcmVxdWlyZXMgY3VzdG9tIGV2ZW50cy5cbiAqXG4gKiAqL1xuXG5jb25zdCBFdmVudEVtaXR0ZXIgPSBmdW5jdGlvbihvYmplY3Qpe1xuICAgIGxldCB0aGF0ID0gb2JqZWN0O1xuICAgIGxldCBfZXZlbnRzID1bXTtcblxuICAgIGNvbnN0IHRyaWdnZXJFdmVudHMgPSBmdW5jdGlvbihldmVudHMsIGFyZ3MsIGNvbnRleHQpe1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBsZW5ndGggPSBldmVudHMubGVuZ3RoO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKyspe1xuICAgICAgICAgICAgbGV0IGV2ZW50ID0gZXZlbnRzW2ldO1xuICAgICAgICAgICAgZXZlbnQubGlzdGVuZXIuYXBwbHkoICggZXZlbnQuY29udGV4dCB8fCBjb250ZXh0ICksIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoYXQub24gPSBmdW5jdGlvbihuYW1lLCBsaXN0ZW5lciwgY29udGV4dCl7XG4gICAgICAgIChfZXZlbnRzW25hbWVdIHx8IChfZXZlbnRzW25hbWVdPVtdKSApLnB1c2goeyBsaXN0ZW5lcjogbGlzdGVuZXIgICwgY29udGV4dCA6IGNvbnRleHR9KTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgfTtcbiAgICB0aGF0LnRyaWdnZXIgPSBmdW5jdGlvbihuYW1lKXtcbiAgICAgICAgaWYoIV9ldmVudHMpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IF9ldmVudHNbbmFtZV07XG4gICAgICAgIGNvbnN0IGFsbEV2ZW50cyA9IF9ldmVudHMuYWxsO1xuXG4gICAgICAgIGlmKGV2ZW50cyl7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnRzKGV2ZW50cywgYXJncywgdGhhdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoYWxsRXZlbnRzKXtcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudHMoYWxsRXZlbnRzLCBhcmd1bWVudHMsIHRoYXQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGF0Lm9mZiA9IGZ1bmN0aW9uKG5hbWUsIGxpc3RlbmVyLCBjb250ZXh0KXtcbiAgICAgICAgaWYoIV9ldmVudHMpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFuYW1lICYmICFsaXN0ZW5lciAmJiAhY29udGV4dCkgIHtcbiAgICAgICAgICAgIF9ldmVudHMgPSBbXTtcbiAgICAgICAgICAgIHJldHVybiB0aGF0O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmFtZXMgPSBuYW1lID8gW25hbWVdIDogT2JqZWN0LmtleXMoX2V2ZW50cyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbmFtZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBuYW1lID0gbmFtZXNbaV07XG4gICAgICAgICAgICBjb25zdCBldmVudHMgPSBfZXZlbnRzW25hbWVdO1xuICAgICAgICAgICAgaWYgKGV2ZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJldGFpbiA9IF9ldmVudHNbbmFtZV0gPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIgIHx8IGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAsIGsgPSBldmVudHMubGVuZ3RoOyBqIDwgazsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobGlzdGVuZXIgJiYgbGlzdGVuZXIgIT09IGV2ZW50Lmxpc3RlbmVyICYmIGxpc3RlbmVyICE9PSBldmVudC5saXN0ZW5lci5saXN0ZW5lciAgJiYgbGlzdGVuZXIgIT09IGV2ZW50Lmxpc3RlbmVyLl9jYWxsYmFjaylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fChjb250ZXh0ICYmIGNvbnRleHQgIT09IGV2ZW50LmNvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaW4ucHVzaChldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFyZXRhaW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfZXZlbnRzW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhhdDtcbiAgICB9O1xuICAgIHRoYXQub25jZSA9IGZ1bmN0aW9uKG5hbWUsIGxpc3RlbmVyLCBjb250ZXh0KXtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgY29uc3Qgb25jZUNhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoY291bnQrKykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoYXQub2ZmKG5hbWUsIG9uY2VDYWxsYmFjayk7XG4gICAgICAgICAgICBsaXN0ZW5lci5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgICBvbmNlQ2FsbGJhY2suX2xpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgICAgIHJldHVybiB0aGF0Lm9uKG5hbWUsIG9uY2VDYWxsYmFjaywgY29udGV4dCk7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGF0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXI7IiwiaW1wb3J0IF8gZnJvbSAndXRpbHMvdW5kZXJzY29yZSc7XG5cbi8qKlxuICogQGJyaWVmICAgVGhpcyBleGVjdXRlcyB0aGUgaW5wdXQgY29tbWFuZHMgYXQgYSBzcGVjaWZpYyBwb2ludCBpbiB0aW1lLlxuICogQHBhcmFtICAgaW5zdGFuY2VcbiAqIEBwYXJhbSAgIHF1ZXVlZENvbW1hbmRzXG4gKiAqL1xuY29uc3QgTGF6eUNvbW1hbmRFeGVjdXRvciA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgcXVldWVkQ29tbWFuZHMpIHtcbiAgICBsZXQgY29tbWFuZFF1ZXVlID0gW107XG4gICAgbGV0IHVuZGVjb3JhdGVkTWV0aG9kcyA9IHt9O1xuICAgIGxldCBleGVjdXRlTW9kZSA9IGZhbHNlO1xuICAgIGxldCB0aGF0ID0ge307XG4gICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiTGF6eUNvbW1hbmRFeGVjdXRvciBsb2FkZWQuXCIpO1xuICAgIHF1ZXVlZENvbW1hbmRzLmZvckVhY2goKGNvbW1hbmQpID0+IHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gaW5zdGFuY2VbY29tbWFuZF07XG4gICAgICAgIHVuZGVjb3JhdGVkTWV0aG9kc1tjb21tYW5kXSA9IG1ldGhvZCB8fCBmdW5jdGlvbigpe307XG5cbiAgICAgICAgaW5zdGFuY2VbY29tbWFuZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgICAgICAgICBpZiAoIWV4ZWN1dGVNb2RlKSB7XG4gICAgICAgICAgICAgICAgLy9jb21tYW5kUXVldWUucHVzaCh7IGNvbW1hbmQsIGFyZ3MgfSk7XG4gICAgICAgICAgICAgICAgdGhhdC5hZGRRdWV1ZShjb21tYW5kLCBhcmdzKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGVjdXRlUXVldWVkQ29tbWFuZHMoKTtcbiAgICAgICAgICAgICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZC5hcHBseSh0aGF0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgdmFyIGV4ZWN1dGVRdWV1ZWRDb21tYW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2hpbGUgKGNvbW1hbmRRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvbW1hbmQsIGFyZ3MgfSA9IGNvbW1hbmRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgKHVuZGVjb3JhdGVkTWV0aG9kc1tjb21tYW5kXSB8fCBpbnN0YW5jZVtjb21tYW5kXSkuYXBwbHkoaW5zdGFuY2UsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhhdC5zZXRFeGVjdXRlTW9kZSA9IChtb2RlKSA9PiB7XG4gICAgICAgIGV4ZWN1dGVNb2RlID0gbW9kZTtcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiTGF6eUNvbW1hbmRFeGVjdXRvciA6IHNldEV4ZWN1dGVNb2RlKClcIiwgbW9kZSk7XG4gICAgfTtcbiAgICB0aGF0LmdldFVuZGVjb3JhdGVkTWV0aG9kcyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkxhenlDb21tYW5kRXhlY3V0b3IgOiBnZXRVbmRlY29yYXRlZE1ldGhvZHMoKVwiLCB1bmRlY29yYXRlZE1ldGhvZHMpO1xuICAgICAgICByZXR1cm4gdW5kZWNvcmF0ZWRNZXRob2RzO1xuICAgIH1cbiAgICB0aGF0LmdldFF1ZXVlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiTGF6eUNvbW1hbmRFeGVjdXRvciA6IGdldFF1ZXVlKClcIiwgZ2V0UXVldWUpO1xuICAgICAgICByZXR1cm4gY29tbWFuZFF1ZXVlO1xuICAgIH1cbiAgICB0aGF0LmFkZFF1ZXVlID0gZnVuY3Rpb24oY29tbWFuZCwgYXJncyl7XG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkxhenlDb21tYW5kRXhlY3V0b3IgOiBhZGRRdWV1ZSgpXCIsIGNvbW1hbmQsIGFyZ3MpO1xuICAgICAgICBjb21tYW5kUXVldWUucHVzaCh7IGNvbW1hbmQsIGFyZ3MgfSk7XG4gICAgfVxuXG4gICAgdGhhdC5mbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkxhenlDb21tYW5kRXhlY3V0b3IgOiBmbHVzaCgpXCIpO1xuICAgICAgICBleGVjdXRlUXVldWVkQ29tbWFuZHMoKTtcbiAgICB9O1xuICAgIHRoYXQuZW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiTGF6eUNvbW1hbmRFeGVjdXRvciA6IGVtcHR5KClcIik7XG4gICAgICAgIGNvbW1hbmRRdWV1ZS5sZW5ndGggPSAwO1xuICAgIH07XG4gICAgdGhhdC5vZmYgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiTGF6eUNvbW1hbmRFeGVjdXRvciA6IG9mZigpXCIpO1xuICAgICAgICBxdWV1ZWRDb21tYW5kcy5mb3JFYWNoKChjb21tYW5kKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRob2QgPSB1bmRlY29yYXRlZE1ldGhvZHNbY29tbWFuZF07XG4gICAgICAgICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2VbY29tbWFuZF0gPSBtZXRob2Q7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHVuZGVjb3JhdGVkTWV0aG9kc1tjb21tYW5kXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG4gICAgLy9SdW4gb25jZSBhdCB0aGUgZW5kXG4gICAgdGhhdC5yZW1vdmVBbmRFeGN1dGVPbmNlID0gZnVuY3Rpb24oY29tbWFuZF8pe1xuICAgICAgICBsZXQgY29tbWFuZFF1ZXVlSXRlbSA9IF8uZmluZFdoZXJlKGNvbW1hbmRRdWV1ZSwge2NvbW1hbmQgOiBjb21tYW5kX30pO1xuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJMYXp5Q29tbWFuZEV4ZWN1dG9yIDogcmVtb3ZlQW5kRXhjdXRlT25jZSgpXCIsIGNvbW1hbmRfKTtcbiAgICAgICAgY29tbWFuZFF1ZXVlLnNwbGljZShfLmZpbmRJbmRleChjb21tYW5kUXVldWUsIHtjb21tYW5kIDogY29tbWFuZF99KSwgMSk7XG5cbiAgICAgICAgY29uc3QgbWV0aG9kID0gdW5kZWNvcmF0ZWRNZXRob2RzW2NvbW1hbmRfXTtcbiAgICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwicmVtb3ZlQ29tbWFuZCgpXCIpO1xuICAgICAgICAgICAgaWYoY29tbWFuZFF1ZXVlSXRlbSl7XG4gICAgICAgICAgICAgICAgKG1ldGhvZHx8IGluc3RhbmNlW2NvbW1hbmRfXSkuYXBwbHkoaW5zdGFuY2UsIGNvbW1hbmRRdWV1ZUl0ZW0uYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnN0YW5jZVtjb21tYW5kX10gPSBtZXRob2Q7XG4gICAgICAgICAgICBkZWxldGUgdW5kZWNvcmF0ZWRNZXRob2RzW2NvbW1hbmRfXTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGF0LmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiTGF6eUNvbW1hbmRFeGVjdXRvciA6IGRlc3Ryb3koKVwiKTtcbiAgICAgICAgdGhhdC5vZmYoKTtcbiAgICAgICAgdGhhdC5lbXB0eSgpO1xuICAgIH07XG4gICAgcmV0dXJuIHRoYXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhenlDb21tYW5kRXhlY3V0b3I7IiwiaW1wb3J0IHtpc1J0bXAsIGlzV2ViUlRDLCBpc0Rhc2h9IGZyb20gXCJ1dGlscy92YWxpZGF0b3JcIjtcclxuXHJcbi8qKlxyXG4gKiBAYnJpZWYgICBUaGlzIGZpbmRzIHRoZSBwcm92aWRlciB0aGF0IG1hdGNoZXMgdGhlIGlucHV0IHNvdXJjZS5cclxuICogQHBhcmFtXHJcbiAqICovXHJcblxyXG5jb25zdCBTdXBwb3J0Q2hlY2tlciA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCB0aGF0ID0ge307XHJcbiAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJTdXBwb3J0Q2hlY2tlciBsb2FkZWQuXCIpO1xyXG4gICAgY29uc3Qgc3VwcG9ydExpc3QgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnaHRtbDUnLFxyXG4gICAgICAgICAgICBjaGVja1N1cHBvcnQ6IGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IE1pbWVUeXBlcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhYWM6ICdhdWRpby9tcDQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1wNDogJ3ZpZGVvL21wNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZjR2OiAndmlkZW8vbXA0JyxcclxuICAgICAgICAgICAgICAgICAgICBtNHY6ICd2aWRlby9tcDQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vdjogJ3ZpZGVvL21wNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbXAzOiAnYXVkaW8vbXBlZycsXHJcbiAgICAgICAgICAgICAgICAgICAgbXBlZzogJ2F1ZGlvL21wZWcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9ndjogJ3ZpZGVvL29nZycsXHJcbiAgICAgICAgICAgICAgICAgICAgb2dnOiAndmlkZW8vb2dnJyxcclxuICAgICAgICAgICAgICAgICAgICBvZ2E6ICd2aWRlby9vZ2cnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZvcmJpczogJ3ZpZGVvL29nZycsXHJcbiAgICAgICAgICAgICAgICAgICAgd2VibTogJ3ZpZGVvL3dlYm0nLFxyXG4gICAgICAgICAgICAgICAgICAgIGY0YTogJ3ZpZGVvL2FhYycsXHJcbiAgICAgICAgICAgICAgICAgICAgbTN1ODogJ2FwcGxpY2F0aW9uL3ZuZC5hcHBsZS5tcGVndXJsJyxcclxuICAgICAgICAgICAgICAgICAgICBtM3U6ICdhcHBsaWNhdGlvbi92bmQuYXBwbGUubXBlZ3VybCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGxzOiAnYXBwbGljYXRpb24vdm5kLmFwcGxlLm1wZWd1cmwnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKVxyXG4gICAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2aWRlby5jYW5QbGF5VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gc291cmNlLmZpbGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gc291cmNlLnR5cGU7XHJcbiAgICAgICAgICAgICAgICBpZighdHlwZSl7cmV0dXJuIGZhbHNlO31cclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbWVUeXBlID0gc291cmNlLm1pbWVUeXBlIHx8IE1pbWVUeXBlc1t0eXBlXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNSdG1wKGZpbGUsIHR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGlzV2ViUlRDKGZpbGUsIHR5cGUpKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFtaW1lVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gISF2aWRlby5jYW5QbGF5VHlwZShtaW1lVHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ3dlYnJ0YycsXHJcbiAgICAgICAgICAgIGNoZWNrU3VwcG9ydDogZnVuY3Rpb24gKHNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW8gPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpXHJcbiAgICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZpZGVvLmNhblBsYXlUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBzb3VyY2UuZmlsZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBzb3VyY2UudHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihpc1dlYlJUQyhmaWxlLCB0eXBlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2Rhc2gnLFxyXG4gICAgICAgICAgICBjaGVja1N1cHBvcnQ6IGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBzb3VyY2UuZmlsZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL21wZCBhcHBsaWNhdGlvbi9kYXNoK3htbFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHNvdXJjZS50eXBlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRGFzaChmaWxlLCB0eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdobHMnLFxyXG4gICAgICAgICAgICBjaGVja1N1cHBvcnQ6IGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKVxyXG4gICAgICAgICAgICAgICAgfSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vdGhpcyBtZXRob2QgZnJvbSBobHMuanNcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzSGxzU3VwcG9ydCA9ICgpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRNZWRpYVNvdXJjZSgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93Lk1lZGlhU291cmNlIHx8IHdpbmRvdy5XZWJLaXRNZWRpYVNvdXJjZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWVkaWFTb3VyY2UgPSBnZXRNZWRpYVNvdXJjZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzb3VyY2VCdWZmZXIgPSB3aW5kb3cuU291cmNlQnVmZmVyIHx8IHdpbmRvdy5XZWJLaXRTb3VyY2VCdWZmZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzVHlwZVN1cHBvcnRlZCA9IG1lZGlhU291cmNlICYmIHR5cGVvZiBtZWRpYVNvdXJjZS5pc1R5cGVTdXBwb3J0ZWQgPT09ICdmdW5jdGlvbicgJiYgbWVkaWFTb3VyY2UuaXNUeXBlU3VwcG9ydGVkKCd2aWRlby9tcDQ7IGNvZGVjcz1cImF2YzEuNDJFMDFFLG1wNGEuNDAuMlwiJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIFNvdXJjZUJ1ZmZlciBpcyBleHBvc2VkIGVuc3VyZSBpdHMgQVBJIGlzIHZhbGlkXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2FmYXJpIGFuZCBvbGQgdmVyc2lvbiBvZiBDaHJvbWUgZG9lIG5vdCBleHBvc2UgU291cmNlQnVmZmVyIGdsb2JhbGx5IHNvIGNoZWNraW5nIFNvdXJjZUJ1ZmZlci5wcm90b3R5cGUgaXMgaW1wb3NzaWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzb3VyY2VCdWZmZXJWYWxpZEFQSSA9ICFzb3VyY2VCdWZmZXIgfHwgc291cmNlQnVmZmVyLnByb3RvdHlwZSAmJiB0eXBlb2Ygc291cmNlQnVmZmVyLnByb3RvdHlwZS5hcHBlbmRCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHNvdXJjZUJ1ZmZlci5wcm90b3R5cGUucmVtb3ZlID09PSAnZnVuY3Rpb24nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIWlzVHlwZVN1cHBvcnRlZCAmJiAhIXNvdXJjZUJ1ZmZlclZhbGlkQVBJO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIC8vUmVtb3ZlIHRoaXMgJyEhdmlkZW8uY2FuUGxheVR5cGUoJ2FwcGxpY2F0aW9uL3ZuZC5hcHBsZS5tcGVndXJsJyknIGlmIHlvdSB3YW50IHRvIHVzZSBobHNqcy5cclxuICAgICAgICAgICAgICAgIHJldHVybiBpc0hsc1N1cHBvcnQoKSAmJiAhIXZpZGVvLmNhblBsYXlUeXBlKCdhcHBsaWNhdGlvbi92bmQuYXBwbGUubXBlZ3VybCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdydG1wJyxcclxuICAgICAgICAgICAgY2hlY2tTdXBwb3J0OiBmdW5jdGlvbiAoc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gc291cmNlLmZpbGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gc291cmNlLnR5cGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNSdG1wKGZpbGUsIHR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIHRoYXQuZmluZFByb3ZpZGVyTmFtZUJ5U291cmNlID0gKHNvcnVjZV8pID0+IHtcclxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJTdXBwb3J0Q2hlY2tlciA6IGZpbmRQcm92aWRlck5hbWVCeVNvdXJjZSgpXCIsIHNvcnVjZV8pO1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IChzb3J1Y2VfID09PSBPYmplY3Qoc29ydWNlXykpID8gc29ydWNlXyA6IHt9O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzdXBwb3J0TGlzdC5sZW5ndGg7IGkgKyspe1xyXG4gICAgICAgICAgICBpZihzdXBwb3J0TGlzdFtpXS5jaGVja1N1cHBvcnQoc291cmNlKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VwcG9ydExpc3RbaV0ubmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGF0LmZpbmRQcm92aWRlck5hbWVzQnlQbGF5bGlzdCA9IChwbGF5bGlzdF8pID0+IHtcclxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJTdXBwb3J0Q2hlY2tlciA6IGZpbmRQcm92aWRlck5hbWVzQnlQbGF5bGlzdCgpXCIsIHBsYXlsaXN0Xyk7XHJcbiAgICAgICAgbGV0IHN1cHBvcnROYW1lcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBwbGF5bGlzdF8ubGVuZ3RoOyBpLS07KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBwbGF5bGlzdF9baV07XHJcbiAgICAgICAgICAgIGxldCBzb3VyY2UgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgaXRlbS5zb3VyY2VzLmxlbmd0aDsgaiArKyl7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBpdGVtLnNvdXJjZXNbal07XHJcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VwcG9ydGVkID0gdGhhdC5maW5kUHJvdmlkZXJOYW1lQnlTb3VyY2Uoc291cmNlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnROYW1lcy5wdXNoKHN1cHBvcnRlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdXBwb3J0TmFtZXM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoYXQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdXBwb3J0Q2hlY2tlcjtcclxuIiwiLy8gU1RBVEVcclxuZXhwb3J0IGNvbnN0IFNUQVRFX0JVRkZFUklORyA9ICdidWZmZXJpbmcnO1xyXG5leHBvcnQgY29uc3QgU1RBVEVfSURMRSA9ICdpZGxlJztcclxuZXhwb3J0IGNvbnN0IFNUQVRFX0NPTVBMRVRFID0gJ2NvbXBsZXRlJztcclxuZXhwb3J0IGNvbnN0IFNUQVRFX1BBVVNFRCA9ICdwYXVzZWQnO1xyXG5leHBvcnQgY29uc3QgU1RBVEVfUExBWUlORyA9ICdwbGF5aW5nJztcclxuZXhwb3J0IGNvbnN0IFNUQVRFX0VSUk9SID0gJ2Vycm9yJztcclxuZXhwb3J0IGNvbnN0IFNUQVRFX0xPQURJTkcgPSAnbG9hZGluZyc7XHJcbmV4cG9ydCBjb25zdCBTVEFURV9TVEFMTEVEID0gJ3N0YWxsZWQnO1xyXG5cclxuXHJcbi8vIFBST1ZJREVSXHJcbmV4cG9ydCBjb25zdCBQUk9WSURFUl9IVE1MNSA9ICdodG1sNSc7XHJcbmV4cG9ydCBjb25zdCBQUk9WSURFUl9XRUJSVEMgPSAnd2VicnRjJztcclxuZXhwb3J0IGNvbnN0IFBST1ZJREVSX0RBU0ggPSAnZGFzaCc7XHJcbmV4cG9ydCBjb25zdCBQUk9WSURFUl9ITFMgPSAnaGxzJztcclxuZXhwb3J0IGNvbnN0IFBST1ZJREVSX1JUTVAgPSAncnRtcCc7XHJcblxyXG4vLyBFVkVOVFNcclxuZXhwb3J0IGNvbnN0IENPTlRFTlRfQ09NUExFVEUgPSBTVEFURV9DT01QTEVURTtcclxuZXhwb3J0IGNvbnN0IFJFQURZID0gJ3JlYWR5JztcclxuZXhwb3J0IGNvbnN0IERFU1RST1kgPSAnZGVzdHJveSc7XHJcbmV4cG9ydCBjb25zdCBDT05URU5UX1NFRUsgPSAnc2Vlayc7XHJcbmV4cG9ydCBjb25zdCBDT05URU5UX0JVRkZFUl9GVUxMID0gJ2J1ZmZlckZ1bGwnO1xyXG5leHBvcnQgY29uc3QgRElTUExBWV9DTElDSyA9ICdkaXNwbGF5Q2xpY2snO1xyXG5leHBvcnQgY29uc3QgQ09OVEVOVF9MT0FERUQgPSAnbG9hZGVkJztcclxuZXhwb3J0IGNvbnN0IENPTlRFTlRfU0VFS0VEID0gJ3NlZWtlZCc7XHJcbmV4cG9ydCBjb25zdCBORVRXT1JLX1VOU1RBQkxFRCA9ICd1bnN0YWJsZU5ldHdvcmsnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVSUk9SID0gJ2Vycm9yJztcclxuXHJcbi8vIFNUQVRFIE9GIFBMQVlFUlxyXG5leHBvcnQgY29uc3QgUExBWUVSX1NUQVRFID0gJ3N0YXRlQ2hhbmdlZCc7XHJcbmV4cG9ydCBjb25zdCBQTEFZRVJfQ09NUExFVEUgPSBTVEFURV9DT01QTEVURTtcclxuZXhwb3J0IGNvbnN0IFBMQVlFUl9QQVVTRSA9ICdwYXVzZSc7XHJcbmV4cG9ydCBjb25zdCBQTEFZRVJfUExBWSA9ICdwbGF5JztcclxuXHJcbmV4cG9ydCBjb25zdCBDT05URU5UX0JVRkZFUiA9ICdidWZmZXJDaGFuZ2VkJztcclxuZXhwb3J0IGNvbnN0IENPTlRFTlRfVElNRSA9ICd0aW1lJztcclxuZXhwb3J0IGNvbnN0IENPTlRFTlRfUkFURV9DSEFOR0UgPSAncmF0ZWNoYW5nZSc7XHJcbmV4cG9ydCBjb25zdCBDT05URU5UX1ZPTFVNRSA9ICd2b2x1bWVDaGFuZ2VkJztcclxuZXhwb3J0IGNvbnN0IENPTlRFTlRfTVVURSA9ICdtdXRlJztcclxuZXhwb3J0IGNvbnN0IENPTlRFTlRfTUVUQSA9ICdtZXRhQ2hhbmdlZCc7XHJcbmV4cG9ydCBjb25zdCBDT05URU5UX0xFVkVMUyA9ICdxdWFsaXR5TGV2ZWxDaGFuZ2VkJztcclxuZXhwb3J0IGNvbnN0IENPTlRFTlRfTEVWRUxfQ0hBTkdFRCA9ICdjdXJyZW50UXVhbGl0eUxldmVsQ2hhbmdlZCc7XHJcbmV4cG9ydCBjb25zdCBQTEFZQkFDS19SQVRFX0NIQU5HRUQgPSAncGxheWJhY2tSYXRlQ2hhbmdlZCc7XHJcbmV4cG9ydCBjb25zdCBDT05URU5UX0NBUFRJT05fQ1VFX0NIQU5HRUQgPSAnY3VlQ2hhbmdlZCc7XHJcbmV4cG9ydCBjb25zdCBDT05URU5UX0NBUFRJT05fQ0hBTkdFRCA9ICdjYXB0aW9uQ2hhbmdlZCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IElOSVRfRVJST1IgPSAxMDA7XHJcbmV4cG9ydCBjb25zdCBQTEFZRVJfVU5LTldPTl9FUlJPUiA9IDMwMDtcclxuZXhwb3J0IGNvbnN0IFBMQVlFUl9VTktOV09OX09QRVJBVElPTl9FUlJPUiA9IDMwMTtcclxuZXhwb3J0IGNvbnN0IFBMQVlFUl9VTktOV09OX05FV1dPUktfRVJST1IgPSAzMDI7XHJcbmV4cG9ydCBjb25zdCBQTEFZRVJfVU5LTldPTl9ERUNPREVfRVJST1IgPSAzMDM7XHJcbmV4cG9ydCBjb25zdCBQTEFZRVJfRklMRV9FUlJPUiA9IDMwNDtcclxuZXhwb3J0IGNvbnN0IFBMQVlFUl9DQVBUSU9OX0VSUk9SID0gMzA1O1xyXG5leHBvcnQgY29uc3QgUExBWUVSX1dFQlJUQ19XU19FUlJPUiA9IDUwMTtcclxuZXhwb3J0IGNvbnN0IFBMQVlFUl9XRUJSVENfV1NfQ0xPU0VEID0gNTAyO1xyXG5leHBvcnQgY29uc3QgUExBWUVSX1dFQlJUQ19BRERfSUNFQ0FORElEQVRFX0VSUk9SID0gNTAzO1xyXG5leHBvcnQgY29uc3QgUExBWUVSX1dFQlJUQ19TRVRfUkVNT1RFX0RFU0NfRVJST1IgPSA1MDQ7XHJcbmV4cG9ydCBjb25zdCBQTEFZRVJfV0VCUlRDX0NSRUFURV9BTlNXRVJfRVJST1IgPSA1MDU7XHJcbmV4cG9ydCBjb25zdCBQTEFZRVJfV0VCUlRDX1NFVF9MT0NBTF9ERVNDX0VSUk9SID0gNTA2O1xyXG5leHBvcnQgY29uc3QgUExBWUVSX1dFQlJUQ19ORVRXT1JLX1NMT1cgPSA1MTA7XHJcbiIsImltcG9ydCBfIGZyb20gXCJ1dGlscy91bmRlcnNjb3JlXCI7XHJcbmltcG9ydCB7aXNSdG1wLCBpc1dlYlJUQywgaXNEYXNoIH0gZnJvbSBcInV0aWxzL3ZhbGlkYXRvclwiO1xyXG5pbXBvcnQge2V4dHJhY3RFeHRlbnNpb24gLHRyaW19IGZyb20gXCIuLi8uLi91dGlscy9zdHJpbmdzXCI7XHJcbmltcG9ydCBTdXBwb3J0Q2hlY2tlciBmcm9tIFwiLi4vU3VwcG9ydENoZWNrZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBAYnJpZWYgICBUaGlzIG1hbmFnZXMgUGxheWxpc3Qgb3IgU291cmNlcy5cclxuICogQHBhcmFtXHJcbiAqXHJcbiAqICovXHJcbmNvbnN0IE1hbmFnZXIgPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgdGhhdCA9IHt9O1xyXG4gICAgbGV0IGN1cnJlbnRQbGF5bGlzdCA9IFtdO1xyXG4gICAgbGV0IHN1cHBvcnRDaGVja2VyID0gU3VwcG9ydENoZWNrZXIoKTtcclxuXHJcbiAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJQbGF5bGlzdE1hbmFnZXIgbG9hZGVkLlwiKTtcclxuXHJcbiAgICBjb25zdCBtYWtlUHJldHR5U291cmNlID0gZnVuY3Rpb24oc291cmNlXyl7XHJcbiAgICAgICAgaWYgKCFzb3VyY2VfIHx8ICFzb3VyY2VfLmZpbGUgJiYgIShzb3VyY2VfLmhvc3QgfHwgc291cmNlXy5hcHBsaWNhdGlvbiB8fCBzb3VyY2VfLnN0cmVhbSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNvdXJjZSA9IE9iamVjdC5hc3NpZ24oe30sIHsgJ2RlZmF1bHQnOiBmYWxzZSB9LCBzb3VyY2VfKTtcclxuICAgICAgICBzb3VyY2UuZmlsZSA9IHRyaW0oJycgKyBzb3VyY2UuZmlsZSk7XHJcblxyXG4gICAgICAgIGlmKHNvdXJjZS5ob3N0ICYmIHNvdXJjZS5hcHBsaWNhdGlvbiAmJiBzb3VyY2Uuc3RyZWFtKXtcclxuICAgICAgICAgICAgc291cmNlLmZpbGUgPSBzb3VyY2UuaG9zdCArIFwiL1wiICsgc291cmNlLmFwcGxpY2F0aW9uICsgXCIvc3RyZWFtL1wiICsgc291cmNlLnN0cmVhbTtcclxuICAgICAgICAgICAgZGVsZXRlIHNvdXJjZS5ob3N0O1xyXG4gICAgICAgICAgICBkZWxldGUgc291cmNlLmFwcGxpY2F0aW9uO1xyXG4gICAgICAgICAgICBkZWxldGUgc291cmNlLnN0cmVhbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1pbWV0eXBlUmVnRXggPSAvXlteL10rXFwvKD86eC0pPyhbXi9dKykkLztcclxuXHJcbiAgICAgICAgaWYgKG1pbWV0eXBlUmVnRXgudGVzdChzb3VyY2UudHlwZSkpIHtcclxuICAgICAgICAgICAgLy8gaWYgdHlwZSBpcyBnaXZlbiBhcyBhIG1pbWV0eXBlXHJcbiAgICAgICAgICAgIHNvdXJjZS5taW1lVHlwZSA9IHNvdXJjZS50eXBlO1xyXG4gICAgICAgICAgICBzb3VyY2UudHlwZSA9IHNvdXJjZS50eXBlLnJlcGxhY2UobWltZXR5cGVSZWdFeCwgJyQxJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpc1J0bXAoc291cmNlLmZpbGUpKXtcclxuICAgICAgICAgICAgc291cmNlLnR5cGUgPSAncnRtcCc7XHJcbiAgICAgICAgfWVsc2UgaWYoaXNXZWJSVEMoc291cmNlLmZpbGUpKXtcclxuICAgICAgICAgICAgc291cmNlLnR5cGUgPSAnd2VicnRjJztcclxuICAgICAgICB9ZWxzZSBpZihpc0Rhc2goc291cmNlLmZpbGUsIHNvdXJjZS50eXBlKSl7XHJcbiAgICAgICAgICAgIHNvdXJjZS50eXBlID0gJ2Rhc2gnO1xyXG4gICAgICAgIH1lbHNlIGlmICghc291cmNlLnR5cGUpIHtcclxuICAgICAgICAgICAgc291cmNlLnR5cGUgPSBleHRyYWN0RXh0ZW5zaW9uKHNvdXJjZS5maWxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc291cmNlLnR5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbm9ybWFsaXplIHR5cGVzXHJcbiAgICAgICAgc3dpdGNoIChzb3VyY2UudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdtM3U4JzpcclxuICAgICAgICAgICAgY2FzZSAndm5kLmFwcGxlLm1wZWd1cmwnOlxyXG4gICAgICAgICAgICAgICAgc291cmNlLnR5cGUgPSAnaGxzJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtNGEnOlxyXG4gICAgICAgICAgICAgICAgc291cmNlLnR5cGUgPSAnYWFjJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzbWlsJzpcclxuICAgICAgICAgICAgICAgIHNvdXJjZS50eXBlID0gJ3J0bXAnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICBpZiAoc291cmNlW2tleV0gPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgc291cmNlW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGhhdC5zZXRQbGF5bGlzdCA9KHBsYXlsaXN0KSA9PntcclxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJQbGF5bGlzdE1hbmFnZXIgc2V0UGxheWxpc3QoKSBcIiwgcGxheWxpc3QpO1xyXG4gICAgICAgIGNvbnN0IHByZXR0aWVkUGxheWxpc3QgPSAoXy5pc0FycmF5KHBsYXlsaXN0KSA/IHBsYXlsaXN0IDogW3BsYXlsaXN0XSkubWFwKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICBpZighXy5pc0FycmF5KGl0ZW0udHJhY2tzKSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGl0ZW0udHJhY2tzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwbGF5bGlzdEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgdHJhY2tzOiBbXVxyXG4gICAgICAgICAgICB9LCBpdGVtICk7XHJcblxyXG4gICAgICAgICAgICBpZigocGxheWxpc3RJdGVtLnNvdXJjZXMgPT09IE9iamVjdChwbGF5bGlzdEl0ZW0uc291cmNlcykpICYmICFfLmlzQXJyYXkocGxheWxpc3RJdGVtLnNvdXJjZXMpKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5bGlzdEl0ZW0uc291cmNlcyA9IFttYWtlUHJldHR5U291cmNlKHBsYXlsaXN0SXRlbS5zb3VyY2VzKV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCFfLmlzQXJyYXkocGxheWxpc3RJdGVtLnNvdXJjZXMpIHx8IHBsYXlsaXN0SXRlbS5zb3VyY2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubGV2ZWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWxpc3RJdGVtLnNvdXJjZXMgPSBpdGVtLmxldmVscztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWxpc3RJdGVtLnNvdXJjZXMgPSBbbWFrZVByZXR0eVNvdXJjZShpdGVtKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGxheWxpc3RJdGVtLnNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBzb3VyY2UgPSBwbGF5bGlzdEl0ZW0uc291cmNlc1tpXTtcclxuICAgICAgICAgICAgICAgIGxldCBwcmV0dHlTb3VyY2UgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdFNvdXJjZSA9IHNvdXJjZS5kZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2UuZGVmYXVsdCA9IChkZWZhdWx0U291cmNlLnRvU3RyaW5nKCkgPT09ICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZS5kZWZhdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHNvdXJjZSBkb2Vzbid0IGhhdmUgYSBsYWJlbCwgbnVtYmVyIGl0XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBsYXlsaXN0SXRlbS5zb3VyY2VzW2ldLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWxpc3RJdGVtLnNvdXJjZXNbaV0ubGFiZWwgPSBwbGF5bGlzdEl0ZW0uc291cmNlc1tpXS50eXBlK1wiLVwiK2kudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwcmV0dHlTb3VyY2UgPSBtYWtlUHJldHR5U291cmNlKHBsYXlsaXN0SXRlbS5zb3VyY2VzW2ldKTtcclxuICAgICAgICAgICAgICAgIGlmKHN1cHBvcnRDaGVja2VyLmZpbmRQcm92aWRlck5hbWVCeVNvdXJjZShwcmV0dHlTb3VyY2UpKXtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdEl0ZW0uc291cmNlc1tpXSA9IHByZXR0eVNvdXJjZTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlsaXN0SXRlbS5zb3VyY2VzW2ldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGxheWxpc3RJdGVtLnNvdXJjZXMgPSBwbGF5bGlzdEl0ZW0uc291cmNlcy5maWx0ZXIoc291cmNlID0+ICEhc291cmNlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHQg6rCAIOyXhuydhOuVjCB3ZWJydGPqsIAg7J6I64uk66m0IHdlYnJ0YyBkZWZhdWx0IDogdHJ1ZeuhnCDsnpDrj5kg7ISk7KCVXHJcbiAgICAgICAgICAgIC8qbGV0IGhhdmVEZWZhdWx0ID0gXy5maW5kKHBsYXlsaXN0SXRlbS5zb3VyY2VzLCBmdW5jdGlvbihzb3VyY2Upe3JldHVybiBzb3VyY2UuZGVmYXVsdCA9PSB0cnVlO30pO1xyXG4gICAgICAgICAgICBsZXQgd2VicnRjU291cmNlID0gW107XHJcbiAgICAgICAgICAgIGlmKCFoYXZlRGVmYXVsdCl7XHJcbiAgICAgICAgICAgICAgICB3ZWJydGNTb3VyY2UgPSBfLmZpbmQocGxheWxpc3RJdGVtLnNvdXJjZXMsIGZ1bmN0aW9uKHNvdXJjZSl7cmV0dXJuIHNvdXJjZS50eXBlID09IFwid2VicnRjXCI7fSk7XHJcbiAgICAgICAgICAgICAgICBpZih3ZWJydGNTb3VyY2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIHdlYnJ0Y1NvdXJjZS5kZWZhdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSovXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmKCFfLmlzQXJyYXkocGxheWxpc3RJdGVtLnRyYWNrcykpe1xyXG4gICAgICAgICAgICAgICAgcGxheWxpc3RJdGVtLnRyYWNrcyA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKF8uaXNBcnJheShwbGF5bGlzdEl0ZW0uY2FwdGlvbnMpKXtcclxuICAgICAgICAgICAgICAgIHBsYXlsaXN0SXRlbS50cmFja3MgPSBwbGF5bGlzdEl0ZW0udHJhY2tzLmNvbmNhdChwbGF5bGlzdEl0ZW0uY2FwdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHBsYXlsaXN0SXRlbS5jYXB0aW9ucztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGxheWxpc3RJdGVtLnRyYWNrcyA9IHBsYXlsaXN0SXRlbS50cmFja3MubWFwKGZ1bmN0aW9uKHRyYWNrKXtcclxuICAgICAgICAgICAgICAgIGlmKCF0cmFjayB8fCAhdHJhY2suZmlsZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHtcclxuICAgICAgICAgICAgICAgICAgICAna2luZCc6ICdjYXB0aW9ucycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RlZmF1bHQnOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSwgdHJhY2spO1xyXG4gICAgICAgICAgICB9KS5maWx0ZXIodHJhY2sgPT4gISF0cmFjayk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcGxheWxpc3RJdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGN1cnJlbnRQbGF5bGlzdCA9IHByZXR0aWVkUGxheWxpc3Q7XHJcbiAgICAgICAgcmV0dXJuIHByZXR0aWVkUGxheWxpc3Q7XHJcbiAgICB9O1xyXG4gICAgdGhhdC5nZXRQbGF5bGlzdCA9ICgpID0+IHtcclxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJQbGF5bGlzdE1hbmFnZXIgZ2V0UGxheWxpc3QoKSBcIiwgY3VycmVudFBsYXlsaXN0KTtcclxuICAgICAgICByZXR1cm4gY3VycmVudFBsYXlsaXN0O1xyXG4gICAgfTtcclxuICAgIHRoYXQuZ2V0Q3VycmVudFNvdXJjZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9XZSBkbyBub3Qgc3VwcG9ydCBcIlBMQVlMSVNUXCIgbm90IHlldC4gU28gdGhpcyByZXR1cm5zIHBsYXlsaXN0IG9mIDAuXHJcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiUGxheWxpc3RNYW5hZ2VyIGdldEN1cnJlbnRTb3VyY2VzKCkgXCIsIGN1cnJlbnRQbGF5bGlzdFswXS5zb3VyY2VzKTtcclxuICAgICAgICByZXR1cm4gY3VycmVudFBsYXlsaXN0WzBdLnNvdXJjZXM7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGF0O1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXI7XHJcbiIsImltcG9ydCBTdXBwb3J0Q2hlY2tlciBmcm9tIFwiYXBpL1N1cHBvcnRDaGVja2VyXCI7XHJcbmltcG9ydCBQcm9taXNlLCB7cmVzb2x2ZWR9IGZyb20gXCJhcGkvc2hpbXMvcHJvbWlzZVwiO1xyXG5pbXBvcnQge0FwaVJ0bXBFeHBhbnNpb259IGZyb20gJ2FwaS9BcGlFeHBhbnNpb25zJztcclxuXHJcbi8qKlxyXG4gKiBAYnJpZWYgICBUaGlzIG1hbmFnZXMgcHJvdmlkZXIuXHJcbiAqIEBwYXJhbVxyXG4gKiAqL1xyXG5jb25zdCBDb250cm9sbGVyID0gZnVuY3Rpb24oKXtcclxuICAgIGxldCBzdXBwb3J0Q2hhY2tlciA9IFN1cHBvcnRDaGVja2VyKCk7XHJcbiAgICBjb25zdCBQcm92aWRlcnMgPSB7fTtcclxuXHJcbiAgICBjb25zdCB0aGF0ID0ge307XHJcbiAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJQcm92aWRlckNvbnRyb2xsZXIgbG9hZGVkLlwiKTtcclxuXHJcbiAgICBjb25zdCByZWdpc3RlUHJvdmlkZXIgPSAobmFtZSwgcHJvdmlkZXIpID0+e1xyXG4gICAgICAgIGlmKFByb3ZpZGVyc1tuYW1lXSl7XHJcbiAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIlByb3ZpZGVyQ29udHJvbGxlciBfcmVnaXN0ZXJQcm92aWRlcigpIFwiLCBuYW1lKTtcclxuICAgICAgICBQcm92aWRlcnNbbmFtZV0gPSBwcm92aWRlcjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgUHJvdmlkZXJMb2FkZXIgPXtcclxuICAgICAgICBodG1sNTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1aXJlLmVuc3VyZShbJ2FwaS9wcm92aWRlci9odG1sNS9IdG1sNSddLCBmdW5jdGlvbihyZXF1aXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSByZXF1aXJlKCdhcGkvcHJvdmlkZXIvaHRtbDUvSHRtbDUnKS5kZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVQcm92aWRlcihcImh0bWw1XCIsIHByb3ZpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvdmlkZXI7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayBlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgfSwnb3ZlbnBsYXllci5wcm92aWRlci5IdG1sNSdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdlYnJ0YyA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1aXJlLmVuc3VyZShbJ2FwaS9wcm92aWRlci9odG1sNS9XZWJSVEMnXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gcmVxdWlyZSgnYXBpL3Byb3ZpZGVyL2h0bWw1L1dlYlJUQycpLmRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZVByb3ZpZGVyKFwid2VicnRjXCIsIHByb3ZpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvdmlkZXI7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayBlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgfSwnb3ZlbnBsYXllci5wcm92aWRlci5XZWJSVENQcm92aWRlcidcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhc2ggOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWlyZS5lbnN1cmUoWydhcGkvcHJvdmlkZXIvaHRtbDUvRGFzaCddLCBmdW5jdGlvbihyZXF1aXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSByZXF1aXJlKCdhcGkvcHJvdmlkZXIvaHRtbDUvRGFzaCcpLmRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZVByb3ZpZGVyKFwiZGFzaFwiLCBwcm92aWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3ZpZGVyO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKXtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH0sJ292ZW5wbGF5ZXIucHJvdmlkZXIuRGFzaFByb3ZpZGVyJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGxzIDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmUuZW5zdXJlKFsnYXBpL3Byb3ZpZGVyL2h0bWw1L0hscyddLCBmdW5jdGlvbihyZXF1aXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSByZXF1aXJlKCdhcGkvcHJvdmlkZXIvaHRtbDUvSGxzJykuZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlUHJvdmlkZXIoXCJobHNcIiwgcHJvdmlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm92aWRlcjtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICB9LCdvdmVucGxheWVyLnByb3ZpZGVyLkhsc1Byb3ZpZGVyJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcnRtcCA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1aXJlLmVuc3VyZShbJ2FwaS9wcm92aWRlci9mbGFzaC9SdG1wJ10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm92aWRlciA9IHJlcXVpcmUoJ2FwaS9wcm92aWRlci9mbGFzaC9SdG1wJykuZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlUHJvdmlkZXIoXCJydG1wXCIsIHByb3ZpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvdmlkZXI7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayBlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgfSwnb3ZlbnBsYXllci5wcm92aWRlci5SdG1wUHJvdmlkZXInXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdGhhdC5sb2FkUHJvdmlkZXJzID0gKHBsYXlsaXN0KSA9PntcclxuICAgICAgICBjb25zdCBzdXBwb3J0ZWRQcm92aWRlck5hbWVzID0gc3VwcG9ydENoYWNrZXIuZmluZFByb3ZpZGVyTmFtZXNCeVBsYXlsaXN0KHBsYXlsaXN0KTtcclxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJQcm92aWRlckNvbnRyb2xsZXIgbG9hZFByb3ZpZGVycygpIFwiLCBzdXBwb3J0ZWRQcm92aWRlck5hbWVzKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICAgIHN1cHBvcnRlZFByb3ZpZGVyTmFtZXMuZmlsdGVyKGZ1bmN0aW9uKHByb3ZpZGVyTmFtZSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gISFQcm92aWRlckxvYWRlcltwcm92aWRlck5hbWVdO1xyXG4gICAgICAgICAgICB9KS5tYXAoZnVuY3Rpb24ocHJvdmlkZXJOYW1lKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gUHJvdmlkZXJMb2FkZXJbcHJvdmlkZXJOYW1lXSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3ZpZGVyO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoYXQuZmluZEJ5TmFtZSA9IChuYW1lKSA9PiB7XHJcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiUHJvdmlkZXJDb250cm9sbGVyIGZpbmRCeU5hbWUoKSBcIiwgbmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIFByb3ZpZGVyc1tuYW1lXTtcclxuICAgIH07XHJcblxyXG4gICAgdGhhdC5nZXRQcm92aWRlckJ5U291cmNlID0gKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN1cHBvcnRlZFByb3ZpZGVyTmFtZSA9IHN1cHBvcnRDaGFja2VyLmZpbmRQcm92aWRlck5hbWVCeVNvdXJjZShzb3VyY2UpO1xyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIlByb3ZpZGVyQ29udHJvbGxlciBnZXRQcm92aWRlckJ5U291cmNlKCkgXCIsIHN1cHBvcnRlZFByb3ZpZGVyTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoYXQuZmluZEJ5TmFtZShzdXBwb3J0ZWRQcm92aWRlck5hbWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGF0LmlzU2FtZVByb3ZpZGVyID0gKGN1cnJlbnRTb3VyY2UsIG5ld1NvdXJjZSkgPT4ge1xyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIlByb3ZpZGVyQ29udHJvbGxlciBpc1NhbWVQcm92aWRlcigpIFwiLCBzdXBwb3J0Q2hhY2tlci5maW5kUHJvdmlkZXJOYW1lQnlTb3VyY2UoY3VycmVudFNvdXJjZSkgLCBzdXBwb3J0Q2hhY2tlci5maW5kUHJvdmlkZXJOYW1lQnlTb3VyY2UobmV3U291cmNlKSApO1xyXG4gICAgICAgIHJldHVybiBzdXBwb3J0Q2hhY2tlci5maW5kUHJvdmlkZXJOYW1lQnlTb3VyY2UoY3VycmVudFNvdXJjZSkgPT09IHN1cHBvcnRDaGFja2VyLmZpbmRQcm92aWRlck5hbWVCeVNvdXJjZShuZXdTb3VyY2UpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoYXQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyO1xyXG4iLCIvLyAgICAgIFByb21pc2UgUG9seWZpbGxcclxuLy8gICAgICBodHRwczovL2dpdGh1Yi5jb20vdGF5bG9yaGFrZXMvcHJvbWlzZS1wb2x5ZmlsbFxyXG4vLyAgICAgIENvcHlyaWdodCAoYykgMjAxNCBUYXlsb3IgSGFrZXNcclxuLy8gICAgICBDb3B5cmlnaHQgKGMpIDIwMTQgRm9yYmVzIExpbmRlc2F5XHJcbi8vICAgICAgdGF5bG9yaGFrZXMvcHJvbWlzZS1wb2x5ZmlsbCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcclxuXHJcbmNvbnN0IHByb21pc2VGaW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgIHZhciBjb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICByZXR1cm4gdGhpcy50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24ocmVhc29uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3IucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn07XHJcblxyXG4vLyBTdG9yZSBzZXRUaW1lb3V0IHJlZmVyZW5jZSBzbyBwcm9taXNlLXBvbHlmaWxsIHdpbGwgYmUgdW5hZmZlY3RlZCBieVxyXG4vLyBvdGhlciBjb2RlIG1vZGlmeWluZyBzZXRUaW1lb3V0IChsaWtlIHNpbm9uLnVzZUZha2VUaW1lcnMoKSlcclxuY29uc3Qgc2V0VGltZW91dEZ1bmMgPSB3aW5kb3cuc2V0VGltZW91dDtcclxuY29uc3Qgc2V0SW1tZWRpYXRlRnVuYyA9IHdpbmRvdy5zZXRJbW1lZGlhdGU7XHJcblxyXG5mdW5jdGlvbiBub29wKCkge31cclxuXHJcbi8vIFBvbHlmaWxsIGZvciBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxyXG5mdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm4uYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmNvbnN0IFByb21pc2VTaGltID0gZnVuY3Rpb24gKGZuKSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUHJvbWlzZSkpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3Jyk7XHJcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBmdW5jdGlvbicpO1xyXG4gICAgdGhpcy5fc3RhdGUgPSAwO1xyXG4gICAgdGhpcy5faGFuZGxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLl9kZWZlcnJlZHMgPSBbXTtcclxuXHJcbiAgICBkb1Jlc29sdmUoZm4sIHRoaXMpO1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGUgPSBmdW5jdGlvbiAoc2VsZiwgZGVmZXJyZWQpIHtcclxuICAgIHdoaWxlIChzZWxmLl9zdGF0ZSA9PT0gMykge1xyXG4gICAgICAgIHNlbGYgPSBzZWxmLl92YWx1ZTtcclxuICAgIH1cclxuICAgIGlmIChzZWxmLl9zdGF0ZSA9PT0gMCkge1xyXG4gICAgICAgIHNlbGYuX2RlZmVycmVkcy5wdXNoKGRlZmVycmVkKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZWxmLl9oYW5kbGVkID0gdHJ1ZTtcclxuICAgIFByb21pc2UuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBjYiA9IHNlbGYuX3N0YXRlID09PSAxID8gZGVmZXJyZWQub25GdWxmaWxsZWQgOiBkZWZlcnJlZC5vblJlamVjdGVkO1xyXG4gICAgICAgIGlmIChjYiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAoc2VsZi5fc3RhdGUgPT09IDEgPyByZXNvbHZlIDogcmVqZWN0KShkZWZlcnJlZC5wcm9taXNlLCBzZWxmLl92YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJldDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXQgPSBjYihzZWxmLl92YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZWplY3QoZGVmZXJyZWQucHJvbWlzZSwgZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZShkZWZlcnJlZC5wcm9taXNlLCByZXQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHJlc29sdmUgPSBmdW5jdGlvbiAoc2VsZiwgbmV3VmFsdWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gUHJvbWlzZSBSZXNvbHV0aW9uIFByb2NlZHVyZTogaHR0cHM6Ly9naXRodWIuY29tL3Byb21pc2VzLWFwbHVzL3Byb21pc2VzLXNwZWMjdGhlLXByb21pc2UtcmVzb2x1dGlvbi1wcm9jZWR1cmVcclxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IHNlbGYpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuJyk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBuZXdWYWx1ZSAmJlxyXG4gICAgICAgICAgICAodHlwZW9mIG5ld1ZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgbmV3VmFsdWUgPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGVuID0gbmV3VmFsdWUudGhlbjtcclxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5fc3RhdGUgPSAzO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGZpbmFsZShzZWxmKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgZG9SZXNvbHZlKGJpbmQodGhlbiwgbmV3VmFsdWUpLCBzZWxmKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLl9zdGF0ZSA9IDE7XHJcbiAgICAgICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICBmaW5hbGUoc2VsZik7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmVqZWN0KHNlbGYsIGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCByZWplY3QgPWZ1bmN0aW9uIChzZWxmLCBuZXdWYWx1ZSkge1xyXG4gICAgc2VsZi5fc3RhdGUgPSAyO1xyXG4gICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgIGZpbmFsZShzZWxmKTtcclxufVxyXG5cclxuY29uc3QgZmluYWxlID0gZnVuY3Rpb24gKHNlbGYpIHtcclxuICAgIGlmIChzZWxmLl9zdGF0ZSA9PT0gMiAmJiBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgUHJvbWlzZS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghc2VsZi5faGFuZGxlZCkge1xyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5fdW5oYW5kbGVkUmVqZWN0aW9uRm4oc2VsZi5fdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbGYuX2RlZmVycmVkcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIGhhbmRsZShzZWxmLCBzZWxmLl9kZWZlcnJlZHNbaV0pO1xyXG4gICAgfVxyXG4gICAgc2VsZi5fZGVmZXJyZWRzID0gbnVsbDtcclxufVxyXG5cclxuY29uc3QgSGFuZGxlciA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcHJvbWlzZSkge1xyXG4gICAgdGhpcy5vbkZ1bGZpbGxlZCA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogbnVsbDtcclxuICAgIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XHJcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xyXG59XHJcblxyXG4vKipcclxuICogVGFrZSBhIHBvdGVudGlhbGx5IG1pc2JlaGF2aW5nIHJlc29sdmVyIGZ1bmN0aW9uIGFuZCBtYWtlIHN1cmVcclxuICogb25GdWxmaWxsZWQgYW5kIG9uUmVqZWN0ZWQgYXJlIG9ubHkgY2FsbGVkIG9uY2UuXHJcbiAqXHJcbiAqIE1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgYXN5bmNocm9ueS5cclxuICovXHJcbmNvbnN0IGRvUmVzb2x2ZSA9IGZ1bmN0aW9uIChmbiwgc2VsZikge1xyXG4gICAgdmFyIGRvbmUgPSBmYWxzZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHNlbGYsIHZhbHVlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24ocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZWplY3Qoc2VsZiwgcmVhc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XHJcbiAgICAgICAgZG9uZSA9IHRydWU7XHJcbiAgICAgICAgcmVqZWN0KHNlbGYsIGV4KTtcclxuICAgIH1cclxufVxyXG5cclxuUHJvbWlzZVNoaW0ucHJvdG90eXBlWydjYXRjaCddID0gZnVuY3Rpb24ob25SZWplY3RlZCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcclxufTtcclxuXHJcblByb21pc2VTaGltLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcclxuICAgIHZhciBwcm9tID0gbmV3IHRoaXMuY29uc3RydWN0b3Iobm9vcCk7XHJcblxyXG4gICAgaGFuZGxlKHRoaXMsIG5ldyBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9tKSk7XHJcbiAgICByZXR1cm4gcHJvbTtcclxufTtcclxuXHJcblByb21pc2VTaGltLnByb3RvdHlwZVsnZmluYWxseSddID0gcHJvbWlzZUZpbmFsbHk7XHJcblxyXG5Qcm9taXNlU2hpbS5hbGwgPSBmdW5jdGlvbihhcnIpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBpZiAoIWFyciB8fCB0eXBlb2YgYXJyLmxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UuYWxsIGFjY2VwdHMgYW4gYXJyYXknKTtcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycik7XHJcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgdmFyIHJlbWFpbmluZyA9IGFyZ3MubGVuZ3RoO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiByZXMoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsICYmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGVuID0gdmFsLnRoZW47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW4uY2FsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXJnc1tpXSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIGlmICgtLXJlbWFpbmluZyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcmVzKGksIGFyZ3NbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuUHJvbWlzZVNoaW0ucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gUHJvbWlzZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xyXG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5Qcm9taXNlU2hpbS5yZWplY3QgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHJlamVjdCh2YWx1ZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblByb21pc2VTaGltLnJhY2UgPSBmdW5jdGlvbih2YWx1ZXMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhbHVlc1tpXS50aGVuKHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBVc2UgcG9seWZpbGwgZm9yIHNldEltbWVkaWF0ZSBmb3IgcGVyZm9ybWFuY2UgZ2FpbnNcclxuUHJvbWlzZVNoaW0uX2ltbWVkaWF0ZUZuID1cclxuICAgICh0eXBlb2Ygc2V0SW1tZWRpYXRlRnVuYyA9PT0gJ2Z1bmN0aW9uJyAmJlxyXG4gICAgZnVuY3Rpb24oZm4pIHtcclxuICAgICAgICBzZXRJbW1lZGlhdGVGdW5jKGZuKTtcclxuICAgIH0pIHx8XHJcbiAgICBmdW5jdGlvbihmbikge1xyXG4gICAgICAgIHNldEltbWVkaWF0ZUZ1bmMoZm4sIDApO1xyXG4gICAgfTtcclxuXHJcblByb21pc2VTaGltLl91bmhhbmRsZWRSZWplY3Rpb25GbiA9IGZ1bmN0aW9uIF91bmhhbmRsZWRSZWplY3Rpb25GbihlcnIpIHtcclxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignUG9zc2libGUgVW5oYW5kbGVkIFByb21pc2UgUmVqZWN0aW9uOicsIGVycik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgUHJvbWlzZSA9IHdpbmRvdy5Qcm9taXNlIHx8ICh3aW5kb3cuUHJvbWlzZSA9IFByb21pc2VTaGltKTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXNvbHZlZCA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvbWlzZTsiLCJpbXBvcnQgT3ZlblBsYXllclNESywge2NoZWNrQW5kR2V0Q29udGFpbmVyRWxlbWVudH0gZnJvbSAnLi9vdmVucGxheWVyLnNkaydcclxuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3L3ZpZXcnO1xyXG5pbXBvcnQgZG9tIGZyb20gJy4vdXRpbHMvcG9seWZpbGxzL2RvbS5qcyc7XHJcbmltcG9ydCB7Z2V0U2NyaXB0UGF0aH0gZnJvbSAndXRpbHMvd2VicGFjayc7XHJcbmltcG9ydCB7Z2V0QnJvd3Nlcn0gZnJvbSAndXRpbHMvYnJvd3Nlcic7XHJcblxyXG5cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSBnZXRTY3JpcHRQYXRoKCdvdmVucGxheWVyLmpzJyk7XHJcblxyXG5jb25zdCBPdmVuUGxheWVyID0ge307XHJcbndpbmRvdy5PdmVuUGxheWVyID0gT3ZlblBsYXllcjtcclxuXHJcblxyXG4vKipcclxuICogQ29weSBwcm9wZXJ0aWVzIGZyb20gT3ZlblBsYXllclNESyBvYmplY3QgdG8gT3ZlblBsYXllciBvYmplY3RcclxuICovXHJcbk9iamVjdC5hc3NpZ24oT3ZlblBsYXllciwgT3ZlblBsYXllclNESyk7XHJcblxyXG5PdmVuUGxheWVyLmNyZWF0ZSA9IGZ1bmN0aW9uIChjb250YWluZXIsIG9wdGlvbnMpIHtcclxuICAgIGxldCBicm93c2VyTmFtZSA9IGdldEJyb3dzZXIoKTtcclxuICAgIGlmKGJyb3dzZXJOYW1lID09PSBcImllXCIpe1xyXG5cclxuICAgIH1cclxuICAgIGxldCBjb250YWluZXJFbGVtZW50ID0gY2hlY2tBbmRHZXRDb250YWluZXJFbGVtZW50KGNvbnRhaW5lcik7XHJcblxyXG4gICAgdmFyIHBsYXllciA9IFZpZXcoY29udGFpbmVyRWxlbWVudCk7XHJcblxyXG4gICAgY29uc3QgcGxheWVySW5zdGFuY2UgPSBPdmVuUGxheWVyU0RLLmNyZWF0ZShwbGF5ZXIuZ2V0TWVkaWFFbGVtZW50Q29udGFpbmVyKCksIG9wdGlvbnMpO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24ocGxheWVySW5zdGFuY2UsIHtcclxuICAgICAgICBnZXRDb250YWluZXJJZCA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQuaWQ7XHJcbiAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwbGF5ZXIuc2V0QXBpKHBsYXllckluc3RhbmNlKTtcclxuXHJcbiAgICByZXR1cm4gcGxheWVySW5zdGFuY2U7XHJcbn1cclxuXHJcbiIsImltcG9ydCBBUEkgZnJvbSAnYXBpL0FwaSc7XHJcbmltcG9ydCB7aXNXZWJSVEN9IGZyb20gJ3V0aWxzL3ZhbGlkYXRvcic7XHJcbmltcG9ydCBfIGZyb20gJ3V0aWxzL3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQgTGEkIGZyb20gJ3V0aWxzL2xpa2VBJCc7XHJcbmltcG9ydCB7Z2V0U2NyaXB0UGF0aH0gZnJvbSAndXRpbHMvd2VicGFjayc7XHJcblxyXG5cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSBnZXRTY3JpcHRQYXRoKCdvdmVucGxheWVyLnNkay5qcycpO1xyXG5cclxuLyoqXHJcbiAqIE1haW4gT3ZlblBsYXllclNESyBvYmplY3RcclxuICovXHJcbmNvbnN0IE92ZW5QbGF5ZXJTREsgPSB3aW5kb3cuT3ZlblBsYXllclNESyA9IHt9O1xyXG5cclxuY29uc3QgcGxheWVyTGlzdCA9IE92ZW5QbGF5ZXJTREsucGxheWVyTGlzdCA9IFtdO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrQW5kR2V0Q29udGFpbmVyRWxlbWVudCA9IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xyXG5cclxuICAgIGlmICghY29udGFpbmVyKSB7XHJcblxyXG4gICAgICAgIC8vIFRPRE8ocm9jayk6IFNob3VsZCBjYXVzZSBhbiBlcnJvci5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY29udGFpbmVyRWxlbWVudCA9IG51bGw7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBjb250YWluZXIgPT09ICdzdHJpbmcnKSB7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXIpO1xyXG4gICAgfSBlbHNlIGlmIChjb250YWluZXIubm9kZVR5cGUpIHtcclxuXHJcbiAgICAgICAgY29udGFpbmVyRWxlbWVudCA9IGNvbnRhaW5lcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gVE9ETyhyb2NrKTogU2hvdWxkIGNhdXNlIGFuIGVycm9yLlxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIHBsYXllciBpbnN0YW5jZSBhbmQgcmV0dXJuIGl0LlxyXG4gKlxyXG4gKiBAcGFyYW0gICAgICB7c3RyaW5nIHwgZG9tIGVsZW1lbnR9IGNvbnRhaW5lciAgSWQgb2YgY29udGFpbmVyIGVsZW1lbnQgb3IgY29udGFpbmVyIGVsZW1lbnRcclxuICogQHBhcmFtICAgICAge29iamVjdH0gb3B0aW9ucyAgVGhlIG9wdGlvbnNcclxuICovXHJcbk92ZW5QbGF5ZXJTREsuY3JlYXRlID0gZnVuY3Rpb24oY29udGFpbmVyLCBvcHRpb25zKSB7XHJcblxyXG4gICAgbGV0IGNvbnRhaW5lckVsZW1lbnQgPSBjaGVja0FuZEdldENvbnRhaW5lckVsZW1lbnQoY29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJJbnN0YW5jZSA9IEFQSShjb250YWluZXJFbGVtZW50KTtcclxuICAgIHBsYXllckluc3RhbmNlLmluaXQob3B0aW9ucyk7XHJcblxyXG4gICAgcGxheWVyTGlzdC5wdXNoKHBsYXllckluc3RhbmNlKTtcclxuXHJcbiAgICByZXR1cm4gcGxheWVySW5zdGFuY2U7XHJcbn07XHJcblxyXG4vKipcclxuICogR2V0cyB0aGUgcGxheWVyIGluc3RhbmNlIGxpc3QuXHJcbiAqXHJcbiAqIEByZXR1cm4gICAgIHthcnJheX0gIFRoZSBwbGF5ZXIgbGlzdC5cclxuICovXHJcbk92ZW5QbGF5ZXJTREsuZ2V0UGxheWVyTGlzdCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHJldHVybiBwbGF5ZXJMaXN0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdldHMgdGhlIHBsYXllciBpbnN0YW5jZSBieSBjb250YWluZXIgaWQuXHJcbiAqXHJcbiAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICBjb250YWluZXJJZCAgVGhlIGNvbnRhaW5lciBpZGVudGlmaWVyXHJcbiAqIEByZXR1cm4gICAgIHtvYmVqZWN0IHwgbnVsbH0gIFRoZSBwbGF5ZXIgaW5zdGFuY2UuXHJcbiAqL1xyXG5PdmVuUGxheWVyU0RLLmdldFBsYXllckJ5Q29udGFpbmVySWQgPSBmdW5jdGlvbihjb250YWluZXJJZCkge1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyTGlzdC5sZW5ndGg7IGkgKyspIHtcclxuXHJcbiAgICAgICAgaWYgKHBsYXllckxpc3RbaV0uZ2V0Q29udGFpbmVySWQoKSA9PT0gY29udGFpbmVySWQpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJMaXN0W2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZXRzIHRoZSBwbGF5ZXIgaW5zdGFuY2UgYnkgaW5kZXguXHJcbiAqXHJcbiAqIEBwYXJhbSAgICAgIHtudW1iZXJ9ICBpbmRleCAgIFRoZSBpbmRleFxyXG4gKiBAcmV0dXJuICAgICB7b2JqZWN0IHwgbnVsbH0gIFRoZSBwbGF5ZXIgaW5zdGFuY2UuXHJcbiAqL1xyXG5PdmVuUGxheWVyU0RLLmdldFBsYXllckJ5SW5kZXggPSBmdW5jdGlvbihpbmRleCkge1xyXG5cclxuICAgIGNvbnN0IHBsYXllckluc3RhbmNlID0gcGxheWVyTGlzdFtpbmRleF07XHJcblxyXG4gICAgaWYgKHBsYXllckluc3RhbmNlKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBwbGF5ZXJJbnN0YW5jZTtcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgcGxheWVyIGluc3RhbmNlIGJ5IHBsYXllcklkLlxyXG4gKlxyXG4gKiBAcGFyYW0gICAgICB7cGxheWVySWR9ICBpZFxyXG4gKiBAcmV0dXJuICAgICB7bnVsbH1cclxuICovXHJcbk92ZW5QbGF5ZXJTREsucmVtb3ZlUGxheWVyID0gZnVuY3Rpb24ocGxheWVySWQpIHtcclxuICAgIGNvbnNvbGUubG9nKHBsYXllcklkKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyTGlzdC5sZW5ndGg7IGkgKyspIHtcclxuXHJcbiAgICAgICAgaWYgKHBsYXllckxpc3RbaV0uZ2V0Q29udGFpbmVySWQoKSA9PT0gcGxheWVySWQpIHtcclxuXHJcbiAgICAgICAgICAgIHBsYXllckxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG4vKipcclxuICogR2VuZXJhdGUgd2VicnRjIHNvdXJjZSBmb3IgcGxheWVyIHNvdXJjZSB0eXBlLlxyXG4gKlxyXG4gKiBAcGFyYW0gICAgICB7T2JqZWN0IHwgQXJyYXl9ICBzb3VyY2UgICB3ZWJydGMgc291cmNlXHJcbiAqIEByZXR1cm4gICAgIHtBcnJheX0gIFBsYXllciBzb3VyY2UgT2JlamN0LlxyXG4gKi9cclxuT3ZlblBsYXllclNESy5nZW5lcmF0ZVdlYnJ0Y1VybHMgPSBmdW5jdGlvbihzb3VyY2VzKSB7XHJcbiAgICByZXR1cm4gKF8uaXNBcnJheShzb3VyY2VzKSA/IHNvdXJjZXMgOiBbc291cmNlc10pLm1hcChmdW5jdGlvbihzb3VyY2UsIGluZGV4KXtcclxuICAgICAgICBpZihzb3VyY2UuaG9zdCAmJiBpc1dlYlJUQyhzb3VyY2UuaG9zdCkgJiYgc291cmNlLmFwcGxpY2F0aW9uICYmIHNvdXJjZS5zdHJlYW0pe1xyXG4gICAgICAgICAgICByZXR1cm4ge2ZpbGUgOiBzb3VyY2UuaG9zdCArIFwiL1wiICsgc291cmNlLmFwcGxpY2F0aW9uICsgXCIvXCIgKyBzb3VyY2Uuc3RyZWFtLCB0eXBlIDogXCJ3ZWJydGNcIiwgbGFiZWwgOiBzb3VyY2UubGFiZWwgPyBzb3VyY2UubGFiZWwgOiBcIndlYnJ0Yy1cIisoaW5kZXgrMSkgfTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE92ZW5QbGF5ZXJTREs7XHJcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBob2hvIG9uIDIwMTguIDguIDI0Li5cbiAqL1xuXG5cbmV4cG9ydCBjb25zdCBnZXRCcm93c2VyID0gZnVuY3Rpb24oKXtcbiAgICBpZigobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiT3BlcmFcIikgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdPUFInKSkgIT0gLTEgKXtcbiAgICAgICAgcmV0dXJuICdvcGVyYSc7XG4gICAgfWVsc2UgaWYobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lXCIpICE9IC0xICl7XG4gICAgICAgIHJldHVybiAnY2hyb21lJztcbiAgICB9ZWxzZSBpZihuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJTYWZhcmlcIikgIT0gLTEpe1xuICAgICAgICByZXR1cm4gJ3NhZmFyaSc7XG4gICAgfWVsc2UgaWYobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRmlyZWZveFwiKSAhPSAtMSApe1xuICAgICAgICByZXR1cm4gJ2ZpcmVmb3gnO1xuICAgIH1lbHNlIGlmKChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFXCIpICE9IC0xICkpe1xuICAgICAgICBsZXQgbXNpZSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIik7XG4gICAgICAgIC8qaWYoISFkb2N1bWVudC5kb2N1bWVudE1vZGUgPT0gdHJ1ZSApe1xuICAgICAgICAgICAgcmV0dXJuICdpZSc7XG4gICAgICAgIH1lbHNlIGlmKCEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudC4qcnZcXDoxMVxcLi8pKXtcbiAgICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQodWEuc3Vic3RyaW5nKG1zaWUgKyA1LCB1YS5pbmRleE9mKFwiLlwiLCBtc2llKSkpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaWUnO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1bmtub3duJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gJ3Vua25vd24nO1xuICAgICAgICB9Ki9cbiAgICAgICAgdmFyIGllID0gKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIHZhciB1bmRlZixcbiAgICAgICAgICAgICAgICB2ID0gMyxcbiAgICAgICAgICAgICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICAgICAgICBhbGwgPSBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2knKTtcblxuICAgICAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSAnPCEtLVtpZiBndCBJRSAnICsgKCsrdikgKyAnXT48aT48L2k+PCFbZW5kaWZdLS0+JyxcbiAgICAgICAgICAgICAgICAgICAgYWxsWzBdXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmV0dXJuIHYgPiA0ID8gdiA6IHVuZGVmO1xuXG4gICAgICAgIH0oKSk7XG4gICAgICAgIGlmKGllIDwgOSl7XG4gICAgICAgICAgICByZXR1cm4gJ29sZElFJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gJ21vZGVybklFJztcbiAgICAgICAgfVxuXG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiAndW5rbm93bic7XG4gICAgfVxuXG59O1xuXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBob2hvIG9uIDIwMTguIDcuIDIzLi5cclxuICovXHJcbmltcG9ydCBfIGZyb20gXCJ1dGlscy91bmRlcnNjb3JlXCI7XHJcblxyXG4vKipcclxuICogQGJyaWVmICAgSXQgd2FzIHJlcGxhY2UganF1ZXJ5J3Mgc2VsZWN0b3IuIEl0IE9mdGVuIHVzZWQgYnkgT3ZlblRlbXBsYXRlLiAoL3ZpZXcvZW5naW5lL092ZW5UZW1wbGF0ZS5qcylcclxuICogQHBhcmFtICAgc2VsZWN0b3JPckVsZW1lbnQgIHN0cmluZyBvciBlbGVtZW50XHJcbiAqXHJcbiAqICovXHJcblxyXG5cclxuY29uc3QgTGEkID0gZnVuY3Rpb24oc2VsZWN0b3JPckVsZW1lbnQpe1xyXG4gICAgY29uc3QgdGhhdCA9IHt9O1xyXG4gICAgY29uc3QgcmV0dXJuTm9kZSA9IGZ1bmN0aW9uKCRlbGVtZW50ICwgc2VsZWN0b3Ipe1xyXG4gICAgICAgIGxldCBub2RlTGlzdCA9ICAkZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgICAgICBpZihub2RlTGlzdC5sZW5ndGggPiAxKXtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGVMaXN0O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZUxpc3RbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgbGV0ICRlbGVtZW50ID0gXCJcIjtcclxuXHJcbiAgICBpZiggXy5ldmVyeShzZWxlY3Rvck9yRWxlbWVudCwgZnVuY3Rpb24oaXRlbSl7cmV0dXJuIF8uaXNFbGVtZW50KGl0ZW0pfSkpe1xyXG4gICAgICAgICRlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XHJcbiAgICB9ZWxzZSBpZihzZWxlY3Rvck9yRWxlbWVudCA9PT0gXCJkb2N1bWVudFwiKXtcclxuICAgICAgICAkZWxlbWVudCA9IGRvY3VtZW50O1xyXG4gICAgfWVsc2UgaWYoc2VsZWN0b3JPckVsZW1lbnQgPT09IFwid2luZG93XCIpe1xyXG4gICAgICAgICRlbGVtZW50ID0gd2luZG93O1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgJGVsZW1lbnQgPSByZXR1cm5Ob2RlKGRvY3VtZW50LCBzZWxlY3Rvck9yRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmKCEkZWxlbWVudCl7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdGhhdC5maW5kID0gKHNlbGVjdG9yKSA9PntcclxuICAgICAgICByZXR1cm4gTGEkKHJldHVybk5vZGUoJGVsZW1lbnQsIHNlbGVjdG9yKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoYXQuY3NzID0gKG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYoJGVsZW1lbnQubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICRlbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGF0LmFkZENsYXNzID0gKG5hbWUpID0+e1xyXG4gICAgICAgIGlmKCRlbGVtZW50LmNsYXNzTGlzdCl7XHJcbiAgICAgICAgICAgICRlbGVtZW50LmNsYXNzTGlzdC5hZGQobmFtZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWVzID0gJGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgaWYoY2xhc3NOYW1lcy5pbmRleE9mKG5hbWUpID09PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAkZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgXCIgKyBuYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhhdC5yZW1vdmVDbGFzcyA9IChuYW1lKSA9PntcclxuICAgICAgICBpZiAoJGVsZW1lbnQuY2xhc3NMaXN0KXtcclxuICAgICAgICAgICAgJGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJGVsZW1lbnQuY2xhc3NOYW1lID0gJGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIG5hbWUuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKFxcXFxifCQpJywgJ2dpJyksICcgJyk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhhdC5yZW1vdmVBdHRyaWJ1dGUgPSAoYXR0ck5hbWUpID0+IHtcclxuICAgICAgICAkZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGF0LnNob3cgPSAoKSA9PntcclxuICAgICAgICAkZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH07XHJcblxyXG4gICAgdGhhdC5oaWRlID0gKCkgPT57XHJcbiAgICAgICAgJGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH07XHJcblxyXG4gICAgdGhhdC5hcHBlbmQgPSAoaHRtbENvZGUpID0+e1xyXG4gICAgICAgICRlbGVtZW50LmlubmVySFRNTCArPSBodG1sQ29kZTtcclxuICAgIH07XHJcblxyXG4gICAgdGhhdC50ZXh0ID0gKHRleHQpID0+IHsgLy9JRTgrXHJcbiAgICAgICAgaWYodGV4dCl7XHJcbiAgICAgICAgICAgICRlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuICRlbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhhdC5oYXNDbGFzcyA9IChuYW1lKSA9PiB7IC8vSUU4K1xyXG4gICAgICAgIGlmKCRlbGVtZW50LmNsYXNzTGlzdCl7XHJcbiAgICAgICAgICAgIHJldHVybiAkZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMobmFtZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKCcoXnwgKScgKyBuYW1lICsgJyggfCQpJywgJ2dpJykudGVzdCgkZWxlbWVudC5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoYXQuaXMgPSAoJHRhcmdldEVsZW1lbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gJGVsZW1lbnQgPT09ICR0YXJnZXRFbGVtZW50O1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGF0Lm9mZnNldCA9ICgpID0+eyAgICAvL0lFOCtcclxuICAgICAgICB2YXIgcmVjdCA9ICRlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3A6IHJlY3QudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXHJcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhhdC53aWR0aCA9ICgpID0+IHsgICAgLy9JRTgrXHJcbiAgICAgICAgcmV0dXJuICRlbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGF0LmhlaWdodCA9ICgpID0+IHsgICAvL0lFOCtcclxuICAgICAgICByZXR1cm4gJGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGF0LmF0dHIgPSAoYXR0cikgPT4ge1xyXG4gICAgICAgIHJldHVybiAkZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cik7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoYXQucmVwbGFjZSA9IChodG1sKSA9PiB7XHJcbiAgICAgICAgJGVsZW1lbnQucmVwbGFjZVdpdGgoaHRtbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoYXQuYXBwZW5kID0gKGh0bWwpID0+IHtcclxuICAgICAgICAkZWxlbWVudC5hcHBlbmRDaGlsZChodG1sKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhhdC5yZW1vdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgJGVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoYXQucmVtb3ZlQ2hpbGQgPSAoKSA9PiB7XHJcbiAgICAgICAgd2hpbGUgKCRlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICAkZWxlbWVudC5yZW1vdmVDaGlsZCgkZWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoYXQuZ2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAkZWxlbWVudDtcclxuICAgIH07XHJcblxyXG4gICAgdGhhdC5jbG9zZXN0ID0gKHNlbGVjdG9yU3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICRlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3JTdHJpbmcpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhhdDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhJDtcclxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhvaG8gb24gMjAxOC4gNS4gMjQuLlxuICovXG5cbmNvbnN0IGxvZ2dlciA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgdGhhdCA9IHt9O1xuICAgIGxldCBwcmV2Q29uc29sZUxvZyA9IG51bGw7XG5cbiAgICB3aW5kb3cuT3ZlblBsYXllckNvbnNvbGUgPSB7bG9nIDogd2luZG93Wydjb25zb2xlJ11bJ2xvZyddfTtcblxuICAgIHRoYXQuZW5hYmxlID0gKCkgPT57XG4gICAgICAgIGlmKHByZXZDb25zb2xlTG9nID09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlWydsb2cnXSA9IHByZXZDb25zb2xlTG9nO1xuICAgIH07XG4gICAgdGhhdC5kaXNhYmxlID0gKCkgPT57XG4gICAgICAgIHByZXZDb25zb2xlTG9nID0gY29uc29sZS5sb2c7XG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlWydsb2cnXSA9IGZ1bmN0aW9uKCl7fTtcbiAgICB9O1xuICAgIHRoYXQuZGVzdHJveSA9ICgpID0+e1xuICAgICAgICB3aW5kb3cuT3ZlblBsYXllckNvbnNvbGUgPSBudWxsO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhhdDtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyOyIsIi8qXHJcbiogQ29weXJpZ2h0IDIwMTggSm9zaHVhIEJlbGxcclxuXHJcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4qICovXHJcblxyXG4oZnVuY3Rpb24oZ2xvYmFsKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBpZiAoISgnd2luZG93JyBpbiBnbG9iYWwgJiYgJ2RvY3VtZW50JyBpbiBnbG9iYWwpKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vXHJcbiAgICAvLyBET01cclxuICAgIC8vIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy9cclxuICAgIC8vXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsIG1ldGhvZFxyXG4gICAgLy8gaHR0cDovL2FqYXhpYW4uY29tL2FyY2hpdmVzL2NyZWF0aW5nLWEtcXVlcnlzZWxlY3Rvci1mb3ItaWUtdGhhdC1ydW5zLWF0LW5hdGl2ZS1zcGVlZFxyXG4gICAgLy8gTmVlZGVkIGZvcjogSUU3LVxyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCA9IGZ1bmN0aW9uKHNlbGVjdG9ycykge1xyXG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpLCBlbGVtZW50cyA9IFtdLCBlbGVtZW50O1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZmlyc3RDaGlsZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Ll9xc2EgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHNlbGVjdG9ycyArICd7eC1xc2E6ZXhwcmVzc2lvbihkb2N1bWVudC5fcXNhICYmIGRvY3VtZW50Ll9xc2EucHVzaCh0aGlzKSl9JztcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIDApO1xyXG4gICAgICAgICAgICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChkb2N1bWVudC5fcXNhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50Ll9xc2Euc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlQXR0cmlidXRlKCd4LXFzYScpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb2N1bWVudC5fcXNhID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG9jdW1lbnQucXVlcnlTZWxlY3RvciBtZXRob2RcclxuICAgIC8vIE5lZWRlZCBmb3I6IElFNy1cclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgPSBmdW5jdGlvbihzZWxlY3RvcnMpIHtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcnMpO1xyXG4gICAgICAgICAgICByZXR1cm4gKGVsZW1lbnRzLmxlbmd0aCkgPyBlbGVtZW50c1swXSA6IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lIG1ldGhvZFxyXG4gICAgLy8gTmVlZGVkIGZvcjogSUU4LVxyXG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSA9IGZ1bmN0aW9uKGNsYXNzTmFtZXMpIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lcyA9IFN0cmluZyhjbGFzc05hbWVzKS5yZXBsYWNlKC9efFxccysvZywgJy4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NOYW1lcyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb2RlIGludGVyZmFjZSBjb25zdGFudHNcclxuICAgIC8vIE5lZWRlZCBmb3I6IElFOC1cclxuICAgIGdsb2JhbC5Ob2RlID0gZ2xvYmFsLk5vZGUgfHwgZnVuY3Rpb24oKSB7IHRocm93IFR5cGVFcnJvcihcIklsbGVnYWwgY29uc3RydWN0b3JcIik7IH07XHJcbiAgICBbXHJcbiAgICAgICAgWydFTEVNRU5UX05PREUnLCAxXSxcclxuICAgICAgICBbJ0FUVFJJQlVURV9OT0RFJywgMl0sXHJcbiAgICAgICAgWydURVhUX05PREUnLCAzXSxcclxuICAgICAgICBbJ0NEQVRBX1NFQ1RJT05fTk9ERScsIDRdLFxyXG4gICAgICAgIFsnRU5USVRZX1JFRkVSRU5DRV9OT0RFJywgNV0sXHJcbiAgICAgICAgWydFTlRJVFlfTk9ERScsIDZdLFxyXG4gICAgICAgIFsnUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFJywgN10sXHJcbiAgICAgICAgWydDT01NRU5UX05PREUnLCA4XSxcclxuICAgICAgICBbJ0RPQ1VNRU5UX05PREUnLCA5XSxcclxuICAgICAgICBbJ0RPQ1VNRU5UX1RZUEVfTk9ERScsIDEwXSxcclxuICAgICAgICBbJ0RPQ1VNRU5UX0ZSQUdNRU5UX05PREUnLCAxMV0sXHJcbiAgICAgICAgWydOT1RBVElPTl9OT0RFJywgMTJdXHJcbiAgICBdLmZvckVhY2goZnVuY3Rpb24ocCkgeyBpZiAoIShwWzBdIGluIGdsb2JhbC5Ob2RlKSkgZ2xvYmFsLk5vZGVbcFswXV0gPSBwWzFdOyB9KTtcclxuXHJcbiAgICAvLyBET01FeGNlcHRpb24gY29uc3RhbnRzXHJcbiAgICAvLyBOZWVkZWQgZm9yOiBJRTgtXHJcbiAgICBnbG9iYWwuRE9NRXhjZXB0aW9uID0gZ2xvYmFsLkRPTUV4Y2VwdGlvbiB8fCBmdW5jdGlvbigpIHsgdGhyb3cgVHlwZUVycm9yKFwiSWxsZWdhbCBjb25zdHJ1Y3RvclwiKTsgfTtcclxuICAgIFtcclxuICAgICAgICBbJ0lOREVYX1NJWkVfRVJSJywgMV0sXHJcbiAgICAgICAgWydET01TVFJJTkdfU0laRV9FUlInLCAyXSxcclxuICAgICAgICBbJ0hJRVJBUkNIWV9SRVFVRVNUX0VSUicsIDNdLFxyXG4gICAgICAgIFsnV1JPTkdfRE9DVU1FTlRfRVJSJywgNF0sXHJcbiAgICAgICAgWydJTlZBTElEX0NIQVJBQ1RFUl9FUlInLCA1XSxcclxuICAgICAgICBbJ05PX0RBVEFfQUxMT1dFRF9FUlInLCA2XSxcclxuICAgICAgICBbJ05PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUicsIDddLFxyXG4gICAgICAgIFsnTk9UX0ZPVU5EX0VSUicsIDhdLFxyXG4gICAgICAgIFsnTk9UX1NVUFBPUlRFRF9FUlInLCA5XSxcclxuICAgICAgICBbJ0lOVVNFX0FUVFJJQlVURV9FUlInLCAxMF0sXHJcbiAgICAgICAgWydJTlZBTElEX1NUQVRFX0VSUicsIDExXSxcclxuICAgICAgICBbJ1NZTlRBWF9FUlInLCAxMl0sXHJcbiAgICAgICAgWydJTlZBTElEX01PRElGSUNBVElPTl9FUlInLCAxM10sXHJcbiAgICAgICAgWydOQU1FU1BBQ0VfRVJSJywgMTRdLFxyXG4gICAgICAgIFsnSU5WQUxJRF9BQ0NFU1NfRVJSJywgMTVdXHJcbiAgICBdLmZvckVhY2goZnVuY3Rpb24ocCkgeyBpZiAoIShwWzBdIGluIGdsb2JhbC5ET01FeGNlcHRpb24pKSBnbG9iYWwuRE9NRXhjZXB0aW9uW3BbMF1dID0gcFsxXTsgfSk7XHJcblxyXG4gICAgLy8gRXZlbnQgYW5kIEV2ZW50VGFyZ2V0cyBpbnRlcmZhY2VzXHJcbiAgICAvLyBOZWVkZWQgZm9yOiBJRThcclxuICAgIChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICghKCdFbGVtZW50JyBpbiBnbG9iYWwpIHx8IEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgfHwgIU9iamVjdC5kZWZpbmVQcm9wZXJ0eSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBpbnRlcmZhY2UgRXZlbnRcclxuXHJcbiAgICAgICAgLy8gUGhhc2VUeXBlIChjb25zdCB1bnNpZ25lZCBzaG9ydClcclxuICAgICAgICBFdmVudC5DQVBUVVJJTkdfUEhBU0UgPSAxO1xyXG4gICAgICAgIEV2ZW50LkFUX1RBUkdFVCAgICAgICA9IDI7XHJcbiAgICAgICAgRXZlbnQuQlVCQkxJTkdfUEhBU0UgID0gMztcclxuXHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoRXZlbnQucHJvdG90eXBlLCB7XHJcbiAgICAgICAgICAgIENBUFRVUklOR19QSEFTRTogeyBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gMTsgfSB9LFxyXG4gICAgICAgICAgICBBVF9UQVJHRVQ6ICAgICAgIHsgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIDI7IH0gfSxcclxuICAgICAgICAgICAgQlVCQkxJTkdfUEhBU0U6ICAgeyBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gMzsgfSB9LFxyXG4gICAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3JjRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIGV2ZW50UGhhc2U6IHtcclxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLnNyY0VsZW1lbnQgPT09IHRoaXMuY3VycmVudFRhcmdldCkgPyBFdmVudC5BVF9UQVJHRVQgOiBFdmVudC5CVUJCTElOR19QSEFTRTtcclxuICAgICAgICAgICAgICAgIH19LFxyXG4gICAgICAgICAgICBidWJibGVzOiB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NsaWNrJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGJsY2xpY2snOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtb3VzZWRvd24nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtb3VzZXVwJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbW91c2VvdmVyJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbW91c2Vtb3ZlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbW91c2VvdXQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtb3VzZXdoZWVsJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gS2V5Ym9hcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAna2V5ZG93bic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2tleXByZXNzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAna2V5dXAnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGcmFtZS9PYmplY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVzaXplJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2Nyb2xsJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGFuZ2UnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzdWJtaXQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyZXNldCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHtcclxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW91c2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xpY2snOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdkYmxjbGljayc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ21vdXNlZG93bic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ21vdXNldXAnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtb3VzZW92ZXInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtb3VzZW91dCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ21vdXNld2hlZWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBLZXlib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdrZXlkb3duJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAna2V5cHJlc3MnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdrZXl1cCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3VibWl0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9fSxcclxuICAgICAgICAgICAgdGltZVN0YW1wOiB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl90aW1lU3RhbXA7XHJcbiAgICAgICAgICAgICAgICB9fSxcclxuICAgICAgICAgICAgc3RvcFByb3BhZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIGRlZmF1bHRQcmV2ZW50ZWQ6IHtcclxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0dXJuVmFsdWUgPT09IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gaW50ZXJmYWNlIEV2ZW50VGFyZ2V0XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ0RPTUNvbnRlbnRMb2FkZWQnKSB0eXBlID0gJ2xvYWQnO1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGYgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBlLl90aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgZS5fY3VycmVudFRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZSk7XHJcbiAgICAgICAgICAgICAgICBlLl9jdXJyZW50VGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpc1snXycgKyB0eXBlICsgbGlzdGVuZXJdID0gZjtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2hFdmVudCgnb24nICsgdHlwZSwgZik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdET01Db250ZW50TG9hZGVkJykgdHlwZSA9ICdsb2FkJztcclxuICAgICAgICAgICAgdmFyIGYgPSB0aGlzWydfJyArIHR5cGUgKyBsaXN0ZW5lcl07XHJcbiAgICAgICAgICAgIGlmIChmKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldGFjaEV2ZW50KCdvbicgKyB0eXBlLCBmKTtcclxuICAgICAgICAgICAgICAgIHRoaXNbJ18nICsgdHlwZSArIGxpc3RlbmVyXSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtXaW5kb3csIEhUTUxEb2N1bWVudCwgRWxlbWVudF0uZm9yRWFjaChmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgICAgIG8ucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyO1xyXG4gICAgICAgICAgICBvLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcjtcclxuICAgICAgICB9KTtcclxuICAgIH0oKSk7XHJcblxyXG4gICAgLy8gQ3VzdG9tRXZlbnRcclxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudC9DdXN0b21FdmVudFxyXG4gICAgLy8gTmVlZGVkIGZvcjogSUVcclxuICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCdDdXN0b21FdmVudCcgaW4gZ2xvYmFsICYmIHR5cGVvZiBnbG9iYWwuQ3VzdG9tRXZlbnQgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGZ1bmN0aW9uIEN1c3RvbUV2ZW50ICggZXZlbnQsIHBhcmFtcyApIHtcclxuICAgICAgICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHsgYnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IHVuZGVmaW5lZCB9O1xyXG4gICAgICAgICAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoICdDdXN0b21FdmVudCcgKTtcclxuICAgICAgICAgICAgZXZ0LmluaXRDdXN0b21FdmVudCggZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCApO1xyXG4gICAgICAgICAgICByZXR1cm4gZXZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSBnbG9iYWwuRXZlbnQucHJvdG90eXBlO1xyXG4gICAgICAgIGdsb2JhbC5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50O1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvLyBTaGltIGZvciBET00gRXZlbnRzIGZvciBJRTctXHJcbiAgICAvLyBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAwNS8xMC9fYW5kX3RoZV93aW5uZXJfMS5odG1sXHJcbiAgICAvLyBVc2UgYWRkRXZlbnQob2JqZWN0LCBldmVudCwgaGFuZGxlcikgaW5zdGVhZCBvZiBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcilcclxuICAgIHdpbmRvdy5hZGRFdmVudCA9IGZ1bmN0aW9uKG9iaiwgdHlwZSwgZm4pIHtcclxuICAgICAgICBpZiAob2JqLmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgb2JqLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG9iai5hdHRhY2hFdmVudCkge1xyXG4gICAgICAgICAgICBvYmpbXCJlXCIgKyB0eXBlICsgZm5dID0gZm47XHJcbiAgICAgICAgICAgIG9ialt0eXBlICsgZm5dID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZSA9IHdpbmRvdy5ldmVudDtcclxuICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldCA9IG9iajtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbigpIHsgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlOyB9O1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24gPSBmdW5jdGlvbigpIHsgZS5jYW5jZWxCdWJibGUgPSB0cnVlOyB9O1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQgPSBlLnNyY0VsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBlLnRpbWVTdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICBvYmpbXCJlXCIgKyB0eXBlICsgZm5dLmNhbGwodGhpcywgZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG9iai5hdHRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBvYmpbdHlwZSArIGZuXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbihvYmosIHR5cGUsIGZuKSB7XHJcbiAgICAgICAgaWYgKG9iai5yZW1vdmVFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIG9iai5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuLCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvYmouZGV0YWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgb2JqLmRldGFjaEV2ZW50KFwib25cIiArIHR5cGUsIG9ialt0eXBlICsgZm5dKTtcclxuICAgICAgICAgICAgb2JqW3R5cGUgKyBmbl0gPSBudWxsO1xyXG4gICAgICAgICAgICBvYmpbXCJlXCIgKyB0eXBlICsgZm5dID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIERPTVRva2VuTGlzdCBpbnRlcmZhY2UgYW5kIEVsZW1lbnQuY2xhc3NMaXN0IC8gRWxlbWVudC5yZWxMaXN0XHJcbiAgICAvLyBOZWVkZWQgZm9yOiBJRTktXHJcbiAgICAvLyBVc2UgZ2V0Q2xhc3NMaXN0KGVsZW0pIGluc3RlYWQgb2YgZWxlbS5jbGFzc0xpc3QoKSBpZiBJRTctIHN1cHBvcnQgaXMgbmVlZGVkXHJcbiAgICAvLyBVc2UgZ2V0UmVsTGlzdChlbGVtKSBpbnN0ZWFkIG9mIGVsZW0ucmVsTGlzdCgpIGlmIElFNy0gc3VwcG9ydCBpcyBuZWVkZWRcclxuICAgIChmdW5jdGlvbigpIHtcclxuICAgICAgICBmdW5jdGlvbiBET01Ub2tlbkxpc3RTaGltKG8sIHApIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gc3BsaXQocykgeyByZXR1cm4gcy5sZW5ndGggPyBzLnNwbGl0KC9cXHMrL2cpIDogW107IH1cclxuXHJcbiAgICAgICAgICAgIC8vIE5PVEU6IFRoaXMgZG9lcyBub3QgZXhhY3RseSBtYXRjaCB0aGUgc3BlYy5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlVG9rZW5Gcm9tU3RyaW5nKHRva2VuLCBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBzcGxpdChzdHJpbmcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2YodG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2Vucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2Vucy5qb2luKCcgJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFxyXG4gICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHNwbGl0KG9bcF0pLmxlbmd0aDsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGlkeCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IHNwbGl0KG9bcF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAgPD0gaWR4ICYmIGlkeCA8IHRva2Vucy5sZW5ndGggPyB0b2tlbnNbaWR4XSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb250YWluczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24odG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID0gU3RyaW5nKHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5sZW5ndGggPT09IDApIHsgdGhyb3cgU3ludGF4RXJyb3IoKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC9cXHMvLnRlc3QodG9rZW4pKSB7IHRocm93IEVycm9yKFwiSW52YWxpZENoYXJhY3RlckVycm9yXCIpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gc3BsaXQob1twXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhZGQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKC8qdG9rZW5zLi4uKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLm1hcChTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRva2Vucy5zb21lKGZ1bmN0aW9uKHRva2VuKSB7IHJldHVybiB0b2tlbi5sZW5ndGggPT09IDA7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgU3ludGF4RXJyb3IoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbnMuc29tZShmdW5jdGlvbih0b2tlbikgeyByZXR1cm4gKC9cXHMvKS50ZXN0KHRva2VuKTsgfSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkludmFsaWRDaGFyYWN0ZXJFcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1bmRlcmx5aW5nX3N0cmluZyA9IG9bcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuX2xpc3QgPSBzcGxpdCh1bmRlcmx5aW5nX3N0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zID0gdG9rZW5zLmZpbHRlcihmdW5jdGlvbih0b2tlbikgeyByZXR1cm4gdG9rZW5fbGlzdC5pbmRleE9mKHRva2VuKSA9PT0gLTE7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVuZGVybHlpbmdfc3RyaW5nLmxlbmd0aCAhPT0gMCAmJiAhKC9cXHMkLykudGVzdCh1bmRlcmx5aW5nX3N0cmluZykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJseWluZ19zdHJpbmcgKz0gJyAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmx5aW5nX3N0cmluZyArPSB0b2tlbnMuam9pbignICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9bcF0gPSB1bmRlcmx5aW5nX3N0cmluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IHNwbGl0KG9bcF0pLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggIT09IGxlbmd0aCkgeyB0aGlzLmxlbmd0aCA9IGxlbmd0aDsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigvKnRva2Vucy4uLiovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5tYXAoU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbnMuc29tZShmdW5jdGlvbih0b2tlbikgeyByZXR1cm4gdG9rZW4ubGVuZ3RoID09PSAwOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFN5bnRheEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW5zLnNvbWUoZnVuY3Rpb24odG9rZW4pIHsgcmV0dXJuICgvXFxzLykudGVzdCh0b2tlbik7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJJbnZhbGlkQ2hhcmFjdGVyRXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdW5kZXJseWluZ19zdHJpbmcgPSBvW3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKHRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybHlpbmdfc3RyaW5nID0gcmVtb3ZlVG9rZW5Gcm9tU3RyaW5nKHRva2VuLCB1bmRlcmx5aW5nX3N0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb1twXSA9IHVuZGVybHlpbmdfc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gc3BsaXQob1twXSkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCAhPT0gbGVuZ3RoKSB7IHRoaXMubGVuZ3RoID0gbGVuZ3RoOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKHRva2VuLyosIGZvcmNlKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb3JjZSA9IGFyZ3VtZW50c1sxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSBTdHJpbmcodG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5sZW5ndGggPT09IDApIHsgdGhyb3cgU3ludGF4RXJyb3IoKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgvXFxzLy50ZXN0KHRva2VuKSkgeyB0aHJvdyBFcnJvcihcIkludmFsaWRDaGFyYWN0ZXJFcnJvclwiKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBzcGxpdChvW3BdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB0b2tlbnMuaW5kZXhPZih0b2tlbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEgJiYgKCFmb3JjZSB8fCBmb3JjZSA9PT0gKHZvaWQgMCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9bcF0gPSByZW1vdmVUb2tlbkZyb21TdHJpbmcodG9rZW4sIG9bcF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEgJiYgZm9yY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1bmRlcmx5aW5nX3N0cmluZyA9IG9bcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVuZGVybHlpbmdfc3RyaW5nLmxlbmd0aCAhPT0gMCAmJiAhL1xccyQvLnRlc3QodW5kZXJseWluZ19zdHJpbmcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybHlpbmdfc3RyaW5nICs9ICcgJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJseWluZ19zdHJpbmcgKz0gdG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb1twXSA9IHVuZGVybHlpbmdfc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gc3BsaXQob1twXSkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCAhPT0gbGVuZ3RoKSB7IHRoaXMubGVuZ3RoID0gbGVuZ3RoOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b1N0cmluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb1twXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoISgnbGVuZ3RoJyBpbiB0aGlzKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gSW4gY2FzZSBnZXR0ZXJzIGFyZSBub3Qgc3VwcG9ydGVkXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IHNwbGl0KG9bcF0pLmxlbmd0aDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZXkgYXJlLCBzaGltIGluIGluZGV4IGdldHRlcnMgKHVwIHRvIDEwMClcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgU3RyaW5nKGkpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldDogKGZ1bmN0aW9uKG4pIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5pdGVtKG4pOyB9OyB9KGkpKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGRUb0VsZW1lbnRQcm90b3R5cGUocCwgZikge1xyXG4gICAgICAgICAgICBpZiAoJ0VsZW1lbnQnIGluIGdsb2JhbCAmJiBFbGVtZW50LnByb3RvdHlwZSAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgcCwgeyBnZXQ6IGYgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEhUTUwgLSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnXHJcbiAgICAgICAgLy8gRWxlbWVudC5jbGFzc0xpc3RcclxuICAgICAgICBpZiAoJ2NsYXNzTGlzdCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nZXRDbGFzc0xpc3QgPSBmdW5jdGlvbihlbGVtKSB7IHJldHVybiBlbGVtLmNsYXNzTGlzdDsgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2V0Q2xhc3NMaXN0ID0gZnVuY3Rpb24oZWxlbSkgeyByZXR1cm4gbmV3IERPTVRva2VuTGlzdFNoaW0oZWxlbSwgJ2NsYXNzTmFtZScpOyB9O1xyXG4gICAgICAgICAgICBhZGRUb0VsZW1lbnRQcm90b3R5cGUoJ2NsYXNzTGlzdCcsIGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IERPTVRva2VuTGlzdFNoaW0odGhpcywgJ2NsYXNzTmFtZScpOyB9ICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBIVE1MIC0gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZ1xyXG4gICAgICAgIC8vIEhUTUxBbmNob3JFbGVtZW50LnJlbExpc3RcclxuICAgICAgICAvLyBIVE1MTGlua0VsZW1lbnQucmVsTGlzdFxyXG4gICAgICAgIGlmICgncmVsTGlzdCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nZXRSZWxMaXN0ID0gZnVuY3Rpb24oZWxlbSkgeyByZXR1cm4gZWxlbS5yZWxMaXN0OyB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nZXRSZWxMaXN0ID0gZnVuY3Rpb24oZWxlbSkgeyByZXR1cm4gbmV3IERPTVRva2VuTGlzdFNoaW0oZWxlbSwgJ3JlbCcpOyB9O1xyXG4gICAgICAgICAgICBhZGRUb0VsZW1lbnRQcm90b3R5cGUoJ3JlbExpc3QnLCBmdW5jdGlvbigpIHsgcmV0dXJuIG5ldyBET01Ub2tlbkxpc3RTaGltKHRoaXMsICdyZWwnKTsgfSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIHNlY29uZCBhcmd1bWVudCB0byBuYXRpdmUgRE9NVG9rZW5MaXN0LnRvZ2dsZSgpIGlmIG5lY2Vzc2FyeVxyXG4gICAgICAgIChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCEoJ0RPTVRva2VuTGlzdCcgaW4gZ2xvYmFsKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgaWYgKCEoJ2NsYXNzTGlzdCcgaW4gZSkpIHJldHVybjtcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QudG9nZ2xlKCd4JywgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoIWUuY2xhc3NMaXN0LmNvbnRhaW5zKCd4JykpIHJldHVybjtcclxuICAgICAgICAgICAgZ2xvYmFsLkRPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKHRva2VuLyosIGZvcmNlKi8pIHtcclxuICAgICAgICAgICAgICAgIHZhciBmb3JjZSA9IGFyZ3VtZW50c1sxXTtcclxuICAgICAgICAgICAgICAgIGlmIChmb3JjZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkZCA9ICF0aGlzLmNvbnRhaW5zKHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2FkZCA/ICdhZGQnIDogJ3JlbW92ZSddKHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWRkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yY2UgPSAhIWZvcmNlO1xyXG4gICAgICAgICAgICAgICAgdGhpc1tmb3JjZSA/ICdhZGQnIDogJ3JlbW92ZSddKHRva2VuKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JjZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KCkpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gRE9NIC0gSW50ZXJmYWNlIE5vbkRvY3VtZW50VHlwZUNoaWxkTm9kZVxyXG4gICAgICAgIC8vIEludGVyZmFjZSBOb25Eb2N1bWVudFR5cGVDaGlsZE5vZGVcclxuICAgICAgICAvLyBwcmV2aW91c0VsZW1lbnRTaWJsaW5nIC8gbmV4dEVsZW1lbnRTaWJsaW5nIC0gZm9yIElFOFxyXG5cclxuICAgICAgICBpZiAoISgncHJldmlvdXNFbGVtZW50U2libGluZycgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSkge1xyXG4gICAgICAgICAgICBhZGRUb0VsZW1lbnRQcm90b3R5cGUoJ3ByZXZpb3VzRWxlbWVudFNpYmxpbmcnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcy5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobiAmJiBuLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSlcclxuICAgICAgICAgICAgICAgICAgICBuID0gbi5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISgnbmV4dEVsZW1lbnRTaWJsaW5nJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIGFkZFRvRWxlbWVudFByb3RvdHlwZSgnbmV4dEVsZW1lbnRTaWJsaW5nJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHRoaXMubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobiAmJiBuLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSlcclxuICAgICAgICAgICAgICAgICAgICBuID0gbi5uZXh0U2libGluZztcclxuICAgICAgICAgICAgICAgIHJldHVybiBuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KCkpO1xyXG5cclxuICAgIC8vIEVsZW1lbnQubWF0Y2hlc1xyXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvQVBJL0VsZW1lbnQvbWF0Y2hlc1xyXG4gICAgLy8gTmVlZGVkIGZvcjogSUUsIEZpcmVmb3ggMy42LCBlYXJseSBXZWJraXQgYW5kIE9wZXJhIDE1LjBcclxuICAgIC8vIFVzZSBtc01hdGNoZXNTZWxlY3RvcihzZWxlY3RvcikgZm9yIElFXHJcbiAgICAvLyBVc2Ugb01hdGNoZXNTZWxlY3RvcihzZWxlY3RvcikgZm9yIE9wZXJhIDE1LjBcclxuICAgIC8vIFVzZSBtb3pNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpIGZvciBGaXJlZm94IDMuNlxyXG4gICAgLy8gVXNlIHdlYmtpdE1hdGNoZXNTZWxlY3RvcihzZWxlY3RvcikgZm9yIGVhcmx5IFdlYmtpdFxyXG4gICAgLy8gVXNlIHBvbHlmaWxsIGlmIG5vIG1hdGNoZXMoKSBzdXBwb3J0LCBidXQgcXVlcnlTZWxlY3RvckFsbCgpIHN1cHBvcnRcclxuICAgIGlmICgnRWxlbWVudCcgaW4gZ2xvYmFsICYmICFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XHJcbiAgICAgICAgaWYgKEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcclxuICAgICAgICB9IGVsc2UgaWYgKEVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3I7XHJcbiAgICAgICAgfSBlbHNlIGlmIChFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3RvcjtcclxuICAgICAgICB9IGVsc2UgaWYgKEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3Rvcikge1xyXG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCkge1xyXG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gZnVuY3Rpb24gbWF0Y2hlcyhzZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSAodGhpcy5kb2N1bWVudCB8fCB0aGlzLm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxyXG4gICAgICAgICAgICAgICAgICAgIGkgPSBtYXRjaGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCAmJiBtYXRjaGVzLml0ZW0oaSkgIT09IHRoaXMpIHt9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaSA+IC0xO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBFbGVtZW50LmNsb3Nlc3RcclxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L2Nsb3Nlc3RcclxuICAgIGlmICh3aW5kb3cuRWxlbWVudCAmJiAhRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCkge1xyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbihzKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gKHRoaXMuZG9jdW1lbnQgfHwgdGhpcy5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHMpLFxyXG4gICAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICAgIGVsID0gdGhpcztcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgaSA9IG1hdGNoZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwICYmIG1hdGNoZXMuaXRlbShpKSAhPT0gZWwpIHt9O1xyXG4gICAgICAgICAgICB9IHdoaWxlICgoaSA8IDApICYmIChlbCA9IGVsLnBhcmVudEVsZW1lbnQpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWl4aW4obywgcHMpIHtcclxuICAgICAgICBpZiAoIW8pIHJldHVybjtcclxuICAgICAgICBPYmplY3Qua2V5cyhwcykuZm9yRWFjaChmdW5jdGlvbihwKSB7XHJcbiAgICAgICAgICAgIGlmICgocCBpbiBvKSB8fCAocCBpbiBvLnByb3RvdHlwZSkpIHJldHVybjtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgICAgICBvLnByb3RvdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBwLFxyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHMsIHApXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhyb3dzIGluIElFODsganVzdCBjb3B5IGl0XHJcbiAgICAgICAgICAgICAgICBvW3BdID0gcHNbcF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNaXhpbiBQYXJlbnROb2RlXHJcbiAgICAvLyBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2ludGVyZmFjZS1wYXJlbnRub2RlXHJcblxyXG4gICAgZnVuY3Rpb24gY29udmVydE5vZGVzSW50b0FOb2RlKG5vZGVzKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBudWxsO1xyXG4gICAgICAgIG5vZGVzID0gbm9kZXMubWFwKGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICEobm9kZSBpbnN0YW5jZW9mIE5vZGUpID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZSkgOiBub2RlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChub2Rlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgbm9kZSA9IG5vZGVzWzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgICAgIG5vZGVzLmZvckVhY2goZnVuY3Rpb24obikgeyBub2RlLmFwcGVuZENoaWxkKG4pOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIFBhcmVudE5vZGUgPSB7XHJcbiAgICAgICAgcHJlcGVuZDogZnVuY3Rpb24oLyouLi5ub2RlcyovKSB7XHJcbiAgICAgICAgICAgIHZhciBub2RlcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgbm9kZXMgPSBjb252ZXJ0Tm9kZXNJbnRvQU5vZGUobm9kZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmluc2VydEJlZm9yZShub2RlcywgdGhpcy5maXJzdENoaWxkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFwcGVuZDogZnVuY3Rpb24oLyouLi5ub2RlcyovKSB7XHJcbiAgICAgICAgICAgIHZhciBub2RlcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgbm9kZXMgPSBjb252ZXJ0Tm9kZXNJbnRvQU5vZGUobm9kZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKG5vZGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG1peGluKGdsb2JhbC5Eb2N1bWVudCB8fCBnbG9iYWwuSFRNTERvY3VtZW50LCBQYXJlbnROb2RlKTsgLy8gSFRNTERvY3VtZW50IGZvciBJRThcclxuICAgIG1peGluKGdsb2JhbC5Eb2N1bWVudEZyYWdtZW50LCBQYXJlbnROb2RlKTtcclxuICAgIG1peGluKGdsb2JhbC5FbGVtZW50LCBQYXJlbnROb2RlKTtcclxuXHJcbiAgICAvLyBNaXhpbiBDaGlsZE5vZGVcclxuICAgIC8vIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jaW50ZXJmYWNlLWNoaWxkbm9kZVxyXG5cclxuICAgIHZhciBDaGlsZE5vZGUgPSB7XHJcbiAgICAgICAgYmVmb3JlOiBmdW5jdGlvbigvKi4uLm5vZGVzKi8pIHtcclxuICAgICAgICAgICAgdmFyIG5vZGVzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBpZiAoIXBhcmVudCkgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgdmlhYmxlUHJldmlvdXNTaWJsaW5nID0gdGhpcy5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgICAgIHdoaWxlIChub2Rlcy5pbmRleE9mKHZpYWJsZVByZXZpb3VzU2libGluZykgIT09IC0xKVxyXG4gICAgICAgICAgICAgICAgdmlhYmxlUHJldmlvdXNTaWJsaW5nID0gdmlhYmxlUHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZztcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBjb252ZXJ0Tm9kZXNJbnRvQU5vZGUobm9kZXMpO1xyXG4gICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIHZpYWJsZVByZXZpb3VzU2libGluZyA/XHJcbiAgICAgICAgICAgICAgICB2aWFibGVQcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgOiBwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZnRlcjogZnVuY3Rpb24oLyouLi5ub2RlcyovKSB7XHJcbiAgICAgICAgICAgIHZhciBub2RlcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgaWYgKCFwYXJlbnQpIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIHZpYWJsZU5leHRTaWJsaW5nID0gdGhpcy5uZXh0U2libGluZztcclxuICAgICAgICAgICAgd2hpbGUgKG5vZGVzLmluZGV4T2YodmlhYmxlTmV4dFNpYmxpbmcpICE9PSAtMSlcclxuICAgICAgICAgICAgICAgIHZpYWJsZU5leHRTaWJsaW5nID0gdmlhYmxlTmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gY29udmVydE5vZGVzSW50b0FOb2RlKG5vZGVzKTtcclxuICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShub2RlLCB2aWFibGVOZXh0U2libGluZyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXBsYWNlV2l0aDogZnVuY3Rpb24oLyouLi5ub2RlcyovKSB7XHJcbiAgICAgICAgICAgIHZhciBub2RlcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgaWYgKCFwYXJlbnQpIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIHZpYWJsZU5leHRTaWJsaW5nID0gdGhpcy5uZXh0U2libGluZztcclxuICAgICAgICAgICAgd2hpbGUgKG5vZGVzLmluZGV4T2YodmlhYmxlTmV4dFNpYmxpbmcpICE9PSAtMSlcclxuICAgICAgICAgICAgICAgIHZpYWJsZU5leHRTaWJsaW5nID0gdmlhYmxlTmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gY29udmVydE5vZGVzSW50b0FOb2RlKG5vZGVzKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgPT09IHBhcmVudClcclxuICAgICAgICAgICAgICAgIHBhcmVudC5yZXBsYWNlQ2hpbGQobm9kZSwgdGhpcyk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUobm9kZSwgdmlhYmxlTmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBhcmVudE5vZGUpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgbWl4aW4oZ2xvYmFsLkRvY3VtZW50VHlwZSwgQ2hpbGROb2RlKTtcclxuICAgIG1peGluKGdsb2JhbC5FbGVtZW50LCBDaGlsZE5vZGUpO1xyXG4gICAgbWl4aW4oZ2xvYmFsLkNoYXJhY3RlckRhdGEsIENoaWxkTm9kZSk7XHJcblxyXG59KHNlbGYpKTsiLCJpbXBvcnQgXyBmcm9tICcuL3VuZGVyc2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJpbShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn1cblxuLyoqXG4gKiBleHRyYWN0RXh0ZW5zaW9uXG4gKlxuICogQHBhcmFtICAgICAge3N0cmluZ30gcGF0aCBmb3IgdXJsXG4gKiBAcmV0dXJuICAgICB7c3RyaW5nfSAgRXh0ZW5zaW9uXG4gKi9cbmV4cG9ydCBjb25zdCBleHRyYWN0RXh0ZW5zaW9uID0gZnVuY3Rpb24ocGF0aCkge1xuICAgIGlmKCFwYXRoIHx8IHBhdGguc3Vic3RyKDAsNCk9PSdydG1wJykge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0QXp1cmVGaWxlRm9ybWF0KHBhdGgpIHtcbiAgICAgICAgbGV0IGV4dGVuc2lvbiA9IFwiXCI7XG4gICAgICAgIGlmICgoL1soLF1mb3JtYXQ9bXBkLS9pKS50ZXN0KHBhdGgpKSB7XG4gICAgICAgICAgICBleHRlbnNpb24gPSAnbXBkJztcbiAgICAgICAgfWVsc2UgaWYgKCgvWygsXWZvcm1hdD1tM3U4LS9pKS50ZXN0KHBhdGgpKSB7XG4gICAgICAgICAgICBleHRlbnNpb24gPSAnbTN1OCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4dGVuc2lvbjtcbiAgICB9XG5cbiAgICBsZXQgYXp1cmVkRm9ybWF0ID0gZ2V0QXp1cmVGaWxlRm9ybWF0KHBhdGgpO1xuICAgIGlmKGF6dXJlZEZvcm1hdCkge1xuICAgICAgICByZXR1cm4gYXp1cmVkRm9ybWF0O1xuICAgIH1cbiAgICBwYXRoID0gcGF0aC5zcGxpdCgnPycpWzBdLnNwbGl0KCcjJylbMF07XG4gICAgaWYocGF0aC5sYXN0SW5kZXhPZignLicpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHBhdGguc3Vic3RyKHBhdGgubGFzdEluZGV4T2YoJy4nKSArIDEsIHBhdGgubGVuZ3RoKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG59O1xuXG5cbi8qKlxuICogbmF0dXJhbEhtc1xuICpcbiAqIEBwYXJhbSAgICAgIHtudW1iZXIgfCBzdHJpbmd9ICBzZWNvbmQgIFRoZSBzZWNvbmRcbiAqIEByZXR1cm4gICAgIHtzdHJpbmd9ICBmb3JtYXR0ZWQgU3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuYXR1cmFsSG1zKHNlY29uZCkge1xuICAgIGxldCBzZWNOdW0gPSBwYXJzZUludChzZWNvbmQsIDEwKTtcbiAgICBsZXQgaG91cnMgICA9IE1hdGguZmxvb3Ioc2VjTnVtIC8gMzYwMCk7XG4gICAgbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChzZWNOdW0gLSAoaG91cnMgKiAzNjAwKSkgLyA2MCk7XG4gICAgbGV0IHNlY29uZHMgPSBzZWNOdW0gLSAoaG91cnMgKiAzNjAwKSAtIChtaW51dGVzICogNjApO1xuXG4gICAgaWYgKGhvdXJzID4gMCkge21pbnV0ZXMgPSBcIjBcIittaW51dGVzO31cbiAgICBpZiAoc2Vjb25kcyA8IDEwKSB7c2Vjb25kcyA9IFwiMFwiK3NlY29uZHM7fVxuXG4gICAgaWYgKGhvdXJzID4gMCkge1xuICAgICAgICByZXR1cm4gaG91cnMrJzonK21pbnV0ZXMrJzonK3NlY29uZHM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1pbnV0ZXMrJzonK3NlY29uZHM7XG4gICAgfVxufSIsIi8vICAgICBVbmRlcnNjb3JlLmpzIDEuOS4xXHJcbi8vICAgICBodHRwOi8vdW5kZXJzY29yZWpzLm9yZ1xyXG4vLyAgICAgKGMpIDIwMDktMjAxOCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xyXG4vLyAgICAgVW5kZXJzY29yZSBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuIWZ1bmN0aW9uKCl7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYuc2VsZj09PXNlbGYmJnNlbGZ8fFwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWwmJmdsb2JhbC5nbG9iYWw9PT1nbG9iYWwmJmdsb2JhbHx8dGhpc3x8e30scj1uLl8sZT1BcnJheS5wcm90b3R5cGUsbz1PYmplY3QucHJvdG90eXBlLHM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbD9TeW1ib2wucHJvdG90eXBlOm51bGwsdT1lLnB1c2gsYz1lLnNsaWNlLHA9by50b1N0cmluZyxpPW8uaGFzT3duUHJvcGVydHksdD1BcnJheS5pc0FycmF5LGE9T2JqZWN0LmtleXMsbD1PYmplY3QuY3JlYXRlLGY9ZnVuY3Rpb24oKXt9LGg9ZnVuY3Rpb24obil7cmV0dXJuIG4gaW5zdGFuY2VvZiBoP246dGhpcyBpbnN0YW5jZW9mIGg/dm9pZCh0aGlzLl93cmFwcGVkPW4pOm5ldyBoKG4pfTtcInVuZGVmaW5lZFwiPT10eXBlb2YgZXhwb3J0c3x8ZXhwb3J0cy5ub2RlVHlwZT9uLl89aDooXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmIW1vZHVsZS5ub2RlVHlwZSYmbW9kdWxlLmV4cG9ydHMmJihleHBvcnRzPW1vZHVsZS5leHBvcnRzPWgpLGV4cG9ydHMuXz1oKSxoLlZFUlNJT049XCIxLjkuMVwiO3ZhciB2LHk9ZnVuY3Rpb24odSxpLG4pe2lmKHZvaWQgMD09PWkpcmV0dXJuIHU7c3dpdGNoKG51bGw9PW4/MzpuKXtjYXNlIDE6cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiB1LmNhbGwoaSxuKX07Y2FzZSAzOnJldHVybiBmdW5jdGlvbihuLHIsdCl7cmV0dXJuIHUuY2FsbChpLG4scix0KX07Y2FzZSA0OnJldHVybiBmdW5jdGlvbihuLHIsdCxlKXtyZXR1cm4gdS5jYWxsKGksbixyLHQsZSl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiB1LmFwcGx5KGksYXJndW1lbnRzKX19LGQ9ZnVuY3Rpb24obixyLHQpe3JldHVybiBoLml0ZXJhdGVlIT09dj9oLml0ZXJhdGVlKG4scik6bnVsbD09bj9oLmlkZW50aXR5OmguaXNGdW5jdGlvbihuKT95KG4scix0KTpoLmlzT2JqZWN0KG4pJiYhaC5pc0FycmF5KG4pP2gubWF0Y2hlcihuKTpoLnByb3BlcnR5KG4pfTtoLml0ZXJhdGVlPXY9ZnVuY3Rpb24obixyKXtyZXR1cm4gZChuLHIsMS8wKX07dmFyIGc9ZnVuY3Rpb24odSxpKXtyZXR1cm4gaT1udWxsPT1pP3UubGVuZ3RoLTE6K2ksZnVuY3Rpb24oKXtmb3IodmFyIG49TWF0aC5tYXgoYXJndW1lbnRzLmxlbmd0aC1pLDApLHI9QXJyYXkobiksdD0wO3Q8bjt0Kyspclt0XT1hcmd1bWVudHNbdCtpXTtzd2l0Y2goaSl7Y2FzZSAwOnJldHVybiB1LmNhbGwodGhpcyxyKTtjYXNlIDE6cmV0dXJuIHUuY2FsbCh0aGlzLGFyZ3VtZW50c1swXSxyKTtjYXNlIDI6cmV0dXJuIHUuY2FsbCh0aGlzLGFyZ3VtZW50c1swXSxhcmd1bWVudHNbMV0scil9dmFyIGU9QXJyYXkoaSsxKTtmb3IodD0wO3Q8aTt0KyspZVt0XT1hcmd1bWVudHNbdF07cmV0dXJuIGVbaV09cix1LmFwcGx5KHRoaXMsZSl9fSxtPWZ1bmN0aW9uKG4pe2lmKCFoLmlzT2JqZWN0KG4pKXJldHVybnt9O2lmKGwpcmV0dXJuIGwobik7Zi5wcm90b3R5cGU9bjt2YXIgcj1uZXcgZjtyZXR1cm4gZi5wcm90b3R5cGU9bnVsbCxyfSxiPWZ1bmN0aW9uKHIpe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gbnVsbD09bj92b2lkIDA6bltyXX19LGo9ZnVuY3Rpb24obixyKXtyZXR1cm4gbnVsbCE9biYmaS5jYWxsKG4scil9LHg9ZnVuY3Rpb24obixyKXtmb3IodmFyIHQ9ci5sZW5ndGgsZT0wO2U8dDtlKyspe2lmKG51bGw9PW4pcmV0dXJuO249bltyW2VdXX1yZXR1cm4gdD9uOnZvaWQgMH0sXz1NYXRoLnBvdygyLDUzKS0xLEE9YihcImxlbmd0aFwiKSx3PWZ1bmN0aW9uKG4pe3ZhciByPUEobik7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHImJjA8PXImJnI8PV99O2guZWFjaD1oLmZvckVhY2g9ZnVuY3Rpb24obixyLHQpe3ZhciBlLHU7aWYocj15KHIsdCksdyhuKSlmb3IoZT0wLHU9bi5sZW5ndGg7ZTx1O2UrKylyKG5bZV0sZSxuKTtlbHNle3ZhciBpPWgua2V5cyhuKTtmb3IoZT0wLHU9aS5sZW5ndGg7ZTx1O2UrKylyKG5baVtlXV0saVtlXSxuKX1yZXR1cm4gbn0saC5tYXA9aC5jb2xsZWN0PWZ1bmN0aW9uKG4scix0KXtyPWQocix0KTtmb3IodmFyIGU9IXcobikmJmgua2V5cyhuKSx1PShlfHxuKS5sZW5ndGgsaT1BcnJheSh1KSxvPTA7bzx1O28rKyl7dmFyIGE9ZT9lW29dOm87aVtvXT1yKG5bYV0sYSxuKX1yZXR1cm4gaX07dmFyIE89ZnVuY3Rpb24oYyl7cmV0dXJuIGZ1bmN0aW9uKG4scix0LGUpe3ZhciB1PTM8PWFyZ3VtZW50cy5sZW5ndGg7cmV0dXJuIGZ1bmN0aW9uKG4scix0LGUpe3ZhciB1PSF3KG4pJiZoLmtleXMobiksaT0odXx8bikubGVuZ3RoLG89MDxjPzA6aS0xO2ZvcihlfHwodD1uW3U/dVtvXTpvXSxvKz1jKTswPD1vJiZvPGk7bys9Yyl7dmFyIGE9dT91W29dOm87dD1yKHQsblthXSxhLG4pfXJldHVybiB0fShuLHkocixlLDQpLHQsdSl9fTtoLnJlZHVjZT1oLmZvbGRsPWguaW5qZWN0PU8oMSksaC5yZWR1Y2VSaWdodD1oLmZvbGRyPU8oLTEpLGguZmluZD1oLmRldGVjdD1mdW5jdGlvbihuLHIsdCl7dmFyIGU9KHcobik/aC5maW5kSW5kZXg6aC5maW5kS2V5KShuLHIsdCk7aWYodm9pZCAwIT09ZSYmLTEhPT1lKXJldHVybiBuW2VdfSxoLmZpbHRlcj1oLnNlbGVjdD1mdW5jdGlvbihuLGUscil7dmFyIHU9W107cmV0dXJuIGU9ZChlLHIpLGguZWFjaChuLGZ1bmN0aW9uKG4scix0KXtlKG4scix0KSYmdS5wdXNoKG4pfSksdX0saC5yZWplY3Q9ZnVuY3Rpb24obixyLHQpe3JldHVybiBoLmZpbHRlcihuLGgubmVnYXRlKGQocikpLHQpfSxoLmV2ZXJ5PWguYWxsPWZ1bmN0aW9uKG4scix0KXtyPWQocix0KTtmb3IodmFyIGU9IXcobikmJmgua2V5cyhuKSx1PShlfHxuKS5sZW5ndGgsaT0wO2k8dTtpKyspe3ZhciBvPWU/ZVtpXTppO2lmKCFyKG5bb10sbyxuKSlyZXR1cm4hMX1yZXR1cm4hMH0saC5zb21lPWguYW55PWZ1bmN0aW9uKG4scix0KXtyPWQocix0KTtmb3IodmFyIGU9IXcobikmJmgua2V5cyhuKSx1PShlfHxuKS5sZW5ndGgsaT0wO2k8dTtpKyspe3ZhciBvPWU/ZVtpXTppO2lmKHIobltvXSxvLG4pKXJldHVybiEwfXJldHVybiExfSxoLmNvbnRhaW5zPWguaW5jbHVkZXM9aC5pbmNsdWRlPWZ1bmN0aW9uKG4scix0LGUpe3JldHVybiB3KG4pfHwobj1oLnZhbHVlcyhuKSksKFwibnVtYmVyXCIhPXR5cGVvZiB0fHxlKSYmKHQ9MCksMDw9aC5pbmRleE9mKG4scix0KX0saC5pbnZva2U9ZyhmdW5jdGlvbihuLHQsZSl7dmFyIHUsaTtyZXR1cm4gaC5pc0Z1bmN0aW9uKHQpP2k9dDpoLmlzQXJyYXkodCkmJih1PXQuc2xpY2UoMCwtMSksdD10W3QubGVuZ3RoLTFdKSxoLm1hcChuLGZ1bmN0aW9uKG4pe3ZhciByPWk7aWYoIXIpe2lmKHUmJnUubGVuZ3RoJiYobj14KG4sdSkpLG51bGw9PW4pcmV0dXJuO3I9blt0XX1yZXR1cm4gbnVsbD09cj9yOnIuYXBwbHkobixlKX0pfSksaC5wbHVjaz1mdW5jdGlvbihuLHIpe3JldHVybiBoLm1hcChuLGgucHJvcGVydHkocikpfSxoLndoZXJlPWZ1bmN0aW9uKG4scil7cmV0dXJuIGguZmlsdGVyKG4saC5tYXRjaGVyKHIpKX0saC5maW5kV2hlcmU9ZnVuY3Rpb24obixyKXtyZXR1cm4gaC5maW5kKG4saC5tYXRjaGVyKHIpKX0saC5tYXg9ZnVuY3Rpb24obixlLHIpe3ZhciB0LHUsaT0tMS8wLG89LTEvMDtpZihudWxsPT1lfHxcIm51bWJlclwiPT10eXBlb2YgZSYmXCJvYmplY3RcIiE9dHlwZW9mIG5bMF0mJm51bGwhPW4pZm9yKHZhciBhPTAsYz0obj13KG4pP246aC52YWx1ZXMobikpLmxlbmd0aDthPGM7YSsrKW51bGwhPSh0PW5bYV0pJiZpPHQmJihpPXQpO2Vsc2UgZT1kKGUsciksaC5lYWNoKG4sZnVuY3Rpb24obixyLHQpe3U9ZShuLHIsdCksKG88dXx8dT09PS0xLzAmJmk9PT0tMS8wKSYmKGk9bixvPXUpfSk7cmV0dXJuIGl9LGgubWluPWZ1bmN0aW9uKG4sZSxyKXt2YXIgdCx1LGk9MS8wLG89MS8wO2lmKG51bGw9PWV8fFwibnVtYmVyXCI9PXR5cGVvZiBlJiZcIm9iamVjdFwiIT10eXBlb2YgblswXSYmbnVsbCE9bilmb3IodmFyIGE9MCxjPShuPXcobik/bjpoLnZhbHVlcyhuKSkubGVuZ3RoO2E8YzthKyspbnVsbCE9KHQ9blthXSkmJnQ8aSYmKGk9dCk7ZWxzZSBlPWQoZSxyKSxoLmVhY2gobixmdW5jdGlvbihuLHIsdCl7KCh1PWUobixyLHQpKTxvfHx1PT09MS8wJiZpPT09MS8wKSYmKGk9bixvPXUpfSk7cmV0dXJuIGl9LGguc2h1ZmZsZT1mdW5jdGlvbihuKXtyZXR1cm4gaC5zYW1wbGUobiwxLzApfSxoLnNhbXBsZT1mdW5jdGlvbihuLHIsdCl7aWYobnVsbD09cnx8dClyZXR1cm4gdyhuKXx8KG49aC52YWx1ZXMobikpLG5baC5yYW5kb20obi5sZW5ndGgtMSldO3ZhciBlPXcobik/aC5jbG9uZShuKTpoLnZhbHVlcyhuKSx1PUEoZSk7cj1NYXRoLm1heChNYXRoLm1pbihyLHUpLDApO2Zvcih2YXIgaT11LTEsbz0wO288cjtvKyspe3ZhciBhPWgucmFuZG9tKG8saSksYz1lW29dO2Vbb109ZVthXSxlW2FdPWN9cmV0dXJuIGUuc2xpY2UoMCxyKX0saC5zb3J0Qnk9ZnVuY3Rpb24obixlLHIpe3ZhciB1PTA7cmV0dXJuIGU9ZChlLHIpLGgucGx1Y2soaC5tYXAobixmdW5jdGlvbihuLHIsdCl7cmV0dXJue3ZhbHVlOm4saW5kZXg6dSsrLGNyaXRlcmlhOmUobixyLHQpfX0pLnNvcnQoZnVuY3Rpb24obixyKXt2YXIgdD1uLmNyaXRlcmlhLGU9ci5jcml0ZXJpYTtpZih0IT09ZSl7aWYoZTx0fHx2b2lkIDA9PT10KXJldHVybiAxO2lmKHQ8ZXx8dm9pZCAwPT09ZSlyZXR1cm4tMX1yZXR1cm4gbi5pbmRleC1yLmluZGV4fSksXCJ2YWx1ZVwiKX07dmFyIGs9ZnVuY3Rpb24obyxyKXtyZXR1cm4gZnVuY3Rpb24oZSx1LG4pe3ZhciBpPXI/W1tdLFtdXTp7fTtyZXR1cm4gdT1kKHUsbiksaC5lYWNoKGUsZnVuY3Rpb24obixyKXt2YXIgdD11KG4scixlKTtvKGksbix0KX0pLGl9fTtoLmdyb3VwQnk9ayhmdW5jdGlvbihuLHIsdCl7aihuLHQpP25bdF0ucHVzaChyKTpuW3RdPVtyXX0pLGguaW5kZXhCeT1rKGZ1bmN0aW9uKG4scix0KXtuW3RdPXJ9KSxoLmNvdW50Qnk9ayhmdW5jdGlvbihuLHIsdCl7aihuLHQpP25bdF0rKzpuW3RdPTF9KTt2YXIgUz0vW15cXHVkODAwLVxcdWRmZmZdfFtcXHVkODAwLVxcdWRiZmZdW1xcdWRjMDAtXFx1ZGZmZl18W1xcdWQ4MDAtXFx1ZGZmZl0vZztoLnRvQXJyYXk9ZnVuY3Rpb24obil7cmV0dXJuIG4/aC5pc0FycmF5KG4pP2MuY2FsbChuKTpoLmlzU3RyaW5nKG4pP24ubWF0Y2goUyk6dyhuKT9oLm1hcChuLGguaWRlbnRpdHkpOmgudmFsdWVzKG4pOltdfSxoLnNpemU9ZnVuY3Rpb24obil7cmV0dXJuIG51bGw9PW4/MDp3KG4pP24ubGVuZ3RoOmgua2V5cyhuKS5sZW5ndGh9LGgucGFydGl0aW9uPWsoZnVuY3Rpb24obixyLHQpe25bdD8wOjFdLnB1c2gocil9LCEwKSxoLmZpcnN0PWguaGVhZD1oLnRha2U9ZnVuY3Rpb24obixyLHQpe3JldHVybiBudWxsPT1ufHxuLmxlbmd0aDwxP251bGw9PXI/dm9pZCAwOltdOm51bGw9PXJ8fHQ/blswXTpoLmluaXRpYWwobixuLmxlbmd0aC1yKX0saC5pbml0aWFsPWZ1bmN0aW9uKG4scix0KXtyZXR1cm4gYy5jYWxsKG4sMCxNYXRoLm1heCgwLG4ubGVuZ3RoLShudWxsPT1yfHx0PzE6cikpKX0saC5sYXN0PWZ1bmN0aW9uKG4scix0KXtyZXR1cm4gbnVsbD09bnx8bi5sZW5ndGg8MT9udWxsPT1yP3ZvaWQgMDpbXTpudWxsPT1yfHx0P25bbi5sZW5ndGgtMV06aC5yZXN0KG4sTWF0aC5tYXgoMCxuLmxlbmd0aC1yKSl9LGgucmVzdD1oLnRhaWw9aC5kcm9wPWZ1bmN0aW9uKG4scix0KXtyZXR1cm4gYy5jYWxsKG4sbnVsbD09cnx8dD8xOnIpfSxoLmNvbXBhY3Q9ZnVuY3Rpb24obil7cmV0dXJuIGguZmlsdGVyKG4sQm9vbGVhbil9O3ZhciBNPWZ1bmN0aW9uKG4scix0LGUpe2Zvcih2YXIgdT0oZT1lfHxbXSkubGVuZ3RoLGk9MCxvPUEobik7aTxvO2krKyl7dmFyIGE9bltpXTtpZih3KGEpJiYoaC5pc0FycmF5KGEpfHxoLmlzQXJndW1lbnRzKGEpKSlpZihyKWZvcih2YXIgYz0wLGw9YS5sZW5ndGg7YzxsOyllW3UrK109YVtjKytdO2Vsc2UgTShhLHIsdCxlKSx1PWUubGVuZ3RoO2Vsc2UgdHx8KGVbdSsrXT1hKX1yZXR1cm4gZX07aC5mbGF0dGVuPWZ1bmN0aW9uKG4scil7cmV0dXJuIE0obixyLCExKX0saC53aXRob3V0PWcoZnVuY3Rpb24obixyKXtyZXR1cm4gaC5kaWZmZXJlbmNlKG4scil9KSxoLnVuaXE9aC51bmlxdWU9ZnVuY3Rpb24obixyLHQsZSl7aC5pc0Jvb2xlYW4ocil8fChlPXQsdD1yLHI9ITEpLG51bGwhPXQmJih0PWQodCxlKSk7Zm9yKHZhciB1PVtdLGk9W10sbz0wLGE9QShuKTtvPGE7bysrKXt2YXIgYz1uW29dLGw9dD90KGMsbyxuKTpjO3ImJiF0PyhvJiZpPT09bHx8dS5wdXNoKGMpLGk9bCk6dD9oLmNvbnRhaW5zKGksbCl8fChpLnB1c2gobCksdS5wdXNoKGMpKTpoLmNvbnRhaW5zKHUsYyl8fHUucHVzaChjKX1yZXR1cm4gdX0saC51bmlvbj1nKGZ1bmN0aW9uKG4pe3JldHVybiBoLnVuaXEoTShuLCEwLCEwKSl9KSxoLmludGVyc2VjdGlvbj1mdW5jdGlvbihuKXtmb3IodmFyIHI9W10sdD1hcmd1bWVudHMubGVuZ3RoLGU9MCx1PUEobik7ZTx1O2UrKyl7dmFyIGk9bltlXTtpZighaC5jb250YWlucyhyLGkpKXt2YXIgbztmb3Iobz0xO288dCYmaC5jb250YWlucyhhcmd1bWVudHNbb10saSk7bysrKTtvPT09dCYmci5wdXNoKGkpfX1yZXR1cm4gcn0saC5kaWZmZXJlbmNlPWcoZnVuY3Rpb24obixyKXtyZXR1cm4gcj1NKHIsITAsITApLGguZmlsdGVyKG4sZnVuY3Rpb24obil7cmV0dXJuIWguY29udGFpbnMocixuKX0pfSksaC51bnppcD1mdW5jdGlvbihuKXtmb3IodmFyIHI9biYmaC5tYXgobixBKS5sZW5ndGh8fDAsdD1BcnJheShyKSxlPTA7ZTxyO2UrKyl0W2VdPWgucGx1Y2sobixlKTtyZXR1cm4gdH0saC56aXA9ZyhoLnVuemlwKSxoLm9iamVjdD1mdW5jdGlvbihuLHIpe2Zvcih2YXIgdD17fSxlPTAsdT1BKG4pO2U8dTtlKyspcj90W25bZV1dPXJbZV06dFtuW2VdWzBdXT1uW2VdWzFdO3JldHVybiB0fTt2YXIgRj1mdW5jdGlvbihpKXtyZXR1cm4gZnVuY3Rpb24obixyLHQpe3I9ZChyLHQpO2Zvcih2YXIgZT1BKG4pLHU9MDxpPzA6ZS0xOzA8PXUmJnU8ZTt1Kz1pKWlmKHIoblt1XSx1LG4pKXJldHVybiB1O3JldHVybi0xfX07aC5maW5kSW5kZXg9RigxKSxoLmZpbmRMYXN0SW5kZXg9RigtMSksaC5zb3J0ZWRJbmRleD1mdW5jdGlvbihuLHIsdCxlKXtmb3IodmFyIHU9KHQ9ZCh0LGUsMSkpKHIpLGk9MCxvPUEobik7aTxvOyl7dmFyIGE9TWF0aC5mbG9vcigoaStvKS8yKTt0KG5bYV0pPHU/aT1hKzE6bz1hfXJldHVybiBpfTt2YXIgRT1mdW5jdGlvbihpLG8sYSl7cmV0dXJuIGZ1bmN0aW9uKG4scix0KXt2YXIgZT0wLHU9QShuKTtpZihcIm51bWJlclwiPT10eXBlb2YgdCkwPGk/ZT0wPD10P3Q6TWF0aC5tYXgodCt1LGUpOnU9MDw9dD9NYXRoLm1pbih0KzEsdSk6dCt1KzE7ZWxzZSBpZihhJiZ0JiZ1KXJldHVybiBuW3Q9YShuLHIpXT09PXI/dDotMTtpZihyIT1yKXJldHVybiAwPD0odD1vKGMuY2FsbChuLGUsdSksaC5pc05hTikpP3QrZTotMTtmb3IodD0wPGk/ZTp1LTE7MDw9dCYmdDx1O3QrPWkpaWYoblt0XT09PXIpcmV0dXJuIHQ7cmV0dXJuLTF9fTtoLmluZGV4T2Y9RSgxLGguZmluZEluZGV4LGguc29ydGVkSW5kZXgpLGgubGFzdEluZGV4T2Y9RSgtMSxoLmZpbmRMYXN0SW5kZXgpLGgucmFuZ2U9ZnVuY3Rpb24obixyLHQpe251bGw9PXImJihyPW58fDAsbj0wKSx0fHwodD1yPG4/LTE6MSk7Zm9yKHZhciBlPU1hdGgubWF4KE1hdGguY2VpbCgoci1uKS90KSwwKSx1PUFycmF5KGUpLGk9MDtpPGU7aSsrLG4rPXQpdVtpXT1uO3JldHVybiB1fSxoLmNodW5rPWZ1bmN0aW9uKG4scil7aWYobnVsbD09cnx8cjwxKXJldHVybltdO2Zvcih2YXIgdD1bXSxlPTAsdT1uLmxlbmd0aDtlPHU7KXQucHVzaChjLmNhbGwobixlLGUrPXIpKTtyZXR1cm4gdH07dmFyIE49ZnVuY3Rpb24obixyLHQsZSx1KXtpZighKGUgaW5zdGFuY2VvZiByKSlyZXR1cm4gbi5hcHBseSh0LHUpO3ZhciBpPW0obi5wcm90b3R5cGUpLG89bi5hcHBseShpLHUpO3JldHVybiBoLmlzT2JqZWN0KG8pP286aX07aC5iaW5kPWcoZnVuY3Rpb24ocix0LGUpe2lmKCFoLmlzRnVuY3Rpb24ocikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkJpbmQgbXVzdCBiZSBjYWxsZWQgb24gYSBmdW5jdGlvblwiKTt2YXIgdT1nKGZ1bmN0aW9uKG4pe3JldHVybiBOKHIsdSx0LHRoaXMsZS5jb25jYXQobikpfSk7cmV0dXJuIHV9KSxoLnBhcnRpYWw9ZyhmdW5jdGlvbih1LGkpe3ZhciBvPWgucGFydGlhbC5wbGFjZWhvbGRlcixhPWZ1bmN0aW9uKCl7Zm9yKHZhciBuPTAscj1pLmxlbmd0aCx0PUFycmF5KHIpLGU9MDtlPHI7ZSsrKXRbZV09aVtlXT09PW8/YXJndW1lbnRzW24rK106aVtlXTtmb3IoO248YXJndW1lbnRzLmxlbmd0aDspdC5wdXNoKGFyZ3VtZW50c1tuKytdKTtyZXR1cm4gTih1LGEsdGhpcyx0aGlzLHQpfTtyZXR1cm4gYX0pLChoLnBhcnRpYWwucGxhY2Vob2xkZXI9aCkuYmluZEFsbD1nKGZ1bmN0aW9uKG4scil7dmFyIHQ9KHI9TShyLCExLCExKSkubGVuZ3RoO2lmKHQ8MSl0aHJvdyBuZXcgRXJyb3IoXCJiaW5kQWxsIG11c3QgYmUgcGFzc2VkIGZ1bmN0aW9uIG5hbWVzXCIpO2Zvcig7dC0tOyl7dmFyIGU9clt0XTtuW2VdPWguYmluZChuW2VdLG4pfX0pLGgubWVtb2l6ZT1mdW5jdGlvbihlLHUpe3ZhciBpPWZ1bmN0aW9uKG4pe3ZhciByPWkuY2FjaGUsdD1cIlwiKyh1P3UuYXBwbHkodGhpcyxhcmd1bWVudHMpOm4pO3JldHVybiBqKHIsdCl8fChyW3RdPWUuYXBwbHkodGhpcyxhcmd1bWVudHMpKSxyW3RdfTtyZXR1cm4gaS5jYWNoZT17fSxpfSxoLmRlbGF5PWcoZnVuY3Rpb24obixyLHQpe3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIG4uYXBwbHkobnVsbCx0KX0scil9KSxoLmRlZmVyPWgucGFydGlhbChoLmRlbGF5LGgsMSksaC50aHJvdHRsZT1mdW5jdGlvbih0LGUsdSl7dmFyIGksbyxhLGMsbD0wO3V8fCh1PXt9KTt2YXIgZj1mdW5jdGlvbigpe2w9ITE9PT11LmxlYWRpbmc/MDpoLm5vdygpLGk9bnVsbCxjPXQuYXBwbHkobyxhKSxpfHwobz1hPW51bGwpfSxuPWZ1bmN0aW9uKCl7dmFyIG49aC5ub3coKTtsfHwhMSE9PXUubGVhZGluZ3x8KGw9bik7dmFyIHI9ZS0obi1sKTtyZXR1cm4gbz10aGlzLGE9YXJndW1lbnRzLHI8PTB8fGU8cj8oaSYmKGNsZWFyVGltZW91dChpKSxpPW51bGwpLGw9bixjPXQuYXBwbHkobyxhKSxpfHwobz1hPW51bGwpKTppfHwhMT09PXUudHJhaWxpbmd8fChpPXNldFRpbWVvdXQoZixyKSksY307cmV0dXJuIG4uY2FuY2VsPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGkpLGw9MCxpPW89YT1udWxsfSxufSxoLmRlYm91bmNlPWZ1bmN0aW9uKHQsZSx1KXt2YXIgaSxvLGE9ZnVuY3Rpb24obixyKXtpPW51bGwsciYmKG89dC5hcHBseShuLHIpKX0sbj1nKGZ1bmN0aW9uKG4pe2lmKGkmJmNsZWFyVGltZW91dChpKSx1KXt2YXIgcj0haTtpPXNldFRpbWVvdXQoYSxlKSxyJiYobz10LmFwcGx5KHRoaXMsbikpfWVsc2UgaT1oLmRlbGF5KGEsZSx0aGlzLG4pO3JldHVybiBvfSk7cmV0dXJuIG4uY2FuY2VsPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGkpLGk9bnVsbH0sbn0saC53cmFwPWZ1bmN0aW9uKG4scil7cmV0dXJuIGgucGFydGlhbChyLG4pfSxoLm5lZ2F0ZT1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4hbi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSxoLmNvbXBvc2U9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMsZT10Lmxlbmd0aC0xO3JldHVybiBmdW5jdGlvbigpe2Zvcih2YXIgbj1lLHI9dFtlXS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7bi0tOylyPXRbbl0uY2FsbCh0aGlzLHIpO3JldHVybiByfX0saC5hZnRlcj1mdW5jdGlvbihuLHIpe3JldHVybiBmdW5jdGlvbigpe2lmKC0tbjwxKXJldHVybiByLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19LGguYmVmb3JlPWZ1bmN0aW9uKG4scil7dmFyIHQ7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIDA8LS1uJiYodD1yLmFwcGx5KHRoaXMsYXJndW1lbnRzKSksbjw9MSYmKHI9bnVsbCksdH19LGgub25jZT1oLnBhcnRpYWwoaC5iZWZvcmUsMiksaC5yZXN0QXJndW1lbnRzPWc7dmFyIEk9IXt0b1N0cmluZzpudWxsfS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcInRvU3RyaW5nXCIpLFQ9W1widmFsdWVPZlwiLFwiaXNQcm90b3R5cGVPZlwiLFwidG9TdHJpbmdcIixcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsXCJoYXNPd25Qcm9wZXJ0eVwiLFwidG9Mb2NhbGVTdHJpbmdcIl0sQj1mdW5jdGlvbihuLHIpe3ZhciB0PVQubGVuZ3RoLGU9bi5jb25zdHJ1Y3Rvcix1PWguaXNGdW5jdGlvbihlKSYmZS5wcm90b3R5cGV8fG8saT1cImNvbnN0cnVjdG9yXCI7Zm9yKGoobixpKSYmIWguY29udGFpbnMocixpKSYmci5wdXNoKGkpO3QtLTspKGk9VFt0XSlpbiBuJiZuW2ldIT09dVtpXSYmIWguY29udGFpbnMocixpKSYmci5wdXNoKGkpfTtoLmtleXM9ZnVuY3Rpb24obil7aWYoIWguaXNPYmplY3QobikpcmV0dXJuW107aWYoYSlyZXR1cm4gYShuKTt2YXIgcj1bXTtmb3IodmFyIHQgaW4gbilqKG4sdCkmJnIucHVzaCh0KTtyZXR1cm4gSSYmQihuLHIpLHJ9LGguYWxsS2V5cz1mdW5jdGlvbihuKXtpZighaC5pc09iamVjdChuKSlyZXR1cm5bXTt2YXIgcj1bXTtmb3IodmFyIHQgaW4gbilyLnB1c2godCk7cmV0dXJuIEkmJkIobixyKSxyfSxoLnZhbHVlcz1mdW5jdGlvbihuKXtmb3IodmFyIHI9aC5rZXlzKG4pLHQ9ci5sZW5ndGgsZT1BcnJheSh0KSx1PTA7dTx0O3UrKyllW3VdPW5bclt1XV07cmV0dXJuIGV9LGgubWFwT2JqZWN0PWZ1bmN0aW9uKG4scix0KXtyPWQocix0KTtmb3IodmFyIGU9aC5rZXlzKG4pLHU9ZS5sZW5ndGgsaT17fSxvPTA7bzx1O28rKyl7dmFyIGE9ZVtvXTtpW2FdPXIoblthXSxhLG4pfXJldHVybiBpfSxoLnBhaXJzPWZ1bmN0aW9uKG4pe2Zvcih2YXIgcj1oLmtleXMobiksdD1yLmxlbmd0aCxlPUFycmF5KHQpLHU9MDt1PHQ7dSsrKWVbdV09W3JbdV0sbltyW3VdXV07cmV0dXJuIGV9LGguaW52ZXJ0PWZ1bmN0aW9uKG4pe2Zvcih2YXIgcj17fSx0PWgua2V5cyhuKSxlPTAsdT10Lmxlbmd0aDtlPHU7ZSsrKXJbblt0W2VdXV09dFtlXTtyZXR1cm4gcn0saC5mdW5jdGlvbnM9aC5tZXRob2RzPWZ1bmN0aW9uKG4pe3ZhciByPVtdO2Zvcih2YXIgdCBpbiBuKWguaXNGdW5jdGlvbihuW3RdKSYmci5wdXNoKHQpO3JldHVybiByLnNvcnQoKX07dmFyIFI9ZnVuY3Rpb24oYyxsKXtyZXR1cm4gZnVuY3Rpb24obil7dmFyIHI9YXJndW1lbnRzLmxlbmd0aDtpZihsJiYobj1PYmplY3QobikpLHI8Mnx8bnVsbD09bilyZXR1cm4gbjtmb3IodmFyIHQ9MTt0PHI7dCsrKWZvcih2YXIgZT1hcmd1bWVudHNbdF0sdT1jKGUpLGk9dS5sZW5ndGgsbz0wO288aTtvKyspe3ZhciBhPXVbb107bCYmdm9pZCAwIT09blthXXx8KG5bYV09ZVthXSl9cmV0dXJuIG59fTtoLmV4dGVuZD1SKGguYWxsS2V5cyksaC5leHRlbmRPd249aC5hc3NpZ249UihoLmtleXMpLGguZmluZEtleT1mdW5jdGlvbihuLHIsdCl7cj1kKHIsdCk7Zm9yKHZhciBlLHU9aC5rZXlzKG4pLGk9MCxvPXUubGVuZ3RoO2k8bztpKyspaWYocihuW2U9dVtpXV0sZSxuKSlyZXR1cm4gZX07dmFyIHEsSyx6PWZ1bmN0aW9uKG4scix0KXtyZXR1cm4gciBpbiB0fTtoLnBpY2s9ZyhmdW5jdGlvbihuLHIpe3ZhciB0PXt9LGU9clswXTtpZihudWxsPT1uKXJldHVybiB0O2guaXNGdW5jdGlvbihlKT8oMTxyLmxlbmd0aCYmKGU9eShlLHJbMV0pKSxyPWguYWxsS2V5cyhuKSk6KGU9eixyPU0ociwhMSwhMSksbj1PYmplY3QobikpO2Zvcih2YXIgdT0wLGk9ci5sZW5ndGg7dTxpO3UrKyl7dmFyIG89clt1XSxhPW5bb107ZShhLG8sbikmJih0W29dPWEpfXJldHVybiB0fSksaC5vbWl0PWcoZnVuY3Rpb24obix0KXt2YXIgcixlPXRbMF07cmV0dXJuIGguaXNGdW5jdGlvbihlKT8oZT1oLm5lZ2F0ZShlKSwxPHQubGVuZ3RoJiYocj10WzFdKSk6KHQ9aC5tYXAoTSh0LCExLCExKSxTdHJpbmcpLGU9ZnVuY3Rpb24obixyKXtyZXR1cm4haC5jb250YWlucyh0LHIpfSksaC5waWNrKG4sZSxyKX0pLGguZGVmYXVsdHM9UihoLmFsbEtleXMsITApLGguY3JlYXRlPWZ1bmN0aW9uKG4scil7dmFyIHQ9bShuKTtyZXR1cm4gciYmaC5leHRlbmRPd24odCxyKSx0fSxoLmNsb25lPWZ1bmN0aW9uKG4pe3JldHVybiBoLmlzT2JqZWN0KG4pP2guaXNBcnJheShuKT9uLnNsaWNlKCk6aC5leHRlbmQoe30sbik6bn0saC50YXA9ZnVuY3Rpb24obixyKXtyZXR1cm4gcihuKSxufSxoLmlzTWF0Y2g9ZnVuY3Rpb24obixyKXt2YXIgdD1oLmtleXMociksZT10Lmxlbmd0aDtpZihudWxsPT1uKXJldHVybiFlO2Zvcih2YXIgdT1PYmplY3QobiksaT0wO2k8ZTtpKyspe3ZhciBvPXRbaV07aWYocltvXSE9PXVbb118fCEobyBpbiB1KSlyZXR1cm4hMX1yZXR1cm4hMH0scT1mdW5jdGlvbihuLHIsdCxlKXtpZihuPT09cilyZXR1cm4gMCE9PW58fDEvbj09MS9yO2lmKG51bGw9PW58fG51bGw9PXIpcmV0dXJuITE7aWYobiE9bilyZXR1cm4gciE9cjt2YXIgdT10eXBlb2YgbjtyZXR1cm4oXCJmdW5jdGlvblwiPT09dXx8XCJvYmplY3RcIj09PXV8fFwib2JqZWN0XCI9PXR5cGVvZiByKSYmSyhuLHIsdCxlKX0sSz1mdW5jdGlvbihuLHIsdCxlKXtuIGluc3RhbmNlb2YgaCYmKG49bi5fd3JhcHBlZCksciBpbnN0YW5jZW9mIGgmJihyPXIuX3dyYXBwZWQpO3ZhciB1PXAuY2FsbChuKTtpZih1IT09cC5jYWxsKHIpKXJldHVybiExO3N3aXRjaCh1KXtjYXNlXCJbb2JqZWN0IFJlZ0V4cF1cIjpjYXNlXCJbb2JqZWN0IFN0cmluZ11cIjpyZXR1cm5cIlwiK249PVwiXCIrcjtjYXNlXCJbb2JqZWN0IE51bWJlcl1cIjpyZXR1cm4rbiE9K24/K3IhPStyOjA9PStuPzEvK249PTEvcjorbj09K3I7Y2FzZVwiW29iamVjdCBEYXRlXVwiOmNhc2VcIltvYmplY3QgQm9vbGVhbl1cIjpyZXR1cm4rbj09K3I7Y2FzZVwiW29iamVjdCBTeW1ib2xdXCI6cmV0dXJuIHMudmFsdWVPZi5jYWxsKG4pPT09cy52YWx1ZU9mLmNhbGwocil9dmFyIGk9XCJbb2JqZWN0IEFycmF5XVwiPT09dTtpZighaSl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIG58fFwib2JqZWN0XCIhPXR5cGVvZiByKXJldHVybiExO3ZhciBvPW4uY29uc3RydWN0b3IsYT1yLmNvbnN0cnVjdG9yO2lmKG8hPT1hJiYhKGguaXNGdW5jdGlvbihvKSYmbyBpbnN0YW5jZW9mIG8mJmguaXNGdW5jdGlvbihhKSYmYSBpbnN0YW5jZW9mIGEpJiZcImNvbnN0cnVjdG9yXCJpbiBuJiZcImNvbnN0cnVjdG9yXCJpbiByKXJldHVybiExfWU9ZXx8W107Zm9yKHZhciBjPSh0PXR8fFtdKS5sZW5ndGg7Yy0tOylpZih0W2NdPT09bilyZXR1cm4gZVtjXT09PXI7aWYodC5wdXNoKG4pLGUucHVzaChyKSxpKXtpZigoYz1uLmxlbmd0aCkhPT1yLmxlbmd0aClyZXR1cm4hMTtmb3IoO2MtLTspaWYoIXEobltjXSxyW2NdLHQsZSkpcmV0dXJuITF9ZWxzZXt2YXIgbCxmPWgua2V5cyhuKTtpZihjPWYubGVuZ3RoLGgua2V5cyhyKS5sZW5ndGghPT1jKXJldHVybiExO2Zvcig7Yy0tOylpZihsPWZbY10sIWoocixsKXx8IXEobltsXSxyW2xdLHQsZSkpcmV0dXJuITF9cmV0dXJuIHQucG9wKCksZS5wb3AoKSwhMH0saC5pc0VxdWFsPWZ1bmN0aW9uKG4scil7cmV0dXJuIHEobixyKX0saC5pc0VtcHR5PWZ1bmN0aW9uKG4pe3JldHVybiBudWxsPT1ufHwodyhuKSYmKGguaXNBcnJheShuKXx8aC5pc1N0cmluZyhuKXx8aC5pc0FyZ3VtZW50cyhuKSk/MD09PW4ubGVuZ3RoOjA9PT1oLmtleXMobikubGVuZ3RoKX0saC5pc0VsZW1lbnQ9ZnVuY3Rpb24obil7cmV0dXJuISghbnx8MSE9PW4ubm9kZVR5cGUpfSxoLmlzQXJyYXk9dHx8ZnVuY3Rpb24obil7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09cC5jYWxsKG4pfSxoLmlzT2JqZWN0PWZ1bmN0aW9uKG4pe3ZhciByPXR5cGVvZiBuO3JldHVyblwiZnVuY3Rpb25cIj09PXJ8fFwib2JqZWN0XCI9PT1yJiYhIW59LGguZWFjaChbXCJBcmd1bWVudHNcIixcIkZ1bmN0aW9uXCIsXCJTdHJpbmdcIixcIk51bWJlclwiLFwiRGF0ZVwiLFwiUmVnRXhwXCIsXCJFcnJvclwiLFwiU3ltYm9sXCIsXCJNYXBcIixcIldlYWtNYXBcIixcIlNldFwiLFwiV2Vha1NldFwiXSxmdW5jdGlvbihyKXtoW1wiaXNcIityXT1mdW5jdGlvbihuKXtyZXR1cm4gcC5jYWxsKG4pPT09XCJbb2JqZWN0IFwiK3IrXCJdXCJ9fSksaC5pc0FyZ3VtZW50cyhhcmd1bWVudHMpfHwoaC5pc0FyZ3VtZW50cz1mdW5jdGlvbihuKXtyZXR1cm4gaihuLFwiY2FsbGVlXCIpfSk7dmFyIEQ9bi5kb2N1bWVudCYmbi5kb2N1bWVudC5jaGlsZE5vZGVzO1wiZnVuY3Rpb25cIiE9dHlwZW9mLy4vJiZcIm9iamVjdFwiIT10eXBlb2YgSW50OEFycmF5JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBEJiYoaC5pc0Z1bmN0aW9uPWZ1bmN0aW9uKG4pe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG58fCExfSksaC5pc0Zpbml0ZT1mdW5jdGlvbihuKXtyZXR1cm4haC5pc1N5bWJvbChuKSYmaXNGaW5pdGUobikmJiFpc05hTihwYXJzZUZsb2F0KG4pKX0saC5pc05hTj1mdW5jdGlvbihuKXtyZXR1cm4gaC5pc051bWJlcihuKSYmaXNOYU4obil9LGguaXNCb29sZWFuPWZ1bmN0aW9uKG4pe3JldHVybiEwPT09bnx8ITE9PT1ufHxcIltvYmplY3QgQm9vbGVhbl1cIj09PXAuY2FsbChuKX0saC5pc051bGw9ZnVuY3Rpb24obil7cmV0dXJuIG51bGw9PT1ufSxoLmlzVW5kZWZpbmVkPWZ1bmN0aW9uKG4pe3JldHVybiB2b2lkIDA9PT1ufSxoLmhhcz1mdW5jdGlvbihuLHIpe2lmKCFoLmlzQXJyYXkocikpcmV0dXJuIGoobixyKTtmb3IodmFyIHQ9ci5sZW5ndGgsZT0wO2U8dDtlKyspe3ZhciB1PXJbZV07aWYobnVsbD09bnx8IWkuY2FsbChuLHUpKXJldHVybiExO249blt1XX1yZXR1cm4hIXR9LGgubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBuLl89cix0aGlzfSxoLmlkZW50aXR5PWZ1bmN0aW9uKG4pe3JldHVybiBufSxoLmNvbnN0YW50PWZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBufX0saC5ub29wPWZ1bmN0aW9uKCl7fSxoLnByb3BlcnR5PWZ1bmN0aW9uKHIpe3JldHVybiBoLmlzQXJyYXkocik/ZnVuY3Rpb24obil7cmV0dXJuIHgobixyKX06YihyKX0saC5wcm9wZXJ0eU9mPWZ1bmN0aW9uKHIpe3JldHVybiBudWxsPT1yP2Z1bmN0aW9uKCl7fTpmdW5jdGlvbihuKXtyZXR1cm4gaC5pc0FycmF5KG4pP3gocixuKTpyW25dfX0saC5tYXRjaGVyPWgubWF0Y2hlcz1mdW5jdGlvbihyKXtyZXR1cm4gcj1oLmV4dGVuZE93bih7fSxyKSxmdW5jdGlvbihuKXtyZXR1cm4gaC5pc01hdGNoKG4scil9fSxoLnRpbWVzPWZ1bmN0aW9uKG4scix0KXt2YXIgZT1BcnJheShNYXRoLm1heCgwLG4pKTtyPXkocix0LDEpO2Zvcih2YXIgdT0wO3U8bjt1KyspZVt1XT1yKHUpO3JldHVybiBlfSxoLnJhbmRvbT1mdW5jdGlvbihuLHIpe3JldHVybiBudWxsPT1yJiYocj1uLG49MCksbitNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKHItbisxKSl9LGgubm93PURhdGUubm93fHxmdW5jdGlvbigpe3JldHVybihuZXcgRGF0ZSkuZ2V0VGltZSgpfTt2YXIgTD17XCImXCI6XCImYW1wO1wiLFwiPFwiOlwiJmx0O1wiLFwiPlwiOlwiJmd0O1wiLCdcIic6XCImcXVvdDtcIixcIidcIjpcIiYjeDI3O1wiLFwiYFwiOlwiJiN4NjA7XCJ9LFA9aC5pbnZlcnQoTCksVz1mdW5jdGlvbihyKXt2YXIgdD1mdW5jdGlvbihuKXtyZXR1cm4gcltuXX0sbj1cIig/OlwiK2gua2V5cyhyKS5qb2luKFwifFwiKStcIilcIixlPVJlZ0V4cChuKSx1PVJlZ0V4cChuLFwiZ1wiKTtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIG49bnVsbD09bj9cIlwiOlwiXCIrbixlLnRlc3Qobik/bi5yZXBsYWNlKHUsdCk6bn19O2guZXNjYXBlPVcoTCksaC51bmVzY2FwZT1XKFApLGgucmVzdWx0PWZ1bmN0aW9uKG4scix0KXtoLmlzQXJyYXkocil8fChyPVtyXSk7dmFyIGU9ci5sZW5ndGg7aWYoIWUpcmV0dXJuIGguaXNGdW5jdGlvbih0KT90LmNhbGwobik6dDtmb3IodmFyIHU9MDt1PGU7dSsrKXt2YXIgaT1udWxsPT1uP3ZvaWQgMDpuW3JbdV1dO3ZvaWQgMD09PWkmJihpPXQsdT1lKSxuPWguaXNGdW5jdGlvbihpKT9pLmNhbGwobik6aX1yZXR1cm4gbn07dmFyIEM9MDtoLnVuaXF1ZUlkPWZ1bmN0aW9uKG4pe3ZhciByPSsrQytcIlwiO3JldHVybiBuP24rcjpyfSxoLnRlbXBsYXRlU2V0dGluZ3M9e2V2YWx1YXRlOi88JShbXFxzXFxTXSs/KSU+L2csaW50ZXJwb2xhdGU6LzwlPShbXFxzXFxTXSs/KSU+L2csZXNjYXBlOi88JS0oW1xcc1xcU10rPyklPi9nfTt2YXIgSj0vKC4pXi8sVT17XCInXCI6XCInXCIsXCJcXFxcXCI6XCJcXFxcXCIsXCJcXHJcIjpcInJcIixcIlxcblwiOlwiblwiLFwiXFx1MjAyOFwiOlwidTIwMjhcIixcIlxcdTIwMjlcIjpcInUyMDI5XCJ9LFY9L1xcXFx8J3xcXHJ8XFxufFxcdTIwMjh8XFx1MjAyOS9nLCQ9ZnVuY3Rpb24obil7cmV0dXJuXCJcXFxcXCIrVVtuXX07aC50ZW1wbGF0ZT1mdW5jdGlvbihpLG4scil7IW4mJnImJihuPXIpLG49aC5kZWZhdWx0cyh7fSxuLGgudGVtcGxhdGVTZXR0aW5ncyk7dmFyIHQsZT1SZWdFeHAoWyhuLmVzY2FwZXx8Sikuc291cmNlLChuLmludGVycG9sYXRlfHxKKS5zb3VyY2UsKG4uZXZhbHVhdGV8fEopLnNvdXJjZV0uam9pbihcInxcIikrXCJ8JFwiLFwiZ1wiKSxvPTAsYT1cIl9fcCs9J1wiO2kucmVwbGFjZShlLGZ1bmN0aW9uKG4scix0LGUsdSl7cmV0dXJuIGErPWkuc2xpY2Uobyx1KS5yZXBsYWNlKFYsJCksbz11K24ubGVuZ3RoLHI/YSs9XCInK1xcbigoX190PShcIityK1wiKSk9PW51bGw/Jyc6Xy5lc2NhcGUoX190KSkrXFxuJ1wiOnQ/YSs9XCInK1xcbigoX190PShcIit0K1wiKSk9PW51bGw/Jyc6X190KStcXG4nXCI6ZSYmKGErPVwiJztcXG5cIitlK1wiXFxuX19wKz0nXCIpLG59KSxhKz1cIic7XFxuXCIsbi52YXJpYWJsZXx8KGE9XCJ3aXRoKG9ianx8e30pe1xcblwiK2ErXCJ9XFxuXCIpLGE9XCJ2YXIgX190LF9fcD0nJyxfX2o9QXJyYXkucHJvdG90eXBlLmpvaW4sXCIrXCJwcmludD1mdW5jdGlvbigpe19fcCs9X19qLmNhbGwoYXJndW1lbnRzLCcnKTt9O1xcblwiK2ErXCJyZXR1cm4gX19wO1xcblwiO3RyeXt0PW5ldyBGdW5jdGlvbihuLnZhcmlhYmxlfHxcIm9ialwiLFwiX1wiLGEpfWNhdGNoKG4pe3Rocm93IG4uc291cmNlPWEsbn12YXIgdT1mdW5jdGlvbihuKXtyZXR1cm4gdC5jYWxsKHRoaXMsbixoKX0sYz1uLnZhcmlhYmxlfHxcIm9ialwiO3JldHVybiB1LnNvdXJjZT1cImZ1bmN0aW9uKFwiK2MrXCIpe1xcblwiK2ErXCJ9XCIsdX0saC5jaGFpbj1mdW5jdGlvbihuKXt2YXIgcj1oKG4pO3JldHVybiByLl9jaGFpbj0hMCxyfTt2YXIgRz1mdW5jdGlvbihuLHIpe3JldHVybiBuLl9jaGFpbj9oKHIpLmNoYWluKCk6cn07aC5taXhpbj1mdW5jdGlvbih0KXtyZXR1cm4gaC5lYWNoKGguZnVuY3Rpb25zKHQpLGZ1bmN0aW9uKG4pe3ZhciByPWhbbl09dFtuXTtoLnByb3RvdHlwZVtuXT1mdW5jdGlvbigpe3ZhciBuPVt0aGlzLl93cmFwcGVkXTtyZXR1cm4gdS5hcHBseShuLGFyZ3VtZW50cyksRyh0aGlzLHIuYXBwbHkoaCxuKSl9fSksaH0saC5taXhpbihoKSxoLmVhY2goW1wicG9wXCIsXCJwdXNoXCIsXCJyZXZlcnNlXCIsXCJzaGlmdFwiLFwic29ydFwiLFwic3BsaWNlXCIsXCJ1bnNoaWZ0XCJdLGZ1bmN0aW9uKHIpe3ZhciB0PWVbcl07aC5wcm90b3R5cGVbcl09ZnVuY3Rpb24oKXt2YXIgbj10aGlzLl93cmFwcGVkO3JldHVybiB0LmFwcGx5KG4sYXJndW1lbnRzKSxcInNoaWZ0XCIhPT1yJiZcInNwbGljZVwiIT09cnx8MCE9PW4ubGVuZ3RofHxkZWxldGUgblswXSxHKHRoaXMsbil9fSksaC5lYWNoKFtcImNvbmNhdFwiLFwiam9pblwiLFwic2xpY2VcIl0sZnVuY3Rpb24obil7dmFyIHI9ZVtuXTtoLnByb3RvdHlwZVtuXT1mdW5jdGlvbigpe3JldHVybiBHKHRoaXMsci5hcHBseSh0aGlzLl93cmFwcGVkLGFyZ3VtZW50cykpfX0pLGgucHJvdG90eXBlLnZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3dyYXBwZWR9LGgucHJvdG90eXBlLnZhbHVlT2Y9aC5wcm90b3R5cGUudG9KU09OPWgucHJvdG90eXBlLnZhbHVlLGgucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIFN0cmluZyh0aGlzLl93cmFwcGVkKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJ1bmRlcnNjb3JlXCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gaH0pfSgpO1xyXG4iLCJpbXBvcnQge2V4dHJhY3RFeHRlbnNpb259IGZyb20gXCJ1dGlscy9zdHJpbmdzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaXNSdG1wID0gZnVuY3Rpb24gKGZpbGUsIHR5cGUpIHtcclxuICAgIHJldHVybiAoZmlsZS5pbmRleE9mKCdydG1wOicpID09IDAgfHwgdHlwZSA9PSAncnRtcCcpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgaXNXZWJSVEMgPSBmdW5jdGlvbiAoZmlsZSwgdHlwZSkge1xyXG4gICAgaWYoZmlsZSl7XHJcbiAgICAgICAgcmV0dXJuIChmaWxlLmluZGV4T2YoJ3dzOicpID09PSAwIHx8IGZpbGUuaW5kZXhPZignd3NzOicpID09PSAwIHx8IHR5cGUgPT09ICd3ZWJydGMnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGlzRGFzaCA9IGZ1bmN0aW9uIChmaWxlLCB0eXBlKSB7XHJcbiAgICByZXR1cm4gKCB0eXBlID09PSAnbXBkJyB8fCAgdHlwZSA9PT0gJ2Rhc2gnIHx8IHR5cGUgPT09ICdhcHBsaWNhdGlvbi9kYXNoK3htbCcgfHwgZXh0cmFjdEV4dGVuc2lvbihmaWxlKSA9PSAnbXBkJyk7XHJcbn07XHJcbiIsIi8qKlxuICogdXRpbHMgZm9yIHdlYnBhY2tcbiAqL1xuXG5leHBvcnQgY29uc3QgZ2V0U2NyaXB0UGF0aCA9IGZ1bmN0aW9uKHNjcmlwdE5hbWUpIHtcbiAgICBjb25zdCBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzcmMgPSBzY3JpcHRzW2ldLnNyYztcbiAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzcmMubGFzdEluZGV4T2YoJy8nICsgc2NyaXB0TmFtZSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzcmMuc3Vic3RyKDAsIGluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBob2hvIG9uIDIwMTguIDYuIDI5Li5cbiAqL1xuZXhwb3J0IGNvbnN0IHZlcnNpb24gPSBfX1ZFUlNJT05fXztcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGhvaG8gb24gMjAxOC4gNy4gMjYuLlxyXG4gKi9cclxuaW1wb3J0IE92ZW5UZW1wbGF0ZSBmcm9tICd2aWV3L2VuZ2luZS9PdmVuVGVtcGxhdGUnO1xyXG5pbXBvcnQgTEEkIGZyb20gJ3V0aWxzL2xpa2VBJCc7XHJcblxyXG5jb25zdCBGdWxsU2NyZWVuQnV0dG9uID0gZnVuY3Rpb24oJGNvbnRhaW5lciwgYXBpKXtcclxuICAgIGNvbnN0ICRyb290ID0gTEEkKFwiI1wiK2FwaS5nZXRDb250YWluZXJJZCgpKTtcclxuICAgIGxldCAkaWNvbkV4cGFuZCA9IFwiXCIsICRpY29uQ29tcHJlc3MgPSBcIlwiLCBpc0Z1bGxTY3JlZW4gPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgZnVsbFNjcmVlbkV2ZW50VHlwZXMgPSB7XHJcbiAgICAgICAgb25mdWxsc2NyZWVuY2hhbmdlIDogXCJmdWxsc2NyZWVuY2hhbmdlXCIsXHJcbiAgICAgICAgb25tb3pmdWxsc2NyZWVuY2hhbmdlIDogXCJtb3pmdWxsc2NyZWVuY2hhbmdlXCIsXHJcbiAgICAgICAgb253ZWJraXRmdWxsc2NyZWVuY2hhbmdlIDogXCJ3ZWJraXRmdWxsc2NyZWVuY2hhbmdlXCIsXHJcbiAgICAgICAgTVNGdWxsc2NyZWVuQ2hhbmdlIDogXCJNU0Z1bGxzY3JlZW5DaGFuZ2VcIlxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgZnVsbFNjcmVlbkNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICBsZXQgY2hlY2tGdWxsU2NyZWVuID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50IHx8IGRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50IHx8IGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbGVtZW50IHx8IGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnQ7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGNoZWNrRnVsbFNjcmVlbigpKSB7XHJcbiAgICAgICAgICAgICRyb290LmFkZENsYXNzKFwib3ZwLWZ1bGxzY3JlZW5cIik7XHJcbiAgICAgICAgICAgIGlzRnVsbFNjcmVlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICRpY29uRXhwYW5kLmhpZGUoKTtcclxuICAgICAgICAgICAgJGljb25Db21wcmVzcy5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJHJvb3QucmVtb3ZlQ2xhc3MoXCJvdnAtZnVsbHNjcmVlblwiKTtcclxuICAgICAgICAgICAgaXNGdWxsU2NyZWVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICRpY29uRXhwYW5kLnNob3coKTtcclxuICAgICAgICAgICAgJGljb25Db21wcmVzcy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgcmVxdWVzdEZ1bGxTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCRyb290LmdldCgpLnJlcXVlc3RGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgICAgICRyb290LmdldCgpLnJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkcm9vdC5nZXQoKS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgICAkcm9vdC5nZXQoKS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJHJvb3QuZ2V0KCkubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcclxuICAgICAgICAgICAgJHJvb3QuZ2V0KCkubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCRyb290LmdldCgpLm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICAgICAgJHJvb3QuZ2V0KCkubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE8ocm9jayk6IHdhcm4gbm90IHN1cHBvcnRlZFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBsZXQgZXhpdEZ1bGxTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4pIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVE9ETyhyb2NrKTogd2FybiBub3Qgc3VwcG9ydGVkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHRvZ2dsZUZ1bGxTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFpc0Z1bGxTY3JlZW4pIHtcclxuICAgICAgICAgICAgcmVxdWVzdEZ1bGxTY3JlZW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBleGl0RnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25SZW5kZXJlZCA9IGZ1bmN0aW9uKCRjdXJyZW50LCB0ZW1wbGF0ZSl7XHJcbiAgICAgICAgJGljb25FeHBhbmQgPSAkY3VycmVudC5maW5kKCcub3ZwLWZ1bGxzY3JlZW4tYnV0dG9uLWV4cGFuZGljb24nKTtcclxuICAgICAgICAkaWNvbkNvbXByZXNzID0gJGN1cnJlbnQuZmluZCgnLm92cC1mdWxsc2NyZWVuLWJ1dHRvbi1jb21wcmVzc2ljb24nKTtcclxuXHJcbiAgICAgICAgLy9CaW5kIEdsb2JhbChkb2N1bWVudCkgRXZlbnRcclxuICAgICAgICBPYmplY3Qua2V5cyhmdWxsU2NyZWVuRXZlbnRUeXBlcykuZm9yRWFjaChldmVudE5hbWUgPT4ge1xyXG4gICAgICAgICAgICAvL0RpZmZlcmVuY2UgYmV0d2VlbiB1bmRlZmluZWQgYW5kIG51bGwuXHJcbiAgICAgICAgICAgIC8vdW5kZWZpbmVkIGlzIG5vdCBzdXBwb3J0LiBudWxsIGlzIHN1cHBvcnQgYnV0IG5vdCBpbml0ZWQuXHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50W2V2ZW50TmFtZV0gPT09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihmdWxsU2NyZWVuRXZlbnRUeXBlc1tldmVudE5hbWVdLCBmdWxsU2NyZWVuQ2hhbmdlZENhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25EZXN0cm95ZWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vVW5iaW5kIEdsb2JhbChkb2N1bWVudCkgRXZlbnRcclxuICAgICAgICBPYmplY3Qua2V5cyhmdWxsU2NyZWVuRXZlbnRUeXBlcykuZm9yRWFjaChldmVudE5hbWUgPT4ge1xyXG4gICAgICAgICAgICBpZihkb2N1bWVudFtldmVudE5hbWVdID09PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZnVsbFNjcmVlbkV2ZW50VHlwZXNbZXZlbnROYW1lXSwgZnVsbFNjcmVlbkNoYW5nZWRDYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZXZlbnRzID0ge1xyXG4gICAgICAgIFwiY2xpY2sgLm92cC1mdWxsc2NyZWVuLWJ1dHRvblwiIDogZnVuY3Rpb24oZXZlbnQsICRjdXJyZW50LCB0ZW1wbGF0ZSl7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRvZ2dsZUZ1bGxTY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBPdmVuVGVtcGxhdGUoJGNvbnRhaW5lciwgXCJGdWxsU2NyZWVuQnV0dG9uXCIsIG51bGwsIGV2ZW50cywgb25SZW5kZXJlZCwgb25EZXN0cm95ZWQgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGdWxsU2NyZWVuQnV0dG9uO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICc8YnV0dG9uIGNsYXNzPVwib3ZwLWJ1dHRvbiBvdnAtZnVsbHNjcmVlbi1idXR0b25cIj4nICtcclxuICAgICAgICAgICAgJzxpIGNsYXNzPVwib3ZwLWZ1bGxzY3JlZW4tYnV0dG9uLWV4cGFuZGljb25cIj48L2k+JyArXHJcbiAgICAgICAgICAgICc8aSBjbGFzcz1cIm92cC1mdWxsc2NyZWVuLWJ1dHRvbi1jb21wcmVzc2ljb25cIj48L2k+JyArXHJcbiAgICAgICAgJzwvYnV0dG9uPidcclxuICAgICk7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGhvaG8gb24gMjAxOC4gNy4gMjAuLlxyXG4gKi9cclxuaW1wb3J0IE92ZW5UZW1wbGF0ZSBmcm9tICd2aWV3L2VuZ2luZS9PdmVuVGVtcGxhdGUnO1xyXG5pbXBvcnQgUGxheUJ1dHRvbiBmcm9tICd2aWV3L2NvbnRyb2xzL3BsYXlCdXR0b24nO1xyXG5pbXBvcnQgVm9sdW1lQnV0dG9uIGZyb20gJ3ZpZXcvY29udHJvbHMvdm9sdW1lQnV0dG9uJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJ3ZpZXcvY29udHJvbHMvcHJvZ3Jlc3NCYXInO1xyXG5pbXBvcnQgVGltZURpc3BsYXkgZnJvbSAndmlldy9jb250cm9scy90aW1lRGlzcGxheSc7XHJcbmltcG9ydCBGdWxsU2NyZWVuQnV0dG9uIGZyb20gJ3ZpZXcvY29udHJvbHMvZnVsbFNjcmVlbkJ1dHRvbic7XHJcbmltcG9ydCBTZXR0aW5nUGFuZWwgZnJvbSAndmlldy9jb250cm9scy9zZXR0aW5nUGFuZWwnO1xyXG5pbXBvcnQgU2V0dGluZ1BhbmVsTGlzdCBmcm9tICd2aWV3L2dsb2JhbC9TZXR0aW5nUGFuZWxMaXN0JztcclxuaW1wb3J0IF8gZnJvbSAndXRpbHMvdW5kZXJzY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgICBSRUFEWSxcclxuICAgIENPTlRFTlRfTUVUQSxcclxuICAgIFBST1ZJREVSX1JUTVAsXHJcbiAgICBFUlJPUlxyXG59IGZyb20gXCJhcGkvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBDb250cm9scyA9IGZ1bmN0aW9uKCRjb250YWluZXIsIGFwaSl7XHJcbiAgICBsZXQgdm9sdW1lQnV0dG9uID0gXCJcIiwgcGxheUJ1dHRvbj0gXCJcIiwgcHJvZ3Jlc3NCYXIgPSBcIlwiLCB0aW1lRGlzcGxheSA9IFwiXCIsIGZ1bGxTY3JlZW5CdXR0b24gPSBcIlwiO1xyXG5cclxuICAgIGxldCBnZW5lcmF0ZU1haW5QYW5lbERhdGEgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBwYW5lbCA9IHt0aXRsZSA6IFwiU2V0dGluZ3NcIiwgaXNNYWluIDogdHJ1ZSwgYm9keSA6IFtdfTtcclxuICAgICAgICBsZXQgY3VycmVudFNvdXJjZSA9IGFwaS5nZXRDdXJyZW50UXVhbGl0eSgpO1xyXG4gICAgICAgIGlmKGFwaS5nZXREdXJhdGlvbigpICE9PSBJbmZpbml0eSAmJiBjdXJyZW50U291cmNlLnR5cGUgIT09IFBST1ZJREVSX1JUTVApe1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlIDogXCJTcGVlZFwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgOiAgYXBpLmdldFBsYXliYWNrUmF0ZSgpID09PSAxID8gXCJOb3JtYWxcIiA6IGFwaS5nZXRQbGF5YmFja1JhdGUoKSxcclxuICAgICAgICAgICAgICAgIHR5cGUgOiBcInBsYXliYWNrcmF0ZVwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHBhbmVsLmJvZHkucHVzaChib2R5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhcGkuZ2V0UXVhbGl0eUxldmVscygpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRRdWFsaXR5ID0gYXBpLmdldEN1cnJlbnRRdWFsaXR5KCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYm9keSA9IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlIDogXCJTb3VyY2VcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlIDogY3VycmVudFF1YWxpdHkgPyBjdXJyZW50UXVhbGl0eS5sYWJlbCA6IFwiRGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZSA6IFwicXVhbGl0eWxldmVsXCJcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHBhbmVsLmJvZHkucHVzaChib2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhbmVsO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvblJlbmRlcmVkID0gZnVuY3Rpb24oJGN1cnJlbnQsIHRlbXBsYXRlKXtcclxuXHJcbiAgICAgICAgbGV0IGluaXRUaW1lRGlzcGxheSA9IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBpZih0aW1lRGlzcGxheSl7XHJcbiAgICAgICAgICAgICAgICB0aW1lRGlzcGxheS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGltZURpc3BsYXkgPSBUaW1lRGlzcGxheSgkY3VycmVudC5maW5kKFwiLm92cC1sZWZ0LWNvbnRyb2xzXCIpLCBhcGksIGRhdGEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGluaXRQcm9ncmVzc0JhciA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKHByb2dyZXNzQmFyKXtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9ncmVzc0JhciA9IFByb2dyZXNzQmFyKCRjdXJyZW50LmZpbmQoXCIub3ZwLXByb2dyZXNzYmFyLWNvbnRhaW5lclwiKSwgYXBpKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwbGF5QnV0dG9uID0gUGxheUJ1dHRvbigkY3VycmVudC5maW5kKFwiLm92cC1sZWZ0LWNvbnRyb2xzXCIpLCBhcGkpO1xyXG4gICAgICAgIHZvbHVtZUJ1dHRvbiA9IFZvbHVtZUJ1dHRvbigkY3VycmVudC5maW5kKFwiLm92cC1sZWZ0LWNvbnRyb2xzXCIpLCBhcGkpO1xyXG4gICAgICAgIGZ1bGxTY3JlZW5CdXR0b24gPSBGdWxsU2NyZWVuQnV0dG9uKCRjdXJyZW50LmZpbmQoXCIub3ZwLXJpZ2h0LWNvbnRyb2xzXCIpLCBhcGkpO1xyXG5cclxuXHJcbiAgICAgICAgYXBpLm9uKENPTlRFTlRfTUVUQSwgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpbml0VGltZURpc3BsYXkoZGF0YSk7XHJcbiAgICAgICAgICAgIGlmKGRhdGEuZHVyYXRpb24gPT09IEluZmluaXR5KXtcclxuICAgICAgICAgICAgICAgIC8vbGl2ZVxyXG4gICAgICAgICAgICAgICAgaWYocHJvZ3Jlc3NCYXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvL3ZvZFxyXG4gICAgICAgICAgICAgICAgaW5pdFByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBhcGkub24oRVJST1IsIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvbkRlc3Ryb3llZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy9EbyBub3RoaW5nLlxyXG4gICAgfTtcclxuICAgIGNvbnN0IGV2ZW50cyA9IHtcclxuICAgICAgICBcIm1vdXNlbGVhdmUgLm92cC1jb250cm9sc1wiIDogZnVuY3Rpb24oZXZlbnQsICRjdXJyZW50LCB0ZW1wbGF0ZSl7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICB2b2x1bWVCdXR0b24uc2V0TW91c2VEb3duKGZhbHNlKTtcclxuICAgICAgICAgICAgJGN1cnJlbnQuZmluZChcIi5vdnAtdm9sdW1lLXNsaWRlci1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImNsaWNrIC5vdnAtc2V0dGluZy1idXR0b25cIiA6IGZ1bmN0aW9uKGV2ZW50LCAkY3VycmVudCwgdGVtcGxhdGUpe1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy90b2dnbGVcclxuICAgICAgICAgICAgaWYoU2V0dGluZ1BhbmVsTGlzdC5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIC8vY2xlYXIgYWxsIFNldHRpbmdQYW5lbFRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICBfLmVhY2goU2V0dGluZ1BhbmVsTGlzdCwgZnVuY3Rpb24oc2V0dGluZ1BhbmVsKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nUGFuZWwuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBTZXR0aW5nUGFuZWxMaXN0LnNwbGljZSgwLCBTZXR0aW5nUGFuZWxMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgU2V0dGluZ1BhbmVsTGlzdC5wdXNoKFNldHRpbmdQYW5lbCgkY3VycmVudCwgYXBpLCBnZW5lcmF0ZU1haW5QYW5lbERhdGEoKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gT3ZlblRlbXBsYXRlKCRjb250YWluZXIsIFwiQ29udHJvbHNcIiwgIG51bGwgLCBldmVudHMsIG9uUmVuZGVyZWQsIG9uRGVzdHJveWVkKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xzO1xyXG4iLCJcclxuY29uc3QgQ29udHJvbHMgPSBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwib3ZwLWNvbnRyb2xzLWNvbnRhaW5lclwiPicrXHJcbiAgICAgICAgICc8ZGl2IGNsYXNzPVwib3ZwLWdyYWRpZW50LWJvdHRvbVwiPjwvZGl2PicgK1xyXG4gICAgICAgICAnPGRpdiBjbGFzcz1cIm92cC1ib3R0b20tcGFuZWxcIj4nICtcclxuICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwib3ZwLXByb2dyZXNzYmFyLWNvbnRhaW5lclwiPicgK1xyXG4gICAgICAgICAnICAgIDwvZGl2PicgK1xyXG4gICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJvdnAtY29udHJvbHNcIj4nICtcclxuICAgICAgICAgJyAgICAgICAgPGRpdiBjbGFzcz1cIm92cC1sZWZ0LWNvbnRyb2xzXCI+JyArXHJcbiAgICAgICAgICcgICAgICAgIDwvZGl2PicgK1xyXG4gICAgICAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwib3ZwLXJpZ2h0LWNvbnRyb2xzXCI+JyArXHJcbiAgICAgICAgICcgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib3ZwLWJ1dHRvbiBvdnAtc2V0dGluZy1idXR0b25cIj48aSBjbGFzcz1cIm92cC1zZXR0aW5nLWJ1dHRvbi1pY29uXCI+PC9pPjwvYnV0dG9uPicgK1xyXG4gICAgICAgICAnICAgICAgICA8L2Rpdj4nICtcclxuICAgICAgICAgJyAgICA8L2Rpdj4nICtcclxuICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAnPC9kaXY+JztcclxuXHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xzO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgaG9obyBvbiAyMDE4LiA3LiAyNC4uXHJcbiAqL1xyXG5pbXBvcnQgT3ZlblRlbXBsYXRlIGZyb20gJ3ZpZXcvZW5naW5lL092ZW5UZW1wbGF0ZSc7XHJcbmltcG9ydCB7XHJcbiAgICBFUlJPUixcclxuICAgIFNUQVRFX0lETEUsXHJcbiAgICBTVEFURV9QTEFZSU5HLFxyXG4gICAgU1RBVEVfU1RBTExFRCxcclxuICAgIFNUQVRFX0xPQURJTkcsXHJcbiAgICBTVEFURV9DT01QTEVURSxcclxuICAgIFNUQVRFX1BBVVNFRCxcclxuICAgIFNUQVRFX0VSUk9SLFxyXG4gICAgUExBWUVSX1NUQVRFXHJcbn0gZnJvbSBcImFwaS9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IFBsYXlCdXR0b24gPSBmdW5jdGlvbiAoJGNvbnRhaW5lciwgYXBpKSB7XHJcbiAgICBsZXQgJGljb25QbGF5ID0gXCJcIixcclxuICAgICAgICAkaWNvblBhdXNlID0gXCJcIixcclxuICAgICAgICAkaWNvblJlcGxheSA9IFwiXCI7XHJcblxyXG5cclxuICAgIGxldCBzZXRCdXR0b25TdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKXtcclxuICAgICAgICAkaWNvblBsYXkuaGlkZSgpO1xyXG4gICAgICAgICRpY29uUGF1c2UuaGlkZSgpO1xyXG4gICAgICAgICRpY29uUmVwbGF5LmhpZGUoKTtcclxuXHJcbiAgICAgICAgaWYoc3RhdGUgPT09IFNUQVRFX1BMQVlJTkcpe1xyXG4gICAgICAgICAgICAkaWNvblBhdXNlLnNob3coKTtcclxuICAgICAgICB9ZWxzZSBpZihzdGF0ZSA9PT0gU1RBVEVfUEFVU0VEKXtcclxuICAgICAgICAgICAgJGljb25QbGF5LnNob3coKTtcclxuICAgICAgICB9ZWxzZSBpZihzdGF0ZSA9PT0gU1RBVEVfQ09NUExFVEUpe1xyXG4gICAgICAgICAgICAkaWNvblBsYXkuc2hvdygpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAkaWNvblBsYXkuc2hvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgY29uc3Qgb25SZW5kZXJlZCA9IGZ1bmN0aW9uKCRjdXJyZW50LCB0ZW1wbGF0ZSl7XHJcbiAgICAgICAgJGljb25QbGF5ID0gJGN1cnJlbnQuZmluZCggXCIub3ZwLXBsYXktYnV0dG9uLXBsYXlpY29uXCIpO1xyXG4gICAgICAgICRpY29uUGF1c2UgPSAkY3VycmVudC5maW5kKFwiLm92cC1wbGF5LWJ1dHRvbi1wYXVzZWljb25cIik7XHJcbiAgICAgICAgJGljb25SZXBsYXkgPSAkY3VycmVudC5maW5kKFwiLm92cC1wbGF5LWJ1dHRvbi1yZXBsYXlpY29uXCIpO1xyXG5cclxuICAgICAgICBhcGkub24oUExBWUVSX1NUQVRFLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgaWYoZGF0YSAmJiBkYXRhLm5ld3N0YXRlKXtcclxuICAgICAgICAgICAgICAgIHNldEJ1dHRvblN0YXRlKGRhdGEubmV3c3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25EZXN0cm95ZWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vRG8gbm90aGluZy5cclxuICAgIH07XHJcbiAgICBjb25zdCBldmVudHMgPSB7XHJcbiAgICAgICAgXCJjbGljayAub3ZwLXBsYXktYnV0dG9uXCIgOiBmdW5jdGlvbihldmVudCwgJGN1cnJlbnQsIHRlbXBsYXRlKXtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gYXBpLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IFNUQVRFX0lETEUpIHtcclxuICAgICAgICAgICAgICAgIGFwaS5wbGF5KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFN0YXRlID09PSBTVEFURV9QTEFZSU5HKSB7XHJcbiAgICAgICAgICAgICAgICBhcGkucGF1c2UoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50U3RhdGUgPT09IFNUQVRFX1BBVVNFRCkge1xyXG4gICAgICAgICAgICAgICAgYXBpLnBsYXkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50U3RhdGUgPT09IFNUQVRFX0NPTVBMRVRFKSB7XHJcbiAgICAgICAgICAgICAgICBhcGkucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gT3ZlblRlbXBsYXRlKCRjb250YWluZXIsIFwiUGxheUJ1dHRvblwiLCBudWxsLCBldmVudHMsIG9uUmVuZGVyZWQsIG9uRGVzdHJveWVkICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5QnV0dG9uOyIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgJzxidXR0b24gY2xhc3M9XCJvdnAtYnV0dG9uIG92cC1wbGF5LWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj4nICtcclxuICAgICAgICAgICAgJzxpIGNsYXNzPVwib3ZwLXBsYXktYnV0dG9uLXBsYXlpY29uXCI+PC9pPicgK1xyXG4gICAgICAgICAgICAnPGkgY2xhc3M9XCJvdnAtcGxheS1idXR0b24tcGF1c2VpY29uXCI+PC9pPicgK1xyXG4gICAgICAgICAgICAnPGkgY2xhc3M9XCJvdnAtcGxheS1idXR0b24tcmVwbGF5aWNvblwiPjwvaT4nICtcclxuICAgICAgICAnPC9idXR0b24+J1xyXG4gICAgKTtcclxufTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgaG9obyBvbiAyMDE4LiA3LiAyNC4uXHJcbiAqL1xyXG5pbXBvcnQgT3ZlblRlbXBsYXRlIGZyb20gJ3ZpZXcvZW5naW5lL092ZW5UZW1wbGF0ZSc7XHJcbmltcG9ydCBTZXR0aW5nUGFuZWxMaXN0IGZyb20gJ3ZpZXcvZ2xvYmFsL1NldHRpbmdQYW5lbExpc3QnO1xyXG5pbXBvcnQge25hdHVyYWxIbXN9IGZyb20gJ3V0aWxzL3N0cmluZ3MnXHJcbmltcG9ydCBMQSQgZnJvbSAndXRpbHMvbGlrZUEkJztcclxuaW1wb3J0IHtcclxuICAgIFNUQVRFX0lETEUsXHJcbiAgICBTVEFURV9QTEFZSU5HLFxyXG4gICAgU1RBVEVfQ09NUExFVEUsXHJcbiAgICBTVEFURV9QQVVTRURcclxufSBmcm9tIFwiYXBpL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgUHJvZ3Jlc3NCYXIgPSBmdW5jdGlvbigkY29udGFpbmVyLCBhcGkpe1xyXG4gICAgY29uc3QgJHJvb3QgPSBMQSQoXCIjXCIrYXBpLmdldENvbnRhaW5lcklkKCkpO1xyXG4gICAgbGV0IGN1cnJlbnRQbGF5aW5nUG9zaXRpb24gPSAwO1xyXG4gICAgbGV0IGN1cnJlbnRQbGF5aW5nUGVyY2VudGFnZSA9IDA7XHJcbiAgICBsZXQgY3VycmVudExvYWRlZFBlcmNlbnRhZ2UgPSAwO1xyXG5cclxuICAgIGxldCBtb3VzZUluc2lkZSA9IGZhbHNlLCBtb3VzZURvd24gPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgJHByb2dyZXNzQmFyID0gXCJcIixcclxuICAgICAgICAkcHJvZ3Jlc3NMb2FkID0gXCJcIixcclxuICAgICAgICAkcHJvZ3Jlc3NQbGF5ID0gXCJcIixcclxuICAgICAgICAkcHJvZ3Jlc3NIb3ZlciA9IFwiXCIsXHJcbiAgICAgICAgJGtub2JDb250YWluZXIgPSBcIlwiLFxyXG4gICAgICAgICRrbm9iID0gXCJcIixcclxuICAgICAgICBrbm9iV2lkdGggPSAwLFxyXG4gICAgICAgICR0aW1lID0gXCJcIjtcclxuXHJcblxyXG4gICAgbGV0IHBvc2l0aW9uRWxlbWVudHMgPSBmdW5jdGlvbiAocGVyY2VudGFnZSkge1xyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzQmFyV2lkdGggPSAkcHJvZ3Jlc3NCYXIud2lkdGgoKTtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHByb2dyZXNzQmFyV2lkdGggKiBwZXJjZW50YWdlO1xyXG5cclxuICAgICAgICAkcHJvZ3Jlc3NQbGF5LmNzcygnd2lkdGgnLCBwb3NpdGlvbisgJ3B4Jyk7XHJcbiAgICAgICAgJHByb2dyZXNzSG92ZXIuY3NzKCdsZWZ0JywgcG9zaXRpb24rICdweCcpO1xyXG5cclxuICAgICAgICBjb25zdCBrbm9iUG9zdGlvbiA9IChwcm9ncmVzc0JhcldpZHRoIC0ga25vYldpZHRoKSAqIHBlcmNlbnRhZ2U7XHJcbiAgICAgICAgJGtub2JDb250YWluZXIuY3NzKCdsZWZ0Jywga25vYlBvc3Rpb24rICdweCcpO1xyXG5cclxuICAgICAgICBjdXJyZW50UGxheWluZ1Bvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgY3VycmVudFBsYXlpbmdQZXJjZW50YWdlID0gcGVyY2VudGFnZTtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGRyYXdIb3ZlclByb2dyZXNzID0gZnVuY3Rpb24gKHBlcmNlbnRhZ2UpIHtcclxuICAgICAgICBjb25zdCBwcm9ncmVzc0JhcldpZHRoID0gJHByb2dyZXNzQmFyLndpZHRoKCk7XHJcbiAgICAgICAgY29uc3QgaG92ZXJQb3NpdGlvbiA9IHByb2dyZXNzQmFyV2lkdGggKiBwZXJjZW50YWdlO1xyXG5cclxuICAgICAgICAkcHJvZ3Jlc3NIb3Zlci5jc3MoJ3dpZHRoJywgcGVyY2VudGFnZSA9PSAwPyBwZXJjZW50YWdlIDogKGhvdmVyUG9zaXRpb24gLSBjdXJyZW50UGxheWluZ1Bvc2l0aW9uKSsgJ3B4Jyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBkcmF3TG9hZFByb2dyZXNzID0gZnVuY3Rpb24ocGVyY2VudGFnZSkge1xyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzQmFyV2lkdGggPSAkcHJvZ3Jlc3NCYXIud2lkdGgoKTtcclxuICAgICAgICBjb25zdCBsb2FkUG9zaXRpb24gPSBwcm9ncmVzc0JhcldpZHRoICogcGVyY2VudGFnZTtcclxuXHJcbiAgICAgICAgJHByb2dyZXNzTG9hZC5jc3MoJ3dpZHRoJywgbG9hZFBvc2l0aW9uKyAncHgnKTtcclxuICAgICAgICBjdXJyZW50TG9hZGVkUGVyY2VudGFnZSA9IHBlcmNlbnRhZ2U7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBjYWxjdWxhdGVQZXJjZW50YWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NCYXJXaWR0aCA9ICRwcm9ncmVzc0Jhci53aWR0aCgpO1xyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzQmFyT2Zmc2V0WCA9ICRwcm9ncmVzc0Jhci5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgIGNvbnN0IHBvaW50ZXJPZmZzZXRYID0gZXZlbnQucGFnZVg7XHJcblxyXG4gICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAocG9pbnRlck9mZnNldFggLSBwcm9ncmVzc0Jhck9mZnNldFgpIC8gcHJvZ3Jlc3NCYXJXaWR0aDtcclxuXHJcbiAgICAgICAgaWYgKHBlcmNlbnRhZ2UgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBlcmNlbnRhZ2UgPiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBlcmNlbnRhZ2U7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBkcmF3VGltZUluZGljYXRvciA9IGZ1bmN0aW9uIChwZXJjZW50YWdlLCBldmVudCkge1xyXG4gICAgICAgaWYoU2V0dGluZ1BhbmVsTGlzdC5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAkdGltZS5oaWRlKCk7XHJcbiAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSBhcGkuZ2V0RHVyYXRpb24oKTtcclxuICAgICAgICBjb25zdCBzZWNvbmQgPSBkdXJhdGlvbiAqIHBlcmNlbnRhZ2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGhtcyA9IG5hdHVyYWxIbXMoc2Vjb25kKTtcclxuXHJcbiAgICAgICAgJHRpbWUudGV4dChobXMpO1xyXG5cclxuICAgICAgICBjb25zdCB0aW1lRWxlbVdpZHRoID0gJHRpbWUud2lkdGgoKTtcclxuICAgICAgICBjb25zdCBwcm9ncmVzc0JhcldpZHRoID0gJHByb2dyZXNzQmFyLndpZHRoKCk7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBwcm9ncmVzc0JhcldpZHRoICogcGVyY2VudGFnZTtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbk9mUGl4ZWwgPSBldmVudC5wYWdlWCAtICRwcm9ncmVzc0Jhci5vZmZzZXQoKS5sZWZ0O1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlTWFnbmV0aWMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZihwb3NpdGlvbk9mUGl4ZWwgPCB0aW1lRWxlbVdpZHRoIC8gMil7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfWVsc2UgaWYocHJvZ3Jlc3NCYXJXaWR0aC1wb3NpdGlvbk9mUGl4ZWwgIDwgdGltZUVsZW1XaWR0aCAvIDIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2dyZXNzQmFyV2lkdGggLSB0aW1lRWxlbVdpZHRoO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbiAtIHRpbWVFbGVtV2lkdGggLyAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgbWFnbmV0aWNQb3NpdGlvbiA9IGNhbGN1bGF0ZU1hZ25ldGljKCk7XHJcbiAgICAgICAgJHRpbWUuY3NzKCdsZWZ0JywgbWFnbmV0aWNQb3NpdGlvbisgXCJweFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHNlZWsgPSBmdW5jdGlvbiAocGVyY2VudGFnZSkge1xyXG4gICAgICAgIGFwaS5zZWVrKCAoYXBpLmdldER1cmF0aW9uKCl8fDApICogcGVyY2VudGFnZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25SZW5kZXJlZCA9IGZ1bmN0aW9uKCRjdXJyZW50LCB0ZW1wbGF0ZSl7XHJcbiAgICAgICAgJHByb2dyZXNzQmFyID0gJGN1cnJlbnQ7XHJcbiAgICAgICAgJHByb2dyZXNzTG9hZCA9ICRjdXJyZW50LmZpbmQoXCIub3ZwLWxvYWQtcHJvZ3Jlc3NcIik7XHJcbiAgICAgICAgJHByb2dyZXNzUGxheSA9ICRjdXJyZW50LmZpbmQoXCIub3ZwLXBsYXktcHJvZ3Jlc3NcIik7XHJcbiAgICAgICAgJHByb2dyZXNzSG92ZXIgPSAkY3VycmVudC5maW5kKFwiLm92cC1ob3Zlci1wcm9ncmVzc1wiKTtcclxuICAgICAgICAka25vYkNvbnRhaW5lciA9ICRjdXJyZW50LmZpbmQoXCIub3ZwLXByb2dyZXNzYmFyLWtub2ItY29udGFpbmVyXCIpO1xyXG4gICAgICAgICRrbm9iID0gJGN1cnJlbnQuZmluZChcIi5vdnAtcHJvZ3Jlc3NiYXIta25vYlwiKTtcclxuICAgICAgICBrbm9iV2lkdGggPSAka25vYi53aWR0aCgpO1xyXG4gICAgICAgICR0aW1lID0gJGN1cnJlbnQuZmluZChcIi5vdnAtcHJvZ3Jlc3NiYXItdGltZVwiKTtcclxuXHJcbiAgICAgICAgYXBpLm9uKCd0aW1lJywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZihkYXRhICYmIGRhdGEuZHVyYXRpb24gJiYgZGF0YS5wb3NpdGlvbil7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkVsZW1lbnRzKGRhdGEucG9zaXRpb24gLyBkYXRhLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhcGkub24oJ2J1ZmZlckNoYW5nZWQnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmKGRhdGEgJiYgZGF0YS5idWZmZXJQZXJjZW50KXtcclxuICAgICAgICAgICAgICAgIGRyYXdMb2FkUHJvZ3Jlc3MoZGF0YS5idWZmZXJQZXJjZW50IC8gMTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcbiAgICBjb25zdCBvbkRlc3Ryb3llZCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgfTtcclxuICAgIGNvbnN0IGV2ZW50cyA9IHtcclxuICAgICAgICBcInJlc2l6ZSB3aW5kb3dcIiA6IGZ1bmN0aW9uKGV2ZW50LCAkY3VycmVudCwgdGVtcGxhdGUpe1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb25FbGVtZW50cyhjdXJyZW50UGxheWluZ1BlcmNlbnRhZ2UpO1xyXG4gICAgICAgICAgICBkcmF3TG9hZFByb2dyZXNzKGN1cnJlbnRMb2FkZWRQZXJjZW50YWdlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibW91c2VlbnRlciAub3ZwLXByb2dyZXNzYmFyXCIgOiBmdW5jdGlvbihldmVudCwgJGN1cnJlbnQsIHRlbXBsYXRlKXtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIG1vdXNlSW5zaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgJHRpbWUuc2hvdygpO1xyXG4gICAgICAgICAgICAkcm9vdC5hZGRDbGFzcyhcIm92cC1wcm9ncmVzc2Jhci1ob3ZlclwiKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1vdXNlbGVhdmUgLm92cC1wcm9ncmVzc2JhclwiIDogZnVuY3Rpb24oZXZlbnQsICRjdXJyZW50LCB0ZW1wbGF0ZSl7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBtb3VzZUluc2lkZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIW1vdXNlSW5zaWRlKSB7XHJcbiAgICAgICAgICAgICAgICAkcm9vdC5yZW1vdmVDbGFzcyhcIm92cC1wcm9ncmVzc2Jhci1ob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgICR0aW1lLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkcmF3SG92ZXJQcm9ncmVzcygwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibW91c2Vkb3duIC5vdnAtcHJvZ3Jlc3NiYXJcIiA6IGZ1bmN0aW9uKGV2ZW50LCAkY3VycmVudCwgdGVtcGxhdGUpe1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtb3VzZURvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gY2FsY3VsYXRlUGVyY2VudGFnZShldmVudCk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uRWxlbWVudHMocGVyY2VudGFnZSk7XHJcbiAgICAgICAgICAgIGRyYXdIb3ZlclByb2dyZXNzKDApO1xyXG4gICAgICAgICAgICBzZWVrKHBlcmNlbnRhZ2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtb3VzZW1vdmUgLm92cC1wcm9ncmVzc2JhclwiIDogZnVuY3Rpb24oZXZlbnQsICRjdXJyZW50LCB0ZW1wbGF0ZSl7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1vdXNlRG93bikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IGNhbGN1bGF0ZVBlcmNlbnRhZ2UoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgZHJhd0hvdmVyUHJvZ3Jlc3MocGVyY2VudGFnZSk7XHJcbiAgICAgICAgICAgICAgICBkcmF3VGltZUluZGljYXRvcihwZXJjZW50YWdlLCBldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibW91c2Vtb3ZlIGRvY3VtZW50XCIgOiBmdW5jdGlvbihldmVudCwgJGN1cnJlbnQsIHRlbXBsYXRlKXtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKG1vdXNlRG93bikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IGNhbGN1bGF0ZVBlcmNlbnRhZ2UoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25FbGVtZW50cyhwZXJjZW50YWdlKTtcclxuICAgICAgICAgICAgICAgIGRyYXdIb3ZlclByb2dyZXNzKDApO1xyXG4gICAgICAgICAgICAgICAgc2VlayhwZXJjZW50YWdlKTtcclxuICAgICAgICAgICAgICAgIGRyYXdUaW1lSW5kaWNhdG9yKHBlcmNlbnRhZ2UsIGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtb3VzZXVwIGRvY3VtZW50XCIgOiBmdW5jdGlvbihldmVudCwgJGN1cnJlbnQsIHRlbXBsYXRlKXtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKG1vdXNlRG93bil7XHJcbiAgICAgICAgICAgICAgICBtb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICRyb290LnJlbW92ZUNsYXNzKFwib3ZwLXByb2dyZXNzYmFyLWhvdmVyXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIE92ZW5UZW1wbGF0ZSgkY29udGFpbmVyLCBcIlByb2dyZXNzQmFyXCIsIG51bGwsIGV2ZW50cywgb25SZW5kZXJlZCwgb25EZXN0cm95ZWQgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwib3ZwLXByb2dyZXNzYmFyXCIgdGFiaW5kZXg9XCIwXCI+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwib3ZwLXByb2dyZXNzYmFyLXBhZGRpbmdcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJvdnAtcHJvZ3Jlc3MtbGlzdFwiPicgK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJvdnAtbG9hZC1wcm9ncmVzc1wiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJvdnAtcGxheS1wcm9ncmVzcyBvdnAtcGxheS1iYWNrZ3JvdW5kLWNvbG9yXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm92cC1ob3Zlci1wcm9ncmVzc1wiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwib3ZwLXByb2dyZXNzYmFyLWtub2ItY29udGFpbmVyXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm92cC1wcm9ncmVzc2Jhci1rbm9iIG92cC1wbGF5LWJhY2tncm91bmQtY29sb3JcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJvdnAtcHJvZ3Jlc3NiYXItdGltZVwiPjA6MDA8L3NwYW4+JyArXHJcbiAgICAgICAgJzwvZGl2PidcclxuICAgICk7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGhvaG8gb24gMjAxOC4gNy4gMjYuLlxyXG4gKi9cclxuaW1wb3J0IE92ZW5UZW1wbGF0ZSBmcm9tICd2aWV3L2VuZ2luZS9PdmVuVGVtcGxhdGUnO1xyXG5pbXBvcnQgU2V0dGluZ1BhbmVsTGlzdCBmcm9tICd2aWV3L2dsb2JhbC9TZXR0aW5nUGFuZWxMaXN0JztcclxuaW1wb3J0IExBJCBmcm9tICd1dGlscy9saWtlQSQnO1xyXG5pbXBvcnQgXyBmcm9tICd1dGlscy91bmRlcnNjb3JlJztcclxuY29uc3QgUExBWUVSX01JTl9IRUlHSFQgPSAyMjA7XHJcbmNvbnN0IFNldHRpbmdQYW5lbCA9IGZ1bmN0aW9uKCRjb250YWluZXIsIGFwaSwgZGF0YSl7XHJcbiAgICBjb25zdCAkcm9vdCA9IExBJChcIiNcIithcGkuZ2V0Q29udGFpbmVySWQoKSk7XHJcblxyXG4gICAgbGV0IGV4dHJhY3RQYW5lbERhdGEgPSBmdW5jdGlvbihwYW5lbFR5cGUpe1xyXG4gICAgICAgIGxldCBwYW5lbCA9IHt0aXRsZSA6IFwiXCIsIGJvZHkgOiBbXSwgdHlwZSA6IHBhbmVsVHlwZX07XHJcblxyXG4gICAgICAgIGlmKHBhbmVsVHlwZSA9PT0gXCJwbGF5YmFja3JhdGVcIil7XHJcbiAgICAgICAgICAgIHBhbmVsLnRpdGxlID0gXCJTcGVlZFwiO1xyXG4gICAgICAgICAgICBsZXQgcGxheUJhY2tSYXRlcyA9IGFwaS5nZXRDb25maWcoKS5wbGF5YmFja1JhdGVzO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFBsYXliYWNrUmF0ZSA9IGFwaS5nZXRQbGF5YmFja1JhdGUoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5QmFja1JhdGVzLmxlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAocGxheUJhY2tSYXRlc1tpXSA9PT0gMT8gXCJOb3JtYWxcIiA6IHBsYXlCYWNrUmF0ZXNbaV0pLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQ2hlY2sgOiBjdXJyZW50UGxheWJhY2tSYXRlID09PSBwbGF5QmFja1JhdGVzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlIDogcGxheUJhY2tSYXRlc1tpXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHBhbmVsLmJvZHkucHVzaChib2R5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ZWxzZSBpZihwYW5lbFR5cGUgPT09IFwicXVhbGl0eWxldmVsXCIpe1xyXG4gICAgICAgICAgICBwYW5lbC50aXRsZSA9IFwiU291cmNlXCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgcXVhbGl0eUxldmVscyA9IGFwaS5nZXRRdWFsaXR5TGV2ZWxzKCk7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50UXVhbGl0eSA9IGFwaS5nZXRDdXJyZW50UXVhbGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWFsaXR5TGV2ZWxzLmxlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiBxdWFsaXR5TGV2ZWxzW2ldLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQ2hlY2sgOiBjdXJyZW50UXVhbGl0eS5pbmRleCA9PT0gaSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6IGlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5ib2R5LnB1c2goYm9keSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYW5lbDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25SZW5kZXJlZCA9IGZ1bmN0aW9uKCRjdXJyZW50LCB0ZW1wbGF0ZSl7XHJcbiAgICAgICAgaWYoUExBWUVSX01JTl9IRUlHSFQgPiAkcm9vdC5oZWlnaHQoKSl7XHJcbiAgICAgICAgICAgICRyb290LmZpbmQoXCIub3ZwLXNldHRpbmctcGFuZWxcIikuY3NzKFwibWF4SGVpZ2h0XCIsIFwiMTE0cHhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uRGVzdHJveWVkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAvL0RvIG5vdGhpbmcuXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZXZlbnRzID0ge1xyXG4gICAgICAgIFwiY2xpY2sgLm92cC1zZXR0aW5nLW1haW4taXRlbVwiOiBmdW5jdGlvbiAoZXZlbnQsICRjdXJyZW50LCB0ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsZXQgcGFuZWxUeXBlID0gTEEkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmF0dHIoXCJvdnAtcGFuZWwtdHlwZVwiKTtcclxuICAgICAgICAgICAgLy9wYXJlbnQgbXVzdCBiZSBub3QgJGN1cnJlbnQhXHJcbiAgICAgICAgICAgIFNldHRpbmdQYW5lbExpc3QucHVzaChTZXR0aW5nUGFuZWwoJGNvbnRhaW5lciwgYXBpLCBleHRyYWN0UGFuZWxEYXRhKHBhbmVsVHlwZSkpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY2xpY2sgLm92cC1zZXR0aW5nLXRpdGxlXCIgOiBmdW5jdGlvbihldmVudCwgJGN1cnJlbnQsIHRlbXBsYXRlKXtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vUmVtb3ZlIEN1cnJlbnQgUGFuZWxcclxuICAgICAgICAgICAgbGV0IGxhc3QgPSBTZXR0aW5nUGFuZWxMaXN0LnBvcCgpO1xyXG4gICAgICAgICAgICBsYXN0LmRlc3Ryb3koKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY2xpY2sgLm92cC1zZXR0aW5nLWl0ZW0tdmFsdWVcIiA6IGZ1bmN0aW9uKGV2ZW50LCAkY3VycmVudCwgdGVtcGxhdGUpe1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBhbmVsVHlwZSA9IExBJChldmVudC5jdXJyZW50VGFyZ2V0KS5hdHRyKFwib3ZwLXBhbmVsLXR5cGVcIik7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IExBJChldmVudC5jdXJyZW50VGFyZ2V0KS5hdHRyKFwib3ZwLWRhdGEtdmFsdWVcIik7XHJcblxyXG4gICAgICAgICAgICBpZihwYW5lbFR5cGUgJiYgdmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgaWYocGFuZWxUeXBlID09PSBcInBsYXliYWNrcmF0ZVwiKXtcclxuICAgICAgICAgICAgICAgICAgICBhcGkuc2V0UGxheWJhY2tSYXRlKHBhcnNlRmxvYXQodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHBhbmVsVHlwZSA9PT0gXCJxdWFsaXR5bGV2ZWxcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpLnNldEN1cnJlbnRRdWFsaXR5KHBhcnNlSW50KHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jbGVhciBhbGwgU2V0dGluZ1BhbmVsVGVtcGxhdGVcclxuICAgICAgICAgICAgICAgIF8uZWFjaChTZXR0aW5nUGFuZWxMaXN0LCBmdW5jdGlvbihzZXR0aW5nUGFuZWwpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdQYW5lbC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFNldHRpbmdQYW5lbExpc3Quc3BsaWNlKDAsIFNldHRpbmdQYW5lbExpc3QubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBPdmVuVGVtcGxhdGUoJGNvbnRhaW5lciwgXCJTZXR0aW5nUGFuZWxcIiwgZGF0YSwgZXZlbnRzLCBvblJlbmRlcmVkLCBvbkRlc3Ryb3llZCApO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdQYW5lbDtcclxuIiwiaW1wb3J0IF8gZnJvbSBcInV0aWxzL3VuZGVyc2NvcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChkYXRhKSA9PiB7XHJcbiAgICBsZXQgZWxlbWVudHMgPSAnPGRpdiBjbGFzcz1cIm92cC1zZXR0aW5nLXBhbmVsICcrKGRhdGEuaXNNYWluID8gJ2FuaW1hdGVkIGZhZGVJbic6ICcnKSsnXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwib3ZwLXNldHRpbmctdGl0bGUtY29udGFpbmVyXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm92cC1zZXR0aW5nLXRpdGxlXCIgdGFiaW5kZXg9XCIwXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGEuaXNNYWluID8gJycgOiAnPHNwYW4gY2xhc3M9XCJvdnAtc2V0dGluZy10aXRsZS1wcmV2aWNvblwiPiZsdDs8L3NwYW4+JykgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cIm92cC1zZXR0aW5nLXRpdGxlLXRpdGxlXCI+JytkYXRhLnRpdGxlKyc8L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm92cC1zZXR0aW5nLWl0ZW0tY29udGFpbmVyXCI+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uZm9yRWFjaChkYXRhLmJvZHksIGZ1bmN0aW9uKGJvZHkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEuaXNNYWluKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMgKz0gc2V0dGluZ0l0ZW1UZW1wbGF0ZShib2R5LnRpdGxlLCBib2R5LnZhbHVlLCBib2R5LnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cyArPSBzZXR0aW5nVmFsdWVUZW1wbGF0ZShib2R5LnRpdGxlLCBib2R5LnZhbHVlLCBkYXRhLnR5cGUsIGJvZHkuaXNDaGVjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICBlbGVtZW50cys9ICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JztcclxuICAgIHJldHVybiBlbGVtZW50cztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXR0aW5nSXRlbVRlbXBsYXRlID0gKHRpdGxlLCB2YWx1ZSwgdHlwZSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAnPGRpdiBjbGFzcz1cIm92cC1zZXR0aW5nLWl0ZW0gb3ZwLXNldHRpbmctbWFpbi1pdGVtXCIgb3ZwLXBhbmVsLXR5cGU9XCInK3R5cGUrJ1wiPicgK1xyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJvdnAtc2V0dGluZy1pdGVtLXRpdGxlXCI+Jyt0aXRsZSsnPC9zcGFuPicgK1xyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJvdnAtc2V0dGluZy1pdGVtLW5leHRpY29uXCI+Jmd0Ozwvc3Bhbj4nICtcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwib3ZwLXNldHRpbmctaXRlbS12YWx1ZVwiPicrdmFsdWUrJzwvc3Bhbj4nICtcclxuICAgICAgICAnPC9kaXY+J1xyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXR0aW5nVmFsdWVUZW1wbGF0ZSA9ICh0aXRsZSwgdmFsdWUsIHR5cGUsIGlzQ2hlY2spID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJvdnAtc2V0dGluZy1pdGVtIG92cC1zZXR0aW5nLWl0ZW0tdmFsdWVcIiBvdnAtcGFuZWwtdHlwZT1cIicrdHlwZSsnXCIgb3ZwLWRhdGEtdmFsdWU9XCInK3ZhbHVlKydcIj4nICtcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwib3ZwLXNldHRpbmctaXRlbS1jaGVja2VkICcrKGlzQ2hlY2s/J292cC1zaG93JzonJykrJ1wiPiYjeDI3MTM7PC9zcGFuPicgK1xyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJvdnAtc2V0dGluZy1pdGVtLXRpdGxlXCI+Jyt0aXRsZSsnPC9zcGFuPicgK1xyXG4gICAgICAgICc8L2Rpdj4nXHJcbiAgICApO1xyXG59O1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBob2hvIG9uIDIwMTguIDcuIDI1Li5cclxuICovXHJcbmltcG9ydCBPdmVuVGVtcGxhdGUgZnJvbSAndmlldy9lbmdpbmUvT3ZlblRlbXBsYXRlJztcclxuaW1wb3J0IHtuYXR1cmFsSG1zfSBmcm9tICd1dGlscy9zdHJpbmdzJztcclxuXHJcbmNvbnN0IFRpbWVEaXNwbGF5ID0gZnVuY3Rpb24oJGNvbnRhaW5lciwgYXBpLCBkYXRhKXtcclxuXHJcbiAgICBsZXQgJHBvc2l0aW9uID0gXCJcIiwgJGR1cmF0aW9uID0gXCJcIjtcclxuICAgIGxldCBjb252ZXJ0SHVtYW5pemVUaW1lID0gZnVuY3Rpb24odGltZSl7XHJcbiAgICAgICAgcmV0dXJuIG5hdHVyYWxIbXModGltZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uUmVuZGVyZWQgPSBmdW5jdGlvbigkY3VycmVudCwgdGVtcGxhdGUpe1xyXG4gICAgICAgICRwb3NpdGlvbiA9ICRjdXJyZW50LmZpbmQoJy5vdnAtdGltZS1jdXJyZW50Jyk7XHJcbiAgICAgICAgJGR1cmF0aW9uID0gJGN1cnJlbnQuZmluZCgnLm92cC10aW1lLWR1cmF0aW9uJyk7XHJcblxyXG4gICAgICAgIGlmKGRhdGEuZHVyYXRpb24gIT09IEluZmluaXR5KXtcclxuXHJcbiAgICAgICAgICAgICRkdXJhdGlvbi50ZXh0KGNvbnZlcnRIdW1hbml6ZVRpbWUoZGF0YS5kdXJhdGlvbikpO1xyXG4gICAgICAgICAgICBhcGkub24oJ3RpbWUnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAkcG9zaXRpb24udGV4dChjb252ZXJ0SHVtYW5pemVUaW1lKGRhdGEucG9zaXRpb24pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcbiAgICBjb25zdCBvbkRlc3Ryb3llZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy9EbyBub3RoaW5nLlxyXG4gICAgfTtcclxuICAgIGNvbnN0IGV2ZW50cyA9IHtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBPdmVuVGVtcGxhdGUoJGNvbnRhaW5lciwgXCJUaW1lRGlzcGxheVwiLCBkYXRhLCBldmVudHMsIG9uUmVuZGVyZWQsIG9uRGVzdHJveWVkICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZURpc3BsYXk7IiwiZXhwb3J0IGRlZmF1bHQgKGRhdGEpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJvdnAtdGltZS1kaXNwbGF5XCI+JytcclxuICAgICAgICAgICAgKGRhdGEuZHVyYXRpb24gPT09IEluZmluaXR5XHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAoJzxidXR0b24gY2xhc3M9XCJvdnAtbGl2ZS1iYWRnZSBvdnAtYnV0dG9uXCIgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgIChkYXRhLnR5cGUgPT0nd2VicnRjJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cIm92cC1saXZlLWJhZGdlLWxvd2xhdGVuY3lcIj5sb3cgbGF0ZW5jeSBsaXZlPC9zcGFuPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4+bGl2ZTwvc3Bhbj4nKSArXHJcbiAgICAgICAgICAgICAgICAnPC9idXR0b24+JylcclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICgnPHNwYW4gY2xhc3M9XCJvdnAtdGltZS1jdXJyZW50XCI+MDowMDwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJvdnAtdGltZS1zZXBhcmF0b3JcIj4gLyA8L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwib3ZwLXRpbWUtZHVyYXRpb25cIj4wOjAwPC9zcGFuPicpXHJcbiAgICAgICAgICAgICkgK1xyXG4gICAgICAgICc8L2Rpdj4nXHJcbiAgICApO1xyXG59O1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBob2hvIG9uIDIwMTguIDcuIDIwLi5cclxuICovXHJcbmltcG9ydCBPdmVuVGVtcGxhdGUgZnJvbSAndmlldy9lbmdpbmUvT3ZlblRlbXBsYXRlJztcclxuXHJcbmNvbnN0IFZvbHVtZUJ1dHRvbiA9IGZ1bmN0aW9uKCRjb250YWluZXIsIGFwaSl7XHJcblxyXG4gICAgbGV0ICRzbGlkZXJDb250YWluZXIgPSBcIlwiLFxyXG4gICAgICAgICRzbGlkZXIgPSBcIlwiLFxyXG4gICAgICAgICRzbGlkZXJIYW5kbGUgPSBcIlwiLFxyXG4gICAgICAgICRzbGlkZXJWYWx1ZSA9IFwiXCIsXHJcbiAgICAgICAgJHZvbHVtZUljb25CaWcgPSBcIlwiLFxyXG4gICAgICAgICR2b2x1bWVJY29uU21hbGwgPSBcIlwiLFxyXG4gICAgICAgICR2b2x1bWVJY29uTXV0ZSA9IFwiXCI7XHJcbiAgICBsZXQgbW91c2VEb3duID0gZmFsc2U7XHJcbiAgICBsZXQgc2xpZGVyV2lkdGggPSA3MCwgIGhhbmRsZVdpZHRoID0gMCwgbWluUmFuZ2UgPSAwLCBtYXhSYW5nZSA9IDA7XHJcblxyXG5cclxuICAgIC8qcHJpdmF0ZSBmdW5jdGlvbnMqL1xyXG4gICAgbGV0IHNldFZvbHVtZUljb24gPSBmdW5jdGlvbihwZXJjZW50YWdlKSB7XHJcbiAgICAgICAgJHZvbHVtZUljb25CaWcuaGlkZSgpO1xyXG4gICAgICAgICR2b2x1bWVJY29uU21hbGwuaGlkZSgpO1xyXG4gICAgICAgICR2b2x1bWVJY29uTXV0ZS5oaWRlKCk7XHJcblxyXG4gICAgICAgIGlmIChwZXJjZW50YWdlID49IDcwKSB7XHJcbiAgICAgICAgICAgICR2b2x1bWVJY29uQmlnLnNob3coKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBlcmNlbnRhZ2UgPCA3MCAmJiBwZXJjZW50YWdlID4gMCkge1xyXG4gICAgICAgICAgICAkdm9sdW1lSWNvblNtYWxsLnNob3coKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBlcmNlbnRhZ2UgPT0gMCkge1xyXG4gICAgICAgICAgICAkdm9sdW1lSWNvbk11dGUuc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2V0Vm9sdW1lVUkgPSBmdW5jdGlvbihwZXJjZW50YWdlKSB7XHJcbiAgICAgICAgaWYgKGFwaS5nZXRNdXRlKCkpIHtcclxuICAgICAgICAgICAgcGVyY2VudGFnZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRWb2x1bWVJY29uKHBlcmNlbnRhZ2UpO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVQb3NpdGlvbiA9IG1heFJhbmdlICogcGVyY2VudGFnZSAvIDEwMDtcclxuXHJcbiAgICAgICAgJHNsaWRlckhhbmRsZS5jc3MoJ2xlZnQnLCBoYW5kbGVQb3NpdGlvbisgJ3B4Jyk7XHJcbiAgICAgICAgJHNsaWRlclZhbHVlLmNzcygnd2lkdGgnLCBoYW5kbGVQb3NpdGlvbisgJ3B4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNhbGN1bGF0ZVBlcmNlbnRhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCByZWxhdGl2ZVggPSBldmVudC5wYWdlWCAtICRzbGlkZXIub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IHJlbGF0aXZlWCAvIHNsaWRlcldpZHRoICogMTAwO1xyXG5cclxuICAgICAgICBpZiAocGVyY2VudGFnZSA8IDApIHtcclxuICAgICAgICAgICAgcGVyY2VudGFnZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGVyY2VudGFnZSA+IDEwMCkge1xyXG4gICAgICAgICAgICBwZXJjZW50YWdlID0gMTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBlcmNlbnRhZ2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IG9uUmVuZGVyZWQgPSBmdW5jdGlvbigkY3VycmVudCwgdGVtcGxhdGUpe1xyXG4gICAgICAgICRzbGlkZXJDb250YWluZXIgPSAkY3VycmVudC5maW5kKFwiLm92cC12b2x1bWUtc2xpZGVyLWNvbnRhaW5lclwiKTtcclxuICAgICAgICAkc2xpZGVyID0gJGN1cnJlbnQuZmluZChcIi5vdnAtdm9sdW1lLXNpbGRlclwiKTtcclxuICAgICAgICAkc2xpZGVySGFuZGxlID0gJGN1cnJlbnQuZmluZChcIi5vdnAtdm9sdW1lLXNsaWRlci1oYW5kbGVcIik7XHJcbiAgICAgICAgJHNsaWRlclZhbHVlID0gJGN1cnJlbnQuZmluZChcIi5vdnAtdm9sdW1lLXNsaWRlci12YWx1ZVwiKTtcclxuXHJcbiAgICAgICAgJHZvbHVtZUljb25CaWcgPSAkY3VycmVudC5maW5kKCBcIi5vdnAtdm9sdW1lLWJ1dHRvbi1iaWdpY29uXCIpO1xyXG4gICAgICAgICR2b2x1bWVJY29uU21hbGwgPSAkY3VycmVudC5maW5kKFwiLm92cC12b2x1bWUtYnV0dG9uLXNtYWxsaWNvblwiKTtcclxuICAgICAgICAkdm9sdW1lSWNvbk11dGUgPSAkY3VycmVudC5maW5kKFwiLm92cC12b2x1bWUtYnV0dG9uLW11dGVpY29uXCIpO1xyXG5cclxuICAgICAgICBoYW5kbGVXaWR0aCA9ICRzbGlkZXJIYW5kbGUud2lkdGgoKTtcclxuICAgICAgICBtYXhSYW5nZSA9IHNsaWRlcldpZHRoIC0gaGFuZGxlV2lkdGg7XHJcblxyXG4gICAgICAgIGFwaS5vbigncmVhZHknLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0Vm9sdW1lVUkoYXBpLmdldFZvbHVtZSgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhcGkub24oJ3ZvbHVtZUNoYW5nZWQnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHNldFZvbHVtZVVJKGRhdGEudm9sdW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhcGkub24oJ211dGUnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLm11dGUpIHtcclxuICAgICAgICAgICAgICAgIHNldFZvbHVtZVVJKDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0Vm9sdW1lVUkoYXBpLmdldFZvbHVtZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcbiAgICBjb25zdCBvbkRlc3Ryb3llZCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgfTtcclxuICAgIGNvbnN0IGV2ZW50cyA9IHtcclxuICAgICAgICBcImNsaWNrIC5vdnAtdm9sdW1lLWJ1dHRvblwiIDogZnVuY3Rpb24oZXZlbnQsICRjdXJyZW50LCB0ZW1wbGF0ZSl7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYXBpLmdldFZvbHVtZSgpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhcGkuc2V0TXV0ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBhcGkuc2V0Vm9sdW1lKDEwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhcGkuc2V0TXV0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1vdXNlZW50ZXIgLm92cC12b2x1bWUtYnV0dG9uXCIgOiBmdW5jdGlvbihldmVudCwgJGN1cnJlbnQsIHRlbXBsYXRlKXtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJHNsaWRlckNvbnRhaW5lci5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibW91c2VsZWF2ZSAub3ZwLXZvbHVtZS1zaWxkZXJcIiA6IGZ1bmN0aW9uKGV2ZW50LCAkY3VycmVudCwgdGVtcGxhdGUpe1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgbW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1vdXNlZG93biAub3ZwLXZvbHVtZS1zaWxkZXJcIiA6IGZ1bmN0aW9uKGV2ZW50LCAkY3VycmVudCwgdGVtcGxhdGUpe1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtb3VzZURvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICBhcGkuc2V0TXV0ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIGFwaS5zZXRWb2x1bWUoY2FsY3VsYXRlUGVyY2VudGFnZShldmVudCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtb3VzZXVwIC5vdnAtdm9sdW1lLXNpbGRlclwiIDogZnVuY3Rpb24oZXZlbnQsICRjdXJyZW50LCB0ZW1wbGF0ZSl7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtb3VzZW1vdmUgLm92cC12b2x1bWUtc2lsZGVyXCIgOiBmdW5jdGlvbihldmVudCwgJGN1cnJlbnQsIHRlbXBsYXRlKXtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKCFtb3VzZURvd24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXBpLnNldFZvbHVtZShjYWxjdWxhdGVQZXJjZW50YWdlKGV2ZW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPdmVuVGVtcGxhdGUoJGNvbnRhaW5lciwgXCJWb2x1bWVCdXR0b25cIiwgbnVsbCwgZXZlbnRzLCBvblJlbmRlcmVkLCBvbkRlc3Ryb3llZCksIHtcclxuICAgICAgICBzZXRNb3VzZURvd246IGZ1bmN0aW9uIChzdGF0ZSkge1xyXG4gICAgICAgICAgICBtb3VzZURvd24gPSBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZvbHVtZUJ1dHRvbjtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgaG9obyBvbiAyMDE4LiA3LiAyMC4uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwib3ZwLXZvbHVtZS1jb250cm9sbGVyXCI+JytcclxuICAgICAgICAgICAgJzxidXR0b24gY2xhc3M9XCJvdnAtYnV0dG9uIG92cC12b2x1bWUtYnV0dG9uXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPGkgY2xhc3M9XCJvdnAtdm9sdW1lLWJ1dHRvbi1iaWdpY29uXCI+PC9pPicgK1xyXG4gICAgICAgICAgICAgICAgJzxpIGNsYXNzPVwib3ZwLXZvbHVtZS1idXR0b24tc21hbGxpY29uXCI+PC9pPicgK1xyXG4gICAgICAgICAgICAgICAgJzxpIGNsYXNzPVwib3ZwLXZvbHVtZS1idXR0b24tbXV0ZWljb25cIj48L2k+JyArXHJcbiAgICAgICAgICAgICc8L2J1dHRvbj4nICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJvdnAtdm9sdW1lLXNsaWRlci1jb250YWluZXJcIj4nICtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwib3ZwLXZvbHVtZS1zaWxkZXJcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm92cC12b2x1bWUtc2xpZGVyLWJnXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJvdnAtdm9sdW1lLXNsaWRlci12YWx1ZVwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwib3ZwLXZvbHVtZS1zbGlkZXItaGFuZGxlXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICc8L2Rpdj4nXHJcbiAgICApO1xyXG59O1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBob2hvIG9uIDIwMTguIDcuIDE5Li5cclxuICovXHJcblxyXG5pbXBvcnQgVGVtcGxhdGVzIGZyb20gXCJ2aWV3L2VuZ2luZS9UZW1wbGF0ZXNcIjtcclxuaW1wb3J0IExBJCBmcm9tICd1dGlscy9saWtlQSQnO1xyXG5pbXBvcnQgXyBmcm9tIFwidXRpbHMvdW5kZXJzY29yZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBicmllZiAgIFRoaXMgaXMgc2ltcGxlIHVpIHJlbmRlcmVyLiBUaGlzIHJldHVybnMgb25SZW5kZXJlZCBjYWxsYmFjaywgb25EZXN0cm95ZWQgY2FsbGJhY2sgb24gVGVtcGxhdGUuIEFuZCB0aGlzIGJpbmQgZXZlbnRzIGZvciBUZW1wbGF0ZXMuXHJcbiAqIEBwYXJhbSAgIGNvbnRhaW5lciAgZG9tIGVsZW1lbnQgb3IgTEEkIG9iamVjdFxyXG4gKiBAcGFyYW0gICB0ZW1wbGF0ZU5hbWUgICAgdGVtcGxhdGVOYW1lXHJcbiAqIEBwYXJhbSAgIGRhdGEgICAgcHJlbG9hZCBkYXRhXHJcbiAqIEBwYXJhbSAgIGV2ZW50cyAgICBUZW1wbGF0ZSdzIGV2ZW50cy5cclxuICogQHBhcmFtICAgb25SZW5kZXJlZCAgICBUaGlzIGNhbGxiYWNrIG9jY3VycyBhZnRlciBhcHBlbmQgdGVtcGxhdGUuXHJcbiAqIEBwYXJhbSAgIG9uRGVzdHJveWVkICAgIFRoaXMgY2FsbGJhY2sgb2NjdXJzIGFmdGVyIGRlc3Ryb3llZCB0ZW1wbGF0ZS5cclxuICogQHBhcmFtICAgaXNSb290XHJcbiAqXHJcbiAqICovXHJcbmNvbnN0IE92ZW5UZW1wbGF0ZSA9IGZ1bmN0aW9uIChjb250YWluZXIsIHRlbXBsYXRlTmFtZSwgZGF0YSwgZXZlbnRzLCBvblJlbmRlcmVkLCBvbkRlc3Ryb3llZCwgaXNSb290KSB7XHJcbiAgICBsZXQgJGNvbnRhaW5lciA9IF8uaXNFbGVtZW50KGNvbnRhaW5lcikgPyBMQSQoY29udGFpbmVyKSA6IGNvbnRhaW5lcjtcclxuICAgIGxldCAkdGVtcGxhdGU7XHJcbiAgICBsZXQgdmlld0V2ZW50cyA9IHt9O1xyXG4gICAgbGV0IHRoYXQgPSB7fTtcclxuXHJcbiAgICBsZXQgY3JlYXRlQW5kU2VsZWN0RWxlbWVudCA9IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5ld0VsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcbiAgICAgICAgJHRlbXBsYXRlID0gTEEkKG5ld0VsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdFbGVtZW50LmZpcnN0Q2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzUm9vdCkge1xyXG4gICAgICAgICRjb250YWluZXIucmVwbGFjZShjcmVhdGVBbmRTZWxlY3RFbGVtZW50KFRlbXBsYXRlc1t0ZW1wbGF0ZU5hbWUgKyBcIlRlbXBsYXRlXCJdKGRhdGEpKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICRjb250YWluZXIuYXBwZW5kKGNyZWF0ZUFuZFNlbGVjdEVsZW1lbnQoVGVtcGxhdGVzW3RlbXBsYXRlTmFtZSArIFwiVGVtcGxhdGVcIl0oZGF0YSkpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob25SZW5kZXJlZCkge1xyXG4gICAgICAgIG9uUmVuZGVyZWQoJHRlbXBsYXRlLCB0aGF0KTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goZXZlbnRTdHJpbmcgPT4ge1xyXG4gICAgICAgIGxldCBleHBsb2RlZFRleHQgPSBldmVudFN0cmluZy5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgbGV0IGV2ZW50TmFtZSA9IGV4cGxvZGVkVGV4dFswXS5yZXBsYWNlKC8gL2dpLCBcIlwiKTtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXhwbG9kZWRUZXh0WzFdLnJlcGxhY2UoLyAvZ2ksIFwiXCIpO1xyXG5cclxuICAgICAgICBsZXQgJHRhcmdldCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmKHRhcmdldCA9PT0gXCJkb2N1bWVudFwiIHx8IHRhcmdldCA9PT0gXCJ3aW5kb3dcIil7XHJcbiAgICAgICAgICAgICR0YXJnZXQgPSBMQSQodGFyZ2V0KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJHRhcmdldCA9ICR0ZW1wbGF0ZS5maW5kKHRhcmdldCkgfHwgKCR0ZW1wbGF0ZS5oYXNDbGFzcyh0YXJnZXQucmVwbGFjZShcIi5cIixcIlwiKSkgPyAkdGVtcGxhdGUgOiBudWxsKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoZXZlbnROYW1lICYmIHRhcmdldCAmJiAkdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IE9iamVjdC5rZXlzKHZpZXdFdmVudHMpLmxlbmd0aCsrO1xyXG5cclxuICAgICAgICAgICAgLy9iZWNhdXNlIEl0IHJldHVucyBhbm90aGVyIGRhdGEuXHJcbiAgICAgICAgICAgIGxldCB3cmFwcGVkRnVuYyA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50c1tldmVudFN0cmluZ10oZXZlbnQsICR0ZW1wbGF0ZSwgdGhhdCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZpZXdFdmVudHNbaWRdID0ge25hbWU6IGV2ZW50TmFtZSwgdGFyZ2V0OiB0YXJnZXQsIGNhbGxiYWNrOiB3cmFwcGVkRnVuY307XHJcblxyXG4gICAgICAgICAgICAvL3NvbWV0aW1lcyB0YXJnZXQgaXMgTm9kZUxpc3RcclxuICAgICAgICAgICAgbGV0IG5vZGVMZW5ndGggPSAkdGFyZ2V0LmdldCgpLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYobm9kZUxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGVMaXN0ID0gJHRhcmdldC5nZXQoKTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBub2RlTGVuZ3RoOyBpICsrKXtcclxuICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtpXS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgd3JhcHBlZEZ1bmMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9JRSBOb2RlTGlzdCBkb2Vzbid0IGhhdmUgZm9yRWFjaC4gSXQncyB3YWNrLlxyXG4gICAgICAgICAgICAgICAgLyokdGFyZ2V0LmdldCgpLmZvckVhY2goZnVuY3Rpb24oJGl0ZW0pe1xyXG4gICAgICAgICAgICAgICAgICAgICRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB3cmFwcGVkRnVuYyk7XHJcbiAgICAgICAgICAgICAgICB9KTsqL1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICR0YXJnZXQuZ2V0KCkuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHdyYXBwZWRGdW5jKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoYXQuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyh2aWV3RXZlbnRzKS5mb3JFYWNoKGlkID0+IHtcclxuICAgICAgICAgICAgbGV0IGV2ZW50ID0gdmlld0V2ZW50c1tpZF07XHJcbiAgICAgICAgICAgIGxldCAkdGFyZ2V0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGlmKGV2ZW50LnRhcmdldCA9PT0gXCJkb2N1bWVudFwiIHx8IGV2ZW50LnRhcmdldCA9PT0gXCJ3aW5kb3dcIil7XHJcbiAgICAgICAgICAgICAgICAkdGFyZ2V0ID0gTEEkKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgJHRhcmdldCA9ICR0ZW1wbGF0ZS5maW5kKGV2ZW50LnRhcmdldCkgfHwgKCR0ZW1wbGF0ZS5oYXNDbGFzcyhldmVudC50YXJnZXQucmVwbGFjZShcIi5cIixcIlwiKSkgPyAkdGVtcGxhdGUgOiBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9zb21ldGltZXMgdGFyZ2V0IGlzIE5vZGVMaXN0XHJcbiAgICAgICAgICAgIGxldCBub2RlTGVuZ3RoID0gJHRhcmdldC5nZXQoKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmKG5vZGVMZW5ndGggPiAxKXtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlTGlzdCA9ICR0YXJnZXQuZ2V0KCk7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbm9kZUxlbmd0aDsgaSArKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudC5uYW1lLCBldmVudC5jYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvKiR0YXJnZXQuZ2V0KCkuZm9yRWFjaChmdW5jdGlvbigkaXRlbSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJGl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudC5uYW1lLCBldmVudC5jYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB9KTsqL1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICR0YXJnZXQuZ2V0KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudC5uYW1lLCBldmVudC5jYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSB2aWV3RXZlbnRzW2lkXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYoJHRlbXBsYXRlKXtcclxuICAgICAgICAgICAgJHRlbXBsYXRlLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9uRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIG9uRGVzdHJveWVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGF0O1xyXG5cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdmVuVGVtcGxhdGU7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGhvaG8gb24gMjAxOC4gNy4gMjAuLlxyXG4gKi9cclxuaW1wb3J0IFRleHRWaWV3VGVtcGxhdGUgZnJvbSAndmlldy9leGFtcGxlL21haW5UZW1wbGF0ZSc7XHJcbmltcG9ydCBWaWV3VGVtcGxhdGUgZnJvbSAndmlldy92aWV3VGVtcGxhdGUnO1xyXG5pbXBvcnQgSGVscGVyVGVtcGxhdGUgZnJvbSAndmlldy9oZWxwZXIvbWFpblRlbXBsYXRlJztcclxuaW1wb3J0IEJpZ0J1dHRvblRlbXBsYXRlIGZyb20gJ3ZpZXcvaGVscGVyL2JpZ0J1dHRvblRlbXBsYXRlJztcclxuaW1wb3J0IE1lc3NhZ2VCb3hUZW1wbGF0ZSBmcm9tICd2aWV3L2hlbHBlci9tZXNzYWdlQm94VGVtcGxhdGUnO1xyXG5pbXBvcnQgU3Bpbm5lclRlbXBsYXRlIGZyb20gJ3ZpZXcvaGVscGVyL3NwaW5uZXJUZW1wbGF0ZSc7XHJcbmltcG9ydCBDb250ZXh0UGFuZWxUZW1wbGF0ZSBmcm9tICd2aWV3L2hlbHBlci9jb250ZXh0UGFuZWxUZW1wbGF0ZSc7XHJcblxyXG5pbXBvcnQgQ29udHJvbHNUZW1wbGF0ZSBmcm9tICd2aWV3L2NvbnRyb2xzL21haW5UZW1wbGF0ZSc7XHJcbmltcG9ydCBWb2x1bWVCdXR0b25UZW1wbGF0ZSBmcm9tICd2aWV3L2NvbnRyb2xzL3ZvbHVtZUJ1dHRvblRlbXBsYXRlJztcclxuaW1wb3J0IFByb2dyZXNzQmFyVGVtcGxhdGUgZnJvbSAndmlldy9jb250cm9scy9wcm9ncmVzc0JhclRlbXBsYXRlJztcclxuaW1wb3J0IFBsYXlCdXR0b25UZW1wbGF0ZSBmcm9tICd2aWV3L2NvbnRyb2xzL3BsYXlCdXR0b25UZW1wbGF0ZSc7XHJcbmltcG9ydCBUaW1lRGlzcGxheVRlbXBsYXRlIGZyb20gJ3ZpZXcvY29udHJvbHMvdGltZURpc3BsYXlUZW1wbGF0ZSc7XHJcbmltcG9ydCBGdWxsU2NyZWVuQnV0dG9uVGVtcGxhdGUgZnJvbSAndmlldy9jb250cm9scy9mdWxsU2NyZWVuQnV0dG9uVGVtcGxhdGUnO1xyXG5pbXBvcnQgU2V0dGluZ1BhbmVsVGVtcGxhdGUgZnJvbSAndmlldy9jb250cm9scy9zZXR0aW5nUGFuZWxUZW1wbGF0ZSc7XHJcblxyXG5jb25zdCBUZW1wbGF0ZXMgPSB7XHJcbiAgICBUZXh0Vmlld1RlbXBsYXRlLFxyXG4gICAgVmlld1RlbXBsYXRlLFxyXG4gICAgSGVscGVyVGVtcGxhdGUsXHJcbiAgICBCaWdCdXR0b25UZW1wbGF0ZSxcclxuICAgIE1lc3NhZ2VCb3hUZW1wbGF0ZSxcclxuICAgIFNwaW5uZXJUZW1wbGF0ZSxcclxuICAgIENvbnRleHRQYW5lbFRlbXBsYXRlLFxyXG5cclxuICAgIENvbnRyb2xzVGVtcGxhdGUsXHJcbiAgICBWb2x1bWVCdXR0b25UZW1wbGF0ZSxcclxuICAgIFByb2dyZXNzQmFyVGVtcGxhdGUsXHJcbiAgICBQbGF5QnV0dG9uVGVtcGxhdGUsXHJcbiAgICBUaW1lRGlzcGxheVRlbXBsYXRlLFxyXG4gICAgRnVsbFNjcmVlbkJ1dHRvblRlbXBsYXRlLFxyXG4gICAgU2V0dGluZ1BhbmVsVGVtcGxhdGVcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlczsiLCIvKipcclxuICogQ3JlYXRlZCBieSBob2hvIG9uIDIwMTguIDcuIDE5Li5cclxuICovXHJcblxyXG5jb25zdCBUZXh0Vmlld1RlbXBsYXRlID0gZnVuY3Rpb24odGV4dCl7XHJcbiAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJ0ZXh0Vmlld1wiIHN0eWxlPVwicGFkZGluZyA6IDVweDsgYmFja2dyb3VuZDogcmVkXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPGgzPicrdGV4dCsnPC9oMz4nICtcclxuICAgICAgICAgICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0blwiPuuLq+q4sDwvYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRWaWV3VGVtcGxhdGU7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgaG9obyBvbiAyMDE4LiA3LiAyNi4uXHJcbiAqL1xyXG5jb25zdCBTZXR0aW5nUGFuZWxMaXN0ID0gW107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nUGFuZWxMaXN0OyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGhvaG8gb24gMjAxOC4gNy4gMjQuLlxyXG4gKi9cclxuaW1wb3J0IE92ZW5UZW1wbGF0ZSBmcm9tICd2aWV3L2VuZ2luZS9PdmVuVGVtcGxhdGUnO1xyXG5pbXBvcnQge1xyXG4gICAgU1RBVEVfSURMRSxcclxuICAgIFNUQVRFX1BMQVlJTkcsXHJcbiAgICBTVEFURV9DT01QTEVURSxcclxuICAgIFNUQVRFX1BBVVNFRFxyXG59IGZyb20gXCJhcGkvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBCaWdCdXR0b24gPSBmdW5jdGlvbigkY29udGFpbmVyLCBhcGksIHBsYXllclN0YXRlKXtcclxuXHJcbiAgICBjb25zdCBvblJlbmRlcmVkID0gZnVuY3Rpb24oJGNvbnRhaW5lciwgJGN1cnJlbnQsIHRlbXBsYXRlKXtcclxuICAgICAgICAvL0RvIG5vdGhpbmchXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25EZXN0cm95ZWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vRG8gbm90aGluZyFcclxuICAgIH07XHJcbiAgICBjb25zdCBldmVudHMgPSB7XHJcbiAgICAgICAgLypcImNsaWNrIC5vdnAtYmlnYnV0dG9uLWNvbnRhaW5lclwiIDogZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gYXBpLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IFNUQVRFX0lETEUgfHwgY3VycmVudFN0YXRlID09PSBTVEFURV9QQVVTRUQgfHwgY3VycmVudFN0YXRlID09PSBTVEFURV9DT01QTEVURSkge1xyXG4gICAgICAgICAgICAgICAgYXBpLnBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0qL1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gT3ZlblRlbXBsYXRlKCRjb250YWluZXIsIFwiQmlnQnV0dG9uXCIsIHBsYXllclN0YXRlLCBldmVudHMsIG9uUmVuZGVyZWQsIG9uRGVzdHJveWVkICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaWdCdXR0b247IiwiaW1wb3J0IHtcclxuICAgIFNUQVRFX0lETEUsXHJcbiAgICBTVEFURV9QTEFZSU5HLFxyXG4gICAgU1RBVEVfU1RBTExFRCxcclxuICAgIFNUQVRFX0xPQURJTkcsXHJcbiAgICBTVEFURV9DT01QTEVURSxcclxuICAgIFNUQVRFX1BBVVNFRCxcclxuICAgIFNUQVRFX0VSUk9SXHJcbn0gZnJvbSBcImFwaS9jb25zdGFudHNcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAocGxheWVyU3RhdGUpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJvdnAtYmlnYnV0dG9uLWNvbnRhaW5lciBcIj4nICsgICAgICAvL2FuaW1hdGVkIGJvdW5jZUluXHJcbiAgICAgICAgICAgIChwbGF5ZXJTdGF0ZSA9PT0gU1RBVEVfUExBWUlORyA/ICc8aSBjbGFzcz1cIm92cC1iaWdidXR0b24gb3ZwLWJpZ2J1dHRvbi1wYXVzZVwiPjwvaT4nIDogJycpICtcclxuICAgICAgICAgICAgKHBsYXllclN0YXRlID09PSBTVEFURV9QQVVTRUQgID8gJzxpIGNsYXNzPVwib3ZwLWJpZ2J1dHRvbiBvdnAtYmlnYnV0dG9uLXBsYXlcIj48L2k+JyA6ICcnKSArXHJcbiAgICAgICAgICAgIChwbGF5ZXJTdGF0ZSA9PT0gU1RBVEVfQ09NUExFVEUgPyAnPGkgY2xhc3M9XCJvdnAtYmlnYnV0dG9uIG92cC1iaWdidXR0b24tcmVwbGF5XCI+PC9pPicgOiAnJykgK1xyXG4gICAgICAgICc8L2Rpdj4nXHJcbiAgICApO1xyXG59OyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGhvaG8gb24gMjAxOC4gOC4gMS4uXHJcbiAqL1xyXG5pbXBvcnQgT3ZlblRlbXBsYXRlIGZyb20gJ3ZpZXcvZW5naW5lL092ZW5UZW1wbGF0ZSc7XHJcbmltcG9ydCBMQSQgZnJvbSAndXRpbHMvbGlrZUEkJztcclxuXHJcbmNvbnN0IENvbnRleHRQYW5lbCA9IGZ1bmN0aW9uKCRjb250YWluZXIsIGFwaSwgcG9zaXRpb24pe1xyXG4gICAgY29uc3QgJHJvb3QgPSBMQSQoXCIjXCIrYXBpLmdldENvbnRhaW5lcklkKCkpO1xyXG5cclxuICAgIGNvbnN0IG9uUmVuZGVyZWQgPSBmdW5jdGlvbigkY3VycmVudCwgdGVtcGxhdGUpe1xyXG4gICAgICAgIGNvbnN0IHBhbmVsV2lkdGggPSAkY3VycmVudC53aWR0aCgpO1xyXG4gICAgICAgIGNvbnN0IHBhbmVsSGVpZ2h0ID0gJGN1cnJlbnQuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLm1pbihwb3NpdGlvbi5wYWdlWCAtICRyb290Lm9mZnNldCgpLmxlZnQsICRyb290LndpZHRoKCkgLSBwYW5lbFdpZHRoKTtcclxuICAgICAgICBjb25zdCB5ID0gTWF0aC5taW4ocG9zaXRpb24ucGFnZVkgLSAkcm9vdC5vZmZzZXQoKS50b3AsICRyb290LmhlaWdodCgpIC0gcGFuZWxIZWlnaHQpO1xyXG5cclxuICAgICAgICAkY3VycmVudC5jc3MoXCJsZWZ0XCIgLCB4ICsgXCJweFwiKTtcclxuICAgICAgICAkY3VycmVudC5jc3MoXCJ0b3BcIiAsIHkgKyBcInB4XCIpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uRGVzdHJveWVkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAvL0RvIG5vdGhpbmcuXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZXZlbnRzID0ge1xyXG4gICAgICAgIFwiY2xpY2sgLm92cC1jb250ZXh0LWl0ZW1cIiA6IGZ1bmN0aW9uKGV2ZW50LCAkY3VycmVudCwgdGVtcGxhdGUpe1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oXHJcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL0FpcmVuU29mdC9PdmVuUGxheWVyJyxcclxuICAgICAgICAgICAgICAgICdfYmxhbmsnXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gT3ZlblRlbXBsYXRlKCRjb250YWluZXIsIFwiQ29udGV4dFBhbmVsXCIsIHBvc2l0aW9uLCBldmVudHMsIG9uUmVuZGVyZWQsIG9uRGVzdHJveWVkICk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFBhbmVsO1xyXG4iLCJpbXBvcnQge3ZlcnNpb259IGZyb20gJ3ZlcnNpb24nO1xyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwib3ZwLWNvbnRleHQtcGFuZWwgYW5pbWF0ZWQgZmFkZUluXCI+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwib3ZwLWNvbnRleHQtaXRlbVwiIHRhYmluZGV4PVwiMFwiPicgK1xyXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwib3ZwLWNvbnRleHQtaXRlbS10ZXh0XCI+SGVscDwvc3Bhbj4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwib3ZwLWNvbnRleHQtaXRlbVwiIHRhYmluZGV4PVwiMVwiPicgK1xyXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwib3ZwLWNvbnRleHQtaXRlbS10ZXh0XCI+QWJvdXQgT3ZlblBsYXllciAnK3ZlcnNpb24rJzwvc3Bhbj4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgJzwvZGl2PidcclxuICAgICk7XHJcbn07IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgaG9obyBvbiAyMDE4LiA3LiAyNC4uXHJcbiAqL1xyXG5pbXBvcnQgT3ZlblRlbXBsYXRlIGZyb20gJ3ZpZXcvZW5naW5lL092ZW5UZW1wbGF0ZSc7XHJcbmltcG9ydCBCaWdCdXR0b24gZnJvbSAndmlldy9oZWxwZXIvYmlnQnV0dG9uJztcclxuaW1wb3J0IE1lc3NhZ2VCb3ggZnJvbSAndmlldy9oZWxwZXIvbWVzc2FnZUJveCc7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gJ3ZpZXcvaGVscGVyL3NwaW5uZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIFJFQURZLFxyXG4gICAgRVJST1IsXHJcbiAgICBTVEFURV9JRExFLFxyXG4gICAgU1RBVEVfUExBWUlORyxcclxuICAgIFNUQVRFX1NUQUxMRUQsXHJcbiAgICBTVEFURV9MT0FESU5HLFxyXG4gICAgU1RBVEVfQ09NUExFVEUsXHJcbiAgICBTVEFURV9QQVVTRUQsXHJcbiAgICBTVEFURV9FUlJPUixcclxuICAgIFBMQVlFUl9TVEFURSxcclxuICAgIE5FVFdPUktfVU5TVEFCTEVEXHJcbn0gZnJvbSBcImFwaS9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IEhlbHBlciA9IGZ1bmN0aW9uKCRjb250YWluZXIsIGFwaSl7XHJcbiAgICBsZXQgYmlnQnV0dG9uID0gXCJcIiwgbWVzc2FnZUJveCA9IFwiXCIsIHNwaW5uZXIgPSBcIlwiO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3Qgb25SZW5kZXJlZCA9IGZ1bmN0aW9uKCRjdXJyZW50LCB0ZW1wbGF0ZSl7XHJcbiAgICAgICAgbGV0IGNyZWF0ZUJpZ0J1dHRvbiA9IGZ1bmN0aW9uKHN0YXRlKXtcclxuICAgICAgICAgICAgaWYoYmlnQnV0dG9uKXtcclxuICAgICAgICAgICAgICAgIGJpZ0J1dHRvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYmlnQnV0dG9uID0gQmlnQnV0dG9uKCRjdXJyZW50LCBhcGksIHN0YXRlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBjcmVhdGVNZXNzYWdlID0gZnVuY3Rpb24obWVzc2FnZSwgd2l0aFRpbWVyKXtcclxuICAgICAgICAgICAgaWYobWVzc2FnZUJveCl7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlQm94LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtZXNzYWdlQm94ID0gTWVzc2FnZUJveCgkY3VycmVudCwgYXBpLCBtZXNzYWdlLCB3aXRoVGltZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3Bpbm5lciA9IFNwaW5uZXIoJGN1cnJlbnQsIGFwaSk7XHJcblxyXG4gICAgICAgIGFwaS5vbihSRUFEWSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUJpZ0J1dHRvbihTVEFURV9QQVVTRUQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFwaS5vbihQTEFZRVJfU1RBVEUsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBpZihkYXRhICYmIGRhdGEubmV3c3RhdGUpe1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5uZXdzdGF0ZSA9PT0gU1RBVEVfUExBWUlORyl7XHJcbiAgICAgICAgICAgICAgICAgICAgYmlnQnV0dG9uLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICBzcGlubmVyLnNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQmlnQnV0dG9uKGRhdGEubmV3c3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubmV3c3RhdGUgPT09IFNUQVRFX1NUQUxMRUQgfHwgZGF0YS5uZXdzdGF0ZSA9PT0gU1RBVEVfTE9BRElORyApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGlubmVyLnNob3codHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5uZXIuc2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXBpLm9uKEVSUk9SLCBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICdJbml0aWFsaXphdGlvbiBmYWlsZWQuJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5jb2RlID09PSAzMDEpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnTWVkaWEgcGxheWJhY2sgd2FzIGNhbmNlbGVkLic7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IuY29kZSA9PT0gMzAyKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJ1NvbWUgb2YgdGhlIG1lZGlhIGNvdWxkIG5vdCBiZSBkb3dubG9hZGVkIGR1ZSB0byBhIG5ldHdvcmsgZXJyb3IuJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5jb2RlID09PSAzMDMpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnVW5hYmxlIHRvIGxvYWQgbWVkaWEuIFRoaXMgbWF5IGJlIGR1ZSB0byBhIHNlcnZlciBvciBuZXR3b3JrIGVycm9yLCBvciBkdWUgdG8gYW4gdW5zdXBwb3J0ZWQgZm9ybWF0Lic7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IuY29kZSA9PT0gMzA0KSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJ01lZGlhIHBsYXliYWNrIGhhcyBiZWVuIGNhbmNlbGVkLiBJdCBsb29rcyBsaWtlIHlvdXIgbWVkaWEgaXMgY29ycnVwdGVkIG9yIHlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBmZWF0dXJlcyB5b3VyIG1lZGlhIHVzZXMuJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludChlcnJvci5jb2RlLzEwMCkgPT09IDUpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnQ29ubmVjdGlvbiB3aXRoIGxvdy1sYXRlbmN5IHNlcnZlciBmYWlsZWQuJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnQ2FuIG5vdCBwbGF5IGR1ZSB0byB1bmtub3duIHJlYXNvbnMuJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY3JlYXRlTWVzc2FnZShtZXNzYWdlLCBudWxsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXBpLm9uKE5FVFdPUktfVU5TVEFCTEVELCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gJ0JlY2F1c2UgdGhlIG5ldHdvcmsgY29ubmVjdGlvbiBpcyB1bnN0YWJsZSwgdGhlIGZvbGxvd2luZyBtZWRpYSBzb3VyY2Ugd2lsbCBiZSBwbGF5ZWQuJztcclxuXHJcbiAgICAgICAgICAgIGlmKGFwaS5nZXRDdXJyZW50UXVhbGl0eSgpLmluZGV4KzEgPT09ICBhcGkuZ2V0UXVhbGl0eUxldmVscygpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJ05ldHdvcmsgY29ubmVjdGlvbiBpcyB1bnN0YWJsZS4gQ2hlY2sgdGhlIG5ldHdvcmsgY29ubmVjdGlvbi4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjcmVhdGVNZXNzYWdlKG1lc3NhZ2UsIDUwMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcbiAgICBjb25zdCBvbkRlc3Ryb3llZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy9EbyBub3RoaW5nLlxyXG4gICAgfTtcclxuICAgIGNvbnN0IGV2ZW50cyA9IHtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBPdmVuVGVtcGxhdGUoJGNvbnRhaW5lciwgXCJIZWxwZXJcIiwgbnVsbCwgZXZlbnRzLCBvblJlbmRlcmVkLCBvbkRlc3Ryb3llZCApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVscGVyO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBob2hvIG9uIDIwMTguIDcuIDE5Li5cclxuICovXHJcblxyXG5jb25zdCBIZWxwZXJUZW1wbGF0ZSA9IGZ1bmN0aW9uKHRleHQpe1xyXG4gICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwib3ZwLWhlbHBlcnMtY29udGFpbmVyXCI+PC9kaXY+JztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlbHBlclRlbXBsYXRlO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBob2hvIG9uIDIwMTguIDcuIDI0Li5cclxuICovXHJcbmltcG9ydCBPdmVuVGVtcGxhdGUgZnJvbSAndmlldy9lbmdpbmUvT3ZlblRlbXBsYXRlJztcclxuaW1wb3J0IHtcclxuICAgIFNUQVRFX0lETEUsXHJcbiAgICBTVEFURV9QTEFZSU5HLFxyXG4gICAgU1RBVEVfQ09NUExFVEUsXHJcbiAgICBTVEFURV9QQVVTRURcclxufSBmcm9tIFwiYXBpL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgTWVzc2FnZUJveCA9IGZ1bmN0aW9uKCRjb250YWluZXIsIGFwaSwgbWVzc2FnZSwgd2l0aFRpbWVyKXtcclxuXHJcbiAgICBsZXQgYXV0b0Rlc3Ryb3lUaW1lciA9IFwiXCI7XHJcblxyXG4gICAgY29uc3Qgb25SZW5kZXJlZCA9IGZ1bmN0aW9uKCRjdXJyZW50LCB0ZW1wbGF0ZSl7XHJcbiAgICAgICAgaWYod2l0aFRpbWVyKXtcclxuICAgICAgICAgICAgYXV0b0Rlc3Ryb3lUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSwgd2l0aFRpbWVyfHw1MDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25EZXN0cm95ZWQgPSBmdW5jdGlvbigpe1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGV2ZW50cyA9IHtcclxuICAgICAgICBcImNsaWNrIC5vdnAtbWVzc2FnZS10ZXh0XCIgOiBmdW5jdGlvbihldmVudCwgJGN1cnJlbnQsIHRlbXBsYXRlKXtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGF1dG9EZXN0cm95VGltZXIpe1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGF1dG9EZXN0cm95VGltZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRlbXBsYXRlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBPdmVuVGVtcGxhdGUoJGNvbnRhaW5lciwgXCJNZXNzYWdlQm94XCIsIG1lc3NhZ2UsIGV2ZW50cywgb25SZW5kZXJlZCwgb25EZXN0cm95ZWQgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQm94OyIsImV4cG9ydCBkZWZhdWx0IChtZXNzYWdlKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwib3ZwLW1lc3NhZ2UtYm94IGFuaW1hdGVkIHNoYWtlXCI+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwib3ZwLW1lc3NhZ2UtY29udGFpbmVyXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJvdnAtbWVzc2FnZS10ZXh0XCI+JyttZXNzYWdlKyc8L3NwYW4+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAnPC9kaXY+J1xyXG4gICAgKTtcclxufTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBob2hvIG9uIDIwMTguIDcuIDI1Li5cclxuICovXHJcbmltcG9ydCBPdmVuVGVtcGxhdGUgZnJvbSAndmlldy9lbmdpbmUvT3ZlblRlbXBsYXRlJztcclxuXHJcbmNvbnN0IFNwaW5uZXIgPSBmdW5jdGlvbigkY29udGFpbmVyLCBhcGkpe1xyXG4gICAgbGV0ICRzcGlubmVyID0gXCJcIjtcclxuXHJcbiAgICBjb25zdCBvblJlbmRlcmVkID0gZnVuY3Rpb24oJGN1cnJlbnQsIHRlbXBsYXRlKXtcclxuICAgICAgICAkc3Bpbm5lciA9ICRjdXJyZW50O1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uRGVzdHJveWVkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAvL0RvIG5vdGhpbmcuXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZXZlbnRzID0ge307XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT3ZlblRlbXBsYXRlKCRjb250YWluZXIsIFwiU3Bpbm5lclwiLCBudWxsLCBldmVudHMsIG9uUmVuZGVyZWQsIG9uRGVzdHJveWVkICksIHtcclxuICAgICAgICBzaG93OiBmdW5jdGlvbiAoaXNTaG93KSB7XHJcbiAgICAgICAgICAgIGlmKGlzU2hvdyl7XHJcbiAgICAgICAgICAgICAgICAkc3Bpbm5lci5zaG93KCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgJHNwaW5uZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lcjsiLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJvdnAtc3Bpbm5lci1jb250YWluZXJcIj48ZGl2IGNsYXNzPVwib3ZwLXNwaW5uZXJcIj48ZGl2IGNsYXNzPVwiYm91bmNlMVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJib3VuY2UyXCI+PC9kaXY+PGRpdiBjbGFzcz1cImJvdW5jZTNcIj48L2Rpdj48L2Rpdj48L2Rpdj4nO1xyXG59O1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBob2hvIG9uIDIwMTguIDcuIDIwLi5cclxuICovXHJcbmltcG9ydCBPdmVuVGVtcGxhdGUgZnJvbSAndmlldy9lbmdpbmUvT3ZlblRlbXBsYXRlJztcclxuaW1wb3J0IEhlbHBlciBmcm9tICd2aWV3L2hlbHBlci9tYWluJztcclxuaW1wb3J0IENvbnRyb2xzIGZyb20gJ3ZpZXcvY29udHJvbHMvbWFpbic7XHJcbmltcG9ydCBTZXR0aW5nUGFuZWxMaXN0IGZyb20gJ3ZpZXcvZ2xvYmFsL1NldHRpbmdQYW5lbExpc3QnO1xyXG5pbXBvcnQgQ29udGV4dFBhbmVsIGZyb20gJ3ZpZXcvaGVscGVyL2NvbnRleHRQYW5lbCc7XHJcbmltcG9ydCBMQSQgZnJvbSAndXRpbHMvbGlrZUEkJztcclxuaW1wb3J0IF8gZnJvbSAndXRpbHMvdW5kZXJzY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgICBSRUFEWSxcclxuICAgIERFU1RST1ksXHJcbiAgICBTVEFURV9JRExFLFxyXG4gICAgU1RBVEVfUExBWUlORyxcclxuICAgIFNUQVRFX1NUQUxMRUQsXHJcbiAgICBTVEFURV9MT0FESU5HLFxyXG4gICAgU1RBVEVfQ09NUExFVEUsXHJcbiAgICBTVEFURV9QQVVTRUQsXHJcbiAgICBTVEFURV9FUlJPUixcclxuICAgIENPTlRFTlRfTUVUQSxcclxuICAgIFBMQVlFUl9TVEFURSxcclxuICAgIEVSUk9SXHJcbn0gZnJvbSBcImFwaS9jb25zdGFudHNcIjtcclxuXHJcbnJlcXVpcmUoJy4uLy4uL2Nzcy9vdmVucGxheWVyLmxlc3MnKTtcclxuXHJcbmNvbnN0IFZpZXcgPSBmdW5jdGlvbigkY29udGFpbmVyKXtcclxuICAgIGxldCB2aWV3VGVtcGxhdGUgPSBcIlwiLCBjb250cm9scyA9IFwiXCIsIGhlbHBlciA9IFwiXCIsICRwbGF5ZXJSb290LCBjb250ZXh0UGFuZWwgPSBcIlwiLCBhcGkgPSBcIlwiLCBhdXRvSGlkZVRpbWVyID0gXCJcIjtcclxuXHJcbiAgICBsZXQgc2V0SGlkZSA9IGZ1bmN0aW9uIChoaWRlLCBhdXRvSGlkZSkge1xyXG5cclxuICAgICAgICBpZiAoYXV0b0hpZGVUaW1lcikge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoYXV0b0hpZGVUaW1lcik7XHJcbiAgICAgICAgICAgIGF1dG9IaWRlVGltZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhpZGUpIHtcclxuICAgICAgICAgICAgaWYoU2V0dGluZ1BhbmVsTGlzdC5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkcGxheWVyUm9vdC5hZGRDbGFzcyhcIm92cC1hdXRvaGlkZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkcGxheWVyUm9vdC5yZW1vdmVDbGFzcyhcIm92cC1hdXRvaGlkZVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhdXRvSGlkZSkge1xyXG4gICAgICAgICAgICAgICAgYXV0b0hpZGVUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoU2V0dGluZ1BhbmVsTGlzdC5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAkcGxheWVyUm9vdC5hZGRDbGFzcyhcIm92cC1hdXRvaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgIH0sIDE4MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGxldCB0b2dnbGVQbGF5UGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gYXBpLmdldFN0YXRlKCk7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IFNUQVRFX0lETEUgfHwgY3VycmVudFN0YXRlID09PSBTVEFURV9QQVVTRUQgfHwgY3VycmVudFN0YXRlID09PSBTVEFURV9DT01QTEVURSkge1xyXG4gICAgICAgICAgICBhcGkucGxheSgpO1xyXG4gICAgICAgIH1lbHNlIGlmKGN1cnJlbnRTdGF0ZSA9PT0gU1RBVEVfUExBWUlORyl7XHJcbiAgICAgICAgICAgIGFwaS5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBsZXQgc2VlayA9IGZ1bmN0aW9uIChzZWNvbmRzLCBpc1Jld2luZCkge1xyXG5cclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IGFwaS5nZXREdXJhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IGFwaS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IDA7XHJcblxyXG4gICAgICAgIGlmKGlzUmV3aW5kKXtcclxuICAgICAgICAgICAgcG9zaXRpb24gPSBNYXRoLm1heChjdXJyZW50UG9zaXRpb24gLSBzZWNvbmRzLCAwKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcG9zaXRpb24gPSBNYXRoLm1pbihjdXJyZW50UG9zaXRpb24gKyBzZWNvbmRzLCBkdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcGkuc2Vlayhwb3NpdGlvbik7XHJcbiAgICB9O1xyXG4gICAgbGV0IHZvbHVtZSA9IGZ1bmN0aW9uKGlzVXApe1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWb2x1bW4gPSBhcGkuZ2V0Vm9sdW1lKCk7XHJcbiAgICAgICAgbGV0IG5ld1ZvbHVtZSA9IDA7XHJcbiAgICAgICAgaWYoaXNVcCl7XHJcbiAgICAgICAgICAgIG5ld1ZvbHVtZSA9ICBNYXRoLm1pbihjdXJyZW50Vm9sdW1uICsgNSwgMTAwKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbmV3Vm9sdW1lID0gTWF0aC5tYXgoY3VycmVudFZvbHVtbiAtIDUsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcGkuc2V0Vm9sdW1lKG5ld1ZvbHVtZSk7XHJcbiAgICB9O1xyXG4gICAgbGV0IGNyZWF0ZUNvbnRleHRQYW5lbCA9IGZ1bmN0aW9uKHBhZ2VYLCBwYWdlWSl7XHJcbiAgICAgICAgaWYoY29udGV4dFBhbmVsKXtcclxuICAgICAgICAgICAgY29udGV4dFBhbmVsLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgY29udGV4dFBhbmVsID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGV4dFBhbmVsID0gQ29udGV4dFBhbmVsKCRwbGF5ZXJSb290LCBhcGksIHtwYWdlWCA6IHBhZ2VYLCBwYWdlWSA6IHBhZ2VZfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IG9uUmVuZGVyZWQgPSBmdW5jdGlvbigkY3VycmVudCwgdGVtcGxhdGUpe1xyXG4gICAgICAgICRwbGF5ZXJSb290ID0gJGN1cnJlbnQ7XHJcbiAgICAgICAgdmlld1RlbXBsYXRlID0gdGVtcGxhdGU7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25EZXN0cm95ZWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vRG8gbm90aGluZy5cclxuICAgIH07XHJcbiAgICBjb25zdCBldmVudHMgPSB7XHJcbiAgICAgICAgXCJjbGljayAub3ZlbnBsYXllclwiIDogZnVuY3Rpb24oZXZlbnQsICRjdXJyZW50LCB0ZW1wbGF0ZSl7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZihjb250ZXh0UGFuZWwpe1xyXG4gICAgICAgICAgICAgICAgY29udGV4dFBhbmVsLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRQYW5lbCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIUxBJChldmVudC50YXJnZXQpLmNsb3Nlc3QoXCIub3ZwLWJvdHRvbS1wYW5lbFwiKSAmJlxyXG4gICAgICAgICAgICAgICAgIUxBJChldmVudC50YXJnZXQpLmNsb3Nlc3QoXCIub3ZwLXNldHRpbmctcGFuZWxcIikpe1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlUGxheVBhdXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIUxBJChldmVudC50YXJnZXQpLmNsb3Nlc3QoXCIub3ZwLXNldHRpbmctcGFuZWxcIikgJiYgIUxBJChldmVudC50YXJnZXQpLmNsb3Nlc3QoXCIub3ZwLXNldHRpbmctYnV0dG9uXCIpICYmIFNldHRpbmdQYW5lbExpc3QubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAvL2NsZWFyIGFsbCBTZXR0aW5nUGFuZWxUZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgXy5lYWNoKFNldHRpbmdQYW5lbExpc3QsIGZ1bmN0aW9uKHNldHRpbmdQYW5lbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ1BhbmVsLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgU2V0dGluZ1BhbmVsTGlzdC5zcGxpY2UoMCwgU2V0dGluZ1BhbmVsTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1vdXNlZW50ZXIgLm92ZW5wbGF5ZXJcIiA6IGZ1bmN0aW9uKGV2ZW50LCAkY3VycmVudCwgdGVtcGxhdGUpe1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFwaS5nZXRTdGF0ZSgpID09PSBTVEFURV9QTEFZSU5HKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRIaWRlKGZhbHNlLCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEhpZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1vdXNlbW92ZSAub3ZlbnBsYXllclwiIDogZnVuY3Rpb24oZXZlbnQsICRjdXJyZW50LCB0ZW1wbGF0ZSl7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYXBpLmdldFN0YXRlKCkgPT09IFNUQVRFX1BMQVlJTkcpIHtcclxuICAgICAgICAgICAgICAgIHNldEhpZGUoZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SGlkZShmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibW91c2VsZWF2ZSAub3ZlbnBsYXllclwiIDogZnVuY3Rpb24oZXZlbnQsICRjdXJyZW50LCB0ZW1wbGF0ZSl7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZihhcGkuZ2V0U3RhdGUoKSA9PT0gU1RBVEVfUExBWUlORyl7XHJcbiAgICAgICAgICAgICAgICBzZXRIaWRlKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgXCJrZXlkb3duIC5vdmVucGxheWVyXCIgOiBmdW5jdGlvbihldmVudCwgJGN1cnJlbnQsIHRlbXBsYXRlKXtcclxuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzMiA6ICAgLy9zYXBjZVxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUGxheVBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM3IDogLy9hcnJvdyBsZWZ0XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWVrKDUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOSA6IC8vYXJyb3cgcmlnaHRcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlZWsoNSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOCA6IC8vYXJyb3cgdXBcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAgOiAvL2Fycm93IHVwXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB2b2x1bWUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImNvbnRleHRtZW51IC5vdmVucGxheWVyXCIgOiBmdW5jdGlvbihldmVudCwgJGN1cnJlbnQsIHRlbXBsYXRlKXtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY3JlYXRlQ29udGV4dFBhbmVsKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPdmVuVGVtcGxhdGUoJGNvbnRhaW5lciwgXCJWaWV3XCIsICRjb250YWluZXIuaWQsIGV2ZW50cywgb25SZW5kZXJlZCwgb25EZXN0cm95ZWQsIHRydWUpLCB7XHJcbiAgICAgICAgZ2V0TWVkaWFFbGVtZW50Q29udGFpbmVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkcGxheWVyUm9vdC5maW5kKFwiLm92cC1tZWRpYS1lbGVtZW50LWNvbnRhaW5lclwiKS5nZXQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldEFwaTogZnVuY3Rpb24gKHBsYXllckluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGFwaSA9IHBsYXllckluc3RhbmNlO1xyXG4gICAgICAgICAgICBoZWxwZXIgPSBIZWxwZXIoJHBsYXllclJvb3QuZmluZChcIi5vdnAtdWlcIiksIHBsYXllckluc3RhbmNlKTtcclxuICAgICAgICAgICAgY29udHJvbHMgPSBDb250cm9scygkcGxheWVyUm9vdC5maW5kKFwiLm92cC11aVwiKSwgcGxheWVySW5zdGFuY2UpO1xyXG5cclxuICAgICAgICAgICAgYXBpLm9uKERFU1RST1ksIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZpZXdUZW1wbGF0ZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYXBpLm9uKFBMQVlFUl9TVEFURSwgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhICYmIGRhdGEubmV3c3RhdGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubmV3c3RhdGUgPT09IFNUQVRFX1BMQVlJTkcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIaWRlKGZhbHNlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SGlkZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlldztcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgaG9obyBvbiAyMDE4LiA3LiAyMC4uXHJcbiAqL1xyXG5cclxuY29uc3QgVmlld1RlbXBsYXRlID0gZnVuY3Rpb24oaWQpe1xyXG4gICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwib3ZlbnBsYXllciBvdnAtd3JhcHBlclwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsPVwiXCIgaWQ9XCInK2lkKydcIj4nICtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwib3ZwLXJhdGlvXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm92cC1wbGF5ZXJcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm92cC1tZWRpYS1lbGVtZW50LWNvbnRhaW5lclwiIGRhdGEtcGFyZW50LWlkPVwiJytpZCsnXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwib3ZwLXVpXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+J1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBWaWV3VGVtcGxhdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=