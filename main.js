function encode(phrase) {
    var result = "";
    // .. for each character in phrase
    for (var i = 0; i < phrase.length; i++) {
        // get the charCode if letter at index i
        var cc = phrase[i].charCodeAt(0);
        // add 13 to the letter's charCode
        if (cc > 96 && cc < 123) {
            cc += 13;
            if (cc > 122) {
                cc -= 26;
            }
        }

        result += String.fromCharCode(cc);

    }
    return result;
}

var hello = encode("hello");
console.log(hello);
var test = encode("a bb xx yy zz");
console.log(test);

function decode(phrase) {
    var result = "";

    for (var i = 0; i < phrase.length; i++) {

        var cc = phrase[i].charCodeAt(0);
        if (cc > 96 && cc < 123) {
            cc -= 13;
            if (cc < 97) {
                cc += 26;
            }
        }
        result += String.fromCharCode(cc);
    }
    return result;
}
console.log(decode(hello)); //---> "hello"
console.log(decode(test));
