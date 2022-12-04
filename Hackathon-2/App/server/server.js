
const express = require("express");
const app = express();
app.use(express.json());

const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const knex = require('knex');

app.use(cors());
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
})
);

const db = knex({
    client: 'pg',
    connection: {
      host : 'lucky.db.elephantsql.com',
      port : 5432,
      user : 'nykpetcq',
      password : 'BceXPYoP-r-pv_7fhy_twWUvOlGjkI4l',
      database : 'nykpetcq'
    }
  });

app.set("db", db);


dotenv.config();


app.get('/', (req, res) => {
    db
.select().from('schools')
.then(schools =>
        res.send(schools)
        )
    });


app.post('/creategan', (req, res) =>{
        console.log(req.body)
        res.send(req.body)

        let ganName = req.body.ganName;
        let locationCity = req.body.locationCity;
        let locationAddress = req.body.locationAddress;
        let ageLowMonth = req.body.ageLowMonth;
        let ageHighMonth = req.body.ageHighMonth;
        let ratio = req.body.ratio;
        let website = req.body.website;
        let pictures = req.body.pictures;
        let owner = req.body.owner;
        let contactPhone = req.body.contactPhone;
        let specialties = req.body.specialties;
        let fridayClass = req.body.fridayClass;

        knex('schools').insert([
            { gan_name: ganName },
          ])

        //   const DBResult = await knex.insert(ganName).into("schools");
        //  res.json(req.body).end();

});

app.listen(3001, ()=>{
    console.log("Yay, your server is running on port 3001")
   
});

