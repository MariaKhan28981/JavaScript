// let my_date= new Date()
// console.log(my_date) //2025-12-07T17:11:09.251Z // not readable
// console.log(my_date.toString()) //Sun Dec 07 2025 17:12:28 GMT+0000 (Coordinated Universal Time)
// //better than previous
// console.log(my_date.toDateString()) //Sun Dec 07 2025
// console.log(my_date.toISOString()) //2025-12-07T17:14:40.723Z
// console.log(my_date.toLocaleDateString()) //12/7/2025
// console.log(my_date.toTimeString()) //17:14:40 GMT+0000 (Coordinated Universal Time)

// console.log(typeof my_date) //object

// 

//let new_date= new Date("12-07-2024")
/* TIME STAMPS */
let my_time_stamp=Date.now()
console.log(my_time_stamp) //1765128213752 millisecond from 1 Jan 1970
//new_date.getTime() converts any date to equivalent milliseconds
//helpfull in comparing 2 time periods
//for converting into seconds math.floor(Date.now()/1000)
// .getMonth , .getDay , etc
new Date.toLocalString('default',{
    weeday: "long"
    timeZone:''
})