// Check The type ------------------------------------------------------
//Number
let score = 33;
console.log(typeof score); //OR console.log(typeof (score));

//String
let scores = "33";
console.log(typeof scores);

//Null
let marks = null;
console.log(typeof marks);

//Undefined
let mark = undefined;
console.log(typeof mark);

/*
Note-------------------------------------------------------------
33 = 33
"33abc" = Nan
true = 1
false = 0 */

//Convert the value
// 1) Number convert in string format
let someNumber = 33
let stringNumber = String (someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// 2) Number covert to boolean 
let isLoggedIn = 1
let booleanIsLoogIn = Boolean(isLoggedIn)
console.log(booleanIsLoogIn)

// 3) Number covert to boolean 
let zero = 0
let falseIsLoogIn = Boolean(zero)
console.log(falseIsLoogIn)


/*
Note -------------------------------------------------------
1 = true
0  = false
" " = false
"Aishwarya" = true */


//---------------------------------Operations------------------------------------

//Postive to negative value convert 
let value = 3
let negvalue = -value
console.log(negvalue)

//Basic Mathas Operastions
/*
1) console.log(2+2)
2) console.log(2-2)
3) console.log(2*2)
4) console.log(2**2) ---------- two to the power two
5) console.log(2/2)
6) console.log(2%2) 
*/

let str1 = "hello"
let str2 = " Aishwarya" //-- Frist spaces is given beucese of separet the word 
let str3 = str1 + str2
console.log(str3)

console.log("1"+"2");  // --- Output is = 12
console.log(1+"2"); // -- Output is = 12

console.log("1"+2+2); // Frist is string the all the value trit as string the output is 122
console.log(1+2+"2"); //First add the value and then string as it is print the output is 32

/*
cnsole.log(3+4*5%4); //It not good for writen in code */

console.log((3+4)*5%3); // write in this format 

console.log(+true); //Output is = 1

//console.log(true+); //output is Error

let gameCounter = 100
++gameCounter
console.log(gameCounter);

// OR we can write also this format 
//gamecounter++
//console.log(gameCounter);







