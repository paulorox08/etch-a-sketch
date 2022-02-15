const container = document.querySelector("#container");

let width = 8;
let squaredWidth = width ** 2;

let initialWidth = '30';
let initialHeight = '30';

let i = 1;

const smallButton = document.querySelector('#small');
const defaultButton = document.querySelector('#default');
const largeButton = document.querySelector('#large');

function sizeOfGrid() {
    let width = 8;

    smallButton.addEventListener('click', () => {
        width *= 2;
        let squaredWidth = width ** 2;
        initialWidth /= 2;
        initialHeight /= 2;
        createGrid(squaredWidth);
    });

    defaultButton.addEventListener('click', () => {
        createGrid(squaredWidth);
    });

    largeButton.addEventListener('click', () => {
        width /= 2;
        let squaredWidth = width ** 2;
        initialWidth *= 2;
        initialHeight *= 2;
        createGrid(squaredWidth);
    })
};

function createGrid(squaredWidth) {
    while (i <= squaredWidth) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor = 'black';
        box.style.width = initialWidth + 'px';
        box.style.height = initialHeigwht + 'px';
        container.appendChild(box);
        i ++;
    
    };
}

sizeOfGrid()
