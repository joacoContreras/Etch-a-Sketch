const gridSquare = document.querySelector(".container");

function createGrid(size) {
    // Clean container for re-use
    gridSquare.innerHTML = "";

    const totalSquares = size * size;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        
        square.style.width = `${100 / size}%`;
        square.style.height = `${100 / size}%`;

        container.appendChild(square);
    }
}

createGrid(16);