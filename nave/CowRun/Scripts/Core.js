function drawText(x, y, text, c, f) {
	context.fillStyle = c;
	context.font = f;
	context.fillText(text, x, y);
}

function drawRect(x, y, w, h, c) {
	context.fillStyle = c;
	context.fillRect(x, y, w, h);
}

function drawFSRect(x, y, w, h, c) {
	context.fillStyle = c;
	context.srokeStyle = "#000000";
	context.fillRect(x, y, w, h);
	context.strokeRect(x, y, w, h);
}

function drawSRect(x, y, w, h, c) {
	context.srokeStyle = c;
	context.strokeRect(x, y, w, h);
}

function getVersion() {
	drawText(5, 10, Version, "#000000", "10px Arial");
}