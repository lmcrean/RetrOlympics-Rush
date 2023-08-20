//INITIATE KABOOM
kaboom({ width: window.innerWidth, height: window.innerHeight });

// LOAD ASSETS
// loadSprite("athlete", "assets/sprites/man.png");
loadSprite("athlete-1", "assets/images/athlete-1.png");
loadSprite("athlete-2", "assets/images/athlete-2.png");
loadSprite("athlete-3", "assets/images/athlete-3.png");
loadSprite("background", "assets/images/backgroundtwo.jpg");
loadSprite("athlete", "assets/sprites/man.png");
loadSprite("background", "assets/images/backgroundtwo.jpg");
loadSprite("olympicicon", "assets/sprites/parisolympics.png");
loadSprite("speaker", "assets/sprites/speaker.png");
loadSprite("speakeroff", "assets/sprites/speakeroff.png");
loadSound("gamemusic", "assets/sounds/running.wav");
loadSound("blip", "assets/sounds/blip.mp3");
loadSound("crash", "assets/sounds/collide.mp3");
loadSound("finalhit", "assets/sounds/finalhit.mp3");
loadSound("boing", "assets/sounds/mario-jump.mp3");
loadSound("bling", "assets/sounds/start.wav");
loadSound("gameoversound", "assets/sounds/game-over.mp3");
loadSprite("mainScreenBackground", "assets/images/gamestart3.jpg");
loadSprite("heart-icon", "assets/sprites/heart.png");

// Obstacles
loadSprite("barrier", "assets/images/obstacle/barrier.png");
loadSprite("cactus", "assets/images/obstacle/cactus.png");
loadSprite("cactusone", "assets/images/obstacle/cactusone.png");
loadSprite("circle", "assets/images/obstacle/circle.png");
loadSprite("coin", "assets/images/obstacle/coin.png");
loadSprite("col", "assets/images/obstacle/col.png");
loadSprite("crab", "assets/images/obstacle/crab.png");
loadSprite("dinosaur", "assets/images/obstacle/dinosaur.png");
loadSprite("flower", "assets/images/obstacle/flower.png");
loadSprite("flowera", "assets/images/obstacle/flowera.png");
loadSprite("flowerb", "assets/images/obstacle/flowerb.png");
loadSprite("godl", "assets/images/obstacle/godl.png");
loadSprite("greek", "assets/images/obstacle/greek.png");
loadSprite("heart", "assets/images/obstacle/heart.png");
loadSprite("hedge", "assets/images/obstacle/hedge.png");
loadSprite("hedgepix", "assets/images/obstacle/hedgepix.png");
loadSprite("horsea", "assets/images/obstacle/horsea.png");
loadSprite("olive", "assets/images/obstacle/olive.png");
loadSprite("plate", "assets/images/obstacle/plate.png");
loadSprite("scale", "assets/images/obstacle/scale.png");
loadSprite("statue", "assets/images/obstacle/statue.png");
loadSprite("torch", "assets/images/obstacle/torch.png");
loadSprite("tree", "assets/images/obstacle/tree.png");
loadSprite("treea", "assets/images/obstacle/treea.png");
loadSprite("vase", "assets/images/obstacle/vase.png");
loadSprite("vasea", "assets/images/obstacle/vasea.png");
loadSprite("vaseb", "assets/images/obstacle/vaseb.png");
loadSprite("vasec", "assets/images/obstacle/vasec.png");
loadSprite("vased", "assets/images/obstacle/vased.png");
loadSprite("vasee", "assets/images/obstacle/vasee.png");
loadSprite("venus", "assets/images/obstacle/venus.png");
loadSprite("wave", "assets/images/obstacle/wave.png");

//CONSTATNTS
const FLOOR_HEIGHT = 50;
const JUMP_FORCE = 1000;
const SPEED = 300;
//Centerwidth cw and centerheight of the current screen
const CW = width() / 2;
const CH = height() / 2;

const GAMEMUSIC = play("gamemusic", {loop:true, volume: 0})

// AUDIO

// Variable for controlling audio
let muted = true

// Audio btn
function audioBtn(p){
  //Add audio btn  
  const btn = add([
    pos(p),
    rect(80, 80, { radius: 8 }),
    area(),
    anchor("center"),
    outline(4),
  ])
  //add speaker as child object
  const btnicon = btn.add([
    sprite(muted ? "speakeroff": "speaker"),
    anchor("center"),
    scale(0.1)]);
  // Hover mouse functionality
  btn.onHoverUpdate(() => { btn.scale = vec2(1.2), setCursor("pointer")});
  btn.onHoverEnd(() => {btn.scale = vec2(1)});
  // Mute audio on click 
  btn.onClick(() =>{
    if(muted){
      muted = false,
      volume(0.5)
      btnicon.use(sprite("speaker"))
    }else{
      muted = true,
      volume(0.0)
      btnicon.use(sprite("speakeroff"))}
  });
  return btn
}

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
  //Default button sound effect
  btn.onClick(()=> play("blip"))
  // onClick() comes from area() component
  // it runs once when the object is clicked
  btn.onClick(f);

  return btn;
}

//START MENU
scene("startmenu", () => {
  GAMEMUSIC.volume = 0.5
  muted==true ? volume(0) : volume(0.5);

  add([
    sprite("mainScreenBackground", {
      width: width(),
      height: height(),
    }),
    area(),
    pos(0, 0),
  ]);

  addButton("Rules ←", vec2(400, 600), () => {
    go("rules");
  });

  addButton("Start ⏎", vec2(700, 600), () => {
        go("game");
        //Mute music before starting the game
        GAMEMUSIC.volume = 0
    });
  
  addButton("Credits →", vec2(1000, 600), () => {
      go("credits");
  });

    // Audio button
    audioBtn(vec2(width() - 90, 90))

});

// INITIATE GAME
go("startmenu");

scene("rules", () => {
  add([
    color(60, 50, 168),
    rect(width(), height()),
    pos(0, 0),
  ]);

  add([
    text("Rules:"),
    pos(width() / 2, height() / 2),
    scale(2),
    anchor("center")
  ]);

  addButton("Go back ←", vec2(400, 600), () => {
    go("startmenu");
  });
})

scene("credits", () => {
  add([
    color(60, 50, 168),
    rect(width(), height()),
    pos(0, 0),
  ]);

  add([
    text("Credits:"),
    pos(width() / 2, height() / 2),
    scale(2),
    anchor("center")
  ]);

  addButton("Go back ←", vec2(400, 600), () => {
    go("startmenu");
  });
})

//GAMEPLAY//
scene("game", () => {
  //Soundeffect
  const startMusic = play("bling")

  
  // Draw the background image onto the canvas
  const bgImage = add([
    sprite("background", {
      width: width(),
      height: height(),
    }),
    area(),
    pos(0, 0),
  ]);

  // Audio button
  audioBtn(vec2(width() - 90, 90))

  // initialize life counter
  let remainingLives = 5;

  // add heart icons to frontend
  const lifeHearts = Array.from({ length: remainingLives }, (_, i) =>
    add([
      sprite("heart-icon"),
      pos(CW + i * 40 - (remainingLives - 1) * 20, 40),
      scale(0.5),
    ])
  );



  // define gravity
  setGravity(1600);
  // ===============================================================
  let currentFrame = 0;

  // Define an array for the running animation frames
  const runAnim = [sprite("athlete-1"), sprite("athlete-2")];
  const sitAnim = [sprite("athlete-1"), sprite("athlete-3")];

  const player = add([
    // Use the initial frame of the animation
    runAnim[currentFrame],
    pos(200, 200),
    area(),
    body(),
  ]);

  let isSitting = false;
  const frameInterval = 0.2; // Animation frame interval

  // Function to make the player sit
  function sit_jump() {
    // Only sit if the player is on the ground and not already sitting
    if (player.isGrounded() && !isSitting) {
      isSitting = true;
      player.use(sitAnim[1]);
      wait(0.2, () => {
        jump_plus();
      });

      // Wait for 2 seconds before transitioning back to running animation
      wait(0.2, () => {
        player.use(runAnim[0]);
        isSitting = false;
      });
    }
  }

  // Animation loop using loop function
  loop(frameInterval, () => {
    if (!isSitting) {
      currentFrame = (currentFrame + 1) % runAnim.length;
      player.use(runAnim[currentFrame]);
    }
  });
  // ===============================================================
  // floor
  add([
    rect(width(), FLOOR_HEIGHT),
    outline(4),
    pos(0, height()),
    anchor("botleft"),
    area(),
    body({ isStatic: true }),
    color(93, 67, 44),
  ]);

  function jump() {
    if (player.isGrounded()) {
      play("boing"); //Soundeffect
      setGravity(1700); // Set gravity to 1600
      player.jump(JUMP_FORCE);
      
    }
  }

  function jump_plus() {
    if (player.isGrounded()) {
      play("boing");//Soundeffects
      setGravity(1100); // Set gravity to 1600)
      player.jump(JUMP_FORCE);
    }
  }

  // jump when user press space
  onKeyPress("space", jump);
  onKeyPress("up", jump);
  onKeyPress("down", sit_jump);

  // Obstacles
  function spawnTree() {

    // Define obstacles
    const obstacle = choose(["barrier", "cactus", "cactusone", "circle", "coin", "col", "crab", "dinosaur", "flower", "flowera", "flowerb", "godl", "greek", "heart", "hedge", "hedgepix", "horsea", "olive", "plate", "scale", "statue", "torch", "tree", "treea", "vase", "vasea", "vaseb", "vasec", "vased", "vasee", "venus", "wave"]);

    
    // Add tree obj
    add([
      sprite(obstacle),
      scale(rand(0.2, 0.4)),
      area(),
      outline(4),
      pos(width(), height() - FLOOR_HEIGHT),
      anchor("botleft"),
      color(255, 180, 255),
      move(LEFT, SPEED),
      "fence",
    ]);

    // wait a random amount of time to spawn next tree
    wait(rand(2, 3), spawnTree);
  }

  // start spawning trees
  spawnTree();

  // decrement life and game over condition
  player.onCollide("fence", () => {
    //Soundeffect
    play("crash")
    
    remainingLives--;

    if (remainingLives <= 0) {
      destroy(lifeHearts.pop()); // remove the last heart icon
      addKaboom(player.pos)
      play("finalhit")
      setTimeout(() => {
        go("lose", score);
        startMusic.volume = 0 // turn startmusic volume down
      }, 600);
    } else {
      destroy(lifeHearts.pop()); // remove one heart from health bar
    }
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
  //Soundeffects
  const gameOver = play("gameoversound");

  // Background Color
  add([rect(width(), height()), pos(0, 0), color(60, 50, 168)]);

    // Audio button
    audioBtn(vec2(width() - 90, 90));

  // Add Olympic Icon
  add([sprite("olympicicon"), pos(CW, CH - 250), scale(2), anchor("center")]);

  //Add Game Over Text
  add([text("Game Over"), pos(CW, CH - 150), scale(2), anchor("center")]);

  //Add Athelete img
  add([sprite("athlete-1"), pos(CW, CH), scale(1), anchor("center")]);

  //Display score
  add([text(score), pos(CW, CH + 150), scale(2), anchor("center")]);

  //Add Retry and Menu buttons for player to navigate
  addButton("Retry", vec2(CW - 150, CH + 250), () => {
    go("game");
    //mute gameover music
    gameOver.volume = 0
  });

  addButton("Menu", vec2(CW + 150, CH + 250), () => {
    go("startmenu");
    //mute gameover music
    gameOver.volume = 0
  });
});
