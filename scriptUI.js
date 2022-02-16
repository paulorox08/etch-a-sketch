const container = document.querySelector('#container');
const widthHeight = document.querySelector('#widthHeight')

const white = document.querySelector("#white");
const blue = document.querySelector("#blue");
const red = document.querySelector("#red");
const green = document.querySelector("#green");

let widthBoxes = 16;

let colour = "white";


function changeColour() {
    white.addEventListener('click', () => {
        colour = "white"
    });

    blue.addEventListener('click', () => {
        colour = "blue"
    });

    red.addEventListener('click', () => {
        colour = "red"
    });

    green.addEventListener('click', () => {
        colour = "green"
    });
}

changeColour()

function createGrid() {
    let defaultWidth = 480 / widthBoxes;
    let defaultHeight = 480 / widthBoxes;

    let totalBoxes = widthBoxes ** 2;

    let i = 1;
    while (i <= totalBoxes) {
        const box = document.createElement('div');
        box.style.backgroundColor = 'black';
        box.style.width = defaultWidth + 'px';
        box.style.height = defaultHeight + 'px';
        box.onmouseover = function() {
            box.style.backgroundColor = colour;
            box.style.width = defaultWidth + 'px';
            box.style.height = defaultHeight + 'px';
        }
        container.appendChild(box);
        i ++;
    }
}

createGrid()

const smallerButton = document.querySelector('#lessBoxes');
const defaultButton = document.querySelector('#default');
const largerButton = document.querySelector('#moreBoxes');

function changeSize() {
    smallerButton.addEventListener('click', () => {
        removeAllChildNodes(container);
        widthBoxes --;
        createGrid();
        widthHeight.textContent = widthBoxes + ' x ' + widthBoxes;
    });

    defaultButton.addEventListener('click', () => {
        removeAllChildNodes(container);
        widthBoxes = 16;
        createGrid();
        widthHeight.textContent = widthBoxes + ' x ' + widthBoxes;
    });

    largerButton.addEventListener('click', () => {
        removeAllChildNodes(container);
        widthBoxes ++;
        createGrid();
        widthHeight.textContent = widthBoxes + ' x ' + widthBoxes;
    })
};

changeSize()

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

function mouseOver() {
    box.style.color = "white";
};
  
  function mouseOut() {
    box.style.color = "black";
};