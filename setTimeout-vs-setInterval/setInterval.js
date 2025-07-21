// setInterval and setTimeout

let count=0;
let intervalSection=setInterval(
    function () {
        console.log("Running...."+count);
        count++;
        if(count==3){
            clearInterval(intervalSection);
        }
    },1000
)

let setCount=0;
let functionCalling=()=>{
    console.log("Running..."+count);
    count++;
    if(count==6){
        clearInterval(intervalBlock);
    }
}
let intervalBlock=setInterval(functionCalling,1000)
