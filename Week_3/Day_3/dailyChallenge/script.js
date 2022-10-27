// Daily Challenge : Show Only The Letters
// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)


const userInput = document.querySelector("input");
const allowedChars = /[A-Za-z]/;
userInput.addEventListener("keydown", checkKey)

function checkKey(event){
    console.log(event)
    console.log(event.key)
    if (!allowedChars.test(event.key)){
        event.preventDefault();
    }
}




// function mainForm(){
//     var simpleForm = document.createElement("form");
//         simpleForm.setAttribute("method", "get");
//         simpleForm.setAttribute("action", "submit");

//     var firstNameField = document.createElement("label")
//         firstNameField.setAttribute("input", "text"),
//         firstNameField.setAttribute("id", "fName"),
//         firstNameField.setAttribute("name", "text"),

//         simpleForm.appendChild(firstNameField);

//     simpleForm.classList.add("styleForm")

//     const section = document.getElementById("place");
//     const myForm = simpleForm
//     section.appendChild(simpleForm)
// }
// mainForm()

// var lettersOnly = document.createElement('input');
// lettersOnly.setAttribute("type","text");

// Hint: use one of the following events to remove any character that is not a letter

// keyup event
// or keypress event
// or keydown event
// or input event

// Hint : Check out keycodes in Javascript or Regular Expressio