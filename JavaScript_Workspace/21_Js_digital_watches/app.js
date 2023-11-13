// indian watch

let indianWatch = () =>{
    let options ={timeZone:'Asia/kolkota'};
    let currentDate = new Date().toLocaleDateString('en-US',options);
    let currentTime = new Date().toLocaleTimeString('en-US',options);
    console.log(currentDate);
    document.querySelector('#indian-date').innerText=currentDate;
    document.querySelector('#indian-time').innerText=currentTime;
};
indianWatch();  