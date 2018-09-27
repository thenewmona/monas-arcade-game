9/20/2018 error message 
app.js:106 Uncaught ReferenceError: posY is not defined
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
    at Image.img.onload (resources.js:60)

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
Enemy @ app2.js:8
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
(anonymous) @ engine.js:194
with help from Mayguen on slack figure out that i forgot the (x,y) in the enemy function on line 7 
