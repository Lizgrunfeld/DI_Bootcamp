const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.set('view engine', 'ejs');


app.use(cors());
app.use('/',express.static(__dirname+'/public'));

app.listen(process.env.PORT||8080, ()=> {
    console.log(`running on ${process.env.PORT || 8080}`)
})


app.get('/home', (req, res)=>{
  res.render('index')});




let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

  let feed = await parser.parseURL('https://www.thefactsite.com/feed/');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(`${item.title} - ${item.creator} - ${item.pubDate} - ${item.link} - ${item.categories}`)
  });

})();

// app.get('/index',(req,res)=>{
//   res.render('./pages/index');
// })

// app.get('/search',(req,res)=>{
//   res.render('./pages/search');
// })


  
// app.post('/search/title', (req,res)=>{
//   console.log(req.body);
//   let inputTitleText = [];
//   const {feed} = req.body;
//   parser('title')
//   .select('title')
//   .where({inputTitleText:item.title})
//   .then(data => {
//     console.log(data);
//     if(data.length>0){
//       res.send({message:`Found=> ${data[0].title}`})
//     }
//     else {
//       res.send({message:'Title Not Found'})
//     }
//   })
//   .catch(err => {
//     console.log(err);
//     res.send({message:err.detail})
//   })
// })

// app.post('/search/category', (req,res)=>{
//   console.log(req.body);
//   let inputcategoryText = [];
//   const {feed} = req.body;
//   parser('category')
//   .select('category')
//   .where({inputcategoryText:item.category})
//   .then(data => {
//     console.log(data);
//     if(data.length>0){
//       res.send({message:`Found=> ${data[0].category}`})
//     }
//     else {
//       res.send({message:'Category Not Found'})
//     }
//   })
//   .catch(err => {
//     console.log(err);
//     res.send({message:err.detail})
//   })
// })