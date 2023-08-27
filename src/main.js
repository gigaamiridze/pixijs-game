import * as PIXI from 'pixi.js';

const canvas = document.getElementById('canvas');

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x23395D,
  antialias: true,
});

canvas.appendChild(app.view);
