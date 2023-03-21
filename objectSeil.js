
// The Object.seal() static method seals an object. 
// Sealing an object prevents extensions and makes existing properties non-configurable. 
// A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned. 
// Values of existing properties can still be changed as long as they are writable. 
// seal() returns the same object that was passed in.

const object1 = {
    property1: 42
};

Object.seal(object1);
object1.property1 = 33;
object1.property2 = 44;
console.log(object1.property1);
console.log(object1.property2);
// Expected output: 33

delete object1.property1; // Cannot delete when sealed
console.log(object1.property1);
// Expected output: 33





const obj = {
    prop() { },
    foo: "bar",
};

// New properties may be added, existing properties
// may be changed or removed.
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

const o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // true

// Changing property values on a sealed object
// still works.
obj.foo = "quux";

// But you can't convert data properties to accessors,
// or vice versa.
Object.defineProperty(obj, "foo", {
    get() {
        return "g";
    },
}); // throws a TypeError

// Now any changes, other than to property values,
// will fail.
obj.quaxxor = "the friendly duck";
// silently doesn't add the property
delete obj.foo;
// silently doesn't delete the property

// ...and in strict mode such attempts
// will throw TypeErrors.
function fail() {
    "use strict";
    delete obj.foo; // throws a TypeError
    obj.sparky = "arf"; // throws a TypeError
}

fail();

// Attempted additions through
// Object.defineProperty will also throw.
Object.defineProperty(obj, "ohai", {
    value: 17,
}); // throws a TypeError
Object.defineProperty(obj, "foo", {
    value: "eit",
}); // changes existing property value
