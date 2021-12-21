const container = document.querySelector('#container');

function createPixel () {
    for (i = 0 ; i < 16*16 ; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseenter', function (e) {
            e.target.style.background = 'black';
        });
        container.appendChild(pixel);
    }
}

const generator = document.querySelector('.generator');
generator.addEventListener('click', createPixel);