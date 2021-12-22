const clickerCounter = document.getElementById('clicker__counter');
let clickerCounterContent = clickerCounter.textContent;
const clickerSpeed = document.getElementById('clicker__speed');
let clickerSpeedContent = clickerSpeed.textContent;
const cookie = document.getElementById('cookie');
let prevClickDate;

function changeSize() {
    const scale = 1.1;
    const date = new Date();
    const lastClickDate = date.getTime() / 1000;

    clickerCounterContent++;
    clickerCounter.innerText = clickerCounterContent;

    if (clickerCounterContent >= 2) {
       clickerSpeedContent = (1 / (lastClickDate - prevClickDate)).toFixed(2);
       clickerSpeed.innerText = clickerSpeedContent;
    }

    prevClickDate = lastClickDate;
    
    if (clickerCounterContent % 2 !== 0) {
        cookie.width *= scale;
    } else {
        cookie.width /= scale;
    } 
}

cookie.onclick = changeSize;