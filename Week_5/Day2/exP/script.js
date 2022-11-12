
//PART1
const xhr = new XMLHttpRequest();


function getData() {

    xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
    xhr.responseType = "json";
    console.log(xhr);
    xhr.send();

}
// console.log(xhr);
getData()

xhr.onload = function() {
    if(xhr.status === 200){
        console.log("Yay it works!");
        console.log(xhr.response.data);
        } else {
        console.log("something went wrong")
    }
}

//PART2

const xhr = new XMLHttpRequest();


function getData() {

    xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
    xhr.responseType = "json";
    console.log(xhr);
    xhr.send();

}
// console.log(xhr);
getData()

xhr.onload = function() {
    if(xhr.status === 200){
        console.log("Yay it works!");
        console.log(xhr.response.data);
        displayInfo(xhr.response.data);
        } else {
        console.log("something went wrong")
    }
}

function displayInfo (objects){
    const container = document.getElementById("display")
    objects.slice(2,10).forEach((element) => {
            const info = document.createElement("p");
            const img = document.createElement("img");
            const link = document.createElement('a');
            // link.setAttribute('href', ${element.data});
            img.appendChild(link);
            info.appendChild(img);
            container.appendChild(info)
    })
}

displayInfo()