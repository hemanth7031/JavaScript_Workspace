// secound coding-logic
// printMessage

let printMessage = (message, color) => {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = message;
    h1Tag.style.padding = '14px';
    h1Tag.style.backgroundColor = color;
    h1Tag.style.boxShadow = '0 0 10px black';
};







// Good Morning Button

let gmButton = document.querySelector('#gm-btn');
gmButton.addEventListener('click',function(){
    printMessage('GoodMorning','green')
})


// Good Afternoon Button

let gaButton = document.querySelector('#ga-btn');
gaButton.addEventListener('click',function(){
    printMessage('GoodAfternonn','red')
})


// Good Evening Button

let geButton = document.querySelector('#ge-btn');
geButton.addEventListener('click',function(){
    printMessage('GoodEvening','yellow')
})

// Good Night Button

let gnButton = document.querySelector('#gn-btn');
gnButton.addEventListener('click',function(){
    printMessage('GoodNight','purple')
})