
var canvas = document.getElementById('SnakeGame');
var ctx = canvas.getContext("2d");
var scoreEl = document.getElementById('score');
var cellSize = 20;
var delay = 50;
var xDelay = canvas.height / 20;
var yDelay = canvas.width / 20;


function DrawGrid(color1 = "#000", color2 = "#23272a") {
	ctx.fillStyle = color1;
	var gradient=ctx.createLinearGradient(100,canvas.height,canvas.width,100);
	gradient.addColorStop("0","violet");
	gradient.addColorStop("0.14","indigo");
	gradient.addColorStop("0.28","blue");
	gradient.addColorStop("0.42","green");
	gradient.addColorStop("0.57","yellow");
	gradient.addColorStop("0.71","orange");
	gradient.addColorStop("0.85","red");
	gradient.addColorStop("1.0","violet");
	ctx.strokeStyle = gradient;

	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.stroke();

	var x = 0.4;
	var x2 = canvas.width-0.4;
	var y = 0.4;
	var y2 = canvas.height-0.4;
	DrawGridX2(x2);
	DrawGridX(x);
	DrawGridY2(y2);
	DrawGridY(y);
} DrawGrid();

function DrawGridX(x) {
	setTimeout(function () {
		ctx.moveTo(x, 0);
		ctx.lineTo(x, canvas.height);
		ctx.stroke();
		x+=cellSize;
		if (x < canvas.width) {
			DrawGridX(x);
		}
	}, xDelay)
}
function DrawGridY(y) {
	setTimeout(function () {
		ctx.moveTo(0, y);
		ctx.lineTo(canvas.width, y);
		ctx.stroke();
		y+=cellSize;
		if (y < canvas.height) {
			DrawGridY(y);
		}
	}, yDelay)
}
function DrawGridX2(x) {
	setTimeout(function () {
		ctx.moveTo(x, canvas.height);
		ctx.lineTo(x, 0);
		ctx.stroke();
		x-=cellSize;
		if (x < canvas.width) {
			DrawGridX2(x);
		}
	}, xDelay)
}
function DrawGridY2(y) {
	setTimeout(function () {
		ctx.moveTo(canvas.width, y);
		ctx.lineTo(0, y);
		ctx.stroke();
		y-=cellSize;
		if (y < canvas.height) {
			DrawGridY2(y);
		}
	}, yDelay)
}