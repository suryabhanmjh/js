function add(){
    //add the two numbers using prompt and alert
         // parseInt(), and parseFloat() Number() are used to convert string to number
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let sum = num1 + num2;
    alert("The sum is: " + sum);
}


function evenodd(){
    // Task 6: Check enter number is even or odd
    let number = parseInt(prompt("Enter a number:"));
    let result = number % 2 === 0 ? "The number is Even" : "The number is Odd";
    alert(result);
}

function calculateArea() {
    let shape = prompt("Enter shape (circle/rectangle/triangle):");
    let result;
    
    switch(shape.toLowerCase()) {
        case 'circle':
            let radius = parseFloat(prompt("Enter radius:"));
            result = Math.PI * radius * radius;
            alert(`Area of circle: ${result.toFixed(2)}`);
            break;
        case 'rectangle':
            let length = parseFloat(prompt("Enter length:"));
            let width = parseFloat(prompt("Enter width:"));
            result = length * width;
            alert(`Area of rectangle: ${result}`);
            break;
        case 'triangle':
            let base = parseFloat(prompt("Enter base:"));
            let height = parseFloat(prompt("Enter height:"));
            result = 0.5 * base * height;
            alert(`Area of triangle: ${result}`);
            break;
        default:
            alert("Invalid shape!");
    }
}

function checkPalindrome() {
    let str = prompt("Enter a word to check palindrome:");
    let reversed = str.toLowerCase().split('').reverse().join('');
    alert(str.toLowerCase() === reversed ? 
          `${str} is a palindrome!` : 
          `${str} is not a palindrome!`);
}

function generateTable() {
    let num = parseInt(prompt("Enter a number for multiplication table:"));
    let table = '';
    for(let i = 1; i <= 10; i++) {
        table += `${num} × ${i} = ${num * i}\n`;
    }
    alert(table);
}

function calculateBMI() {
    let weight = parseFloat(prompt("Enter weight in kg:"));
    let height = parseFloat(prompt("Enter height in meters:"));
    let bmi = weight / (height * height);
    let result = `Your BMI is: ${bmi.toFixed(2)}\n`;
    
    if(bmi < 18.5) result += "Underweight";
    else if(bmi < 25) result += "Normal weight";
    else if(bmi < 30) result += "Overweight";
    else result += "Obese";
    
    alert(result);
}