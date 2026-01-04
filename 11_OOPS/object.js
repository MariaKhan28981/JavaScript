function mutliply5(num){
    return num*5;
}
mutliply5.power=2

console.log(mutliply5(5));
console.log(mutliply5.power); //2
console.log(mutliply5.prototype); //{}

// function object bhi hai*

function createUser(username,score) {
    this.username=username
    this.score=score
}
//we can also create our own functions,for example
createUser.prototype.increment=function(){
    this.score++ //this ka use nhi karenge to function ko pta ngi chalega kis ka score inc krna hai
}
createUser.prototype.printMe=function(){
    console.log(`score id ${this.score}`);
    
}
const maria=new createUser("maria",34)
const MARIA=new createUser("MARIA",60)

maria.printMe()