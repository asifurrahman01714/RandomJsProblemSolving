let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
  console.log(myNumber)
}
{
    let x =  2 / 0;
    let y = -2 / 0;
    console.log(y);
}
{
    let x = 123;
    let y = new Number(123);
    console.log(y)
}
{
    let x = "5";
    console.log(typeof x);
    console.log(Number(x))
    console.log(typeof Number(x))
    console.log(Object (x));
    console.log(typeof Object (x));
    console.log(Array (x));
    console.log(typeof Array (x));
    console.log(BigInt (x));
    console.log(typeof BigInt (x));
    const num = 5n;
    console.log(num);
    console.log(typeof num);
     //Cannot mix BigInt and other types, use explicit conversions
     console.log(9007199254740992 === 9007199254740993);
     {
        let x = 5n;
        let y = Number(x) / 2;
        console.log(y)
     }
}
{
    let  x = Number.MAX_SAFE_INTEGER;
    console.log(x);
}
{
    let  x = Number.MIN_SAFE_INTEGER;
    console.log(x)
}
{
    const result = Number.isInteger(10);
    console.log(result)
    console.log( Number.isInteger(10.5));
    console.log(Number.isSafeInteger(10))
    console.log(Number.isSafeInteger(12345678901234567890))
}