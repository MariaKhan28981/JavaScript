//immediately invoked function expressions (IIFE)
(function hello(){
    //named IIFE
    console.log("DB Connected")
})(); //semicolon here is imp when writing 2 IIFE
//global scope ke pollution se problem hoti hai kyi bar
//uske pollution ko hatane ke lie IIFE ka use krte hai
((name)=>{
    //un named IIFE
    console.log(`DB Connected 2 ${name} `)
})('maria');