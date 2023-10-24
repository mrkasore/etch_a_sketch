const container = document.querySelector('.container');
const body = document.querySelector('body');
let isPressed = false;
const btnGrid = document.querySelector('.gridButton');
const inp = document.querySelector('#inp');


document.querySelector('.colors').style.backgroundColor = 'black';

//Create grid
function createGrid(num) {
    for (let i = 0; i < num; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'row');
        for (let y = 0; y < num; y++) {
            let divIn = document.createElement('div');
            divIn.setAttribute('class', 'cell');
            div.appendChild(divIn);
        }
        container.appendChild(div);
    }
}


const allCells = document.querySelectorAll('.cell');;

// Mouse check
container.addEventListener('mousedown', function(e) {
    isPressed = true;
    e.preventDefault();
}); 

body.addEventListener('mouseup', function(e) {
    console.log('false');
    e.preventDefault();
    isPressed = false;
}); 

container.addEventListener('mousemove', function(e) {
    if (isPressed && e.target.className == 'cell') {
        e.target.style.backgroundColor = document.querySelector('.colors').style.backgroundColor;
    } 
});

container.addEventListener('click', function(e) {
    if (e.target.className == 'cell') {
        e.target.style.backgroundColor = document.querySelector('.colors').style.backgroundColor;
    }
    
});



btnGrid.addEventListener('click', function(e) {
    
    deleteItems();
    if(inp.value >= 100) {
        inp.value = 100;
    } else if (inp.value <= 0) {
        inp.value = 1;
    }
    console.log(inp.value);
    createGrid(inp.value);
});

function deleteItems() {
    var deleteElement = container.querySelectorAll('.row');
    for (let i = 0; i < deleteElement.length; i++) {
      deleteElement[i].remove();
    }
  }
createGrid(16);



document.querySelector('#red').addEventListener('input', changeColor);
document.querySelector('#green').addEventListener('input', changeColor);
document.querySelector('#blue').addEventListener('input', changeColor);


//Change color
function changeColor() {
    let red = document.querySelector('#red').value;
    let green = document.querySelector('#green').value;
    let blue = document.querySelector('#blue').value;
    document.querySelector('.colors').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
//Eraser
document.querySelector('.eraser').addEventListener('click', function() {
    document.querySelector('.colors').style.backgroundColor = 'white';
});
