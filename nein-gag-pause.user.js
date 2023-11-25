// ==UserScript==
// @name         9gag pause
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add controls to players and pause on key
// @author       Zettai Ryouiki
// @match        https://9gag.com/gag/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=9gag.com
// @grant        none
// ==/UserScript==

const key = 32;

const applyToPlayers = func => {
  const players = [...document.querySelectorAll("video")];
  players.forEach(player => func(player));
}

const addControls = () => applyToPlayers(player => player.setAttribute("controls", "controls"));

const pauseOnKey = e => {
  if (e.keyCode === key) {
    e.preventDefault();
    applyToPlayers(player => player.paused ? player.play() : player.pause());
  }
};

(() => {
  "use strict";
  window.addEventListener("load", addControls, false);
  document.addEventListener("keydown", pauseOnKey, false);
})();