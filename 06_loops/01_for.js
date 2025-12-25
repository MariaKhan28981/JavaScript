// index=10
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element==5){
//         console.log("five")
//     }
//     console.log(element)
// }
// for (let i = 2; i <=3; i++) {
//     //console.log(`first loop ${i}`)
//     for (let j = 1; j <=10; j++) {
//        // console.log(`second loop ${j}`)
//        console.log(i + '*' + j +'=' + i*j) // table of 2 and 3
        
//     }
    
// }
// let array=["maria","khan","hello"]
//  for(let i=0;i<array.length;i++){
//     console.log(array[i])
//  }
for (let index = 1; index <= 20; index++){
   if (index==5) {
    console.log("5 detected");
    break
    }
   console.log(index);
   }
   console.log("break over,continue started");
   
   for (let index = 1; index <= 20; index++){
   if (index==5) {
    console.log("5 detected");
    continue
    }
   console.log(index);
   }