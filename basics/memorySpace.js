//stack-> used for primitive type ,heap-> used for non primitive type
//stack gives acopy of value
//heap uses pass by refrence
let name="maria"
let my_name=name
//console.log(my_name) //maria

my_name="MARIA"
//console.log(name) //output is still same = maria
//console.log(my_name) // now output will be MARIA
//because string ,is a primitive type so when variablee my name =name a copy of name is provided ,
//original variable 'name' remains as it is 

let userOne={
    email:"maria@gmail.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="maria123@gmail.com"
console.log(userOne.email) //output will be maria123@gmail.com
//email:"maria@gmail.com", upi:"user@ybl", this info will be stored in a heap(only a single copy)
//variable userOne,userTwo will be stored in stack
//a pointer from user1,user2 will point towards heap 
//any change made in either user1,user2 info will be change in the one and only copy of info
console.log(userTwo.email) //maria123@gmail.com