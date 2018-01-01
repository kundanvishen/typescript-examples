// Created by Kundan Singh
/**
 * Class Declaration
 */
var Point = /** @class */ (function () {
    function Point() {
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
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
