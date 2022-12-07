/*
Accessing Object Properties
You can access object properties in two ways:
objectName.propertyName
or
objectName["propertyName"]
*/

{
    // Create an object:
const person = {
    firstName: "John",
    lastName : "Doe",
    id     :  5566
  };
  
  // Display some data from the object:
    console.log(person.firstName + " " + person.lastName);
    console.log(person["firstName"] + " " + person["lastName"]);
}