/* The Object.freeze() static method freezes an object. 
Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. 
A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. 
freeze() returns the same object that was passed in.

Syntax:- Object.freeze(obj)
return:- The object that was passed to the function.

Freezing an object is the highest integrity level that JavaScript provides.
*/


// 'use strict'
const obj = {
    prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42


Object.freeze(new Uint8Array(0)); // No elements
// Uint8Array []

// Object.freeze(new Uint8Array(1)); // Has elements/
// TypeError: Cannot freeze array buffer views with elements

Object.freeze(new DataView(new ArrayBuffer(32))); // No elements
// DataView {}

Object.freeze(new Float64Array(new ArrayBuffer(64), 63, 0)); // No elements
// Float64Array []

Object.freeze(new Float64Array(new ArrayBuffer(64), 32, 2)); // Has elements
// TypeError: Cannot freeze array buffer views with elements

