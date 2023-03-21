// modules in Node.js(export)

/**
 * @we can use @module.exports to export an object/array/function froma file.
 */

const obj = {
    greeting:"Hello, World",
    sayHello: function() {
        console.log(this.greeting);
    }
}

module.exports = obj;
