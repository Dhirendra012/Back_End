const { readFile , writeFile } = require('fs');

// If we not provide the utf value it will give a buffer value
readFile('./content/first.txt' , 'utf8' , 
    ( err , result) =>
    {
        if(err){ return; }
        const first = result;

        readFile('./content/second.txt', 'utf8' ,
            (err , result) =>
            {
                if(err){ return; }
                const second = result;

                writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`,
                    (err , result) => { if(err){ return; } }
                )
            }
        )
    }
);


