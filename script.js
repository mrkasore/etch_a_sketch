const container = document.querySelector('.container');
const body = document.querySelector('body');
let isPressed = false;
const btnGrid = document.querySelector('.gridButton');
const inp = document.querySelector('#inp');



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



const allCells = document.querySelectorAll('.cell');

// Mouse check
container.addEventListener('mousedown', function(e) {
    isPressed = true;
}); 

container.addEventListener('mouseup', function(e) {
    isPressed = false;
}); 

container.addEventListener('mousemove', function(e) {
    if (isPressed && e.target.className == 'cell') {
        e.target.style.backgroundColor = 'black';
    } 
});

container.addEventListener('click', function(e) {
    if (e.target.className == 'cell') {
        e.target.style.backgroundColor = 'black';
    }
    
});



btnGrid.addEventListener('click', function(e) {
    console.log(inp.value);
    deleteItems();
    createGrid(inp.value);
});

function deleteItems() {
    var deleteElement = container.querySelectorAll('.row');
    for (let i = 0; i < deleteElement.length; i++) {
      deleteElement[i].remove();
    }
  }
createGrid(16);
