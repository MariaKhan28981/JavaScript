const arr=[1,2,3,4,5,6,7,8,9,10]

//const new_arr=arr.map((num)=> num+10)

const new_arr=arr
                .map((num)=>num+2) //this is called chaining
                .map((num)=> num*2)
                .filter((num)=>num>18) //[20,22,24]
console.log(new_arr)
/*[
   6,  8, 10, 12, 14,
  16, 18, 20, 22, 24
]*/