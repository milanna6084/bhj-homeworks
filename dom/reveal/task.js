/*
const revealElements= document.querySelectorAll('.reveal');

window.addEventListener('scroll', function () {  
let topPage = this.window.pageYOffset;      
let bottomPage = window.pageYOffset + this.window.innerHeight;
for (element of revealElements) {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    if (( topPage >= elementTop <= bottomPage ) || ( topPage >= elementBottom <= bottomPage )) {
         element.classList.add('reveal_active');
    } else {
         element.classList.remove('reveal_active');
    }
}
});


*/

const revealElements= document.querySelectorAll('.reveal');

window.addEventListener('scroll', function () {  
     const topPage = this.window.pageYOffset;
     const bottomPage = this.window.pageYOffset + this.window.innerHeight;

     for (element of revealElements) {
          const {
               top,
               bottom
          } = element.getBoundingClientRect();

          if (
               (topPage >= top && top <= bottomPage)
               || (topPage >= bottom && bottom <= bottomPage)
          ) {
               element.classList.add('reveal_active');
          } else {
               element.classList.remove('reveal_active');
          }
     }
});