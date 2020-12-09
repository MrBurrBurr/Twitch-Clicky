// ==UserScript==
// @name         Twitch-Clicky
// @namespace    https://frederick.win/
// @version      0.2
// @description  Automatically opens the twitch gift box for you.
// @author       FREDERICK
// @match        https://www.twitch.tv/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/MrBurrBurr/Twitch-Clicky/master/code.user.js
// @updateURL    https://raw.githubusercontent.com/MrBurrBurr/Twitch-Clicky/master/code.user.js
// ==/UserScript==

(function() {
    'use strict';
    
    function checkForPoints() {
        const elem = document.querySelectorAll('button.tw-button.tw-button--success.tw-interactive');
        if (elem.length === 1) elem[0].click();
    }

    const repeat = setInterval(checkForPoints, 5000);
})();
