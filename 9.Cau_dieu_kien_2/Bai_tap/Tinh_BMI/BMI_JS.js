
let bmi = 0;
function tinh() {
    let cao = parseFloat(document.getElementById('chieucao').value);
    let nang = parseInt(document.getElementById('cannang').value);
    bmi = nang / ( cao ^ 2 );
    if (bmi < 18)
        {document.write("Underweight")}
    else if (bmi < 25.0)
        {document.write("Normal")}
    else if (bmi < 30.0)
        {document.write("Overweight")}
    else
        {document.write("Obese")}
}
