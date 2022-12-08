{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = text.length;
    console.log(length) // string length is not a function . it is a property of string.

    // Extracting String Parts
    console.log(text.slice(1,2));
    console.log(text.substring(1,2));
    console.log(text.substr(10,length));
}
{
    let text = "Apple, Banana, Kiwi";
    let part = text.slice(-12);
    console.log(part)
    console.log(text.slice(12))
    console.log(text.slice(-12, -6))
    console.log(text[15]);
}
{
    let str = "Apple, Banana, Kiwi";
    console.log(str.substr(7, 6))
    console.log(str.substr(-4))
}