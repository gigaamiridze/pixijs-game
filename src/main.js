import * as PIXI from 'pixi.js';

const canvas = document.getElementById('canvas');

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x23395D,
  antialias: true,
});

canvas.appendChild(app.view);

const rectangle = new PIXI.Graphics();
rectangle
  .beginFill(0xAA33BB)
  .lineStyle(4, 0xFFEA00, 1)
  .drawRect(200, 200, 100, 120)
  .endFill()
app.stage.addChild(rectangle);

const poly = new PIXI.Graphics();
poly
  .beginFill(0xAA33BB)
  .lineStyle(4, 0xFFEA00, 1)
  .drawPolygon(
      600, 50,
      800, 150,
      900, 300,
      400, 400
  )
  .endFill()
app.stage.addChild(poly);
