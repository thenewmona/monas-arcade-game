//per Ilon walkthrough 9/22/2018
// this is for debugging 
// let debug = false;
// let game = true;


let Enemy = function (x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
    //compensate for the white space around the sprites per Iloan 
    this.height = 65;
    this.width = 95;
};

Enemy.prototype.update = function (dt) {
    this.x += 150 *dt;
if (this.x > ctx.canvas.width + this.width){
    this.x = -200*Math.floor(Math.random() *4) + 1;
}
};
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

let Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-princess-girl.png'
    //compensate for the white space around the sprites per Iloan 
    this.height = 65;
    this.width = 95;
}

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function (dt) {

};

Player.prototype.handleInput = function (direction) {
    //line 137 engine.js 
    const horizontal = 101,//column
    vertical = 83;//row

    if (direction === 'left' && this.x - horizontal >= 0) {
        this.x -= horizontal;
    } else if (direction === 'right'&& this.x + horizontal < ctx.canvas.width) {
        this.x += horizontal;
    } else if (direction === 'down' && this.y + vertical < ctx.canvas.height -200){
        this.y += vertical;
    } else if (direction === 'up' && this.y - vertical > 0 - player.height) {
        this.y -= vertical;
    
    }
}

document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

const enemyPosition = [55, 150, 230];

const player = new Player(202, 400, 'images/char-princess-girl.png');

//enemy bug 

//  const allEnemies = [];

const allEnemies = enemyPosition.map((y, index) => {
    return new Enemy((-200 * (index + 1)), y);
});
console.log(allEnemies);