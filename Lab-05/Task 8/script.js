// SNIPPET 1
function addNumbers(a, b) {
    return a + b; // FIX: Add return
}
console.log(addNumbers(5, 3));
// ANSWER: Missing return caused undefined.
// Output: 8


// SNIPPET 2
let discount = 0; // FIX: Declare variable

function setDiscount() {
    discount = 20;
}
setDiscount();
console.log(discount);
// ANSWER: discount was not declared.
// Output: 20


// SNIPPET 3
let balance = 1000;

function withdraw(amount) { // FIX: Remove balance parameter
    balance = balance - amount;
    return balance;
}
withdraw(200);
console.log(balance);
// ANSWER: Local balance parameter was shadowing global balance.
// Output: 800


// SNIPPET 4
const sayHello = function() {
    console.log("Hi!");
};

sayHello(); // FIX: Call after declaration
// ANSWER: const function expression cannot be called before initialization.
// Output: Hi!