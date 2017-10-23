
// *some variables*

var opt1 = document.getElementById('option1');
opt1.innerHTML = 'Start';
var opt2 = document.getElementById('option2');
opt2.innerHTML = 'Start?';
var opt3 = document.getElementById('option3');
opt3.innerHTML = 'Start!';
var opt4 = document.getElementById('option4');
var goldCounter = document.getElementById('goldCounter');
var playerHealthBar = document.getElementById('playerHealthBar');
var weapon = document.getElementById('weapon');
var luckCounter = document.getElementById('luck')
var levelImg = document.getElementById('level_image');

var levelText = document.getElementById('level_text');

var textTop = document.getElementById('level_title');

var playerHealth = 100;
var maxHealth = 100;
//status of the onetime-only events.
var treasureGet = 0;
var fountainGet = 0;
var fight1 = 0;
var state = 1;
var jumpState = 1;

var luck = Math.floor((Math.random() * 100) + 1);
luckCounter.innerHTML = "Luck: " + luck;

textTop.innerHTML = 'Start het spel';
// an array of the items the player can get in the game.
var inventory = {
	dungeonKey: false,
	armor: false,
	sword: false,
	key: false,
}
// the currency used to buy stuff
var gold = 0

// *all the functions*
//Used to reset the game
function reset(){
	console.log("reset")
	level1();
	inventory["dungeonKey"] = false;
	gold = 0;
	goldCounter.innerHTML = "Gold: " + gold;
	opt1.style.display = "inline-block";
	opt2.style.display = "inline-block";
	opt3.style.display = "inline-block";
	opt4.style.display = "none";
	luck = Math.floor((Math.random() * 100) + 1);
	luckCounter.innerHTML = "Luck: " + luck;
	jumpState = 1;
	alert("Try again!");
}
//Used to show the player died/failed
function death(){
	console.log("death")
	opt1.style.display = "none";
	opt2.style.display = "none";
	opt3.style.display = "none";
	textTop.innerHTML = "";
	opt4.style.display = "none";
	luck = Math.floor((Math.random() * 100) + 1);
	luckCounter.innerHTML = "Luck: " + luck;
	levelImg.src = "Level Images/DeathScreen.jpg";
	if(level_image && level_image.style) {
    level_image.style.width = '700px';
	}
}
//Used to add gold to the variable
function getGold(a){
	gold = gold + a
	goldCounter.innerHTML = "Gold: " + gold
	return gold
}
//Used to remove gold from the variable
function payGold(a){
	gold = gold - a
	goldCounter.innerHTML = "Gold: " + gold
	return gold
}
//Used to make item variables True
function getItem(a){
	inventory[a] = true;
}
//Used to add health to the variable
function getHealth(a){
	playerHealth = playerHealth + a;
	if (playerHealth >= maxHealth) {playerHealth = maxHealth;}
	playerHealthBar.innerHTML = "HP: " +  playerHealth;
	return playerHealth
}
//Used to remove health from the variable
function loseHealth(a){
	if (inventory["armor"] === false) {
	playerHealth = playerHealth - a;
	playerHealthBar.innerHTML = "HP: " +  playerHealth;}
	else {
	playerHealth = playerHealth - Number(a - 2);
	playerHealthBar.innerHTML = "HP: " +  playerHealth;}
	if (playerHealth < 1) {death();}
	return playerHealth
}
//Island lvl
function level1(){
	console.log("level-1")
	opt1.innerHTML = "Enter the building";
	opt2.innerHTML = "Search the island";
	opt3.innerHTML = "Jump in the water";
	levelImg.src = "Level Images/Adventure-game-map.png";
	textTop.innerHTML = "On the island";
	opt1.onclick = function(){ level2()};
	opt2.onclick = function(){ if (inventory["dungeonKey"] === false) { getItem("dungeonKey"); alert("You found the key to the dungeon!")}
		else alert("You didn't find anything")};
	opt3.onclick = function(){ if (jumpState === 1) { jumpState = 2; if (luck < 50) { death()}
		else if (luck > 50) { getGold(50); alert("You jumped in the water and found some gold.")}
		else if (luck === 50) { getGold(500); alert("you found a sunken treasure ship filled with gold!!!!")}}
		else alert("You have already found eveything there is.")};
	if(level_image && level_image.style) {
    level_image.style.width = '700px';}
}
//House lvl
function level2(){
	console.log("level-2")
	opt1.innerHTML = "Check the bedroom";
	opt2.innerHTML = "Go back outside";
	opt3.innerHTML = "Take the staircase down";
	levelImg.src = "Level Images/Het-huis.png";
	textTop.innerHTML = "Living room";
	opt1.onclick = function(){ if (state === 1) { if (luck >= 20) { alert("You found some gold under the bed."); getGold(50); state = 2;}}
		alert("There is nothing else.")};
	opt2.onclick = level1;
	opt3.onclick = level3;
	if(level_image && level_image.style) {
    level_image.style.width = '400px';}
}
//Dungeon lvl 1
function level3(){
	console.log("level-3")
	var dungeonKey = inventory["dungeonKey"]
	if (dungeonKey) {
		opt1.innerHTML = "Go to the left";
		opt2.innerHTML = "Go back upstairs";
		opt3.innerHTML = "Go to the right";
		levelImg.src = "Level Images/Dungeon1.png";
		textTop.innerHTML = "Dungeon entrance";
		opt1.onclick = level3A;
		opt2.onclick = level2;
		opt3.onclick = level4;
		if(level_image && level_image.style) {
	    level_image.style.width = '550px';}
		} else {
			alert("The door to the dungeon is locked.");
	}
}
//Dungeon lvl 2 (the shop)
function level3A(){
	console.log("level-3A")
	opt1.innerHTML = "Buy some items";
	opt2.innerHTML = "Go to the next room";
	opt3.innerHTML = "Go back";
	opt4.style.display = "none";
	levelImg.src = "Level Images/Dungeon2.png";
	textTop.innerHTML = "The shop";
	opt1.onclick = Shop;
	opt2.onclick = function(){ if (fight1 === 1) { level3Bb();}else { level3Ba();}};
	opt3.onclick = level3;
	opt4.onclick = "";
	if(level_image && level_image.style) {
    level_image.style.width = '450px';}
}
//The shop
function Shop(){
	console.log("the Shop")
	if (inventory["armor"] === false) { opt1.innerHTML = "Buy some armor";}
		else { opt1.innerHTML = "*SOLD*";}
	if (inventory["sword"] === false) { opt2.innerHTML = "Buy a weapon";}
		else { opt2.innerHTML = "*SOLD*";}
	if (inventory["key"] === false) { opt3.innerHTML = "Buy the key";}
		else { opt3.innerHTML = "*SOLD*";}
	opt4.style.display = "inline-block";
	opt4.innerHTML = "Leave the shop"
	levelImg.src = "Level Images/ShopWindow.png";
	textTop.innerHTML = "The shop";
	opt1.onclick = function(){ if(gold >= 60){getItem("armor"); payGold(60); alert("You bought some armor"); Shop()}
		else{alert("You do not have enough gold.")}};
	opt2.onclick = function(){ if(gold >= 40){getItem("sword"); payGold(40); alert("You bought a sword"); weapon.innerHTML = "Sword"; Shop()}
		else{alert("You do not have enough gold.")}};
	opt3.onclick = function(){ if(gold >= 50){getItem("key"); payGold(50); alert("You bought a key, but what is it for?"); Shop()}
		else{alert("You do not have enough gold.")}};
	opt4.onclick = function(){ level3A()};
	if(level_image && level_image.style) {
    level_image.style.width = '450px';}
}
//Dungeon lvl 3
function level3Ba(){
	console.log("level-3B")
	opt1.innerHTML = "Fight";
	opt2.innerHTML = "Try to steal the treasure";
	opt3.innerHTML = "Go back";
	levelImg.src = "Level Images/Dungeon3.png";
	textTop.innerHTML = "";
	opt1.onclick = function(){ if (inventory["sword"] === true) { if (inventory["armor"] === true) { loseHealth(40);} else {loseHealth(80);}
	fight1 = 1; alert("You beat the monsters!"); level3Bb();}else {alert("You can't fight without a weapon...");}};
	opt2.onclick = function(){ if (luck >= 90) { getGold(135); alert("You got the treasure without being noticed!");}
	else { loseHealth(20); alert("You were unable to sneak by the monsters and got attacked!");}};
	opt3.onclick = level3A;
	if(level_image && level_image.style) {
    level_image.style.width = '700px';} 
}
//Dungeon lvl 3 after the fight
function level3Bb(){
	console.log("level-3B")
	opt1.innerHTML = "Drink from the fountain";
	opt2.innerHTML = "Take the treasure";
	opt3.innerHTML = "Go back";
	levelImg.src = "Level Images/Dungeon3b.png";
	textTop.innerHTML = "";
	opt1.onclick = function(){ if (fountainGet == 0) { fountainGet = 1; getHealth(100);}
	else alert("You can't use it again.")};
	opt2.onclick = function(){ if (treasureGet == 0) { treasureGet = 1; getGold(135);}
	else alert("There is no treasure left.")};
	opt3.onclick = level3A;
	if(level_image && level_image.style) {
    level_image.style.width = '700px';} 
}
//Dungeon lvl 4
function level4(){
	console.log("level-4")
	opt1.innerHTML = "";
	opt2.innerHTML = "";
	opt3.innerHTML = "";
	opt4.style.display = "inline-block";
	opt4.innerHTML = "Help the random mage fight";
	levelImg.src = "Level Images/Dungeon4.png";
	textTop.innerHTML = "";
	opt1.onclick = function(){ };
	opt2.onclick = function(){ };
	opt3.onclick = function(){ };
	opt4.onclick = function(){ };
	if(level_image && level_image.style) {
    level_image.style.width = '500px';} 
}