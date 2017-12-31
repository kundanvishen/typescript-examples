var a; // type Number
var b; // type Boolean
var c; // type String
var d; // type Any
var e = [1, 2, 3]; // An Array of Number
/**
 * Bad Practice but for the sake of what's possible:
 */
var f = [1, 'two', false]; // An array of Any type
/**
 * Enum Example
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Green;
console.log(backgroundColor);
