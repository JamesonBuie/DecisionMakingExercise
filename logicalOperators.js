// LOGICAL OPERATORS
// Logical Operators are used to return a True or False value based off of two Boolean values

// AND (Ex: &&)
// The AND logical operator checks if both conditions are true 
// Returns true when both conditions are true. If at least one condition is false, then it returns false 

// Example 1
let andOne = true && false;
console.log(andOne); // false

// Example 2 
let andTwo= 5 < 6 && 10>=10;
console.log(andTwo); // true

// Example 3
let andThree = "Hello!".length === 6 && 10 ==="10";
console.log(andThree); // false

// Example 4
let andFour = 2 > -10 && "Hi" != "hi" && 2!= "2";
console.log(andFour);

// OR (Ex: ||)
// Shift + \ will create the Pipe (|) character
// The OR operator checks if at least one condition is true 
// Returns "false" when both conditions are false. If at least one condition is true, then it will return "true"

// Example 1
let orOne = true || false;
console.log(orOne); // true

// Example 2
let orTwo = 1 > 2 || "Jam" === "Jelly";
console.log(orTwo); // false

// Example 3
let orThree = `Two` == 2 || "One".length == 1 || false === false; 
console.log(orThree); // true

// Example 4
let orFour = "Five".length === 4 || 'Hot Dog' ===  `Sandwich`;
console.log(orFour); // true

// Order of Operations (AND before OR)
let orderOne = "False" === `False` ||  `True` === `true` && 4 == "four".length;
console.log(orderOne); // true

// NOT (Ex: !)
// ! is called a Bang in JavaScript 
// The NOT logical operator converts a value from true to false if the value is true. Does same is the value is false, as it will change it to true.

// Example 1 
let notOne = !true; 
console.log(notOne); // false

// Example 2
let notTwo = !("Chuck Norris".length > "John Wick".length); 
console.log(notTwo); // false

