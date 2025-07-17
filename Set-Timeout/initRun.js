//using var
for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
}

// //using let
for(let i=0;i<3;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
}

//using var with function scope
for(var i=0;i<4;i++){
    (function(j){
        setTimeout(function(){
            console.log(j);
        },j*1000)
    })(i);
}