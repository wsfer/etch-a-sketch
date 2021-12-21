let side = 0;

//This will give colors to buttons on 'Select a Color'.
const colorSelectButtons = document.querySelectorAll('.colors > div');
for (let i of colorSelectButtons) {
    i.style.background = i.classList;
}


function createPixel (pixelPerSide, pixelSize) {
    for (i = 0 ; i < pixelPerSide * pixelPerSide ; i++) {
        const pixel = document.createElement('div');

        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseenter', function (e) {randomColor(e.target)});

        container.appendChild(pixel);
    }
    side = pixelPerSide;
}

function resetContainer () {
    for (i = 0 ; i < side * side ; i++) {
        const pixelToRemove = document.querySelector('.pixel');
        container.removeChild(pixelToRemove);
    }
}

const container = document.querySelector('#container');

//Buttons to generate pixels.
const generatorSmall = document.querySelector('.generatorSmall');
const generatorMedium = document.querySelector('.generatorMedium');
const generatorLarge = document.querySelector('.generatorLarge');
generatorSmall.addEventListener('click', function () {createPixel(50, 12);});
generatorMedium.addEventListener('click', function () {createPixel(75, 8);});
generatorLarge.addEventListener('click', function () {createPixel(100, 6);});

//Button to reset pixels.
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', resetContainer);

function randomColor (element) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    element.style.background = `rgb(${red},${green},${blue})`;
}

