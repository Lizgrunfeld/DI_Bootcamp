

// setTimeout(hiBanner, 3000)

// function hiBanner (){
//     const banner = document.getElementById("ban");
//     banner.classList.add("banner"); // adding html style css .banner to const banner
// }



// const timerOne = setInterval(addDiv, 1000);
// let counter = 0;

// function addDiv(){
//     counter++;
//     if(counter <= 10){
//     const section = document.getElementById("wrapper"); // find section by id
//     const myDiv = document.createElement("div"); //creates a div each time
//     myDiv.textContent = "hello" // Text of divs
//     // const banner = document.getElementById("ban");
//     myDiv.classList.add("banner"); //style already in html
//     section.appendChild(myDiv); // place the divs in section
//     } else{
//         clearInterval(timerOne)
//         console.log(timerOne)
//     }
// }

// const timerOne = setInterval(addDiv, 1000);
// let counter = 10;

// function addDiv(){
//     counter++;
//     if(counter <= 11){
//     const section = document.getElementById("wrapper"); // find section by id
//     const myDiv = document.createElement("div"); //creates a div each time
//     myDiv.textContent = document.getElementById("ban").textContent // Text of divs
    
//     // const banner = document.getElementById("ban");
//     myDiv.classList.add("banner"); //style already in html
//     section.appendChild(myDiv); // place the divs in section
//     } else{
//         clearInterval(timerOne)
//         console.log(timerOne)
//     }
// }


// countdown
var span = document.getElementById("num");
var bannerStyle =document.getElementById("ban");
let counter1 = 10;
let timer = setInterval(decreaseCounter, 1000)

function decreaseCounter(){
counter1--;
if(counter1 >= 0){
    // const section = document.getElementById("wrapper"); // find section by id
    // const myDiv = document.createElement("div"); //creates a div each time
    // myDiv.textContent = document.getElementById("ban").textContent // Text of divs
    // const banner = document.getElementById("ban");
    // myDiv.classList.add("banner"); //style already in html
    // section.appendChild(myDiv); // place the divs in section
   span.textContent = counter1;
   bannerStyle.classList.add("ban");

}else{
clearInterval(timer)

}
}

