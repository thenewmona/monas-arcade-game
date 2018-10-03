//per walkthrough with Llon on Sept 22, 2018 
//this is for debugging 

let debug = false;
let game = true; 
//started project with this resource https://discussions.udacity.com/t/i-dont-understand-how-to-code-classic-arcade-game/527836/2
// Enemies our player must avoid
let Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    // Resets enemies postion to move across the screen again
    if (this.x > 550) {
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random() * 512);
    }

    //collison detection 
    if (player.x < this.x + 60 &&
        player.x + 37 > this.x &&
        player.y < this.y + 25 &&
        30 + player.y > this.y) {
        player.x = 200;
        player.y = 380;
    }
};

//enemy appears
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-princess-girl.png';
};

Player.prototype.update = function (dt) {
    //make sure the player doesn't go past the wall 
    if (this.y > 380) {
        this.y = 380;
    }

    if (this.x > 400) {
        this.x = 400;
    }

    if(this.x <0){
        this.x =0;
    } 

    //player hits the top wall
    if (this.y < 0) {
        this.x = 200;
        this.y = 380;
    }
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput =function(keyPress){
    switch (keyPress){
        case 'left':
        this.x -= this.speed + 50;
        break;
        case 'up':
        this.y -= this.speed + 30;
        break;
        case 'right':
        this.x += this.speed + 50;
        break;
        case 'down':
        this.y += this.speed + 30;
        break;
    }
};

//enemy
let Enemy = function(){
    this.sprite = 'images/enemy-bug.jpg';
    this.x = 10;
    this.y = 100;
};

// let Player = function(){
//     this.sprite = 'images/char-princess-girl.jpg';
//     this.x = 200;
//     this.y = 100;
// };

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Player();
    let enemy1 = new Enemy(-101,0.175);
    let enemy2 = new Enemy(-101,83,115);
    let enemy3 = new Enemy((-101*2.5),83,200);
    const allEnemies = [];
    allEnemies.push(enemy1,enemy2,enemy3);
    console.log(allEnemies);


//where the enemies start 
let enemyPosition = [60, 140, 220];
let player = new Player(200, 390, 50);
let enemy;

enemyPosition.forEach(function (PosY) {
    enemy = new Enemy(0, this.y, 100 + Math.floor(Math.random() * 512));
    allEnemies.push(enemy);
});

//This code provide by Udacity 
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };


    player.handleInput(allowedKeys[e.keyCode]);
});