
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

    }

