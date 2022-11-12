// EXERCISE 1
// Create a function that takes in a single parameter and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
// If the parameter is a string, the promise resolves with that same string uppercased.
// If the parameter is anything but a string it rejects with that same input.
// Use then to repeat the string twice use catch to console.log the error finally call a function that console.log ("congratulation")




// function newFunction(walkTheDog){
//     const getAnotherDog = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof walkTheDog == "string"){
//                 resolve(walkTheDog.toUpperCase());
//             } else {
//                 reject(walkTheDog);
//           }
//         }, 5000);
//     });
//     return getAnotherDog;
// }



// newFunction("Test Words")
// .then((result) => console.log(result.repeat(2)))
// .catch((err) => console.log(err)) 

// newFunction(11)
// .then((result) => console.log(result.repeat(2)))
// .catch((err) => console.log(err)) 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Exercise
// PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then append the gif to the page. Use this documentation https://developers.giphy.com/docs/api/endpoint#random https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Part II
// Instead of having a fixed category of gif. First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1 You will then fetch 1 random gif, depending on the word. The word will be the gif category Display the word and the gif on the page
// For example: you will fetch the random-word-api. This api will return a random word - for example : "happy" Using this word as a category, you will fetch one random gif with the category of "happy" and display it on the page
// Part III
// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"


function getGif(wordRandom){
fetch(`https://api.giphy.com/v1/gifs/random?tag=${wordRandom}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
.then((res) => {return res.json()})
.then((arr) => appendData(arr))
}


function appendData(gif){
    const section = document.getElementById("container");
	// console.log(gif);
		let img = document.createElement("img");
		img.src = gif.data.images.original.url;
		section.appendChild(img)
	}


	// function appendData(gif){
	// 	const section = document.getElementById("container");
	// 	const workOrNot = new Promise((resolve, reject) => {
	// 		if (res.data === []) {
	// 			throw new Error("404 Error")
	// 		} else{
	// 			let img = document.createElement("img");
	// 			img.src = gif.data.images.original.url;
	// 			section.appendChild(img)
	// 		}
	// 	})
	// 	return workOrNot
	// 	}
	
		
	
/////////////PART 2//////////////////////



function randomWord(){
	fetch('http://random-word-api.herokuapp.com/word?number=1')
	.then((res) => {return res.json()})
	.then((arr) => getGif(arr[0]))	
}

randomWord()



// `https://api.giphy.com/v1/gifs/search?q=${}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`