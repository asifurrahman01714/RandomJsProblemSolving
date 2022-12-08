# Right: 
```bash
let value = 0;
function startTime() {
  value++;
  document.getElementById("demo").innerHTML = value;
  setTimeout(startTime, 1000);
}
```

# Wrong: 
```bash
function startTime() {
  setTimeout(startTime(), 1000);
}
```

# Right: 
```bash
let value = 0;
function startTime() {
  value++;
  document.getElementById("demo").innerHTML = value;
  setTimeout(function(){startTime()}, 1000);
}
```

### You cannot re-declare a variable declared with let or const.

This will not work:
```bash
let carName = "Volvo";
let carName;
```

### All string methods
```bash
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()
```