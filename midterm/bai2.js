let countdown;
const alarmSound = document.getElementById("alarmSound");
const clockDisplay = document.getElementById("clock");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

function startCountdown() {
    let minutes = parseInt(minutesInput.value);
    let seconds = parseInt(secondsInput.value);
    if (isNaN(minutes) || isNaN(seconds) || minutes < 0 || seconds < 0) {
        alert("Vui lòng nhập số phút và số giây không âm.");
        return;
    }
    let totalTime = minutes * 60 + seconds;
    countdown = setInterval(function() {
        totalTime--;
        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;
        clockDisplay.textContent = formatTime(minutes) + ":" + formatTime(seconds);
        if (totalTime <= 0) {
            clearInterval(countdown);
            alarmSound.play();
            alert("Hết giờ!");
        }
    }, 1000);
}
function resetCountdown() {
    clearInterval(countdown);
    secondsInput.value = "";
    alarmSound.pause();
    alarmSound.currentTime = 0;
    clockDisplay.textContent = "00:00";
}
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
