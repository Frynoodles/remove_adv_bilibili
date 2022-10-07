// ==UserScript==
// @name         去除广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       HideRua
// @match        https://www.bilibili.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 移除广告
    function remove_adv() {
        var adv = document.getElementsByClassName('recommended-card')[document.getElementsByClassName('recommended-card').length - 1]
        if(adv){
            adv.innerHTML = "";}
    }
    // 监听该div

    remove_adv();
    document.getElementsByClassName('container')[0].addEventListener('DOMSubtreeModified',function(){
        remove_adv();
    })
})();