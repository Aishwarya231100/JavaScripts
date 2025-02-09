//Function define basics
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//SayMyName ------is only refrens 
// sayMyName() ------is executer    

// function addTwoNumbers(number1, number2) //number1 and number2 is parametres
//{

//     console.log(number1 + number2); // the output is print as 8 and Result : Undifined
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2  // the output is print as Result : 8
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) // 3 and 5 is arrguments

// console.log("Result: ", result);


/*--------------------------------------------------------------------------------------------------------------------
function loginUserMessage(username){
         return `${username} just logged in`
}
loginUserMessage("Aishwarya") // the output is not print beuz the print satemnt is not return here
console.log (loginUserMessage("Aishwarya")) // The output is Aishwarya
console.log (loginUserMessage()) //Output is undfined
*/

/* if statement
function loginUserMessage(username){
if(username === undifined){
console.log ("Plz enter a username");
return
}
return `${username} just logged in`
console.log(loginUserMessage("hitesh"))

*/

/*
function loginUserMessage(username = "sam") // sam value does go to if block becz it is not undfined value so thas why
{
    if(!username){
        console.log("PLease enter a username");
        return // return after the value is not print 
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("hitesh")) // sam value override the hitesh value so thats why print the hites value

*/


/*
function calculateCartPrice (...num1) // spered opareter or resat operter 
{
return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000)) // The output print in array format [200, 400, 500]

*/ 


/*
Arrya Index Number Value is Print
/*
function calculateCartPrice (val1, val2, ...num1) // spered opareter or resat operter 
{
return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000)) 
// The output print is val1 is = 200 and val2 = 400 and rest value in arrya so print 500 and 2000

*/ 

/* 
Objects pass in functions format 

// User is object
const user = {
    username: "hitesh",
    prices: 199
}

//user and anyobject is same but name is diffrens 
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

// Print in easy way --------
handleObject({
    username: "sam",
    price: 399
})

*/

/*
Arrya In functions

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){ // The output is 400 beuz 0= 200, 1=400, 2=100, 3=600
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

// Arrya Object Pass--------------------------
console.log(returnSecondValue([200, 400, 500, 1000]));

*/









