/*const fontSizeElements = document.querySelectorAll('.font-size');
const bookElement = document.getElementById('book');
const bookControlSizeElement = document.querySelector('.book__control_font-size');

bookControlSizeElement.addEventListener('click', function(event) {
    let size = event.target.dataset.size;
    event.preventDefault();

    fontSizeElements.forEach (element => {
        element.classList.remove('font-size_active');      
     });

     event.target.classList.add ('font-size_active');

     bookElement.className = ('book');

     if (size) {
        bookElement.classList.add('book_fs-' + size);
     }
});*/

const bookElement = document.getElementById('book');
const bookControlsElement = document.querySelector('.book__controls');

bookControlsElement.addEventListener('click', function(event) { 
    event.preventDefault();
    
    const {
        size,
        textColor,
        bgColor,
    } = event.target.dataset;

    const elementClassArray = event.target.classList;
    const activeControl = event.target.closest('.book__control').querySelectorAll('a');
    
    activeControl.forEach(element => {
        element.classList.remove(elementClassArray[0] + '_active');      
    });

    event.target.classList.add(elementClassArray[0] + '_active');
    
    function removePrevElement (str) {
        for(element of bookElement.classList) {
            if (element.includes(str)) {
                bookElement.classList.remove(element);
            }
        }
    }
        
    if (size || event.target.className === 'font-size font-size_active') {
        removePrevElement ('book_fs-');
        bookElement.classList.add('book_fs-' + size);
    }

    if  (textColor) {
        removePrevElement ('book_color-');
        bookElement.classList.add('book_color-' + textColor);
    }

    if (bgColor) {
        removePrevElement ('book_bg-');
        bookElement.classList.add('book_bg-' + bgColor);
    }
});