//Method in numbers datatypes

let myNum = 5670000;

// Round up the number to 2 d.p
myNum = myNum.toFixed(2);

let mill = 100000000;

// Return four numbers 
mill = mill.toPrecision(4);



// Methods in string datatypes

let myState = `Akwa ibom`;

// Convert it to lower case
myState = myState.toLowerCase();
let  i = myState.length;
myState.indexOf('S');
myState.slice(3, 5);



// String concatenation
let userName  = 'Stephen';
let userAge = 17;

let brief=`User name is ${userName} and ${userAge} years`

// How to use date object is js

let currentDate = new Date();

console.log(currentDate);

let year = currentDate.getFullYear();

console.log(
    currentDate.toLocaleString(
        'defaulf',
        {month: 'short',
        weekday: 'long',
    }
    )
);

let myDate = new Date();

let hour = myDate.getHours();
let min = myDate.getMinutes();

console.log(`${hour}:{min}`)

console.log(
    myDate.toLocaleString(
        'default', 
        {month: 'short'}
    )
);

// Comparison operator

//How to check if datatype are the same

let s_num = '7';
let num = 7 ;

console.log(
    s_num === num
);

// It will return false

