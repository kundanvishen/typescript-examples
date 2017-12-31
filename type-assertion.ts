// Created by Kundan Singh

/**
 * In Typescript, if we don't set the value of
 * a variable during defining, it's type is set to any.
 * 
 * Type Assertion: When we want to explicitly,
 * tell the compiler, what the type of variable is,
 */

let message;
message = 'abc';

/**
* There are multiple ways of type assertion in TypeScript
*/

// 1)
// More preferred approach in community:
let endsWithC1 = (<string>message).endsWith('c');

// 2)
// Another Approach:
let endsWithC2 = (message as string).endsWith('c');





