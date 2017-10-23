
var row = 1;
var rowNum = 1;
var position = 1;
var slotPos = "slot"+rowNum+"-"+position;
var passed = 0;
var nextPosRight = "slot"+rowNum+"-"+(Number(position) + 1);
var nextPosLeft = "slot"+rowNum+"-"+(Number(position) - 1);
var nextPosUp = "slot"+(Number(rowNum) - 1)+"-"+position;
var nextPosDown = "slot"+(Number(rowNum) + 1)+"-"+position;

function moveRight(){
	if (passed === 59) {setTimeout(function() { alert("You win!")}, 10);}
	if (position === 9) {return}
	if (document.getElementById(nextPosRight).innerHTML === "W") {}
	else if (position < 9) {
	document.getElementById(slotPos).innerHTML = "W";
	document.getElementById(slotPos).style.background = "red";
	position = Number(position) + 1;
	slotPos = "slot"+rowNum+"-"+position;
	passed = passed + 1;
	document.getElementById(slotPos).innerHTML = "O";
	document.getElementById(slotPos).style.background = "green";
	}
	nextPosRight = "slot"+rowNum+"-"+(Number(position) + 1);
	nextPosLeft = "slot"+rowNum+"-"+(Number(position) - 1);
	nextPosUp = "slot"+(Number(rowNum) - 1)+"-"+position;
	nextPosDown = "slot"+(Number(rowNum) + 1)+"-"+position;
	console.log(passed)
}

function moveLeft(){
	if (position === 1) {return}
	if (document.getElementById(nextPosLeft).innerHTML === "W") {}
	else if (position > 1) {
	document.getElementById(slotPos).innerHTML = "W";
	document.getElementById(slotPos).style.background = "red";
	position = Number(position) - 1;
	slotPos = "slot"+rowNum+"-"+position;
	passed = passed + 1;
	document.getElementById(slotPos).innerHTML = "O";
	document.getElementById(slotPos).style.background = "green";
	}
	nextPosRight = "slot"+rowNum+"-"+(Number(position) + 1);
	nextPosLeft = "slot"+rowNum+"-"+(Number(position) - 1);
	nextPosUp = "slot"+(Number(rowNum) - 1)+"-"+position;
	nextPosDown = "slot"+(Number(rowNum) + 1)+"-"+position;
}

function moveDown(){
	if (rowNum === 9) {return}
	if (document.getElementById(nextPosDown).innerHTML === "W") {}
	else if (rowNum < 9) {
	document.getElementById(slotPos).innerHTML = "W";
	document.getElementById(slotPos).style.background = "red";
	rowNum = Number(row) + 1;
	slotPos = "slot"+rowNum+"-"+position;
	passed = passed + 1;
	document.getElementById(slotPos).innerHTML = "O";
	document.getElementById(slotPos).style.background = "green";
	row = Number(row) + 1;
	}
	nextPosRight = "slot"+rowNum+"-"+(Number(position) + 1);
	nextPosLeft = "slot"+rowNum+"-"+(Number(position) - 1);
	nextPosUp = "slot"+(Number(rowNum) - 1)+"-"+position;
	nextPosDown = "slot"+(Number(rowNum) + 1)+"-"+position;
}

function moveUp(){
	if (rowNum === 1) {return}
	if (document.getElementById(nextPosUp).innerHTML === "W") {}
	else if (rowNum > 1) {
	document.getElementById(slotPos).innerHTML = "W";
	document.getElementById(slotPos).style.background = "red";
	rowNum = Number(row) - 1;
	slotPos = "slot"+rowNum+"-"+position;
	passed = passed + 1;
	document.getElementById(slotPos).innerHTML = "O";
	document.getElementById(slotPos).style.background = "green";
	row = Number(row) - 1;
	}
	nextPosRight = "slot"+rowNum+"-"+(Number(position) + 1);
	nextPosLeft = "slot"+rowNum+"-"+(Number(position) - 1);
	nextPosUp = "slot"+(Number(rowNum) - 1)+"-"+position;
	nextPosDown = "slot"+(Number(rowNum) + 1)+"-"+position;
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