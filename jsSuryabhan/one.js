function even(){
    // Check enter number is positive, negative, and zero
    let number = parseFloat(prompt("Enter a number:"));
     let result = number > 0 ? "The number is Positive" : number < 0 ? "The number is Negative" : "The number is Zero";
     alert(result);
}