import formatArray from "./formatArray"

const buildArray = (arr1 = null, arr2 = null) => {
    const arr = new Array(2450).fill({ status: 0, playerId: 3 })
    const player1 = arr1 === null ? new Array(364).fill({ status: 0, playerId: 3 }) : arr1
    const player2 = arr2 === null ? new Array(364).fill({ status: 0, playerId: 3 }) : arr2

    if (!arr1 && !arr2) {
        const displayArr = []
        for (let i = 0; i < 2450; i++) {
            displayArr.push(Math.random() < 0.5 ?
                { status: 1, playerId: 0 } :
                { status: 0, playerId: 3 })
        }
        return formatArray(displayArr)
    }

    for (let i = 322, innerCount = 0; i <= 2134; i += 28, innerCount++) {
        arr.splice(i, 7, ...player1.slice(0 + (innerCount * 7), 7 + (innerCount * 7)))
        arr.splice(i + 14, 7, ...player2.slice(0 + (innerCount * 7), 7 + (innerCount * 7)))
        i += 7
    }

    return formatArray(arr)
}

export default buildArray;