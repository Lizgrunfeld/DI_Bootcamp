const { response } = require('express');

const express = require('express')
const {products} = require('./modules/data.js');

const app = express();

app.listen(5000, () =>{
    console.log("running on 5000");
    })

app.use('/', express.static(__dirname + '/public'))

app.get('/api/products',(req,res) => {
     res.json(products)
});

app.get('/products', (req,res) =>{
    res.sendFile(__dirname + '/public/products.html')
})

app.get('/api/products/:productId', (req, res) =>{
    const {productId} = req.params;
    const product = products.find(item =>{
        return item.id == productId
    })
    if(!product) {
        return res.status(404).json("product not found")
    }
    res.json(product)
})


app.get('/api/search', (req,res)=>{
    const {name} = req.query;
    const results = products.filter(item =>{
        return item.name.toLowerCase().includes(name.toLowerCase())
    })

    if(results.length === 0){
        return res.status(404).json("No products match your search")
    }
    res.json(results);
})
