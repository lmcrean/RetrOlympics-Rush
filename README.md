<div align=center>

<h1><strong>Retro Olympic Sidescroller Project</strong></h1>

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Kaboom.js](https://img.shields.io/badge/Kaboom.js-%23E34F26.svg?style=for-the-badge&logo=kaboom.js&color=%3343330)

<img src="assets/screenshots/gameplay-recording-intro.gif" width =400>
</div>

# SUBMISSION
## Deployment
#### _(please note, your team must also include the deployed links in the usual submission in Hackapp)_
This project is deployed and can be accessed at [https://lmcrean.github.io/Retro-Olympic-Sidescroller/](https://lmcrean.github.io/Retro-Olympic-Sidescroller/).

## Criteria
In this section, we will briefly discuss how our team addressed the applicable criteria:

- ✨ Project is 100% Front End
- ✨ Project must be retro inspired, inspired by actual retro game
- ✨ Project has neon and 80s music
- ✨ Basic Readme.md in place
- ✨ Use Frameworks such as *Kaboom.js, phaser.js, three.js, babylon.js, pixi.js*

Our team addressed the criteria by organising our project into User Stories, then further breaking down with the MoSCoW Prioritisation method.

### User Stories

As a player, I need the design on Desktop and Mobile.

As a player, I need the design to be consistent, with a Retro 1980’s Olympic theme.

As a player, I want to be able to see my score on the screen and have an idea of how I’m doing in the game.

As a player, I want to be able to control my character.

As a player, I need to be able to easily start the game when I want.

As a player, I need to be able to control the volume.

As a player, I want to be able to view the tutorials any time that I want.

As a player, I want to be able to see animations as my character moves in the environment.

As a player, I want to be able to interact with obstacles with the right level of challenge.

As a player, I need to be able to see the Game Over page with appropriate features e.g. Restart, see score.

As a player, I need to experience the appropriate level of difficulty and challenge.


### User Stories with MoSCoW method

**As a player, I need the design on Desktop and Mobile** 

*Team member: Alena*
- Desktop first [must have]   
- CSS embedded [must have]
- Mobile version [should have]

***

**As a player, I need the design to be consistent, with a Retro 1980’s Olympic theme.**

*Team member: Alena* 
- [x] Pngs and backgrounds [Must have]
- Audio files [must have]
- Figma Wireframe
- [x] Color scheme - olympic colors, CI requires bright neon
- [x] Nods to Paris 2024

***


**As a player, I want to be able to see my score on the screen and have an idea of how I’m doing in the game**

*Team member: Berat* 
- Scoreboard [must have]

***

**As a player, I want to be able to control my character**

*Team member: HMuraja*
- [ ] establish controls for player [must have]
- [x] player can jump [must have]
- establish special moves for player [could have]

***

**As a player, I need to be able to easily start the game when I want**

*Team member: dcsndevs* 
- Welcome page Modal [must have]
- [x] Start button [must have]
- Tutorial link [should have]

***

**As a player, I need to be able to control the volume**

*Team member: Inser* 
- [ ] Start with mute button [must have] 
- Specific volume controls [should have]

***

**As a player, I want to be able to view the tutorials any time that I want**

*Team member: HMuraja*

- [ ] tutorial modal popup [must have]
- [ ] helpful and accessible visuals [must have]

***

**As a player, I want to be able to see animations as my character moves in the environment**
*Team member: HMuraja* 

- 2 frames to start off [must have]
- Includes any backgrounds/ obstacles (could have)

***


**As a player, I want to be able to interact with obstacles with the right level of challenge**

*Team member: Gennadiy*.
- [x] … kills the character when collides [must have]
- [x] …. Leads to standard game over screen [must have]
- [ ] Leads to custom game over screen [must have]

***


**As a player, I need to be able to see the Game Over page with appropriate features e.g. Restart, see score.**

*Team member: Gennadiy*
- [ ] customized Game over screen [must have]
- Restart button [must have]

***

**As a player, I need to experience the appropriate level of difficulty and challenge**

- [ ] Points System - 10 points per jump [must have] <i>-- Berat </i>
- Speed of environment 
- Frequency of obstacles  
- Time Allowance e.g. in 10 seconds without bumping 
- Type of obstacles e.g. high blocks, low blocks
- Life System (immediate death? (start here) 3 lives -1 life? [Could have]) 
- Max Score (could have).

***

# ABOUT SUBMISSION
## Intro
One or two paragraphs providing an overview of our project

## Goal
The goal section provides a concise summary of the main objective or purpose of the project or software described in this README. It addresses the following aspects:

- ➡️ Problem Statement
- ➡️ Objective(s)
- ➡️ Target Audience
- ➡️ Benefits

## Controls and Features
The player controls the game with a start button, jump feature.

Features include a scoreboard and game over screen.

### Start Button
<img src="assets/screenshots/start-feature.gif" width =400>

### Jump Feature
<img src="assets/screenshots/gameplay-recording-intro.gif" width=400>

The player can use the spacebar to jump. The player can use the mouse to click on the screen to jump.

### Score
The scoreboard is tracked in the top-left corner, it updates as the player advances through the assault course and is displayed as a final score in the "game over screen".

### Game Over
<img src="assets/screenshots/gameover.png" width=400>


## Tech
In the tech section, we provide information about the technology stack, dependencies, and any technical details related to the project.

Kaboom.js

## Credits
We would like to give credit to the following individuals, organizations, and resources that have contributed to the project or provided inspiration:

### Resources consulted

- Simple sidescroller games were researched as they had well resourced tutorials and were easy to implement

#### KaBoom.js Resources

- https://kaboomjs.com/
- https://kaboomjs.com/doc/intro 

  ***
#### Flappy Bird Resources

##### Reverse Flappy Game, "Learn to Make a Game with Kaboom.js in 39 Minutes - Step-by-Step Tutorial", 

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

#### The Easiest Flappy Bird Tutorial Ever? - Beginner Javascript Game - Vanilla JS
https://youtu.be/3SsYZDJdeXk

***
Chinonso here: Just checking to see my first commit works fine.