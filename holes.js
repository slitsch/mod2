
    /* check for holes in text
    font would make a difference
    put lookup into fn so it is not overwritten
    or could wrap it in a different fn
    */

var holes = countHoles("Holes in the text");
console.log(holes);

function countHoles(str) {
    var lookup = {
    0:1,4:1,6:1,8:2,9:1//numbers
    , a:1,b:1,d:1,e:1,g:1,o:1,p:1,q:1 //lowercase
    , A:1,B:2,D:1,O:1,P:1,Q:1,R:1//UC
};
    var count = 0;
    for (var i=0; i<str.length; i++){
        var num =  lookup[str[i]] || 0;
       // if (isNaN(num))num = 0;
        count += num
    }
    return count
}
//Another method
var holeCount = (function(lookup){
        return function(text){
            return text.split("")
                .map(function(char){return lookup[char]||0 })
                .reduce(function(prev, curr){return prev + curr},  0)
        }
    })({
        0:1,4:1,6:1,8:2,9:1//numbers
            , a:1,b:1,d:1,e:1,g:1,o:1,p:1,q:1 //lowercase
            , A:1,B:2,D:1,O:1,P:1,Q:1,R:1//UC
  }  );

var t = holeCount("Help0");
    console.log(t)
