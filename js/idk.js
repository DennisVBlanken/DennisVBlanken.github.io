
function Generate() {
main.innerHTML = '';
	for (var a = 1; a <= 110; a++){
		main.innerHTML = main.innerHTML + '<span class="back" id="'+a+'">_</span>';
	}
}
Generate();

	var c = 1;
function idk() {
	for (var i = 1; i <= 110; i++) {
		var b = document.getElementById(i);
		if (c === 1) {
			b.style.background = 'red';
			c++
		}else
		if (c === 2) {
			b.style.background = 'blue';
			c--
		}
	}
	if (c <= 1) {c++}else c--;
	return setTimeout(function() {idk();}, 1000);;
}
idk();