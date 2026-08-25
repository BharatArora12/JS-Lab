// 1. Create THREE product objects
const item1 = {
    name: "Laptop",
    price: 45000,
    qty: 1
};

const item2 = {
    name: "Mouse",
    price: 800,
    qty: 2
};

const item3 = {
    name: "Keyboard",
    price: 1500,
    qty: 1
};


// 2. Check that all prices are Numbers
console.log(typeof item1.price);
console.log(typeof item2.price);
console.log(typeof item3.price);


// Calculate subtotals manually
const subtotal1 = item1.price * item1.qty;
const subtotal2 = item2.price * item2.qty;
const subtotal3 = item3.price * item3.qty;


// Calculate grand total
const grandTotal = subtotal1 + subtotal2 + subtotal3;


// 3. Tiered discount using nested ternary
const discountPercentage =
    grandTotal >= 5000 ? 20 :
    grandTotal >= 2000 ? 10 :
    grandTotal >= 1000 ? 5 : 0;


// Calculate discount amount
const discountAmount = grandTotal * discountPercentage / 100;

// Amount after discount
const amountAfterDiscount = grandTotal - discountAmount;


// 4. Apply 18% GST
const gst = amountAfterDiscount * 18 / 100;

const finalPayable = amountAfterDiscount + gst;


// 5. Free shipping using logical OR
const freeShipping =
    (amountAfterDiscount >= 1500) || (3 >= 3);


// Shipping status
const shippingStatus = freeShipping
    ? "FREE"
    : "₹100 shipping charge";


// Bonus: Loyalty points
const loyaltyPoints = finalPayable / 100;


// 7. Create receipt
const receipt = `
========== SMART SHOPPING CART ==========

${item1.name} x ${item1.qty}            ₹${subtotal1}
${item2.name} x ${item2.qty}            ₹${subtotal2}
${item3.name} x ${item3.qty}            ₹${subtotal3}

------------------------------------------
Grand Total:                 ₹${grandTotal}

Discount:                    ${discountPercentage}%
Discount Amount:             ₹${discountAmount}

Amount After Discount:       ₹${amountAfterDiscount}

GST (18%):                   ₹${gst}

Final Payable Amount:        ₹${finalPayable}

Shipping:                    ${shippingStatus}

Loyalty Points:              ${loyaltyPoints}

==========================================
`;

console.log(receipt);

// Display receipt on webpage
document.getElementById("receipt").textContent = receipt;