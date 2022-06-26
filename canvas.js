const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');
const dpr = window.devicePixelRatio || 1;
ctx.scale(dpr, dpr);

// Setup
let width;
let height;

function setdimensions()
{
    canvas.width = width = canvas.getBoundingClientRect().width * dpr;
    canvas.height =  height =  canvas.getBoundingClientRect().height * dpr;
    canvas.style.width = `calc(100% - 20px)`;
    canvas.style.height = `calc(100% - 20px)`;

    drawGrid() 
}

setdimensions()

window.addEventListener('resize', setdimensions);