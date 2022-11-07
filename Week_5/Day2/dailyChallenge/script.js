
// // https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// This input is used to fetch gif depending on a specific category.
// input -> https://api.giphy.com/v1/gifs/search?q=INPUT&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1
// In the JS file, create a program to fetch one random gif depending on the search of the user 
// (ie. If the search is “sun”, append on the page one gif with a category of “sun”).

// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.



const xhr = new XMLHttpRequest();

// function testResults (form) {
//     const Testing = form.catInput.value;
//     alert ("You typed: " + Testing);
// }

// testResults()

const inputValue = document.getElementById("catInput").value;
const buttonSubmit = document.querySelector("button");

const combine = "https://api.giphy.com/v1/gifs/search?q=" + inputValue + "&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1";
console.log(combine)


function getData() {

    xhr.open("GET", combine);
    xhr.responseType = "json";
    console.log(xhr);
    xhr.send();
}

getData()


xhr.onload = function() {
    if(xhr.status === 200){
        console.log(combine);
        displayInfo(combine);
        } else {
        console.log("something went wrong")
    }
}


function displayInfo (objects){
    const container = document.getElementById("display")
    objects.forEach((element) => {
        const info = document.createElement("p");
        const img = document.createElement("img");
        const deleteButton = document.createElement('button').classList.add("deleteBtn");
        const link = document.createElement('a');
        // link.setAttribute('href', ${element.data});
        img.appendChild(link);
        img.appendChild(deleteButton);
        info.appendChild(img);
        container.appendChild(info);


})
}

displayInfo()