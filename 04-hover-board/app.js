const board = document.querySelector('#board');
const colors = ['#dccecd', '#fbc608', '#e610cd', '#17cfb6', '#ad1515', '#ba6600', '#2604bd'];
const SQUARE_NUMBER = 800;

for (let index = 0; index < SQUARE_NUMBER; index++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', setColor);
    square.addEventListener('mouseleave', removeColor);
    board.append(square);
}

function setColor(event) {
    const element = event.target;
    //const color = getRandomArrayColor(); Семь новых цветов к дз
    const color = getRandomColor(); // Или рандомный цвет)
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
    const element = event.target;
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomArrayColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomColor() {
    const color1 = Math.floor(Math.random() * 255);
    const color2 = Math.floor(Math.random() * 255);
    const color3 = Math.floor(Math.random() * 255);
    return `rgb(${color1} ${color2} ${color3})`;
}