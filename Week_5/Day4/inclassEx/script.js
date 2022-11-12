
// Exercise Game - The word game
// You need to create 4 functions, each of them return a promises
// The 1st function, receives 2 famous persons name from the user - if the names are not a string -> reject else - resolve with the name of the 2 ppl in an array
// The 2nd function, receives a noun if the noun is less than 3 letters - reject else - resolve with the noun
// The 3rd function, receives a city if the city doesn't start with an uppercase letter -> reject else - resolve with the city name
// The 4st function, receives a verb (finishing with "ing") if it doesn't end with "ing" -> reject (use the endWith string method) else resolve with the verb
// The last function, is an async function - it receives all the above promises, and return a sentence with it Ex: "Beyonce is playing football with Barack Obama in Paris"

//Async function
// async function learnReact(){
//     return "I'm learning REACT"
// }


///////////////////OLDWAY below//////////////////////
// const names = [];

// function firstFunction(names){
//     const isString = new Promise((resolve, reject) => {
//         if(names.every(word => typeof(word) !=="string")){
//             reject("You didnt write a first and last name");
//         } else {
//             resolve(names);
//         }
//     })
//     return isString
// }


async function firstFunction(name1, name2){
    if (typeof name1 !== "string" && typeof name2 !=="string"){
        throw "You didnt write a first and last name"
    } else {
        return [name1 + name2];
    }
}


///////////////////OLDWAY below//////////////////////

// function secondFunction(noun){
//     const nounLetters = new Promise((resolve, reject) => {
//         if (noun.length > 3){
//             resolve(noun)
//         } else{
//             reject(" your noun has less than three letters")
//         }
//     })
//     return nounLetters
// }

async function secondFunction(noun){
    if (noun.length > 3){
            return noun
    } else {
            throw new Error(" your noun has less than three letters")
    }
}

///////////////////OLDWAY below//////////////////////

// function thirdFunction(city){
//     const cityUpper = new Promise((resolve, reject) => {
//         if(city == city.toLowercase){
//             reject ("city must start with an uppercase letter")
//         } else{
//             resolve(city)
//         }
//     })
//     return cityUpper
// }


async function thirdFunction(city){
    if(city == city.toLowercase){
       throw new Error ("city must start with an uppercase letter")
    } else{
        return city
    }
}

///////////////////OLDWAY below//////////////////////

// The 4st function, receives a verb (finishing with "ing") if it doesn't end with "ing" -> reject (use the endWith string method) else resolve with the verb
// (myStr.endsWith("ing")

// function fourthFunction(verb){
//     const verbIng = new Promise((resolve, reject) => {
//         if(!verb.contain("ing")){
//             reject (verb.endswith("ing"));
//         } else{
//             resolve(verb)
//         }
//     })
//     return verbIng

// }

async function fourthFunction(verb){
    if(verb.endswith("ing")){
        throw (verb.endswith("ing"))
} else{
    return verb;
}
}

// The last function, is an async function - it receives all the above promises, and return a sentence with it 
// Ex: "Beyonce is playing football with Barack Obama in Paris"


async function lastFunction(){
    const names = await firstFunction("BEyonce", "Obama");
    const city = await secondFunction("New York");
    const noun = await thirdFunction("football");
    const verb = await fourthFunction("playing");
    const sentence = `${names[0]} is ${verb} ${noun} with ${names[1]} in ${city}`
    console.log(sentence)
}

lastFunction()
