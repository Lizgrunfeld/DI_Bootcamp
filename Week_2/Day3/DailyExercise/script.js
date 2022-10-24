// 🌟 Exercise 1 : List Of People
// Instructions
// const people = ["Greg", "Mary", "Devon", "James"];
// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people)

// Write code to replace “James” to “Jason”.
people[3]="Jason"
console.log(people)

// Write code to add your name to the end of the people array.

people.push("Elizabeth");
console.log(people)

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
var index = people.indexOf("Mary");
console.log(index)
// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
people.splice(0,1);
people.splice(3,1);
console.log(people)

// Write code that gives the index of “Foo”. Why does it return -1 ?
var index1 = people.indexOf("Foo");
console.log(index1)
//--Foo doesn't exist that's why it equals -1"

// Create a variable called last which value is the last element of the array.
var last= people[people.length -1]
console.log(last)
// Hint: What is the relationship between the index of the last element in the array and the length of the array?


// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.

for (let i = 0; i < people.length; i++){
    if (i === "Jason"){
        break;
    }
    console.log(people[i])
}



// 🌟 Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

let colors =["blue", "red" ,"black" ,"purple" ,"green"];
;
for (let i = 0; i < colors.length; i++){
        let indexNum = colors.indexOf(colors[i+1])
        var sentence = (`My #${indexNum} choice is ${colors[i]}`);
        console.log(sentence)
}


// 🌟 Exercise 4 : Building Management
// Instructions:
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }


// Review About Objects
// Copy and paste the above object to your Javascript file.
const building = {
        numberOfFloors: 4,
        numberOfAptByFloor: {
            firstFloor: 3,
            secondFloor: 4,
            thirdFloor: 9,
            fourthFloor: 2,
        },
        nameOfTenants: ["Sarah", "Dan", "David"],
        numberOfRoomsAndRent:  {
            sarah: [3, 990],
            dan:  [4, 1000],
            david: [1, 500],
        },
    }
// Console.log the number of floors in the building.
console.log(building.numberOfFloors);

// Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.numberOfRoomsAndRent.dan[0]);
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

const sarahAndDavid = (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]);
let danRent= building.numberOfRoomsAndRent.dan[1];

if (sarahAndDavid > danRent){
    danRent = danRent + 200
    console.log(danRent)
}
else {

}





// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
const pizza = {
    topping: "cheese",
    sauce: "marinara",
    size: "small"
 };


// Using a for in loop, console.log the keys of the object.

let key = pizza.property;
for (let x in pizza.property){
   key += pizza.property[x];
}
console.log(key);

// Using a for in loop, console.log the values of the object.
let object = "";
for (let x in pizza){
   object += pizza[x];
}
console.log(object);

// Exercise 6 : Rudolf
// Instructions
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

// key = my, is, the
// details[key] = name, rudolf, raindeer
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let sentence1 += key + "" + details[key];
console.log(sentence1);

// Exercise 7 : Secret Group
// Instructions
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”


function findSecretSociety(){
const students = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
students.sort()


let secretSociety = "";


for (let user of students){
    const firstL = user.charAt(0);
    secretSociety = secretSociety+firstL
}

console.log(SecretSociety)
}

findSecretSociety()


// FOR NOW NOTES - SOLUTION
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// function getFirstLetters(names) {
//     const firstLetters = names.split();
//     firstLetters.map(names => names[0]);
//     firstLetters.join("");
// }
// return FirstLetters