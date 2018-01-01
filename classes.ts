// Created by Kundan Singh

/**
 * Interfaces most of the time violate cohision principal.
 * 
 * =======
 * CLASS: 
 * =======
 * A class groups properties and methods that are highly related.
 */

class Point {
	x: number;
	y: number;

	// When a function is part of a class, we call it method
	draw() {
		// ....
	};
	getDistance(another: Point) {
		// ...
	}
}

