function sur() {
    //BOM - Browser Object Model

    // window.alert("Hello, Surya!");
    // let confirms= window.confirm("Are you sure?");
    // console.log(confirms);

    // let prompts= window.prompt("Enter your name:");

    // alert me dikhane ke liye

    // window.alert("Hello, " + prompts + "! Welcome to the BOM tutorial.");

    // let ans = confirm("Do you like my website?");
    // if (ans) {
    //     alert("Thanks for liking my website!");
    // }
    // else {
    //     alert("Thanks for visiting my website!");
    // }

    //add the two numbers using prompt and alert
        //   parseInt(), and parseFloat() Number() are used to convert string to number
    // let num1 = parseFloat(prompt("Enter first number:"));
    // let num2 = parseFloat(prompt("Enter second number:"));
    // let sum = num1 + num2;
    // alert("The sum is: " + sum);



    // Task 1: Ask the user of their age and check if they are 18 or older using a ternary operator.
    // let age = prompt("Enter your age:");
    // alert(age >= 18 ? "You are an adult." : "You are a minor.");


    //  Task 2: Ask if the user has completed a course and has a certificate
    // let completed = confirm("Have you completed the course?");
    // let certificate = confirm("Do you have a certificate?");
    // alert(completed && certificate ? "Completed" : "Not completed");


    // Task 3: Ask the user for the price of an item and check if they have a discount coupon
    // let price = parseFloat(prompt("Enter the price of the item:"));
    // let hasCoupon = confirm("Do you have a discount coupon?");
    // let finalPrice = hasCoupon ? price * 0.9 : price;
    // alert( finalPrice.toFixed(2) );


    // Task 4: Ask the user for their exam score and determine if they passed or failed
    // let score = parseInt(prompt("Enter your exam score:"));
    // alert(score > 33 ? "Pass" : "Fail");


    // Task 5: Ask the user for their favorite color and display a message based on their choice
    // let color = prompt("Enter your favorite color:");    
    // let message = color === "red" ? "Red is a vibrant color!" :
    //             color === "blue" ? "Blue is a calming color!" :
    //             color === "green" ? "Green is refreshing!" :
    //             color === "yellow" ? "Yellow is cheerful!" :
    //             "That's a unique color choice!";
    // alert(message);

    // Task 6: Check enter number is even or odd
    // let number = parseInt(prompt("Enter a number:"));
    // let result = number % 2 === 0 ? "The number is Even" : "The number is Odd";
    // alert(result);

    // Task 7: Ask for conformation "Are you sure to delete" if ok give massage "Item deleted" otherwise "Cancelled".
    // let deleteCon = confirm("Are you sure you want to delete this item?");
    // let message = deleteCon ? "Item deleted" : "Cancelled";
    // alert(message);

    //Task 8: Check enter number is positive or negative
    // let number = parseFloat(prompt("Enter a number:"));
    // let result = number > 0 ? "The number is Positive" : number < 0 ? "The number is Negative" : "The number is Zero";
    // alert(result);

    // Task 9:  Print 1-10 using while loop
    // let i = 1;
    // let result = ""; 
    // while (i <= 10) {
    //     result += i + " ";
    //     i++;

    // }
    // alert(result.trim()); // Remove trailing space using trim()


    // Task 10: 

    // sum of 4+3 in prompt if user give corect in alert 
    // let prompts= window.prompt(" What is 4+3?");
    // let answer = parseInt(prompts); // Convert the input to an integer
    // alert(answer === 7 ? "Correct!" : "Incorrect, try again.");


    // in promp take user name then shoe the charecter count in alert
     let name = prompt("Enter your name:");
     let charCount = name.length;
        alert("Your name has " + charCount + " characters.");


}

// sur()