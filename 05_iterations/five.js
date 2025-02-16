/*For Each Loop ----------------------------------------------------
 The For each method calls a function for each element in array
 The ForEcah() Method is not executed for empty elements.
 */

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )
// op - JS RUBY JAVA PYTHON CPP


//Arrow Function----------------------------------------------------------
// coding.forEach( (item) => {
//     console.log(item);
// } )
//op - JS RUBY JAVA PYTHON CPP


//printMe-----------------------------------------------------------------
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)
//op - JS RUBY JAVA PYTHON CPP


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
//op JS 0 ["JS", "RUBBY", "JAVA","PYTHON","CPP"] -----------FOR ALL LANGUNE 


//ARRAY Objects-----------------------------------------------------------------------------
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

//op javascript java python