{
    let x = "Volvo" + " " + 16 + 4;
    console.log(x);
}
{
    let x = 16 + 4 +  " " + "Volvo";
    console.log(x)
}
{
    let y = 123e5; 
    console.log(y);
}
{
    let x = 5;
    let y = 5;
    let z = 6;
    console.log(x == y)       // Returns true
    console.log(x == z) 
}
{
    const cars = ["Saab", "Volvo", "BMW", 12, {name:"asif"}];
    console.log(typeof(cars[0]))
    console.log(typeof(cars))
    console.log(typeof(cars[3]))
    console.log(typeof(cars[4]))
}
{
    let car;
    console.log(car) // undefined result
    console.log(typeof car) // undefined result
}

{
    let car = " ";
    console.log(typeof car) // string result
}