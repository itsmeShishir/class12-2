import {name, gender, person} from "./exports.js"

console.log(name, gender);

person()
// syncronous -> code will run line by line 
// Asyncronous -> code will run at the same time 

// 2. Asyncronous -> 
// 1. Callback -> it can be called multiple times (once) = callback hell

// eg Settimeout
setTimeout(()=>{
    console.log("I am a person from settimeout")
})

// 2. Promise -> we can call promise multiple times
    // 1. Pending -> request is pending 
    // 2. resolve -> request is resolve
    // 3. Rejected -> request is rejected

// eg -> 

let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("I am a person from promise to print after 2 seconds")
    }, 2000)
})

promise.then((data)=>{
    console.log(data)
})

console.log("bye");

// Promises -> Async and await 
let url = "https://fakestoreapi.com/products"

let data = async () =>{
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
}

data()
