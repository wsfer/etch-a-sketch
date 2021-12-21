let side = 0;
let color = '';

//This will give colors and a event to buttons on 'Select a Color'.
const colorSelectButtons = document.querySelectorAll('.colorButtonsContainer > div');
for (let i of colorSelectButtons) {
    i.style.background = i.classList;
    const myEle = document.querySelector(`.${i.classList}`)
    if (myEle.classList == 'salmon') {
        myEle.addEventListener('click', giveRandomColor);
    } else {
        myEle.addEventListener('click', function (e) {
            color = e.target.classList;
        });
    }
}

function giveRandomColor () {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    color = `rgb(${red}, ${green}, ${blue})`;
}

function createPixel (pixelPerSide, pixelSize) {

    document.querySelector('.sizeButtonsContainer').style.visibility = "hidden";

    for (i = 0 ; i < pixelPerSide * pixelPerSide ; i++) {
        const pixel = document.createElement('div');

        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseenter', function (e) {
            e.target.style.background = color;
        });

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
const generatorSmall = document.querySelector('.generatorSmall');
const generatorMedium = document.querySelector('.generatorMedium');
const generatorLarge = document.querySelector('.generatorLarge');
generatorSmall.addEventListener('click', function () {createPixel(50, 12);});
generatorMedium.addEventListener('click', function () {createPixel(75, 8);});
generatorLarge.addEventListener('click', function () {createPixel(100, 6);});

//Button to reset pixels.
const resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', resetContainer);