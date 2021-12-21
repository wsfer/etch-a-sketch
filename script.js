const container = document.querySelector('#container');

function createPixel () {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    container.appendChild(pixel);
}