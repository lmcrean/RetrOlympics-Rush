const FLOOR_HEIGHT = 48;
const JUMP_FORCE = 1000;
const SPEED = 300;

// initialize context
// kaboom({
//   width: 1500,
//   height: 800,
// });
kaboom({ width: window.innerWidth, height: window.innerHeight });

// load assets
// loadSprite("athlete", "assets/sprites/man.png");
loadSprite("athlete-1", "assets/images/athlete-1.png");
loadSprite("athlete-2", "assets/images/athlete-2.png");
loadSprite("background", "assets/sprites/backgroundtwo.jpg");

// LOAD ASSETS
loadSprite("athlete", "assets/sprites/man.png");
loadSprite("background", "assets/sprites/backgroundtwo.jpg"); 

//START MENU
function addButton(txt, p, f) {
  // add a parent background object
  const btn = add([
    rect(240, 80, { radius: 8 }),
    pos(p),
    area(),
    scale(1),
    anchor("center"),
    outline(4),
  ]);

  // add a child object that displays the text
  btn.add([text(txt), anchor("center"), color(0, 0, 0)]);

  // onHoverUpdate() comes from area() component
  // it runs every frame when the object is being hovered
  btn.onHoverUpdate(() => {
    const t = time() * 10;
    btn.color = hsl2rgb((t / 10) % 1, 0.6, 0.7);
    btn.scale = vec2(1.2);
    setCursor("pointer");
  });

  // onHoverEnd() comes from area() component
  // it runs once when the object stopped being hovered
  btn.onHoverEnd(() => {
    btn.scale = vec2(1);
    btn.color = rgb();
  });

  // onClick() comes from area() component
  // it runs once when the object is clicked
  btn.onClick(f);

  return btn;
}

addButton("Start", vec2(700, 600), () => {
  go("game");
});

//GAMEPLAY//
scene("game", () => {
  // Draw the background image onto the canvas
  const bgImage = add([
    sprite("background", {
      width: width(),
      height: height(),
    }),
    area(),
    pos(0, 0),
  ]);

  // define gravity
  setGravity(1600);
  // ===============================================================
  let currentFrame = 0;

  // Define an array for the running animation frames
  const runAnim = [sprite("athlete-1"), sprite("athlete-2")];

  const player = add([
    // Use the initial frame of the animation
    runAnim[currentFrame],
    pos(200, 200),
    area(),
    body(),
  ]);

  // Define a loop to change the runner's sprite frame
  loop(0.2, () => {
    currentFrame++;
    if (currentFrame >= runAnim.length) {
      currentFrame = 0;
    }
    player.use(runAnim[currentFrame]);
  });
  // add a game object to screen
  //   const player = add([
  //     // list of components
  //     sprite("athlete"),
  //     pos(80, 40),
  //     area(),
  //     body(),
  //   ]);
  // ===============================================================
  // floor
  add([
    rect(width(), FLOOR_HEIGHT),
    outline(4),
    pos(0, height()),
    anchor("botleft"),
    area(),
    body({ isStatic: true }),
    color(127, 200, 255),
  ]);

  function jump() {
    if (player.isGrounded()) {
      player.jump(JUMP_FORCE);
    }
  }

  // jump when user press space
  onKeyPress("space", jump);
  onClick(jump);

  function spawnTree() {
    // add tree obj
    add([
      rect(48, rand(32, 96)),
      area(),
      outline(4),
      pos(width(), height() - FLOOR_HEIGHT),
      anchor("botleft"),
      color(255, 180, 255),
      move(LEFT, SPEED),
      "fence",
    ]);

    // wait a random amount of time to spawn next tree
    wait(rand(1, 2), spawnTree);
  }

  // start spawning trees
  spawnTree();

  // lose if player collides with any game obj with tag "tree"
  player.onCollide("fence", () => {
    // go to "lose" scene and pass the score
    go("lose", score);
    // audio file goes here "play()"
    addKaboom(player.pos);
  });

  // keep track of score
  let score = 0;

  const scoreLabel = add([text(score), pos(24, 24)]);

  // increment score every frame
  onUpdate(() => {
    score++;
    scoreLabel.text = score;
  });
});

//GAME OVER SCREEN
scene("lose", (score) => {
  add([sprite("athlete-1"), pos(width() / 2, height() / 2 - 80), scale(1), anchor("center")]);

  // display score
  add([text(score), pos(width() / 2, height() / 2 + 80), scale(2), anchor("center")]);

  // go back to game with space is pressed
  onKeyPress("space", () => go("game"));
  onClick(() => go("game"));
});
