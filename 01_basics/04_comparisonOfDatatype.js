/*
1) console.log(2>1) //Greter Than
2) console.log(2<1) //less Than
3) console.log(2> =1) //Greter Than equal
4) console.log(2==1) //Equal
5) console.log(2!=1) //Not equal
*/

console.log("2">1); // string vaule convert the number format //Output is ture
console.log("02"+1); //output is 021

console.log(null>0); //output is false
console.log(null<0); //output is false
console.log(null>=0); //output is true

/*
Note 
The reason is not that an equality check == and comparison < > = <= >= work differently
comparison conert null to number treating it as zero
Thats why(3) null >=0 is true and (1) null >0 is false 
*/

console.log(undefined>0); //output is false
console.log(undefined<0); //output is false
console.log(undefined>=0); //output is false

console.log("2"===2); //Output is false

/*
Check the data type then it is same they convert the value
*/


