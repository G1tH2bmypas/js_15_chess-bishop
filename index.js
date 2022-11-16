function bishop(x1, y1, x2, y2) {
	return Math.abs(x2 - x1) === Math.abs(y2 - y1);
}

module.exports = bishop;
