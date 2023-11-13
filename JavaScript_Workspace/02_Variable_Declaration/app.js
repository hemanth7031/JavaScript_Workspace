/* 

Let -> key word to Declare a variable
a -> variable name /reference variable
= -> assignment operator
10 -> value /data
; => end of the statement

*/

let a = 10;
let b = 20;
let sum = a + b;
console.log(sum)

console.log('The sum of' + a + ',' + b + 'is :' + sum); //ES5


// ES6 -> template string /temple literal (``)back ticks
console.log(`The sum of ${a},${b} is : ${sum}`);








// Rules in Decalarations Variables
// --------------------------------------
// 1) All variables are case sensitive

// Ex: let name = 'Hemanth';
// console.log(Name);//Error

// 2) All variable name must be in camelCase

// Ex: let myEmployeeName ='jhon';

// 3) Max allow chars 15 

// 4) chara allow  are a-z,A-Z,$,_,0-9



// Ex: let number = 10; //Valid
//     let $number=20; //Vaild
//     let _number=30; //Vaild
//     let number_1=40; //Vaild
//     let 1number =50; //not Valid
//     //variable must not starts with a number
//     let #name = 'jhon'; //not Valid