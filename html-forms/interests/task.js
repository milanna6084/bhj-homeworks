const interestsElement = document.querySelectorAll('.interest');
const checkElement = document.querySelectorAll('.interest__check');
const interestsMain = document.querySelector('.interests_main');

interestsMain.addEventListener('change', function (e) {
    const checkChild = e.target.closest('.interest').querySelectorAll('.interest__check');

    for (element of checkChild) {
        element.checked = e.target.checked;
        element.indeterminate = false;
    }

    let currentElement = e.target;

    while (currentElement.closest('ul.interests')) {
        const currentNearList = [];

        for (element of currentElement.closest('ul').children) {
            currentNearList.push(element.querySelector('.interest__check'));
        }

        const currentNearListChecked = currentNearList.every(element => element.checked);

        const currentNearListUnchecked = currentNearList.every(element =>
            (!element.checked && !element.indeterminate)
        );

        const parentElement = currentElement
            .closest('ul.interests')
            .closest('li')
            .querySelector('.interest__check');
        
        if (currentNearListChecked) {
            parentElement.checked = true;
            parentElement.indeterminate = false;
        } else if (currentNearListUnchecked) {
            parentElement.checked = false;
            parentElement.indeterminate = false;
        } else {
            parentElement.indeterminate = true;
            parentElement.checked = false;
        }

        currentElement = parentElement;
    }
});