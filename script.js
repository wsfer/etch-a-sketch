let side = 0;
let color = '';

//This will give colors and a event to buttons on 'Select a Color'.
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

function createPixel (pixelPerSide, pixelSize) {

    document.querySelector('.sizeButtonsContainer').style.visibility = "hidden";

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

function resetContainer () {
    for (i = 0 ; i < side * side ; i++) {
        const pixelToRemove = document.querySelector('.pixel');
        container.removeChild(pixelToRemove);
    }
    document.querySelector('.sizeButtonsContainer').style.visibility = "visible";
}

const container = document.querySelector('#pixelContainer');

//Buttons to generate pixels.
const generateSmallPixels = document.querySelector('.generatorSmall');
const generateMediumPixels = document.querySelector('.generatorMedium');
const generateLargePixels = document.querySelector('.generatorLarge');
generateSmallPixels.addEventListener('click', function () {createPixel(100, 6);});
generateMediumPixels.addEventListener('click', function () {createPixel(75, 8);});
generateLargePixels.addEventListener('click', function () {createPixel(50, 12);});

//Button to reset pixels.
const resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', resetContainer);