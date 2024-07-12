// Streams
// -- Read or write data sequentially

// Wirtable - used to write data sequentially
// Readable - used to read data sequentially
// Duplex - Used for both read and write data
// Trasnforn - Used to tranform where data can be modified when writting or reading

// The main error with reading file with sunc or async is that it read the whole firl
// And if we are storing it in a variable then if size can be big as compare to storeg capacity

// Thats why we use stream to read which read file in chunk of 64kb data that will be better to handle a large file

// default 64 kb
// last buffer - remainder
// const stream = createReadStream('./content/text.txt',{ hightWaterMark : 9000}) -> size will be 90kb
// const stream = createReadStream('./content/text.txt',{ encoding: 'utf8, })

const { createReadStream } = require('fs');

const stream = createReadStream('./content/first.txt');

stream.on('data' , (result) => { console.log(result)})

stream.on('error', (err) => { console.log(err)})
