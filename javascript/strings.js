// String:- The JavaScript string is an object that represents a sequence of characters.

// access a value in any  
// String Methods
console.log("Nirmal".charAt(4)) // a
console.log("Nirmal".concat("Jasval")) // Nirmal Jasval
console.log("Nirmal".startsWith('N')) // true 
console.log("Nirmal".endsWith('l')) // true
console.log("Nirmal".includes('s')) // false
console.log("Nirmal".indexOf('m')) // 3
console.log("Nirmal".lastIndexOf('m')) // 3
console.log("Nirmal".match(/[A-Z]/g)) // N
console.log("Nirmal".padStart(7, '?')) // ?Nirmal
console.log("Nirmal".padEnd(7, '?')) // Nirmal?
console.log("Nirmal".repeat(2)) // NirmalNirmal
console.log("Nirmal".replace('l', 'a')); // Nirmaa
console.log("Nirmal".search('e')) // -1
console.log("Nirmal".slice(0, 3)) // Nir
console.log("Nirmal".split("")) // [ 'N', 'i', 'r', 'm', 'a', 'l' ]
console.log("Nirmal".substring(2, 4)); // rm
console.log("Nirmal".toLowerCase())
console.log("Nirmal".toUpperCase())
console.log(" Nirmal ".trim())
console.log(" Nirmal ".trimEnd())
console.log(" Nirmal ".trimStart())