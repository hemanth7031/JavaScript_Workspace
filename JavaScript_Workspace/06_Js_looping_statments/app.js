// Conditional Statment
// ------------------------
// 1)if statment
// 2)switch statment
// 3)For loop
// 4)while loop
// 5)Do-While loop


/*
 for(intialization;condition;increments/decrements){
    statments
} 
*/

/* 
print the values for 0-10 diff by 1
*/

// 1st Method
for (let i = 0; i <= 10; i++) {
    console.log(i);

}


// 2nd Method
// let result = '';

// for (let i = 0; i <= 10; i++) {

//     if (i <= 9) {
//         result += `${i},`;
//     } else {
//         result += `${i}`;
//     }

// }
// console.log(result);

/* 
print the values for 20-0 diff by 2
*/
let result = '';
for (let i = 20; i >= 0; i -= 2) {

    if (i <= 20) {
        result += `${i},`;
    } else {
        result += `${i}`;
    }
}
console.log(result);


// stars

let number = 5;
result = '';
for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
        result += `*`;
    }
    result += `\n`;
}
console.log(result);

/* 
1
12
123
1234
12345
*/

result = '';
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        result += `${j}`;

    }
    result += `\n`
}
console.log(result);


/*
1
22
333
4444
55555
*/

result = '';
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        result += `${i}`;

    }
    result += `\n`

}
console.log(result);


/*
12345
1234
123
12
1
*/

result = '';
for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        result += `${j}`;

    }
    result += `\n`;

}
console.log(result);


/*
55555
4444
333
22
1
*/
result = '';
for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        result += `${i}`;

    }
    result += `\n`;

}
console.log(result);