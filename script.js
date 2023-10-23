const body = document.querySelector('body');

//Create grid
for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    for (let y = 0; y < 16; y++) {
        let divIn = document.createElement('div');
        divIn.setAttribute('class', 'cell');
        div.appendChild(divIn);
    }
    body.appendChild(div);
}


const allCells = document.querySelectorAll('.cell');

allCells.forEach(item => {
    item.addEventListener('click', function(e) {
        console.log(e.target);
    })
})