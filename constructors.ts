// Created By Kundan Singh

class Point {
	x: number;
	y: number;

	// 'constructor' is a reserved keyword in TypeScript
	// The '?' 
	// constructor(x: number, y: number) {
	constructor(x?: number, y?: number) {
		this.x = x;
		this.y = y;
	}

	// When a function is part of a class, we call it method
	draw() {
		console.log('X: ' + this.x + ', Y: ' + this.y);
	};
	getDistance(another: Point) {
		// ...
	}
}

let point = new Point(1, 2);
point.draw();


