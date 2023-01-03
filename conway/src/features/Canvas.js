import React, { useRef, useEffect } from "react";
import buildArray from "../utils/buildArray";
import updateBoard from "../utils/updateBoard";

const Canvas = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        canvas.width = 800;
        canvas.height = 400;

        let grid = buildArray()
        
        requestAnimationFrame(() => {
            updateBoard(grid, context)
        })
    }, [])

    return <canvas ref={canvasRef} />
}

export default Canvas;