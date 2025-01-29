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
