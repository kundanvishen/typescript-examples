// Created By Kundan Singh
var Point = /** @class */ (function () {
    // 'constructor' is a reserved keyword in TypeScript
    // The '?' 
    // constructor(x: number, y: number) {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    // When a function is part of a class, we call it method
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    ;
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
var point = new Point(1, 2);
point.draw();
