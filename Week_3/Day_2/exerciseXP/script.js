// //1 .Using a DOM property, retrieve the h1 and console.log it.
// let h = document.body.children[0].firstElementChild
// console.log(h)

// //2.Using DOM methods, remove the last paragraph in the <article> tag.
// let lP = document.body.children[0].lastElementChild
// lP.remove();
// console.log()
// //3. Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// const headTwo = document.body.children[0].children[1]
// headTwo.addEventListener("click", toRed);

// function toRed(){
//     document.body.style.backgroundColor = "red";
// }
// console.log(headTwo)
// //4.Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// const headThree = document.body.children[0].children[2]
// headThree.addEventListener("click", hide)

// function hide(){
//     headThree.style.display = "none";
// }
// console.log(headThree)
// //5.Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// function placeButton(){
//     const addButton = document.createElement("button");
//     const buttonText = document.createTextNode("Bold");
//     addButton.appendChild(buttonText);
//     let article = document.body.children[0];
//     article.appendChild(addButton);
//     addButton.addEventListener("click", allBold);
// }

// placeButton()



// function allBold(){
//     const allP = document.querySelectorAll("p");
//     for (let i = 0; i < allP.length; i++){
//           allP[i].style.fontWeight = "bold";
//     }
   
//     console.log(allP)
// }



//6. BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

//7. BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

// 🌟 Exercise 2 : Work With Forms
// Instructions
// Retrieve the form and console.log it.

// let firstForm = document.forms[0];
// console.log(firstForm)

// Retrieve the inputs by their id and console.log them.
// Retrieve the inputs by their name attribute and console.log them.
// When the user submits the form (ie. submit event listener)
// firstForm.addEventListener("submit", retrieveData)
;

// const fNameInput = document.getElementById("fname").attributes["name"].value;
// const lNameInput = document.getElementById("lname").attributes["name"].value;

// console.log(fNameInput,lNameInput)

    
// const firstForm = document.forms[0];
// firstForm.addEventListener("submit", retrieveData);

// function retrieveData(event){
//         let firstForm = document.forms[0];

//         event.preventDefault();
//         let allElementsForm = firstForm.elements;

//         let firstInput = allElementsForm[0];
//         let valueFirstInput = firstInput.value;

//         let secondInput = allElementsForm[1];
//         let valueSecondInput = secondInput.value;

       
//         let firstLi = valuefirstInput.createElement("li");
//         firstLi.innerText = firstInput
//         let secondLi = valuefirstInput.createElement("li");
//         secondLi.innerText = secondInput

//         let ulAdd = document.querySelector(".userAnswers")
//         ulAdd.append(firstLi, secondLi)

//     }


const firstForm = document.forms[0];
firstForm.addEventListener("submit", retrieveData);


function retrieveData(event){

        event.preventDefault();

        const fNameInput = document.getElementById("fname").value;
        const lNameInput = document.getElementById("lname").value;


       if( fNameInput !=="" && lNameInput !== ""){
        let firstLi = document.createElement("li");
        firstLi.innerText = fNameInput
        let secondLi = document.createElement("li");
        secondLi.innerText = lNameInput

        const ulAdd = document.querySelector(".usersAnswer")
        ulAdd.append(firstLi, secondLi)

    } else {
        console.log('the inputs are empty');
        return;
    }
    }

        // // create an li per input value,
        // // then append them to a the <ul class="usersAnswer"></ul>, below the form. 
        // valueFirstInput.createElement("li");
        // li.append(valueFirstInput);
        
        // let inputLname = valueSecondInput.createElement("li");

        // console.log(valueFirstInput,valueSecondInput);

//In the JS file:

// // Declare a global variable named allBoldItems.
// getBoldItems = "x"
// // Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
// function getBold_items(){
//     allBoldItems = document.getElementsByTagName('strong')
//     } 
// getBold_items()

// // Create a function called highlight() that changes the color of all the bold text to blue.
// function highlight(allBoldItems){
//     allBoldItems.style.color = 'blue'
// }
// highlight(allBoldItems)
// // Create a function called return_normal() that changes the color of all the bold text back to black.

// // Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
