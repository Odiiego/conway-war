import createNextGen from "../utils/createNextGen";
import renderGrid from "../utils/renderGrid";

const updateBoard = (arr, ctx) => {
    let board = [...arr]
    
    renderGrid(board, ctx)
    board = createNextGen(board)

    requestAnimationFrame(() => {
        updateBoard(board, ctx)
    })
}

export default updateBoard;