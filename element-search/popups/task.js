const modalMainWindow = document.getElementById('modal_main');
const modalSuccessWindow = document.getElementById('modal_success');
const closeElements = document.getElementsByClassName('modal__close');
const closeElementsCount = closeElements.length;
const showSuccessElements = document.getElementsByClassName('show-success');
const showSuccessElementsCount = showSuccessElements.length;

modalMainWindow.className = 'modal modal_active';

for (let i=0 ; i < closeElementsCount; i++) {
    closeElements.item(i).onclick = () => { 
        modalMainWindow.className = 'modal';
        modalSuccessWindow.className = 'modal';
    };
}

for (let i=0 ; i < showSuccessElementsCount; i++) {
    showSuccessElements.item(i).onclick = () => {
        modalSuccessWindow.className = 'modal modal_active';
        modalMainWindow.className = 'modal';
    };
}