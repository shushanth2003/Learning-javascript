const promise1=new Promise((ressolve)=>{
    setTimeout(()=>{
        ressolve("Fastest Promise will pass the time shots at 100")
    },200);
});
const promise2=new Promise((ressolve)=>{
    setTimeout(()=>{
        ressolve("Middlest Promise will pass the time shots at 200")
    },100);
})
const promise3=new Promise((ressolve)=>{
    setTimeout(()=>{
        ressolve("Slowest Promise will pass the time shots at 300")
    },300)
})

Promise.all([promise1,promise2,promise3]).then(console.log);