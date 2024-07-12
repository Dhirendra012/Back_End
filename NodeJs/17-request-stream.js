var http = require('http');
var fs = require('fs');

http.createServer(function (req , res){
    const fileStream = fs.createReadStream('./content/text.txt','utf8');
    fileStream.on('opne', () => {
        fileStream.pipe()
    })
    fileStream.on('error', (err) => { res.end(err); })
})