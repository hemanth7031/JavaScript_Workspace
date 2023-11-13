/*
JavaScript Function
--------------------
-> it is a block of statments which taken in a set parameters and does some process and returns the result.
->Re-usability
*/




// print from 0-to 10 

result = '';
for (let i = 0; i <= 10; i++) {
    result += `${i} `;

}
console.log(result);

// print from 10-50 numbers diff 2
function printNames(startNumber, endNUMber, increment) {
    let result = '';
    for (let i = startNumber; i <= endNUMber; i += increment) {
        result += `${i} `;

    }
    console.log(result);
}
printNames(startNumber = 10, endNUMber = 50, increment = 2); //function call



//functions without parameters
function greet() {
    console.log('Good moring');
}
greet();

//fuction Expressions
let greetMe = function() {
    console.log('Good Morning');
}
greetMe();

//function with parameters
let wishMe = function(name, age) {

    let message = `hello ${name} you are ${age} old`;
    console.log(message);
};
wishMe(name = 'jhon', age = '23');


// function wiith return type
let sum = function(a, b) {
    let result = 2 * (a + b);
    return result;
}
let output = sum(a = 10, b = 20);
console.log(output);


//function with an   object as parameter
let printObject = function(obj) {
    console.log(obj);
}
printObject(obj = { name: 'jhon', age: 34 });


let mobile = {
    brand: 'apple',
    color: 'silver',
    price: 35000
}
printObject(mobile);


// function with an arry as a parameter
let printArray = function(array) {

    let result = '';
    for (let index in array) {
        result += `INDEX ${index}=>value ${array[index]}\n`
    }
    console.log(result);
}
printArray(array = [10, 20, 30, 40, 50]);


let colors = ['red', 'white', 'pink', 'yellow', 'green', ];
printArray(colors);

//function inside an object

let student = {
    firstName: 'arjun',
    lastName: 'reddy',
    fullName: function() {
        return 'Arjun Reddy';
    }
}
console.log(student.fullName());


// Nested Function
let outerFn = function() {
    console.log('I am an outer function');
    let innerFn = function() {
        console.log('I am an inner function');
    };
    innerFn();
};
outerFn();

// Twisted Function
let twisted = function() {
    name = 'jhon';
    let printStudent = function() {
        let student = {
            name: 'rajan',
            age: 23,
            course: 'Cse'
        };
        return student;

    };
    return printStudent;
};
let innerFn = twisted();
let studentObj = innerFn();
console.log(studentObj.name);

// preper chicken curry with function

let glassBlow = function(rawChicken, masala) {
    //marinating the chicken
    let marinatingChicken = `mixing :(${rawChicken} + ${masala}) `
    return marinatingChicken;
};
let cookedblow = function(marinatingChicken, water) {
    // cooking logic
    let cookedChicken = `cooking:(${marinatingChicken} + ${water}) `
    return cookedChicken;

};
let eatingPlate = function(cookedChicken, rice) {
    //eating logic
    let eating = `eating:(${cookedChicken} + ${rice}) `
    console.log(eating);
};

let rawChicken = '3kgs chicken';
let masala = 'pepper,garlic,salt';
let marinatingChicken = glassBlow(rawChicken, masala);
let water = '1Ltr water';
let cookedChicken = cookedblow(marinatingChicken, water);
let rice = '1kg rice';
let eating = eatingPlate(cookedChicken, rice);