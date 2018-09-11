/*! OvenPlayerv0.7.4 | (c)2018 AirenSoft Co., Ltd. | MIT license (https://github.com/AirenSoft/OvenPlayerPrivate/blob/master/LICENSE) | Github : https://github.com/AirenSoft/OvenPlayer */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~7afd68cf"],{

/***/ "./src/assets/OvenPlayerFlash.swf":
/*!****************************************!*\
  !*** ./src/assets/OvenPlayerFlash.swf ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "OvenPlayerFlash.swf";

/***/ }),

/***/ "./src/js/api/media/Manager.js":
/*!*************************************!*\
  !*** ./src/js/api/media/Manager.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _browser = __webpack_require__(/*! utils/browser */ "./src/js/utils/browser.js");

var _constants = __webpack_require__(/*! api/constants */ "./src/js/api/constants.js");

var _OvenPlayerFlash = __webpack_require__(/*! ../../../assets/OvenPlayerFlash.swf */ "./src/assets/OvenPlayerFlash.swf");

var _OvenPlayerFlash2 = _interopRequireDefault(_OvenPlayerFlash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Manager = function Manager(container, providerType) {
    var that = {};
    var rootId = container.getAttribute("data-parent-id");
    var mediaElement = "";
    var browserType = (0, _browser.getBrowser)();

    OvenPlayerConsole.log("MediaManager loaded. browserType : " + browserType);
    var createMediaElement = function createMediaElement() {
        if (providerType !== _constants.PROVIDER_RTMP) {
            mediaElement = document.createElement('video');
            mediaElement.setAttribute('disableRemotePlayback', '');
            mediaElement.setAttribute('webkit-playsinline', '');
            mediaElement.setAttribute('playsinline', '');
            container.appendChild(mediaElement);
        } else {
            var movie = void 0,
                flashvars = void 0,
                allowscriptaccess = void 0,
                allowfullscreen = void 0,
                quality = void 0;
            movie = document.createElement('param');
            movie.setAttribute('name', 'movie');
            movie.setAttribute('value', _OvenPlayerFlash2.default);

            flashvars = document.createElement('param');
            flashvars.setAttribute('name', 'flashvars');
            //playerId uses SWF for ExternalInterface.call().
            flashvars.setAttribute('value', 'playerId=' + rootId);

            allowscriptaccess = document.createElement('param');
            allowscriptaccess.setAttribute('name', 'allowscriptaccess');
            allowscriptaccess.setAttribute('value', 'always');

            allowfullscreen = document.createElement('param');
            allowfullscreen.setAttribute('name', 'allowfullscreen');
            allowfullscreen.setAttribute('value', 'true');

            quality = document.createElement('param');
            quality.setAttribute('name', 'quality');
            quality.setAttribute('value', 'height');

            if (browserType !== "ie") {}
            mediaElement = document.createElement('object');
            mediaElement.setAttribute('type', 'application/x-shockwave-flash');
            mediaElement.setAttribute('data', _OvenPlayerFlash2.default);

            mediaElement.setAttribute('id', rootId + "-flash");
            mediaElement.setAttribute('name', rootId + "-flash");
            mediaElement.setAttribute('width', '100%');
            mediaElement.setAttribute('height', '100%');

            mediaElement.appendChild(movie);
            mediaElement.appendChild(flashvars);
            mediaElement.appendChild(allowscriptaccess);
            mediaElement.appendChild(allowfullscreen);
            /*if(browserType !== "ie"){
                mediaElement.appendChild(inner);
            }*/

            container.appendChild(mediaElement);
        }

        return mediaElement;
    };

    that.create = function () {
        OvenPlayerConsole.log("MediaManager createElement()");
        if (mediaElement) {
            that.destroy();
        }
        return createMediaElement();
    };

    that.destroy = function () {
        OvenPlayerConsole.log("MediaManager removeElement()");
        container.removeChild(mediaElement);
        mediaElement = null;
    };

    return that;
}; /**
    * @brief   미디어 엘리먼트를 관리하는 객체. 현재는 하는 일이 많지 않다.
    * @param   {element}   container   dom element
    *
    * */
exports.default = Manager;

/***/ }),

/***/ "./src/js/api/provider/html5/Listener.js":
/*!***********************************************!*\
  !*** ./src/js/api/provider/html5/Listener.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(/*! api/constants */ "./src/js/api/constants.js");

/**
 * @brief   Trigger on various video events.
 * @param   providerName child Provider Name
 * @param   extendedElement extended media object by mse.
 * @param   element elVideo  video
 * @param   Provider provider  html5Provider
 * */

var Listener = function Listener(providerName, extendedElement, elVideo, provider) {
    var lowLevelEvents = {};

    OvenPlayerConsole.log("EventListener loaded.");
    var that = {};
    var between = function between(num, min, max) {
        return Math.max(Math.min(num, max), min);
    };
    var onError = function onError(error) {
        provider.setState(_constants.STATE_ERROR);
        provider.pause();

        //PRIVATE_STATE_ERROR
        provider.trigger(_constants.ERROR, error);
    };

    //Fires when the browser can start playing the audio/video
    lowLevelEvents.canplay = function () {
        provider.setCanSeek(true);
        provider.trigger(_constants.CONTENT_BUFFER_FULL);
        OvenPlayerConsole.log("EventListener : on canplay");
    };
    //Fires when the duration of the audio/video is changed
    lowLevelEvents.durationchange = function () {
        lowLevelEvents.progress();
        OvenPlayerConsole.log("EventListener : on durationchange");
    };
    //Fires when the current playlist is ended
    lowLevelEvents.ended = function () {
        OvenPlayerConsole.log("EventListener : on ended");
        if (provider.getState() != _constants.STATE_IDLE && provider.getState() != _constants.STATE_COMPLETE) {
            provider.trigger(_constants.CONTENT_COMPLETE);
            provider.setState(_constants.STATE_COMPLETE);
        }
    };
    //Fires when the browser has loaded the current frame of the audio/video
    lowLevelEvents.loadeddata = function () {
        //Do nothing Because this causes chaos by loadedmetadata.
        /*
        var metadata = {
            duration: elVideo.duration,
            height: elVideo.videoHeight,
            width: elVideo.videoWidth
        };
        provider.trigger(CONTENT_META, metadata);*/
        OvenPlayerConsole.log("EventListener : on loadeddata");
    };
    //Fires when the browser has loaded meta data for the audio/video
    lowLevelEvents.loadedmetadata = function () {
        //ToDo : You consider hlsjs. But not now because we don't support hlsjs.
        var isLive = elVideo.duration == Infinity ? true : providerName === _constants.PROVIDER_DASH ? extendedElement.isDynamic() : false;
        var type = provider.getCurrentQuality() ? provider.getCurrentQuality().type : "";
        var metadata = {
            duration: isLive ? Infinity : elVideo.duration,
            type: type
        };
        //provider.setLive(isLive);

        OvenPlayerConsole.log("EventListener : on loadedmetadata", metadata);
        provider.trigger(_constants.CONTENT_META, metadata);
    };
    //Fires when the audio/video has been paused
    lowLevelEvents.pause = function () {
        if (provider.getState() === _constants.STATE_COMPLETE || provider.getState() === _constants.STATE_ERROR) {
            return false;
        }
        if (elVideo.ended) {
            return false;
        }
        if (elVideo.error) {
            return false;
        }
        if (elVideo.currentTime === elVideo.duration) {
            return false;
        }
        OvenPlayerConsole.log("EventListener : on pause");
        provider.setState(_constants.STATE_PAUSED);
    };
    //Fires when the audio/video has been started or is no longer paused
    lowLevelEvents.play = function () {
        if (!elVideo.paused && provider.getState() !== _constants.STATE_PLAYING) {
            OvenPlayerConsole.log("EventListener : on play");
            provider.setState(_constants.STATE_LOADING);
        }
    };
    //Fires when the audio/video is playing after having been paused or stopped for buffering
    lowLevelEvents.playing = function () {
        OvenPlayerConsole.log("EventListener : on playing");
        provider.setState(_constants.STATE_PLAYING);
        //provider.trigger(PROVIDER_FIRST_FRAME);
    };
    //Fires when the browser is downloading the audio/video
    lowLevelEvents.progress = function () {
        var timeRanges = elVideo.buffered;
        if (!timeRanges) {
            return false;
        }

        var duration = elVideo.duration,
            position = elVideo.currentTime;
        var buffered = between((timeRanges.length > 0 ? timeRanges.end(timeRanges.length - 1) : 0) / duration, 0, 1);

        OvenPlayerConsole.log("EventListener : on progress", buffered * 100);

        provider.setBuffer(buffered * 100);
        provider.trigger(_constants.CONTENT_BUFFER, {
            bufferPercent: buffered * 100,
            position: position,
            duration: duration
        });
    };
    //Fires when the browser is trying to get media data, but data is not available
    lowLevelEvents.stalled = function () {
        OvenPlayerConsole.log("EventListener : on stall");
    };
    //Fires when the current playback position has changed
    lowLevelEvents.timeupdate = function () {
        var position = elVideo.currentTime;
        var duration = elVideo.duration;
        if (isNaN(duration)) {
            return;
        }

        if (!provider.isSeeking() && !elVideo.paused) {
            provider.setState(_constants.STATE_PLAYING);
        }
        OvenPlayerConsole.log("EventListener : on timeupdate", {
            position: position,
            duration: duration
        });
        if (provider.getState() === _constants.STATE_PLAYING || provider.isSeeking()) {
            provider.trigger(_constants.CONTENT_TIME, {
                position: position,
                duration: duration
            });
        }
    };
    lowLevelEvents.resize = function () {
        OvenPlayerConsole.log("EventListener : on resize");
    };
    lowLevelEvents.seeking = function () {
        provider.setSeeking(true);
        OvenPlayerConsole.log("EventListener : on seeking", elVideo.currentTime);
        provider.trigger(_constants.CONTENT_SEEK, {
            position: elVideo.currentTime
        });
    };
    lowLevelEvents.seeked = function () {
        if (!provider.isSeeking()) {
            return;
        }
        OvenPlayerConsole.log("EventListener : on seeked");
        provider.setSeeking(false);
        provider.trigger(_constants.CONTENT_SEEKED);
    };

    //Fires when the video stops because it needs to buffer the next frame
    lowLevelEvents.waiting = function () {
        OvenPlayerConsole.log("EventListener : on waiting", provider.getState());
        if (provider.isSeeking()) {
            provider.setState(_constants.STATE_LOADING);
        } else if (provider.getState() == _constants.STATE_PLAYING) {
            provider.setState(_constants.STATE_STALLED);
        }
    };

    lowLevelEvents.volumechange = function () {

        OvenPlayerConsole.log("EventListener : on volumechange", Math.round(elVideo.volume * 100));
        provider.trigger(_constants.CONTENT_VOLUME, {
            volume: Math.round(elVideo.volume * 100),
            mute: elVideo.muted
        });
    };

    lowLevelEvents.error = function () {
        var code = elVideo.error && elVideo.error.code || 0;
        var errorCodeGen = {
            0: { code: _constants.PLAYER_UNKNWON_ERROR, reason: "Unknown html5 video error", message: "Unknown html5 video error" },
            1: { code: _constants.PLAYER_UNKNWON_OPERATION_ERROR, reason: "Unknown operation aborted", message: "Unknown operation aborted" },
            2: { code: _constants.PLAYER_UNKNWON_NEWWORK_ERROR, reason: "Unknown network error", message: "Unknown network error" },
            3: { code: _constants.PLAYER_UNKNWON_DECODE_ERROR, reason: "Unknown decode error", message: "Unknown decode error" },
            4: { code: _constants.PLAYER_FILE_ERROR, reason: "File could not be played", message: "File could not be played" }
        }[code] || 0;
        errorCodeGen.error = elVideo.error;

        OvenPlayerConsole.log("EventListener : on error", errorCodeGen);
        onError(errorCodeGen);
    };

    Object.keys(lowLevelEvents).forEach(function (eventName) {
        elVideo.removeEventListener(eventName, lowLevelEvents[eventName]);
        elVideo.addEventListener(eventName, lowLevelEvents[eventName]);
    });

    that.destroy = function () {
        OvenPlayerConsole.log("EventListener : destroy()");

        Object.keys(lowLevelEvents).forEach(function (eventName) {
            elVideo.removeEventListener(eventName, lowLevelEvents[eventName]);
        });
    };
    return that;
};

exports.default = Listener;

/***/ }),

/***/ "./src/js/api/provider/html5/Provider.js":
/*!***********************************************!*\
  !*** ./src/js/api/provider/html5/Provider.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _EventEmitter = __webpack_require__(/*! api/EventEmitter */ "./src/js/api/EventEmitter.js");

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _Listener = __webpack_require__(/*! api/provider/html5/Listener */ "./src/js/api/provider/html5/Listener.js");

var _Listener2 = _interopRequireDefault(_Listener);

var _underscore = __webpack_require__(/*! utils/underscore.js */ "./src/js/utils/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

var _promise = __webpack_require__(/*! api/shims/promise */ "./src/js/api/shims/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _constants = __webpack_require__(/*! api/constants */ "./src/js/api/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extractVideoElement = function extractVideoElement(providerName, extendedElement) {
    if (_underscore2.default.isElement(extendedElement)) {
        return extendedElement;
    }
    if (providerName === _constants.PROVIDER_DASH) {
        return extendedElement.getVideoElement();
    } else if (providerName === _constants.PROVIDER_HLS) {
        return extendedElement.media;
    }
    return null;
};

/**
 * @brief   Core For Html5 Video.
 * @param   providerName provider name
 * @param   extendedElement extended media object by mse. or video element.
 * @param   playerConfig  player config
 * @param   onLoad on load handler
 * */
/**
 * Created by hoho on 2018. 6. 27..
 */
var Provider = function Provider(providerName, extendedElement, playerConfig, onBeforeLoad) {
    OvenPlayerConsole.log("CORE loaded. ");

    var that = {};
    (0, _EventEmitter2.default)(that);

    var elVideo = extractVideoElement(providerName, extendedElement);
    var listener = (0, _Listener2.default)(providerName, extendedElement, elVideo, that);
    var canSeek = false;
    var seeking = false;
    var state = _constants.STATE_IDLE;
    var buffer = 0;
    var currentQuality = -1;
    var sources = [];
    //let isLive = false;

    var posterImage = playerConfig.getConfig().image || "";
    elVideo.playbackRate = elVideo.defaultPlaybackRate = playerConfig.getDefaultPlaybackRate();

    var pickCurrentQuality = function pickCurrentQuality(sources) {
        var quality = Math.max(0, currentQuality);
        var label = "";
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

    var _load = function _load(lastPlayPosition) {
        var source = sources[currentQuality];
        if (onBeforeLoad) {
            onBeforeLoad(source, lastPlayPosition);
        } else {
            OvenPlayerConsole.log("source loaded : ", source, "lastPlayPosition : " + lastPlayPosition);
            var previousSource = elVideo.src;
            var sourceElement = document.createElement('source');

            sourceElement.src = source.file;
            var sourceChanged = sourceElement.src !== previousSource;
            if (sourceChanged) {
                elVideo.src = sources[currentQuality].file;
                // Do not call load if src was not set. load() will cancel any active play promise.
                if (previousSource) {
                    elVideo.load();
                }
            } else if (lastPlayPosition == 0 && elVideo.currentTime > 0) {
                that.seek(lastPlayPosition);
            }
            if (lastPlayPosition > 0) {
                that.seek(lastPlayPosition);
                that.play();
            }
            that.trigger(_constants.CONTENT_LEVELS, {
                currentQuality: currentQuality
            });

            if (posterImage) {
                elVideo.poster = posterImage;
            }
        }
    };

    that.getName = function () {
        return providerName;
    };
    that.canSeek = function () {
        return canSeek;
    };
    that.setCanSeek = function (canSeek_) {
        canSeek = canSeek_;
    };
    that.isSeeking = function () {
        return seeking;
    };
    that.setSeeking = function (seeking_) {
        seeking = seeking_;
    };

    that.setState = function (newState) {
        if (state != newState) {
            var prevState = state;
            switch (newState) {
                case _constants.STATE_COMPLETE:
                    that.trigger(_constants.PLAYER_COMPLETE);
                    break;
                case _constants.STATE_PAUSED:
                    that.trigger(_constants.PLAYER_PAUSE, {
                        prevState: state
                    });
                    break;
                case _constants.STATE_PLAYING:
                    that.trigger(_constants.PLAYER_PLAY, {
                        prevState: state
                    });
                    break;
            }
            state = newState;
            that.trigger(_constants.PLAYER_STATE, {
                prevstate: prevState,
                newstate: state
            });
        }
    };
    that.getState = function () {
        return state;
    };
    that.setBuffer = function (newBuffer) {
        buffer = newBuffer;
    };
    that.getBuffer = function () {
        return buffer;
    };
    that.getDuration = function () {
        //ToDo : You consider hlsjs. But not now because we don't support hlsjs.
        var isLive = elVideo.duration == Infinity ? true : providerName === _constants.PROVIDER_DASH ? extendedElement.isDynamic() : false;
        return isLive ? Infinity : elVideo.duration;
    };
    that.getPosition = function () {
        return elVideo.currentTime;
    };
    that.setVolume = function (volume) {
        elVideo.volume = volume / 100;
    };
    that.getVolume = function () {
        return elVideo.volume * 100;
    };
    that.setMute = function (state) {

        if (typeof state === 'undefined') {

            elVideo.muted = !elVideo.muted;

            that.trigger(_constants.CONTENT_MUTE, {
                mute: elVideo.muted
            });
        } else {

            elVideo.muted = state;

            that.trigger(_constants.CONTENT_MUTE, {
                mute: elVideo.muted
            });
        }
        return elVideo.muted;
    };
    that.getMute = function () {
        return elVideo.muted;
    };

    that.preload = function (sources_, lastPlayPosition) {
        sources = sources_;
        currentQuality = pickCurrentQuality(sources);
        _load(lastPlayPosition || 0);

        return new _promise2.default(function (resolve, reject) {
            resolve();
        });
    };
    that.load = function (sources_) {
        sources = sources_;
        currentQuality = pickCurrentQuality(sources);
        _load(sources_.starttime || 0);
    };

    that.play = function () {
        if (that.getState() !== _constants.STATE_PLAYING) {
            elVideo.play();
        }
    };
    that.pause = function () {
        if (that.getState() == _constants.STATE_PLAYING) {
            elVideo.pause();
        }
    };
    that.seek = function (position) {
        elVideo.currentTime = position;
    };
    that.setPlaybackRate = function (playbackRate) {
        that.trigger(_constants.PLAYBACK_RATE_CHANGED, { playbackRate: playbackRate });
        return elVideo.playbackRate = elVideo.defaultPlaybackRate = playbackRate;
    };
    that.getPlaybackRate = function () {
        return elVideo.playbackRate;
    };
    that.getQualityLevels = function () {
        var qualityLevels = sources.map(function (source, index) {
            return {
                file: source.file,
                type: source.type,
                label: source.label,
                index: index
            };
        });
        return qualityLevels;
    };
    that.getCurrentQuality = function () {
        var source = sources[currentQuality];
        return {
            file: source.file,
            type: source.type,
            label: source.label,
            index: currentQuality
        };
    };
    that.setCurrentQuality = function (qualityIndex, needProviderChange) {
        if (currentQuality == qualityIndex) {
            return false;
        }

        if (qualityIndex > -1) {
            if (sources && sources.length > qualityIndex) {
                //that.pause();
                that.setState(_constants.STATE_IDLE);
                OvenPlayerConsole.log("source changed : " + qualityIndex);
                currentQuality = qualityIndex;

                that.trigger(_constants.CONTENT_LEVEL_CHANGED, {
                    currentQuality: qualityIndex
                });

                playerConfig.setQualityLabel(sources[qualityIndex].label);
                if (needProviderChange) {

                    _load(elVideo.currentTime || 0);
                }
                return currentQuality;
            }
        }
    };

    that.stop = function () {
        OvenPlayerConsole.log("CORE : stop() ");
        elVideo.removeAttribute('preload');
        elVideo.removeAttribute('src');
        while (elVideo.firstChild) {
            elVideo.removeChild(elVideo.firstChild);
        }
        that.pause();
        that.setState(_constants.STATE_IDLE);
    };

    that.destroy = function () {
        that.stop();
        listener.destroy();
        //elVideo.remove();
        that.off();
        OvenPlayerConsole.log("CORE : destroy() player stop, listener, event destroied");
    };

    //XXX : I hope using es6 classes. but I think to occur problem from Old IE. Then I choice function inherit. Finally using super function is so difficult.
    // use : let super_destroy  = that.super('destroy'); ... super_destroy();
    that.super = function (name) {
        var method = that[name];
        return function () {
            return method.apply(that, arguments);
        };
    };
    return that;
};

exports.default = Provider;

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL092ZW5QbGF5ZXJGbGFzaC5zd2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwaS9tZWRpYS9NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcGkvcHJvdmlkZXIvaHRtbDUvTGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwaS9wcm92aWRlci9odG1sNS9Qcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvYnJvd3Nlci5qcyJdLCJuYW1lcyI6WyJNYW5hZ2VyIiwiY29udGFpbmVyIiwicHJvdmlkZXJUeXBlIiwidGhhdCIsInJvb3RJZCIsImdldEF0dHJpYnV0ZSIsIm1lZGlhRWxlbWVudCIsImJyb3dzZXJUeXBlIiwiT3ZlblBsYXllckNvbnNvbGUiLCJsb2ciLCJjcmVhdGVNZWRpYUVsZW1lbnQiLCJQUk9WSURFUl9SVE1QIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJtb3ZpZSIsImZsYXNodmFycyIsImFsbG93c2NyaXB0YWNjZXNzIiwiYWxsb3dmdWxsc2NyZWVuIiwicXVhbGl0eSIsIlNXRnBhdGgiLCJjcmVhdGUiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJMaXN0ZW5lciIsInByb3ZpZGVyTmFtZSIsImV4dGVuZGVkRWxlbWVudCIsImVsVmlkZW8iLCJwcm92aWRlciIsImxvd0xldmVsRXZlbnRzIiwiYmV0d2VlbiIsIm51bSIsIm1pbiIsIm1heCIsIk1hdGgiLCJvbkVycm9yIiwiZXJyb3IiLCJzZXRTdGF0ZSIsIlNUQVRFX0VSUk9SIiwicGF1c2UiLCJ0cmlnZ2VyIiwiRVJST1IiLCJjYW5wbGF5Iiwic2V0Q2FuU2VlayIsIkNPTlRFTlRfQlVGRkVSX0ZVTEwiLCJkdXJhdGlvbmNoYW5nZSIsInByb2dyZXNzIiwiZW5kZWQiLCJnZXRTdGF0ZSIsIlNUQVRFX0lETEUiLCJTVEFURV9DT01QTEVURSIsIkNPTlRFTlRfQ09NUExFVEUiLCJsb2FkZWRkYXRhIiwibG9hZGVkbWV0YWRhdGEiLCJpc0xpdmUiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiUFJPVklERVJfREFTSCIsImlzRHluYW1pYyIsInR5cGUiLCJnZXRDdXJyZW50UXVhbGl0eSIsIm1ldGFkYXRhIiwiQ09OVEVOVF9NRVRBIiwiY3VycmVudFRpbWUiLCJTVEFURV9QQVVTRUQiLCJwbGF5IiwicGF1c2VkIiwiU1RBVEVfUExBWUlORyIsIlNUQVRFX0xPQURJTkciLCJwbGF5aW5nIiwidGltZVJhbmdlcyIsImJ1ZmZlcmVkIiwicG9zaXRpb24iLCJsZW5ndGgiLCJlbmQiLCJzZXRCdWZmZXIiLCJDT05URU5UX0JVRkZFUiIsImJ1ZmZlclBlcmNlbnQiLCJzdGFsbGVkIiwidGltZXVwZGF0ZSIsImlzTmFOIiwiaXNTZWVraW5nIiwiQ09OVEVOVF9USU1FIiwicmVzaXplIiwic2Vla2luZyIsInNldFNlZWtpbmciLCJDT05URU5UX1NFRUsiLCJzZWVrZWQiLCJDT05URU5UX1NFRUtFRCIsIndhaXRpbmciLCJTVEFURV9TVEFMTEVEIiwidm9sdW1lY2hhbmdlIiwicm91bmQiLCJ2b2x1bWUiLCJDT05URU5UX1ZPTFVNRSIsIm11dGUiLCJtdXRlZCIsImNvZGUiLCJlcnJvckNvZGVHZW4iLCJQTEFZRVJfVU5LTldPTl9FUlJPUiIsInJlYXNvbiIsIm1lc3NhZ2UiLCJQTEFZRVJfVU5LTldPTl9PUEVSQVRJT05fRVJST1IiLCJQTEFZRVJfVU5LTldPTl9ORVdXT1JLX0VSUk9SIiwiUExBWUVSX1VOS05XT05fREVDT0RFX0VSUk9SIiwiUExBWUVSX0ZJTEVfRVJST1IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudE5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXh0cmFjdFZpZGVvRWxlbWVudCIsIl8iLCJpc0VsZW1lbnQiLCJnZXRWaWRlb0VsZW1lbnQiLCJQUk9WSURFUl9ITFMiLCJtZWRpYSIsIlByb3ZpZGVyIiwicGxheWVyQ29uZmlnIiwib25CZWZvcmVMb2FkIiwibGlzdGVuZXIiLCJjYW5TZWVrIiwic3RhdGUiLCJidWZmZXIiLCJjdXJyZW50UXVhbGl0eSIsInNvdXJjZXMiLCJwb3N0ZXJJbWFnZSIsImdldENvbmZpZyIsImltYWdlIiwicGxheWJhY2tSYXRlIiwiZGVmYXVsdFBsYXliYWNrUmF0ZSIsImdldERlZmF1bHRQbGF5YmFja1JhdGUiLCJwaWNrQ3VycmVudFF1YWxpdHkiLCJsYWJlbCIsImkiLCJkZWZhdWx0IiwiZ2V0UXVhbGl0eUxhYmVsIiwiX2xvYWQiLCJsYXN0UGxheVBvc2l0aW9uIiwic291cmNlIiwicHJldmlvdXNTb3VyY2UiLCJzcmMiLCJzb3VyY2VFbGVtZW50IiwiZmlsZSIsInNvdXJjZUNoYW5nZWQiLCJsb2FkIiwic2VlayIsIkNPTlRFTlRfTEVWRUxTIiwicG9zdGVyIiwiZ2V0TmFtZSIsImNhblNlZWtfIiwic2Vla2luZ18iLCJuZXdTdGF0ZSIsInByZXZTdGF0ZSIsIlBMQVlFUl9DT01QTEVURSIsIlBMQVlFUl9QQVVTRSIsIlBMQVlFUl9QTEFZIiwiUExBWUVSX1NUQVRFIiwicHJldnN0YXRlIiwibmV3c3RhdGUiLCJuZXdCdWZmZXIiLCJnZXRCdWZmZXIiLCJnZXREdXJhdGlvbiIsImdldFBvc2l0aW9uIiwic2V0Vm9sdW1lIiwiZ2V0Vm9sdW1lIiwic2V0TXV0ZSIsIkNPTlRFTlRfTVVURSIsImdldE11dGUiLCJwcmVsb2FkIiwic291cmNlc18iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInN0YXJ0dGltZSIsInNldFBsYXliYWNrUmF0ZSIsIlBMQVlCQUNLX1JBVEVfQ0hBTkdFRCIsImdldFBsYXliYWNrUmF0ZSIsImdldFF1YWxpdHlMZXZlbHMiLCJxdWFsaXR5TGV2ZWxzIiwibWFwIiwiaW5kZXgiLCJzZXRDdXJyZW50UXVhbGl0eSIsInF1YWxpdHlJbmRleCIsIm5lZWRQcm92aWRlckNoYW5nZSIsIkNPTlRFTlRfTEVWRUxfQ0hBTkdFRCIsInNldFF1YWxpdHlMYWJlbCIsInN0b3AiLCJyZW1vdmVBdHRyaWJ1dGUiLCJmaXJzdENoaWxkIiwib2ZmIiwic3VwZXIiLCJuYW1lIiwibWV0aG9kIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJnZXRCcm93c2VyIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaW5kZXhPZiIsIm1zaWUiLCJpZSIsInVuZGVmIiwidiIsImRpdiIsImFsbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0tBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVUsQ0FBU0MsU0FBVCxFQUFvQkMsWUFBcEIsRUFBaUM7QUFDN0MsUUFBTUMsT0FBTyxFQUFiO0FBQ0EsUUFBSUMsU0FBU0gsVUFBVUksWUFBVixDQUF1QixnQkFBdkIsQ0FBYjtBQUNBLFFBQUlDLGVBQWUsRUFBbkI7QUFDQSxRQUFJQyxjQUFjLDBCQUFsQjs7QUFFQUMsc0JBQWtCQyxHQUFsQixDQUFzQix3Q0FBdUNGLFdBQTdEO0FBQ0EsUUFBTUcscUJBQXFCLFNBQXJCQSxrQkFBcUIsR0FBVTtBQUNqQyxZQUFHUixpQkFBaUJTLHdCQUFwQixFQUFrQztBQUM5QkwsMkJBQWVNLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZjtBQUNBUCx5QkFBYVEsWUFBYixDQUEwQix1QkFBMUIsRUFBbUQsRUFBbkQ7QUFDQVIseUJBQWFRLFlBQWIsQ0FBMEIsb0JBQTFCLEVBQWdELEVBQWhEO0FBQ0FSLHlCQUFhUSxZQUFiLENBQTBCLGFBQTFCLEVBQXlDLEVBQXpDO0FBQ0FiLHNCQUFVYyxXQUFWLENBQXNCVCxZQUF0QjtBQUVILFNBUEQsTUFPSztBQUNELGdCQUFJVSxjQUFKO0FBQUEsZ0JBQVdDLGtCQUFYO0FBQUEsZ0JBQXNCQywwQkFBdEI7QUFBQSxnQkFBeUNDLHdCQUF6QztBQUFBLGdCQUEwREMsZ0JBQTFEO0FBQ0FKLG9C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LHVCQUEzQyxFQUNJRSxJQUFJLENBQUosQ0FGUjs7QUFLQSxtQkFBT0YsSUFBSSxDQUFKLEdBQVFBLENBQVIsR0FBWUQsS0FBbkI7QUFFSCxTQWRTLEVBQVY7QUFlQSxZQUFHRCxLQUFLLENBQVIsRUFBVTtBQUNOLG1CQUFPLE9BQVA7QUFDSCxTQUZELE1BRUs7QUFDRCxtQkFBTyxVQUFQO0FBQ0g7QUFFSixLQWxDSyxNQWtDRDtBQUNELGVBQU8sU0FBUDtBQUNIO0FBRUosQ0EvQ00sQyIsImZpbGUiOiJvdmVucGxheWVyLnByb3ZpZGVyLkRhc2hQcm92aWRlcn5vdmVucGxheWVyLnByb3ZpZGVyLkhsc1Byb3ZpZGVyfm92ZW5wbGF5ZXIucHJvdmlkZXIuSHRtbDV+b3ZlbnBsYXllfjdhZmQ2OGNmLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiT3ZlblBsYXllckZsYXNoLnN3ZlwiOyIsIi8qKlxyXG4gKiBAYnJpZWYgICDrr7jrlJTslrQg7JeY66as66i87Yq466W8IOq0gOumrO2VmOuKlCDqsJ3ssrQuIO2YhOyerOuKlCDtlZjripQg7J287J20IOunjuyngCDslYrri6QuXHJcbiAqIEBwYXJhbSAgIHtlbGVtZW50fSAgIGNvbnRhaW5lciAgIGRvbSBlbGVtZW50XHJcbiAqXHJcbiAqICovXHJcbmltcG9ydCB7Z2V0QnJvd3Nlcn0gZnJvbSBcInV0aWxzL2Jyb3dzZXJcIjtcclxuaW1wb3J0IHtQUk9WSURFUl9SVE1QfSBmcm9tIFwiYXBpL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgU1dGcGF0aCBmcm9tICcuLi8uLi8uLi9hc3NldHMvT3ZlblBsYXllckZsYXNoLnN3Zic7XHJcblxyXG5jb25zdCBNYW5hZ2VyID0gZnVuY3Rpb24oY29udGFpbmVyLCBwcm92aWRlclR5cGUpe1xyXG4gICAgY29uc3QgdGhhdCA9IHt9O1xyXG4gICAgbGV0IHJvb3RJZCA9IGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhcmVudC1pZFwiKTtcclxuICAgIGxldCBtZWRpYUVsZW1lbnQgPSBcIlwiO1xyXG4gICAgbGV0IGJyb3dzZXJUeXBlID0gZ2V0QnJvd3NlcigpO1xyXG5cclxuICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIk1lZGlhTWFuYWdlciBsb2FkZWQuIGJyb3dzZXJUeXBlIDogXCIrIGJyb3dzZXJUeXBlKTtcclxuICAgIGNvbnN0IGNyZWF0ZU1lZGlhRWxlbWVudCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYocHJvdmlkZXJUeXBlICE9PSBQUk9WSURFUl9SVE1QKXtcclxuICAgICAgICAgICAgbWVkaWFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcclxuICAgICAgICAgICAgbWVkaWFFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZVJlbW90ZVBsYXliYWNrJywgJycpO1xyXG4gICAgICAgICAgICBtZWRpYUVsZW1lbnQuc2V0QXR0cmlidXRlKCd3ZWJraXQtcGxheXNpbmxpbmUnLCAnJyk7XHJcbiAgICAgICAgICAgIG1lZGlhRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3BsYXlzaW5saW5lJywgJycpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVkaWFFbGVtZW50KTtcclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBtb3ZpZSwgZmxhc2h2YXJzLCBhbGxvd3NjcmlwdGFjY2VzcywgYWxsb3dmdWxsc2NyZWVuLCBxdWFsaXR5O1xyXG4gICAgICAgICAgICBtb3ZpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhcmFtJyk7XHJcbiAgICAgICAgICAgIG1vdmllLnNldEF0dHJpYnV0ZSgnbmFtZScsICdtb3ZpZScpO1xyXG4gICAgICAgICAgICBtb3ZpZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgU1dGcGF0aCk7XHJcblxyXG4gICAgICAgICAgICBmbGFzaHZhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwYXJhbScpO1xyXG4gICAgICAgICAgICBmbGFzaHZhcnMuc2V0QXR0cmlidXRlKCduYW1lJywgJ2ZsYXNodmFycycpO1xyXG4gICAgICAgICAgICAvL3BsYXllcklkIHVzZXMgU1dGIGZvciBFeHRlcm5hbEludGVyZmFjZS5jYWxsKCkuXHJcbiAgICAgICAgICAgIGZsYXNodmFycy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3BsYXllcklkPScrcm9vdElkKTtcclxuXHJcbiAgICAgICAgICAgIGFsbG93c2NyaXB0YWNjZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGFyYW0nKTtcclxuICAgICAgICAgICAgYWxsb3dzY3JpcHRhY2Nlc3Muc2V0QXR0cmlidXRlKCduYW1lJywgJ2FsbG93c2NyaXB0YWNjZXNzJyk7XHJcbiAgICAgICAgICAgIGFsbG93c2NyaXB0YWNjZXNzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnYWx3YXlzJyk7XHJcblxyXG4gICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwYXJhbScpO1xyXG4gICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW4uc2V0QXR0cmlidXRlKCduYW1lJywgJ2FsbG93ZnVsbHNjcmVlbicpO1xyXG4gICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICd0cnVlJyk7XHJcblxyXG4gICAgICAgICAgICBxdWFsaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGFyYW0nKTtcclxuICAgICAgICAgICAgcXVhbGl0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncXVhbGl0eScpO1xyXG4gICAgICAgICAgICBxdWFsaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGVpZ2h0Jyk7XHJcblxyXG4gICAgICAgICAgICBpZihicm93c2VyVHlwZSAhPT0gXCJpZVwiKXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWVkaWFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0Jyk7XHJcbiAgICAgICAgICAgIG1lZGlhRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnKTtcclxuICAgICAgICAgICAgbWVkaWFFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YScsIFNXRnBhdGgpO1xyXG5cclxuICAgICAgICAgICAgbWVkaWFFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCByb290SWQrXCItZmxhc2hcIik7XHJcbiAgICAgICAgICAgIG1lZGlhRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCByb290SWQrXCItZmxhc2hcIik7XHJcbiAgICAgICAgICAgIG1lZGlhRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzEwMCUnKTtcclxuICAgICAgICAgICAgbWVkaWFFbGVtZW50LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzEwMCUnKTtcclxuXHJcbiAgICAgICAgICAgIG1lZGlhRWxlbWVudC5hcHBlbmRDaGlsZChtb3ZpZSk7XHJcbiAgICAgICAgICAgIG1lZGlhRWxlbWVudC5hcHBlbmRDaGlsZChmbGFzaHZhcnMpO1xyXG4gICAgICAgICAgICBtZWRpYUVsZW1lbnQuYXBwZW5kQ2hpbGQoYWxsb3dzY3JpcHRhY2Nlc3MpO1xyXG4gICAgICAgICAgICBtZWRpYUVsZW1lbnQuYXBwZW5kQ2hpbGQoYWxsb3dmdWxsc2NyZWVuKTtcclxuICAgICAgICAgICAgLyppZihicm93c2VyVHlwZSAhPT0gXCJpZVwiKXtcclxuICAgICAgICAgICAgICAgIG1lZGlhRWxlbWVudC5hcHBlbmRDaGlsZChpbm5lcik7XHJcbiAgICAgICAgICAgIH0qL1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lZGlhRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWVkaWFFbGVtZW50O1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGF0LmNyZWF0ZSA9ICgpID0+e1xyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIk1lZGlhTWFuYWdlciBjcmVhdGVFbGVtZW50KClcIik7XHJcbiAgICAgICAgaWYobWVkaWFFbGVtZW50KXtcclxuICAgICAgICAgICAgdGhhdC5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjcmVhdGVNZWRpYUVsZW1lbnQoKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhhdC5kZXN0cm95ID0gKCkgPT57XHJcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiTWVkaWFNYW5hZ2VyIHJlbW92ZUVsZW1lbnQoKVwiKTtcclxuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQobWVkaWFFbGVtZW50KTtcclxuICAgICAgICBtZWRpYUVsZW1lbnQgPSBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhhdDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXI7XHJcbiIsImltcG9ydCB7XHJcbiAgICBFUlJPUixcclxuICAgIFNUQVRFX0lETEUsXHJcbiAgICBTVEFURV9QTEFZSU5HLFxyXG4gICAgU1RBVEVfU1RBTExFRCxcclxuICAgIFNUQVRFX0xPQURJTkcsXHJcbiAgICBTVEFURV9DT01QTEVURSxcclxuICAgIFNUQVRFX1BBVVNFRCxcclxuICAgIFNUQVRFX0VSUk9SLFxyXG4gICAgQ09OVEVOVF9DT01QTEVURSxcclxuICAgIENPTlRFTlRfU0VFSyxcclxuICAgIENPTlRFTlRfQlVGRkVSX0ZVTEwsXHJcbiAgICBDT05URU5UX1NFRUtFRCxcclxuICAgIENPTlRFTlRfQlVGRkVSLFxyXG4gICAgQ09OVEVOVF9USU1FLFxyXG4gICAgQ09OVEVOVF9WT0xVTUUsXHJcbiAgICBDT05URU5UX01FVEEsXHJcbiAgICBQTEFZRVJfVU5LTldPTl9FUlJPUixcclxuICAgIFBMQVlFUl9VTktOV09OX09QRVJBVElPTl9FUlJPUixcclxuICAgIFBMQVlFUl9VTktOV09OX05FV1dPUktfRVJST1IsXHJcbiAgICBQTEFZRVJfVU5LTldPTl9ERUNPREVfRVJST1IsXHJcbiAgICBQTEFZRVJfRklMRV9FUlJPUixcclxuICAgIFBST1ZJREVSX0hUTUw1LFxyXG4gICAgUFJPVklERVJfV0VCUlRDLFxyXG4gICAgUFJPVklERVJfREFTSCxcclxuICAgIFBST1ZJREVSX0hMU1xyXG59IGZyb20gXCJhcGkvY29uc3RhbnRzXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBicmllZiAgIFRyaWdnZXIgb24gdmFyaW91cyB2aWRlbyBldmVudHMuXHJcbiAqIEBwYXJhbSAgIHByb3ZpZGVyTmFtZSBjaGlsZCBQcm92aWRlciBOYW1lXHJcbiAqIEBwYXJhbSAgIGV4dGVuZGVkRWxlbWVudCBleHRlbmRlZCBtZWRpYSBvYmplY3QgYnkgbXNlLlxyXG4gKiBAcGFyYW0gICBlbGVtZW50IGVsVmlkZW8gIHZpZGVvXHJcbiAqIEBwYXJhbSAgIFByb3ZpZGVyIHByb3ZpZGVyICBodG1sNVByb3ZpZGVyXHJcbiAqICovXHJcblxyXG5jb25zdCBMaXN0ZW5lciA9IGZ1bmN0aW9uKHByb3ZpZGVyTmFtZSwgZXh0ZW5kZWRFbGVtZW50LCBlbFZpZGVvLCBwcm92aWRlcil7XHJcbiAgICBjb25zdCBsb3dMZXZlbEV2ZW50cyA9IHt9O1xyXG5cclxuICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkV2ZW50TGlzdGVuZXIgbG9hZGVkLlwiKTtcclxuICAgIGNvbnN0IHRoYXQgPSB7fTtcclxuICAgIGNvbnN0IGJldHdlZW4gPSBmdW5jdGlvbiAobnVtLCBtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihudW0sIG1heCksIG1pbik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkVycm9yID0gZnVuY3Rpb24oZXJyb3Ipe1xyXG4gICAgICAgIHByb3ZpZGVyLnNldFN0YXRlKFNUQVRFX0VSUk9SKTtcclxuICAgICAgICBwcm92aWRlci5wYXVzZSgpO1xyXG5cclxuICAgICAgICAvL1BSSVZBVEVfU1RBVEVfRVJST1JcclxuICAgICAgICBwcm92aWRlci50cmlnZ2VyKEVSUk9SLCBlcnJvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vRmlyZXMgd2hlbiB0aGUgYnJvd3NlciBjYW4gc3RhcnQgcGxheWluZyB0aGUgYXVkaW8vdmlkZW9cclxuICAgIGxvd0xldmVsRXZlbnRzLmNhbnBsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvdmlkZXIuc2V0Q2FuU2Vlayh0cnVlKTtcclxuICAgICAgICBwcm92aWRlci50cmlnZ2VyKENPTlRFTlRfQlVGRkVSX0ZVTEwpO1xyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkV2ZW50TGlzdGVuZXIgOiBvbiBjYW5wbGF5XCIpO1xyXG4gICAgfTtcclxuICAgIC8vRmlyZXMgd2hlbiB0aGUgZHVyYXRpb24gb2YgdGhlIGF1ZGlvL3ZpZGVvIGlzIGNoYW5nZWRcclxuICAgIGxvd0xldmVsRXZlbnRzLmR1cmF0aW9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGxvd0xldmVsRXZlbnRzLnByb2dyZXNzKCk7XHJcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiRXZlbnRMaXN0ZW5lciA6IG9uIGR1cmF0aW9uY2hhbmdlXCIpO1xyXG4gICAgfTtcclxuICAgIC8vRmlyZXMgd2hlbiB0aGUgY3VycmVudCBwbGF5bGlzdCBpcyBlbmRlZFxyXG4gICAgbG93TGV2ZWxFdmVudHMuZW5kZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiRXZlbnRMaXN0ZW5lciA6IG9uIGVuZGVkXCIpO1xyXG4gICAgICAgIGlmKHByb3ZpZGVyLmdldFN0YXRlKCkgIT0gU1RBVEVfSURMRSAmJiBwcm92aWRlci5nZXRTdGF0ZSgpICE9IFNUQVRFX0NPTVBMRVRFKXtcclxuICAgICAgICAgICAgcHJvdmlkZXIudHJpZ2dlcihDT05URU5UX0NPTVBMRVRFKTtcclxuICAgICAgICAgICAgcHJvdmlkZXIuc2V0U3RhdGUoU1RBVEVfQ09NUExFVEUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvL0ZpcmVzIHdoZW4gdGhlIGJyb3dzZXIgaGFzIGxvYWRlZCB0aGUgY3VycmVudCBmcmFtZSBvZiB0aGUgYXVkaW8vdmlkZW9cclxuICAgIGxvd0xldmVsRXZlbnRzLmxvYWRlZGRhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9EbyBub3RoaW5nIEJlY2F1c2UgdGhpcyBjYXVzZXMgY2hhb3MgYnkgbG9hZGVkbWV0YWRhdGEuXHJcbiAgICAgICAgLypcclxuICAgICAgICB2YXIgbWV0YWRhdGEgPSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiBlbFZpZGVvLmR1cmF0aW9uLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGVsVmlkZW8udmlkZW9IZWlnaHQsXHJcbiAgICAgICAgICAgIHdpZHRoOiBlbFZpZGVvLnZpZGVvV2lkdGhcclxuICAgICAgICB9O1xyXG4gICAgICAgIHByb3ZpZGVyLnRyaWdnZXIoQ09OVEVOVF9NRVRBLCBtZXRhZGF0YSk7Ki9cclxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJFdmVudExpc3RlbmVyIDogb24gbG9hZGVkZGF0YVwiKTtcclxuICAgIH07XHJcbiAgICAvL0ZpcmVzIHdoZW4gdGhlIGJyb3dzZXIgaGFzIGxvYWRlZCBtZXRhIGRhdGEgZm9yIHRoZSBhdWRpby92aWRlb1xyXG4gICAgbG93TGV2ZWxFdmVudHMubG9hZGVkbWV0YWRhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9Ub0RvIDogWW91IGNvbnNpZGVyIGhsc2pzLiBCdXQgbm90IG5vdyBiZWNhdXNlIHdlIGRvbid0IHN1cHBvcnQgaGxzanMuXHJcbiAgICAgICAgbGV0IGlzTGl2ZSA9IChlbFZpZGVvLmR1cmF0aW9uID09IEluZmluaXR5PyB0cnVlIDogKHByb3ZpZGVyTmFtZSA9PT0gUFJPVklERVJfREFTSD8gZXh0ZW5kZWRFbGVtZW50LmlzRHluYW1pYygpIDogZmFsc2UpKTtcclxuICAgICAgICBsZXQgdHlwZSA9IHByb3ZpZGVyLmdldEN1cnJlbnRRdWFsaXR5KCkgPyBwcm92aWRlci5nZXRDdXJyZW50UXVhbGl0eSgpLnR5cGUgOiBcIlwiO1xyXG4gICAgICAgIHZhciBtZXRhZGF0YSA9IHtcclxuICAgICAgICAgICAgZHVyYXRpb246IGlzTGl2ZSA/ICBJbmZpbml0eSA6IGVsVmlkZW8uZHVyYXRpb24sXHJcbiAgICAgICAgICAgIHR5cGUgOnR5cGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vcHJvdmlkZXIuc2V0TGl2ZShpc0xpdmUpO1xyXG5cclxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJFdmVudExpc3RlbmVyIDogb24gbG9hZGVkbWV0YWRhdGFcIiwgbWV0YWRhdGEpO1xyXG4gICAgICAgIHByb3ZpZGVyLnRyaWdnZXIoQ09OVEVOVF9NRVRBLCBtZXRhZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgLy9GaXJlcyB3aGVuIHRoZSBhdWRpby92aWRlbyBoYXMgYmVlbiBwYXVzZWRcclxuICAgIGxvd0xldmVsRXZlbnRzLnBhdXNlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHByb3ZpZGVyLmdldFN0YXRlKCkgPT09IFNUQVRFX0NPTVBMRVRFIHx8cHJvdmlkZXIuZ2V0U3RhdGUoKSA9PT0gU1RBVEVfRVJST1Ipe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGVsVmlkZW8uZW5kZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGVsVmlkZW8uZXJyb3Ipe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGVsVmlkZW8uY3VycmVudFRpbWUgPT09IGVsVmlkZW8uZHVyYXRpb24pe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkV2ZW50TGlzdGVuZXIgOiBvbiBwYXVzZVwiKTtcclxuICAgICAgICBwcm92aWRlci5zZXRTdGF0ZShTVEFURV9QQVVTRUQpO1xyXG4gICAgfTtcclxuICAgIC8vRmlyZXMgd2hlbiB0aGUgYXVkaW8vdmlkZW8gaGFzIGJlZW4gc3RhcnRlZCBvciBpcyBubyBsb25nZXIgcGF1c2VkXHJcbiAgICBsb3dMZXZlbEV2ZW50cy5wbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghZWxWaWRlby5wYXVzZWQgJiYgcHJvdmlkZXIuZ2V0U3RhdGUoKSAhPT0gU1RBVEVfUExBWUlORykge1xyXG4gICAgICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJFdmVudExpc3RlbmVyIDogb24gcGxheVwiKTtcclxuICAgICAgICAgICAgcHJvdmlkZXIuc2V0U3RhdGUoU1RBVEVfTE9BRElORyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcbiAgICAvL0ZpcmVzIHdoZW4gdGhlIGF1ZGlvL3ZpZGVvIGlzIHBsYXlpbmcgYWZ0ZXIgaGF2aW5nIGJlZW4gcGF1c2VkIG9yIHN0b3BwZWQgZm9yIGJ1ZmZlcmluZ1xyXG4gICAgbG93TGV2ZWxFdmVudHMucGxheWluZyA9ICgpID0+IHtcclxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJFdmVudExpc3RlbmVyIDogb24gcGxheWluZ1wiKTtcclxuICAgICAgICBwcm92aWRlci5zZXRTdGF0ZShTVEFURV9QTEFZSU5HKTtcclxuICAgICAgICAvL3Byb3ZpZGVyLnRyaWdnZXIoUFJPVklERVJfRklSU1RfRlJBTUUpO1xyXG4gICAgfTtcclxuICAgIC8vRmlyZXMgd2hlbiB0aGUgYnJvd3NlciBpcyBkb3dubG9hZGluZyB0aGUgYXVkaW8vdmlkZW9cclxuICAgIGxvd0xldmVsRXZlbnRzLnByb2dyZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0aW1lUmFuZ2VzID0gZWxWaWRlby5idWZmZXJlZDtcclxuICAgICAgICBpZighdGltZVJhbmdlcyApe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZHVyYXRpb24gPSBlbFZpZGVvLmR1cmF0aW9uLCBwb3NpdGlvbiA9IGVsVmlkZW8uY3VycmVudFRpbWU7XHJcbiAgICAgICAgbGV0IGJ1ZmZlcmVkID0gYmV0d2VlbiggKHRpbWVSYW5nZXMubGVuZ3RoPiAwID8gdGltZVJhbmdlcy5lbmQodGltZVJhbmdlcy5sZW5ndGggLSAxKSA6IDAgKSAvIGR1cmF0aW9uLCAwLCAxKTtcclxuXHJcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiRXZlbnRMaXN0ZW5lciA6IG9uIHByb2dyZXNzXCIsIGJ1ZmZlcmVkKjEwMCk7XHJcblxyXG4gICAgICAgIHByb3ZpZGVyLnNldEJ1ZmZlcihidWZmZXJlZCoxMDApO1xyXG4gICAgICAgIHByb3ZpZGVyLnRyaWdnZXIoQ09OVEVOVF9CVUZGRVIsIHtcclxuICAgICAgICAgICAgYnVmZmVyUGVyY2VudDogYnVmZmVyZWQqMTAwLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogIHBvc2l0aW9uLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvL0ZpcmVzIHdoZW4gdGhlIGJyb3dzZXIgaXMgdHJ5aW5nIHRvIGdldCBtZWRpYSBkYXRhLCBidXQgZGF0YSBpcyBub3QgYXZhaWxhYmxlXHJcbiAgICBsb3dMZXZlbEV2ZW50cy5zdGFsbGVkID0gKCkgPT4ge1xyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkV2ZW50TGlzdGVuZXIgOiBvbiBzdGFsbFwiKTtcclxuICAgIH07XHJcbiAgICAvL0ZpcmVzIHdoZW4gdGhlIGN1cnJlbnQgcGxheWJhY2sgcG9zaXRpb24gaGFzIGNoYW5nZWRcclxuICAgIGxvd0xldmVsRXZlbnRzLnRpbWV1cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBlbFZpZGVvLmN1cnJlbnRUaW1lO1xyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gZWxWaWRlby5kdXJhdGlvbjtcclxuICAgICAgICBpZiAoaXNOYU4oZHVyYXRpb24pKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCFwcm92aWRlci5pc1NlZWtpbmcoKSAmJiAhZWxWaWRlby5wYXVzZWQpe1xyXG4gICAgICAgICAgICBwcm92aWRlci5zZXRTdGF0ZShTVEFURV9QTEFZSU5HKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiRXZlbnRMaXN0ZW5lciA6IG9uIHRpbWV1cGRhdGVcIiAsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocHJvdmlkZXIuZ2V0U3RhdGUoKSA9PT0gU1RBVEVfUExBWUlORyB8fCBwcm92aWRlci5pc1NlZWtpbmcoKSkge1xyXG4gICAgICAgICAgICBwcm92aWRlci50cmlnZ2VyKENPTlRFTlRfVElNRSwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG4gICAgbG93TGV2ZWxFdmVudHMucmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkV2ZW50TGlzdGVuZXIgOiBvbiByZXNpemVcIik7XHJcbiAgICB9O1xyXG4gICAgbG93TGV2ZWxFdmVudHMuc2Vla2luZyA9ICgpID0+IHtcclxuICAgICAgICBwcm92aWRlci5zZXRTZWVraW5nKHRydWUpO1xyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkV2ZW50TGlzdGVuZXIgOiBvbiBzZWVraW5nXCIsIGVsVmlkZW8uY3VycmVudFRpbWUpO1xyXG4gICAgICAgIHByb3ZpZGVyLnRyaWdnZXIoQ09OVEVOVF9TRUVLLHtcclxuICAgICAgICAgICAgcG9zaXRpb24gOiBlbFZpZGVvLmN1cnJlbnRUaW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgbG93TGV2ZWxFdmVudHMuc2Vla2VkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCFwcm92aWRlci5pc1NlZWtpbmcoKSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiRXZlbnRMaXN0ZW5lciA6IG9uIHNlZWtlZFwiKTtcclxuICAgICAgICBwcm92aWRlci5zZXRTZWVraW5nKGZhbHNlKTtcclxuICAgICAgICBwcm92aWRlci50cmlnZ2VyKENPTlRFTlRfU0VFS0VEKTtcclxuICAgIH07XHJcblxyXG4gICAgLy9GaXJlcyB3aGVuIHRoZSB2aWRlbyBzdG9wcyBiZWNhdXNlIGl0IG5lZWRzIHRvIGJ1ZmZlciB0aGUgbmV4dCBmcmFtZVxyXG4gICAgbG93TGV2ZWxFdmVudHMud2FpdGluZyA9ICgpID0+IHtcclxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJFdmVudExpc3RlbmVyIDogb24gd2FpdGluZ1wiLCBwcm92aWRlci5nZXRTdGF0ZSgpKTtcclxuICAgICAgICBpZihwcm92aWRlci5pc1NlZWtpbmcoKSl7XHJcbiAgICAgICAgICAgIHByb3ZpZGVyLnNldFN0YXRlKFNUQVRFX0xPQURJTkcpO1xyXG4gICAgICAgIH1lbHNlIGlmKHByb3ZpZGVyLmdldFN0YXRlKCkgPT0gU1RBVEVfUExBWUlORyl7XHJcbiAgICAgICAgICAgIHByb3ZpZGVyLnNldFN0YXRlKFNUQVRFX1NUQUxMRUQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgbG93TGV2ZWxFdmVudHMudm9sdW1lY2hhbmdlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJFdmVudExpc3RlbmVyIDogb24gdm9sdW1lY2hhbmdlXCIsIE1hdGgucm91bmQoZWxWaWRlby52b2x1bWUgKiAxMDApKTtcclxuICAgICAgICBwcm92aWRlci50cmlnZ2VyKENPTlRFTlRfVk9MVU1FLCB7XHJcbiAgICAgICAgICAgIHZvbHVtZTogTWF0aC5yb3VuZChlbFZpZGVvLnZvbHVtZSAqIDEwMCksXHJcbiAgICAgICAgICAgIG11dGU6IGVsVmlkZW8ubXV0ZWRcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgbG93TGV2ZWxFdmVudHMuZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IChlbFZpZGVvLmVycm9yICYmIGVsVmlkZW8uZXJyb3IuY29kZSkgfHwgMDtcclxuICAgICAgICBjb25zdCBlcnJvckNvZGVHZW4gPSAoe1xyXG4gICAgICAgICAgICAwOiB7Y29kZSA6IFBMQVlFUl9VTktOV09OX0VSUk9SLCByZWFzb24gOiBcIlVua25vd24gaHRtbDUgdmlkZW8gZXJyb3JcIiwgbWVzc2FnZSA6IFwiVW5rbm93biBodG1sNSB2aWRlbyBlcnJvclwifSxcclxuICAgICAgICAgICAgMToge2NvZGUgOiBQTEFZRVJfVU5LTldPTl9PUEVSQVRJT05fRVJST1IsIHJlYXNvbiA6IFwiVW5rbm93biBvcGVyYXRpb24gYWJvcnRlZFwiLCBtZXNzYWdlIDogXCJVbmtub3duIG9wZXJhdGlvbiBhYm9ydGVkXCJ9LFxyXG4gICAgICAgICAgICAyOiB7Y29kZSA6IFBMQVlFUl9VTktOV09OX05FV1dPUktfRVJST1IsIHJlYXNvbiA6IFwiVW5rbm93biBuZXR3b3JrIGVycm9yXCIsIG1lc3NhZ2UgOiBcIlVua25vd24gbmV0d29yayBlcnJvclwifSxcclxuICAgICAgICAgICAgMzoge2NvZGUgOiBQTEFZRVJfVU5LTldPTl9ERUNPREVfRVJST1IsIHJlYXNvbiA6IFwiVW5rbm93biBkZWNvZGUgZXJyb3JcIiwgbWVzc2FnZSA6IFwiVW5rbm93biBkZWNvZGUgZXJyb3JcIn0sXHJcbiAgICAgICAgICAgIDQ6IHtjb2RlIDogUExBWUVSX0ZJTEVfRVJST1IsIHJlYXNvbiA6IFwiRmlsZSBjb3VsZCBub3QgYmUgcGxheWVkXCIsIG1lc3NhZ2UgOiBcIkZpbGUgY291bGQgbm90IGJlIHBsYXllZFwifVxyXG4gICAgICAgIH1bY29kZV18fDApO1xyXG4gICAgICAgIGVycm9yQ29kZUdlbi5lcnJvciA9IGVsVmlkZW8uZXJyb3I7XHJcblxyXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkV2ZW50TGlzdGVuZXIgOiBvbiBlcnJvclwiLCBlcnJvckNvZGVHZW4pO1xyXG4gICAgICAgIG9uRXJyb3IoZXJyb3JDb2RlR2VuKTtcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICBPYmplY3Qua2V5cyhsb3dMZXZlbEV2ZW50cykuZm9yRWFjaChldmVudE5hbWUgPT4ge1xyXG4gICAgICAgIGVsVmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxvd0xldmVsRXZlbnRzW2V2ZW50TmFtZV0pO1xyXG4gICAgICAgIGVsVmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxvd0xldmVsRXZlbnRzW2V2ZW50TmFtZV0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhhdC5kZXN0cm95ID0gKCkgPT57XHJcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiRXZlbnRMaXN0ZW5lciA6IGRlc3Ryb3koKVwiKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMobG93TGV2ZWxFdmVudHMpLmZvckVhY2goZXZlbnROYW1lID0+IHtcclxuICAgICAgICAgICAgZWxWaWRlby5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbG93TGV2ZWxFdmVudHNbZXZlbnROYW1lXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoYXQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0ZW5lcjsiLCIvKipcclxuICogQ3JlYXRlZCBieSBob2hvIG9uIDIwMTguIDYuIDI3Li5cclxuICovXHJcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImFwaS9FdmVudEVtaXR0ZXJcIjtcclxuaW1wb3J0IEV2ZW50c0xpc3RlbmVyIGZyb20gXCJhcGkvcHJvdmlkZXIvaHRtbDUvTGlzdGVuZXJcIjtcclxuaW1wb3J0IF8gZnJvbSBcInV0aWxzL3VuZGVyc2NvcmUuanNcIjtcclxuaW1wb3J0IFByb21pc2UsIHtyZXNvbHZlZH0gZnJvbSBcImFwaS9zaGltcy9wcm9taXNlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBTVEFURV9JRExFLCBTVEFURV9QTEFZSU5HLCBTVEFURV9QQVVTRUQsIFNUQVRFX0NPTVBMRVRFLFxyXG4gICAgUExBWUVSX1NUQVRFLCBQTEFZRVJfQ09NUExFVEUsIFBMQVlFUl9QQVVTRSwgUExBWUVSX1BMQVksXHJcbiAgICBDT05URU5UX0xFVkVMUywgQ09OVEVOVF9MRVZFTF9DSEFOR0VELCBDT05URU5UX1RJTUUsIENPTlRFTlRfQ0FQVElPTl9DVUVfQ0hBTkdFRCxcclxuICAgIFBMQVlCQUNLX1JBVEVfQ0hBTkdFRCwgQ09OVEVOVF9NVVRFLCBQUk9WSURFUl9IVE1MNSwgUFJPVklERVJfV0VCUlRDLCBQUk9WSURFUl9EQVNILCBQUk9WSURFUl9ITFNcclxufSBmcm9tIFwiYXBpL2NvbnN0YW50c1wiO1xyXG5cclxubGV0IGV4dHJhY3RWaWRlb0VsZW1lbnQgPSBmdW5jdGlvbihwcm92aWRlck5hbWUsIGV4dGVuZGVkRWxlbWVudCl7XHJcbiAgICBpZihfLmlzRWxlbWVudChleHRlbmRlZEVsZW1lbnQpKXtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kZWRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgaWYocHJvdmlkZXJOYW1lID09PSBQUk9WSURFUl9EQVNIKXtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kZWRFbGVtZW50LmdldFZpZGVvRWxlbWVudCgpO1xyXG4gICAgfWVsc2UgaWYocHJvdmlkZXJOYW1lID09PSBQUk9WSURFUl9ITFMpe1xyXG4gICAgICAgIHJldHVybiBleHRlbmRlZEVsZW1lbnQubWVkaWE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAYnJpZWYgICBDb3JlIEZvciBIdG1sNSBWaWRlby5cclxuICogQHBhcmFtICAgcHJvdmlkZXJOYW1lIHByb3ZpZGVyIG5hbWVcclxuICogQHBhcmFtICAgZXh0ZW5kZWRFbGVtZW50IGV4dGVuZGVkIG1lZGlhIG9iamVjdCBieSBtc2UuIG9yIHZpZGVvIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSAgIHBsYXllckNvbmZpZyAgcGxheWVyIGNvbmZpZ1xyXG4gKiBAcGFyYW0gICBvbkxvYWQgb24gbG9hZCBoYW5kbGVyXHJcbiAqICovXHJcbmNvbnN0IFByb3ZpZGVyID0gZnVuY3Rpb24gKHByb3ZpZGVyTmFtZSwgZXh0ZW5kZWRFbGVtZW50LCBwbGF5ZXJDb25maWcsIG9uQmVmb3JlTG9hZCl7XHJcbiAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJDT1JFIGxvYWRlZC4gXCIpO1xyXG5cclxuICAgIGxldCB0aGF0ID17fTtcclxuICAgIEV2ZW50RW1pdHRlcih0aGF0KTtcclxuXHJcbiAgICBsZXQgZWxWaWRlbyA9IGV4dHJhY3RWaWRlb0VsZW1lbnQocHJvdmlkZXJOYW1lLCBleHRlbmRlZEVsZW1lbnQpO1xyXG4gICAgbGV0IGxpc3RlbmVyID0gRXZlbnRzTGlzdGVuZXIocHJvdmlkZXJOYW1lLCBleHRlbmRlZEVsZW1lbnQsIGVsVmlkZW8sIHRoYXQpO1xyXG4gICAgbGV0IGNhblNlZWsgPSBmYWxzZTtcclxuICAgIGxldCBzZWVraW5nID0gZmFsc2U7XHJcbiAgICBsZXQgc3RhdGUgPSBTVEFURV9JRExFO1xyXG4gICAgbGV0IGJ1ZmZlciA9IDA7XHJcbiAgICBsZXQgY3VycmVudFF1YWxpdHkgPSAtMTtcclxuICAgIGxldCBzb3VyY2VzID0gW107XHJcbiAgICAvL2xldCBpc0xpdmUgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgcG9zdGVySW1hZ2UgPSBwbGF5ZXJDb25maWcuZ2V0Q29uZmlnKCkuaW1hZ2V8fFwiXCI7XHJcbiAgICBlbFZpZGVvLnBsYXliYWNrUmF0ZSA9IGVsVmlkZW8uZGVmYXVsdFBsYXliYWNrUmF0ZSA9IHBsYXllckNvbmZpZy5nZXREZWZhdWx0UGxheWJhY2tSYXRlKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IHBpY2tDdXJyZW50UXVhbGl0eSA9IChzb3VyY2VzKSA9PntcclxuICAgICAgICB2YXIgcXVhbGl0eSA9IE1hdGgubWF4KDAsIGN1cnJlbnRRdWFsaXR5KTtcclxuICAgICAgICBjb25zdCBsYWJlbCA9XCJcIjtcclxuICAgICAgICBpZiAoc291cmNlcykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzb3VyY2VzW2ldLmRlZmF1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5ID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJDb25maWcuZ2V0UXVhbGl0eUxhYmVsKCkgJiYgc291cmNlc1tpXS5sYWJlbCA9PT0gcGxheWVyQ29uZmlnLmdldFF1YWxpdHlMYWJlbCgpICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBxdWFsaXR5O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfbG9hZCA9IChsYXN0UGxheVBvc2l0aW9uKSA9PntcclxuICAgICAgICBjb25zdCBzb3VyY2UgPSAgc291cmNlc1tjdXJyZW50UXVhbGl0eV07XHJcbiAgICAgICAgaWYob25CZWZvcmVMb2FkKXtcclxuICAgICAgICAgICAgb25CZWZvcmVMb2FkKHNvdXJjZSwgbGFzdFBsYXlQb3NpdGlvbik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcInNvdXJjZSBsb2FkZWQgOiBcIiwgc291cmNlLCBcImxhc3RQbGF5UG9zaXRpb24gOiBcIisgbGFzdFBsYXlQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGxldCBwcmV2aW91c1NvdXJjZSA9IGVsVmlkZW8uc3JjO1xyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJyk7XHJcblxyXG4gICAgICAgICAgICBzb3VyY2VFbGVtZW50LnNyYyA9IHNvdXJjZS5maWxlO1xyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2VDaGFuZ2VkID0gKHNvdXJjZUVsZW1lbnQuc3JjICE9PSBwcmV2aW91c1NvdXJjZSk7XHJcbiAgICAgICAgICAgIGlmIChzb3VyY2VDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICBlbFZpZGVvLnNyYyA9IHNvdXJjZXNbY3VycmVudFF1YWxpdHldLmZpbGU7XHJcbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgY2FsbCBsb2FkIGlmIHNyYyB3YXMgbm90IHNldC4gbG9hZCgpIHdpbGwgY2FuY2VsIGFueSBhY3RpdmUgcGxheSBwcm9taXNlLlxyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzU291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxWaWRlby5sb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGxhc3RQbGF5UG9zaXRpb24gPT0gMCAmJiBlbFZpZGVvLmN1cnJlbnRUaW1lID4gMCl7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNlZWsobGFzdFBsYXlQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYobGFzdFBsYXlQb3NpdGlvbiA+IDApe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZWVrKGxhc3RQbGF5UG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhhdC50cmlnZ2VyKENPTlRFTlRfTEVWRUxTLCB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVhbGl0eTogY3VycmVudFF1YWxpdHlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZihwb3N0ZXJJbWFnZSl7XHJcbiAgICAgICAgICAgICAgICBlbFZpZGVvLnBvc3RlciA9IHBvc3RlckltYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGF0LmdldE5hbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByb3ZpZGVyTmFtZTtcclxuICAgIH07XHJcbiAgICB0aGF0LmNhblNlZWsgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGNhblNlZWs7XHJcbiAgICB9O1xyXG4gICAgdGhhdC5zZXRDYW5TZWVrID0gKGNhblNlZWtfKSA9PiB7XHJcbiAgICAgICAgY2FuU2VlayA9IGNhblNlZWtfO1xyXG4gICAgfTtcclxuICAgIHRoYXQuaXNTZWVraW5nID0gKCk9PntcclxuICAgICAgICByZXR1cm4gc2Vla2luZztcclxuICAgIH07XHJcbiAgICB0aGF0LnNldFNlZWtpbmcgPSAoc2Vla2luZ18pPT57XHJcbiAgICAgICAgc2Vla2luZyA9IHNlZWtpbmdfO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGF0LnNldFN0YXRlID0gKG5ld1N0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYoc3RhdGUgIT0gbmV3U3RhdGUpe1xyXG4gICAgICAgICAgICBsZXQgcHJldlN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgICAgIHN3aXRjaChuZXdTdGF0ZSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFNUQVRFX0NPTVBMRVRFIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnRyaWdnZXIoUExBWUVSX0NPTVBMRVRFKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgU1RBVEVfUEFVU0VEIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnRyaWdnZXIoUExBWUVSX1BBVVNFLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZTdGF0ZTogc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgU1RBVEVfUExBWUlORyA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC50cmlnZ2VyKFBMQVlFUl9QTEFZLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZTdGF0ZTogc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZT0gbmV3U3RhdGU7XHJcbiAgICAgICAgICAgIHRoYXQudHJpZ2dlcihQTEFZRVJfU1RBVEUsIHtcclxuICAgICAgICAgICAgICAgIHByZXZzdGF0ZTogcHJldlN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbmV3c3RhdGU6IHN0YXRlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGF0LmdldFN0YXRlID0gKCkgPT57XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfTtcclxuICAgIHRoYXQuc2V0QnVmZmVyID0gKG5ld0J1ZmZlcikgPT4ge1xyXG4gICAgICAgIGJ1ZmZlciA9IG5ld0J1ZmZlcjtcclxuICAgIH07XHJcbiAgICB0aGF0LmdldEJ1ZmZlciA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYnVmZmVyO1xyXG4gICAgfTtcclxuICAgIHRoYXQuZ2V0RHVyYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgLy9Ub0RvIDogWW91IGNvbnNpZGVyIGhsc2pzLiBCdXQgbm90IG5vdyBiZWNhdXNlIHdlIGRvbid0IHN1cHBvcnQgaGxzanMuXHJcbiAgICAgICAgbGV0IGlzTGl2ZSA9IChlbFZpZGVvLmR1cmF0aW9uID09IEluZmluaXR5PyB0cnVlIDogKHByb3ZpZGVyTmFtZSA9PT0gUFJPVklERVJfREFTSD8gZXh0ZW5kZWRFbGVtZW50LmlzRHluYW1pYygpIDogZmFsc2UpKTtcclxuICAgICAgICByZXR1cm4gaXNMaXZlID8gIEluZmluaXR5IDogZWxWaWRlby5kdXJhdGlvbjtcclxuICAgIH07XHJcbiAgICB0aGF0LmdldFBvc2l0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBlbFZpZGVvLmN1cnJlbnRUaW1lO1xyXG4gICAgfTtcclxuICAgIHRoYXQuc2V0Vm9sdW1lID0gKHZvbHVtZSkgPT57XHJcbiAgICAgICAgZWxWaWRlby52b2x1bWUgPSB2b2x1bWUvMTAwO1xyXG4gICAgfTtcclxuICAgIHRoYXQuZ2V0Vm9sdW1lID0gKCkgPT57XHJcbiAgICAgICAgcmV0dXJuIGVsVmlkZW8udm9sdW1lKjEwMDtcclxuICAgIH07XHJcbiAgICB0aGF0LnNldE11dGUgPSAoc3RhdGUpID0+e1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHN0YXRlID09PSAndW5kZWZpbmVkJykge1xyXG5cclxuICAgICAgICAgICAgZWxWaWRlby5tdXRlZCA9ICFlbFZpZGVvLm11dGVkO1xyXG5cclxuICAgICAgICAgICAgdGhhdC50cmlnZ2VyKENPTlRFTlRfTVVURSwge1xyXG4gICAgICAgICAgICAgICAgbXV0ZTogZWxWaWRlby5tdXRlZFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGVsVmlkZW8ubXV0ZWQgPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHRoYXQudHJpZ2dlcihDT05URU5UX01VVEUsIHtcclxuICAgICAgICAgICAgICAgIG11dGU6IGVsVmlkZW8ubXV0ZWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbFZpZGVvLm11dGVkO1xyXG4gICAgfTtcclxuICAgIHRoYXQuZ2V0TXV0ZSA9ICgpID0+e1xyXG4gICAgICAgIHJldHVybiBlbFZpZGVvLm11dGVkO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGF0LnByZWxvYWQgPSAoc291cmNlc18sIGxhc3RQbGF5UG9zaXRpb24pID0+e1xyXG4gICAgICAgIHNvdXJjZXMgPSBzb3VyY2VzXztcclxuICAgICAgICBjdXJyZW50UXVhbGl0eSA9IHBpY2tDdXJyZW50UXVhbGl0eShzb3VyY2VzKTtcclxuICAgICAgICBfbG9hZChsYXN0UGxheVBvc2l0aW9uIHx8IDApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuICAgIHRoYXQubG9hZCA9IChzb3VyY2VzXykgPT57XHJcbiAgICAgICAgc291cmNlcyA9IHNvdXJjZXNfO1xyXG4gICAgICAgIGN1cnJlbnRRdWFsaXR5ID0gcGlja0N1cnJlbnRRdWFsaXR5KHNvdXJjZXMpO1xyXG4gICAgICAgIF9sb2FkKHNvdXJjZXNfLnN0YXJ0dGltZSB8fCAwKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhhdC5wbGF5ID0gKCkgPT57XHJcbiAgICAgICAgaWYoIHRoYXQuZ2V0U3RhdGUoKSAhPT0gU1RBVEVfUExBWUlORyl7XHJcbiAgICAgICAgICAgIGVsVmlkZW8ucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRoYXQucGF1c2UgPSAoKSA9PntcclxuICAgICAgICBpZiggdGhhdC5nZXRTdGF0ZSgpID09IFNUQVRFX1BMQVlJTkcpe1xyXG4gICAgICAgICAgICBlbFZpZGVvLnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoYXQuc2VlayA9IChwb3NpdGlvbikgPT57XHJcbiAgICAgICAgZWxWaWRlby5jdXJyZW50VGltZSA9IHBvc2l0aW9uO1xyXG4gICAgfTtcclxuICAgIHRoYXQuc2V0UGxheWJhY2tSYXRlID0gKHBsYXliYWNrUmF0ZSkgPT57XHJcbiAgICAgICAgdGhhdC50cmlnZ2VyKFBMQVlCQUNLX1JBVEVfQ0hBTkdFRCwge3BsYXliYWNrUmF0ZSA6IHBsYXliYWNrUmF0ZX0pO1xyXG4gICAgICAgIHJldHVybiBlbFZpZGVvLnBsYXliYWNrUmF0ZSA9IGVsVmlkZW8uZGVmYXVsdFBsYXliYWNrUmF0ZSA9IHBsYXliYWNrUmF0ZTtcclxuICAgIH07XHJcbiAgICB0aGF0LmdldFBsYXliYWNrUmF0ZSA9ICgpID0+e1xyXG4gICAgICAgIHJldHVybiBlbFZpZGVvLnBsYXliYWNrUmF0ZTtcclxuICAgIH07XHJcbiAgICB0aGF0LmdldFF1YWxpdHlMZXZlbHMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHF1YWxpdHlMZXZlbHMgPSBzb3VyY2VzLm1hcChmdW5jdGlvbihzb3VyY2UsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBmaWxlOiBzb3VyY2UuZmlsZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IHNvdXJjZS50eXBlLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IHNvdXJjZS5sYWJlbCxcclxuICAgICAgICAgICAgICAgIGluZGV4IDogaW5kZXhcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcXVhbGl0eUxldmVscztcclxuICAgIH07XHJcbiAgICB0aGF0LmdldEN1cnJlbnRRdWFsaXR5ID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2N1cnJlbnRRdWFsaXR5XTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmaWxlOiBzb3VyY2UuZmlsZSxcclxuICAgICAgICAgICAgdHlwZTogc291cmNlLnR5cGUsXHJcbiAgICAgICAgICAgIGxhYmVsOiBzb3VyY2UubGFiZWwsXHJcbiAgICAgICAgICAgIGluZGV4IDogY3VycmVudFF1YWxpdHlcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHRoYXQuc2V0Q3VycmVudFF1YWxpdHkgPSAocXVhbGl0eUluZGV4LCBuZWVkUHJvdmlkZXJDaGFuZ2UpID0+IHtcclxuICAgICAgICBpZihjdXJyZW50UXVhbGl0eSA9PSBxdWFsaXR5SW5kZXgpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihxdWFsaXR5SW5kZXggPiAtMSl7XHJcbiAgICAgICAgICAgIGlmKHNvdXJjZXMgJiYgc291cmNlcy5sZW5ndGggPiBxdWFsaXR5SW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgLy90aGF0LnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNldFN0YXRlKFNUQVRFX0lETEUpO1xyXG4gICAgICAgICAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwic291cmNlIGNoYW5nZWQgOiBcIiArIHF1YWxpdHlJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVhbGl0eSA9IHF1YWxpdHlJbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGF0LnRyaWdnZXIoQ09OVEVOVF9MRVZFTF9DSEFOR0VELCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1YWxpdHk6IHF1YWxpdHlJbmRleFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcGxheWVyQ29uZmlnLnNldFF1YWxpdHlMYWJlbChzb3VyY2VzW3F1YWxpdHlJbmRleF0ubGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgaWYobmVlZFByb3ZpZGVyQ2hhbmdlKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgX2xvYWQoZWxWaWRlby5jdXJyZW50VGltZSB8fCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50UXVhbGl0eTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhhdC5zdG9wID0gKCkgPT57XHJcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQ09SRSA6IHN0b3AoKSBcIik7XHJcbiAgICAgICAgZWxWaWRlby5yZW1vdmVBdHRyaWJ1dGUoJ3ByZWxvYWQnKTtcclxuICAgICAgICBlbFZpZGVvLnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XHJcbiAgICAgICAgd2hpbGUgKGVsVmlkZW8uZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICBlbFZpZGVvLnJlbW92ZUNoaWxkKGVsVmlkZW8uZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoYXQucGF1c2UoKTtcclxuICAgICAgICB0aGF0LnNldFN0YXRlKFNUQVRFX0lETEUpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGF0LmRlc3Ryb3kgPSAoKSA9PntcclxuICAgICAgICB0aGF0LnN0b3AoKTtcclxuICAgICAgICBsaXN0ZW5lci5kZXN0cm95KCk7XHJcbiAgICAgICAgLy9lbFZpZGVvLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoYXQub2ZmKCk7XHJcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQ09SRSA6IGRlc3Ryb3koKSBwbGF5ZXIgc3RvcCwgbGlzdGVuZXIsIGV2ZW50IGRlc3Ryb2llZFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgLy9YWFggOiBJIGhvcGUgdXNpbmcgZXM2IGNsYXNzZXMuIGJ1dCBJIHRoaW5rIHRvIG9jY3VyIHByb2JsZW0gZnJvbSBPbGQgSUUuIFRoZW4gSSBjaG9pY2UgZnVuY3Rpb24gaW5oZXJpdC4gRmluYWxseSB1c2luZyBzdXBlciBmdW5jdGlvbiBpcyBzbyBkaWZmaWN1bHQuXHJcbiAgICAvLyB1c2UgOiBsZXQgc3VwZXJfZGVzdHJveSAgPSB0aGF0LnN1cGVyKCdkZXN0cm95Jyk7IC4uLiBzdXBlcl9kZXN0cm95KCk7XHJcbiAgICB0aGF0LnN1cGVyID0gKG5hbWUpID0+IHtcclxuICAgICAgICBjb25zdCBtZXRob2QgPSB0aGF0W25hbWVdO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhhdDtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm92aWRlcjsiLCIvKipcbiAqIENyZWF0ZWQgYnkgaG9obyBvbiAyMDE4LiA4LiAyNC4uXG4gKi9cblxuXG5leHBvcnQgY29uc3QgZ2V0QnJvd3NlciA9IGZ1bmN0aW9uKCl7XG4gICAgaWYoKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk9wZXJhXCIpIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignT1BSJykpICE9IC0xICl7XG4gICAgICAgIHJldHVybiAnb3BlcmEnO1xuICAgIH1lbHNlIGlmKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkNocm9tZVwiKSAhPSAtMSApe1xuICAgICAgICByZXR1cm4gJ2Nocm9tZSc7XG4gICAgfWVsc2UgaWYobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiU2FmYXJpXCIpICE9IC0xKXtcbiAgICAgICAgcmV0dXJuICdzYWZhcmknO1xuICAgIH1lbHNlIGlmKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkZpcmVmb3hcIikgIT0gLTEgKXtcbiAgICAgICAgcmV0dXJuICdmaXJlZm94JztcbiAgICB9ZWxzZSBpZigobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRVwiKSAhPSAtMSApKXtcbiAgICAgICAgbGV0IG1zaWUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFXCIpO1xuICAgICAgICAvKmlmKCEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlID09IHRydWUgKXtcbiAgICAgICAgICAgIHJldHVybiAnaWUnO1xuICAgICAgICB9ZWxzZSBpZighIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnQuKnJ2XFw6MTFcXC4vKSl7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KHVhLnN1YnN0cmluZyhtc2llICsgNSwgdWEuaW5kZXhPZihcIi5cIiwgbXNpZSkpKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2llJztcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiAndW5rbm93bic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuICd1bmtub3duJztcbiAgICAgICAgfSovXG4gICAgICAgIHZhciBpZSA9IChmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICB2YXIgdW5kZWYsXG4gICAgICAgICAgICAgICAgdiA9IDMsXG4gICAgICAgICAgICAgICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgICAgICAgICAgYWxsID0gZGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpJyk7XG5cbiAgICAgICAgICAgIHdoaWxlIChcbiAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gJzwhLS1baWYgZ3QgSUUgJyArICgrK3YpICsgJ10+PGk+PC9pPjwhW2VuZGlmXS0tPicsXG4gICAgICAgICAgICAgICAgICAgIGFsbFswXVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHJldHVybiB2ID4gNCA/IHYgOiB1bmRlZjtcblxuICAgICAgICB9KCkpO1xuICAgICAgICBpZihpZSA8IDkpe1xuICAgICAgICAgICAgcmV0dXJuICdvbGRJRSc7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuICdtb2Rlcm5JRSc7XG4gICAgICAgIH1cblxuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gJ3Vua25vd24nO1xuICAgIH1cblxufTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==