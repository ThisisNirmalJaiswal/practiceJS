// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// var input = [10, 0, 90, 89, 1, 0, 17, 0, 10, 1, 23, 22, 23, 70] 
// // output = [0, 1, 10, 17, 22, 23, 70, 89, 90]
// let newArr = input.sort()
// var mp = new Set();
// // var arr = [];

// // for(let i=0; i<newArr.length; i++){
// //     mp.add(newArr[i])
// // }

// input.map((e)=>{
//     mp.add(e)
// })

// console.log(...mp)
// var input = [10, 0, 90, 89, 1, 0, 17, 0, 10, 1, 23, 22, 23, 70];

// // Remove duplicates and zeros from the input array using Set and filter
// var filteredInput = [...new Set(input)];

// // Sort the filtered array in ascending order using the sort method
// filteredInput.sort((a, b) => a - b);

// console.log(filteredInput); // [0, 1, 10, 17, 22, 23, 70, 89, 90]


// var input = [10, 0, 90, 89, 1, 0, 17, 0, 10, 1, 23, 22, 23, 70]

// output = {  
// 0: 7, 
// 1: 5, 
// 2: 4, 
// 3: 2, 
// 7: 2, 
// 8: 1, 
// 9: 2
// }

// function frequentEle(arr) {
//     arr = arr.sort();
//     // console.log(arr)
//     // let mp = new Map();
//     let distinctEle = {};

// for(let i=0; i<arr.length; i++){
//     if(mp.has(arr[i])){
//         // console.log(mp.get(arr[i]))
//         // mp.set(mp.get(arr[i]),+1)
//       mp.set(mp.get(arr[i]), +1)
//     }else{
//         mp.set(arr[i],1)
//     }
// }

// let newArr = arr.map(e => {
//     console.log(e.split())
// })

// for(let i=0; i<arr.length; i++){
//     // let newArr = arr[i].split("")
//         distinctEle[newArr[i]] = distinctEle[newArr[i]] +1 || 1;
// }

// return distinctEle;
// }


// var input = [10, 0, 90, 89, 1, 0, 17, 0, 10, 1, 23, 22, 23, 70];
// var counts = {};

// for (var i = 0; i < input.length; i++) {
//     if (input[i] !== 0) {
//         if (counts.hasOwnProperty(input[i])) {
//             counts[input[i]]++;
//         } else {
//             counts[input[i]] = 1;
//         }
//     }
// }

// var output = {};

// Object.keys(counts).forEach(function (key) {
//     output[key - 1] = counts[key];
// });

// console.log(output); // {0: 7, 1: 5, 2: 4, 3: 2, 7: 2, 8: 1, 9: 2}

// console.log(frequentEle(input))


var input = [10, 0, 90, 89, 1, 0, 17, 0, 10, 1, 23, 22, 23, 70]

// output = {  
// 0: 7, 
// 1: 5, 
// 2: 4, 
// 3: 2, 
// 7: 2, 
// 8: 1, 
// 9: 2
// }

// let join = input.join("");
// // console.log(join)
// let splitEach = join.split("")
// // console.log(splitEach)

// var numberArray = splitEach.map(Number);
// // console.log(numberArray)
// let map = new Map()
// // console.log(map)

// numberArray.forEach(num => map.set(num, (map.get(num) || 0) + 1))
// // console.log(map)

// const sortedAsc = new Map([...map].sort());

// console.log(sortedAsc);


var newArr = input.join("").split("").map(Number).sort();
const obj = {};
for(let i=0; i<newArr.length; i++){
    obj[newArr[i]] = obj[newArr[i]] + 1 || 1;
}
console.log(obj)










