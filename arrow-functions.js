/**
 * @param message String
 * @description conventional Method of declaring function variables:
 */
var log = function (message) {
    console.log(message);
};
/**
 * @param message String
 * @description Doing the same with Arrow functions
 */
var log2 = function (message) {
    console.log(message);
};
/**
 * @param number Number
 * @description 'number*2' would be returned. Notice the missing curly braces
 */
var MultiplyBy2 = function (number) { return number * 2; };
var log4 = function () {
    console.log('Some Text Here!');
};
/**
 * A new Date object would be returned
 */
var getCurrentDate = function () { return new Date(); };
