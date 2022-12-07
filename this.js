
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
