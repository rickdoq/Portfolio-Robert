var hh = 0;
var mm = 0;
var ss = 0;

var cron;

function start() {
	cron = setInterval(() => {
		timer();
	}, 1000)
}
function pause() {
	clearInterval(cron)
}
function stop() {
	clearInterval(cron)

	hh = 0;
	mm = 0;
	ss = 0;

	document.getElementById('cont').innerHTML = "00:00:00";
}
function timer() {
	ss++;

	if (ss === 60) {
		ss = 0;
		mm++;
	}
	if (mm === 60) {
		mm = 0;
		hh++;
	}

	var timeAtual = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

	document.getElementById('cont').innerHTML = timeAtual;
}