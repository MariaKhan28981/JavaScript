const name="maria"
const count=50
//console.log(name+count+" hello") //outdated
//console.log(`hello my name is ${name} and count is ${count}`)
//# another declaration of string
const my_name= new String("mario")
//console.log(my_name[0]) //indexes
console.log(my_name.__proto__); //{} it contains many objects, can be viewed in console(google)
console.log(my_name.length); //5
console.log(my_name.toUpperCase())
console.log(my_name.charAt('3')) //i
console.log(my_name.indexOf('i')) //3
const Name = name.substring(0,3) //we can also give-ve values
console.log(Name) //mar
const string="    maria    "
console.log(string)
console.log(string.trim())
const url="https://mariakhan%20khan"
console.log(url.replace('%20','-'))
console.log(url.includes('maria')) //true
/* *string to array* */
console.log(url.split('%')) //[ 'https://mariakhan', '20khan' ]