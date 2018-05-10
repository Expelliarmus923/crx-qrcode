import {remove, insertCSS, generate} from './js/app';
import CSS from './style/style.css';
let isInit = false;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(isInit){
        isInit = false;
        remove();
    }else{
        isInit = true;
        insertCSS(CSS);
        generate();
    }
    sendResponse(true)
});