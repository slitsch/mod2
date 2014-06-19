/**
 * Created by Owner on 6/18/2014.
 */
var sum = add1(4,8);

function add1(x,y){  //x and y declared in fn and valid in scope of fn only
    return x + y;
}

console.log(add1(3,4));
console.log(sum);

//anonymous fn not very good practice, used with asynchronous operation
//console.log(add(3,2)) //THIS BREAKS BECAUSE BEFORE ANONYMOUS FN ASSIGNED TO ADD
var add = function(x,y){
    return x+y
};
console.log(add(3,4));

//local v. global vars
var test = "me";
var sum2 = add2(4,8);

console.log("sum2= " + sum2);
console.log("test after fn run, unchanged = "+ test);

function add2(x,y){  //x and y declared in fn and valid in scope of fn only
    var test = "changed";//without var, changed scope of var test
    console.log("var test scope in fn add2, ",test);
    return x + y;
}


//anon fn to protect local vars, can put all code in here
(function(){

})();

/**
 * HashMap which can use objects as keys
 */
/*function HashMap(array, isolatedUid) {
    if (isolatedUid) {
        var uid = 0;
        this.nextUid = function() {
            return ++uid;
        };
    }
    forEach(array, this.put, this);
}

//hash map
var hm = new HashMap();
hm.put("key","val");
*/
//generate var str 2 ways, 2nd has object properties fo string
var str1 = "Test";
 var str = new String("Test");
console.log(str.toLowerCase());
console.log(str1.toLowerCase());

//
console.log("**more scope issues**");
c = 5;
d = 6;
var obj3 = {
    c: 3,
    d: 2
};
console.log(obj3);
console.log(addx(obj3));

function addx(){
    //console.log(this)
    return this.c + this.d
}


//arguments to function
console.log("Add4 function iterates over array of numbers");
console.log(add4(1,2,3,4));
console.log(add4(1,2,add4(3,4))) ;//can reuse fn
function add4(){
    var sum = 0;
    for (var i=0; i< arguments.length; i++){
        sum += arguments[i];
    }
    return sum
}

//use array with for each, instead of for loop
console.log("iterate over array in 3 ways");
[1,2,3,4].forEach(function (val4, idx) {
    console.log(idx,val4*2)
});

//callback eg
var callback = function(val4, idx){
    console.log(idx,val4);
};
var arr5 = [1,2,3,4,5];
arr5.forEach(callback);
forEach(arr5, callback);
function forEach(arr5, fn){
    for( var i = 0; i < arr5.length; i++){
        fn(arr5[i], i);
    }
}
var sumV = 0;
arr5.forEach(function(val){
    sumV += val;
});
console.log(sumV);

for(var i=0;i<arr5.length; i++){
    console.log(i, arr5[i]);
}