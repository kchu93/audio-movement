document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementById("canvas");
  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0,  700, 700);
});
