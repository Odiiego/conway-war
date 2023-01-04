const testArray = (playerId) => {
    const testArr = []
    for (let i = 0; i < 365; i++) {
        testArr.push(Math.random() < 0.5 ?
            { status: 1, playerId: playerId } :
            { status: 0, playerId: 3 })
    }
    return testArr
}

export default testArray;