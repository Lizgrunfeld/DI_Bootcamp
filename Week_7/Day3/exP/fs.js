const http = require('http');
const fs = require('fs');


http.createServer(function (req, res) {
  fs.readFile('text.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    console.log(data)
    return res.end();
  });
  
fs.appendFile('text.txt', 'Buy orange juice', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  fs.unlink('text.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });
  
}).listen(2000);