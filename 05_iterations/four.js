//For In--------------------
/*The js for in statement loop through the propertices of an object*/

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

//OP = 
/*
JS shourtcut is for Javascript
CPP shourtcut is forC++
rb shourtcut is for rubby
swift shourtcut is for swift in apply
*/

//For In Array ----------------------------------------------

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}
//OP = JS RB PY JAVA CPP


//For in using map--------------------------------------------------------
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

//op = map not using for in they not print