//  log , info , warn, error , table

// log
console.log('I am a log Message');

// info
console.info('I am a Info Message');


// warn
console.warn('I am a warn Message');

// error
console.error('I am a Error Message');

// table
let student = {
    name: 'hemanth',
    age: 24,
    course: 'Javascript'

};
console.table(student);

//Example of table formate
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const me = new Person("John", "Smith");
  
  console.table(me);