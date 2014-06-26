/**
 * Created by Owner on 6/25/2014.
 */
var replace2 = {a:1, b:2, o:3};

var str = "baobab";
var nums = []
//var arr = str.split("");
console.log(str);
for (var i = 0; i< str.length; i++){
   nums.push(replace2[str[i]])
}

console.log(nums)
