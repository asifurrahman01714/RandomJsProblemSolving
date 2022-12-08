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

// A method is a function stored as a property.
{
    const person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function xz() {
          return this.firstName + " " + this.lastName;
        },
        anotherFullName : function aFullName () {
            return this.firstName + " " + this.lastName;
          }
      };

    console.log(person["fullName"])
    console.log(person.fullName)
    console.log(person.fullName())
    console.log(person.anotherFullName())
}
{
  let text1 = "     Hello World!     ";
  let text2 = text1.trimStart();
  console.log(text2);
}