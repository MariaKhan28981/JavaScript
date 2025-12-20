// const user={
//     username: "maria",
//     prive: 1000,
//      welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this)
//      }
// }
// user.welcomeMessage() //maria, welcome to website
// user.username="khan" //this change is possible b/z we did not hard code the values
// user.welcomeMessage() //khan, welcome to website
//console.log(this) //{} current context is empty

// function one(){
//    console.log(this) //console.log(this.username) is undefined
// }
// one()
/* output */
// ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Function: atob],
//   btoa: <[Function: btoa],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   navigator: [Getter],
//   crypto: [Getter]
// }
// function one(){
//       let username ="maria"
//        console.log(this.username) is undefined
//  }
/**************arrow function**************** */
const one=()=>{
   let username="maria"
   console.log(this.username)
}
one()
/* implicit return */
const add=(num1,num2)=> (num1+num2)
//const add=(num1,num2)=> ({username:"maria"})
const myArray=[9,8,7,6]
//myArray.forEach(()=>())
console.log(add(5,6))


