// COMPARISON OPERATORS
// Comparison Operators are used to return a True or False Boolean value when comparing two values

// Greater Than (Ex: >)
console.log(3>1); // true
console.log(0.9 > 1); // false

// Less Than (Ex: <)
console.log(3<1); // false
console.log(0.9<1); // true

// Greater Than or Equal To (Ex: >=)
console.log(3 >= 3); // true
console.log(3 >=5); // false


// Less Than or Equal To (Ex: <=)
console.log(3 <= 3); // true
console.log(3 <= 2); // true
console.log(3<=5); // true
// EQUAL COMPARISONS
// Double Equals (Ex: ==)
// Checks if the characters of the two values are the same
console.log(3==3); // true
console.log(3==2); // false
console.log(3=="3"); // true
console.log("Hello" == "Hello"); // true
console.log("Hello" == "Hi"); //false
console.log("Hello" == "hello"); // false
let hello = "Hi"
console.log(hello == "Hi"); // true

// Triple Equals (Strict Equality) (Ex: ===)
// Checks if the characters of the two values are the same. It compares the data/primitive types to compare if they are the same as well.
console.log(3 === 3); //true
console.log(3==="3"); // false
console.log("Hello"===`Hello`); // true (both are string data-types)

// NOT EQUAL COMPARISONS
// Not Equal (Ex: !=)
// Checks to see if characters (AKA face value) of two values are NOT equal to each other
console.log(3!=3); // false
console.log(3!==2); // true
console.log("Hello" != "hello"); // true
console.log(3 != "3"); //false

// Strict Not Equal (Ex: !==)
console.log(3 !== 3); // false
console.log(3 !== "3"); // true
console.log("Hello" !== "Hello"); // false