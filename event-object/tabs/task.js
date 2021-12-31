const tabNavigationElements = document.querySelectorAll('.tab');
const tabContentElements = document.querySelectorAll('.tab__content')
const tabNumber = tabNavigationElements.length;

tabNavigationElements.forEach(element => {
    element.onclick = function() {
        let indexActive = Array.from(tabNavigationElements).indexOf(this);

        for( let i =0; i < tabNumber; i++) {
             tabNavigationElements[i].classList.remove('tab_active');
             tabContentElements[i].classList.remove('tab__content_active');
        }
        this.classList.add('tab_active');

        if (indexActive !== -1) {
             tabContentElements[indexActive].classList.add('tab__content_active');
        }

    }
});

