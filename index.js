let number=document.getElementById("number")
let walkway=document.getElementById("count")
let initialvalue=0
function inc(){
    initialvalue+=1;
    number.innerText=initialvalue;//change number
}
function save(){
    walkway.textContent+=initialvalue+" - "; // change count
    number.innerText=0 // reduce back count to 0 in browser
    initialvalue=0 // reduce back to 0 in js
}