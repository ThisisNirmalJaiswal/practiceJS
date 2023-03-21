// console.log("Heyyy");
// setTimeout(()=>{
//     console.log('Good Morning')
//     setTimeout(()=>{
//         console.log('Good Morning')
//     },3000)
// },3000);

// console.log('How are you!');


// currying
function add(x) {
    return function(y) {
      return x + y;
    }
  }
  
  console.log(add(2)(5)); // 5
  