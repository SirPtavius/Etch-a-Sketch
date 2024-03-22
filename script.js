const GRIDSIDE = 600
let container = document.getElementById("container")
container.style.width = container.style.height = `${GRIDSIDE}px`;


let buttonCreateSquare = document.querySelector("#createSquare")
buttonCreateSquare.addEventListener("click", () => {
    createSquare()
});


let drawButton = document.querySelector("#drawButton");
drawButton.addEventListener("click", () => {
    toggleDrawing();
});

let eraseButton = document.querySelector("#eraseButton");
eraseButton.addEventListener("click", () => {
    eraseCells();
});

let clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", () => {
    createSquare()
})

function createSquare(){       
    let side = document.getElementById("squares").value
    if(side < 16 || side > 100){
        side = 16
    } 
    container.innerHTML ="";
    for(let i = 0; i < (side*side); i++){
        let cell = document.createElement("div");
        cell.style.width = cell.style.height = `${(GRIDSIDE / side) - 2}px`;
        cell.classList.add("cell");
        container.appendChild(cell);

        // Add mouse enter event listener
        cell.addEventListener('mouseenter', () => {  
            // Check if "Draw" button is active
            if (drawButton.classList.contains('active')) { 
                let r = Math.floor(Math.random() * 255);
                let g = Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);
                cell.style.backgroundColor = `rgb(${r},${g},${b})`; 
                // Check if "Erase" button is active
            } else if (eraseButton.classList.contains('active')) { 
                cell.style.backgroundColor = 'white'; 
            }
        });
    }
}

// Function to toggle drawing mode
function toggleDrawing() {
    drawButton.classList.toggle('active'); 
    eraseButton.classList.remove('active'); 
}

// Function to erase cell colors
function eraseCells() {
    eraseButton.classList.toggle('active'); 
    drawButton.classList.remove('active'); 
}
