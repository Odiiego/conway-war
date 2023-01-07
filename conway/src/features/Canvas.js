import React, { useRef, useEffect, useState } from "react";
import buildArray from "../utils/buildArray";
import renderGrid from "../utils/renderGrid";
import createNextGen from "../utils/createNextGen";

const Canvas = (players) => {
    const [isPaused, setIsPaused] = useState(true)
    const canvasRef = useRef(null)
    const boardRef = useRef(null)
    const stopRef = useRef(true)
    const contextRef = useRef(null)
    const playerData = players.players

    const animate = () => {
        if (stopRef.current) {
            return;
        }

        requestAnimationFrame(() => {
            animate(boardRef.current, contextRef.current)
        });

        renderGrid(boardRef.current, contextRef.current)
        boardRef.current = createNextGen(boardRef.current)
    }

    const startAnimating = () => {
        stopRef.current = !stopRef.current;
        setIsPaused(stopRef.current)

        animate();
    };

    useEffect(() => {
        stopRef.current = true;
        const canvas = canvasRef.current
        contextRef.current = canvas.getContext('2d')
        canvas.width = 700;
        canvas.height = 350;
        boardRef.current = buildArray(playerData.playerOne, playerData.playerTwo)
        console.log(stopRef.current)


        renderGrid(boardRef.current, contextRef.current)
        return (() => {
            renderGrid(boardRef.current, contextRef.current)
        })


    }, [playerData])

    return (
        <main>
            <canvas ref={canvasRef} />
            <button className={isPaused ? "play" : "pause"} onClick={startAnimating} >{isPaused ? "►" : "="}</button>
        </main>
    )
}

export default Canvas;