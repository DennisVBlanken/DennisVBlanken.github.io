
// base values for the movement
var Y = 1;
var X = 1;
var slotPos = "slot"+Y+"-"+X;
var Xp = "slot"+Y+"-"+(Number(X) + 1);
var Xm = "slot"+Y+"-"+(Number(X) - 1);
var Yp = "slot"+(Number(Y) + 1)+"-"+X;
var Ym = "slot"+(Number(Y) - 1)+"-"+X;

function Generate() {
main.innerHTML = '';
for (var row = 1; row <= 15; row++){
	for (var slot = 1; slot <= 15; slot++){
		main.innerHTML = main.innerHTML + '<span class="ground" id="slot'+row+'-'+slot+'">X</span>';
	}
}
Y = 1;
X = 1;
slotPos = "slot"+Y+"-"+X;
Xp = "slot"+Y+"-"+(Number(X) + 1);
Xm = "slot"+Y+"-"+(Number(X) - 1);
Yp = "slot"+(Number(Y) + 1)+"-"+X;
Ym = "slot"+(Number(Y) - 1)+"-"+X;
}
Generate();

function moveRight(){
	if (X === 15) {return}
	if (document.getElementById(Xp).innerHTML === "W") {return}
	if (X < 15) {
	document.getElementById(slotPos).innerHTML = "W";
	document.getElementById(slotPos).style.background = "red";
	X = Number(X) + 1;
	slotPos = "slot"+Y+"-"+X;
	document.getElementById(slotPos).innerHTML = "O";
	document.getElementById(slotPos).style.background = "green";
	}
	Xp = "slot"+Y+"-"+(Number(X) + 1);
	Xm = "slot"+Y+"-"+(Number(X) - 1);
	Yp = "slot"+(Number(Y) + 1)+"-"+X;
	Ym = "slot"+(Number(Y) - 1)+"-"+X;
}

function moveLeft(){
	if (X === 1) {return}
	if (document.getElementById(Xm).innerHTML === "W") {}
	else if (X > 1) {
	document.getElementById(slotPos).innerHTML = "W";
	document.getElementById(slotPos).style.background = "red";
	X = Number(X) - 1;
	slotPos = "slot"+Y+"-"+X;
	document.getElementById(slotPos).innerHTML = "O";
	document.getElementById(slotPos).style.background = "green";
	}
	Xp = "slot"+Y+"-"+(Number(X) + 1);
	Xm = "slot"+Y+"-"+(Number(X) - 1);
	Yp = "slot"+(Number(Y) + 1)+"-"+X;
	Ym = "slot"+(Number(Y) - 1)+"-"+X;
}

function moveDown(){
	if (Y === 15) {return}
	if (document.getElementById(Yp).innerHTML === "W") {}
	else if (Y < 15) {
	document.getElementById(slotPos).innerHTML = "W";
	document.getElementById(slotPos).style.background = "red";
	Y = Number(Y) + 1;
	slotPos = "slot"+Y+"-"+X;
	document.getElementById(slotPos).innerHTML = "O";
	document.getElementById(slotPos).style.background = "green";
	}
	Xp = "slot"+Y+"-"+(Number(X) + 1);
	Xm = "slot"+Y+"-"+(Number(X) - 1);
	Yp = "slot"+(Number(Y) + 1)+"-"+X;
	Ym = "slot"+(Number(Y) - 1)+"-"+X;
}

function moveUp(){
	if (Y === 1) {return}
	if (document.getElementById(Ym).innerHTML === "W") {}
	else if (Y > 1) {
	document.getElementById(slotPos).innerHTML = "W";
	document.getElementById(slotPos).style.background = "red";
	Y = Number(Y) - 1;
	slotPos = "slot"+Y+"-"+X;
	document.getElementById(slotPos).innerHTML = "O";
	document.getElementById(slotPos).style.background = "green";	}
	Xp = "slot"+Y+"-"+(Number(X) + 1);
	Xm = "slot"+Y+"-"+(Number(X) - 1);
	Yp = "slot"+(Number(Y) + 1)+"-"+X;
	Ym = "slot"+(Number(Y) - 1)+"-"+X;
}

function Build(px, py) {
	var pwall = "slot"+px+"-"+py;
	document.getElementById(pwall).innerHTML = "W";
	document.getElementById(pwall).style.background = "black";
}

document.onkeydown = function(e) {
    e = e || window.event;
    switch(e.which || e.keyCode) {
        case 65: // A
        moveLeft();
        break;

        case 37: // Left Arrow
        moveLeft();
        break;

        case 87: // W
        moveUp();
        break;

        case 38: // Up Arrow
        moveUp();
        break;

        case 68: // D
        moveRight();
        break;

        case 39: // Right Arrow
        moveRight();
        break;

        case 83: // S
        moveDown();
        break;

        case 40: // Down Arrow
        moveDown();
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
};

Build(5, 10);