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
{
  let text1 = "     Hello World!     ";
  let text2 = text1.trimEnd();
  console.log(text2)
}
{
  let text = "5";
  let padded = text.padStart(4,"y");
  console.log(padded);
}
{
  let numb = 5;
  let text = numb.toString();
  let padded = text.padStart(4,"0");
  console.log(padded)
}
{
  let text = "5";
  let padded = text.padEnd(4,"0");
  console.log(padded)
}
{
  let text = "HELLO WORLD";
  let char = text.charAt(0);
  console.log(char);
  console.log(text.charCodeAt(0));
}

{
  let text = "HELLO WORLD";
  text[0] = "A"; // no work no error
  console.log(text)
  console.log(text[0])
  console.log(text.split(""))
  const x = "5";
  const y = "4";
  const z = "6";
  console.log("5" * "4" - "6")
  console.log(x * y - z)

  const result = "5" * "4" - "6";
  console.log(result);
  /*
  text.split(",")    // Split on commas
  text.split(" ")    // Split on spaces
  text.split("|") 
  */

}