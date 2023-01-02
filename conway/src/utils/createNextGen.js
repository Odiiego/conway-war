const createNextGen = (arr) => {
    const nextGen = arr.map(innerArr => [...innerArr])

    for (let col = 0; col < 70; col++) {
        for (let row = 0; row < 35; row++) {
            let nCount = 0
            let cell = arr[row][col]

            for (let x = -1; x < 2; x++) {
                for (let y = -1; y < 2; y++) {
                    if ((x === 0 && y === 0) ||
                        ((col + x < 0) || (row + y < 0)) ||
                        ((col + x > 69) || (row + y > 34))) {
                        continue
                    }
                    nCount += arr[row + y][col + x]
                }
            }
            if ((cell === 1 && nCount < 2) ||
                (cell === 1 && nCount > 3)) {
                nextGen[row][col] = 0
            } else if (cell === 0 && nCount === 3) {
                nextGen[row][col] = 1
            }
        }
    }
    return nextGen;
}

export default createNextGen;