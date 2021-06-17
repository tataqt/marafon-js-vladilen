const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount -1)*100}vh`;

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

document.addEventListener('keydown', event => {
    if (event.code === 'ArrowUp') {
        changeSlide('up');
    } else if (event.code === 'ArrowDown') {
        changeSlide('down');

    } else if (event.code === 'KeyW') {
        changeSlide('up');

    } else if (event.code === 'KeyS') {
        changeSlide('down');
    }
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex*height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex*height}px)`;
};