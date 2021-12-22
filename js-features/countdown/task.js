  
const timer = document.getElementById('timer');
let timerContent = timer.textContent;
let intervalId;

function changeTimer_1() {
    if (timerContent === 0 ) {  
        alert('Вы победили в конкурсе!');
        clearInterval(intervalId);
        return;
    }

    timerContent = timerContent - 1;
    timer.innerText = timerContent;
}    

function leadingZero(val) {
    if (val < 10) {
        return `0${val}`;
    }
    return val;
}

function changeTimer_2() {
    let hours = +timerContent.slice(0, 2);
    let minutes = +timerContent.slice(3, 5);
    let seconds = +timerContent.slice(6, 8);

    timerContent = `${leadingZero(hours)}:${leadingZero(minutes)}:${leadingZero(seconds)}`;

    if (timerContent === '00:00:00') {
        window.location.assign('task2.rar');
        clearInterval(intervalId);
        return;
    }
    
    if (seconds > 0) {
        seconds -= 1;
    } else if (minutes > 0) {
        minutes -=1; 
        seconds = 59;
    } else if (hours > 0) {
        hours -= 1;
        minutes = 59; 
        seconds = 59;              
    }

    timerContent = `${leadingZero(hours)}:${leadingZero(minutes)}:${leadingZero(seconds)}`;

    timer.innerText = timerContent;
}
 
 intervalId = setInterval(changeTimer_1, 1000);
/* intervalId = setInterval(changeTimer_2, 1000); */ /*В файле task.html  соответствует второму варианту таймера*/