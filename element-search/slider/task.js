const sliderCollection = document.querySelectorAll('div.slider__item');
const sliderCollectionCount = sliderCollection.length;
const sliderDotsCollection = document.querySelectorAll('.slider__dot');

function showActiveSlide(index, order) {
    if (sliderCollection[index].className !== 'slider__item slider__item_active') {
        return false;
    }

    sliderCollection[index].className = 'slider__item';
    sliderDotsCollection[index].className = 'slider__dot';

    if (order === 'prev') {
        (index === 0) ? index = sliderCollectionCount - 1 : index -= 1;
    }
    else {
        (index === sliderCollectionCount - 1) ? index = 0 : index += 1;
    }

    sliderCollection[index].className = 'slider__item slider__item_active';
    sliderDotsCollection[index].className = 'slider__dot slider__dot_active';

    return true;
}

function showRrevSlide() {
    for (let i = sliderCollectionCount - 1; i >= 0; i--) {
        if (showActiveSlide(i, 'prev')) {
            return;
        }
    }
}

function showNextSlide() {
    for (let i = 0; i < sliderCollectionCount; i++) {
        if (showActiveSlide(i, 'next')) {
            return;
        }
    }
}

function showSlideByDots() {
    let activeDotIndex = Array.from(sliderDotsCollection).indexOf(this);

    for (let i = 0; i < sliderCollectionCount; i++) {
        sliderCollection[i].className = 'slider__item';
        sliderDotsCollection[i].className = 'slider__dot';
    }

    this.className = 'slider__dot slider__dot_active';

    if (activeDotIndex !== -1) {
        sliderCollection[activeDotIndex].className = 'slider__item slider__item_active';
    }
}

document.querySelector('.slider__arrow_prev').onclick = showRrevSlide;
document.querySelector('.slider__arrow_next').onclick = showNextSlide;

for (let i = 0; i < sliderCollectionCount; i++) {
    if (sliderCollection[i].className === 'slider__item slider__item_active') {
        sliderDotsCollection[i].className = 'slider__dot slider__dot_active';
    }

    sliderDotsCollection[i].onclick = showSlideByDots;
}