// ==UserScript==
// @name         Twitch-Clicky
// @namespace    https://frederick.win/
// @version      0.4
// @description  Automatically opens the twitch gift box for you.
// @author       FREDERICK
// @match        https://www.twitch.tv/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/MrBurrBurr/Twitch-Clicky/master/code.user.js
// @updateURL    https://raw.githubusercontent.com/MrBurrBurr/Twitch-Clicky/master/code.user.js
// ==/UserScript==

(function() {
    'use strict';

    const selector = "div.community-points-summary > div > div > div > div > button";
    const handler = function() {
        const el = document.querySelector(selector);
        if (el) el.click();
    }

    setInterval(handler, 5000);
})();
