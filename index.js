const countdown = () => {
    targetDate = new Date('January 31, 2023').getTime();
    currentDate = new Date().getTime();

    gap = targetDate - currentDate;

    //set time
    seconds = 1000;
    minute = seconds * 60;
    hour = minute * 60;
    day = hour * 24;

    //find the time integers to display on the screen
    displayDay = Math.floor(gap / day);
    displayHour = Math.floor((gap % day) / hour );
    displayMinute = Math.floor((gap % hour) / minute);
    displaySeconds = Math.floor((gap % minute) / seconds);

    //set the time units to the frontend
    document.querySelector('#day').innerHTML = displayDay;
    document.querySelector('#hour').innerHTML = displayHour;
    document.querySelector('#minute').innerHTML = displayMinute;
    document.querySelector('#seconds').innerHTML = displaySeconds;
}

// set the countdown to update in real time
setInterval(countdown, 1000)
