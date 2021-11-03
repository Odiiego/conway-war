import { useContext, useEffect } from "react";
import PlayersContext from "../store/players-context";
import Grid from "../utils/Grid";

const Board = () => {
  const playersCtx = useContext(PlayersContext);
  const boardA = playersCtx.playerA.contributions;
  const boardB = playersCtx.playerB.contributions;

  const renderGrid = (grid) => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    const resolution = 10;

    canvas.width = 550;
    canvas.height = 250;

    for (let cell of grid) {
      ctx.beginPath();
      ctx.rect(
        cell.y * resolution,
        cell.x * resolution,
        resolution,
        resolution
      );
      ctx.fillStyle = !cell.status
        ? "black"
        : cell.team === "A"
        ? "teal"
        : "goldenrod";
      ctx.fill();
      ctx.stroke();
    }
  };

  useEffect(() => {
    let grid = new Grid(boardA, boardB, 53, 22)
    renderGrid(grid.buildGrid());

    var stop = false;
    var fpsInterval, startTime, now, then, elapsed;

    function startAnimating(fps) {
      fpsInterval = 1000 / fps;
      then = Date.now();
      startTime = then;

      animate();
    }
    function animate() {
      if (stop) {
        return;
      }

      requestAnimationFrame(animate);

      now = Date.now();
      elapsed = now - then;

      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        
        renderGrid(grid.updateGrid());
      }
    }
    startAnimating(4);
  }, []);

  return (
    <main>
      <canvas></canvas>
    </main>
  );
};

export default Board;
