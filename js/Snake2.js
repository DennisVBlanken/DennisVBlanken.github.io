
var canvas = document.getElementById('SnakeGame');
var ctx = canvas.getContext("2d");
var scoreEl = document.getElementById('score');
var cellSize = 20;
var delay = 10;
var xDelay = (canvas.height / delay);
var yDelay = (canvas.width / delay);
var cState = 0;
var amount = 0;

function DrawGrid(color1 = "#000", color2 = "#23272a") {
	ctx.fillStyle = color1;
	var gradient=ctx.createLinearGradient(0,canvas.width*2,canvas.width,0);
for (var i = 0; i <= 15; i++) {
	switch(cState) {
	case 0: cState = 1; color = 'purple'; break;
	case 1: cState = 2; color = 'indigo'; break;
	case 2: cState = 3; color = 'blue'; break;
	case 3: cState = 4; color = 'green'; break;
	case 4: cState = 5; color = 'yellow'; break;
	case 5: cState = 6; color = 'orange'; break;
	case 6: cState = 0; color = 'red'; break;
	default: cState = 0; color = 'red';
	}
	amount = i / 15;
	gradient.addColorStop(amount,color);
}
	ctx.strokeStyle = gradient;

	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.stroke();

	var x = 0.4;
	var y = 0.4;
	// var x2 = canvas.width-0.4;
	// var y2 = canvas.height-0.4;
	DrawGridX(x);
	DrawGridY(y);
	// DrawGridX2(x2);
	// DrawGridY2(y2);
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
