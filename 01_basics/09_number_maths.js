// const score=400
// const balance= new Number(100) 
// console.log(balance.toString().length); //it is coverted to string of length 3
// //the difference between String(balance) and balance.toString is that String can also work with null/undefined values
// console.log(balance.toFixed(2)) //100.00

// const other_number=123.8967
// console.log(other_number.toPrecision(4)) //123.9
// const number=100000000
// console.log(number.toLocaleString('en-IN')) // 10,00,00,000 // 'en_IN' is used for using indian number system
/* ***********MATHS**************/
// console.log(Math)  //object [math] {}
// console.log(Math.abs(-4)) //4
// console.log(Math.round(4.3)) //4
// //if we want that it should return the next int value or prev int value
// //we use ceil (next) and floor (previous)
// console.log(Math.ceil(4.1)) //5
// console.log(Math.floor(4.9)) //4
// //min max 
console.log(Math.random()) //always between 0 -1
console.log((Math.random()*10)+1); //always between 0 -10 //1 for removing 0
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min)) //values b/w 10 and 20