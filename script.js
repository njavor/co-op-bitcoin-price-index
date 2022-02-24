document.addEventListener('DOMContentLoaded', updateTime())

function updateTime(){
    let currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    let t_str = hours + ":" + minutes + " ";
    if(hours > 11){
        t_str += "PM";
    } else {
        t_str += "AM";
    }
    document.innerHTML = t_str;
}
