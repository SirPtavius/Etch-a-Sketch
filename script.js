let container = document.getElementById("container")
for(let i = 0; i < 256; i++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        //cell.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
        container.appendChild(cell);
}
