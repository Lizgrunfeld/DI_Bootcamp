
// const http = require('http');

// const host = ("http://localhost:3000/");
// //host should be http://localhost:3000/';
// const port = 3000;

// const requestListener = function (req, res) {
//     res.setHeader('Content-Type', 'text/html')
//     res.end(`My Module is ${moduleNum}`);
// };

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });




const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.write('Hello there');
    res.end(`My Module is ${moduleNum}`);

}).listen(3000);

console.log(server)