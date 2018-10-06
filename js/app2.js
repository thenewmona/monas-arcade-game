//per Ilon walkthrough 9/22/2018
// https://www.youtube.com/watch?time_continue=35&v=oz7pHJ65TEk
// this is for debugging 
// let debug = false;
 let game = true;


let Enemy = function (x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
    //compensate for the white space around the sprites per Iloan 
    this.height = 40;
    this.width = 65;
    this.collision = false;
};

Enemy.prototype.update = function (dt) {
    this.x += 150 *dt;
if (this.x > ctx.canvas.width + this.width) {
    this.x = -200*Math.floor(Math.random() *4) + 1;
} else {
    this.x += 200 *dt;
}

    if (collision(player.x, player.y, player.width, player.width, this.x, this.y, this.width, this.height,)){
        this.collision = true;
        if (player) {
            player.x =200;
            player.y =410;
        }
      alert ('try again');
    }else{    
        this.collision = false;
        
    } 
};    

//Puts the enemy on the screen 
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

let Player = function (x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    //compensate for the white space around the sprites per Iloan 
    this.height = 75;
    this.width = 65;
}

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function (dt) {
if (game && player.y < 40) {
    game = false;
    setTimeout(() => {
        alert("you won!");//TODO modal needed here 
    }, 250)
    won();
}
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
    
    };
};



//instantiation of the player and bugs 

const enemyPosition = [100, 200, 250];
const player = new Player(175, 410,  'images/char-princess-girl.png');
//enemy bug 

let allEnemies = enemyPosition.map((y, index) => {
    return new Enemy ((-200 * (index + 1)), y);
      
;
});

document.addEventListener('keyup', function (e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


 function won () {
     reset ();
     //alert('you won!')//TODO need to make this a modal 
 };

function reset () {
    allEnemies = [];
};
console.log(allEnemies);
function collision (px,py,pw,ph,ex,ey,ew,eh){
    return (Math.abs(px - ex * 2 < pw + ew) && Math.abs (py - ey) *2 < ph + eh);
    }
    
    