class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}
class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}
const student=new Teacher("Maria","maria@gmail.com","123")
student.addCourse()