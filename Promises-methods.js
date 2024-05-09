const p1 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success")
    },1000);
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("failure")
    },1000)
})

Promise.all([p1,p2]).then(console.log).catch(console.log) //['success','failure'] is the output

const p1 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success")
    },1000);
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("failure")
    },1000)
})

Promise.all([p1,p2]).then(console.log).catch(console.log) //it runs when all promises are resolves it sends the response
                                                        //failure is the output we are using reject here so the entire promise above is deleted

 
Promise.allSettled([p1,p2]).then(console.log).catch(console.log)//it returns each individual response status.
    //{status:"fulfilled",value:"success"},
    //{status:"rejected",value:"failure"}

Promise.race([p1,p2]).then(console.log).catch(console.log)//It stops when the first response runs
    //success is the output

    git remote add origin https://github.com/Barathcode/fkjnhkfrjlej.git
    git branch -M main
    git push -u origin main