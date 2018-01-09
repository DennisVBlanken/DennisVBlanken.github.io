
// base values for the movement of the snake
var Y = 8;
var X = 15;
var slotPos = "slot"+Y+"-"+X;
var Xp = "slot"+Y+"-"+(Number(X) + 1);
var Xm = "slot"+Y+"-"+(Number(X) - 1);
var Ym = "slot"+(Number(Y) - 1)+"-"+X;
var Yp = "slot"+(Number(Y) + 1)+"-"+X;

// generate the "slots" for the game
var main = document.getElementById('main');

function Generate() {
main.innerHTML = '';

for (var row = 1; row <= 15; row++){
	for (var slot = 1; slot <= 30; slot++){
		main.innerHTML = main.innerHTML + '<span class="ground" id="slot'+row+'-'+slot+'">X</span>';
	}
}
document.getElementById('slot8-15').innerHTML = "O";

Y = 8,
X = 15,
slotPos = "slot"+Y+"-"+X,
Xp = "slot"+Y+"-"+(Number(X) + 1),
Xm = "slot"+Y+"-"+(Number(X) - 1),
Ym = "slot"+(Number(Y) - 1)+"-"+X,
Yp = "slot"+(Number(Y) + 1)+"-"+X;
}
Generate();

// the main functions for the buttons on page
var begin = document.getElementById('START');
var reset = document.getElementById('RESET');
var multi = 1;
var started = 0;

function Start(){
	if (started === 0){
	started = 1;
	movementLoop();
	spawnApple();spawnApple();spawnApple();spawnApple();spawnApple();
	begin.style.display = 'none';
	pause.style.display = 'inline-block';}
}
var pause = document.getElementById('Pause');
var resume = document.getElementById('Resume');
var gameover = document.getElementById('GameOver');

function Pause(){
	if (started === 1) {
	started = 0;
	pause.style.display = 'none';
	setTimeout(function() { resume.style.display = 'inline-block';}, 1000);
	}
}

function Resume(){
	if (started === 0){
	started = 1;
	movementLoop();
	resume.style.display = 'none';
	setTimeout(function() { pause.style.display = 'inline-block';}, 1000);
	}
}

function Reset() {
	if (started === 2) {
	begin.style.display = 'inline-block';
	reset.style.display = 'none';
	gameover.style.display = 'none';
	started = 0;
	score = 0;
	reds = [];
	direction = 2;
	lastDirection = 2;
	speed = 450;
	tailLength = 5;
	tailMove = "";
	applePos = "";
	RBanana.style.display = 'none';
	RBanana2.style.display = 'none';
	Generate();
	document.getElementsByTagName('body')[0].style.animation = '';}
}

// function for when you lose
function Death() {
	started = 2;
	gameover.style.display = 'inline-block';
	reset.style.display = 'inline-block';
	pause.style.display = 'none';
	resume.style.display = 'none';
}

// score system
var counter = document.getElementById('score');
var RBanana = document.getElementById('Banana');
var RBanana2 = document.getElementById('Banana2');
var score = 0;

// used when you move and when 'apples' are picked up
function addScore(amount){
	score = score + amount;
	counter.innerHTML = score;
	Banana(); Crazy();
}

// score pointstreak bonuses 'distractions'
var happ = 0;
function Banana(){
	if (score >= 10000){
		if (happ === 0){
			happ = 1;
			RBanana.style.display = 'inline-block';
		}
		if (score >= 20000){
			if (happ === 1){
				happ = 2;
				RBanana2.style.display = 'inline-block';
			}
		}
	}
}
// another fun 'distraction' that changes the background color randomly. (activates when you hit max-speed)
function Crazy(){
	if (speed <= 150) {
		var x = document.getElementsByTagName('body');
		x[0].style.animation = 'blink 6s linear infinite';
	}
}

// all the movement functions
function moveRight(){
	if (X === 30) {Death(); return}

	if (document.getElementById(Xp).innerHTML === "A") {
		tailLength+= 1; addScore(100*multi); spawnApple(); gainSpeed(10);}

	if (document.getElementById(Xp).innerHTML === "W") {Death();}

	else if (X < 30) {
	document.getElementById(slotPos).innerHTML = "W";
	document.getElementById(slotPos).className = "snake";
	X = Number(X) + 1;
	slotPos = "slot"+Y+"-"+X;
	document.getElementById(slotPos).innerHTML = "&copy;";
	document.getElementById(slotPos).className = "head";}

	Xp = "slot"+Y+"-"+(Number(X) + 1);
	Xm = "slot"+Y+"-"+(Number(X) - 1);
	Ym = "slot"+(Number(Y) - 1)+"-"+X;
	Yp = "slot"+(Number(Y) + 1)+"-"+X;
}

function moveLeft(){
	if (X === 1) {Death(); return}

	if (document.getElementById(Xm).innerHTML === "A") {
		tailLength+= 1; addScore(100*multi); spawnApple(); gainSpeed(10);}

	if (document.getElementById(Xm).innerHTML === "W") {Death();}

	else if (X > 1) {
	document.getElementById(slotPos).innerHTML = "W";
	document.getElementById(slotPos).className = "snake";
	X = Number(X) - 1;
	slotPos = "slot"+Y+"-"+X;
	document.getElementById(slotPos).innerHTML = "&copy;";
	document.getElementById(slotPos).className = "head";}

	Xp = "slot"+Y+"-"+(Number(X) + 1);
	Xm = "slot"+Y+"-"+(Number(X) - 1);
	Ym = "slot"+(Number(Y) - 1)+"-"+X;
	Yp = "slot"+(Number(Y) + 1)+"-"+X;
}

function moveDown(){
	if (Y === 15) {Death(); return}

	if (document.getElementById(Yp).innerHTML === "A") {
		tailLength+= 1; addScore(100*multi); spawnApple(); gainSpeed(10);}

	if (document.getElementById(Yp).innerHTML === "W") {Death();}

	else if (Y < 15) {
	document.getElementById(slotPos).innerHTML = "W";
	document.getElementById(slotPos).className = "snake";
	Y = Number(Y) + 1;
	slotPos = "slot"+Y+"-"+X;
	document.getElementById(slotPos).innerHTML = "&copy;";
	document.getElementById(slotPos).className = "head";}

	Xp = "slot"+Y+"-"+(Number(X) + 1);
	Xm = "slot"+Y+"-"+(Number(X) - 1);
	Ym = "slot"+(Number(Y) - 1)+"-"+X;
	Yp = "slot"+(Number(Y) + 1)+"-"+X;
}

function moveUp(){
	if (Y === 1) {Death(); return}

	if (document.getElementById(Ym).innerHTML === "A") {
		tailLength+= 1; addScore(100*multi); spawnApple(); gainSpeed(10);}

	if (document.getElementById(Ym).innerHTML === "W") {Death();}

	else if (Y > 1) {
	document.getElementById(slotPos).innerHTML = "W";
	document.getElementById(slotPos).className = "snake";
	Y = Number(Y) - 1;
	slotPos = "slot"+Y+"-"+X;
	document.getElementById(slotPos).innerHTML = "&copy;";
	document.getElementById(slotPos).className = "head";}

	Xp = "slot"+Y+"-"+(Number(X) + 1);
	Xm = "slot"+Y+"-"+(Number(X) - 1);
	Ym = "slot"+(Number(Y) - 1)+"-"+X;
	Yp = "slot"+(Number(Y) + 1)+"-"+X;
}

// some base values for variables used later on
var direction = 2;
var lastDirection = 2;
var speed = 450;
var reds = [];
var tailLength = 5;
var tailMove = "";
var applePos = "";

// the function for the tail of the snake
function tail(){
	tailMove = reds[reds.length - tailLength];
	document.getElementById(tailMove).innerHTML = "X";
	document.getElementById(tailMove).className = "ground";
}

// the function for spawning 'apples' has a slight bug that sometimes makes apple not spawn (about 1 in 450 chance of happening)
function spawnApple(){
	applePos = "slot" + (Math.floor(Math.random() * 15) + 1) + "-" + (Math.floor(Math.random() * 30) + 1);
	if (document.getElementById(applePos).className == "snake") {spawnApple();}else
	if (document.getElementById(applePos).className == "apple") {spawnApple();}else
	if (document.getElementById(applePos).className == document.getElementById(Ym)) {spawnApple();}else
	if (document.getElementById(applePos).className == document.getElementById(Yp)) {spawnApple();}else
	if (document.getElementById(applePos).className == document.getElementById(Xm)) {spawnApple();}else
	if (document.getElementById(applePos).className == document.getElementById(Xp)) {spawnApple();}else
	document.getElementById(applePos).innerHTML = "A";
	document.getElementById(applePos).className = "apple"; 
}

// the function that uses the movement functions to make the snake move according to the direction it is going
function movementLoop(){
	if (started === 1) {
	addScore(1*multi);
	if (direction === 1) {reds[reds.length] = slotPos; moveUp(); lastDirection = 1;}
	if (direction === 2) {reds[reds.length] = slotPos; moveRight(); lastDirection = 2;}
	if (direction === 3) {reds[reds.length] = slotPos; moveDown(); lastDirection = 3;}
	if (direction === 4) {reds[reds.length] = slotPos; moveLeft(); lastDirection = 4;}
	if (reds.length >= tailLength) {tail();}
	if (tailLength === 20) { multi = 2;}
	if (tailLength === 40) { multi = 3;}
	if (tailLength === 60) { multi = 4;}
	if (tailLength === 80) { multi = 5;}
	setTimeout(function() {movementLoop();}, speed);
	}else return;
}

// the function that increases speed (only used when picking up apples, but could be changed)
function gainSpeed(spd){
	if (speed >= 151){ speed = speed - spd;}
}

// all the buttons used with their functions
document.onkeydown = function(e){
    e = e || window.event;
    switch(e.which || e.keyCode){
        case 65: // A
        	if (lastDirection === 2){return} direction = 4;
        break;

        case 37: // Left Arrow
        	if (lastDirection === 2){return} direction = 4;
        break;

        case 87: // W
        	if (lastDirection === 3){return} direction = 1;
        break;

        case 38: // Up Arrow
        	if (lastDirection === 3){return} direction = 1;
        break;

        case 68: // D
        	if (lastDirection === 4){return} direction = 2;
        break;

        case 39: // Right Arrow
        	if (lastDirection === 4){return} direction = 2;
        break;

        case 83: // S
        	if (lastDirection === 1){return} direction = 3;
        break;

        case 40: // Down Arrow
        	if (lastDirection === 1){return} direction = 3;
        break;

        case 27: // Escape
        	Pause();
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
};

// © Dennis V.B.
// version 1.0.3