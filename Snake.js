
// generate the "slots" for the game

var main = document.getElementById('main');

for (var row = 1; row <= 15; row++) {
	for (var slot = 1; slot <= 30; slot++) {
		main.innerHTML = main.innerHTML + '<span class="ground" id="slot'+row+'-'+slot+'">X</span>';
	}
}

document.getElementById('slot7-15').innerHTML = "O";

// function for when you lose

function Death() {
	alert("Game Over!!!");
	location.reload();
}

// score system

var counter = document.getElementById('score');
var score = 0;
function addScore(amount){
	score = score + amount;
	counter.innerHTML = score;
}

// movement

var row = 7;
var rowNum = 7;
var position = 15;
var slotPos = "slot"+rowNum+"-"+position;
var passed = 0;
var nextPosRight = "slot"+rowNum+"-"+(Number(position) + 1);
var nextPosLeft = "slot"+rowNum+"-"+(Number(position) - 1);
var nextPosUp = "slot"+(Number(rowNum) - 1)+"-"+position;
var nextPosDown = "slot"+(Number(rowNum) + 1)+"-"+position;

function moveRight(){
	if (position === 30) {Death();}
	if (document.getElementById(nextPosRight).innerHTML === "A") {tailLength+= 1; addScore(100); spawnApple();}
	if (document.getElementById(nextPosRight).innerHTML === "W") {Death();}
	else if (position < 30) {
	document.getElementById(slotPos).innerHTML = "W";
	document.getElementById(slotPos).className = "snake";
	position = Number(position) + 1;
	slotPos = "slot"+rowNum+"-"+position;
	passed = passed + 1;
	document.getElementById(slotPos).innerHTML = "&copy;";
	document.getElementById(slotPos).className = "head";
	}
	nextPosRight = "slot"+rowNum+"-"+(Number(position) + 1);
	nextPosLeft = "slot"+rowNum+"-"+(Number(position) - 1);
	nextPosUp = "slot"+(Number(rowNum) - 1)+"-"+position;
	nextPosDown = "slot"+(Number(rowNum) + 1)+"-"+position;
}

function moveLeft(){
	if (position === 1) {Death();}
	if (document.getElementById(nextPosLeft).innerHTML === "A") {tailLength+= 1; addScore(100); spawnApple();}
	if (document.getElementById(nextPosLeft).innerHTML === "W") {Death();}
	else if (position > 1) {
	document.getElementById(slotPos).innerHTML = "W";
	document.getElementById(slotPos).className = "snake";
	position = Number(position) - 1;
	slotPos = "slot"+rowNum+"-"+position;
	passed = passed + 1;
	document.getElementById(slotPos).innerHTML = "&copy;";
	document.getElementById(slotPos).className = "head";
	}
	nextPosRight = "slot"+rowNum+"-"+(Number(position) + 1);
	nextPosLeft = "slot"+rowNum+"-"+(Number(position) - 1);
	nextPosUp = "slot"+(Number(rowNum) - 1)+"-"+position;
	nextPosDown = "slot"+(Number(rowNum) + 1)+"-"+position;
}

function moveDown(){
	if (rowNum === 15) {Death();}
	if (document.getElementById(nextPosDown).innerHTML === "A") {tailLength+= 1; addScore(100); spawnApple();}
	if (document.getElementById(nextPosDown).innerHTML === "W") {Death();}
	else if (rowNum < 15) {
	document.getElementById(slotPos).innerHTML = "W";
	document.getElementById(slotPos).className = "snake";
	rowNum = Number(row) + 1;
	slotPos = "slot"+rowNum+"-"+position;
	passed = passed + 1;
	document.getElementById(slotPos).innerHTML = "&copy;";
	document.getElementById(slotPos).className = "head";
	row = Number(row) + 1;
	}
	nextPosRight = "slot"+rowNum+"-"+(Number(position) + 1);
	nextPosLeft = "slot"+rowNum+"-"+(Number(position) - 1);
	nextPosUp = "slot"+(Number(rowNum) - 1)+"-"+position;
	nextPosDown = "slot"+(Number(rowNum) + 1)+"-"+position;
}

function moveUp(){
	if (rowNum === 1) {Death();}
	if (document.getElementById(nextPosUp).innerHTML === "A") {tailLength+= 1; addScore(100); spawnApple();}
	if (document.getElementById(nextPosUp).innerHTML === "W") {Death();}
	else if (rowNum > 1) {
	document.getElementById(slotPos).innerHTML = "W";
	document.getElementById(slotPos).className = "snake";
	rowNum = Number(row) - 1;
	slotPos = "slot"+rowNum+"-"+position;
	passed = passed + 1;
	document.getElementById(slotPos).innerHTML = "&copy;";
	document.getElementById(slotPos).className = "head";
	row = Number(row) - 1;
	}
	nextPosRight = "slot"+rowNum+"-"+(Number(position) + 1);
	nextPosLeft = "slot"+rowNum+"-"+(Number(position) - 1);
	nextPosUp = "slot"+(Number(rowNum) - 1)+"-"+position;
	nextPosDown = "slot"+(Number(rowNum) + 1)+"-"+position;
}

var direction = 3;
var speed = 500;
var reds = [];
var tailLength = 5;
var tailMove = "";
var applePos = "";

function tail(){
	tailMove = reds[reds.length - tailLength];
	document.getElementById(tailMove).innerHTML = "X";
	document.getElementById(tailMove).className = "ground";
}

function spawnApple(){
	applePos = "slot" + (Math.floor(Math.random() * 15) + 1) + "-" + (Math.floor(Math.random() * 30) + 1);
	if (document.getElementById(applePos).className == "snake") {spawnApple();}else
	if (document.getElementById(applePos).className == "apple") {spawnApple();}else
	document.getElementById(applePos).innerHTML = "A";
	document.getElementById(applePos).className = "apple"; 
}

function movementLoop(){
	addScore(5);
	if (direction === 1) {reds[reds.length] = slotPos; moveUp();}
	if (direction === 2) {reds[reds.length] = slotPos; moveRight();}
	if (direction === 3) {reds[reds.length] = slotPos; moveDown();}
	if (direction === 4) {reds[reds.length] = slotPos; moveLeft();}
	if (reds.length >= tailLength) {tail();}
	setTimeout(function() {movementLoop();}, speed);
}

function gainSpeed(){
	if (speed >= 20) { speed = speed - 20; setTimeout(function() {gainSpeed();}, 250);}
}

movementLoop();
spawnApple();
spawnApple();
spawnApple();
spawnApple();

// all the buttons used with their functions

document.onkeydown = function(e){
    e = e || window.event;
    switch(e.which || e.keyCode){
        case 65: // A
        	direction = 4;
        break;

        case 37: // Left Arrow
        	direction = 4;
        break;

        case 87: // W
        	direction = 1;
        break;

        case 38: // Up Arrow
        	direction = 1;
        break;

        case 68: // D
        	direction = 2;
        break;

        case 39: // Right Arrow
        	direction = 2;
        break;

        case 83: // S
        	direction = 3;
        break;

        case 40: // Down Arrow
        	direction = 3;
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
};