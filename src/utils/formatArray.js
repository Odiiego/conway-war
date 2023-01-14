const formatArray = (arr) => {
    const grid = []

    for (let i = 0; i < arr.length; i++) {
        if (!grid[i % 35]) {
            grid.push([])
        }
        grid[i % 35].push(arr[i])
    }
    
    return grid
}

export default formatArray