// console.log(2>1) //they will give answer in boolean value
// console.log("2">1) //js allows this, but it becomes confusing
// console.log(1<"2") // result becomes unpredictable
// console.log(null>0)  //false
// console.log(null==0) //false
// console.log(null>=0) //true
//*********** IMPORTANT **************
//the reason is that an equality check == and comparisons <,>,<=,>= work differently. 
// Comparisons covert null to a number, treating it as 0. 
// That is why null>=0 is true and null>0 is false
// console.log(undefined==0) //false
// console.log(undefined>0) //false
// console.log(undefined<0) //false 
// // STRICT CHECK
console.log("2"===2)  //false















