

/*v("hi") */
/* function v(val){
     console.log(val)
 } */

var para = "hi there\n" +
    "nice to meet you\n" +
    "Thanks"
console.log(para)

/*console.log("hi");*/

var test_array = new Array();
var x;
for (i = 0; i < 10; i++) {
    test_array[i] = i;
   x = test_array[i];
   console.log(test_array[i])
}
x = test_array[4]
console.log(x)

var me = {
    name : "sam",
    age: 2
};
console.log(me.name);

for (var i=0; i<5; i++)  {
    console.log(me.name + " " + test_array[i])}


/*arrays start with 0 index */
var temps = [67,72,75,83,82,79]
console.log(temps[0]);
console.log(temps.length);
console.log(temps.pop());
console.log(temps);

var coordArr = [[1,2,3],[4,6,8]];
console.log(coordArr[0][1])
var point = {
    x:1,
    y:2,
    z:3
    //ts:date.now()
};
var coordPts = [point,point] ;
console.log([0].y)