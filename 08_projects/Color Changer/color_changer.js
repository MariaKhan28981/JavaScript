const button=document.querySelectorAll('.button')
const body=document.querySelector("body")

button.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target);
        if(e.target.id==='grey'){
            body.style.backgroundColor='grey' //or simply hard code it to grey
        }
        if(e.target.id==='green'){
            body.style.backgroundColor='green' //or simply hard code it to green
        }
        if(e.target.id==='red'){
            body.style.backgroundColor='red' //or simply hard code it to red
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor='blue' //or simply hard code it to blue
        }
        
    })
})