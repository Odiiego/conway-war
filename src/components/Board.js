import { useEffect } from "react";
import { renderGrid } from "../utils/renderGrid";
import "./Board.css";

import Grid from "../utils/Grid";

const Board = () => {
  const gameContext = JSON.parse(localStorage.getItem("gameContext"));

  const gridA = gameContext.playerA.contributions;
  const gridB = gameContext.playerB.contributions;
  let stop = true;

  let fpsInterval, startTime, now, then, elapsed;
  let grid = new Grid(gridA, gridB, 53, 22);

  const startAnimating = () => {
    fpsInterval = 1000 / 4;
    then = Date.now();
    startTime = then;
    stop = !stop;

    animate();
  };

  const animate = () => {
    if (stop) {
      return;
    }

    requestAnimationFrame(animate);

    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);

      renderGrid(grid.updateGrid(), grid.width, grid.height);
    }
  };

  useEffect(() => {
    renderGrid(grid.buildGrid(), grid.width, grid.height);
    return () => {
      stop = true;
    };
  }, []);

  return (
    <section className={"board"}>
      <canvas className={"board__canvas"}></canvas>
      <button className={"board__btn"} onClick={startAnimating}>
        ►
      </button>
    </section>
  );
};

export default Board;
