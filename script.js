let side = 0;

function createPixel (numberPerSide) {
    for (i = 0 ; i < numberPerSide * numberPerSide ; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseenter', function (e) {
            e.target.style.background = 'black';
        });
        container.appendChild(pixel);
    }
    side = numberPerSide;
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
generatorSmall.addEventListener('click', function () {createPixel(32);});
generatorMedium.addEventListener('click', function () {createPixel(64);});
generatorLarge.addEventListener('click', function () {createPixel(100);});

//Button to reset pixels.
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', resetContainer);
