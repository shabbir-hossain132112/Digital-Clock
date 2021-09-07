setInterval(setTime, 1000);

function setTime() {
    currentTime = new Date();
    
    const hour = document.getElementById('hour').innerText = getMeridianHour(currentTime.getHours());
    const minute = document.getElementById('minute').innerText = formatTime(currentTime.getMinutes());
    const second = document.getElementById('second').innerText = formatTime(currentTime.getSeconds());
    const meridian = document.getElementById('meridian').innerText = getMeridian(currentTime.getHours());
}

function formatTime(value) {
    if(value === undefined || value === null || value === '') return null;
    if(value > 9) return value;
    return `0${value}`;
}

function getMeridianHour(hour) {
    if(hour === undefined || hour === null || hour === '') return null;
    if(hour > 11) return formatTime(hour - 12);
    return formatTime(hour);
}

function getMeridian(hour) {
    if(hour === undefined || hour === null || hour === '') return null;
    if(hour > 11) return 'pm';
    return 'am';
}


setTime();
