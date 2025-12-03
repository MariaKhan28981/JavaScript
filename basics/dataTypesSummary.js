//1. primitive (7 types) -> string,number,boolean,null, undefined.symbol, bigint
// JS is dynamically types -> type of variable is determined when the code is executed not during compilation
const score=100
const value=0.3

const isLoggedIN=false
const outsideTemp=null
let userEmail; //value will be undefined

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId) //false
//const bigNumber=65432889224n

//2. refrence (non-primitive) -> array,objects,functions
//all theprimitive datatypes has typeof 'object'
const heros=["hulk","iron man","thor"]
let myObj={
    name:"maria",
    age:20,
}
const myFunction=function(){console.log("Hello World")}
console.log(typeof myFunction) //function or more precisely function object
console.log(typeof heros) //object
console.log(typeof myObj) //object
//null datatype is object