/**
 * Created by Owner on 6/25/2014.
 */
var arr2 = [1,2,[3,4],[5,6,7,[8,9]]];
//use Array.isArray(arg)
var newArr2 = [];
console.log(arr2);
//var newb = flattenArray(arr2, newArr2);
var nA = flatten(arr2)
console.log(nA);

function flatten(array){
    var flat = [];
    array.forEach(function(item){
        if (Array.isArray(item)) flat = flat.concat(flatten(item));
        else flat.push(item);
    });
return flat;
}

