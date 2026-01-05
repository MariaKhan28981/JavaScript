const user={
    _email:"hehe@gmail.com",
    _password:"abc",
    get email(){
        return this.email.toUpperCase()
    },
    set email(value){
        this.email=value
    }
}
const maria =Object.create(User)
console.log(maria.email)