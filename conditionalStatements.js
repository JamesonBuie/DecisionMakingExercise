// CONDITIONAL STATEMENTS
// Conditional Statements are used to complete certain actions (AKA Line(s) of code) based on certain conditions

// IF
/*
Syntax Example

if (condition) {
    CODE TO BE RUN GOES HERE;
}
*/

// Code inside the brackets will run of the condition is true. Remember to use () around the condition
if (true) { // Condition is true so the code runs
    console.log(`Yay the condition was true!!!`);
}

 
if (false) { // Condition is false so the code does NOT run
    console.log("She aint work");
}

if (2 > 0) { // tis true
    console.log("Will this run? Yes because 2 is greater than 0");
}

// IF and ELSE
/*
Syntax Example 

if (condition) {
    CODE TO BE RUN GOES HERE;
} else {
    CODE TO BE RUN GOES HERE;
}
*/
// Code in the ELSE brackets runs when the IF condition is false. Also, when the IF condition is true, the code in the IF brackets will run and the codes in the ELSE brackets will NOT run. 
let num = 5;
if (num < 5) {
    console.log(`Number is less than 5`);
} else {
    console.log(`Number is greater than or equal to 5`);
}

// IF and ELSE IF
/* 
Syntax Example 

if (condition) {
    CODE TO BE RUN GOES HERE;   
} else if (condition) {
    CODE TO BE RUN GOES HERE;
}
*/
// Code in ELSE IF brackets runs if previous conditions are NOT true and the condition for that ELSE IF is true
// While there can only be a single IF and single ELSE in a conditional statement, there is not limit to the amount of ELSE IFs that can be used
let number = 4;
if (number === 5) {
    console.log(`Number is 5`);
} else if (number ===4) {
    console.log(`Number is 4`);
} else if (number < 4) {
    console.log(`Number is less than 4`);
}

// IF, ELSE, IF, and ELSE
/* 
Syntax Example 

if (condition) {
    CODE TO BE RUN GOES HERE;
} else if (condition) {
    CODE TO BE RUN GOES HERE;
} else {
    CODE TO BE RUN GOES HERE;
}
*/
// Code in ELSE brackets will always run as long as the previous conditions are false. ELSE does not have a condition that needs to be checked for it to run.
let day = `Wednesday`;
if (day === `Wednesday`) {
    console.log(`It is Hump Day`);
} else if (day === `Friday`) {
    console.log(`YAY! It is Friday!`);
} else {
    console.log(`It is not Wednesday or Friday`);
}

// Nested Conditional Statements 
// A conditional statement can be nested inside another conditional statement 
// In this example, the console.log(`Hi`) will only rin when both the very first IF is true and the nested IF condition is true
if (true) {
    console.log(`Hello`);

    if (true) {
        console.log(`Hi`);
    }
} else {
    console.log(`Goodbye`);
}