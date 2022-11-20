const { a } = require('./greeting.js')
const hello = require('./greeting.js')

// const name = "Mike Taylor";

// const greeting = (name) => {
//     console.log(` Hello ${name}, welcome to NodeJs`)
// }

console.log(hello.greeting('john'))
// 'Hello john, welcome to NodeJs'

console.log(hello.greeting(a))
// 'Hello abc, welcome to NodeJs'

