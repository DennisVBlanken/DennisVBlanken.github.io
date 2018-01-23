
window.oncontextmenu = function (){
    return false;     // cancel default menu
}

var list = new Object();

function Generate() {
main.innerHTML = '';
	for (var a = 1; a <= 121; a++){
		switch(a%10){
			case 9: list[a]=9; break;
			case 8: list[a]=8; break;
			case 7: list[a]=7; break;
			case 6: list[a]=6; break;
			case 5: list[a]=5; break;
			case 4: list[a]=4; break;
			case 3: list[a]=3; break;
			case 2: list[a]=2; break;
			case 1: list[a]=1; break;
			case 0: list[a]=10; break;
			}
		main.innerHTML = main.innerHTML +
		 '<span oncontextmenu="javascript: minc('+a+');return false;" onclick="javascript: plusc('+a
		 +')" class="bg" id="'+a+'">&nbsp;</span>';
	}
}
Generate();

function plusc(id){
	if (list[id] == 10) {
	list[id]=1; idk();}
	else{
	list[id]++; idk();}
}

function minc(id){
	if (list[id] == 1) {
	list[id]=10; idk();}
	else{
	list[id]--; idk();
	}
}

function Clear(){
	for(i=1;i<=121;i++){
		list[i]=0;
	}
	idk();
}

function preset1(){
	for (var a = 1; a <= 121; a++){
	switch(a%10){
		case 9: list[a]=9; break;
		case 8: list[a]=8; break;
		case 7: list[a]=7; break;
		case 6: list[a]=6; break;
		case 5: list[a]=5; break;
		case 4: list[a]=4; break;
		case 3: list[a]=3; break;
		case 2: list[a]=2; break;
		case 1: list[a]=1; break;
		case 0: list[a]=10; break;
		}
	}
	idk();
}

function preset2(){
	list={1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 7: 4, 8: 3, 9: 2, 10: 1, 11: 0, 12: 1, 13: 2, 14: 3, 15: 4, 16: 5, 17: 6, 18: 5, 19: 4, 20: 3, 21: 2, 22: 1, 23: 2, 24: 3, 25: 4, 26: 5, 27: 6, 28: 7, 29: 6, 30: 5, 31: 4, 32: 3, 33: 2, 34: 3, 35: 4, 36: 5, 37: 6, 38: 7, 39: 8, 40: 7, 41: 6, 42: 5, 43: 4, 44: 3, 45: 4, 46: 5, 47: 6, 48: 7, 49: 8, 50: 9, 51: 8, 52: 7, 53: 6, 54: 5, 55: 4, 56: 5, 57: 6, 58: 7, 59: 8, 60: 9, 61: 10, 62: 9, 63: 8, 64: 7, 65: 6, 66: 5, 67: 4, 68: 5, 69: 6, 70: 7, 71: 8, 72: 9, 73: 8, 74: 7, 75: 6, 76: 5, 77: 4, 78: 3, 79: 4, 80: 5, 81: 6, 82: 7, 83: 8, 84: 7, 85: 6, 86: 5, 87: 4, 88: 3, 89: 2, 90: 3, 91: 4, 92: 5, 93: 6, 94: 7, 95: 6, 96: 5, 97: 4, 98: 3, 99: 2, 100: 1, 101: 2, 102: 3, 103: 4, 104: 5, 105: 6, 106: 5, 107: 4, 108: 3, 109: 2, 110: 1, 111: 0, 112: 1, 113: 2, 114: 3, 115: 4, 116: 5, 117: 4, 118: 3, 119: 2, 120: 1, 121: 0}
	idk();
}

function randomset(){
	for(i=1;i<=121;i++) {
		list[i]=Math.floor((Math.random() * 10) + 1);
	}
	idk();
}

function idk(){
	for(i=1;i<=121;i++) {
		x = document.getElementById(i);
		switch(list[i]) {
			case 0:
				x.style.background = 'white';
				break;
		    case 1:
		        x.style.background = '#ff2828'; // red
		        break;
		    case 2:
		        x.style.background = '#ff6f28'; // red/orange
		        break;
		    case 3:
		        x.style.background = '#ffa128'; // orange
		        break;
		    case 4:
		        x.style.background = '#ffc528'; // goldish
		        break;
		    case 5:
		        x.style.background = '#f4ff28'; // yellow
		        break;
		    case 6:
		        x.style.background = '#4fff28'; // green
		        break;
		    case 7:
		        x.style.background = '#28ffd3'; // lightblue
		        break;
		    case 8:
		        x.style.background = '#2848ff'; // blue
		        break;
		    case 9:
		        x.style.background = '#b728ff'; // purple
		        break;
		    case 10:
		        x.style.background = '#ff28e2'; // pink
		        break;
		    default:
		    	list[i]=0;
		        x.style.background = 'white';
		}
	}
}
idk();