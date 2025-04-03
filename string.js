// let a1="string 1"
// let a2="This is string 2"

// console.log(a1.length);
// console.log(a2.length);  //length of string

// a1.concat(a2); //concatenate two strings
// console.log(a1.concat(a2)); //concatenate two strings
// document.write(a1.concat(a2) +"<br>"); //concatenate two strings

// //uppercase and lowercase
// console.log(a1.toUpperCase()); //convert to uppercase
// console.log( "<br> "+a2.toLowerCase()); //convert to lowercase

// document.write(a1.toUpperCase());//convert to uppercase
// document.write("<br>"+a2.toLowerCase()+"<br>"); //convert to lowercase

// //charAt() method to get the character at a specific index
// document.write("<br>"+a1.charAt(0)); //get first character of string
// document.write("<br>"+a2.charAt(0)+"<br>"); //get first character of string

// //charCodeAt() method to get the character code of a string
// document.write(" <br> charCodeAt method");
// document.write("<br>"+a1.charCodeAt(0)); //get char code of first character of string
// document.write("<br>"+a2.charCodeAt(0)+"<br>"); //get char code of first character of string

// //indexOf() method to get the index of a string
// document.write("<br>"+a1.indexOf("s")+"<br>"); //get index of first occurrence of s in string
// //slice() method to get the substring of a string
// document.write(" <br>slice method");
// document.write("<br>"+a1.slice(0, 4)); //get substring from index 0 to 4
// document.write("<br>"+a1.slice(0, 2)); //get substring from index 0 to 2


// day 2 

// let str="   Javascript is a programming language javascript is simple    "

// //replace() method to replace a string with another string
// document.write("<br>"+str.replace("javascript", "java")); //replace javascript with java

// //replaceAll() method to replace all occurrences of a string with another string
// document.write("<br>"+str.replaceAll("javascript", "java")); //replace all javascript with java

// // replace all  by replace method
// document.write("<br>"+str.replace(/javascript/g, "java")); //replace all javascript with java

// //g => convert global.... gi => case insensitive
// //i => case insensitive
// document.write("<br>"+str.replace(/javascript/gi, "java")); //replace all javascript with java


// //trim() method to remove whitespace from both sides of a string
// document.write("<br>"+str.trim()); //remove whitespace from both sides of string

// //split() method to split a string into an array of substrings
// document.write("<br>"+str.split(" ")); //split string into array of substrings using space as separator

// //arrays
// let spl1=  "Convert string to array"
// console.log(spl1.split(" ")); //split string into array of substrings using space as separator
// let arr1=["apple", "banana", "orange"];
// let arr2=[6,9,"grape", "kiwi", "mango"];

//  Template literals (``) are string literals allowing embedded expressions.
// 1. Support Single('') and double quotes ("") inside the string without using escape characters
// 2. Support multi-line strings without using escape characters
// 3. Support  html tags inside the string without using escape characters
// 4. Support string interpolation using ${} syntax 
let name = "Sid";
let age = 22;
document.write(`Hello, my name is ${name} and I am ${age} years old.`); // Hello, my name is Sid and I am 22 years old.
//alert

// let str1 = "Hello i am \"Sid\" amd i am from `Bhopal` ";
// alert(str1); // Hello, apple!

