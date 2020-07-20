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


