const createNextGen = (arr) => {
    const nextGen = arr.map(innerArr => [...innerArr])

    for (let col = 0; col < 70; col++) {
        for (let row = 0; row < 35; row++) {
            let nCount = 0
            let nCountTeam0 = 0
            let nCountTeam1 = 0
            let nCountTeam2 = 0
            let cell = arr[row][col].status

            for (let x = -1; x < 2; x++) {
                for (let y = -1; y < 2; y++) {
                    if ((x === 0 && y === 0) ||
                        ((col + x < 0) || (row + y < 0)) ||
                        ((col + x > 69) || (row + y > 34))) {
                        continue
                    }
                    nCount += arr[row + y][col + x].status
                    if (arr[row + y][col + x].status === 1) {
                        if (arr[row + y][col + x].playerId === 0) {
                            nCountTeam0++
                        } else if (arr[row + y][col + x].playerId === 1) {
                            nCountTeam1++
                        } else if (arr[row + y][col + x].playerId === 2) {
                            nCountTeam2++
                        }

                    }
                }
            }
            if ((cell === 1 && nCount < 2) ||
                (cell === 1 && nCount > 3)) {
                nextGen[row][col] = { status: 0, playerId: 3 }
            } else if (cell === 0 && nCount === 3) {
                nextGen[row][col] = { status: 1, playerId: nCountTeam0 > nCountTeam1 ? 0 : nCountTeam1 > nCountTeam2 ? 1 : 2 }
            }
        }
    }
    return nextGen;
}

export default createNextGen;