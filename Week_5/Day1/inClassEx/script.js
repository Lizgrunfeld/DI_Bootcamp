

// Exercise with JSON
// 1. Parse this JSON string into a JS object
// 2. Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// 3. Create another variable to stringify the JS object. Console.log the variable
// 4. Then use pretty print (look at the lesson)


// const jsonString = `
// {
//     "quiz": {
//         "sport": {
//             "q1": {
//                 "question": "Which one is correct team name in NBA?",
//                 "options": [
//                     "New York Bulls",
//                     "Los Angeles Kings",
//                     "Golden State Warriros",
//                     "Huston Rocket"
//                 ],
//                 "answer": "Huston Rocket"
//             }
//         },
//         "maths": {
//             "q1": {
//                 "question": "5 + 7 = ?",
//                 "options": [
//                     10,
//                     11,
//                     12,
//                     13
//                 ],
//                 "answer": 12
//             },
//             "q2": {
//                 "question": "12 - 8 = ?",
//                 "options": [
//                     1,
//                     2,
//                     3,
//                     4
//                 ],
//                 "answer": 4
//             }
//         }
//     }
// }`

// const game = JSON.parse(jsonString);
// console.log(game)

// const options = game.quiz.sport.q1.options;
// options.forEach(element => console.log(element));
// console.log


// const gameWithPrettyPrint = JSON.stringify(game, null,2);
// console.log(gameWithPrettyPrint)


// Exercise 1: exceptions
// Using the code below:
const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
}

console.log("after")

// Which type of error will be thrown ? Look on the different types errors on Google
// constant variable tryign to be reassigned type error
// Is the console.log("after") will be shown on the console ? yes


// Exercise 2
// Write a function called checkEmail that takes one parameter: the email of the user.
// Your function should return "You are signed in". However, if the email doesn't contain @ you should throw the error, "Missing @ in the email." (edited) 

function checkEmail(userEmail){
    try{
        if (userEmail.includes("@")){
            console.log("You are signed in")
        }
        else{
            throw new Error ("Missing @ in the email.")
        }
    } catch (err){
     console.log("err.message", err.message);
        }
}


checkEmail("doggmai@.dofm")
checkEmail("eirjsgmail")





