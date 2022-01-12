/*const rotatorElements = document.querySelectorAll('.rotator__case');
let caseIndex = 0;

function switchRotatorCase() {
    rotatorElements[caseIndex].classList.remove('rotator__case_active');
    if (caseIndex === rotatorElements.length - 1) {
        caseIndex = -1;
    }
    caseIndex += 1;
    rotatorElements[caseIndex].classList.add('rotator__case_active');
}

setInterval (switchRotatorCase, 1000);*/

const rotatorElements = document.querySelectorAll('.rotator__case');
let caseIndex = 0;
let timer = +rotatorElements[0].dataset.speed;

for (element of rotatorElements) {
    element.style.color = element.dataset.color; 
}

function switchRotatorCase() {    
    rotatorElements[caseIndex].classList.remove('rotator__case_active');

    if (caseIndex === rotatorElements.length - 1) {
        caseIndex = -1;
    }

    caseIndex += 1;
    
    rotatorElements[caseIndex].classList.add('rotator__case_active');
    
    timer = +rotatorElements[caseIndex].dataset.speed;
    
    setTimeout(switchRotatorCase, timer);
}

setTimeout(switchRotatorCase, timer);