import * as PIXI from 'pixi.js';
import { Howl } from 'howler';

const canvas = document.getElementById('canvas');

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x23395D,
  transparent: false,
  antialias: true,
});

canvas.appendChild(app.view);

const loadImage = async () => {
  await PIXI.Assets.load('./images/drags.json');

  const textures = [];
  for (let i = 1; i < 13; i++) {
    const texture = PIXI.Texture.from(`drag${i}.png`);
    textures.push(texture);
  }

  const drag = new PIXI.AnimatedSprite(textures);
  drag.anchor.set(0.5);
  drag.scale.set(1.3);
  drag.position.set(app.screen.width / 2, app.screen.height / 2);
  drag.play();
  drag.animationSpeed = 0.1;
  const blurFilter = new PIXI.filters.BlurFilter(1);
  drag.filters = [blurFilter];

  app.stage.addChild(drag);
}

loadImage();

const cloudsTexture = PIXI.Texture.from('./images/clouds.png');
const cloudsSprite = new PIXI.TilingSprite(cloudsTexture, app.screen.width, app.screen.height);

cloudsSprite.tileScale.set(0.4);

app.ticker.add(() => {
  cloudsSprite.tilePosition.x += 1;
});

app.stage.addChild(cloudsSprite);

const sound = new Howl({
  src: ['./sounds/pelimusaa.wav'],
  loop: true,
  volume: 0.5,
});

sound.play();

// const loadImage = async () => {
//   await PIXI.Assets.load('./images/drags.json');
//   const dragTexture = PIXI.Texture.from('drag11.png');
//   const dragSprite = new PIXI.Sprite(dragTexture);
//
//   dragSprite.anchor.set(0.5);
//   dragSprite.scale.set(1.3);
//   dragSprite.position.set(app.screen.width / 2, app.screen.height / 2);
//
//   app.stage.addChild(dragSprite);
// }
//
// loadImage();

// const rectangle = new PIXI.Graphics();
// rectangle
//   .beginFill(0xAA33BB)
//   .lineStyle(4, 0xFFEA00, 1)
//   .drawRect(200, 200, 100, 120)
//   .endFill()
//
// const poly = new PIXI.Graphics();
// poly
//   .beginFill(0xAA33BB)
//   .lineStyle(4, 0xFFEA00, 1)
//   .drawPolygon(
//       600, 50,
//       800, 150,
//       900, 300,
//       400, 400
//   )
//   .endFill()
//
// const circle = new PIXI.Graphics();
// circle
//   .beginFill(0xAA33BB)
//   .drawCircle(400, 200, 60)
//   .endFill()
//
// const text = new PIXI.Text('Hello, World', {
//   fontFamily: 'Montserrat',
//   fontSize: 48,
//   fill: 'deepskyblue',
//   letterSpacing: 3,
//   stroke: '#ffffff',
//   strokeThickness: 4,
//   dropShadow: true,
//   dropShadowDistance: 10,
//   dropShadowAngle: Math.PI / 2,
//   dropShadowBlur: 4,
//   dropShadowColor: '#000000',
// });

// app.stage.addChild(rectangle);
// app.stage.addChild(poly);
// app.stage.addChild(circle);
// app.stage.addChild(text);

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

// const char1Sprite = PIXI.Sprite.from('./images/char1.png');
// char1Sprite.anchor.set(0.5, 0.5);
// char1Sprite.x = app.view.width / 2;
// char1Sprite.y = app.view.height / 2;
// app.stage.addChild(char1Sprite);

// app.ticker.add(delta => loop(delta));
//
// const loop = () => {
//   char1Sprite.rotation += 0.01;
// }

// char1Sprite.eventMode = 'dynamic';
// char1Sprite.buttonMode = true;
//
// char1Sprite.on('pointerdown', () => {
//   char1Sprite.scale.x += 0.1;
//   char1Sprite.scale.y += 0.1;
// });
//
// document.addEventListener('keydown', (e) => {
//   switch (e.key) {
//     case 'ArrowRight':
//       return char1Sprite.x += 10;
//     case 'ArrowLeft':
//       return char1Sprite.x -= 10;
//     case 'ArrowUp':
//       return char1Sprite.y -= 10;
//     case 'ArrowDown':
//       return char1Sprite.y += 10;
//   }
// })
//
// const container = new PIXI.Container();
//
// const char2Sprite = PIXI.Sprite.from('./images/char2.png');
// char2Sprite.position.set(100, 100);
//
// const char3Sprite = PIXI.Sprite.from('./images/char3.png');
// char3Sprite.position.set(200, 200);
//
// const char4Sprite = PIXI.Sprite.from('./images/char4.png');
// char4Sprite.position.set(300, 300);
//
// container.addChild(char2Sprite);
// container.addChild(char3Sprite);
//
// app.stage.addChild(container);
//
// const init = async () => {
//   const texture = await PIXI.Assets.load('./images/char5.png');
//   const image = PIXI.Sprite.from(texture);
//   image.y = 300;
//   app.stage.addChild(image);
// }
//
// init();
