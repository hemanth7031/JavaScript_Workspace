/*
JavaScript Objects
------------------
Objects is real world entity/thing

*/

// javaScript Object

let camera = {
    brand: 'canon',
    price: 35000,
    color: 'black',
    mfg: 2019
};
console.log(camera);

//access the propertites f an on objects
console.log(camera.brand);

//access the Non-existing propertites
console.log(camera.meghapixcel);

//access the  propertites using dot,[ ] notation
console.log(camera.price);
console.log(camera['price']);


// f or dynamic propertites dot,[ ] notation
let prop = 'brand';
console.log(camera.prop);
console.log(camera[prop]);


//Nested Objects
let student = {
    name: 'Arjun Reddy',
    age: 23,
    cours: 'MBBS',
    adress: {
        street: 'jubilee hills',
        city: 'hyderbad',
        state: 'ts'
    }
}


//access the Nested Objects
console.log(student.adress);

// access the propertie of an Object
console.log(student.adress.city);


//CRUD Operation with an Object


// CREAT Operation
let mobile = {};
mobile.brand = 'apple';
mobile.color = 'red';
mobile.price = 50000
console.log(mobile);


// READ Operation
console.log(mobile.brand);

// Update Operation
console.log(mobile.price);
mobile.price = 45000;
console.log(mobile);