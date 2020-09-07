var rectBtn = document.getElementsByClassName("rect")[0];
var circBtn = document.getElementsByClassName("circle")[0];
var lineBtn = document.getElementsByClassName("line")[0];
var freeBtn = document.getElementsByClassName("free")[0];

const clearButton = document.querySelector('.clear');
const stroke_weight = document.querySelector('.stroke-weight');
const color_picker = document.querySelector('.color-picker');
const scolor_picker = document.querySelector('#stcolor');

var currentState = "free";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

freeBtn.addEventListener('click',FreeClick);
rectBtn.addEventListener('click',RectClick);
circBtn.addEventListener('click',CircleClick)
lineBtn.addEventListener('click',LineClick)
function FreeClick(){
  currentState = "free";
  freeBtn.style.border = "2px solid orangered";
  rectBtn.style.border = "none";
  circBtn.style.border = "none";
  lineBtn.style.border = "none";
}
function RectClick(){
  currentState = "rect";
  rectBtn.style.border = "2px solid orangered";
  freeBtn.style.border = "none";
  circBtn.style.border = "none";
  lineBtn.style.border = "none";
}
function CircleClick(){
  currentState = "circle";
  circBtn.style.border = "2px solid orangered";
  rectBtn.style.border = "none";
  freeBtn.style.border = "none";
  lineBtn.style.border = "none";
}
function LineClick(){
  currentState = "line";
  lineBtn.style.border = "2px solid orangered";
  rectBtn.style.border = "none";
  circBtn.style.border = "none";
  freeBtn.style.border = "none";
}

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);
clearButton.addEventListener('click', clearCanvas);

window.addEventListener('resize', resizeCanvas);
function resizeCanvas () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();

function start (e) {
  if(currentState === "free"){
  isDrawing = true;
  draw(e);
  }
  else if (currentState === "rect"){
    ctx.strokeStyle = color_picker.value;
    ctx.fillStyle = scolor_picker.value;
    ctx.beginPath();
    ctx.fillRect(e.pageX, e.pageY, 150, 100);
    ctx.stroke();
  }
  else if(currentState === "circle"){
    ctx.lineWidth = stroke_weight.value;
    ctx.fillStyle = scolor_picker.value;
    ctx.beginPath();
    ctx.arc(e.pageX, e.pageY, 50, 0, 2 * Math.PI);
    ctx.fill();
  }
  else if(currentState === "line"){
    ctx.strokeStyle = color_picker.value;
    ctx.lineWidth = stroke_weight.value;
    ctx.beginPath();
    ctx.moveTo(e.pageX, e.pageY);
    ctx.lineTo(e.pageX + 150 , e.pageY + 150);
    ctx.stroke();
  }
}

function draw ({clientX: x, clientY: y}) 
{
  if(currentState === "free")
  {
  if (!isDrawing) return;
  ctx.lineWidth = stroke_weight.value;
  ctx.lineCap = "round";
  ctx.strokeStyle = color_picker.value;
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
  }
  else if(currentState === "rect")
  {
    
  }
}

function stop () {
  isDrawing = false;
  ctx.beginPath();
}

function clearCanvas () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}