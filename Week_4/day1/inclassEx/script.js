// // Exercise 1 : guess what will be console logged, and explain why

// let text = "Hello";

// function checkText (){
// 	console.log("In the function",text); 
// 	text += " World";
// 	console.log("Still in the function",text);
// }

// console.log("before the function", text); //1. Before the function, Hello

// checkText() //2. In the function, hello. Still in the function, Hello World.

// console.log("after the function", text); //3. after the function, Hello World.


// Exercise 2 : guess what will be console logged, and explain why

// let friend = "Harry";

// function checkfriend (){
// 	let friend = "Alice";
// 	console.log("In the function",friend); 
// 	friend += " Smith";
// 	console.log("Still in the function",friend);
// }

// console.log("before the function", friend); //1. Before the function, Harry.

// checkfriend() //2.In the function Alice. Still in the function Alice Smith.

// console.log("after the function", friend); //3. after the function harry.


// Afternoon exercises

// Exercise 1:

// Greet the user with his name, the user's name is a parameter. Do this exercise,
// first by using function declarations
// then function expression,
// then arrow function



// function greetUser(name){
// 		console.log("hello" + name);
// }
// greetUser(" Liz")

// const greetUser = function(name){
// 	console.log("hello" + name);
// }

// greetUser(" Liz")

// const greetUser = (name) => console.log("Hello" + name)
// greetUser(" Liz")



// Exercise 2: Function & Arrow function & Ternary Operator

// Check if the user's age is higher than 18. Use ternary operator.
// if the user's age is higher than 18, return "You can drive"
// else, return "You cannot drive"

// const userAge = 21
// const driving = userAge > 18 ? "You can now drive" : "You cannot drive";

// console.log(driving)

// // Do this exercise,

// first by using function declarations



// function drivingAge(userAge){
// if (userAge > 18 ){
// 	console.log("You can now drive");
// }else{
// 	console.log("You cannot drive")
// }
// }

// drivingAge(15)

// then function expression,
// then arrow function

const driving = (userAge) => userAge > 18 ? "You can now drive" : "You cannot drive";

driving(12)