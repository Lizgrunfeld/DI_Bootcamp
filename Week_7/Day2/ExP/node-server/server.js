
const http = require('http'); 
const { user } = require('./data');

const server = http.createServer((req, res) => {   
if(res.status !== 200){
    fetch(user)
    // let section = document.getElementById("section");
    console.log(user)
}else{
    console.log("We have a error here")
}
});

server.listen(8000); 
console.log('Node.js web server at port 8000 is running..')


// const axios = require('axios');
// const { user } = require('./data');

// axios.get(user)
// .then(res=>res.json())
//         .then(data=>{
//         console.log(data);
// })
