// Using Javascript:
// Retrieve the div and console.log it

// let div = document.body.children[0]
// console.log(div)

// Change the name “Pete” to “Richard”.


// let nameChange = document.body.children[1]
// let nameChange1 = nameChange.lastElementChild.textContent
// let nameChange2 = nameChange1 = "Richard"

// console.log(nameChange2)



// Change each first name of the two <ul>'s to your name.

// const lists = document.querySelectorAll(".list")
// lists.forEach( list => list.firstElementChild.textContent = "Elizabeth") 

// console.log(lists)

// Delete the <li> that contains the text node “Sarah”.

// lists[1].children[1].remove()


// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

// lists[0].classList.add("student_list")
// lists[1].classList.add("student_list")

// const firstUL = document.querySelector('ul.list.student_list')

// firstUL.classList.add("classes","attendance")


// 🌟 Exercise 2 : Users And Style
// Instructions
// <div>Users:</div>
// <ul>
//     <li>John</li>
//     <li>Pete</li>
// </ul>

// Add a “light blue” background color and some padding to the <div>.

// document.getElementById("d").style.backgroundColor = "aqua";


// Do not display the <li> that contains the text node “John”.

// let findList = document.body.children[1]
// findList.removeChild(findList.firstElementChild)

// console.log(findList)


// Add a border to the <li> that contains the text node “Pete”.

// DOESNT WORK!!!!!

// const findPete= document.body.children[1]
// findPete.style.border = "2rem";
// console.log(findPete)



// Change the font size of the whole body.

// document.body.style.fontSize = "2.5em";

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).


// 🌟 Exercise 3 : Change The Navbar


// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

let div = document.getElementById("navBar")
div.setAttribute("id", "socialNetworkNavigation")
console.log(div)


// We are going to add a new <li> to the <ul>.

const myList = document.body.children[0].firstElementChild
// First, create a new <li> tag (use the createElement method).
const newLi = document.createElement("li");
// Create a new text node with “Logout” as its specified text.
let textNode = document.createTextNode("Logout");
// Append the text node to the newly created list node (<li>)
let completeLi = newLi.appendChild(textNode);
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
myList.appendChild(completeLi)

// Exercise 4 : My Book List
//HTML TABLE!!!!
//<table> <tr> <td> <td> - must use loop for tr inside function
// Instructions
// Take a look at this link for help.
//https://www.impressivewebs.com/10-essential-dom-methods-techniques-for-practical-javascript/
// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
 


const border = document.getElementById("table");
// const borderAll = document.querySelectorAll("table.tr"); other option

border.style.border ="solid 2px black";

console.log(border)


function mainFunction(){

for (let i = 0; i <allBooks.length; i++){

let allBooks =[
    {  
    "title": "The Bible",
    "author" : "God",
    // "Image": <img src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4321/9781432102401.jpg" alt="" className="sr" /> 
    alreadyRead: true
    },

    {  
        "title": "Harry Potter",
        "author": "JK Rowling",
        // Image: new url('https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5903/9780590353427.jpg'),
        alreadyRead: false
    }
    ]
}
   

console.log(allBooks[1])

    function writtenBy(){

    let title = document.getElementById("details").children[0].textContent
    let author = document.getElementById("details").children[1].textContent

    let sentence = `${title} written by ${author}`
    console.log(sentence)
    }

    writtenBy()

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :

// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.

function writtenBy(){

    let title = document.getElementById("details").children[0].textContent
    let author = document.getElementById("details").children[1].textContent

    let sentence = `${title} written by ${author}`
    console.log(sentence)
    }
    
    writtenBy()

// The width of the image has to be set to 100px.

let imageWidth = document.getElementsByName("img")
// imageWidth = 100px;


// If the book is already read. Set the color of the book’s details to red.

function turnRed(){
if (alreadyRead == true){
    document.getElementById("details").lastElementChild.style.color = "red"

    } else{
        
    }
    turnRed()
    }
}
document.getElementById("details").lastElementChild.style.color = "red"
console.log()