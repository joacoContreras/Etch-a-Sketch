const gridSquare = document.querySelector("#container");
const gridButton = document.querySelector("#change-grid-button");



function createGrid(size) {
    // Clean container for re-use
    gridSquare.innerHTML = "";

    const totalSquares = size * size;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        
        square.style.width = `${100 / size}%`;
        square.style.height = `${100 / size}%`;

        square.addEventListener("mouseover", function() {
            this.style.backgroundColor = "black";
        });

        square.addEventListener("mouseout", function() {
            this.style.backgroundColor = "white";
        });

        gridSquare.appendChild(square);
    }
};

gridButton.addEventListener("mouseover", function() {
    this.style.backgroundColor = "white";
});

gridButton.addEventListener("mouseout", function() {
    this.style.backgroundColor = "rgba(188, 184, 179, 0.348)";
});

gridButton.addEventListener("click", function() {
    let newGridSize = prompt("Please, enter a number between 1 and 100 to change the grid size","16");
    newGridSize = parseInt(newGridSize);
    if(newGridSize>=1 && newGridSize<=100) {
        createGrid(newGridSize);
    } else {
        alert("Invalid Input. Please, enter a number between 1 and 100.");
    }
});