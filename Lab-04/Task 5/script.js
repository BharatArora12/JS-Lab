let correctPIN = 1234;
let enteredPIN = 1234;
let balance = 5000;

if (enteredPIN === correctPIN) {
    console.log("PIN Correct. Access Granted.");

    let choice = 3;

    switch (choice) {
        case 1:
            console.log("Current Balance: ₹" + balance);
            break;

        case 2:
            let withdrawAmount = 7000;

            if (withdrawAmount > balance) {
                console.log("Insufficient funds.");
            } else {
                balance = balance - withdrawAmount;
                console.log("Withdrawal Successful.");
                console.log("New Balance: ₹" + balance);
            }
            break;

        case 3:
            let depositAmount = 2000;

            balance = balance + depositAmount;

            console.log("Deposit Successful.");
            console.log("New Balance: ₹" + balance);
            break;

        default:
            console.log("Invalid choice");
    }

} else {
    console.log("Wrong PIN. Access Denied.");
}