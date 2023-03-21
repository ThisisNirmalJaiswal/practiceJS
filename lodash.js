const _ = require('lodash');
// _.chunk(array, [size=1])
// Creates an array of elements split into groups the length of size. 
// If array can't be split evenly, the final chunk will be the remaining elements.

// let arr = [1,2,3,4,5,6,7,8];

// let newArr = _.chunk(arr, 3); //[ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]
// console.log(newArr)

// let arr2 = _.chunk(arr, 5);
// console.log(arr2)

// _.compact(array)
// Creates an array with all falsey values removed. 
// The values false, null, 0, "", undefined, and NaN are falsey.

// let arr = [1,2,3,4,5, 0, false,6, null, undefined, "", 7,8];
// let result = _.compact(arr);
// console.log(result);


// _.concat(array, [values]);
// Creates a new array concatenating array with any additional arrays and/or values.

// let arr = [1];

// let result = _.concat(arr, 2,[3],[[4]],'nir');
// console.log(result)
// console.log(arr)


// _.difference(array, [values])
// Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. 
// The order and references of result values are determined by the first array.

// let arr1 = [1,2,3,4];
// let arr2 = [2]
// let result = _.difference(arr1, arr2)
// console.log(result)

// _.differenceBy(array, [values], [iteratee=_.identity])
// This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. 
// The order and references of result values are determined by the first array. 
// The iteratee is invoked with one argument:
// (value).

// let arr1 = [2.1, 1.2];
// let arr2 = [2.3, 3.4];
// let result = _.differenceBy(arr1, arr2, Math.floor);
// console.log(result) //[1.2]

// let rs = _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// console.log(rs)

// _.differenceWith(array, [values], [comparator])
// This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values. 
// The order and references of result values are determined by the first array. 
// The comparator is invoked with two arguments: (arrVal, othVal).

// let arr = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

// let rs = _.differenceWith(arr, [{ 'x': 1, 'y': 2 }], _.isEqual)
// console.log(rs);

// // _.isEqual(1stVal, 2ndVal) used for deep comparison
// var object = { 'user': 'fred' };
// var other = { 'user': 'fred' };
// console.log(_.isEqual(object,other));

// _.drop(array, [n=1])
// Creates a slice of array with n elements dropped from the beginning.

// let arr = [1,2,3,4];
// console.log(_.drop(arr, 1)); //[2,3,4]
// console.log(_.drop(arr, 0)); //[1,2,3,4]
// console.log(_.drop(arr, 5)); //[]
// console.log(_.drop(arr, 2)); //[3,4]

// _.dropRight(array, [n=1])
// Creates a slice of array with n elements dropped from the end.
// console.log(_.dropRight([1, 2, 3]));
// console.log(_.dropRight([1, 2, 3], 2));
// console.log(_.dropRight([1, 2, 3], 5));
// console.log(_.dropRight([1, 2, 3], 0));

// _.dropRightWhile(array, [predicate=_.identity])
// Creates a slice of array excluding elements dropped from the end. 
// Elements are dropped until predicate returns falsey. 
// The predicate is invoked with three arguments: (value, index, array).

// var users = [
//     { 'user': 'barney', 'active': true },
//     { 'user': 'fred', 'active': false },
//     { 'user': 'pebbles', 'active': false }
// ];

// console.log(_.dropRightWhile(users, function (o) { return !o.active; }));
// => objects for ['barney']

// The `_.matches` iteratee shorthand.
// console.log(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }));
// => objects for ['barney', 'fred']

// The `_.matchesProperty` iteratee shorthand.
// console.log(_.dropRightWhile(users, ['active', false]));
// => objects for ['barney']

// console.log(_.dropRightWhile(users,'active'));
// => objects for ['barney', 'fred', 'pebbles']


// _.dropWhile(array, [predicate=_.identity])
// Creates a slice of array excluding elements dropped from the beginning. 
// Elements are dropped until predicate returns falsey. 
// The predicate is invoked with three arguments: (value, index, array).

// var users = [
//     { 'name': 'John', 'active': true },
//     { 'user': 'barney', 'active': false },
//     { 'user': 'fred', 'active': false },
//     { 'user': 'pebbles', 'active': true }
// ];

// console.log(_.dropWhile(users, function(o) { return !o.active; }));
// => objects for ['pebbles']

// console.log(_.dropWhile(users, { 'user': 'barney', 'active': false }));
// => objects for ['fred', 'pebbles']

// console.log(_.dropWhile(users, ['active', false]));
// => objects for ['pebbles']

// console.log(_.dropWhile(users, 'active'))
// => objects for ['barney', 'fred', 'pebbles']\



// _.fill(array, value, [start=0], [end=array.length])
// Fills elements of array with value from start up to, but not including, end.


// var array = [1, 2, 3];

// _.fill(array, 'a');
// console.log(array);
// // => ['a', 'a', 'a']

// console.log(_.fill(Array(3), 2));
// // => [2, 2, 2]

// console.log(_.fill([4, 6, 8, 10], '*', 1, 3));
// // => [4, '*', '*', 10]

// _.findIndex(array, [predicate=_.identity], [fromIndex=0])
// This method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.

// var users = [
//     { 'user': 'barney', 'active': false },
//     { 'user': 'fred', 'active': false },
//     { 'user': 'pebbles', 'active': true }
// ];

// console.log(_.findIndex(users, function (o) { return o.user == 'barney'; }));
// // => 0

// // The `_.matches` iteratee shorthand.
// _.findIndex(users, { 'user': 'fred', 'active': false });
// // => 1

// // The `_.matchesProperty` iteratee shorthand.
// _.findIndex(users, ['active', false]);
// // => 0

// // The `_.property` iteratee shorthand.
// _.findIndex(users, 'active');
//   // => 2

// _.cloneDeep(value)
var objects = [{ 'a': 1 }, { 'b': 2 }];

var deep = _.cloneDeep(objects);
console.log(deep) // reference to other memory
console.log(objects) // reference to other memory
console.log(deep[0] === objects[0]);
// => false