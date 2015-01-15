function encode13(phrase) {
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

console.log("---------------ENCODE13-------------");
var hello = "hello";
console.log(encode13(hello));
var test = "a bb xx yy zz";
console.log(encode13(test));

function decode13(phrase) {
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

console.log("---------------DECODE13-------------");
console.log(decode13(encode13(hello))); //---> "hello"
console.log(decode13(encode13(test)));


function encode(phrase, rotation) {
    var result = "";
    var rotationCheck = Math.round(rotation);
    if (rotationCheck !== rotation) {
        rotation = rotationCheck;
        console.log("Rotation rounded to nearest integer.");
    }
    for (var i = 0; i < phrase.length; i++) {
        var cc = phrase[i].charCodeAt(0);
        if (cc > 96 && cc < 123) {
            cc += rotation;
            // if rotation > -1, while (cc > 122), -= 26

            // if rotation < 0, while (cc < 97), += 26
            if (rotation > -1) {
                while (cc > 122) {
                    cc -= 26;
                }
            } else {
                while (cc < 97) {
                    cc += 26
                }
            }
        }
        result += String.fromCharCode(cc);
    }
    return result;
}


console.log("---------------ENCODE-------------");
console.log(encode(hello, 13));
console.log(encode(test, 13));
console.log(encode(hello, 26));
console.log(encode(test, 26));
console.log(encode(hello, 39));
console.log(encode(test, 39));
console.log(encode(hello, 39.4));
console.log(encode(hello, 39.5));
console.log(encode(test, 65));
console.log(encode(hello, 22));
console.log(encode(test, 300));
console.log(encode(hello, -8));
console.log(encode(test, -44));

function decode(phrase, rotation) {
    var result = ""
    var rotationCheck = Math.round(rotation);
    if (rotationCheck !== rotation) {
        rotation = rotationCheck;
        console.log("Rotation rounded to nearest integer.");
    }
    for (var i = 0; i < phrase.length; i++) {
        var cc = phrase[i].charCodeAt(0)
        if (cc > 96 && cc < 123) {
            cc -= rotation;
            if (rotation > -1) {
                while (cc < 97) {
                    cc += 26
                }
            } else {
                while (cc > 122) {
                    cc -= 26;
                }
            }
        }
        result += String.fromCharCode(cc);
    }
    return result;
}

console.log("---------------DECODE-------------");
console.log(decode(encode(hello, 13), 13));
console.log(decode(encode(test, 13), 13));
console.log(decode(encode(hello, 26), 26));
console.log(decode(encode(test, 26), 26));
console.log(decode(encode(hello, 39), 39));
console.log(decode(encode(test, 39), 39));
console.log(decode(encode(hello, 39.4), 39.4));
console.log(decode(encode(hello, 39.5), 39.5));
console.log(decode(encode(test, 65), 65));
console.log(decode(encode(hello, 22), 22));
console.log(decode(encode(test, 300), 300));
console.log(decode(encode(hello, -8), -8));
console.log(decode(encode(test, -44), -44));
