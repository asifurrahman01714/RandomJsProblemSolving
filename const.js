// Const in object

// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};

// Change a property:
car.color = "red";

// Add a property:
car.owner = "Johnson";

console.log(car);


// COnst in array
const friends = ['asif', 'sakib'];
const newFriends = [...friends, 'arif'];
console.log(newFriends);
newFriends.push("rakib");
console.log(newFriends)


// Const block scope

const x = 10;
console.log(x)
// Here x is 10

{
const x = 2;
console.log(x)
// Here x is 2
}

// Redeclaration a const variable in various block scope is allowed

const y = 2;
console.log(y);       // Allowed

{
  const y = 3;
  console.log(y);    // Allowed
}

{
  const y = 4;
  console.log(y);    // Allowed
}