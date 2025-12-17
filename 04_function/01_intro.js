// function sayMyName(){
//     console.log("maria")
// }
// sayMyName()
// function add(num1,num2){
//     console.log(num1+num2)
// }
// function add(num1,num2){
//     let result=num1+num2
//     return result
// }
//add(3,4) //7
// add(5,"9") //59
// add(4,"s") //4s
// add(7,null) //7
function loginUserMessage(username="sam"){ //default values
    if(username===undefined){ //!username
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("maria,"))
console.log(loginUserMessage()) //please enter username // undefined
