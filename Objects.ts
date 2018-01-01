// Created by Kundan Singh

/**
 * Class Declaration
 */
class Point {
	x: number;
	y: number;

	// When a function is part of a class, we call it method
	draw() {
		console.log('X: ' + this.x + ', Y: ' + this.y);
	};
	getDistance(another: Point) {
		// ...
	}
}

let point = new Point();
point.x = 1;
point.y = 2;
point.draw();
