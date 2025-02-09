const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // this keyword is current content
        console.log(this); // The output is print correct contact 
    }

}

// user.welcomeMessage() // The output print is hites

// user.username = "sam"
// user.welcomeMessage() //The output print is sam beuz value is change

// console.log(this); // The output is empty

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // Function do not use this. the output is undifeined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); //This output is also undifined
// }


//Arrow Function ----------------------------------------------------------------------------
const chai =  () => {
    let username = "hitesh"
    console.log(this); // the output is empty {}
}

// chai()

//Basic Arrow function--------------------------------------------
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//console.log(addTwo(3, 4))


//implicit return------------------------------------------------------- 
// const addTwo = (num1, num2) =>  num1 + num2   // Do not use {}this 
OR
// const addTwo = (num1, num2) => ( num1 + num2 ) // {} is use the return keyword is use and only () this is used not use return keyword


//Object Reutrn -----------------------------------------------------------------------------------
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()