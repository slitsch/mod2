/**
 * Created by Owner on 6/23/2014.
 */
var name =  "bob hope"
var names = (upperCaseFirstLetter0(name));
console.log(names);

console.log((upperCaseFirstLetter(name)));
console.log((upperCaseFirstLetter1(name)));

//Clunky method forEach, use map instead
function upperCaseFirstLetter0(str){
    var arr = str.split(" ");
    var capitalised = []
    arr.forEach(function(word){
        word = word[0].toUpperCase() + word.substring(1).toLowerCase();
        console.log(word)
        capitalised.push(word);
      });
    return capitalised.join(" ")
}

//map method
function upperCaseFirstLetter(str){
    var arr = str.split(" ");

    var capitalized = arr.map(function(word){
    //    debugger;
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    });
    //debugger;
    return capitalized.join(" ")
}

//more succinct
function upperCaseFirstLetter1(str){
    var arr = str.split(" ");

    return arr.map(function(word){
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }).join(" ");
}

//var str = "[abc;@gmail.com";  //\[abc;@gmail\.com
var str = "abc@gmail.com"; //abc@gmail\.com

str1 = escapeRegExp(str)
console.log(str1)
function escapeRegExp(string){
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

