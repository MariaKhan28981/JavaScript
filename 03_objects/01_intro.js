//declaration
//singleton is obtained from constructor
//object literals
//Object.create  //constructor
// q :- declare a symbol and use it in objects
const mysym=Symbol("key1")
const js_user={
    name:"Maria", // name is internallly string
    "Full name": "Maria Khan",
    //mysym:"mykey1", //string
    [mysym]:"mykey1", //this is correct syntax
    age:19,
    location:"Aligarh",
    email:"mariakhan@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(js_user.email); // full name cannot be accessed like this
// console.log(js_user["email"]) //this is better 
console.log( js_user[mysym])
js_user.email="markahn@gmail.com"  //changing values of object
Object.freeze(js_user) //to prevent changing of values
console.log(js_user)
/* {
  name: 'Maria',
  'Full name': 'Maria Khan',
  age: 19,
  location: 'Aligarh',
  email: 'markahn@gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
} */
