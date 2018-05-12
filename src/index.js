import { remove, insertCSS, generate } from './js/app';
import CSS from './style/style.css';
let isInit = false;
const init = () => {
    if (isInit) {
        isInit = false;
        remove();
    } else {
        isInit = true;
        insertCSS(CSS);
        generate();
    }
}
init();
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    init();
    sendResponse(true)
});  
