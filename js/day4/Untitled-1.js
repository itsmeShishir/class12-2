//  wap that print all the even number between 0 to 50 
i = 0
while (i <= 50){
    if( i%2 ==0){
      console.log(i);
    }
    i++
}
// wap to print 0 to 10 using do while loop
i = 0;
do {
  console.log(i);
  i++
}while(i<=60)

// break and continue
for(let i = 0; i<=50; i++){
  if(i==25){
    break
  }
  console.log(i);
}
for(let i = 0; i<=50; i++){
  if(i==25){
    continue
  }
  console.log(i);
}
// wap to print all the odd number 0 to 50 using for loops and continue 
for(let i = 0; i<=50; i++){
  if(i%2==0){
    continue
  }
  console.log(i);
}
// wap to print the table of 0 to 10
for(let i = 0 ; i<=10; i++){
  console.log("Mut table of " + i);
  for(let j =0; j<=10; j++){
    console.log(`${i} *${j} = ${i*j}`);
  }
}
// *
// **
// ***
// ****
// *****

for(let i = 0; i<=5; i++){
  
}


