/**
 * match(): is a function that matches a string against a pattern
 * and return array of matches
 *
 * @format
 */

// Example 01

// ---> convert array of strings to array of numbers ---

let log = console.log;

function convertToArrOfNums(arr) {
	return arr.map((a) => a.match(/[0-9]+/g).map((a) => Number(a)));
	// + in Regex is means that matches the preceding expression one or more times
}

log(convertToArrOfNums(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
