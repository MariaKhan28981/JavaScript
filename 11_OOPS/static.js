class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    static createID(){
        return `123`
    }
}
const student=new user("Maria")
//console.log(student.createID()) //error

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const maria=new Teacher("maria","maria@gmail","123")
maria.logMe();
