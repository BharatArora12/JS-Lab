var total = 5;
console.log(total); // Now prints 5


greet();
function greet() { console.log("Hi"); }


function makeCounter() { 
    let c = 0; 
    return function() { return c++; }; 
}
const next = makeCounter();
console.log(next(), next());


function makeCounter2() {
    let count = 0; 
    return function () { count++; return count; };
}
const n = makeCounter2();
console.log(n(), n(), n());