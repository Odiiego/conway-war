import Cell from "../utils/Cell";

class Grid {
  constructor(arrayA, arrayB, width, height) {
    this.grid = [];
    this.players = [arrayA, arrayB];
    this.width = width;
    this.height = height;
    this.area = this.width * this.height;
  }

  buildGrid() {
    const [playerA, playerB] = this.players;
    for (let index = 0; index < this.area; index++) {
      if (index % 22 >= 2 && index % 22 < 9) {
        this.grid.push(
          new Cell(index, playerA[0] || 0, playerA[0] === 1 ? "A" : null)
        );
        playerA.shift();
      } else if (index % 22 >= 13 && index % 22 < 20) {
        this.grid.push(
          new Cell(index, playerB[0] || 0, playerB[0] === 1 ? "B" : null)
        );
        playerB.shift();
      } else {
        this.grid.push(new Cell(index, 0, null));
      }
    }
    return this.grid;
  }

  updateGrid() {
    const nextGen = this.grid.map((cell) => {
      let total = 0;
      let teamCounterA = 0;
      let teamCounterB = 0;
      const index = cell.index;
      const neighborsArray = cell.neighbors;

      for (let neighborIndex of neighborsArray) {
        total += this.grid[neighborIndex].status;
        if (this.grid[neighborIndex].status === 1) {
          this.grid[neighborIndex].team === "A"
            ? teamCounterA++
            : teamCounterB++;
        }
      }

      switch (cell.status) {
        case 1:
          return total === 2 || total === 3
            ? new Cell(index, 1, this.grid[index].team)
            : new Cell(index, 0, null);
        case 0:
          return total === 3
            ? new Cell(index, 1, teamCounterA > teamCounterB ? "A" : "B")
            : new Cell(index, 0, null);
        default:
          return new Cell(index, 0, null);
      }
    });
    this.grid = nextGen;
    return this.grid;
  }
}

export default Grid;
