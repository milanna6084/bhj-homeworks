const dropdownValueElement = document.querySelector('.dropdown__value');
const dropdownListElement = document.querySelector('.dropdown__list');

dropdownValueElement.onclick = function() {
    this.closest('div.dropdown').querySelector('ul').classList.add('dropdown__list_active');
}
dropdownListElement.onclick = function(event) {
    dropdownValueElement.innerText = event.target.textContent;
    this.classList.remove('dropdown__list_active');
    return false;
}