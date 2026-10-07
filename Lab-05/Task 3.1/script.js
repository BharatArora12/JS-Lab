function calculatePrice(price, tax = 0.18) {
    return price + (price * tax);
}

// Custom tax rate: 10%
console.log(calculatePrice(1000, 0.10)); // 1100

// Using default tax rate: 18%
console.log(calculatePrice(1000)); // 1180