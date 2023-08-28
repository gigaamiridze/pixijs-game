import * as PIXI from 'pixi.js';
import '@pixi/graphics-extras';

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

const circle = new PIXI.Graphics();
circle
  .beginFill(0xAA33BB)
  .drawCircle(400, 200, 60)
  .endFill()

const text = new PIXI.Text('Hello, World', {
  fontFamily: 'Montserrat',
  fontSize: 48,
  fill: 'deepskyblue',
  letterSpacing: 3,
  stroke: '#ffffff',
  strokeThickness: 4,
  dropShadow: true,
  dropShadowDistance: 10,
  dropShadowAngle: Math.PI / 2,
  dropShadowBlur: 4,
  dropShadowColor: '#000000',
});

app.stage.addChild(rectangle);
app.stage.addChild(poly);
app.stage.addChild(circle);
app.stage.addChild(text);
