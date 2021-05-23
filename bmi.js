

//BMI = KG/(H/100 * H/100)


let sbmt = document.getElementById('submit');
 if(sbmt){
    sbmt.addEventListener("click", bmiCalculator)
 }
function bmiCalculator(){
    let cm = parseInt(document.getElementById("cm").value);
    let kg = parseFloat(document.getElementById("kg").value);

    var bmi;
    var newCm = parseFloat(cm/100);
    bmi = kg / (newCm * newCm);
    console.log(bmi);
    bmi = bmi.toFixed(1);
    document.getElementById("result").innerHTML = "Your BMI is :~ " + bmi;


}
