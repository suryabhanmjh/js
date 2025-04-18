// serTimeout 
//it is used to execute a function after a specified number of milliseconds
// it returns a unique identifier for the timeout

// syntax
// setTimeout(function, milliseconds, param1, param2, ...)

// console.log("Start");
// setTimeout(function() {
//     console.log("Hello World");
// }, 2000); // 2 seconds delay
// console.log("End");

// console.log("first one");
// setTimeout( ()=> {
//     console.log("second task executed after 2 seconds delay");
// }, 2000); // 2 seconds delay
// console.log("third");

//on click button get name and age after 2 seconds delay
//  let name = document.querySelector("#name");
//     let btn = document.querySelector("#btn");
//     let result = document.querySelector("#result");
//     btn.addEventListener("click", function() {
//         setTimeout(() => {
//             result.innerHTML = `Name: ${name.value}`;
//         }, 2000); // 2 seconds delay
//     });

    let okk =()=> {
        setTimeout(()=> {
            console.log("Hello World");
        }, 2000) // 2 seconds delay
    
    }