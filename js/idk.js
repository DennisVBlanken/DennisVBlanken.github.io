
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
	if (list[id] == 0) {
	list[id]=10; idk();}
	else{
	list[id]--; idk();
	}
}

function idk() {
	for (i=1;i<=121;i++) {
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
		        x.style.background = 'black';
		}
	}
}
idk();