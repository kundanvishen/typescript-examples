/**
 * Interfaces kind of allow you to declare custom types
 * in your code.
 * We declare an interface by using 'interface' keyword
 */

interface Point {
	x: number,
	y: number
}

let drawPoint = (point: Point) => {
	//  Do something with the coordinate
}

// Invoke the function and pass the object with the required structure
drawPoint({
	x: 12,
	y: 34
});