
/**
 * @param message String
 * @description conventional Method of declaring function variables:
 */
let log = function(message) {
	console.log(message);
}

/**
 * @param message String
 * @description Doing the same with Arrow functions
 */
let log2 = (message) => {
	console.log(message);
};

/**
 * @param number Number
 * @description 'number*2' would be returned. Notice the missing curly braces
 */
let MultiplyBy2 = (number) => number*2;


let log4 = () => {
	console.log('Some Text Here!');
};

/**
 * A new Date object would be returned
 */
let getCurrentDate = () =>  new Date();