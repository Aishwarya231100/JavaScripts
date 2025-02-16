/*The For Of Loop---------------------------------------------------------------------------------------
The JavaScript for of statement loops through the values of an iterable object.
*/

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num); // OP- [1,2,3,4,5]
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}   
/*  OP- Each Char is H 
Each Char is E ------
Each Char is W */

// Maps-------------------
//Uniue value 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map); 
/* OP- 
map (3){
'IN' = 'India'
'USW' = United State Of Amirica'
'Fr' = 'france'
}


/*
The For In Loop--------------------------------------------------------------------------------------
The JavaScript for in statement loops through the properties of an Object:

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
    */

/* op-
IN - India
USA - United Sate of america
Fr - France
*/


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}


/* For Of Object --------------------------*/

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

// OT = For of not run in object------------------