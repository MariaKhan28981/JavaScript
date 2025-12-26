// const myCoding=[ //object inside array
//     {
//         languageName:"java script",
//         languageFileName:"js"
//     },
//     {
//         languageName:"python",
//         languageFileName:"py"
//     },
//     {
//         languageName:"C++",
//         languageFileName:"cpp"
//     },
// ]
// const values=myCoding.forEach((item)=>{

//     console.log(item);
//     return item
// })
// console.log(values) //item // foreach do not return values
const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=> num>4)
// console.log(newNums) //[ 5, 6, 7, 8, 9, 10 ]

// const newNums=myNums.filter((num)=>{return num>4}) // []
 const newNums=[]
  myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
  })
  console.log(newNums) //[ 5, 6, 7, 8, 9, 10 ]
