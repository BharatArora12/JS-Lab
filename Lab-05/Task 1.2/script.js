function calculateDiscount(price, isMember) {
    if (isMember === true) {
        return price * 0.9;
    } else {
        return price;
    }
}

// Test as a member
console.log(calculateDiscount(1000, true));

// Test as a non-member
console.log(calculateDiscount(1000, false));