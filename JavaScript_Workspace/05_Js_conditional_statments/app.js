// Conditional Statment
// ------------------------
// 1)if statment
// 2)switch statment
// 3)For loop
// 4)while loop
// 5)Do-While loop



// if statment

let time = 18;
let wishMessage = '';
if (time <= 12) {
    wishMessage = 'Good Morning';
} else if (time > 12 && time <= 17) {
    wishMessage = 'Good Afternoon';
} else if (time > 17 && time <= 23) {
    wishMessage = 'Good Evening';
} else {
    wishMessage = 'Enter Proper time';
}
console.log(wishMessage);


// switch statment

let day = new Date().getDate();
let today = '';
day = 0;
switch (day) {
    case 0:
        today = 'sunday';
        break;
    case 1:
        today = 'Monday';
        break;
    case 2:
        today = 'Tuesday';
        break;
    case 3:
        today = 'Wednesday';
        break;
    case 4:
        today = 'Thursday';
        break;
    case 5:
        today = 'Friday';
        break;
    case 6:
        today = 'sunday';
        break;


    default:
        today = 'Enter proper day '
        break;
}
console.log(`Today is : ${today}`);