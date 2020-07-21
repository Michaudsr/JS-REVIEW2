// let name = 'Steven'
// let age = 27;
// let isCool = true;
// const friends = ['Tyler', 'Brandon', 'Tony', 'Cody', 'Rachel'];
// const truck = 'chevrolet'



// const tesla = {
//     Industry: 'Electric Cars',
//     ceo: 'Elon Musk',
//     yearFounded: 2003,
//     foundingMembers: ['Elon Musk', 'JB Straubel', 'Martin Eberard'],
//     stockTicker: 'TSLA',
//     vehicles: {
//         vehicleOne: 'Model S',
//         vehicleTwo: 'Model X',
//         vehicleThree: 'Model 3'
//     },
//     print: function(){
//         console.log('Hello, this works with objects')
//     }

// }

// tesla.stockPrice = 1643.00;

// console.log(name);
// console.log(age);
// console.log(isCool);
// console.log(friends);
// console.log(tesla);
// console.log(tesla.vehicles.vehicleThree);

// tesla.print();

// // function printFriends(array){
// //     array.forEach(friends => {
// //         console.log(friends);
// //     });


// // // }
// // // printFriends(friends);
// // // printFriends(tesla.foudningMembers)

// // function printName(element) {
// //     console.log(element);
// // }
// // friends.forEach(function(friends) {
// //     printName(friend);
// // });

// // standard function

// function addNumbers(num1, num2){
//     return num1 + num1;

// }

// // function expression
// const multiplyNumbers = function(num1, num2){
//     return num1 * num2;
// }

// // arrow function

// const subtractNumbers = (num1, num2) => {
//     return num1 - num2;
// }

// // DOM

// const container = document.querySelector('.container');
// console.log(container);
// // created a element
// const headerTwo = document.createElement('h2');
// headerTwo.textContent = 'My First JS Review';

// container.appendChild(headerTwo);

// // add a class to

// headerTwo.classList.add('subtitle', 'header-two');
// // headerTwo.setAttribute('class', 'header-two');
// //remove class from headerTwo
// headerTwo.classList.remove('header-two');
// console.log(headerTwo);

// headerTwo.addEventListener('click', function() {
//     headerTwo.textContent = 'Steven';
// });

// // make another element
// const headerThree = document.createElement('h2');
// headerThree.textContent = 'Friends';

// container.appendChild(headerThree);
// console.log(headerThree);

// const list = document.createElement('ul');

// // iterate through my friends array
// for (let i = 0; i < friends.length; i ++) {
//     let eachFriend = friends[i];
    
    
    
//     // reference each friend
//     // create a li
//     // add textContent to that li
//     // append that to a ul (unordered list)
    
// const listItem = document.createElement('li');
// listItem.textContent = eachFriend;

// list.appendChild(listItem);


// }

// console.log(list);

// headerThree.addEventListener('click', function(){
//     container.appendChild(list);

// });


// // Problem Solving

// // what do I start with
// // what do I hope to end up with

// // understand the problem
// // where the issue start and..

// // break it down into more manageable problems

// // fizzBuzz
// // Write a function that does the following:
//     // takes in an array
//     // check each number in the array
//     // if the number is divisible 5 and 3 === fizzBuzz
//     // if the number is divisble by 3 === Fizz
//     // if the number is divisible by 5 === 'Buzz'

//     // for example:
//     // [3, 5, 15, 20, 9, 7]
//     // ['Fizz', 'Buzz', 'FizzBuzz', 'Fizz', 'Buzz', 7]

//     // i need to set up an empty
//     // iterate through the array that going to be passed in
//     // check the remainder of each element
//     // push the result of each element inside the result array
//     // result that result array


//     function fizzBuzz(array) {
//         let result = [];

//         for (let i = 0; i < array.length; i++){
//             let num = array[i];
//             console.log(num); // 3, 5, 15, ...

//             if (num % 3 === 0 && num % 5 === 0){
//                 result.push('FizzBuzz');
//                 // do something

//             }else if (num % 3 === 0){
//                 result.push('Fizz');
//                 // do something

//             } else if (num % 5 === 0){
//                 result.push('Buzz')

//             } else { 
//                 result.push(num);

//             }
//         }   



//         return result;
//     }

// console.log(fizzBuzz([3, 5, 15, 20, 9, 7]));

// // - [ ] Do I understand what the prompt is asking?
// // - [ ] Am I able to break the problem down?
// // - [ ] What is my strategy for solving the problem?
// // - [ ] Do I understand what my code is doing?
// // - [ ] Am I able to foresee any edge cases?
// // - [ ] Am I able to track the order of the code that is being executed?
// // - [ ] Am I able to track the values of the variables?
// // - [ ] Am I able to walk through my code line by line with an example?
// // - [ ] Do I have a working solution?



// # JS Problem Solving
// Practice pair programming for each problem. Switch roles every 10 mins.
// Be sure to `console.log` to make sure that you got a working solution.
// Ask yourself the following questions with each problem:
// - [ ] Do I understand what the prompt is asking?
// - [ ] Am I able to break the problem down?
// - [ ] What is my strategy for solving the problem?
// - [ ] Do I understand what my code is doing?
// - [ ] Am I able to foresee any edge cases?
// - [ ] Am I able to track the order of the code that is being executed?
// - [ ] Am I able to track the values of the variables?
// - [ ] Am I able to walk through my code line by line with an example?
// - [ ] Do I have a working solution?
// ### isInside


/////////////////////////

function isInside(array, ele){
    const inArray = array.indexOf(ele);
    if (inArray > -1 ){
        return true;
    } else {
        return false;
    }
}
 
console.log(isInside(['rome', 'steven', 'pete'], 'steven'));
////////////////

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


