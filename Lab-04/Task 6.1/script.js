// ===============================
// SNIPPET 1
// ===============================

let age = 15;

if (age === 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

/*
WHAT WAS WRONG:
The original code used:
if (age = 18)

Here, "=" is the assignment operator.
It changes age to 18 instead of comparing it.

WHAT I CHANGED:
Changed "=" to "===".

Correct:
if (age === 18)
*/


// ===============================
// SNIPPET 2
// ===============================

let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("Red fruit");
        break;

    case "banana":
        console.log("Yellow fruit");
        break;

    default:
        console.log("Unknown fruit");
}

/*
WHAT WAS WRONG:
The original "apple" case did not have a break statement.

Because of this, after printing "Red fruit",
the program continued to the "banana" case.

WHAT I CHANGED:
Added break; after the "apple" case.
*/


// ===============================
// SNIPPET 3
// ===============================

let choice = "2";

switch (choice) {
    case "1":
        console.log("One");
        break;

    case "2":
        console.log("Two");
        break;

    default:
        console.log("Invalid");
}

/*
WHAT WAS WRONG:
The original choice was:
let choice = "2";

But the cases were:
case 1:
case 2:

"2" is a string, while 2 is a number.
JavaScript switch uses strict comparison.

WHAT I CHANGED:
Changed:
case 1:
case 2:

to:
case "1":
case "2":
*/