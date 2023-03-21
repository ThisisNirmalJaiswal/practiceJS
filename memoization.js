// normal function
// function add(num){
//     return num + 10;
// }

// console.log(add(10)) // 20
// console.log(add(20)) // 30
// console.log(add(30)) // 40

// memoization
function memoization(){
    let cache = {};
    return function (num){
        if(num in cache){
            console.log("cached value")
            return cache[num];
        }else{
            cache[num] = num + 10
            return cache[num]
        }
    }
}

var func = memoization();
console.log(func(10))
console.log(func(10))