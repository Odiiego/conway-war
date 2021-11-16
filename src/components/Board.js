import { useContext, useEffect } from "react";
import { renderGrid } from "../utils/renderGrid";
import PlayersContext from "../store/players-context";
import Grid from "../utils/Grid";

const Board = () => {
  const playersCtx = useContext(PlayersContext);
  const gridA = playersCtx.playerA.contributions;
  const gridB = playersCtx.playerB.contributions;
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
  }, []);

  useEffect(() => () => {
    stop = true;
  });

  return (
    <main>
      <canvas></canvas>
      <button onClick={startAnimating}>toggle</button>
    </main>
  );
};

export default Board;
