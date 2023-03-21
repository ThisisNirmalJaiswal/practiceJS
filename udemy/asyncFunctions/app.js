// Async 
// async functions always return a promise
// If the Function returns a value, the promise will be resolved with that value
// If the function throws an exception, the promise will be rejected

// Await
// we can only use the await keyword inside of functions declared with async 
// await will pause the execution of the function, waiting for a promise to be resolved

// async function hello(){

// }

// console.log(hello())

// const login = async (username, password) => {
//     if (!username || !password) throw "missing credentials"
//     if (password === 'heynirmal') return "welcome!"
//     throw "Invalid Password"
// }

// login('sda', 'heynirmal')
//     .then(msg => {
//         console.log("Logged IN")
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log("ERROR!")
//         console.log(err)
//     })

// Handling Errors in async functions 
