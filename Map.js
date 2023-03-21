/*

The Map object holds key-value pairs and remembers the original insertion order of the keys. 
Any value (both objects and primitive values) may be used as either a key or a value.

*/

// const map1 = new Map();

// map1.set('a', 1);
// map1.set('b', 2);
// map1.set('c', 3);

// console.log("old value of 'a':", map1.get('a'));
// // Expected output: 1

// map1.set('a', 97);

// console.log("new value of 'a':", map1.get('a'));
// // Expected output: 97

// console.log("size: ", (map1.size));
// // Expected output: 3

// map1.delete('b');

// console.log("new size: ", map1.size);
// // Expected output: 2

// const myMap = new Map();

// const keyString = 'a string';
// const keyObj = {};
// const keyFunc = function() {};

// // setting the values
// myMap.set(keyString, "value associated with 'a string'");
// myMap.set(keyObj, 'value associated with keyObj');
// myMap.set(keyFunc, 'value associated with keyFunc');

// // console.log(myMap); // 3
// console.log(myMap.size); // 3

// // getting the values
// console.log(myMap.get(keyString)); // "value associated with 'a string'"
// console.log(myMap.get(keyObj)); // "value associated with keyObj"
// console.log(myMap.get(keyFunc)); // "value associated with keyFunc"

// console.log(myMap.get('a string')); // "value associated with 'a string'", because keyString === 'a string'
// console.log(myMap.get({})); // undefined, because keyObj !== {}
// console.log(myMap.get(function() {})); // undefined, because keyFunc !== function () {}



