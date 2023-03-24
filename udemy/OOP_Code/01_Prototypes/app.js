//String.prototype is a "template object" for every single string.
//We could go crazy and add our own method called yell...
// String.prototype.yell = function() {
// 	return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
// };

// 'bees'.yell(); //"OMG!!! BEES!!!!! AGHGHGHG!"

// //We can overwrite an existing Array method like pop (not a good idea):
// Array.prototype.pop = function() {
// 	return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
// };
// const nums = [ 6, 7, 8, 9 ];
// nums.pop(); // "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"

// // console code 
// const arr = [1,2,3];
// arr.sing = function (){
// 	console.log("LALALALALA!")
// }

// arr;

// arr.includes(2)

// console.log(Array.prototype)

// String.prototype.yell = function() {
// 	return `OMG!!! ${this.toUpperCase()}!!!! AGHGHGH!`
// }

// console.log("i love you".yell());

Array.prototype.pop = function(){
	return "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"
}

console.log([1,2,3,4].pop())