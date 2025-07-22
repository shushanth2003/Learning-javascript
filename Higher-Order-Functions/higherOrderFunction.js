// Function takes another Functions
function greet(callback){
    callback();
}
greet(()=>{console.log("Hello I calling the Function with help of another Function")});

// function returns another Functions
function multiple(x){
    return (y)=>{
        return x*y;
    }
}
const mult=multiple(2);
console.log(mult(4));