/**
 * Created by hoho on 2018. 7. 24..
 */
import OvenTemplate from 'view/engine/OvenTemplate';
import {
    STATE_IDLE,
    STATE_PLAYING,
    STATE_COMPLETE,
    STATE_PAUSED,
    CONTENT_CAPTION_CHANGED,
    CONTENT_CAPTION_CUE_CHANGED
} from "api/constants";

const CaptionViewer = function($container, api, playerState){

    const onRendered = function($container, $current, template){
        let isDisable = false;
        let deleteTimer = 0;
        api.on(CONTENT_CAPTION_CHANGED, function(index) {
            if(index > -1){
                isDisable = false;
            }else{
                isDisable  = true;
                $container.find(".ovp-caption-text").text("");
            }
        }, template);
        api.on(CONTENT_CAPTION_CUE_CHANGED, function(data) {
            if(!isDisable && data && data.text){
                let hideGap = data.endTime - data.startTime;

                if(deleteTimer){
                    clearTimeout(deleteTimer);
                }

                $container.find(".ovp-caption-text").html(data.text);

                if(hideGap){
                    deleteTimer = setTimeout(function(){
                        $container.find(".ovp-caption-text").text("");
                    },hideGap * 1000);
                }

            }

        }, template);


    };
    const onDestroyed = function(template){
        $container.find(".ovp-caption-text").text("");
        api.off(CONTENT_CAPTION_CHANGED, null, template);
        api.off(CONTENT_CAPTION_CUE_CHANGED, null, template);
    };
    const events = {

    };

    return OvenTemplate($container, "CaptionViewer", playerState, events, onRendered, onDestroyed );
};

export default CaptionViewer;