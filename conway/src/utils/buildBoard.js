const buildBoard = (arr1 = null, arr2 = null) => {
    const arr = new Array(2450).fill(0)
    const player1 = arr1 ? arr1 : new Array(364).fill(0)
    const player2 = arr2 ? arr2 : new Array(364).fill(0)

    if (player1 == null && player2 == null) {
        const displayArr = new Array(0)
        for (let i = 0; i < 2450; i++) {
            displayArr.push(Math.random() < 0.5 ? 0 : 1)
        }
        return displayArr
    }

    for (let i = 321, innerCount = 0; i <= 2134; i += 28, innerCount++) {
        arr.splice(i, 7, ...player1.slice(0 + (innerCount * 7), 7 + (innerCount * 7)))
        arr.splice(i + 14, 7, ...player2.slice(0 + (innerCount * 7), 7 + (innerCount * 7)))
        i += 7
    }
    return arr


}

export default buildBoard;