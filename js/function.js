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

function (){
    
}