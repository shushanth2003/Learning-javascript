function greet(){
    console.log("Greeting Information about the warning....");
}
greet();
const greets=function(){
    console.log("It's a anonymus Function")
}
greets();

function fn(){
    console.log("calling Function");
}
function executors(){
    return fn();
}
executors();