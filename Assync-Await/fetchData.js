const promise=new Promise(
    (ressolve,reject)=>{
        let success=true;
        setTimeout(()=>{
            if(success){
                ressolve("SuccessFully Registered..");
            }else{
                reject("Account Not Found...");
            }
        },2000)
    }
)
async function myData() {
    try{
        const result=await promise;
        console.log("Data is Fetched SuccessFully...");
        console.log(result);
    }catch(error){
        console.log("Error etching : ",error);
    }
}
myData();