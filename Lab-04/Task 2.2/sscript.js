// Correct PIN
let correctPin = 1234;

// Test 1: Right PIN
let guess1 = 1234;

if (guess1 === correctPin) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

// Test 2: Wrong PIN
let guess2 = 5678;

if (guess2 === correctPin) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}