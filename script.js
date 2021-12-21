let side = 0;
let color = '';

const colorSelectButtons = document.querySelectorAll('.colorButtonsContainer > div');
for (let i of colorSelectButtons) {
    i.style.background = i.classList;
    const selectedColorButton = document.querySelector(`.${i.classList}`);
    if (selectedColorButton.classList != 'salmon') {
        selectedColorButton.addEventListener('click', function (e) {color = e.target.classList})
    } else {
        selectedColorButton.addEventListener('click', function () {color = 'random'});
    }
}

//This function give colors to pixels.
function rainbow (pixel, color) {
    if (color == "random") {
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        const randomColor = `rgb(${red},${green},${blue})`;
        pixel.style.background = randomColor;
    } else {
        pixel.style.background = color;
    }
}

function createPixel (pixelPerSide, pixelSize, size) {
    document.querySelector('.sizeButtonsContainer').style.visibility = "hidden";
    document.querySelector('.choose').textContent = `${size} pixels`;
    for (i = 0 ; i < pixelPerSide * pixelPerSide ; i++) {
        const pixel = document.createElement('div');

        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseenter', function (e) {rainbow (e.target, color)});

        container.appendChild(pixel);
    }
    side = pixelPerSide;
}

const container = document.querySelector('#pixelContainer');

//Buttons to generate pixels.
const generateSmallPixels = document.querySelector('.generatorSmall');
const generateMediumPixels = document.querySelector('.generatorMedium');
const generateLargePixels = document.querySelector('.generatorLarge');
generateSmallPixels.addEventListener('click', function () {createPixel(100, 6, 'Small');});
generateMediumPixels.addEventListener('click', function () {createPixel(75, 8, 'Medium');});
generateLargePixels.addEventListener('click', function () {createPixel(50, 12, 'Large');});

//Button to reset pixels.
const resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', resetContainer);
function resetContainer () {
    for (i = 0 ; i < side * side ; i++) {
        const pixelToRemove = document.querySelector('.pixel');
        container.removeChild(pixelToRemove);
    }
    document.querySelector('.sizeButtonsContainer').style.visibility = "visible";
    document.querySelector('.choose').textContent = '';
}