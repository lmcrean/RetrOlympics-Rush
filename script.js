//INITIATE KABOOM
kaboom({ width: window.innerWidth, height: window.innerHeight });

// LOAD ASSETS
// loadSprite("athlete", "assets/sprites/man.png");
loadSprite("athlete-1", "assets/images/athlete-1.png");
loadSprite("athlete-2", "assets/images/athlete-2.png");
loadSprite("athlete-3", "assets/images/athlete-3.png");
loadSprite("background", "assets/images/backgroundtwo.jpg");
loadSprite("athlete", "assets/sprites/man.png");
loadSprite("olympicicon", "assets/sprites/parisolympics.png");
loadSprite("speaker", "assets/sprites/speaker.png");
loadSprite("speakeroff", "assets/sprites/speakeroff.png");
loadSprite("mainScreenBackground", "assets/images/backgroundeiffel.png");
loadSprite("heart-icon", "assets/sprites/heart.png");
loadSprite("logo", "assets/images/logotorchclip.png");
loadSprite("downkey", "assets/images/downbutton.png");
loadSprite("upkey", "assets/images/upbutton.png");
loadSprite("spacebar", "assets/images/spacekey.png");
loadSprite("gameoverbackground", "assets/images/gameoverbackground.png");
loadSprite("gameoverwords", "assets/images/gameoverwords.png");

//Sound Sprites
loadSound("titlemusic", "assets/sounds/title-music.mp3");
loadSound("gamemusic", "assets/sounds/running.wav");
loadSound("blip", "assets/sounds/blip.mp3");
loadSound("crash", "assets/sounds/collide.mp3");
loadSound("finalhit", "assets/sounds/finalhit.mp3");
loadSound("boing", "assets/sounds/mario-jump.mp3");
loadSound("startsound", "assets/sounds/short-start.mp3");
loadSound("gameoversound", "assets/sounds/game-over.mp3");

//Obstacles
loadSprite("barrier", "assets/images/obstacle/barrier.png");
loadSprite("cactus", "assets/images/obstacle/cactus.png");
loadSprite("cactusone", "assets/images/obstacle/cactusone.png");
loadSprite("circle", "assets/images/obstacle/circle.png");
loadSprite("coin", "assets/images/obstacle/coin.png");
loadSprite("col", "assets/images/obstacle/col.png");
loadSprite("crab", "assets/images/obstacle/crab.png");
loadSprite("dinosaur", "assets/images/obstacle/dinosaur.png");
loadSprite("flower", "assets/images/obstacle/flower.png");
loadSprite("flowera", "assets/images/obstacle/flower.png");
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

// AUDIO
const GAMEMUSIC = play("titlemusic", {loop:true, paused: true, volume: 0.5})
// Variable for controlling audio
let muted = true

// Audio btn
function audioBtn(p, musicArray){
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
    for(music of musicArray){
        music.paused = muted
      }
  });
  return btn
}

// ONCLICK BUTTON
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
  GAMEMUSIC.paused= muted
  muted==true ? volume(0) : volume(0.5);
  
  add([
    sprite("mainScreenBackground", {
      width: width(),
      height: height(),
    }),
    area(),
    pos(0, 0)
  ]);

  //Add logo
  add([sprite("logo"),pos(CW-300, CH-350), scale(1)])

  addButton("Rules ←", vec2(CW - 400, CH + 200), () => {
    go("rules");
  });

  addButton("Start ⏎", vec2(CW, CH + 200), () => {
        go("game");
    });
  
  addButton("Credits →", vec2(CW + 400, CH + 200), () => {
      go("credits");
  });

    // Audio button
    audioBtn(vec2(width() - 90, 90), [GAMEMUSIC])

});


//Rules Scene
scene("rules", () => {
  setBackground(60, 50, 168)
  
  const textbox = add([
    rect(width() - 200, 600, { radius: 32 }),
    anchor("center"),
    pos(center().x, center().y),
    outline(4),
  ])

  add([
    text("Game Rules"),
    pos(center().x, CH-250),
    scale(2),
    anchor("center"),
    color(0,0,0),
  ]);

  function generateText(line, height){
    add([
      text(line),
      pos(center().x, height),
      scale(1),
      anchor("center"),
      color(0,0,0),
    ]);
  }

  generateText("Avoid oncoming objects, by performing a", CH-150)
  generateText("small jump (up-key/space-bar)", CH-35)
  generateText("or a big jump (down-key).", CH+90)
  generateText("Running to an obstacle causes you to loose a medal.", CH+150)
  generateText("Game finishes once all 5 medals are lost.", CH + 200)

  add([sprite("upkey"),pos(CW-30, CH-130), scale(0.5)])
  add([sprite("spacebar"),pos(CW +115, CH-130), scale(0.5)])
  add([sprite("downkey"),pos(CW + 75, CH - 5), scale(0.5)])

  addButton("Go back ←", vec2(CW, CH + 360), () => {
  go("startmenu");
  });
})


//Credits Scene
scene("credits", () => {
  setBackground(60, 50, 168)
  
  const textbox = add([
    rect(width() - 200, 600, { radius: 32 }),
    anchor("center"),
    pos(center().x, center().y),
    outline(4),
  ])

  add([
    text("Credits"),
    pos(center().x, CH-250),
    scale(1.2),
    anchor("center"),
    color(0,0,0),
  ]);

  function generateText(line, height, textSize){
    add([
      text(line),
      pos(center().x, height),
      scale(textSize),
      anchor("center"),
      color(0,0,0),
    ]);
  }
  generateText("Alena", CH-200, 0.8)
  generateText("Design, Sourcing media, Obstacle Logic", CH-175, 0.6)
  generateText("Berat", CH-125, 0.8)
  generateText("Score logic, remaining lives feature, sourcing media", CH-100, 0.6)
  generateText("Chinonso", CH-50, 0.8)
  generateText("Menu logic, Graphics", CH-25, 0.6)
  generateText("Gennadiy", CH+25, 0.8)
  generateText("Double Jump features, technical support", CH+50, 0.6)
  generateText("Hilla", CH +100, 0.8)
  generateText("JavaScript lead, SFX logic and technical support", CH+125, 0.6)
  generateText("Tina", CH+175, 0.8)
  generateText("Mute button", CH + 200, 0.6)
  generateText("© 2023 [The Olympians | Code Institute]", CH + 250, 0.8)

  addButton("Go back ←", vec2(CW, CH + 360), () => {
    go("startmenu");
  });
});

// INITIATE GAME
go("startmenu");

//GAMEPLAY//
scene("game", () => {
  //Soundeffect
  GAMEMUSIC.paused= muted
  const startMusic = play("startsound")

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
  audioBtn(vec2(width() - 90, 90), [GAMEMUSIC])

  // initialize life counter
  let remainingLives = 5;

  // add heart icons to frontend
  const lifeHearts = Array.from({ length: remainingLives }, (_, i) =>
    add([
      sprite("coin"),
      pos(CW + i * 40 - (remainingLives - 1) * 20, 40),
      scale(0.1),
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

  function spawnTree() {

    // obstacles
    const obstacle = choose(["barrier", "cactus", "cactusone", "circle", "coin", "col", "crab", "dinosaur", "venus", "flower", "flowera", "heart", "hedge", "hedgepix", "horsea", "olive", "plate", "scale", "statue", "torch", "tree", "treea", "vase", "vasea", "vaseb", "vasec", "vased", "vasee", "venus", "wave"]);
    
    // add tree obj
    add([
      sprite(obstacle),
      scale(0.3),
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
        GAMEMUSIC.volume = 0 // turn startmusic volume down
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

  // Background image
  add([
    sprite("gameoverbackground", {
      width: width(),
      height: height(),
    }),
    area(),
    pos(0, 0)
  ]);

    // Audio button
    audioBtn(vec2(width() - 90, 90), []);

  // Add Olympic Icon
  add([sprite("gameoverwords"), pos(CW, CH - 170), scale(0.5), anchor("center")]);

  //Add Score Text
  add([text("score"), pos(CW, CH + 100), scale(1), anchor("center")]);

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
