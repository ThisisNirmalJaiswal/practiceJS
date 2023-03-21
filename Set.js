/* 

Set
The Set object lets you store unique values of any type, whether primitive values or object references.

"Description"
Set objects are collections of values. 
A value in the set may only occur once; it is unique in the set's collection. 
You can iterate through the elements of a set in insertion order. 
The insertion order corresponds to the order in which each element was inserted into the set by the add() method successfully (that is, there wasn't an identical element already in the set when add() was called).

The specification requires sets to be implemented "that, on average, provide access times that are sublinear on the number of elements in the collection". 
Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N).

Value equality
Value equality is based on the SameValueZero algorithm. (It used to use SameValue, which treated 0 and -0 as different. Check browser compatibility.) This means NaN is considered the same as NaN (even though NaN !== NaN) and all other values are considered equal according to the semantics of the === operator.

Performance
The has method checks if a value is in the set, using an approach that is, on average, quicker than testing most of the elements that have previously been added to the set. In particular, it is, on average, faster than the Array.prototype.includes method when an array has a length equal to a set's size.

Constructor
Set()
Creates a new Set object.

Static properties
get Set[@@species]
The constructor function that is used to create derived objects.

Instance properties
These properties are defined on Set.prototype and shared by all Set instances.

Set.prototype.constructor
The constructor function that created the instance object. For Set instances, the initial value is the Set constructor.

Set.prototype.size
Returns the number of values in the Set object.

Set.prototype[@@toStringTag]
The initial value of the @@toStringTag property is the string "Set". This property is used in Object.prototype.toString().

Instance methods
Set.prototype.add()
Inserts a new element with a specified value in to a Set object, if there isn't an element with the same value already in the Set.

Set.prototype.clear()
Removes all elements from the Set object.

Set.prototype.delete()
Removes the element associated to the value and returns a boolean asserting whether an element was successfully removed or not. Set.prototype.has(value) will return false afterwards.

Set.prototype.has()
Returns a boolean asserting whether an element is present with the given value in the Set object or not.

Set.prototype[@@iterator]()
Returns a new iterator object that yields the values for each element in the Set object in insertion order.

Set.prototype.values()
Returns a new iterator object that yields the values for each element in the Set object in insertion order.

Set.prototype.keys()
An alias for Set.prototype.values().

Set.prototype.entries()
Returns a new iterator object that contains an array of [value, value] for each element in the Set object, in insertion order.

This is similar to the Map object, so that each entry's key is the same as its value for a Set.

Set.prototype.forEach()
Calls callbackFn once for each value present in the Set object, in insertion order. If a thisArg parameter is provided, it will be used as the this value for each invocation of callbackFn.

Examples

*/


const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }
const o = { a: 1, b: 2 };
mySet1.add(o);
console.log(o === { a: 1, b: 2 }); // Set(5) { 1, "some text", {…}, {…}, 5 }

mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

mySet1.has(1); // true
mySet1.has(3); // false, since 3 has not been added to the set
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Some Text".toLowerCase()); // true
mySet1.has(o); // true

mySet1.size; // 5

mySet1.delete(5); // removes 5 from the set
mySet1.has(5); // false, 5 has been removed

mySet1.size; // 4, since we just removed one value

mySet1.add(5); // Set(5) { 1, 'some text', {...}, {...}, 5 } - a previously deleted item will be added as a new item, it will not retain its original position before deletion

console.log(mySet1); // Set(5) { 1, "some text", {…}, {…}, 5 }
console.log(...mySet1); // changed to an array:- [1 some text { a: 1, b: 2 } { a: 1, b: 2 } 5]
