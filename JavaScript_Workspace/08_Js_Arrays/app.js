/*
JavaScript Arrays
----------------
An indexed collections of an elements(Object/ String/ array/boolen/number) 
index-0
*/

//Creation of an Array
let numbers = [10, 20, 30];
console.log(numbers);



//Access the elements of any array
console.log(numbers[1]);

//Access the non-existing
console.log(numbers[3]);

//Iteration of array element
let color = ['white', 'black', 'red', 'silver', 'purple', 'blue', 'yellow'];


//1. normal for-loop
result = '';
let i = 0;
for (let i = 0; i < color.length; i++) {
    result += `${color[i]} `

}
console.log(result);


//2. for-in loop  upto ES5

result = '';
for (let index in color) {
    result += `${color[index]} `
}
console.log(result);

//3. for-of loop from ES6
result = '';
for (let colors of color) {
    result += `${colors} `;
}
console.log(result);


//4. forEach function upto ES5
result = '';
color.forEach(function(colors) {
    result += `${colors} `;
});
console.log(result);


//5.forEach function ES6
result = '';
color.forEach((colors) => {
    result += `${colors} `
});
console.log(result);

// Array of Objects
let employees = [{
        id: 1,
        name: 'jhon',
        age: 40,
        desigination: 'Manager',
        isActive: true
    },
    {
        id: 2,
        name: 'wilson',
        age: 46,
        desigination: 'sr.Manager',
        isActive: false
    },
    {
        id: 3,
        name: 'rajan',
        age: 25,
        desigination: 'software engineer',
        isActive: true
    },
    {
        id: 4,
        name: 'laura',
        age: 28,
        desigination: 'tech lead',
        isActive: false
    },
    {
        id: 5,
        name: 'david',
        age: 26,
        desigination: 'software engineering',
        isActive: true
    }
]

// access an employees
console.log(employees);


// iteration employees
result = '';

for (let employee of employees) {
    result += `${employee.name} `;

}
console.log(result);

// filter the junior employees : age<l=30

let juniorEmployee = [];
for (const employee of employees) {
    if (employee.age <= 30) {
        juniorEmployee.push(employee);
    }
}
console.log(juniorEmployee);

// filter active employees :isActive
let activeEmployee = [];
for (const employee of employees) {
    if (employee.isActive) {
        activeEmployee.push(employee)
    }
}
console.log(activeEmployee);


//Functions of Arrays
/* 
shift()-> remove the  first element from array
unshift()-> add the  first element from array
push()-> add the last element from array
pop()-> remove the last element from array
short()-> to sort the array in ascending order
reverse()-> to reverse the array elements
splice()-> to remove/repalace from the middle
split()->to split a string to an array
join()-> to join the array elements to staring
slice()->to creat a new copy of  an array
foreach()-> to loop the array elements
find()->find exact element with condition from
filter()-> to filter the array element
*/


//shift()-> remove the  first element from array
console.log('..........shift().........')
let technologies = ['html', 'css', 'javascript', 'jquery', 'boostrap'];
console.log(technologies);
technologies.shift();
console.log(technologies);

//unshift()-> add the  first element from array
console.log('..........unshift().........')
technologies = ['html', 'css', 'javascript', 'jquery', 'boostrap'];
console.log(technologies);
technologies.unshift('nodels');
console.log(technologies);

//push()-> add the last element from array
console.log('..........push().........')
technologies = ['html', 'css', 'javascript', 'jquery', 'boostrap'];
console.log(technologies);
technologies.push('nodels');
console.log(technologies);

//pop()-> remove the last element from array
console.log('..........pop().........')
technologies = ['html', 'css', 'javascript', 'jquery', 'boostrap'];
console.log(technologies);
technologies.pop('nodels');
console.log(technologies);

//short()-> to sort the array in ascending order
console.log('..........sort().........')
technologies = ['html', 'css', 'javascript', 'jquery', 'boostrap'];
console.log(technologies);
technologies.sort();
console.log(technologies);

//reverse()-> to reverse the array elements
console.log('..........reverse().........')
technologies = ['html', 'css', 'javascript', 'jquery', 'boostrap'];
console.log(technologies);
technologies.reverse('nodels');
console.log(technologies);

//reveres order() -> remove the function element from array
console.log('..........unshift().........')
technologies = ['html', 'css', 'javascript', 'jquery', 'boostrap'];
console.log(technologies);
technologies.sort().reverse();
console.log(technologies);

//splice(index) -> remove the all the element given index
console.log('..........splice().........')
technologies = ['html', 'css', 'javascript', 'jquery', 'boostrap'];
console.log(technologies);
technologies.splice(2);
console.log(technologies);

//splice(index,no-of elements) -> remove the given no of element from the given index
console.log('..........splice(index).........')
technologies = ['html', 'css', 'javascript', 'jquery', 'boostrap'];
console.log(technologies);
technologies.splice(2, 1);
console.log(technologies);


//splice(index,1,replace elements) ->it  replaces the given no of element from the given index
console.log('..........splice(index).........')
technologies = ['html', 'css', 'javascript', 'jquery', 'boostrap'];
console.log(technologies);
technologies.splice(2, 1, 'nodejs');
console.log(technologies);

// join()-> to join the array elements to staring
console.log('..........join().........')
technologies = ['html', 'css', 'javascript', 'jquery', 'boostrap'];
console.log(technologies);
let techString = technologies.join('-');
console.log(techString);

// filter()-> to filter the array element
activeEmployee = [];
for (let employee of employees) {
    if (employee.isActive) {
        activeEmployee.push(employee);

    }
}
console.log(activeEmployee);



// fiter Anagrams
var groupAnagrams = function(strs) {
    const result = new Map()

    for (let str of strs) {
        const sorted = str.split('').sort().join('')
        if (result.has(sorted)) {
            result.get(sorted).push(str)
        } else {
            result.set(sorted, [str])
        }
    }
    return Array.from(result.values())
};
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));