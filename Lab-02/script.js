let grade = average >= 90
    ? "A"
    : average >= 80
    ? "B"
    : average >= 70
    ? "C"
    : average >= 60
    ? "D"
    : "F";

let isEligibleForScholarship = average >= 85 && attendance >= 75;

console.log("Subject 1:", marks1);
console.log("Subject 2:", marks2);
console.log("Subject 3:", marks3);
console.log("Total:", total);
console.log("Average:", average);
console.log("Grade:", grade);
console.log("Average type:", typeof average);

console.log("Student scored", average, "average and received grade", grade);

isEligibleForScholarship
    ? console.log("Congratulations also eligible for Scholarship")
    : console.log("Sorry not eligible for Scholarship");