let a: number; // type Number
let b: boolean; // type Boolean
let c: string; // type String
let d: any; // type Any
let e: number[] = [1, 2, 3]; // An Array of Number

/**
 * Bad Practice but for the sake of what's possible:
 */
let f: any[] = [1, 'two', false]; // An array of Any type


/**
 * Enum Example
 * 
 * Note: Subsequent Elements get auto-value starting
 * from 0, but it's good practice to specify the value
 * by yourself.
 */

enum Color {Red = 0, Blue = 1, Green, Purple = 3};

let backgroundColor = Color.Green;
console.log(backgroundColor);

