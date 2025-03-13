// Write your solution in this file!
// 1) Declare `customerName` in the global scope and set it to "bob"
var customerName = "bob";

// 2) Function to uppercase `customerName`
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3) Function to set `bestCustomer`
function setBestCustomer() {
  bestCustomer = "not bob"; // No `var`, `let`, or `const` means it becomes a global variable
}

// 4) Function to overwrite `bestCustomer`
function overwriteBestCustomer() {
  bestCustomer = "maybe bob"; // Modifies the same global `bestCustomer`
}

// 5) Declare `leastFavoriteCustomer` as a constant
const leastFavoriteCustomer = "someone";

// Function attempting to reassign `leastFavoriteCustomer` (should fail)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "anyone else"; // This will throw an error because it's a `const`
}

