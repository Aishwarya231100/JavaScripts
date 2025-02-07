// singleton
Object.create


//Object creat 
//const JsUser = {}


//Creat Symbol
const mySym = Symbol("key1")

//Object Declarestion
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // Decleare symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//Object access
// console.log(JsUser.email)
// console.log(JsUser["email"])-------------Mostly use this

// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

//Change Value
JsUser.email = "hitesh@chatgpt.com"

// Object.freeze(JsUser)---------- not change the value
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


//creat Function
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());