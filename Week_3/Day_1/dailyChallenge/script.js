
// const planets = ["Earth", "Jupiter", "Mars"];
// const colors = ["blue", "yellow", "red"];

const planets = [
    {
       planet: "earth",
       color : "blue",
       moons : 1,
    },
    {
        planet: "jupiter",
        color : "yellow",
        moons: 2,
     },
     {
        planet: "mars",
        color : "red",
        moons: 5,
     },
];

function addPlanet(){
    const secElemet = document.querySelector("section");
    for(const item of planets){
        const divPlanet = document.createElement("div");
        divPlanet.classList.add("planet");
        secElemet.appendChild(divPlanet);
        // divPlanet.style.background = planets.color[item];


        // create the moons
        const numberMoons = item["moons"]
}

}
addPlanet()


// for(let i = 0; i < planets.length; i++){
// //         console.log(`The ${i+1} planet is ${planets}`);    
// }





// TARGETING STYLE CLASS .eart, . jupiter, .mars - MADE IN HTML 

// const planets = ["Earth", "Jupiter", "Mars"];

// for(let i = 0; i = planets.length; i++){
//     console.log(`The ${i+1} planet is ${planets[i]}`);
// // }

// function addPlanet(){
//     const secElemet = document.querySelector("section");
    
//     for(const item of planets){
//         const divPlanet = document.createElement("div");
//         divPlanet.classList.add("planet", item[i].toLowerCase);
//         secElemet.appendChild(divPlanet);
//     }
// }

// addPlanet();


// ONLY JS FIE
// const planets = ["Earth", "Jupiter", "Mars"];
// const colors = ["blue", "yellow", "red"]

// function addPlanet(){
//     const secElemet = document.querySelector("section");
    
//     for(let i = 0; i > planets.length; i++){
//         const divPlanet = document.createElement("div");
//         divPlanet.classList.add("planet", item[i].toLowerCase);
//         divPlanet.style.background = (colors[i]);
//         secElemet.appendChild(divPlanet);
//     }
// }

// addPlanet()