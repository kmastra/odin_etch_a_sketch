const container = document.querySelector("#container");

function createGrid(chosenSize) {
    const gridSize = chosenSize;
    const divSize = 960 / chosenSize;

    for (i = 0; i < gridSize; i++){
        const divCol = document.createElement("div");
        for (z = 0; z < gridSize; z++) {
            const divRow = document.createElement("div");
            divRow.style.cssText = "background-color: gray;";
            divRow.style.padding = `${divSize}px`;
            divRow.addEventListener("mouseover", () => {
                divRow.style.backgroundColor = "lightgreen";
            });

            divCol.appendChild(divRow);
        }
        container.appendChild(divCol);
    }
}

const newGrid = document.querySelector("#newGrid");

newGrid.addEventListener("click", () => {
    let chosenSize = prompt("Choose Grid Size:")
    container.innerHTML = "";
    createGrid(chosenSize)
})

createGrid(16);