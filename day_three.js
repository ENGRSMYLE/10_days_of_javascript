// let x = 1;  //true
// let y = 0;  //false

// // How to use the AND operator

// if(x && y) {
//     console.log('You will become a developer');
// } else {
//     console.log('Work hard')
// }

// // How to use the OR operator
// if(x || y) {
//     console.log('This is smile');
// } else {
//     console.log('Be hill');
// }

// //Nullish Coalescing operator

// //It will return the first define value

// let user ;
// let user1 = null; 
// let user3 = "stephen";

// console.log(
//     user ?? user3
// );

// let course;
// console.log(
//     course ?? "Please select a course"
// );

// // Control flow in js


// let name = prompt("Hey");

let myName = 'Stephen';

let myAse = myName.length

if(myAse < 5) {
    console.log("You are less than five");
} else if(myAse == 5) {
    console.log("You are equal to five");
} else {
    console.log("Never mind, you are greater than five");
}