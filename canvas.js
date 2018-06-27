console.log('loaded');

var canvas = document.querySelector("canvas");

var context = canvas.getContext("2d");


var point1 = {
	x: null,
	y: null
};

var point2 = {
	x: null,
	y: null
}

function onMouseMove(event) {
	console.log('mousemove');

	point2.x = event.clientX;
	point2.y = event.clientY;

	context.beginPath();
	context.moveTo(point1.x, point1.y);
	context.lineTo(point2.x, point2.y);
	context.stroke();

	point1.x = point2.x;
	point1.y = point2.y;

}

canvas.addEventListener('mousedown', function (event) {
	point1.x = event.clientX;
	point1.y = event.clientY;

	console.log(event);

	canvas.addEventListener('mousemove', onMouseMove);

	canvas.addEventListener('mouseup', function () {
		canvas.removeEventListener('mousemove', onMouseMove);
	});
});
