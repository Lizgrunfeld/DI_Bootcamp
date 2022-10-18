// Exercise 1
const addressNumber = 12;
const addressStreet = "Ben Gurion";
const country = "Israel";

const globalAddress = `I live in ${addressStreet} ${addressNumber}, ${country}`;


console.log(globalAddress);


// Exercise 2
const birthYear = 1987;
const futureYear = 2030;

const futureAge = futureYear - birthYear;

const sentence = `I will be ${futureAge} in ${futureYear}`;

console.log(sentence);



// Exercise 3


let pets = ['cat', 'dog', ' rabbit', 'cow'];
// console.log(pets[1])
pets.splice(3,2,"horse");
console.log(pets);
console.log(pets.length);


