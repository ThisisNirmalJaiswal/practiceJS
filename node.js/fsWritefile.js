// Writing to a file 
// to write data to a file, use the fs.writeFile() function

const fs = require('fs');

fs.writeFile('file.txt', "Hey Nirmal", (err)=>{
    if(err) throw err;
    console.log('file written successfuly')
})