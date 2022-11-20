// require user module
// call the function

const users = require('./users.js')
users.getData()
.then((data) =>{
    console.log(data);
})
.catch(e => {
    console.log("we got an error")
})