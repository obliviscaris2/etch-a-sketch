let gridBox = document.getElementById('grid-holder');
let color;

let sixteenPixelButton = document.querySelector(".pixel-16");
let thirytwoPixelButton = document.querySelector(".pixel-32");
let sixtyfourPixelButton = document.querySelector(".pixel-64");

let pixelButtons = document.querySelectorAll('#pxl-btn');

let blackPen = document.querySelector('.black-color');
let randomColor = document.querySelector('.random-color');
let eraserBtn = document.querySelector('.eraser');
let resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', () => {
    location.reload();
})


eraserBtn.addEventListener('click', () => color = 'eraser');


blackPen.addEventListener('click', () => {
    color = 'black';
    let grid = gridBox.querySelectorAll('.cell');
    grid.forEach(pixel => pixel.addEventListener('mouseover', paint));
});

randomColor.addEventListener('click', () => color = "random");

function paint() {
    switch (color) {
        case 'black':
            this.style['background-color'] = 'black';
            break;

        case 'eraser':
            this.style['background-color'] = 'hsl(0,0%,65.1%)';
            break;

        case 'random':
            let hue = Math.floor(Math.random() * 360) + 1;
            this.style['background-color'] = `hsl(${hue}, 60%, 50%)`;
            break;
    }
};


sixteenPixelButton.addEventListener('click', (e) => {
    createBoxes(16);
    disableBtn();
});


thirytwoPixelButton.addEventListener('click', () => {
    createBoxes(32);
    disableBtn();
});

sixtyfourPixelButton.addEventListener('click', () => {
    createBoxes(64);
    disableBtn();
});


//Function to create boxes that fit automatically to the size

function createBoxes(numBox) {
    gridBox.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;
    for(let i = 0; i < numBox * numBox; i++){
        const square = document.createElement('div');
        square.classList.add('cell');
        square.id = 'cells';
        gridBox.appendChild(square);
        
    };
    
};


// function to disable button

function disableBtn() {
    pixelButtons.forEach(button => {
        button.disabled = true;
    });
}