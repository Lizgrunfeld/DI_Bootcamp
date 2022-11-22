
const express = require('express')
const app = express();

app.get('/', (req, res) => res.send('<html><body><h1>"This is an HTML Tag"</h1></body></html>'))

app.listen(3000)