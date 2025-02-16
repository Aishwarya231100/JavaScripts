//For Each Loop ---------------------
//No Return Value

/* const coding = ["js", "ruby", "java", "python", "cpp"]
 const values = coding.forEach( (item) => {
     //console.log(item);
     return item
 } )
 console.log(values);

 op = 
 js
 rubby
 java
 undifined -----------for each loop no reteun the value so thats why print undifined
 */

/*Filter------------------
The filter() method creates a new array filled with elements that pass a test provided by a function.
The filter() method does not execute the function for empty elements.
The filter() method does not change the original array.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 const newNums = myNums.filter( (num) => { -----------it is use {} barekt so retun is used
     return num > 4
 } )

 op= [5,6,7,8,9,10]
 */

 /* Arrow Functions----------------------
 const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 const newNums = myNums.filter( (num) => {
    return num>4
})
    console.log(newNums);
    op= [5,6,7,8,9,10]
    */
    
/* If Loop -------------------------------
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => {
    if (num>4){
    newNums.push(num)}

})
     console.log(newNums);
    op= [5,6,7,8,9,10]
    */

 /* User Data
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);
  */