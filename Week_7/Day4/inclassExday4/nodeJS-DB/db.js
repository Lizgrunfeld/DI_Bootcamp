const knex = require('knex');

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

//   db.raw('SELECT * from products')
//   .then(res =>{
//     console.log(res.rows);
//   })
//   .catch(e => {
//     console.log(e);
//   })

// db('products')
// .select ('id','name','price')
// .where({id:2})
// .orWhere({id:3})
//   .then(res =>{
//     console.log(res);
//   })
//   .catch(e => {
//     console.log(e);
//   })


  db('products')
  .select ('id','name','price')
    .then(res =>{
      console.log(res);
    })
    .catch(e => {
      console.log(e);
    })
  

// db('users')
// .select ('id','username','email')
// .where({id:2})
// .orWhere({id:3})
//   .then(res =>{
//     console.log(res);
//   })
//   .catch(e => {
//     console.log(e);
//   })
