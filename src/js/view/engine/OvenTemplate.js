/**
 * Created by hoho on 2018. 7. 19..
 */

import Templates from "view/engine/Templates";
import LA$ from 'utils/likeA$';
import _ from "utils/underscore";

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
const OvenTemplate = function (container, templateName, data, events, onRendered, onDestroyed, isRoot) {
    let $container = _.isElement(container) ? LA$(container) : container;
    let $template;
    let viewEvents = {};
    let that = {};

    let createAndSelectElement = function (html) {
        const newElement = document.createElement('div');
        newElement.innerHTML = html;

        $template = LA$(newElement.firstChild);

        return newElement.firstChild;
    }

    if (isRoot) {
        $container.replace(createAndSelectElement(Templates[templateName + "Template"](data)));
    } else {
        $container.append(createAndSelectElement(Templates[templateName + "Template"](data)));
    }

    if (onRendered) {
        onRendered($template, that);
    }

    Object.keys(events).forEach(eventString => {
        let explodedText = eventString.split(" ");
        let eventName = explodedText[0].replace(/ /gi, "");
        let target = explodedText[1].replace(/ /gi, "");

        let $target = "";

        if(target === "document" || target === "window"){
            $target = LA$(target);
        }else{
            $target = $template.find(target) || ($template.hasClass(target.replace(".","")) ? $template : null);
        }


        if (eventName && target && $target) {
            let id = Object.keys(viewEvents).length++;

            //because It retuns another data.
            let wrappedFunc = function (event) {
                return events[eventString](event, $template, that);
            };
            viewEvents[id] = {name: eventName, target: target, callback: wrappedFunc};

            //sometimes target is NodeList
            let nodeLength = $target.get().length;
            if(nodeLength > 1){
                let nodeList = $target.get();
                for(let i = 0; i < nodeLength; i ++){
                    nodeList[i].addEventListener(eventName, wrappedFunc);
                }
                //IE NodeList doesn't have forEach. It's wack.
                /*$target.get().forEach(function($item){
                    $item.addEventListener(eventName, wrappedFunc);
                });*/
            }else{
                $target.get().addEventListener(eventName, wrappedFunc);
            }


        } else {
            return false;
        }
    });

    that.destroy = function () {
        Object.keys(viewEvents).forEach(id => {
            let event = viewEvents[id];
            let $target = "";

            if(event.target === "document" || event.target === "window"){
                $target = LA$(event.target);
            }else{
                $target = $template.find(event.target) || ($template.hasClass(event.target.replace(".","")) ? $template : null);
            }

            //sometimes target is NodeList
            let nodeLength = $target.get().length;
            if(nodeLength > 1){
                let nodeList = $target.get();
                for(let i = 0; i < nodeLength; i ++){
                    nodeList[i].removeEventListener(event.name, event.callback);
                }
                /*$target.get().forEach(function($item){
                    $item.removeEventListener(event.name, event.callback);
                });*/
            }else{
                $target.get().removeEventListener(event.name, event.callback);
            }

            delete viewEvents[id];
        });

        if($template){
            if(isRoot){
                $template.removeChild();
                $template.removeAttribute("class");
            }else{
                $template.remove();
            }
        }

        if (onDestroyed) {
            onDestroyed(that);
        }
    };
    return that;

};


export default OvenTemplate;
