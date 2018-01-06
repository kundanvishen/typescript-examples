// Created By Kundan Singh
class Point {

	constructor(private x?: number, private y?: number) {
		this.x = x;
		this.y = y;
	}

	draw() {
		console.log('X: ' + this.x + ' Y: ' + this.y);
	}
}

let aPoint = new Point(1, 2);
aPoint.draw();