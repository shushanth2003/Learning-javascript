const promise1=new Promise((ressolve)=>{
    setTimeout(()=>{
        ressolve("Fastest at Race");
    },100)
});
const promise2=new Promise((ressolve)=>{
    setTimeout(()=>{
        ressolve("Middlest at Race");
    },200)
});
const promise3=new Promise((ressolve)=>{
    setTimeout(()=>{
        ressolve("Lowest at Race");
    },300)
});
Promise.race([promise1,promise2,promise3])
.then(console.log)