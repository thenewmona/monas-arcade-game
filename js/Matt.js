//Enemies our player must avoid
let game = true; //per Lloan webinar 
let Enemy = function (x, y, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y + 55; //centering the enemy along the y axis
    this.speed = speed; // control how fast enemies move
    this.stepX = 101;//distance between blocks on x 
    this.stepY = 83;//distance between blocks on y 
    this.boundary = this.stepX * 5;
    this.resetPos = -this.stepX;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {

    if (this.x < this.boundary) {

        this.x += this.speed * dt;
    } else { // reset the player

        this.x = this.resetPos;
    }
};

// Draw enemy
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


let Player = function (x, y, speed) {
    this.sprite = 'images/char-princess-girl.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.stepX = 101;
    this.stepY = 83;
    this.startX = this.stepX * 2; // columns advice Racheal got from Rodrick, do it by they blocks
    this.startY = (this.stepY * 4) + 55; // rows numbers represent how many blocks , 55 comes from line 5
    this.x = this.startX;
    this.y = this.startY;
    this.won = false;

};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (keyEnter) {
    switch (keyEnter) {
        case 'left':
            if (this.x > 0) {
                this.x -= this.stepX;
            }
            break;
        case 'up':
            if (this.y > this.stepY) {
                this.y -= this.stepY;
            }
            break;
        case 'right':
            if (this.x < this.stepX * 4) {
                this.x += this.stepX;
            }
            break;
        case 'down':
            if (this.y < this.stepY * 4) {
                this.y += this.stepY;
                break;
            }
    }

}

Player.prototype.update = function () {

    for (let enemy of allEnemies) {
        if (this.y === enemy.y &&
            (enemy.x + enemy.stepX / 2 > this.x &&
                enemy.x < this.x + this.stepX / 2)) {
            this.reset();
        }
    }

    //won function needed here 
    if (this.y === 55) {
        this.won = true;
        
    }
}
// alert('Your Udacious!!!');

Player.prototype.reset = function () {
    this.y = this.startY;
    this.x = this.startX;
}

const player = new Player();
const bug1 = new Enemy(-101, 0, 175);
const bug2 = new Enemy(-101, 83, 300);
const bug3 = new Enemy((-101 * 2.5), 83, 300);
const allEnemies = [];
allEnemies.push(bug1, bug2, bug3);
console.log(allEnemies);



// provide by Udacity 

document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//per Lloan webinar 
function won() {
    reset();
    alert('you won!') //TODO need to make this a modal 
};

function reset() {
    this.y = this.startY;
    this.x = this.startX;
    allEnemies = [];
};