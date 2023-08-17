

<h1 align="center"><strong>👨‍🔧👨🏻‍🔧👸🏼🍄🐲 Retro Quest 🐲🍄👸🏼👨🏻‍🔧👨‍🔧</strong>

</h1>


![Summer of Code Banner](https://res.cloudinary.com/djdefbnij/image/upload/v1690795830/FB9845D5-2359-4863-B550-E76853BCFEC7-1_cmkyvh.jpg)

# SUBMISSION
## Deployment
#### _(please note, your team must also include the deployed links in the usual submission in Hackapp)_
This project is deployed and can be accessed at [http://your-deployed-link.com](http://your-deployed-link.com).

## Criteria
In this section, we will briefly discuss how our team addressed the applicable criteria:

- ✨ Project is 100% Front End
- ✨ Project must be retro inspired, inspired by actual retro game
- ✨ Project has neon and 80s music
- ✨ Basic Readme.md in place
- ✨ Use Frameworks such as *Kaboom.js, phaser.js, three.js, babylon.js, pixi.js*

# ABOUT SUBMISSION
## Intro
One or two paragraphs providing an overview of our project

## Goal
The goal section provides a concise summary of the main objective or purpose of the project or software described in this README. It addresses the following aspects:

- ➡️ Problem Statement
- ➡️ Objective(s)
- ➡️ Target Audience
- ➡️ Benefits

## Controls
Describe briefly how the player controls the game.

## Tech
In the tech section, we provide information about the technology stack, dependencies, and any technical details related to the project.

## Credits
We would like to give credit to the following individuals, organizations, and resources that have contributed to the project or provided inspiration:

### Resources consulted


When coming up with ideas for the game, it was important to select a popular concept. Most popular concepts included.

- Chrome Dino
- Flappy Bird


Other more ambitious concepts included
- Mario
- Zelda
- Pokemon
- Space Invaders
- Tetris
- Pacman
- 
#### KaBoom.js

- https://kaboomjs.com/
- https://kaboomjs.com/doc/intro 

#### Reverse Flappy Game, "Learn to Make a Game with Kaboom.js in 39 Minutes - Step-by-Step Tutorial", 

- Youtube Tutorial https://youtu.be/hgReGsh5xVU
- Repo for code https://replit.com/@ykdojo/flappy-2#code/main.js

a flying version of the "chrome dino" game. 

The demo shows someones process of making a game with Kaboom.js. It was very helpful to see how they structured their code and how they used the Kaboom.js library.

MVP Features included
- Sprite character 
  - that would be stick to the same place in the viewport while the background changed.
  - The sprite could move up and down
- a Background that would change when the player up and down in the game
  - obstacles that would appear in the background

Extra features included
- a score that would increase as the sprite passed one onstacle
- music that would play in the background
- sound effects, e.g. "woosh" when the sprite moved up and down

Limitations of the project
- appeared to be limited to smaller viewport sizes. When the viewport was increased, the obstacles would not fill the screen.
- Reverse flappy didn't appear to run at all

#### Make a game in just one minute tutorial

https://youtube.com/shorts/zMPjJHrurbA?feature=share

https://github.com/KungFuCodingTutorials/kaboom/tree/main

very simple "chrome-dino" game and seems to work well.

![](assets/media/issues/2023-08-17-12-13-43.png)

```js
const FLOOR_HEIGHT = 150;
const JUMP_FORCE = 800;
const SPEED = 480;

// initialize kaboom
kaboom();

// Load assets
loadSprite('mascotte','mascotte.png');

scene("game", () => {

    // define gravity
    gravity(2400);

    // add the character
    const player = add([
        sprite("mascotte"),
        scale(0.5),
        pos(0,40),
        area(),
        body()
    ])

    // floor
    add([
        rect(width(),FLOOR_HEIGHT),
        outline(4),
        pos(0,height()),
        origin("botleft"),
        area(),
        solid(),
        color(127,200,255),
    ])

    // Write a function for jump
    function jump(){
        if(player.isGrounded()){
            player.jump(JUMP_FORCE);
        }
    }

    // jUMP WHEN PRESS THE SPACE BAR
    onKeyPress("space",jump);
    onClick(jump);


    // spawn obstacoles
    function spawnObject(){
        add([
            rect(48,rand(32,96)),
            area(),
            outline(4),
            pos(width(),height() - FLOOR_HEIGHT),
            origin("botleft"),
            color(255,180,255),
            move(LEFT,SPEED),
            "tree"
        ]);

        // spawn randomly
        wait(rand(0.5,1.5),spawnObject);
    }
    spawnObject();



    // lose if collide with object
   let score = 0;
   player.onCollide("tree", function(){
       go("lose",score);
       burp();
       addKaboom();
   })

   const scoreLabel = add([
       text(score),
       pos(24,24),
   ])

   // Increment the score
   onUpdate(function(){
       score++;
       scoreLabel.text = score;
   })

   scene("lose", function(score){
       add([
           sprite("mascotte"),
           pos(width()/2,height()/2),
           scale(1),
           origin("center"),
       ]);

       // display score
       add([
           text(score),
           pos(width()/2,height()/2 + 40),
           scale(1),
           origin("center"),

       ])

       //go back to game on press space
       onKeyPress("space", function(){
           go("game");
       });
       onClick(function(){
           go("game"); 
       })
   })

});
go("game");
```

#### Chrome Dino game
https://youtu.be/w4TFHO3fioE

#### Space invaders, Mario and Zelda tutorial with Kaboom.js

https://youtu.be/4OaHB0JbJDI

Supplies code in the links below the video

there's another video here by the same person that shows how to make Mario https://youtu.be/2nucjefSr6I

The only reservation is that it appears more complex than the other tutorials. It's not clear if it's a good idea to use this tutorial as a starting point.




#### Mark's Food Place 
https://erikgxdev.itch.io/marks-food-place

the player drags the items on to the plate to make a meal. The game is a good example of how to use the drag and drop feature in Kaboom.js

no code documentation
