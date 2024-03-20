const GRIDSIDE = 600
let container = document.getElementById("container")
container.style.width = container.style.height = `${GRIDSIDE}px`;


let buttonCreateSquare = document.querySelector("#createSquare")
buttonCreateSquare.addEventListener("click", () => {
    
    let grid = document.getElementById("squares").value
    
    if(grid < 16 || grid > 100){
        grid = 16
    } 
    
    container.innerHTML ="";
    createSquare(grid)
});


function createSquare(side){
    
    for(let i = 0; i < (side*side); i++){
        let cell = document.createElement("div");
        cell.style.width = cell.style.height = `${(GRIDSIDE / side) - 2}px`;
        cell.classList.add("cell");
        container.appendChild(cell);

        // Aggiungi event listener per il passaggio del mouse
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = '#ff0000'; // Cambia il colore al passaggio del mouse
        });

}
        
}
