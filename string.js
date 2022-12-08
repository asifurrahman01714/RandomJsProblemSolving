{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = text.length;
    console.log(length) // string length is not a function . it is a property of string.

    // Extracting String Parts
    console.log(text.slice(1,2));
    console.log(text.substring(1,2));
    console.log(text.substr(10,length));
}