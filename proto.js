// prototypes

// let obj1 = {
//     name:'prachi',
//     roll: 7
// }

// let obj2 = {
//     city: 'Amravati',
//     age: 22,
//     __proto__: obj1
// }

// // now we can acces properties of obj1 in obj2

// console.log(obj2.name);


// example - 2
let obj1 = {
    name:'prachi',
    roll: 7,
    getAge: function(){
        return this.age;
    }
}

let obj2 = {
    city: 'Amravati',
    age: 22,
    __proto__: obj1
}

console.log(obj2.getAge());
console.log(obj1.getAge());

// in obj1 there is no "age" key that's why undefined is printed
