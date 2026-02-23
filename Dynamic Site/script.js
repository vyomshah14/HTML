const canvas = document.getElementById("artCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  drawArt();
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function glowRect(x, y, w, h, r, color) {
  ctx.shadowColor = color;
  ctx.shadowBlur = 20;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
  ctx.fill();
  ctx.shadowBlur = 0;
}

function drawArt() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  /* MAIN HUD */
  glowRect(40, 40, 300, 210, 20, "#e0e7ff");

  /* HEADER */
  ctx.fillStyle = "#2563eb";
  ctx.beginPath();
  ctx.roundRect(40, 40, 300, 45, [20, 20, 0, 0]);
  ctx.fill();

  /* STATUS DOTS */
  ["#22d3ee", "#38bdf8", "#60a5fa"].forEach((c, i) => {
    ctx.fillStyle = c;
    ctx.beginPath();
    ctx.arc(70 + i * 22, 63, 6, 0, Math.PI * 2);
    ctx.fill();
  });

  /* POWER BARS */
  for (let i = 0; i < 3; i++) {
    ctx.fillStyle = "#1e40af";
    ctx.shadowColor = "#38bdf8";
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.roundRect(90 + i * 60, 180 - i * 30, 34, 90 + i * 30, 10);
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  /* ENERGY ORB */
  ctx.fillStyle = "rgba(56,189,248,0.8)";
  ctx.shadowColor = "#38bdf8";
  ctx.shadowBlur = 30;
  ctx.beginPath();
  ctx.arc(390, 110, 46, 0, Math.PI * 2);
  ctx.fill();

  /* MINI MODULE */
  glowRect(330, 210, 130, 80, 14, "#c7d2fe");
}
