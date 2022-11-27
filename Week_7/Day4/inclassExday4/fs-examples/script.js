const fs = require('fs');

// let obj = {
//     name:"John",
//     age:25
// }

// fs.appendFile('./user', JSON.stringify(obj), (err)=>{
//     if(err){
//         console.log(err);
//     }
// })
// console.log("1")

fs.readFile('./user', 'utf-8', (err,data) =>{
    if(err){
        console.log("error=>", err);
    }else{
        console.log(JSON.parse(data));
    }
})
// // console.log('2');

// const f = fs.readFileSync('./name');
// console.log(f.toString());

// console.log('2');