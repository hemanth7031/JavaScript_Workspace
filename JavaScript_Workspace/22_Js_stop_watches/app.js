
let count = 0;
let minutes = 0;
let seconds = 0;
let millisecounds = 0;
let inteval = 0;  //clear interval Key
let timeRunning = false;


let startTimer = () => {
    count++;
    minutes = Math.floor((count / 60) / 60);
    seconds = Math.floor((count / 100) - (minutes * 60));
    millisecounds = Math.floor(count - (seconds * 100) - (minutes * 6000));

    document.querySelector('#minutes').innerText = leadingZero(minutes);
    document.querySelector('#seconds').innerText = leadingZero(seconds);
    document.querySelector('#m-seconds').innerText = leadingZero(millisecounds);
}




//click on start button
let startButton = document.querySelector('#start-btn');
startButton.addEventListener('click', function () {
    if (!timeRunning) {
        inteval = setInterval(startTimer, 10);
        timeRunning = true;
    }

})





//click on stop button
let stopButton = document.querySelector('#stop-btn');
stopButton.addEventListener('click', function () {
    clearInterval(inteval);
})





//click on reset button
let resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', function () {
    clearInterval(inteval);
    count = 0;
    minutes = 0;
    seconds = 0;
    millisecounds = 0;
    inteval = 0;
    timeRunning = false;


    document.querySelector('#minutes').innerText = "00";
    document.querySelector('#seconds').innerText = "00";
    document.querySelector('#m-seconds').innerText = "00";
})



// leading Zero

let leadingZero = (time) => {
    if (time <= 9) {
        return "0" + time;

    } else {
        return time;
    }
}