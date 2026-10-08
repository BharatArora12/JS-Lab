let role = "guest";

function loginAsAdmin() {
    let role = "admin";
    console.log("Inside function:", role);
}

console.log("Before login:", role);

loginAsAdmin();

console.log("After login:", role);