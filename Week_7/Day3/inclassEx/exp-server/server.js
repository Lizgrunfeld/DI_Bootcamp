const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {products} = require('./data/products.js');

dotenv.config();


const app = express();
app.use(cors());

app.listen(process.env.PORT, () => {
console.log(`run on port ${process.env.PORT}`);
})

app.get('/api/products', (req,res) =>{
    res.json(products)
})