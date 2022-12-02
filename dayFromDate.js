// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(dateString).getDay()];
    return dayName;
}
let result = getDayName(10/12/2022);
console.log(result);

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var dayName = days[new Date(10/12/2022).getDay()];
console.log(dayName)