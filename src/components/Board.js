import { useContext, useEffect } from "react";
import { renderGrid } from "../utils/renderGrid";
import PlayersContext from "../store/players-context";
import Grid from "../utils/Grid";

const Board = () => {
  const playersCtx = useContext(PlayersContext);
  const gridA = playersCtx.playerA.contributions;
  const gridB = playersCtx.playerB.contributions;

  let stop = false;

  useEffect(() => {
    let grid = new Grid(gridA, gridB, 53, 22);
    renderGrid(grid.buildGrid(), grid.width, grid.height);

    let fpsInterval, startTime, now, then, elapsed;

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

        renderGrid(grid.updateGrid(), grid.width, grid.height);
      }
    }
    startAnimating(4);
  }, []);

  useEffect(() => () => {
    stop = true;
  });

  return (
    <main>
      <canvas></canvas>
    </main>
  );
};

export default Board;
