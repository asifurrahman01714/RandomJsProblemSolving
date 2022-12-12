{
    console.log((123).toString());
    const x = (123).toString();
    console.log(x)
    console.log(typeof x)
}
{
    let x = 9.656;
    console.log(x.toExponential(2));
    console.log(x.toExponential());
}
{
    const x = 9.664;
    const toFixed = x.toFixed(2);
    console.log(toFixed)
    console.log(typeof toFixed)
    console.log(toFixed) // toFixed returns a string

    console.log(x.toPrecision());
    console.log(x.toPrecision(2))
    console.log(x.toPrecision(3))
    console.log(x.toPrecision(4))
    console.log(x.toPrecision(5))
}