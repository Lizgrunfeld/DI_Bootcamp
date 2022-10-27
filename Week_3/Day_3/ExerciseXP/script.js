// 🌟 Exercise 1: Timer
// Instructions
// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// // Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


//------ let l =setInterval(startInterval, 2000);
// alert("Hello World");

// function startInterval(){
//         const section = document.getElementById("container"); // find section by id
//         const myPar = document.createElement("p"); //creates a div each time
//         myPar.textContent = "Hello World"; // Text of divs
//         section.appendChild(myPar); // place the divs in section
//         fiveLimit(); // call function within    
// }

// var button = document.getElementById("clear");
// button.addEventListener("click", stopButton)

// function stopButton(){
//         clearInterval(l);
//         console.log(l)
// }

// function fiveLimit(){
//     var addedP = document.body.children[0].children
//     if (addedP.length >= 5){
//         clearInterval(l)
    
//     }
//     console.log(addedP.length)
//-------- }

// //EXERCISE 2
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container


let redBox= document.getElementById('animate');
let container = document.getElementById('container');
let button = document.body.children[0].firstElementChild;
//stop at var rightSide = redBox.style.left = '350px'
button.addEventListener("click", myMove)


function myMove(){
let x = 0;
setInterval(moveLeft,10)

function moveLeft(){
    
     x+=10;
     let left = x +"px";
     redBox.style.left = left
     if (){
     clearInterval()
        }
    }
    // moveLeft()
}


    // window.onload=function() {
    //     let x = 0;
    //     setInterval(moveElement,1000);
        
    //     function moveElement() {
    //       x+=10;
    //       let left = x + "px";
    //       document.getElementById("redbox").style.left=left;
    //     }
    // }