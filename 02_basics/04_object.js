// const tinderUser = new Object() // singleton object
const tinderUser = {}  // Its output print empty object => {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


// Creat Objects In Objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


//Object merge 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2} // Mostly use this 
// console.log(obj3);

//Arrya Objects for user 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // keys = id , name .isLooedIn -- assigned value for tinderUser
// console.log(Object.values(tinderUser)); //values = 123abc, Sammy, false
// console.log(Object.entries(tinderUser)); //[id=123abc], [name=Sammy], [isLogged=false],
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check it is present or not


//Destrchure 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
const {courseInstructor: instructor} = course // in courseInstructor is big name so that why creat a small name for that is instructor ...  courseInstructor and instructor are same value
// console.log(courseInstructor);
console.log(instructor);


//JSON API Concepts
// {
//     "name": "hitesh",                  // keys also string and value is also string
//     "coursename": "js in hindi",
//     "price": "free"
// }

//Arre in APIS
[
    {},
    {},
    {}
]