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
      if (positions[pos] < 0 || positions[pos] >= 1166) {
        continue;
      } else {
        neighbors.push(positions[pos]);
      }
    }
    return neighbors;
  }
}

export default Cell;
