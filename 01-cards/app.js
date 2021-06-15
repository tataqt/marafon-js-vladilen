const slides = document.querySelectorAll('.slide');


for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClassess();
        slide.classList.add('active');
    });
}

function clearActiveClassess() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    });
}