const express = require('express');
const cors = require('cors');
const knex = require('knex');

const db = knex({
    client:'pg',
    connection: {
        host:'localhost',
        port:'5432',
        user:'postgres',
        password:'123456',
        database:'dvdrental'
    }
})

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(3001, () =>{
    console.log('you are running to port 3001')
})

app.get('/login', (req,res) =>{
        res.send("hello from login")
        
})

app.get('/register', (req,res) =>{
    let message ='mmmmm'
    res.json({message:message})
    
})

app.get('/countries', (req,res)=>{
    db('county')
    .select('country_id','country')
    .then(rows =>{
        res.json(rows)
    })
    .catch(e =>{
        res.status
    })
})

// app.get('/users', (req,res) =>{
//     let users = [
//         {name:'aaa', email:'aaa@aaa.com'},
//         {name:'bbb', email:'bbb@bbb.com'},
//         {name:'ccc', email:'ccc@ccc.com'}
//     ]

//     res.json(users)
// })

///post request
app.post('/users', (req,res) =>{
    console.log(req.body);
    let users = [
        {name:'aaa', email:'aaa@aaa.com'},
        {name:'bbb', email:'bbb@bbb.com'},
        {name:'ccc', email:'ccc@ccc.com'}
    ]
    res.json(users)
})