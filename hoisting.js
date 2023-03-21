'use strict'

x=3
console.log(x); // 3
var x;

func() // Hello world
function func(){
    console.log("hellow World")
}


display()
function display(){ // local scope
    x = 10;
    console.log(x);
    var x;
}
