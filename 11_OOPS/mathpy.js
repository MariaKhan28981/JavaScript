const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor)
/*
{
  value: 3.141592653589793,
  writable: false, //point to be noted
  enumerable: false,
  configurable: false
}
  */
const subject={
    name:'maths',
    credits:"4",
    instructor:"faeem"
}

console.log(Object.getOwnPropertyDescriptor(subject,"name"))
/* {
  value: 'maths',
  writable: true,
  enumerable: true,
  configurable: true
} */
Object.defineProperty(subject,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(subject,"name"));
/* {
  value: 'maths',
  writable: false,
  enumerable: false,
  configurable: true
} */
for (let [key,value] of subject) {
    if(typeof value!='function')
    console.log(`${key} : ${value}`)
}