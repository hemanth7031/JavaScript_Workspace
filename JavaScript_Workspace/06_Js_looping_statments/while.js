// initialization;
// while(condition){
//     //statments
//     //increment/Decriment
// }
// -------------------------


/* 
print the values for 0-10 diff by 1
*/
let result = '';
let i = 0;
while (i <= 10) {

    if (i <= 9) {
        result += `${i} ,`
    } else {
        result += `${i}`
    }

    i++;
}
console.log(result);



/* 
print the values for 20-0 diff by 2
*/

result = '';
i = 20;
while (i >= 0) {
    if (i >= 0)
        result += `${i},`;
    else {
        result += `${i}`;
    }
    i -= 2;
}
console.log(result);

// stars

let number = 5;
result = '';
i = 1;
while (i <= number) {
    let j = 1;
    while (j <= i) {
        result += `*`;
        j++;
    }
    result += `\n`
    i++;
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
i = 1;
while (i <= 5) {
    let j = 1;
    while (j <= i) {
        result += `${j}`
        j++;
    }
    result += `\n`
    i++
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
i = 1;
while (i <= 5) {
    let j = 1;
    while (j <= i) {
        result += `${i}`
        j++;
    }
    result += `\n`
    i++;
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
i = 5;
while (i >= 1) {
    let j = 1;
    while (j <= i) {
        result += `${j}`
        j++;
    }
    result += `\n`;
    i--;
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
i = 5;
while (i >= 1) {
    let j = 1;
    while (j <= i) {
        result += `${i}`
        j++;

    }
    result += `\n`;
    i--;
}
console.log(result);