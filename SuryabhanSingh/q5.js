if (confirm("Do you want to see the numbers from 1 to 10?")) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
      result += i + " ";
    }
    alert(result); // Displays "1 2 3 4 5 6 7 8 9 10"
  } else {
    alert("You canceled the action");
  }