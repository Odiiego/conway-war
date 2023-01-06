import React, { useRef, useEffect } from "react";
import buildArray from "../utils/buildArray";
import testArray from "../utils/testArray";
import renderGrid from "../utils/renderGrid";
import createNextGen from "../utils/createNextGen";

const Canvas = (players) => {
    const canvasRef = useRef(null)
    const boardRef = useRef(null)
    const contextRef = useRef(null)
    const playerData = players.players
    console.log(players.players)
    let stop = true;

    const animate = () => {
        if (stop) {
            return;
        }

        requestAnimationFrame(() => {
            animate(boardRef.current, contextRef.current)
        });

        renderGrid(boardRef.current, contextRef.current)
        boardRef.current = createNextGen(boardRef.current)
    }

    const startAnimating = () => {
        stop = !stop;

        animate();
    };

    useEffect(() => {
        const canvas = canvasRef.current
        contextRef.current = canvas.getContext('2d')
        canvas.width = 700;
        canvas.height = 350;
        boardRef.current = buildArray(playerData.playerOne, playerData.playerTwo)


        renderGrid(boardRef.current, contextRef.current)
        return (() => {
            renderGrid(boardRef.current, contextRef.current)
        })


    }, [playerData.playerOne, playerData.playerTwo])

    return (
        <main>
            <canvas ref={canvasRef} />
            <button className="play" onClick={startAnimating}>►</button>
        </main>
    )
}

export default Canvas;