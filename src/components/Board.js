import { useContext, useEffect } from "react";
import PlayersContext from "../store/players-context";

const Board = () => {
  const playersCtx = useContext(PlayersContext);
  const boardA = playersCtx.playerA.contributions;
  const boardB = playersCtx.playerB.contributions;

  class Cell {
    constructor(index, status, team) {
      this.index = index;
      this.status = status;
      this.team = team;
    }
    get x() {
      return this.index % 22;
    }
    get y() {
      return Math.floor(this.index / 22);
    }
    get neighbors() {
      const i = this.index;
      const neighbors = [];

      let positions = [
        i - 23,
        i - 1,
        i + 21,
        i - 22,
        i + 22,
        i - 21,
        i + 1,
        i + 23,
      ];
      positions =
        i % 22 === 0
          ? positions.splice(-5)
          : (i + 1) % 22 === 0
          ? positions.splice(0, 5)
          : positions;

      for (let pos in positions) {
        if (positions[pos] < 0 || positions[pos] > 1165) {
          continue;
        } else {
          neighbors.push(positions[pos]);
        }
      }
      return neighbors;
    }
  }

  const makeBoard = (arr1, arr2) => {
    const board = [];
    let index = 0;

    while (index < 1166) {
      if (index % 22 >= 2 && index % 22 < 9) {
        board.push(new Cell(index, arr1[0] || 0, arr1[0] === 1 ? "A" : null));
        arr1.shift();
      } else if (index % 22 >= 13 && index % 22 < 20) {
        board.push(new Cell(index, arr2[0] || 0, arr2[0] === 1 ? "B" : null));
        arr2.shift();
      } else {
        board.push(new Cell(index, 0, null));
      }
      index++;
    }
    return board;
  };

  const nextGenBoard = (board, cell) => {
    let total = 0;
    let counterA = 0;
    let counterB = 0;
    const index = cell.index;
    const neighbors = cell.neighbors;

    for (let neighbor in neighbors) {
      total += board[neighbors[neighbor]].status;
      if (board[neighbors[neighbor]].status === 1) {
        board[neighbors[neighbor]].team === "A" ? counterA++ : counterB++;
      }
      // if (cell.x === 0 || cell.x === 21 || cell.y === 0 || cell.y === 52) {
      //   total += 1
      // }
    }
    // console.log({total, counterA, counterB, index})

    switch (cell.status) {
      case 1:
        return total === 2 || total === 3
          ? new Cell(index, 1, board[index].team)
          : new Cell(index, 0, null);
      case 0:
        return total === 3
          ? new Cell(index, 1, counterA > counterB ? "A" : "B")
          : new Cell(index, 0, null);
      default:
        return new Cell(index, 0, null);
    }
  };

  const renderPlayerBoard = (playerBoard) => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    const resolution = 10;

    canvas.width = 550;
    canvas.height = 250;
    

    for (let i in playerBoard) {
      ctx.beginPath();
      ctx.rect(
        playerBoard[i].y * resolution,
        playerBoard[i].x * resolution,
        resolution,
        resolution
      );
      ctx.fillStyle = !playerBoard[i].status
        ? "black"
        : playerBoard[i].team === "A"
        ? "teal"
        : "goldenrod";
      ctx.fill();
      ctx.stroke();
    }
  };

  const nextGen = (grid) => {
    return [
      ...grid.map((cell) => {
        return nextGenBoard(grid, cell);
      }),
    ];
  };

  useEffect(() => {
    // const nextGen = [... mainBoard.map((cell) => {
    //   return nextGenBoard(mainBoard, cell);
    // })]
    let grid = makeBoard(boardA, boardB);
    renderPlayerBoard(grid);
    var stop = false;
    var frameCount = 0;
    var fps, fpsInterval, startTime, now, then, elapsed;

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

        grid = nextGen(grid);
        renderPlayerBoard(grid);
      }
    }
    startAnimating(5);
  }, []);

  return (
    <main>
      <canvas></canvas>
    </main>
  );
};

export default Board;
