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
  }

  const makeBoard = (arr1, arr2) => {
    const board = [];
    let index = 0;

    while (index < 1166) {
      if (index % 22 >= 2 && index % 22 < 9) {
        board.push(new Cell(index, arr1.shift() || 0, "A"));
      } else if (index % 22 >= 13 && index % 22 < 20) {
        board.push(new Cell(index, arr2.shift() || 0, "B"));
      } else {
        board.push(new Cell(index, 0, null));
      }
      index++;
    }
    return board;
  };

  useEffect(() => {
    const mainBoard = makeBoard(boardA, boardB);
    console.log(mainBoard);

    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    const resolution = 10;
    canvas.width = 550;
    canvas.height = 250;

    const renderPlayerBoard = (playerBoard) => {
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

    renderPlayerBoard(mainBoard);
  }, []);

  return (
    <main>
      <canvas></canvas>
    </main>
  );
};

export default Board;
