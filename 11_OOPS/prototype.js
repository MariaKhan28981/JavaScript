myHeroes=["thor","spiderman"]

let heroPower={
    thor: "hammer",
    spiderman:"sling",
    
    getSpiderPower:function(){
        console.log(`Spider Man has power of ${this.spiderman}`)
    }
}
Object.prototype.maria=function(){
    console.log("for all objects")
}
heroPower.maria()
myHeroes.maria()

// inheritance

const User = {
    name: "bheem",
    email: "bheem@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "mariakhan     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"maria".trueLength()
"khan".trueLength()