let price = 500;
let discount = price * 0.1;
discount = discount + 5;
console.log("Final: " + discount);

//const discount was changed to let because discount is reassigned.
//fnal was a spelling mistake. It should be discount.

let marks = 85;
let result = marks === 85 ? "Pass" : "Fail";
console.log(result);    

//"85" was a string, so it was changed to the number 85.
//Result was changed to result because JavaScript is case-sensitive.
//Why is the === bug a silent bug?

let cartTotal = 1200;
cartTotal = cartTotal - 100;

let shipping = cartTotal >= 1500 ? "Free" : "Paid";

console.log(shipping);

//const cartTotal was changed to let because cartTotal is reassigned.
//The ternary operator was missing 

    