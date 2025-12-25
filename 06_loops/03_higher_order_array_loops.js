//for of
 const arr=[1,2,3,4,5]
// for (const i of arr){
//     console.log(i);
    
// }
// const str="maria khan"
// for (const element of str) {
//     if(element==" "){
//         break
//     }
//     console.log(element);
//     }

//maps-> are not iterable
// const map=new Map()
// map.set('amu','aligarh')
// map.set('DL',"Delhi")
// map.set('IN','India')
// map.set('USA','America')
// console.log(map)
// for (const [key,value] of map) {
//     console.log(key,':-',value)
    // }

// for in 
// const myObject={
//     'game1':'subway surfers',
//     'game2': 'temple run'
// }
// for (const key in myObject) {
//     console.log(`${key} :- ${myObject[key]}`)
// }
// for (const key in arr) {
//     //if (!Object.hasOwn(object, key)) continue;
    
//     console.log(arr[key]);
//     }    
// const coding=["js","ruby","python"]
// coding.forEach(function (item) {
//     console.log(item)
// })

// coding.forEach((item)=>{
//     console.log(item)
// })

// function printMe(item){
//     console.log(item);
//     }
// console.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log((item,index,arr));
    
// })

const myCoding=[ //object inside array
    {
        languageName:"java script",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"C++",
        languageFileName:"cpp"
    },
]
myCoding.forEach((item)=>{

    console.log(item.languageName)
})