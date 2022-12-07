/*

Hoisting
Variables defined with var are hoisted to the top and can be initialized at any time.

Meaning: You can use the variable before it is declared:

*/

carName = "Volvo";
console.log(carName)
var carName;

/*
Variables defined with const are also hoisted to the top, but not initialized.
Meaning: Using a const variable before it is declared will result in a ReferenceError:
*/

console.log(car1Name);
const car1Name = "Volvo";