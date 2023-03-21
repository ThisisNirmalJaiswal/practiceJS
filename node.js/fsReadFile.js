// Reading a file(File System)
/**
 * @fs module provides access to the user's file system. To read the contents of a file, use the fs.readFile() function
 */

const fs = require('fs');

// read file .text and log its data
fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

