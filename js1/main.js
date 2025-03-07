const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultTxt = document.getElementById("sum");
const resultTxt2 = document.getElementById("diff");
const resultTxt3 = document.getElementById("prod");
const resultTxt4 = document.getElementById("qou");
let sum = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        resultTxt.innerHTML = sum;
        resultTxt2.innerHTML = difference();
        resultTxt3.innerHTML = product();
        resultTxt4.innerHTML = qoutient();
    }
}

function difference(){
    return parseInt(num1Txt.value) - parseInt(num2Txt.value)
}

function product(){
    return parseInt(num1Txt.value) * parseInt(num2Txt.value)
}

function qoutient(){
    return parseInt(num1Txt.value) / parseInt(num2Txt.value)
}


function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultTxt.innerHTML = "";
    resultTxt2.innerHTML = "";
    resultTxt3.innerHTML = "";
    resultTxt4.innerHTML = "";
    sum = 0;

}

