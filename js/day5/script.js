// *
// **
// ***
// ****
// *****

for(let i = 0; i<5; i++){
    start = ""
    for(let j = 0; j<=i; j++){
      start += "*"
    }
    console.log(start);
  }
  // *****
  // ****
  // ***
  // **
  // *
  for(let i  = 5; i>0; i--){
    star = ""
    for(let j = 1; j<=i; j++){
      star +="*"
    }
    console.log(star);
  }
  // Function in JS -> a block of code runs when it is called/ invoked
  // function -> keyword
  //  function FunctionName(parameters){
  //    body
  // }
// wap to print the name of the student 
function Abc(){
    console.log("my name is shishir bhandari");
}
Abc() //calling the function
Abc() //calling the function
Abc() //calling the function
Abc() //calling the function

// Type of function in js 
// 1. InBuild Function -> clog(), prompt(), alert(), print(), etc
// 2. User defined function -> Abc(), xyz(), etc

// Parameter and arguments in function
function abc(name, age){
    console.log(name, age);
}
abc("Shishir", 27)
abc("hari", 20)
abc("sapkota", 17)
abc("Khanal", 18)

// wap to print the name and age of a student using return statement
function StudentOne(name, age){
    return `${name} and ${age}`
}

console.log(
    StudentOne("Shishir", 27)
);

StudentOne("hari", 20)
StudentOne("sapkota", 17)
StudentOne("Khanal", 18)

// wap to that print only hi hello usign rethurn statement
function Hi(){
    return "HI, Hello"
}
console.log(Hi());
// functions types
// function with Parameter and no return type
abc(5,5)
// function with no parameter and no return type
Abc()
// function with parameter and return type
StudentOne()
// function with no parameter but with return wtype
Hi()

// Wap that print even number between 20 to 30 using functions
function Even(n, m){
    for(let i = n; i<=m; i++){
       if(i%2 == 0){
        console.log(i);
       }
    }
}
Even(20,30)
// odd number between 20 to 30

// Parameter types 
// 1. Positional Parameter -> functionName(parameter1, parameter2) 
// -> functionName(parameter2 = 20, parameter1 = 10)
function Odd(n, m){
    for(let i = n; i<=m; i++){
       if(i%2 != 0){
        console.log(i);
       }
    }
}
Odd(20,30)
// 2. Default Parameter -> functionName(parameter1 = 10, parameter2 = 20)
function Odd(n = 20, m = 30){
    for(let i = n; i<=m; i++){
       if(i%2 != 0){
        console.log(i);
       }
    }
}
Odd()
Odd(50,60)
// 3.Named parameter -> functionName(parameter1 = 10, parameter2 = 20)
function Odd(n, m){
    for(let i = n; i<=m; i++){
       if(i%2 != 0){
        console.log(i);
       }
    }
}
Odd(m = 80, n = 90)

