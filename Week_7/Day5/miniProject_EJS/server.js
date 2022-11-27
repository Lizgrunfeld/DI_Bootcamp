const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.set('view engine', 'ejs');


app.use(cors());
app.use('/',express.static(__dirname+'/public'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(process.env.PORT||8080, ()=> {
    console.log(`running on ${process.env.PORT || 8080}`)
})


let Parser = require('rss-parser');
let parser = new Parser();


(async() => {

 
  let feed = await parser.parseURL('https://www.thefactsite.com/feed/');
  console.log(feed.title);

  feed.items.forEach(item => {
        console.log(`${item.categories}`)
        console.log(`${item.title} - ${item.creator} - ${item.pubDate} - ${item.link} - ${item.categories}`)
      })
      
 })();

 
app.get('/home', (req, res)=>{
  res.render('index')});

app.get('/search', (req, res)=>{
    res.render('search')});

app.post('/search/title', (req, res) => {
      const userInput = document.querySelector('input[name="title"]');
      console.log(userInput);
      res.send("https://www.thefactsite.com/"+userInput);
      res.render('search');
    });

app.post('/search/title', (req, res) => {
      const catChoice = document.getElementsByClassName("option");
      console.log(catChoice);
      res.send("https://www.thefactsite.com/tag/"+catChoice);
      res.render('search');
    });




  // let items = [];

  // const fileName =`${feed.title.replace(/\s+/g, "-").replace(/[\\?%:|"<>"]/g, '').toLowerCase()}.json`;
  // if(fs.existsSync(fileName)){
  //   items =require(fileName);
  // }


//   await Promise.all(feed.items.map(async (currentItem) =>{

//     if (items.filter((item) => item === currentItem).length <= 1){
//       items.push(currentItem);
//     }
//   }));

//   fs.writeFileSync(fileName, JSON.stringify(items));

// })();

  // var title=[];
  // var creator=[];
//   // var pubDate=[];
//   // var link=[];
//   // var categories=[];
//   feed.items.forEach(item => {
//     console.log(`${item.title} - ${item.creator} - ${item.pubDate} - ${item.link} - ${item.categories}`)
//     // title.push(item.title)
//     // creator.push(item.creator)
//     // pubDate.push(item.pubDate)
//     // link.push(item.link)
//     // categories.push(item.categories)
//   });

// })();



  
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
