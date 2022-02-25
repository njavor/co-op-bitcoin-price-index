document.addEventListener('DOMContentLoaded', updateTime)

function updateTime(){
    let kimeno = document.querySelector("#les");

    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (seconds < 10){
        seconds = "0" + seconds;
    }
    let t_str = hours + ":" + minutes + ":" + seconds + " ";
    if(hours > 11){
        t_str += "PM";
    } 
    else {
        t_str += "AM";
    }
    kimeno.innerHTML = t_str;
}
setInterval(updateTime, 1000);