const prompt = require("prompt-sync")(); // Import prompt-sync

// Get user input for first number
const number1 = Number(prompt("Enter number you want to make ten times: "));

// Function to multiply by 10
function tenTimes(number) {
    let result = number * 10;
    return result; // Return result
}
// Store function output in a variable
const output1 = tenTimes(number1);
console.log("Ten times of the number:", output1); // Use stored value

// Get user input for second number6    
const number2 = Number(prompt("Enter number you want to cut half of it: "));

// Function to divide by 2
function cuthalf(number) {
    let result = number / 2;
    return result; // Return result
}
// Store function output in a variable
const output2 = cuthalf(number2);
console.log("Half of the number:", output2); // Use stored value
