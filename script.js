const FLOOR_HEIGHT = 48;
const JUMP_FORCE = 1000;
const SPEED = 300 ;

// initialize context
kaboom();

// load assets
loadSprite("athlete", "assets/images/athlete.png");
 
scene("game", () => {

    // define gravity
    setGravity(1600);

    // add a game object to screen
    const player = add([
        // list of components
        sprite("athlete"),
        pos(80, 40),
        scale(0.2),
        area(),
        body(),
    ]);

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
        wait(rand(1 , 2 ), spawnTree);

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

    const scoreLabel = add([
        text(score),
        pos(24, 24),
    ]);

    // increment score every frame
    onUpdate(() => {
        score++;
        scoreLabel.text = score;
    });

});

scene("lose", (score) => {

    add([
        sprite("athlete"),
        pos(width() / 2, height() / 2 - 80),
        scale(1),
        anchor("center"),
    ]);

    // display score
    add([
        text(score),
        pos(width() / 2, height() / 2 + 80),
        scale(2),
        anchor("center"),
    ]);

    // go back to game with space is pressed
    onKeyPress("space", () => go("game"));
    onClick(() => go("game"));

});

go("game");