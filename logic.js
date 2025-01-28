const container = document.querySelector("#container");
const newGrid = document.querySelector("#newGrid");

let step = 0;

function randomRGB(darken) {
    let red = Math.floor(Math.random() * 256) - darken;
    let green = Math.floor(Math.random() * 256) - darken;
    let blue = Math.floor(Math.random() * 256) - darken;

    return "RGB(" + red + ", " + green + ", " + blue + ")";
}


function createGrid(chosenSize) {
    const gridSize = chosenSize;
    const divSize = 960 / chosenSize;

    for (i = 0; i < gridSize**2; i++) {
        step = 0;
        const div = document.createElement("div");
        div.style.cssText = "background-color: grey;";
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        div.addEventListener("mouseover", () => {
            let darkenBy = step * 26;
            step++;
            div.style.backgroundColor = randomRGB(darkenBy);
        });
        container.appendChild(div);
    }
}


newGrid.addEventListener("click", () => {
    let chosenSize = prompt("Choose Grid Size: (min 1, max 100)");
    if (chosenSize <= 100 && chosenSize >= 1) {
        container.innerHTML = "";
        createGrid(chosenSize);
    } else {
        alert("Wrong input, please try again.");
    }
});


createGrid(16);