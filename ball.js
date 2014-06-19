/**
 * Created by Owner on 6/18/2014.
 */

var field = {
    top: 0
,   left: 0
,   width: 100
,   height: 100
};

var result = isBallInBoundsTF({x:150, y:50});
console.log(result);
var ball = {x:150, y:250, ob:{}}
var result = isBallInBounds(ball);
console.log(result, ball.ob);  //can create ball.ob. whatever on the fly in fn

function isBallInBoundsTF(ball) {  //returns true or false only
    if (ball.x < field.left) return false;
    if (ball.x > field.left +  field.width) return false;
    if (ball.y > field.height + field.top) return false;
    if (ball.y < field.top) return false;
    return true;
}

function isBallInBounds(ball) {
    ball.ob = {}; //reset for every check
    if (ball.x < field.left) ball.ob.left = true;
    if (ball.x > field.left +  field.width) ball.ob.right = true;
    if (ball.y > field.height + field.top) ball.ob.bottom = true;
    if (ball.y < field.top) ball.ob.top= true;
    var isOut = false;
    for (var side in ball.ob){
        if ( ball.ob[side])  isOut = true;
    }
    return !isOut
}