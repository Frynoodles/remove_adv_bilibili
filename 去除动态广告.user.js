// ==UserScript==
// @name         去除动态广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       HideRua
// @match        https://t.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function remove_adv(){
        var adv=document.getElementsByClassName('reply-notice')[0];
        if(adv){
            adv.remove();}
    }
    window.onload=function(){
        var dyn_list=document.getElementsByClassName('bili-dyn-list__items')[0];
        dyn_list.addEventListener('DOMSubtreeModified',function(){
            remove_adv();
        })

    }
    // Your code here...
})();