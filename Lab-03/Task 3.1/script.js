let scores = [45, 60, 35, 80, 50];

// Sum using indexing
let sum = scores[0] + scores[1] + scores[2] + scores[3] + scores[4];

// Calculate average
let average = sum / scores.length;

// Ternary operator to classify
let result = average >= 40 ? "Pass" : "Fail";

console.log("Scores:", scores);
console.log("Sum:", sum);
console.log("Average:", average);
console.log("Result:", result);