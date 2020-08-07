// ==UserScript==
// @name         Twitch Channel Points Clicker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically clicks the little gift box for you.
// @author       FREDERICK
// @match        https://www.twitch.tv/*
// @grant        none
// @downloadURL https://raw.githubusercontent.com/MrBurrBurr/Twitch-Channel-Points-Clicker/master/code.user.js
// @updateURL   https://raw.githubusercontent.com/MrBurrBurr/Twitch-Channel-Points-Clicker/master/code.user.js
// ==/UserScript==

(function() {
    'use strict';

    function checkForPoints() {
        setTimeout(function () {
            let elem = document.querySelectorAll('button.tw-button.tw-button--success.tw-interactive');
            if (elem.length === 1) elem[0].click();
            checkForPoints();
        }, 5000);
    }

    setTimeout(function () {
        checkForPoints();
    }, 5000);
})();
