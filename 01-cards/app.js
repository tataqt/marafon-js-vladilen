function slidesPlugin(activeSlide = 2) {
    const slides = document.querySelectorAll('.slide');

    console.log(activeSlide);

    slides[activeSlide].classList.add('active');

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClassess();
            slide.classList.add('active');
        });
    }

    function clearActiveClassess() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
    }
}

slidesPlugin(Math.floor(Math.random() * 5));
