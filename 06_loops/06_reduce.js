//reduce
const arr=[1,2,3]
const final=arr.reduce(function (accumulator,current_value){
    console.log(`accumulator :- ${accumulator}, current value :- ${current_value} `)
    return accumulator+current_value
},0) //initial starting value

/* accumulator :- 0, current value :- 1 
accumulator :- 1, current value :- 2 
accumulator :- 3, current value :- 3 */

const total=arr.reduce((acc,curr)=>acc+curr,6)
 console.log(final,total); //6
 