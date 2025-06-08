console.log("helo day 2");
// data Types in JS
// 1. Primitive data types
    // String, Number, Boolean, Null, Undefined, Symbol 
// 2. Non primitive data types
    // Objects, Arrays, Functions

// What do you mean by primitive data types 
    // those data types that are not objects and arrays are called primitive data types

// What do you mean by non primitive data types 
    // those data types that are objects and arrays are called non primitive data types

// 1. String -> set of characters in quotes -> '', ""
var a = "hello";
console.log(a);

var b = 'hello';
console.log(b);

// sting Concatenation
var a = "hello";
var b = "world";
var c = a + " " + b;
console.log(c);

// 2. Number -> 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
//  int -> whole number , float -> decimal number
let d = 10;
console.log(d)
let e = 10.01;
console.log(e)
console.log(d+e)
//  if 2 number added eg float and dec it will be float
//  if 2 number added eg int and str it will be int
console.log(10+"10")
// 3. Boolean -> true or false
console.log(true);
console.log(false);
// 4. Null -> null
console.log(null);
// 5. Undefined -> undefined
let g;
console.log(g);

// Variable 
// initialization and Declaration
let ab; //declaration
ab = "hello"; //initialization
console.log(ab);

// Operators and operands 

// 5+5 = 10
// operators -> +, -, *, /, %, **
// operands -> 5, 5
// types of operators
// 1. Arithmetic operators
//  +, -, *, /, %
console.log(5+5); //10
console.log(5-5); //0
console.log(5*5); //25
console.log(5/5); //1
console.log(5%5); //0
console.log(5**5); //3125

// 2. Assignment operators
//  =, +=, -=, *=, /=, %=, **=
var abc = 10;
console.log(abc);
abc += 5;
// abc = abc + 5;
console.log(abc);
abc -= 5;
console.log(abc);
abc *= 5;
console.log(abc);
abc /= 5;
console.log(abc);
abc %= 5;
console.log(abc);
abc **= 5;
console.log(abc);
// 3. Comparison operators
//  ==, !=, >, <, >=, <=, ===
console.log(5>5); //false
console.log(5<5); // false
console.log(5=="5"); //true
console.log(5==="5"); //false
console.log(5!=5); //false
console.log(5!==5); //true
console.log(5>=5); //true
console.log(5<=5); //true

// 4. Logical operators
//  &&, ||, !
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
// ||
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
// !
console.log(!true); //false
console.log(!false); //true

// 5. Bitwise operators -> & , | , ^ , ~ , << , >>
console.log(5 & 5); //5
console.log(5 | 5); //5
console.log(5 ^ 5); //0
console.log(~5); //-6
console.log(5 << 5); //320
console.log(5 >> 5); //0

// 6. String operators
// concatenation
// substraction

// 7. Ternary operators
// condition ? true : false

// wap to check if the given user is greater than 18 or not  
let age = 17;

(age > 18 ? console.log("user is greater than 18") : console.log("user is less than 18"));






