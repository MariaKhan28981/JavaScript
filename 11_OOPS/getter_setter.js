class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){
        return this._email.toUpperCase() //_is necessary
    }
    set email(value){
        return this._email=value
    }
    get password(){
        return this._password.toUpperCase()
        // return `${this._password}maria`
    }
    set password(value){
        this._password=value
    }
}
const maria=new User("maria@gmail.com","hallonowa")
console.log(`${maria.password} and ${maria.email}`)