let name = 'Steven'
let age = 27;
let isCool = true;
const friends = ['Tyler', 'Brandon', 'Tony', 'Cody', 'Rachel'];
const truck = 'chevrolet'



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

tesla.stockPrice = 1643.00;

console.log(name);
console.log(age);
console.log(isCool);
console.log(friends);
console.log(tesla);
console.log(tesla.vehicles.vehicleThree);

tesla.print();

// function printFriends(array){
//     array.forEach(friends => {
//         console.log(friends);
//     });


// // }
// // printFriends(friends);
// // printFriends(tesla.foudningMembers)

// function printName(element) {
//     console.log(element);
// }
// friends.forEach(function(friends) {
//     printName(friend);
// });

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