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

    // Task 1: Ask the user of their age and check if they are 18 or older using a ternary operator.
    // let age = prompt("Enter your age:");
    // alert(age >= 18 ? "You are an adult." : "You are a minor.");

    //  Task 2: Ask if the user has completed a course and has a certificate
    let completed = confirm("Have you completed the course?");
    let certificate = confirm("Do you have a certificate?");
    alert(completed && certificate ? "Completed" : "Not completed");




}

sur()