##Rubric Criteria

[x] Player can not move off the screen (9/26/2018 app2.js)

[x] bugs cross the screen (9/26/2018 app2.js)


[x] bug player collisions happen logically (not to early or late)(10/8/2018)

[x] bug player collisions resets the game (10/6/2018)

[x] something happens when the player collides with a bug 

[] something happens when the player wins 

9/20/2018 error message 

`app.js:106 Uncaught ReferenceError: posY is not defined
    at app.js:106
    at Array.forEach (<anonymous>)
    at app.js:105
(anonymous) @ app.js:106
(anonymous) @ app.js:105
app.js:75 Uncaught TypeError: Failed to execute 'drawImage' on 'CanvasRenderingContext2D': The provided value is not of type '(CSSImageValue or HTMLImageElement or SVGImageElement or HTMLVideoElement or HTMLCanvasElement or ImageBitmap or OffscreenCanvas)'
    at Player.render (app.js:75)
    at renderEntities (engine.js:156)
    at render (engine.js:141)
    at main (engine.js:48)
    at init (engine.js:68)
    at resources.js:60
    at Array.forEach (<anonymous>)
    at Image.img.onload (resources.js:60)`

    9/24/2018 
    going over walkthrough with Llon from saturday's study Jam 

    9/26/2018
    can not get the bugs to show up on either app.js or app2.js 
    error message on app2.js is

    Uncaught ReferenceError: x is not defined
    at new Enemy (app2.js:8)
    at enemyPosition.map (app2.js:54)
    at Array.map (<anonymous>)
    at app2.js:53

`Enemy @ app2.js:8
enemyPosition.map @ app2.js:54
(anonymous) @ app2.js:53
engine.js:93 Uncaught ReferenceError: allEnemies is not defined
    at updateEntities (engine.js:93)
    at update (engine.js:81)
    at main (engine.js:47)
    at init (engine.js:68)
    at resources.js:60
    at Array.forEach (<anonymous>)
    at Image.img.onload (resources.js:60)
updateEntities @ engine.js:93
update @ engine.js:81
main @ engine.js:47
init @ engine.js:68
(anonymous) @ resources.js:60
img.onload @ resources.js:60
load (async)
_load @ resources.js:49
(anonymous) @ resources.js:23
load @ resources.js:22
(anonymous) @ engine.js:171
(anonymous) @ engine.js:194`

with help from Mayguen on slack figure out that i forgot the (x,y) in the enemy function on line 7` 
9/28/2018 
created a collsion branch of my work 
worked with Ryan's walkthorugh on the arcade game to try and grasp the collision function 
also reveiwed Matt's tutorial on the collision 

created a new appJS folder mattWT, to try and figure out this collision thing 
Did a zoom meeting with Danny, worked through Lloan walkthrough but we still can not get the collision to work
Going to redo the OOP lessons and learn more about the constructor and class functions 

10/1/2018
Still trying to figure out the collision working on the app.js file and getting this error message

`Uncaught SyntaxError: Identifier 'Enemy' has already been declared
engine.js:93 Uncaught ReferenceError: allEnemies is not defined
    at updateEntities (engine.js:93)
    at update (engine.js:81)
    at main (engine.js:47)
    at init (engine.js:68)
    at resources.js:60
    at Array.forEach (<anonymous>)
    at Image.img.onload (resources.js:60)`

    10/2/2018 
    Finally have collision :)
    took over 2 hours to find a `{` and a `:`
    had some timing issues to 
    Alert is also working but I want to make that into a modal anyway 
    Need to add some sound also 
    *NOTES* ##LindsayC on slack

    So, the way I think about `this` is just thinking of it as this particular thing.

So for example, let's use your bugs.
:spider: :bug: :enemybug:

Just having all three of those bugs, `this` wouldnt refer to any of them.

But, if I was dealing with just one of those bugs, let's call it `this` :enemybug: bug. So this ladybug is `this` bug. It's easy to overcomplicate `this`. But, putting it plain in simple, you are just pointing to the thing you're looking for. If you were in a function using `this` :enemybug: .. Using `this` wouldn't give you any information about :spider: unless you were working in that particular bug's object.

Maybe that will help clear it up.

As for your collision function, It looks like you've been trying alot of things - but in my solution, I actually didn't even use this for the collision. All I did was have a function named `collisionCheck()` and it takes the `allEnemies` array and `forEach` through it. For each enemy, then I checked to see if they are in range of eachother and then if they were then reset the player.  Then I called the `checkCollisions()` in the update(dt) function in engine.js.

I remember struggling at this too, but it really helps to just `console.log` everything. That way you can start to put the pieces together to try to see what `this` is referring to, or what player.x or enemy.y is.

Please please please reach out if you need me to break this down further.

But the bulk of it that might be easier will start with something like
```function functionName() {
  allEnemies.forEach(enemyBug => {
console.log(enemyBug.x, enemyBug.y)
console.log(player.x, player.y)
}```

10/6/2018 

Still having issues with exact collison's after talking with several people, it was advised to try Matt's tutorial 
so I am now back to `Matt.js`
getting this error message though



`Matt.js:157 Uncaught ReferenceError: bug1 is not defined
    at Matt.js:157
(anonymous) @ Matt.js:157
engine.js:93 Uncaught ReferenceError: allEnemies is not defined
    at updateEntities (engine.js:93)
    at update (engine.js:81)
    at main (engine.js:47)
    at init (engine.js:68)
    at resources.js:60
    at Array.forEach (<anonymous>)
    at Image.img.onload (resources.js:60)`
*this is actually the console log to see where the bugs are at 
    `Buggy!!52.12249491146057159.31588613939073385.00525978360673`
    Chase Owens (FEND) [14 hours ago]
Mona, if your checkCollision function is in you Player object as a method, what are you checking for?

You are checking if (this.y === n && this.x < allEnemies[0].x +20 && this.x > allEnemies[0].x - 20) { this.reset } )


Chase Owens (FEND) [14 hours ago]
@Adventurenow (FEND) it was not a time issue. I just felt this would be a good alternative to a walkthrough. It does not offer as much support as a walkthrough, but it should offer enough support to lead users to successfully completing whatever they are working on.

@thenewmona {FEND}Michigan

After reviewing the handle Collision component, I'd love to hear what further questions or struggles you are contacting.


Chase Owens (FEND) [13 hours ago]
No worries :kanye_smile: (edited)


Also sent to the channel
thenewmona {FEND}Michigan [13 hours ago]
Hi @Chase Owens (FEND) here is my repo
https://github.com/thenewmona/monas-arcade-game
I am actually needing more of an understanding or clarity on how to figure out the math /logic for coming up with the answer for this project
I did another project that was specific to collision
A pong game, once again it was not really explained clearly how they got the #'s, just that I was using algebra, calculus , and some geometry
Links were even provided for us
Thanks
GitHub
thenewmona/monas-arcade-game
Contribute to thenewmona/monas-arcade-game development by creating an account on GitHub.
 
Chase Owens (FEND) [12 hours ago]
So what is your player's y-coordinate when colliding with the enemy on the bottom row? And the row above it? And the row above it?

To specify these possibilities, you need to identify starting position and distance of moving forward and back. (edited)


Also sent to the channel
thenewmona {FEND}Michigan [12 hours ago]
LOL, :slightly_smiling_face: that is the million dollar question, that is what I am needing help figure out how to find this information out
I just went through all my code to get rid of all my console logs, but I had to much info,
I created the alert so that I could figure out when I collide.
I am doing `console.log(allEnemies, player.y, player.x);`
per Matt's tutorial
only problem I am having is that this information comes up when the game starts not when the player collides with the bugs
I would also like to be able the get the grid information if possible like LLoan did in his walk through
https://snag.gy/L8J5X0.jpg (524 kB)
Unfortunately my repo is not up to date, I have been playing with the numbers .
Sorry (edited)


Chase Owens (FEND) [7 hours ago]
To figure it out write down the y-coordinate being used to place your Player on the board.

Next to it write the number of pixels your player moves when moving forward.

Then start hitting the up arrow. Count how many times it takes hitting up to get in the road.


Chase Owens (FEND) [6 hours ago]
Or just console.log(Player.y); This will give your conditional a start,

`if (this.y === n && allEnemies.x > this.x - 20) { this.reset() }` (edited)

10/7/2018 suggestion on collision from Tyler-Fend Webinar by 
##Michael Jackson
[HTML5 Canvas Game: 2D Collision Detection](https://blog.sklambert.com/html5-canvas-game-2d-collision-detection/)
[Sweet Alert Modal](https://sweetalert.js.org/guides/)

10/9/2018 Huge help from Rodrick showed me how to do a block so that the update would quit rendering and the player would reset 
created a git.ignore file 
ended up not doing the modal 