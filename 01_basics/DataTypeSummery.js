//  1) Primitive-- Call By value

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
/*
1)String -> const score = 100
2)Number -> const scoreValue = 100.3
3)Boolean -> const isLoggedIn = false
4) Null -> const outsideTemp = null
5) Undefined -> let userEmail;
6) Symbol -> 
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // In this eg the value is same but variable is different 
7)BigInt -> using n is cell bigInt
// const bigNumber = 3456543576654356754n
*/



//2) Non primitive  ------ is called reference also

// Array, Objects, Functions
/*

1) Array -> 
const heros = ["shaktiman", "naagraj", "doga"];

2) Object - > 
let myObj = {
    name: "hitesh",
    age: 22,
}

3) Functions
const myFunction = function(){
    console.log("Hello world");
}

/* check the data type
console.log(typeof anotherId);
*/

/*VIMP  Types operater Result 
Undefined= "undefined"
Null= "object"
Boolean= "boolean"
Number= "number"
String= "string"
Object= (native and does not implement [[Call]])	"object"
Object= (native or host and does implement [[Call]])	"function"
Object= (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".
*/

//+++++++++++Stack and Heap Memory ++++++++++++++++++++++++++
/*
1) Stack - Primitive Data Type ----------- Stack use the copy
2) Heap - NonPrimitive Data Type -------------- Heap use the Refrens */

/* 1) Stack Eg-
//I) 
Let MyYouTubeName = "Aishwarya"
let anotherName = MyYouTubeName
console.log(anotherName)
OUTPUT -- Aishwarya

//II)
Let MyYouTubeName = "Aishwarya"
let anotherName = MyYouTubeName
anotherName = "Aishwarya Patil"

console.log(anotherName)
OUTPUT -- Aishwarya Patil
*/

/* 2) Heap Eg- // refren the original value 
let UserOne ={
email : "aishwarya@gmail.com";
Upi: "User@upi";
}

let userTwo = UserOne // in this user one value allow the user user two value

userTwo email = "aishwaryapatil@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

Output --
aishwaryapatil@gmail.com
aishwaryapatil@gmail.com
*/








