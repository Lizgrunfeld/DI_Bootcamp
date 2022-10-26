// // Exercise 1 - basic add event listener

// // Create two buttons - id of "red", id of "blue"
// // When we click on the red button -> Change the backgroundcolor of the page to red
// // When we click on the blue button -> Change the backgroundcolor of the page to blue

// //first get buttons
// const firstButton = document.getElementById("blue");
// const secondButton = document.getElementById("red");

// //add event to buttons
// firstButton.addEventListener("click",bkColorBlue)
// secondButton.addEventListener("click",bkColorRed)


// //declare when happens in th event
// function bkColorBlue(){
//         document.body.style.backgroundColor = "blue";
// }

// function bkColorRed(){
//     document.body.style.backgroundColor = "red";
// }

// bkColorBlue()
// bkColorRed()


// Exercise 2 - using the event object
// Add inside the HTML file a div of id "container" (do it directly in the HTML)
// Add one button per color inside the div container (do it directly in the JS)
//!!!NEED APPEND!!!
const colors = ["blue", "yellow", "green", "pink"];

function createButtons(){
    const divContainer = document.querySelector("#container")

for (let i = 0; i > colors.length; i++){
    const button = document.createElement("button");
    button.textContent = colors[i];
    button.setAttribute("id", colors[i]);
    button.addEventListener("click", changeBg);
    divContainer.appendChild(button);
}
    

}
createButtons()

function changeBg(event){

    document.body.style.backgroundColor = event.target.id;
}



// const buttons = document.querySelectorAll("button")


// buttons.appendChild(div.containers)

// Each button should have an "click" event listener that changes the background color of the document, to the text content of the button (do it directly in the JS)

// Exercise 3 - Pictures

// const pics = [ "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" "https://images.pexels.com/photos/3439576/pexels-photo-3439576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" ];

// Using this array, create a button on the page that when clicked on display 3 animals photo, but the order of the picture should be random
// Set a class to the image, so each image will be 200px height, and width, and in the middle of the page
// Add a button next to each image
// When we click on one image, it should disapear(ie. be deleted),
// When we hover on the image, it should display the "alt".