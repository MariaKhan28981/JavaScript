//ES6  
class user{
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password
    }
    encryptPassword(){
        return `password is ${this.password}`
    }
    changeName(){
        return `Name to uppercase: ${this.name.toUpperCase()}`
    }
}
const user_one=new user("user_one","user_one@gmail.com","34@3gf")
console.log(user_one.encryptPassword())
console.log(user_one.changeName());


//behind the scene
function userName(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password
    }
userName.prototype.encryptPassword=function(){
        return `password is ${this.password}`
    }
userName.prototype.changeName=function(){
        return `Name to uppercase: ${this.name.toUpperCase()}`
    }

const user_two=new userName("user_two","user_two@gmail.com","34@3gf")
console.log(user_two.encryptPassword())
console.log(user_two.changeName());