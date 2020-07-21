# Javascript

My name is Steven, I'm 27, I'm cool and this is the read me to the JavaScript thats attached

## Friends

My friends are Tyler, Brandon, Tony, Cody and Rachel\

## Truck

I drive a Chrevolet Silverado

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

/////////////////////////////



