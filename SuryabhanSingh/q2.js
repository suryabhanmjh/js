if (confirm("Do you want to see the numbers from 1 to 10?")) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
      result += i + " ";
    }
    alert(result); 
  } else {
    alert("You canceled the action");
  }