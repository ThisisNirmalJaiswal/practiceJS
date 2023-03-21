let obj1 = { name: 'John', age: 30, hobbies: ['reading', 'swimming'] };

let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.age = 40;
obj2.hobbies.push('running');

console.log(obj1); // { name: 'John', age: 30, hobbies: ['reading', 'swimming'] }
console.log(obj2); // { name: 'John', age: 40, hobbies: ['reading', 'swimming', 'running'] }
