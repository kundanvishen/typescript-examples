// Created by Kundan Singh
/**
 * In Typescript, if we don't set the value of
 * a variable during defining, it's type is set to any.
 *
 * Type Assertion: When we want to explicitly,
 * tell the compiler, what the type of variable is,
 */
var message;
message = 'abc';
/**
* There are multiple ways of type assertion in TypeScript
*/
// 1)
// More preferred approach in community:
var endsWithC1 = message.endsWith('c');
// 2)
// Another Approach:
var endsWithC2 = message.endsWith('c');
