const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Use Mostly --In Advanse print this way

const gameName = new String('hitesh-hc-com') //String Delacrastion 

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);  // print the length 
// console.log(gameName.toUpperCase()); //print upper case

console.log(gameName.charAt(2)); // the output is -t
console.log(gameName.indexOf('t')); // the output is- 2

//substring -- only postive value
const newString = gameName.substring(0, 4) // last vaue is not consider only 1,2,3 
console.log(newString);

//slice - put postive and negative value
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

//trim - remove the whitespace
const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());


//replace - 
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

//includes - check the string is present or not
console.log(url.includes('sundar'))

//split
console.log(gameName.split('-'));


/*
+++++++++++++++++++++++String Methodes++++++++++++++++
String length
String charAt()
String charCodeAt()
String at()
String [ ]
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()
*/