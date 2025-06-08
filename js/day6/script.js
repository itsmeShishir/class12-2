// 4. Rest Parameters
function abc(...a){
    return a
  }
  console.log(abc(1,2,3,4,5));
  
  // wap to print the sum of value in rest parameters
  function abcd(...a){
    total = 0;
    for (let i=0; i<a.length; i++){
      total += a[i]
    }
    console.log(total);
  }
  abcd(1,2,3,4,5,6,7,8,9,10)
  
  // parameter Destructuring 
  function abcde({a, b, c, d, e}){
    console.log(a,b,c,d,e);
  }
  
  abcde({b:30, a:60, e :50, d:400, c: 600});
  
  // function arrow function => (React)
  function ab(a,b){
    console.log(a+b);
  }
  ab(2,2)
  // arrow function 
  ab = (a,b) => a+b;
  console.log(ab(2,2));
  
  ab = (a,b) => {
    return a+b
  };
  
  console.log(ab(2,2));
  
  // Annornomous Function
  function ab(a,b){
    console.log(a+b);
  }
  ab(2,2)
  
  a = function (a,b){
    console.log(a+b);
  }
  a(2,2)
  
  // recursion 
  // function abce(){
  //   console.log("helo");
  //   return abce();
  // }
  // abce()
  
  // factorial number 5 = 120
  function fac(n){
    if( n==1){
      return 1
    }
    return n * fac(n-1)
  }
  
  console.log( fac(5));
  
  // wap using recursion to print from 0 to 10 sum
  function summ(n){
    if( n==1){
      return 1
    }
    return n + summ(n-1)
  }
  console.log(summ(10));
  
date = new Date()
console.log(date);

// get current date and time
// get current date
console.log(date.getDate());
// get current time
console.log(date.getTime());
// get current month
console.log(date.getMonth());
// get current year
console.log(date.getFullYear());
// get current day
console.log(date.getDay());

// ISO date
// get current date
console.log(date.toISOString());


  
  
  
  
  