// let obj1 = { name: "nirmal", age: 30, hobbies: ['reading', 'running'] };

// // using Object.assign();

// let obj2 = Object.assign({}, obj1);
// // console.log(obj2);

// // using spread operator
// let obj3 = { ...obj1 };
// // console.log(obj3);

// obj2.age = 40;
// obj3.hobbies.push('photography');

// console.log(obj1) //{ name: 'nirmal', age: 30, hobbies: [ 'reading', 'running', 'photography' ]}
// console.log(obj2) //{ name: 'nirmal', age: 40, hobbies: ['reading', 'running', 'photography' ]}
// console.log(obj3) //{ name: 'nirmal', age: 30, hobbies: [ 'reading', 'running', 'photography' ]}

// using lodash
const _ = require('lodash');

let obj1 = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        state: 'NY',
        country: 'USA'
    }
};

let obj2 = _.cloneDeep(obj1);

obj2.address.city = 'San Francisco';
obj2.age = 35;
console.log(obj1); // { name: 'John', age: 30, address: { city: 'New York', state: 'NY', country: 'USA' } }
console.log(obj2); // { name: 'John', age: 30, address: { city: 'San Francisco', state: 'NY', country: 'USA' } }
