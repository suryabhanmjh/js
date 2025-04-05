//Array
let Fruit=["Apple", "Banana", "Mango", "Orange", "Grapes"] //array of fruits
let Numbers=[1, 2, 3, 4, 5] //array of numbers

console.log(Fruit [2]); //print array of fruits
console.log(Fruit.length); //print length of array of fruits
console.log(Numbers.length); //print length of array of numbers
Fruit.pop(); //remove last element of array of fruits
console.log(Fruit); //print array of fruits after removing last element
Fruit.push("Pineapple","papaya"); //add element to array of fruits
Fruit.pop(); 
Fruit.pop();//remove last element of array of fruits

console.log(Fruit); //print array of fruits after adding element

Fruit.shift(); //remove first element of array of fruits
console.log(Fruit); //print array of fruits after removing first element

Fruit.unshift("kiwi"); //add element to array of fruits
console.log(Fruit); //print array of fruits after adding element

//concate method in array

let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]

let arr3=arr1.concat(arr2) //concatenate two arrays
console.log(arr3); //print concatenated array
console.log(arr1); //print first array
console.log(arr2); //print second array

//slice method in array
let arr4=[1,2,3,4,5,6,7,8,9,10] //array of numbers
let arr5=arr4.slice(2,5) //slice array from index 2 to 5
console.log(arr5); //print sliced array

//splice method in array
// let arr6=[1,2,3,4,5,6,7,8,9,10] //array of numbers
// let arr7=arr6.splice(2,6,"apple") //splice array from index 2 to 3
// console.log(arr7); //print spliced array

