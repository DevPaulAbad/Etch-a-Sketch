


function createGrid(){
    resetGrid();
    const grids = document.getElementById('gridContainer');
    let getGridCount = document.querySelector('#gridCount');
    let x = getGridCount.value;
    let boxWidth = 800 / getGridCount.value;
    grids.style = `display: grid; 
    grid-template-columns: repeat(${x}, 1fr); 
    grids.style = 'grid-template-rows: repeat(${x}, 1fr);`;
    let container = document.getElementById('gridContainer');
    for (let i = 0; i < x*x; i++){
        //for(let j = 0; j < getGridCount.value; j++){
        let div = document.createElement("div");

        // div.style.backgroundColor = "yellow";
        div.style.width = boxWidth + "px";
        div.style.height = boxWidth + "px";
        div.style.border = "1px solid black";
        grids.appendChild(div);
       // }
    }
    grids.addEventListener(
        'mouseover',
        (event) => {
            event.target.style.backgroundColor = "black";
        }
    );
}

function resetGrid(){
    const gridCont = document.getElementById('gridContainer');
    while (gridCont.firstChild){
        gridCont.removeChild(gridCont.firstChild);
    }
}

