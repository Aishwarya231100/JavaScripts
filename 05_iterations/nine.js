//Reduce-------------------------------------------------------Mostly Use In shopping cart
/*
The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.*/

/*const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

OP = 
acc : 0 and curr: 1
acc : 1 and curr: 2
acc : 3 and curr: 3
*/

//Arrow Function using reduce method----------------------------------------
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);
/*
op = 6
*/


//Arrow function object using Reduce Method--------------------------
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

/*
22996
*/