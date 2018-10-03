##Rubric Criteria

[x] Player can not move off the screen (9/26/2018 app2.js)
[x] bugs cross the screen (9/26/2018 app2.js)
[] bug player collisions happen logically (not to early or late)
[] bug player collisions resets the game 
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