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
  
  function checkForPoints() {
    //const elem = document.querySelectorAll('button.tw-button.tw-button--success');
    const potentials = document.querySelectorAll("[class*=ScCoreButtonSuccess]");
    
    elementLoop:
    for (let i = 0; i < potentials.length; i++) {
      let potential = potentials[i];
      
      for (let j = 0; j < potential.classList.length; j++) {
        if (potential.classList[j].match(/^ScCoreButtonSuccess/)) {
          potential.click();
          continue elementLoop;
        }
      }
    }
  }

  const repeat = setInterval(checkForPoints, 5000);
})();
