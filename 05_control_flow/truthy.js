// const email=[] //"maria@gmail.com" both are true
// if(email){
//     console.log("got user email")
// }else{
//     console.log("fail")
// }
// /* falsy values- false,0,-0,BigInt 0n,null, undefined, NaN
// truthy values - "0",'false'," ",[], function(){},{} */
// if(email.length===0) //use this instead
// const emptyObj={}

// if(Object.keys(emptyObj).length===0){}

// Nullish Coalescing Operator (??) : Null undefined
// let val1;
// val1=5 ?? 10    //5
// val1=null ?? 10     //10
// var1=undefined ?? 15    //15
// val1=null ?? 10 ?? 2    // 10
// console.log(val1) 

//Terniary Operator
condition ? true : false
const a=19
a>=2 ? console.log("true") : console.log("false")