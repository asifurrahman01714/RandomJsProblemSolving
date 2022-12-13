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
    console.log(x.toPrecision(5));

    console.log(x.valueOf());
    const objectNumber = new Number(x);
    console.log(objectNumber);
    console.log(typeof objectNumber);
    const y = objectNumber.valueOf();
    console.log(objectNumber.valueOf())
    console.log(y)
    console.log(typeof objectNumber.valueOf())
}
{
    // NBumber method
    console.log(Number(true))
    console.log(Number(false))
    console.log(Number(" 10  "));
    console.log(Number("John"))
}
{
    // Number method is used to convert a date string to number
    console.log(Number(new Date("1970-01-01")));

    // The Number() method returns the number of milliseconds
    console.log(Number(new Date("1970-01-02")));
    console.log(parseInt("10 20 30"))
    console.log(parseInt("10"))
    console.log(parseInt("10 years"))
    console.log(parseInt("years 10"));
    console.log(parseFloat("10.33"))
    console.log(parseInt("10.22234234234"));

    const x = "123";
    const y = Number(x);
    console.log(typeof y);
}
{
    console.log(Number.parseInt("23"))
    console.log(typeof Number.parseInt("23"))
    console.log( parseInt("23"))
    console.log( Number("23"))
    console.log( typeof Number("23"))
}
{
    console.log(Number());
    console.log(Number(" "));
    console.log(Number(NaN));
    console.log(Number(null));
    console.log(parseInt(null));
}