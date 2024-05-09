const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success")
    },1000);
})

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("failure")
    },1000);
})

p1.then(console.log).catch(console.log)

//First we are adding 10 to the value and we are using callback function to add 20 to that value
const sum = (value,callback)=>{
    return callback(value+10);
} //adding 10 here

const callback =(value)=>{
    return value+20;
} //callback function to add 20
console.log(sum(1,callback))

//Promise 
const p1 = val => new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(val+10)
    },1000);
})
p1(1).then(val => val+20).then(console.log) //promise chaining


Asynchronous vs Synchronous

--->Asynchronous can perform long network requests without blocking the main thread.
--->Synchronous requests can process one at a time, other requests wait until the first one completes.

PROMISES is uses for asynchronous operations
--->introduced in 6th version of JS ES6.

3 States i promises:
-->Pending(still response not come)
-->Fulfilled(response comes)
-->Rejected(reject comes)

To replace callback function promises are introduced.