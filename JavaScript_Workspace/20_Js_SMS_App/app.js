// SMS App example

let textAreaEl = document.querySelector("#text-area");
textAreaEl.addEventListener('keyup',function(){
let textEntered =textAreaEl.value.length;
document.querySelector('#char-count').innerHTML=textEntered;

})