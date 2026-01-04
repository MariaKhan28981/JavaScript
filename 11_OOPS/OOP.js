const user={
    username:"maria",
    logicCount: 10,
    signedIn: true,

    getUserDetails:function(){
        console.log("Hello World")
    }
}
console.log(user.username);
console.log(user.getUserDetails())

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    return this 
}
const userOne=new User("Maria",12,true)
const userTwo=new User("MARIA",60,false)
//new creates an empty object
//a constructor function in called
//without new userTwo will overwrite userOne

console.log(userOne )//.constructor)
console.log(userTwo)
//instance of
