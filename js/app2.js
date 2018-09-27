//per Ilon walkthrough 9/22/2018
// this is for debugging 
// let debug = false;
// let game = true;


let Enemy = function (x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function (dt) {

};

Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

let Player = function (x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-princess-girl.png'
}

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function (dt) {

};

document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

const enemyPosition = [55,150,230];

const player = new Player(202,400,'images/char-princess-girl.png');

//enemy bug 

//  const allEnemies = [];

const allEnemies = enemyPosition.map((y,index)=> {
    return new Enemy ((-200*(index +1)), y);
});
