const form =document.querySelector("form")

form.addEventListener("submit",function(e){
    e.preventDefault();
    const notice = document.querySelector("#warning");
    const results = document.querySelector("#results");
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    if(height===" "||height<0||isNaN(height)){
        results.innerHTML=`Invalid inputs ${height}`

        
    }
    else if(weight===" "||weight<0||isNaN(weight)){
        results.innerHTML = `Invalid inputs ${height}`;
        
    }else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `Your Bmi is ${bmi}`;
        if(bmi<18.6){
            notice.innerHTML="you are underweight"

        }
        if(bmi>18.6 && bmi<24.9){
            notice.innerHTML="you are Healthy"

        }
        if(bmi>24.9){
            notice.innerHTML="you are overweight"

        }


    }
})