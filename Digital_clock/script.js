
// selecting the Ampm to change according to 12hrs format
let ampm = document.getElementById("ampm")

// Creating a function and getting the current hours,mins & seconds
function displayTime(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let mins = padZero(dateTime.getMinutes());
    let secs = padZero(dateTime.getSeconds());


    // To make the hours to 12 hours format
    if(hr>12){
        hr = hr-12
        ampm.innerHTML = 'PM'
    }
    

document.getElementById('hours').innerHTML = padZero(hr)
document.getElementById('mins').innerHTML = mins
document.getElementById('seconds').innerHTML = secs
}


function padZero(num){
    // if the num is less than 10 add a zero before it 
    return num<10?"0"+num:num 
}

setInterval(displayTime,500)