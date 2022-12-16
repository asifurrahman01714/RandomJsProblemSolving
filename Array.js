{
    // create an array, and then provide the elements:
    const cars = [];
    console.log(cars);
    cars[0]= "Saab";
    cars[1]= "Volvo";
    cars[2]= "BMW";
    console.log(cars)
}

{
    // using new keyword
    const cars = new Array("Saab", "Volvo", "BMW");
    console.log(cars);
    console.log(typeof cars);
}
{
    // You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
    const mainArray = [];
    
    mainArray[0] = mainFunction();
    mainArray[1] = {name: "Asif", Id: 12};
    mainArray[2] = ["asif", "sakib"];
    function mainFunction() {
        return "hello world";
    }
    console.log(mainArray)
    console.log(mainArray[0])
    console.log(mainArray[1])
    console.log(mainArray[1].name)
    console.log(mainArray[2][0])
}