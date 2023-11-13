// find the number of 'O' in the given string
let msg = 'Good Morning';
let findZero = (str) => {
    let count = 0;
    for (let i = 0; i <= str.length - 1; i++) {
        let char = str.charAt(i);
        if (char === 'o' || char === 'O') {
            count++;

        }

    }
    return count;
};
console.log(`The Zero in strings is : ${findZero(msg)}`);



// find the Reveres string of the given  string

msg = 'Good Morning';
let reverseString = (str) => {
    let tempString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        let char = str.charAt(i);
        tempString += char;

    }

    return tempString;
};
console.log(`${msg}=>${reverseString(msg)}`);


// check the given string is palindrom or not
msg = 'ABA';
let isPalindrome = (str) => {
    return (str === reverseString(str));
};
console.log(`${msg} is palindrome ? ${isPalindrome(msg)}`);

// add space
let addSpace = (number) => {
    let tempSpace = '';
    for (let i = 1; i < number.length; i++) {
        tempSpace += ' ';

    }
    return tempSpace;
};






// 4. Triangle string one

msg = 'Hemanth Kumar';

let trinangleOne = (str) => {

    let tempstr = '';
    for (let i = 1; i < str.length; i++) {
        tempstr += `${addSpace(i)}${str.substr(0,i)} \n`;

    }
    return tempstr;

}
console.log(trinangleOne(msg));


// 5. revers triangle string

msg = 'Hemanth Kumar'

let reversTriangle = (str) => {

    let tempstr = '';
    for (let i = 0; i < str.length - 1; i++) {
        tempstr += `${addSpace(i)}${str.substr(i)} \n`;

    }
    return tempstr;

}
console.log(reversTriangle(msg));


// triangle three

msg = 'Hemath Kumar';
let trinangleThree = (str) => {

    let tempstr = '';
    for (let i = str.length; i >= 1; i--) {
        tempstr += `${addSpace(i)}${str.substr(0,i)} \n`

    }
    return tempstr;
}

console.log(trinangleThree(msg));

// triangle  four

msg = 'Hemanth Kumar';
let triangleFour = (str) => {
    let tempstr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        tempstr += `${addSpace(i)}${str.substr(i)} \n`;

    }
    return tempstr;
}
console.log(triangleFour(msg));