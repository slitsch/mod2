/**
 * Created by Valued Customer on 7/2/2014.
 * Coding ideas from NW

 */

/*String stuff
* write a fn that escapes html entities like "&" -> amp*/

var inputText = "Hi! & Bye #1";

var result = escapeInputText(inputText);
console.log(result)

function escapeInputText(str){
    var arr = str.split('');
    var escaped = []
    arr.forEach(function (letter){
        switch (letter) {
            case "!":
                letter = "&excl";
                escaped.push(letter);
                break;
            case "&":
                letter = "&amp";
                escaped.push(letter);
                break;
            case "#":
                letter = "&num";
                escaped.push(letter);
                break;
            case "%":
                letter = "&percnt";
                escaped.push(letter);
                break;

            default:
                escaped.push(letter);
        }
    });

    return escaped.join('')
}

function unEscapeText(str){

}