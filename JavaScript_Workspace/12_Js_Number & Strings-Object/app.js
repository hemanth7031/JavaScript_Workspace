// Number

// Max number
console.log(Number.MAX_SAFE_INTEGER);

//Min number
console.log(Number.MIN_SAFE_INTEGER);

//positive infinity
console.log(Number.POSITIVE_INFINITY);

// negitive infinity
console.log(Number.NEGATIVE_INFINITY);


// parse int
let str1 = '100.45';
let num1 = Number.parseInt(str1);
console.log(`${typeof str1} => ${typeof num1}`);

// parse float
let str2 = '100.45';
let num2 = Number.parseFloat(str1);
console.log(`${typeof str2} => ${typeof num2}`);



// toString
let num3 = 100;
let numString = num3.toString();
console.log(`${typeof num3} => ${typeof numString}`);

// toFixed
let amount = 520;
console.log(amount.toFixed(2));




// string Object
let msg = String('Good Morning');

//lenth 
console.log(msg.length);

//lower case
console.log(msg.toLowerCase());

// upper case
console.log(msg.toUpperCase());

// substring(start index ,no of char)
console.log(msg.substring(5)); //morning


// char
console.log(msg.charAt(5)); //M

//charCode(ASSCII)
console.log(msg.charCodeAt(5)); //77


// JSON Object
/*
    String => Object : Parse()
    Object => String : Stringfy()
*/

let student = {
    name: 'rajan',
    age: 23,
    course: 'IT',
    college: 'pydah'
}
console.log(student);

// Object to String
let studentStr = JSON.stringify(student);
console.log(studentStr);

// String to Object
let newStudent = JSON.parse(studentStr);
console.log(newStudent);