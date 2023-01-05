import React, { useRef, useEffect } from "react";
import buildArray from "../utils/buildArray";
import testArray from "../utils/testArray";
import renderGrid from "../utils/renderGrid";
import createNextGen from "../utils/createNextGen";

const Canvas = () => {
    const canvasRef = useRef(null)
    const boardRef = useRef(null)
    const contextRef = useRef(null)
    let stop = true;

    const animate = (arr, ctx) => {
        if (stop) {
            return;
        }
        
        let board = [... arr]

        requestAnimationFrame(() => {
            animate(board, ctx)
        });

        renderGrid(board, ctx)
        board = createNextGen(board)
    }

    const startAnimating = () => {
        stop = !stop;

        animate(boardRef.current, contextRef.current);
    };

    useEffect(() => {
        const canvas = canvasRef.current
        contextRef.current = canvas.getContext('2d')
        canvas.width = 700;
        canvas.height = 350;
        boardRef.current = buildArray(testArray(1), testArray(2))

        renderGrid(boardRef.current, contextRef.current)
    }, [])

    return (
        <main>
            <canvas ref={canvasRef} />
            <button className="play" onClick={startAnimating}>►</button>
        </main>
    )
}

export default Canvas;