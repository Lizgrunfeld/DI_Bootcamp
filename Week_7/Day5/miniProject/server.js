const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {db} = require('./data/products.js');

dotenv.config();
const app = express();
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',express.static(__dirname+'/public'));


app.listen(process.env.PORT||8080,() => {
    console.log(`running on ${process.env.PORT||8080}`)
})


// app.post('/list',(req,res)=>{
//     const {product, price} = req.body;
//     db('shoppingList')
//     .insert({
//       product:product,
//       price:price
//     })
//     .returning('*')
//     .then(rows => {
//       res.json(rows)
//     })
//     .catch(e=>{
//       console.log(e);
//       res.status(404).json({msg:e.messgae})
//     })
//   })

  app.route('/list')
  .get( (req,res)=> {
    console.log(req.query);
    const product = req.query.item;
    console.log(product);
    const price = req.query.cost;
    const data = {
        product,
        price
    }
    console.log(data);
    res.send(data)
  })
  .post( (req,res) => {
    console.log(req.body);
    let product = req.body.product;
    let price = req.body.price;
    const data = {
      product,
      price
    }
    console.log('POST',data);
    res.send(data)
  })



// app.post('/list', (req, res) => {
//     console.log(req.body)
//     res.send(req.body.product + ' ' + '-' + ' ' + '$' +req.body.price)
// })


