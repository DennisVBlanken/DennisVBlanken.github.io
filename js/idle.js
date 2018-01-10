amount = 0;
income = 0;
cvalue = 1;
price1 = 10;
count1 = 0;
price2 = 100;
count2 = 0;
counter = document.getElementById('counter');
cincome = document.getElementById('cincome');
counter1 = document.getElementById('1counter');
cprice1 = document.getElementById('price1');
counter2 = document.getElementById('2counter');
cprice2 = document.getElementById('price2');
setInterval(gain, 1000);

function gain(){
	amount = amount + income;
	counter.innerHTML = roundNum(amount, 1);
}
function clikk(){
	amount = amount + cvalue;
	counter.innerHTML = roundNum(amount, 1);
}
function buy1(a){
	if (amount >= (price1 * a)) {
		amount = amount - (price1 * a);
		counter.innerHTML = roundNum(amount, 1);
		income = income + a;
		cincome.innerHTML = roundNum(income, 1);
		count1 = count1 + a;
		counter1.innerHTML = count1;
		price1 = 10 * 1.07 ** count1;
		cprice1.innerHTML = roundNum(price1, 1);
	}
}
function buy2(a){
	if (amount >= (price2 * a)) {
		amount = amount - (price2 * a);
		counter.innerHTML = roundNum(amount, 1);
		income = income + 5 * a;
		cincome.innerHTML = roundNum(income, 1);
		count2 = count2 + a;
		counter2.innerHTML = count2;
		price2 = 100 * 1.13 ** count2;
		cprice2.innerHTML = roundNum(price2, 1);
	}
}
function roundNum(number, digits){
            var multiple = Math.pow(10, digits);
            var rNum = Math.round(number * multiple) / multiple;
            return rNum;
        }