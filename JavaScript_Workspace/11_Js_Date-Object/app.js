// date object
let date = new Date()
console.log(date);


// properdate
let properDate = new Date().toLocaleDateString();
console.log(properDate);

// properTime
let properTime = new Date().toLocaleTimeString();
console.log(properTime);


// USA time zone
let options = { time: 'America/New_york' };
let usaDate = new Date().toLocaleDateString('en-us', options);
console.log(usaDate);

let Tday = new Date().getDay();
console.log(Tday);

// today
let day = new Date().getDate();
let today = '';
day = 5;
switch (day) {
    case 0:
        today = 'sunday';
        break;
    case 1:
        today = 'monday';
        break
    case 2:
        today = 'tuesday';
        break;
    case 3:
        today = 'wednesday';
        break;
    case 4:
        today = 'thursday';
        break;
    case 5:
        today = 'friday';
        break;
    case 6:
        today = 'saturday';
        break;

    default:
        today = 'enter proper day';
        break;
}
console.log(`Today is ${today}`);


//month
let currentMonth = new Date().getMonth();
console.log(currentMonth);