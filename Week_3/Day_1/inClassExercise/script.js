// //Exercise 1
// For each of the questions, find 2 WAYS of accessing :
// 1. The div DOM node?
// 2. The ul DOM node?
// 3. The second li (with Pete)?


let div = document.body.children[0]
console.log(div)

let div1 = document.body.firstElementChild
console.log(div1)

let ul = document.body.children[1]
console.log(ul)

let ulOther = div1.nextElementSibling
console.log(ulOther)

let pete = ul.lastElementChild.textContent
console.log(pete)

let pete1 = ulOther.children[1].textContent
console.log(pete1)