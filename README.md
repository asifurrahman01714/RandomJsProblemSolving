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