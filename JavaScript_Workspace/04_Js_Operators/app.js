/* 
JavaScript Operators
---------------------

-> assignment Operator : =
-> arthmetic Operator : + - / % *
-> short hand Math Operator : +=, -=, /=, *=
->Conditional Operators : < , >, <= ,>=, !==
->unary Operators : ++,--
->logocal Operators : && ,||,^
-> Ternary Operator : ?:
->Equality Operators :== ,===
*/


// assignment Operator : =
let test = 10;
console.log(test);


// arthmetic Operator : + - / % *
let num1 = 10;
let num2 = 20;

console.log(`sum:${num1+num2}`);
console.log(`sub:${num1-num2}`);
console.log(`mul:${num1*num2}`);
console.log(`div:${num1/num2}`);

// find the number of odd or Even 
let number = 12;
if (number % 2 === 0) {
    console.log(`${number} is an Even Number`);
} else {
    console.log(`${number} is an Odd Number`);
}

// short hand Math Operator : +=, -=, /=, *=
let a = 20;
let b = 30;
let add = 10;

// add = add + (a + b);
add += (a + b)
console.log(add);

// Conditional Operators : < , >, <= ,>=, !==
let Marks = 75;
if (Marks <= 35) {
    console.log('The Exam will be failed');
} else {
    console.log('The Exam will be passed');
}

// unary Operators : ++,--
let x = 10;
x = x + 1;
x += 1;
x++;
console.log(x);


// logocal Operators : && ,||,^
// AND => T && T -> T
// OR  => F || F -> F
// XOR => T ^ F , F ^ T -> T

let inRealation = true;
let parentsAgreed = true;
if (inRealation && parentsAgreed) {
    console.log('Get marry soon');
} else {
    console.log(`wait untill the parents Agreed`);
}


// Ternary Operator : ?:    short of the if else condition
Marks = 75;
let Message = '';
(Marks <= 35) ? Message = 'you Failed Exam': Message = 'you passed Exam';
console.log(Message)


let time = 12;
let day = (time <= 6) ? 'good moring' : 'good afternoon';
console.log(day)



// Equality Operators :== ,===
a = 10;
b = '10';
if (a === b) {
    console.log('Both are Equal');
} else {
    console.log('Both are Different');
}