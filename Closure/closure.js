let counter=0;
function outer(count){
    let counter=count
    function inner(){
        counter++;
        console.log(counter);
    }
    return inner;
}
const func=outer(counter);
func();
func();
func();