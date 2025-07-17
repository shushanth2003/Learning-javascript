let a=100;
function outer(){
    let b=50;
    function inner(){
        let c=10;
        console.log(a+b+c);
    }
    inner();
}
outer();