// Geo Location API

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getlatlong,error);
}

function getlatlong(data){
    console.log(data);
    console.log(data.coords.latitude);
    console.log(data.coords.longitude);
}

function error(data){
    console.log(data);
    alert("canot read property")
}