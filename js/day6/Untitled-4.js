// arrays methods -> pop , push , shift, unshift, splice, revere, sort
arrs = [1, 3, 2, 4, 5, 6, 7, 9, 8, 10]
console.log(arrs);
// pop -> it removes last element
arrs.pop()
console.log(arrs);
// push -> it add elemenrt at last
arrs.push(11)
console.log(arrs);
// shift -> remove element from start
arrs.shift()
console.log(arrs);
// unshift -> add element from start
arrs.unshift(12)
console.log(arrs);
// sort -> shorting order 
arrs.sort()
console.log(arrs);
// reverse -> element reverse 
arrs.reverse()
console.log(arrs);
// splice -> (particular remove , multiple values )
console.log(arrs);
arrs.splice(0 , 6, 0, 1, 2 )
console.log(arrs);

// Arrays Iteratiosn -> for , for of , foreach , map , filter, reduce
// 1. using for loop -> condition -> indexing bata print garxau
for(let i = 0; i< arrs.length; i++){
  console.log(arrs[i]);
}
// wap using for loop to print the sum of arrays 
// a = [10, 20 , 30, 40, 50] = 150 h/w
// wap to reverse string "hello" = "olleh"
// wap to check if the given string is palindriome or not
// wap to check if the given number is odd or evern 
// wap to swap 2 values a = 20 , b = 30 
// wap using arrow function to print the given number is odd or even
// wap to to print the volwel form the a = "hello sir"

//for in  
for (i in arrs){
  console.log(arrs[i]);
}
// for each -> call back function 
arrs.forEach((items)=>{
  console.log(items);
})
// map
let abc = arrs.map((items, index)=> items)
console.log(abc);
// filter
let even = arrs.filter((items)=>{
  if (items %2 ==0) {
    return items
  }
})
console.log(even);
// reduce
abcd = [10,20, 30, 40, 50]
let red = abcd.reduce((acc, items)=> acc+items, 0 )
console.log(red);

// object in js -> keys and values
let sb = {
  "name":"shishir",
  "age":27,
  "gender": "Male", 
}
console.log(sb.name);
console.log(sb.age);
console.log(sb.gender);

// set -> uinque collection of values 
let st = new Set()
// add, 
st.add(1)
st.add(2)
st.add(1)
console.log(st);
