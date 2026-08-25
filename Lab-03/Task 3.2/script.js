const item1 = { name: "Notebook", price: 60, qty: 3 };
const item2 = { name: "Pen", price: 10, qty: 5 };
const item3 = { name: "Bag", price: 800, qty: 1 };
const item4 = { name: "Pencil", price: 5, qty: 10 };

// Calculate subtotals
const subtotal1 = item1.price * item1.qty; // 180
const subtotal2 = item2.price * item2.qty; // 50
const subtotal3 = item3.price * item3.qty; // 800
const subtotal4 = item4.price * item4.qty; // 50

// Calculate grand total
const grandTotal = subtotal1 + subtotal2 + subtotal3 + subtotal4;

console.log("Grand Total:", grandTotal);