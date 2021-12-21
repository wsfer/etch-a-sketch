const container = document.querySelector('#container');

function createPixel (numberPerSide) {
    for (i = 0 ; i < numberPerSide * numberPerSide ; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseenter', function (e) {
            e.target.style.background = 'black';
        });
        container.appendChild(pixel);
    }
    
}

function resetContainer (numberPerSide) {
    for (i = 0 ; i < 16 * 16 ; i++) {
        const pixelToRemove = document.querySelector('.pixel');
        container.removeChild(pixelToRemove);
    }
}

const generatorSmall = document.querySelector('.generatorSmall');
const generatorMedium = document.querySelector('.generatorMedium');
const generatorLarge = document.querySelector('.generatorLarge');
generatorSmall.addEventListener('click', function () {createPixel(32);});
generatorMedium.addEventListener('click', function () {createPixel(64);});
generatorLarge.addEventListener('click', function () {createPixel(100);});

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', resetContainer);