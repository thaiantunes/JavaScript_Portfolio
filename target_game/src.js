var screen = document.querySelector('#canvas');
var cursor = screen.getContext('2d');

cursor.fillStyle = 'white';
cursor.fillRect(0, 0, 600, 400);

var radius = 10;
var xRandom; 
var yRandom;

function drawCircle(x, y, radius, color) {
	cursor.fillStyle = color;
	cursor.beginPath();
	cursor.arc(x, y, radius, 0, 2 * Math.PI);
	cursor.fill();
}

function resetScreen() {
	cursor.clearRect(0, 0, 600, 400);
}

function drawTarget(x,y) {
	drawCircle(x, y, radius+20, 'red');
	drawCircle(x, y, radius+10, 'white');
	drawCircle(x, y, radius, 'red');
}

function positioning(max) {
	return Math.floor(Math.random() * max);
}

function refreshScreen() {
	resetScreen();
	xRandom = positioning(600);
	yRandom = positioning (400);
	drawTarget(xRandom, yRandom);
}

setInterval(refreshScreen, 1000);

function shoot(event) {
	var x = event.pageX - screen.offsetLeft;
	var y = event.pageY - screen.offsetTop;

	if((x > xRandom - radius)
	&& (x < xRandom + radius)
	&& (y > yRandom - radius)
	&& (y < yRandom + radius)) {
		alert("You got it!");
	}
}

screen.onclick = shoot;
