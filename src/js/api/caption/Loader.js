/**
 * Created by hoho on 2018. 7. 4..
 */
import SrtParser from "api/caption/parser/SrtParser";
import VTTCue from "utils/captions/vttCue";
import Request from "utils/downloader";
import _ from "utils/underscore";

const Loader = function(){
    const that = {};

    const convertToVTTCues = function (cues) {
        return cues.map(cue => new VTTCue(cue.start, cue.end, cue.text));
    }
    that.load = (track, successCallback, errorCallback) => {

        var requestOptions  = {
            method: "GET",
            url : track.file,
            headers: { "User-Agent": "Mozilla/5.0" },
            encoding: null
        };
        Request(requestOptions, function(error, response, body) {
            if(error){
                errorCallback(error);
            }else{
                let cues = [];
                let vttCues = [];
                let buffered =[];

                if(_.isArray(body)){
                    buffered = body;
                }else{
                    buffered = new Buffer(body);
                }
                console.log(body);
                if (body.indexOf('WEBVTT') >= 0) {
                    OvenPlayerConsole.log("WEBVTT LOADED");
                    loadVttParser().then(WebVTT => {
                        let parser = new WebVTT.Parser(window, WebVTT.StringDecoder());
                        vttCues = [];
                        parser.oncue = function(cue) {
                            vttCues.push(cue);
                        };
                        parser.onflush = function() {
                            //delete track.xhr;
                            successCallback(vttCues);
                        };
                        // Parse calls onflush internally
                        parser.parse(body);
                    }).catch(error => {
                        //delete track.xhr;
                        errorCallback(error);
                    });
                }else if(body.indexOf('SAMI') >= 0){
                    OvenPlayerConsole.log("SAMI LOADED");
                    loadSmiParser().then(SmiParser => {
                        let parsedData = SmiParser(body, {});
                        vttCues = convertToVTTCues(parsedData.result);
                        successCallback(vttCues);
                    }).catch(error => {
                        //delete track.xhr;
                        errorCallback(error);
                    });


                }else{
                    OvenPlayerConsole.log("SRT LOADED");
                    cues = SrtParser(body);
                    vttCues = convertToVTTCues(cues);
                    successCallback(vttCues);
                }

            }
        });
    };

    return that;
};
function loadVttParser() {
    return require.ensure(['api/caption/parser/VttParser'], function (require) {
        return require('api/caption/parser/VttParser').default;
    }, function(err){console.log(err);}, 'vttparser');
}
function loadSmiParser() {
    return require.ensure(['api/caption/parser/SmiParser'], function (require) {
        return require('api/caption/parser/SmiParser').default;
    }, function(err){console.log(err);}, 'smiparser');
}
export default Loader;
