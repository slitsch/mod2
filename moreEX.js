
var x = 4;
test();
console.log(x);

function test(){
    x = 5; //print x = 5 above
    var x = 5; //
}

arr = [1,2,3,5];
var in5 = arr.indexOf(5);
console.log(in5);
//console.log(arr.sort(function(a,b)))
//need to return 1,0,-1

//arr.reverse();//reverses existing order
console.log(arr.push(2)); //returns new length of array
console.log(arr);
console.log(arr.sort());//in asc only

var brr = [[1,2,3],[3,4,5],[7,5,4],[2,3,4]];
console.log(brr);
console.log(brr.sort());
console.log(brr.indexOf("b"));  //-1 because false
console.log(brr.indexOf(1)); //-1, not an element
console.log(brr.indexOf([1,2,3])); //-1 why?


//arr.forEach(function(iter){}) ; //can define fn separately
//arr.forEach(iterate);

var crr = [1,2,3,15, 20];
//crr.filter(
var newarr = crr.map(function (item) {
     if  (item > 10) {return item}
    else return 0
});
console.log(newarr);

console.log(Math.ceil(4.32));5
console.log(Math.floor(4.56));4
console.log(Math.round(4.56));5