// AJAX
// Make an HTTP request using the GET METHOD on 
// this API: https://jsonplaceholder.typicode.com/users

// Use the method onload, onprogress, onerror

// If there is no error, display on the page the name, email, city 
// of the 3 first users

const xhr = new XMLHttpRequest();

function getData() {

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.responseType = "json";
    console.log(xhr)
    xhr.send();
}

getData()


xhr.onload = function() {
    if(xhr.status === 200){
        console.log("Yay it works!");
        console.log(xhr.response);
        displayInfo(xhr.response);
        // create display name email city function below
    } else {
        console.log("something went wrong")
        displayError ()
        // create display error function below
    }
}


xhr.onprogress = function (){
    console.log("test");
}

xhr.onerror = function (){
    console.log("error");
}

function displayInfo (objects){
    const container = document.getElementById("display")
    objects.slice(0,3).forEach((element) => {
            const info = document.createElement("p");
            const text = document.createTextNode(`${element.name} - ${element.email} - ${element.address.city}`)
            info.appendChild(text);
            container.appendChild(info)
    })
}

function displayError () {
    const container = document.getElementById("display")
    const info = document.createElement("p");
    const text = document.createTextNode(`WRONG`)
    info.appendChild(text);
    container.appendChild(info)
}
