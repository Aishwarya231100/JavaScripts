//var c = 300
let a = 300  // It is globle scope                             //{} is called scope //scope present in loop statement and functions that {} is called scope

if (true) {                              // In if block present variable is called block scope and 
    let a = 10                           
    const b = 20
    // console.log("INNER: ", a);      // The output print 10
    
}



// console.log(a); //Output print 300
// console.log(b);
// console.log(c);


//Nested Scope              ------- in this scope the chilled function access the parent variable scope 

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);            // this print beuz username declared in globe scope
    }
    // console.log(website);              //It gives the error beuz website is present in function two block and prints before the block so that why it does not print 

     two()                                //The output is = hitesh

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);      //It gives the error beuz website is present in function two block and prints before the block so that is why it does not print 

}

// console.log(username); // Username scop in not presnt 


// ++++++++++++++++++ interesting ++++++++++++++++++

// Function Decleared in two way 1) Only Declarstion 2) With Varible

console.log(addone(5))            // It is print the output is = 6 in this function only decaled so print the value

function addone(num){
    return num + 1
}



addTwo(5)                          //It is not print they give the error the variable holed the value 
const addTwo = function(num){
    return num + 2
}