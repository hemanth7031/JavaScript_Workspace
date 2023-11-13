// storage
// -------------
// localStorage -> string -> Json.strinify() , parse()
//   ->setItem('key', 'value');  // create / update
//   ->getItem('key');  //read
//   ->removeItem('key');   // delete
//   ->clear();


//sessionstorage ->
//   ->setItem('key', 'value');  // create / update
//   ->getItem('key');  //read
//   ->removeItem('key');   // delete
//   ->clear();


// Local storage of simple string

let empName = 'jhon';

// setItem
localStorage.setItem('name', empName);

// getItem
console.log(localStorage.getItem('name'));

// remove
localStorage.removeItem('name');

//clear
localStorage.clear()


// local storagr with an array

let colors = [{ id: 1, name: 'white' }, { id: 2, name: 'black' }, { id: 3, name: 'red' }, { id: 4, name: 'yellow' }];

localStorage.setItem('color','colors'); //[object,Object]
localStorage.setItem('color',JSON.stringify(colors)); // convert object to string => data


let theColors = JSON.parse(localStorage.getItem('color'));
console.log(theColors,'theColors')
console.log(localStorage.getItem('color'));//[object,Object]


//session storage simple string

let studentName = 'rajan';


// setItem
sessionStorage.setItem('name',studentName);

// getItem
console.log(sessionStorage.getItem('name'))




 

