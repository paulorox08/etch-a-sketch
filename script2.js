const container = document.querySelector('#container');
const widthHeight = document.querySelector('#widthHeight')

let widthBoxes = 16;

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
            box.style.backgroundColor = 'white';
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