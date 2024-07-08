//Path module allows us to interact us with the file path easily

const path = require('path');

// seperator propery which return a platform specific seperator - /
console.log(path.sep);

// Join - It return a path by joining to the last folder in normalized manner
const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

// For last file name or Base file name - basename
const base = path.basename(filePath);
console.log(base);

// resolve - accepts a sequence of path and reolve it in a absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);


// \
// \content\subfolder\test.txt
// test.txt
// C:\Users\acer\Desktop\Back_End\content\subfolder\test.txt