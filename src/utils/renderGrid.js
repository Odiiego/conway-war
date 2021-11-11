export const renderGrid = (grid, gridWidth, gridHeight) => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const resolution = 10;

  canvas.width = gridWidth * resolution;
  canvas.height = gridHeight * resolution;
  
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