// Range Selection

// Number Formate
// console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number)

let formateNumber=(number)=>{
    let result = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
    return result;
}

let rangeEl = document.querySelector("#range");
// let amountEl = document.querySelector('#amount')
rangeEl.addEventListener('input',function(){
let slectedAmount =rangeEl.value;
document.querySelector('#amount').innerHTML= formateNumber(slectedAmount);
})