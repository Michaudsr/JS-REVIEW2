
function isInside(array, ele){
    const inArray = array.indexOf(ele);
    if (inArray > -1 ){
        return true;
    } else {
        return false;
    }
}
 
console.log(isInside(['rome', 'steven', 'pete'], 'steven'));


function luckySevens(max){
    let newArray = [];
    for(let i = 1; i <= max; i++){
        if(i % 7 === 0){
            newArray.push(i);

            
        }
    
    }
    return newArray
}
console.log(luckySevens(42));

// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('General Assembly'); //=> 'ylbmessA lareneG'
function reverseStr(str) {
    // Array of the split string
    const stringToArray = str.split("");
    // Reversed Array
    const reversedArray = stringToArray.reverse()
    // Joined Array
    const joinedArray = reversedArray.join("")
    return joinedArray
}
console.log(reverseStr("General Assembly"));
// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]
function copyMachine(element, num) {
    let newArray = [];
    for(let i = 0; i < num; i++) {
        newArray.push(element)
    }
    return newArray
}
console.log(copyMachine('candy', 3))


// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]


const sentence = 'The dog walks down the street and barks at the mailman'
// write a function that takes a sentence as a parameter
// const functionName = (parameter) => {} 
const everyOtherWord = (str) => { 
    // write a variable
    let everyOther = []
    // just spilt the function into an array
    console.log(str)
    let splitString = str.split(' ');
    // interate thru array
    for (let i = 0; i < splitString.length; i++){
        // return every other word
        //return every other index
        // coditional statement for every other index 
        if (i % 2 == 0) {
            // put every other value in everyOther if even 
            everyOther.push(splitString[i])
        }
    } 
    // return everOther 
    console.log(everyOther);
    return everyOther
}

everyOtherWord(sentence)



// ### wordYeller
// ```js
// // Write a function `wordYeller(sentence)` that takes in a sentence string as
// // input. It should return the sentence where every word has an exclamation
// // point behind it, except words that already have punctuation. Punctuation
// // marks are ". , ! ? ; :"
// //
// // Example 1
// // let sent = "Stop it now! Please, wont you stop?";
// // let yelledWords = wordYeller(sent);
// // yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
// //
// // Example 2
// // let words = "Go to the store and grab the following: milk, bread, run, and cake";
// // wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true
// ```


let generalAssembly = 'General Assembly has the best software engineering course ever!'


const wordYeller = (sentence) => {

    
    let spiltArray = sentence.spilt('')
    let emptyArray = []
    for (let i = 0 ; i < spiltArray.length; i ++){
        var letter = spiltArray.shift() 
        if (letter == '.'|| letter == ',' || letter == '!' || letter == '?' || letter == ';' || letter == ':'){
            emptyArray.push(letter)
        } else if (letter == ' ' && emptyArray[emptyArray.length - 1 ] !=='.' && emptyArray[emptyArray.length - 1 ] !==',' && emptyArray[emptyArray.length - 1 ] !=='!' && emptyArray[emptyArray.length - 1 ]!=='?' && emptyArray[emptyArray.length - 1 ] !==';' && emptyArray[emptyArray.length - 1 ] !==':' ){
            emptyArray.push('!');
            emptyArray.push(letter)

        } else {
            emptyArray.push(letter);
        }

    }
    let finalString = emptyArray.join('');
    return finalString
}   

console.log(wordYeller(generalAssembly));


// ### arraySubstring
// ```js
// // Write a function `arraySubstring(words, str)` that takes in an array of
// // strings and a string as arguments and returns an array where each element is
// // replaced with true if the string is a substring of the element and false if
// // it is not.
// //
// // Examples:
// //
// // arraySubstring(["hello", "history", "helix", "hellos"],"hel")
// // => [true, false, true, true]
// // arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// // => [true, false, false, true]


function arraySubstring(words, str) {
    const result = [];
    for( let i = 0; i < words.length; i++) {
        if (words[i].includes(str)) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
}
 console.log(arraySubstring(["hello", "history", "helix", "hellos"],"hel"));



// #### evenCaps
// ```js
// // Write a function evenCaps(sentence) that takes in a sentence as an
// // argument and returns the same string with each even index being
// // capitalized. Index 0 counts as even.
// //
// // Examples:
// //
// // evenCaps("Tom got a small piece of pie")
// // => "ToM GoT A SmAlL PiEcE Of pIe"
// // evenCaps("the book is in front of the table")
// // => "ThE BoOk iS In fRoNt oF ThE TaBlE"
// ```

function evenCaps(sentence) {
    const arrayOne = [];
    for ( let i = 0; i < sentence.length; i++){
        
        if (i % 2 == 0){
            arrayOne.push(sentence[i].toUpperCase()); 
        } else {
            arrayOne.push(sentence[i]);
        }

    }
    console.log(arrayOne.join(''));

}

evenCaps("Tom got a small piece of pie")
