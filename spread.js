// spread using on array
function sum(a,b,c){
    return a+b+c
}

const numbers = [1,2,3];
// console.log(sum(...numbers));


// spread using an object
function printDetails(name, age, city){
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`)
}

const person = {
    name:'Nirmal',
    age:23,
    city:'Delhi'
}
// console.log(Object.keys(person)) // always returns an array of keys.
// console.log(Object.values(person)) // always returns an array of values.
// printDetails(...Object.values(person));


// using strings
function concateStrings(str1, str2, str3){
    return `${str1} ${str2} ${str3}`
}

const str = 'nirmal singh jasval'
console.log(concateStrings(...str))
