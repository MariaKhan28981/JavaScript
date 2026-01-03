const promise1=new Promise(function(resolve,reject){
    //do an async task
    //DB calls,cryptograpgy,network
    //setTimeout
    setTimeout(function(){
        console.log("async task is complete");
        resolve() //connected to .this
        
    },1000)
})
promise1.then(function(){
    console.log("Promise consumed")
}) //.then has direct relation to resolve //iske andar ek callback milta hai

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task2 completed")
        resolve()
    },1000)
}).then(function(){
    console.log("Async2 resolved")
})

const Promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Maria",email:"mariakhan04044@gmail.com"})
    },1000)
})
Promise3.then(function(user){
    console.log(user);
    })

const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"maria",password:"123"})
        }else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})
promise4
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(()=>console.log("completed")) //always executed

const promise5=new Promise(function(resolve,reject){
        setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"JavaScript",password:"123"})
        }else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})
async function consumePromise5(){
    try{
        const response=await promise5
        console.log(response)
    }catch(error){
        console.log(error)
    }
    //const response=await promise5
    //console.log(response)
}
consumePromise5()

// async function getAllUsers() {
//    try{
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
//    const data=await response.json()
//    console.log(data)
//    }catch(error){
//     console.log("Error",error)
//    }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))