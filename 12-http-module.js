const http = require('http');

// this take a callback fn which takes two parameter
// Request - which show the request a client is requesting from the web Browser
// Response - what we are sendind back
const server = http.createServer((request , response) => 
    {
        if(request.url === '/')
        { response.end('Welcome to our home page'); }
        else if(request.url === '/about')
        { response.end('Here is our short History'); }
        else
        {
            response.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>`)
        }
    }
)

// Listening to port no
server.listen(5000);

// URL - tell what address client is requesting

