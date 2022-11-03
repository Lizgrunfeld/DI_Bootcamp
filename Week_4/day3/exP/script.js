// ADVANCT OBJECT DAY 4

// Exercise 1 : Location

// Analyze the code below. What will be the output?

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
        // coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// I am John Doe from Vancouver, Canada. Latitude(49.2827), (-123.1207)


// 🌟 Exercise 2: Display Student Info
// Instructions

// const name = ["Elie", "Schoppik"];


// function info{
    
// let displayStudentInfo = ([first,last]) => {
    //destructuring
// console.log ('Your full name is' ${first}, ${last} )};

// info(name);


// Using the code above, destructure the parameter inside the function 
// and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'

// Exercise 3: User & Id
// Instructions
// Using this object 

// const userObjects = {
//     user1: 18273,
//     user2: 92833,
//     user3: 90315 };


// const usersArray = object.entries(userObjects);

// const multipleTwo = object.keys(userObjects) + (object.values(userObjects) * 2)
 
// console.log(multipleTwo)

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// --------------------------------------------------------------------------------------


// // Exercise 1 Advance JAVASCRIPT
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// "bread", "carrot", "potato, "chicken" "apple", "orange"


// ------2------
// const country = "USA";
// console.log([...country]);

// "U" "S" "A"

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

// undefined


// Exercise 2 : Employees

const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


            const welcomeStudents = users.map((user) => "Hello " + user.firstName);


            const fullStackStudents = users
                .filter((user) => user.role === "'Full Stack Resident")
                .map((user) => user.lastName);

            console.log("fullStackStudents", fullStackStudents);


            // exercise 3
            // Star Wars
            // Instructions
            // Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
            
            // Use the reduce() method to combine all of these into a single string.

            const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
            const sentence = epic.reduce((total, current) => (total += current + " "), "");

            console.log("sentence",sentence)

         // Exercise 4 : Employees #2
        // Instructions
        // Using this object:

        const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];


        const newArray1 = student.filter((element) => element.isPassed = 0);
        console.log(newArray1);

 //    Using the filter() method, create a new array, 
//  containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, 
// to congratulate the students with their name and course name 
// (ie. “Good job Jenner, you passed the course in Information 
// Technology”, “Good Job Marco you passed the course in Robotics”
//  ect…)