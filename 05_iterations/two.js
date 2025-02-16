//While Loop------------------------------

/* The while loop loops through a block of code as long as a specified condition is true.

Syntax
while (condition) {
  // code block to be executed
}*/

let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }


//Arrya Usind Do While Loop
let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11



//Do While Loop--------------------------------------
/*
The Do While Loop
The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

Syntax
do {
  // code block to be executed
}
while (condition);*/


do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);