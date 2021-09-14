const printDays = document.getElementById("day");
const printHours = document.getElementById("hour");
const printMinutes = document.getElementById("minute");
const printSeconds = document.getElementById("second");

const newYears = '01 01 2022';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = new Date(newYearsDate - currentDate)/1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) %60;
    const seconds = Math.floor(totalSeconds %60);

    printDays.innerHTML = (days);
    printHours.innerHTML = (hours);
    printMinutes.innerHTML = (minutes);
    printSeconds.innerHTML = (seconds);



}
countdown();

setInterval(countdown, 1000);