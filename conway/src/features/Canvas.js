import React, { useRef, useEffect, useState } from "react";
import buildArray from "../utils/buildArray";
import updateBoard from "../utils/updateBoard";
import testArray from "../utils/testArray";
import renderGrid from "../utils/renderGrid";

const Canvas = () => {
    const canvasRef = useRef(null)
    const [toggle, setToggle] = useState("play")

    const togglePlay = (e) => {
        e.target.className = e.target.className === "stop" ? "play" : "stop"
        e.target.innerHTML = e.target.className === "stop" ? "=" : "►"
        setToggle(e.target.className)
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        canvas.width = 700;
        canvas.height = 350;
        let grid = buildArray(testArray(1), testArray(2))

        renderGrid(grid, context)

        if (toggle === "stop") {
            requestAnimationFrame(() => {
                updateBoard(grid, context)
            })
        } else {
            cancelAnimationFrame(() => {
                updateBoard(grid, context)
            })
        }
    }, [toggle])

    return (
        <main>
            <canvas ref={canvasRef} />
            <button className="play" onClick={ togglePlay }>►</button>
        </main>
    )
}

export default Canvas;