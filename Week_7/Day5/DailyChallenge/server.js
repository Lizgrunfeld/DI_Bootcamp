/*
1.npm init -y
2.npm i 'packages'
3. make changes in package.json
4.create .env
5. create server
*/
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const fs = require('fs');
const { json } = require('body-parser');

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', express.static(__dirname+'/public'));

app.listen(process.env.PORT||8080, ()=> {
    console.log(`running on ${process.env.PORT || 8080}`);
})

app.post('/login', (req, res)=>{
    const {email,password} = req.body

    let users =[];
    try{
        const f = fs.readFileSync('./users');
        users = JSON.parse(f.toString())
    }
    catch(e){
        console.log(e)
    }
    
    if(!doesUserExist(users, req.body.email)){
        return res.json({msg:'user does not exist'})
    }

    const userData = users.find(user => {
        return user.email == email
    })

    //check for matched passwords below
    const match = bcrypt.compareSync(password,userData.password);

    if (!match){
        return res.json({msg:"wrong password"})
    }
        res.json({msg:"login successful"})

})


app.post('/register', (req, res)=>{
    console.log(req.body);
    
    let users =[];

    try{
        const f = fs.readFileSync('./users');
        users = JSON.parse(f.toString())

    }
    catch(e){}

    if(doesUserExist(users, req.body.email)){
        return res.json({msg:'email exist'})
    }

    const salt = bcrypt.genSaltSync(3);
    const hash = bcrypt.hashSync(req.body.password,salt);

    //option 1 
    req.body.password = hash
    users.push(req.body);

    //option 2
    // const {firstname,lastname,email,password,username} = req.body
    // users.push({firstname,lastname,email,password:hash,username})

    fs.writeFile('./users', JSON.stringify(users), err =>{
        if (err){
            console.log(err)
        }
    })

    res.json(users)
})

const doesUserExist = (arr, email) =>{
    const filtersUsers = arr.filter(user =>{
        return user.email == email;
    })
    return (filtersUsers.length > 0) ? true : false
}