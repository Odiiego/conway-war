import { useEffect } from "react";

const BoardTest = () => {
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    const resolution = 10;
    canvas.width = 400;
    canvas.height = 400;

    const COLS = canvas.width / resolution;
    const ROWS = canvas.height / resolution;

    function buildGrid() {
      return new Array(COLS)
        .fill(null)
        .map(() =>
          new Array(ROWS).fill(null).map(() => Math.floor(Math.random() * 2))
        );
    }

    let grid = buildGrid();

    function render(grid) {
      for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
          const cell = grid[col][row];

          ctx.beginPath();
          ctx.rect(col * resolution, row * resolution, resolution, resolution);
          ctx.fillStyle = cell ? "black" : "white";
          ctx.fill();
          // ctx.stroke();
        }
      }
    }
    render(grid)
  }, []);

  return (
    <main>
      <canvas></canvas>
    </main>
  );
};

export default BoardTest;
