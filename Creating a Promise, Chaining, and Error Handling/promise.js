const promise=new Promise(
    (ressolve,reject)=>{
        let success=true;
        setTimeout(()=>{
            if(success){
                ressolve("Successfully Registered...");
            }else{
                reject("Data Not Found");
            }
        },1000)
    }
);
promise.then(
    (data)=>{
        console.log(data);
        return data +"Step-2";
    }
).then(
    (step2)=>{
        console.log(step2);
        return step2+"done";
    }
).then(
    console.log
)

promise.then(
    (data)=>{
        console.log(data);
        throw new Error("Something Broke...");
    }
).catch((error)=>{
    console.log("error",error.message);
})