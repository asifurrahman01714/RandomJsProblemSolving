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
{
    let text = "Please locate where 'locate' occurs!";
    console.log(text.lastIndexOf("John"));
    console.log(text.lastIndexOf("locate"));
}
{
    let str = "Please locate where 'locate' occurs!";
    console.log(str.search("locate"));
    console.log(str.search(/locate/))
    console.log(str.search(/Locate/i)) // case insensitive
}
{
    let text = "The rain in SPAIN stays mainly in the plain";
    const result = text.match("ain");
    console.log(result)
    console.log(text.match("ain"));;
    console.log(text.match(/ain/g));;
    console.log(text.match("ain")[1]);
    console.log(text.match(/ain/gi));
    console.log(text.match(/ain/gi).length);
}
{
    let text = "Hello world, welcome to the universe.";
    console.log(text.includes("world"));
    console.log(text.startsWith("Hello"));
    console.log(text.startsWith("world",6)); // the world is started from the 6 position
    console.log(text.includes("world", 12)) // here 12 is the position

}