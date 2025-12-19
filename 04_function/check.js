// function calculate_cart_price(...num1){ //rest or spread operator
//     return num1
// }
// console.log(calculate_cart_price(200, 300, 400))
// function calculate_cart_price(val1,val2,...num1){ //rest or spread operator
//     return num1
// }
//console.log(calculate_cart_price(200, 300, 400,600)) //[ 400, 600 ]
//  const user={
//     username:"maria",
//     price:299
//  }
//  function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`) 
//     //Username is maria and price is 299
//  }
//   handleObject(user)
const myNewArray=[200,400,100,600]
function return_second_value(getArray){
    return getArray[1]
}
console.log(return_second_value(myNewArray)) //400
console.log(return_second_value([200,400,600    ]))