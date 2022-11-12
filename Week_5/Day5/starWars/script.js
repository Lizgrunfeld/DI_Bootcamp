
 // button - add event listener, button click fetch (data)


// 1. to retrieve the elements from the DOM.
// 2. to get the data from the API (star wars characters).

// generate the person 
const buttonPress = document.querySelector("button");
buttonPress.addEventListener("click", randNumData);
hideloader()

//create a random number between 1 and 83, delcare it as numData to be used in generatePerson as a people number
function generateRandomNumber(min,max){
    let min1 = Math.ceil(min);
    let max1 = Math.floor(max);
    return Math.floor(Math.random() * (max-min +1)) + min;
}

function randNumData(){
    const numData = generateRandomNumber(1,83);
    console.log(numData);
    generatePerson(numData);
    displayLoader()
}


async function generatePerson(numData){
    try{
    const peopleUrl = `https://www.swapi.tech/api/people/${numData}`;
    const response = await fetch(peopleUrl)
    if(response.status =="200"){
        const people = await response.json();
        // const home = people.result.properties.homeworld
        console.log(people)
        addPerson(people);
        hideloader();
        generateWorld(people)
    } else{
        throw new Error ("Oh No! That Person isn't available")
        }
    } catch(err){}
}

async function generateWorld(people){
    try{
         const planetUrl = people.result.properties.homeworld;
         const planetResult = await fetch(planetUrl)
            if(planetResult.status =="200"){
             const planet = await response.json();
             addhomeWorld(planet)
             } else{
             throw new Error("No Home Planet Available")
            }
        } catch(err){}
    }
generateWorld()


function addPerson(people){
    //name
    const info = document.getElementById("info-container");
    const name = document.getElementById("name");
    name.textContent = "Name: " + `${people.result.properties.name}`;
    info.appendChild(name)
    //height
    const height = document.getElementById("height");
    height.textContent = "Height: " +`${people.result.properties.height}`;
    info.appendChild(height)
    //birthyear
    const birthyear = document.getElementById("birth-year");
    birthyear.textContent = "Birth Year: " +`${people.result.properties.birth_year}`;
    info.appendChild(birthyear)
    //gender
    const gender = document.getElementById("gender");
    gender.textContent = "Gender: " +`${people.result.properties.gender}`;
    info.appendChild(gender)
}

function addhomeWorld(planet){
    const info = document.getElementById("info-container");
    const hWorld = document.getElementById("home-world");
    hWorld.textContent = "Home World: " + `${planet.homeworld}`;
    info.appendChild(hWorld)
}

function hideloader(){
    document.getElementById('loading').style.display='none';
    }
function displayLoader(){
    document.getElementById('loading').style.display="block";
}

// fetch
//https://www.swapi.tech/api/people/${}

//const numAlready = ??
//if numAlready = id contaited in [...array] do random again

// 3.to display the info on the DOM: the name, height, gender,
// birth year, and home world of the character.
// for homeworld create another fetch
