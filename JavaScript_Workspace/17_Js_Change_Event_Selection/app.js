// change event on selection box

let selectBox = document.querySelector("#lang-select");
selectBox.addEventListener('change',function(){
let selectedOption = selectBox.value;
document.querySelector("#lang-option").innerHTML=selectedOption;


})