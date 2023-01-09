const renderGrid = (arr, context) => {
    const colors = ["#90e702", "#ffe400", "#01c7d1", "black"]
    
    for (let col = 0; col < 70; col++) {
        for (let row = 0; row < 35; row++) {
            context.beginPath();
            context.rect(col * 10, row * 10, 10, 10)
            context.fillStyle = colors[arr[row][col].playerId];
            context.strokeStyle = "#0e0808"
            context.stroke()
            context.fill()
        }
    }
}

export default renderGrid;