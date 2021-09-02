// ==UserScript==
// @name         Twitch-Clicky
// @namespace    https://github.com/MrBurrBurr
// @version      0.6
// @description  Automatically opens the twitch gift box for you.
// @author       FREDERICK
// @match        https://www.twitch.tv/*
// @icon         https://www.google.com/s2/favicons?domain=twitch.tv
// @grant        none
// @downloadURL  https://github.com/MrBurrBurr/Twitch-Clicky/raw/master/code.user.js
// @updateURL    https://github.com/MrBurrBurr/Twitch-Clicky/raw/master/code.user.js
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
