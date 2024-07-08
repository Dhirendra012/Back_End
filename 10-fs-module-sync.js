// const fs = require('fs');

// Destructuring 
const { readFileSync , writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt' , 'utf8');
const second = readFileSync('./content/second.txt' , 'utf8');

// console.log(first , second);

// Now for writeFileSync 
// -> If there is no file with that name it will create a new file a write the text 
// -> But if there is a file it will rewrite the content

writeFileSync('./content/result-sync.txt' , `Here is the Result : ${first}, ${second}` , { flag : 'a'});