//per Ilon walkthrough 9/22/2018
// this is for debugging 
let debug = false;
let game = true;


var Enemy = function() {
   
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
   
};

let player = function () {
    this.sprite =
}
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


const player = [];
const allEnemies = [];
