const elementTxt = document.getElementById("elements");
let numInpt = document.getElementById('numInpt');
const sumTxt = document.getElementById("sum");
const highNum = document.getElementById("highNum");
const lowNum = document.getElementById("lowNum");
let sum = 0;
let largest=0;

let arr = [];




function insertEl() {
    arr.push(parseInt(numInpt.value));
    let smallests= arr[0];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < smallests){
            smallests = arr[i];
        }
        if(arr[i] > largest){
            largest = arr[i];
        }
        
        
    }

    elementTxt.innerHTML = arr.join("<br>");
    sumTxt.innerHTML = sum;
    highNum.innerHTML = largest;
    lowNum.innerHTML = smallests;
    console.log(arr);

}


function deleteAll(){
    arr=[]
    elementTxt.innerHTML = arr.join("<br>");
    sumTxt.innerHTML = 0;
    highNum.innerHTML = 0;
    lowNum.innerHTML = 0;
    console.log(arr);
}