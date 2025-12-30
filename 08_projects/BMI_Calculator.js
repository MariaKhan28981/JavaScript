const form =document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    if(isNaN(height) || height <= 0){
        results.innerHTML="Please Enter Valid Height!"
        
    }
    else if(isNaN(weight) || weight <= 0){
        results.innerHTML="Please Enter Valid Weight!"
    }
    else {
        const bmi=(weight/(height*height)).toFixed(2)
        results.innerHTML=`Your BMI is: ${bmi}`
        if(bmi<18.6){
            results.innerHTML=`Your BMI is: ${bmi} and You are under weight!`
        }
        else if(18.6<bmi<24.9){
            results.innerHTML=`Your BMI is: ${bmi} and It is perfect!`
        }
        else if(bmi>24.9){
            results.innerHTML=`Your BMI is: ${bmi} and You are over weight!`
        }
    }
    

})
