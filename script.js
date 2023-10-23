const container = document.querySelector('.container');
let isPressed = false;

//Create grid
for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'row');
    for (let y = 0; y < 16; y++) {
        let divIn = document.createElement('div');
        divIn.setAttribute('class', 'cell');
        div.appendChild(divIn);
    }
    container.appendChild(div);
}


const allCells = document.querySelectorAll('.cell');

allCells.forEach(item => {
    item.addEventListener('mousedown', function(e) {
        //console.log(e.target);
            //e.target.style.backgroundColor = 'black';
        
    })
});

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

