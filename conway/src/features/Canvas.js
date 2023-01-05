import React, { useRef, useEffect, useState } from "react";
import buildArray from "../utils/buildArray";
import updateBoard from "../utils/updateBoard";
import testArray from "../utils/testArray";
import renderGrid from "../utils/renderGrid";
import createNextGen from "../utils/createNextGen";

const Canvas = () => {
    const canvasRef = useRef(null)
    const boardRef = useRef(null)
    const contextRef = useRef(null)
    let stop = true;

    const animate = () => {
        if (stop) {
            return;
        }
        
        boardRef.current = [...boardRef.current]

        requestAnimationFrame(() => {
            animate(boardRef.current, contextRef.current)
        });

        renderGrid(boardRef.current, contextRef.current)
        boardRef.current = createNextGen(boardRef.current)
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


        // updateBoard(grid, context)
        animate(boardRef.current, contextRef.current)
    }, [])

    return (
        <main>
            <canvas ref={canvasRef} />
            <button className="play" onClick={startAnimating}>►</button>
        </main>
    )
}

export default Canvas;