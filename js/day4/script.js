// loops -> if you want to repeat something continously until a certain condition is met
// 1. for loop
// 2. while loop
// 3. do while loop

// 1. For loop ->      used to repeat a statement for a certain 
                    // number of times until a certain condition is met 
for (initialization ; condition ; increment/dec) {
    // code to be repeated
}
// wap to print number from 0 to 10
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

for(let i = 1; i<=10; i++){
    console.log(i);
}  
// wap that provides number from 10 to 1
for(let i = 10; i>=1; i--){
    console.log(i);
}
// wap to print the multiplication table of 7
for(let i = 1; i<=10;i++){
    console.log(`7 * ${i} = ${i*7}`);
  }
  
  // wap to print the num of all the multiplication table of 7
  let total = 0;
  for(let i = 1; i<=10;i++){
    table =  i*7
    total += table
  }
  console.log(total);
  
  // while loops in js 
  // 1. While (condition){
  //  body
  // }
  // using while loop print form 0 to 10
  i = 0;
  while(i<=10){
    console.log(i);
    i++;
  }
  console.log(i);
  while(i>=1){
    console.log(i);
    i--;
  }

