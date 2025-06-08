// Scope -> The scope of a variable is the part of the program where it can be accessed and used.

// Global Scope -> A variable declared outside of a function is called a global variable. It can be accessed 
// from anywhere in the program.
// Local Scope -> A variable declared inside a function is called a local variable. It can only be accessed 
// within that function.

// global scope example
let a = 10;
function abc(){
  console.log(a);
  a = 20;
  console.log(a);
}
abc()
console.log(a);
// local Scope
abcd()
function abcd(){
  let b = 30
  console.log(b);
  b = 40
  console.log(b);
}
abcd()
// console.log(b);

// hoisting -> function, var
console.log(abcde);
var abcde = 20
console.log(abcde);
// hoising does not apply on let, const



// prompt -> it is a inbuild function in js use to ask input 
// form the user which input is string by default -> BOM
// names = prompt("enter your name")
// document.getElementById("name").innerHTML = names

// wap that ask input from the user and add those number and
// print the result in html 2+2 =4 

// Type Conversion
// 1. Implicit Conversion
// 2. Explicit Conversion

// firstNumber = Number(prompt("enter the first number: "))
// SecondNumber = Number(prompt("enter the Second number: "))

// total = firstNumber+ SecondNumber
// document.getElementById("total").innerHTML = total
// wap to check the type of the variable typeof

// Math object -> it is a inbuild object 
// in js use to perform math operations
console.log(Math.floor(Math.random()*100));
console.log(Math.PI);
console.log(Math.min(1,2,0,3));
console.log(Math.max(1,2,0,3));
// decinal value -> 0.9
console.log(Math.floor(0.9));
console.log(Math.ceil(0.2));

// squrt
console.log(Math.sqrt(16));
console.log(Math.cbrt(8));

// power
console.log(Math.pow(2,3));

// Arrays -> it is a collection of elements
// it is used to store multiple values in a single variable

arr = [1,2,3,4.5,true, "hello"]
console.log(arr);
// length
console.log(arr.length);
// index of array -> 0 , n-1
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);

// use for loop to print the value of the arrays 
for(let i = 0; i< arr.length; i++){
    console.log(arr[i]);
}
// arr2 = [1,2,3,4,5,6,7,8,9,10] = sum of an array
total = 0;
arr2=[1,2,3,4,5,6,7,8,9,10]
for(let i = 0; i< arr2.length; i++){
total += arr2[i]
}
console.log(total);

// arrays methods -> pop , push , shift, unshift, splice, revere, sort
arrs = [1, 3, 2, 4, 5, 6, 7, 9, 8, 10]
console.log(arrs);







