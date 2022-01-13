const links = document.querySelectorAll('.has-tooltip');
const header = document.querySelector('.header');
const newElement = document.createElement('div');

newElement.className = 'tooltip';
newElement.style.position = 'absolute';

document.body.prepend(newElement);

const tooltip = document.querySelector('.tooltip');
let prevClickLink;

links.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();

        const linkCoord = e.target.getBoundingClientRect();

        tooltip.style.left = `${linkCoord.left + window.pageXOffset}px`;
        tooltip.style.top = `${linkCoord.bottom + window.pageYOffset}px`;
        tooltip.innerText = e.target.getAttribute('title');
        
        if (prevClickLink === e.target) tooltip.classList.toggle('tooltip_active');
        else tooltip.classList.add('tooltip_active');
        
        prevClickLink = e.target;
    })
})