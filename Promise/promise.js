let promise=new Promise(
    (ressolve,reject)=>{
        setTimeout(()=>{
            let success=true;
            if(success){
                ressolve("SuccessFully Registered....");
            }else{
                reject("Account Not Found")
            }
        },1000)
    }
)
promise.then(
    (data)=>{
        console.log(data,"done");
    }
).catch((error)=>{
    console.log("Error : ",error);
});