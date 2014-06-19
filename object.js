var arr = [1,2,3];
console.log(arr.toString());
console.log(arr);
console.log(arr.join(","));
console.log(arr.concat(5,6,7,8));
console.log((join(arr, "--")));

function join(arr, str){
    var output = "";
    arr.forEach(function (item, idx){
        output += item;
        if (idx < arr.length-1) output += str;

    });
    return output;
}

var arr_string = "1.234,2,3"; //convert string to array
console.log(arr_string.split(","));      //returns array))
var arr2 = arr_string
  .split(",")
  .map(function(str){ //map allows to change values
        return parseFloat(str);
    });
console.log("arr2, ",arr2);

var items=[];
arr.forEach(function(item, idx){
    items[idx] = parseFloat(item);
});
console.log("items, ", items);