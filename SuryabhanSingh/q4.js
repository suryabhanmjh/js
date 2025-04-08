const arr = [-5, 10, 20, -3, 7];
let sum = 0;

for (let num of arr) {
  if (num > 0) {
    sum += num;
  }
}

console.log("Sum of positive numbers:", sum)