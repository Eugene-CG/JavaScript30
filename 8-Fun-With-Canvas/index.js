const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
canvas.width = "10000";
canvas.height = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);
canvas.width = Math.max(
  document.body.scrollWidth,
  document.documentElement.scrollWidth,
  document.body.offsetWidth,
  document.documentElement.offsetWidth,
  document.body.clientWidth,
  document.documentElement.clientWidth
);
ctx.strokeStyle = "red";
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = true;
let lastX = 0;
let lastY = 0;
const draw = (event) => {
  console.log("hi");
  if (isDrawing) return;
  console.log("hiasfasdfad");
  ctx.lineWidth = Math.floor(0 + Math.random() * (30 + 1 - 0));
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY];
};

canvas.addEventListener("mousedown", (event) => {
  isDrawing = false;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener("mousemove", (event) => {
  draw(event);
});
canvas.addEventListener("mouseup", () => (isDrawing = true));
// canvas.addEventListener("mouseout");
