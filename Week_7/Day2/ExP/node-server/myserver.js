
//Exercise 1

const http = require('http'); 


///https://www.w3schools.com/nodejs/nodejs_http.asp////
const server = http.createServer((req, res) => {   
    if(req.url == '/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h2>"This is my first response"</h2></body></html>');
        res.write('<html><body><h1>"This is my second response"</h1></body></html>');
        res.write('<html><body><p>"This is my third response"</p></body></html>');
        res.end();
    }else {
        res.end("we have a problem")
    }
});

server.listen(3000); 
console.log('Node.js web server at port 3000 is running..')


//Exercise 2
