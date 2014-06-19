

/*v("hi") */
/* function v(val){
     console.log(val)
 } */

var para = "hi there\n" +
    "nice to meet you\n" +
    "Thanks"
console.log(para);

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
//Hash object
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
/*
console.log("coordArr ex")
var coordArr = [[1,2,3],[4,6,8]];
console.log(coordArr[0][1])
var point = {
    x:1,
    y:2,
    z:3
    //ts:date.now()
};
var coordPts = [point,point] ;
console.log(coordPts[0].y)
*/
var key = "name";
var nate = {name:"Nate"};
var sam = {name: "Sam"};
var people = [nate,sam];
console.log(people[0].name);
console.log(people[0]["name"]);
console.log(people[0][key]);

var obj = {
    name: "Nate",
    email: "nw@white.net"
};
var obj2 = obj;
    obj.email = "_@nw.is";  //THIS CHANGES EMAIL IN obj2 ALSO; THIS IS MUTABLE
//it is because storing a ref to something, ot changing value

var a = 2;
var b = a;
a = 3;
console.log(b);

var age = 18;
if (age >= 21){
   //do true
    console.log(age)
}else {
    // false: off with his head!
}

if (age >= 21){
    //do true
    console.log(age)
}else if(age >= 18) {
    //off to war
}else{
    // false: off with his head!
}
if (!name1){
    name1 = "John"
    console.log(name1)
};

//var name = "sam"
var name1 = "Ellen";
switch (name1){
    case "Nate":
        console.log(name1);
    case "Ellen":
        console.log(name1);
        break; //drops out of switch
    default:
        console.log("No name")
}
console.log("\n---for loops: array---");
var pList = ["Nate", "Sam"];
for(var i = 0; i < pList.length; i++){
    console.log(pList[i])
}
console.log("\n---for loops : hash---");
//for each (people){}
for (name in people){
    console.log(people[name])
}
console.log("\n---conditional---");
//conditional, if name has a value, assign to n1, else "default"
var n1 = name || "default"
//conditional assignment if x>y, nate, else someone
var x = 1; var y = 2;
var n2 = (x > y) ? "nate" : "someone"
console.log(n2);

console.log("\n---while---");
while(y >= x){
    console.log(y,x);
    x +=0.5
}

console.log("\n---for loops : hash---");
var types = {
    string: "a string",
    number: 42,
    boolean: true,
    array: [1,2,3,4]
    };

var key;

for (key in types){
    console.log(key, types[key]);
}

var i;
console.log("\n---iterating array---");
for (i=0; i< types.array.length; i++){
    console.log(i, types.array[i]);
}

if (types.number === 42){
    console.log("The Answer to the Ultimate Question")
}