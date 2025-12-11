const myArr=[1,3,5,6,7]
console.log("original array:",myArr)
//myArr.push(56)
//myArr.pop()
//myArr.unshift(9) //[9,1,3,5,6,7]
//myArr.shift() //removes first element
// console.log(myArr.includes(7))
// console.log(myArr.indexOf(90)) //-1

// console.log(myArr)
// const newArr=myArr.join()
// console.log(typeof newArr) //string
/* SLICE SPLICE */
const a1=myArr.slice(1,3)
console.log(a1) //3,5
console.log("array after slice:",myArr) // [ 1, 3, 5, 6, 7 ]
const a2=myArr.splice(1,3)
console.log(a2) //3,5,6
console.log("array after splice:",myArr) //[ 1, 7 ]