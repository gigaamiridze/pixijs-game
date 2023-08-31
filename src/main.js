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

// app.ticker.add(delta => loop(delta));
//
// const loop = (delta) => {
//   const rect = new PIXI.Graphics();
//   rect
//       .beginFill(0xFFFFFF)
//       .drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, 10, 10)
//       .endFill()
//
//   app.stage.addChild(rect);
// }

const char1Sprite = PIXI.Sprite.from('./images/char1.png');
char1Sprite.anchor.set(0.5, 0.5);
char1Sprite.x = app.view.width / 2;
char1Sprite.y = app.view.height / 2;
app.stage.addChild(char1Sprite);

// app.ticker.add(delta => loop(delta));
//
// const loop = () => {
//   char1Sprite.rotation += 0.01;
// }

char1Sprite.interactive = true;
char1Sprite.buttonMode = true;

char1Sprite.on('pointerdown', () => {
  char1Sprite.scale.x += 0.1;
  char1Sprite.scale.y += 0.1;
});
