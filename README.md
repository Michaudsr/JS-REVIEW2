## Examples of Data Types
```
 let name = 'Steven'
 let age = 27;
 let isCool = true;
 const friends = ['Tyler', 'Brandon', 'Tony', 'Cody', 'Rachel'];
 const truck = 'chevrolet


 const tesla = {
     Industry: 'Electric Cars',
     ceo: 'Elon Musk',
     yearFounded: 2003,
     foundingMembers: ['Elon Musk', 'JB Straubel', 'Martin Eberard'],
     stockTicker: 'TSLA',
     vehicles: {
         vehicleOne: 'Model S',
         vehicleTwo: 'Model X',
         vehicleThree: 'Model 3'
     },
     print: function(){
         console.log('Hello, this works with objects')
     }

 }

 tesla.stockPrice = 1643.00
 console.log(name);
 console.log(age);
 console.log(isCool);/ console.log(friends);
 console.log(tesla);
 console.log(tesla.vehicles.vehicleThree);

 tesla.print();

 function printFriends(array){
     array.forEach(friends => {
        console.log(friends);
         }
         printFriends(friends);
         printFriends(tesla.foudningMembers)

 function printName(element) {
    console.log(element);
 }
 friends.forEach(function(friends) {
     printName(friend);
 });

```

## Examples of Functions
```

// standard function

function addNumbers(num1, num2){
    return num1 + num1;

}

// function expression
const multiplyNumbers = function(num1, num2){
    return num1 * num2;
}

// arrow function

const subtractNumbers = (num1, num2) => {
    return num1 - num2;
}
```

## DOM Munipulation
```

// DOM

const container = document.querySelector('.container');
console.log(container);
// created a element
const headerTwo = document.createElement('h2');
headerTwo.textContent = 'My First JS Review';

container.appendChild(headerTwo);

// add a class to

headerTwo.classList.add('subtitle', 'header-two');
// headerTwo.setAttribute('class', 'header-two');
//remove class from headerTwo
headerTwo.classList.remove('header-two');
console.log(headerTwo);
```

```
// iterate through my friends array
for (let i = 0; i < friends.length; i ++) {
    let eachFriend = friends[i];
    
    
    
    // reference each friend
    // create a li
    // add textContent to that li
    // append that to a ul (unordered list)
    
const listItem = document.createElement('li');
listItem.textContent = eachFriend;

list.appendChild(listItem);


}

console.log(list);
// listen for a click
headerThree.addEventListener('click', function(){
    container.appendChild(list);

});
```
## Problem Solving
```

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


     function fizzBuzz(array) {
         let result = [];

         for (let i = 0; i < array.length; i++){
             let num = array[i];
             console.log(num); // 3, 5, 15, ...

             if (num % 3 === 0 && num % 5 === 0){
                 result.push('FizzBuzz');
                 // do something

             }else if (num % 3 === 0){
                 result.push('Fizz');
                 // do something

             } else if (num % 5 === 0){
                 result.push('Buzz')

             } else { 
                 result.push(num);

             }
         }   



         return result;
     }

console.log(fizzBuzz([3, 5, 15, 20, 9, 7])); - [ ] Do I understand what the prompt is asking - [ ] Am I able to break the problem down - [ ] What is my strategy for solving the problem - [ ] Do I understand what my code is doing - [ ] Am I able to foresee any edge cases - [ ] Am I able to track the order of the code that is being executed - [ ] Am I able to track the values of the variables - [ ] Am I able to walk through my code line by line with an example - [ ] Do I have a working solution


 # JS Problem Solving
 Practice pair programming for each problem. Switch roles every 10 mins.
 Be sure to `console.log` to make sure that you got a working solution.
 Ask yourself the following questions with each problem:
 - [ ] Do I understand what the prompt is asking?
 - [ ] Am I able to break the problem down?
 - [ ] What is my strategy for solving the problem?
 - [ ] Do I understand what my code is doing?
 - [ ] Am I able to foresee any edge cases?
 - [ ] Am I able to track the order of the code that is being executed?
 - [ ] Am I able to track the values of the variables?
 - [ ] Am I able to walk through my code line by line with an example?
 - [ ] Do I have a working solution?
 ### isInside

```
