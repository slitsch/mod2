/**
 * Tic tac to game
 */

var ttt1 = [["x",'x',''],
           ['x','x','o'],
           ['o','x','']];
var lengtht = 3;
var results = [ ];
console.log(ttt1[0][1]);
var tic = checkHorizontal(ttt1);
var tac = checkDiagonal(ttt1);
var toe = checkVertical(ttt1);
console.log(results);

function checkHorizontal(ttt){
    //ttt.forEach(function (row, col) {
    for (var i = 0; i < lengtht; i++){
        var j = 0;
        if (ttt[i][j] === ttt[i][j+1] && ttt[i][j] === ttt[i][j+2]) {
            results.push(i, true);
            }
            else {results.push("row" +i +": "+false);
           // if results.length === 2: results.push(i)}
        }
    }
    return results
}

function checkDiagonal(ttt){
    var i = 0;
    var j = 0;
        if (ttt[i][j] === ttt[i+1][j+1] && ttt[i][j] === ttt[i+2][j+2]) {
            results.push("ltoRdiag: "+ true);
        }
        else {results.push("ltoRdiag: "+ false);
            // if results.length === 2: results.push(i)}
        }
        if (ttt[i][j+2] === ttt[i+1][j+1] && ttt[i][j+2] === ttt[i+2][j]) {
        results.push("rtoLdiag: "+ true);
        }
        else {results.push("rtoLdiag: "+ false);
        // if results.length === 2: results.push(i)}
    }
    return results
}

function checkVertical(ttt){
    //ttt.forEach(function (row, col) {
    for (var j = 0; j < lengtht; j++){
        var i = 0;
        if (ttt[i][j] === ttt[i+1][j] && ttt[i][j] === ttt[i+2][j]) {
            results.push("column"+j+ ": "+ true);
        }
        else {results.push("column"+j+ ": "+ false);
            // if results.length === 2: results.push(i)}
        }
    }
    return results
}
