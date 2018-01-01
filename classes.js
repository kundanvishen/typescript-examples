// Created by Kundan Singh
/**
 * Interfaces most of the time violate cohision principal.
 *
 * =======
 * CLASS:
 * =======
 * A class groups properties and methods that are highly related.
 */
var Point = /** @class */ (function () {
    function Point() {
    }
    // When a function is part of a class, we call it method
    Point.prototype.draw = function () {
        // ....
    };
    ;
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
