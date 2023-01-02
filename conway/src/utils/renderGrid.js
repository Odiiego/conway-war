const renderGrid = (arr, context) => {
    for (let col = 0; col < 70; col++) {
        for (let row = 0; row < 35; row++) {
            context.beginPath();
            context.rect(col * 10, row * 10, 10, 10)
            context.fillStyle = arr[row][col] ? "black" : "white";
            context.stroke()
            context.fill()
        }
    }
}

export default renderGrid;