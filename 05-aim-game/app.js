const startBtn = document.getElementById('start');
const screens = document.querySelectorAll('.screen');
const timeList = document.getElementById('time-list');
const timeEl = document.getElementById('time');
const boardEl = document.getElementById('board');

let time = 0;
let score = 0;
let moveCircleInterval = undefined;
let directionX = 'up';
let directionZ = 'right';

startBtn.addEventListener('click', event => {
    event.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
});

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle()
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const {
        width,
        height
    } = boardEl.getBoundingClientRect();
    const X = getRandomNumber(0, width - size);
    const Y = getRandomNumber(0, height - size);

    circle.classList.add('circle')
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${X}px`;
    circle.style.left = `${Y}px`;

    circle.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

    boardEl.append(circle);

    moveCircleInterval = setInterval(() => {
        moveCircle(circle, width, height, size)
    }, 250);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

boardEl.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        clearInterval(moveCircleInterval);
        createRandomCircle();
    }
});

function moveCircle(circle, width, height, size) {
    let top = 0;
    let left = 0;
    let randomNumber = getRandomNumber(10, 20);
    let widthZero = 0 + size + randomNumber;
    let heightZero = 0 + size + randomNumber;
    width = width - size - randomNumber;
    height = height - size - randomNumber;

    if (circle.offsetTop >= height) {
        directionX = 'up';
    }
    if (circle.offsetLeft >= width) {
        directionZ = 'left';
    }

    if (circle.offsetTop <= heightZero) {
        directionX = 'down';
    }

    if (circle.offsetLeft <= widthZero) {
        directionZ = 'right';
    }

    if (directionX === 'down') {
        top = circle.offsetTop + randomNumber;
    } else {
        top = circle.offsetTop - randomNumber;
    }

    if (directionZ === 'right') {
        left = circle.offsetLeft + randomNumber;
    } else {
        left = circle.offsetLeft - randomNumber;
    }

    circle.style.top = `${top}px`;
    circle.style.left = `${left}px`;
    
    console.log('I am alive');
}

function finishGame() {
    boardEl.innerHTML = `<h1>Ваш счет : <span class="primary">${score}</span></h1>`;
    timeEl.parentNode.classList.add('hide');
    clearInterval(moveCircleInterval);
}