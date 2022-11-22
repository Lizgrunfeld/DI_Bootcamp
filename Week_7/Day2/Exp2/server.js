/////EXERCISE 1

// const user = {
//     firstname: 'John',
//     lastname: 'Doe'
// }


// const express = require('express')
// const app = express();

// app.get('/', (req, res) => {
//     console.log(user)
//     res.send(user)
// });

// app.listen(3000, () => console.log('Example app listening on port 3000!'));

///EXERSIZE 2

const express = require('express');
const app = express();

app.get('/tutorial/:id', (req, res) => {
    console.log("req.params: ", req.params)
    res.send(` ${req.params.id}!`)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));


///EXERSIZE 3

