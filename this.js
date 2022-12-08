
    const test = (a) =>{
        const A = a;
        return this;
    }
    const result = test;
    console.log(result());

    {
        // Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Display data from the object:
  console.log(person.fullName())
  console.log(person.fullName)

}

{
    x = new String();        // Declares x as a String object
    y = new Number();        // Declares y as a Number object
    z = new Boolean();
    console.log(typeof x, typeof y, typeof z); 
}


{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = text.length;
    console.log(length)
}
// js escape character
{
    let text = "We are the so-called \"Vikings\" from the north.";
    console.log(text);
    console.log(text.length);
}
{
    let x = "John";        // x is a string
    let y = new String("John");  // y is an object
    console.log((x==y))
    console.log((x===y))
}
{
    let x = new String("John");  // x is an object
    let y = new String("John");  // y is an object
    console.log((x==y))
}
{
    const x = {name: "asif"}
    const y = {name: "asif"}
    console.log(x==y); // string and number can be checked as true false. but object not
}