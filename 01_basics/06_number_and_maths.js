const score = 400
// console.log(score);

const balance = new Number(100) // only print the number values
/console.log(balance);

console.log(balance.toString().length); //check the lenth

console.log(balance.toFixed(1)); // orignail value is 100 and to put tofixed the output is -1000.00

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // the orignal value 123.8966 and the output is 124 becuz 123.8 the round figer 124 value and display the output is 124
// in preision value first three dight only not put the four digit 


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //(`en-IN`) is print the indian rs value

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4)); // abs is absolute value the convert the nigative to postive value only the do not print postive to nigative value

console.log(Math.round(4.6)); // the print the round figer value the output is -5

console.log(Math.ceil(4.2)); // same as round the not use

console.log(Math.floor(4.9)); //randup the value the output is 5

console.log(Math.min(4, 3, 6, 8));//output is -8

console.log(Math.max(4, 3, 6, 8)); //output is--3

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)