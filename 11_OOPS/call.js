function SetUsername(username){
    //comples DB call
    this.username=username
    console.log("called")
}
function createUser(username,email,password){
    SetUsername.call(this,username) //call stack khtam hone ke baad variables ko hold krna imp hai
    this.email=email
    this.password=password
}
const maria=new createUser("Maria","maria@gmail.com","124t")
console.log(maria)
/*
called
createUser {
  username: 'Maria',
  email: 'maria@gmail.com',
  password: '124t'
} 
  */