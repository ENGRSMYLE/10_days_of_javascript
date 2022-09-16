// My first code in js

alert('Started learning js with ENGRSMYLE');


//Adding js to your project

document.write('Check day_one.html');


// Creating a simple function

function isEven(value) {
    if (value%2==0) {
        console.log('Is Even');
    } else {
        console.log('Is odd');
    }
}


// How to work with variables in js

var myAge = 17;  // Old way of creating variable
let myAGe = 18;  // Most preffered way to create variable
const myMoney = 38;  // Creating a variable that do not change
let myName = 'Engrsmyle';
// If you want to update 'myAge'
myAge = 23;
console.log(myAge);

// Javascript datatypes 
let num = 7;
console.log(typeof num); //Number

let channel = 'Stephen';
console.log(typeof channel); // String

let isNice = true;
console.log(typeof isNice);  //Boolean

let bigNumber = 123456788888887654n;
console.log(typeof bigNumber)  //bigint

let myList = ['smart', 'dull', 'sew'];
console.log(typeof myList);  // Arrays

function sayHello() {
    console.log('Hello');  
}
console.log(typeof sayHello);

let person = {
    name: 'Engrsyle',
    age: 17,
    bestfood: 'yam',
}
console.log(typeof person) // Object
// How to access an Object
console.log(person.name)

// Javascript arithmetic operator
console.log(5+5); // Addition
console.log(10 - 3); //Suntraction
console.log(9 / 3);  //Division
console.log(3 * 3);  //Multiply

let score = 33;
score ++  // Increament
console.log(score);
score --  // Decreament 
console.log(score);

