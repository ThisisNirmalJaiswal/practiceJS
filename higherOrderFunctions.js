

// passing a function as an argumnet
function fun(fn){
    return fn();
}

fun(function (){
    console.log("hiiii")
});

// return a function from another function 
function fun2(){
    return function(){
        console.log('HEyyyyyyyyyy')
    }
}

let ans = fun2()
ans();