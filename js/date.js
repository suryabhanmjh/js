let MyDate = new Date();
console.log(MyDate);
console.log(MyDate.getFullYear()); // 2025
console.log(MyDate.getMonth()+1); // 0-11
console.log(MyDate.getDate()); // 1-31
console.log(MyDate.getDay()+1); // 0-6
console.log(MyDate.getHours()); // 0-23
console.log(MyDate.getMinutes()); // 0-59
console.log(MyDate.getSeconds()); // 0-59
console.log(MyDate.getMilliseconds()); // 0-999
// saturday print
//  console.log(MyDate.getDay()===6 ? "Saturday" : "Not Saturday");

//  second method in arr all days
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(days[MyDate.getDay()]); // Saturday

