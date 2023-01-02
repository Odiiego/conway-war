import React, { useRef, useEffect } from "react";
import buildArray from "../utils/buildArray";
import createNextGen from "../utils/createNextGen";
import renderGrid from "../utils/renderGrid";

const Canvas = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        canvas.width = 800;
        canvas.height = 400;

        const testArray = buildArray(new Array(364).fill(1))
        renderGrid(createNextGen(testArray), context)

    }, [])

    return <canvas ref={canvasRef} />
}

export default Canvas;