//[Creating the hero](https://matthewcranford.com/arcade-game-walkthrough-part-3-creating-a-hero/)
//[Tyler-FEND's FEND Project 3 Webinar](https://www.youtube.com/watch?v=j8BTkQWRUuY)

// TODO:Pseudo Code 
// 1.Contstructor
// 2.Properties x and y
// 3.Sprite Image
// 4.method
// 5.Update position 
// 6. collsion
// 7.win
// 8.render 
// 9.keyboard input 
// 10.reset hero 

//1. My Hero 
class Player {
    constructor() {
        this.sprite = 'images/char-princess-girl.png';
        this.x = this.startX;
        this.y = this.startY;
        this.step = 101;//column
        this.jump = 83;//rows 
        this.startX = this.step * 2;//10/6/2018 Rachael said Roderick helped her by doing it by blocks player is going to start 2 blocks
        this.starty = (this.jump * 4) + 55;//5 blocks down from the top
        this.speed = speed;
        this.win = false;
    }

    render() {
        
        ctx.drawImage(Resouces.get(this.sprite), this.x, this.y);
    }
    // 9. keyboard input 

    handleInput(input) {
        switch (input) {
            case 'left':
                if (this.x > 0) {
                    this.x -= this.step;
                }
                break;
            case 'up':
                if (this.x > this.jump) {
                    this.x -= this.jump;
                }
                break;
            case 'right':
                if (this.x > this.step * 4) {
                    this.x += this.step;
                }
                break;
            case 'down':
                if (this.x > this.jump * 4) {
                    this.x += this.jump;
                }
                break;
        }
    }
    update() {

        for (let enemy of allEnemies) {
            if (this.y === enemy.y && (enemy.x + enemy.step / 2 > this.x && enemy.x < this.x + this.step / 2)) {
                this.reset();
            }
        }
        if (this.y === 55) {
            this.win = true;
        }
    }
    reset() {
        this.y = this.startY;
        this.x = this.startX;
    }
};

let Enemy = function(x,y,speed){
    this.x = x;
    this.y = y + 55;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.step == 101;
    this.boundary = this.step *5;
    this.resetPos = this.step;
    this.width;
    this.height;
//reseting the game 
};
Enemy.prototype.update = function (dt) {
    if(this.x < this.boundary){
        this.x += this.speed *dt;
    
}else{
    this.x = this.resetPos;
};
}
//Puts the enemy on the screen 
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

document.addEventListener('keyup', function (e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// let Player = function (x, y, sprite) {
//     this.x = x;
//     this.y = y;
//     this.sprite = sprite;
//     //compensate for the white space around the sprites per Iloan 
//     this.height = 75;
//     this.width = 65;
// }

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

//Playing around more with Math.randon following Tyler-Fend's video 
let bugPos1 = Math.random()*100;
let bugPos2 = Math.random()*200 + 45;
let bugPos3 = Math.random()*300 + bugPos2;

console.log("Buggy!!"+ bugPos1 + bugPos2 + bugPos3);

const bug1 = new bug1(0,bugStartPos1);
const bug2 = new bug2(-40,bugStartPos2);
const bug3 = new bug3(-50,bugStartPos3);

const allEnemies = [];
const player = new Player(202,400, 'images/char-princess-girl.png');
allEnemies.push(bug1,bug2,bug3);
console.log(allEnemies);

 