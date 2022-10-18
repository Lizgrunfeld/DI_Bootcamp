
// Exercise 1
const favoriteFood = "pizza";
const favoriteMeal = "dinner";

const sentence = `I eat ${favoriteFood} at every ${favoriteMeal}`;
console.log(sentence);


//Exercise 2 - part I
let myWatchedSeries = ["Black Mirror", "Money Heist", "the big bang theory"];
myWatchedSeries[2] = " and the Big Bang Theory"
let myWatchedSeriesLength = 3;

const myWatchedSeriesSentence = `I watched ${myWatchedSeriesLength} series : ${myWatchedSeries}`;
console.log(myWatchedSeriesSentence);

//Exercise - part II

let myWatchedSeries1 = [" Black Mirror", " Money Heist", " the big bang theory"];
myWatchedSeries1[2] = " Friends";
myWatchedSeries1.push(" and The House of the Dragon");
myWatchedSeries1.splice(0,0, "The Handmaid's Tale");
let myWatchedSeriesLength1 = 5;

const myWatchedSeriesSentence1 = `I watched ${myWatchedSeriesLength1} series : ${myWatchedSeries1}`;

console.log(myWatchedSeriesSentence1);




//Exercise 3

const tempC = prompt("what temperature in Celcius do you want to convert?");
//const tempC = 12;
const tempF = tempC/5*9+32;

console.log(tempF);


///////Exercise 4
// let c;
// let a = 34;
// let b = 21;

// console.log(a+b) //first expression
// Prediction: 55
// Actual:55

// a = 2;

// console.log(a+b) //second expression
// Prediction: 23
// Actual: 23


/////////Exercise 5

//typeof(15)
// Prediction: Number
// Actual: number

//typeof(5.5)
// Prediction: Number
// Actual: number


//typeof(NaN)
// Prediction: Null
// Actual: number

//typeof("hello")
// Prediction:String
// Actual:

//typeof(true)
// Prediction:Boolean
// Actual:Boolean

//typeof(1 != 2)
// Prediction: Boolean
// Actual:Boolean

//"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

//"hamburgers" - "s"
// Prediction: hamburger
// Actual: NaN

//"1" + "3"
// Prediction: 13
// Actual: 13

//"1" - "3"
// Prediction: 1
// Actual: -2

//"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

//"johnny" - 5
// Prediction: johnny
// Actual: NaN

//99 * "hello"
// Prediction: 99hello
// Actual: NaN

//1 != 1
// Prediction: false
// Actual: false

//1 == "1"
// Prediction: true
// Actual: true

//1 === "1"
// Prediction false
// Actual: false

//////////Exercise 6

//5 + "34"
// Prediction:534
// Actual: 534

//5 - "4"
// Prediction:NaN
// Actual: 1

//10 % 5
// Prediction:2
// Actual: 0

//5 % 10
// Prediction:.5
// Actual: 5

//"Java" + "Script"
// Prediction:JavaScript
// Actual: JavaScript

//" " + " "
// Prediction:'''
// Actual:''

//" " + 0
// Prediction:0
// Actual:' 0'

//true + true
// Prediction:true
// Actual: 2

//true + false
// Prediction:1
// Actual: 1

//false + true
// Prediction:1
// Actual: 

//false - true
// Prediction:-1
// Actual: -1

//!true
// Prediction:1
// Actual: false

//3 - 4
// Prediction: -1
// Actual: -1

//"Bob" - "bill"
// Prediction: NaN
// Actual:NaN