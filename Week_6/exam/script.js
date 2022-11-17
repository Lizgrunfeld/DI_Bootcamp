// Answers
//1.How to access the second element of the array const nums = [3, 7, 10]

// ANSWER
// console.log(nums[1]) || const numsSelect = nums[1]

const nums = [3, 7, 10]
console.log(nums[1])

//2.For the code below, what does arrNums.splice(2, 0) return?*

// ANSWER
//arrNums = [] or arrNums = [1,2,3,4,5]

const arrNums = [1, 2, 3, 4, 5];
let spliceNum = arrNums.splice(2, 0);
console.log(arrNums)
console.log(spliceNum)


//3 What is the result of the following code

// ANSWER
// favoriteNumbers = [4,5,6,1,2,3,7,8,9]

const bestNumbers = [1, 2, 3]
const secondBestNumbers = [7, 8, 9]

const favoriteNumbers = [4, 5, 6, ...bestNumbers, ...secondBestNumbers];
console.log(favoriteNumbers)

// 4.What does the following code print to the console?

// ANSWER
// Real Madrid

const football1 = {
    type: "sport",
    clubs: {
      france : "Paris Saint-Germain",
      spain : "Atlético Madrid",
    }
  }  
  
  football1.clubs.spain = "Real Madrid";
  console.log(football1.clubs.spain);

//   5.What does the following code print to the console?

// ANSWER
// //  clubs: {
//     france : "Paris Saint-Germain",
//     spain : "Atlético Madrid",
//     bestTeam : "France national football team"
//   }

const myteam = "bestTeam";

const football = {
  type: "sport",
  clubs: {
    france : "Paris Saint-Germain",
    spain : "Atlético Madrid",
  }
}  

football.clubs[myteam] = "France national football team";
console.log(football.clubs);


// 6. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.****

// ANSWER
//function expression
//to invoke :  x(3,4)

// const x = function(a, b){
//     return a*b;
//  }


//  7. Variables created without any keyword, are always global, even if they are created inside a function ?
//Yes or No and explain

// ANSWER
//yes without a CONST,LET,VAR a becomes windows.a which is global

// function x() {
// 	a = 5;
// }


// 8. In JavaScript can we pass functions as arguments to other functions? What does this code return ?

// ANSWER
// Hello, Javascript!

function sayHello() {
    return "Hello, ";
 }
 function greeting(helloMessage, name) {
   console.log(helloMessage() + name);
 }
 greeting(sayHello, "JavaScript!");

//  9. Transform this function into an arrow function

// ANSWER

// const sum1 = (num1,num2) => num1 + num2;
// sum1(3,4)
// console.log("the answer to everything is", sum1(3,4))
// //

function sum(num1, num2){
    return num1 + num2
}

sum(40,2)
sum(42,0)
console.log("the answer to everything is", sum(42,0))

// 10.What does the following code print to the console? Explain the process and concept behind it

//ANSWER
// "Poppin' bottles" - the function bar which holds the phrase popping bottles in within foo. when foo is called bar is called.

function foo () {
    function bar() {
      return "Poppin' bottles";
    }
    return bar();
  }
  
  console.log(foo());

//   11.Which of the following events will you add in the addEventListener()method? ☐ click ☐ onclick

//ANSWER
//click
//onclick is an attribute set in html

//12.Does the addEventListener() method allow you to add many events to the same element?

//yes

// x.addEventListener("mouseover", func1);
// x.addEventListener("click", func2);
// x.addEventListener("mouseout", func3);

// 13.DOM exercise*******PART 2

// Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM with the content "New Paragraph".
//  Use arrow functions.

const buttonCreate = document.getElementById('btn');


const changeColor = (event) => {
    console.log("event.target", event.target);
    event.target.style.color ="red";
}


const createContent = () => {
    const section = document.getElementById("body");
    const parNew = document.createElement("p");
    const parText = document.createTextNode("New Paragraph");
    parNew.addEventListener("mouseover", changeColor);
    parNew.appendChild(parText);
    section.appendChild(parNew);

}


buttonCreate.addEventListener("click", createContent);



// Part II : Add to each new paragraph, an event listener of mouse over. When you hover on a paragraph, 
// the paragraph should become red (ie. color of the text).


//14.Do this exercise twice: 
//first with a for loop, then with a for of loop. Console.log the sum of this array


//ANSWER BELOW
const marks = [67, 60, 89, 90, 67, 42];
for ( i=0; i < marks.length; i++){
    console.log(marks[i])
}

const marks2 = [67, 60, 89, 90, 67, 42];
for (let m of marks2){
    m += 1;
    console.log(m);
}

// 15. What is the value of passed in the following code?

//ANSWER 
//FALSE

const marks3 = [67, 60, 89, 90, 67, 42];

const passed = marks3.every(function(m) {
   return m >= 50;
});
console.log(passed)

// 16. What does the following code log?

//ANSWER
// [50,88]

const nums2 = [10, 50, 88];

const bignums = nums2.filter(function(n) {
   return n > 10;
});

console.log(bignums);

// 17.Use a javascript array method to square the value of every element in the array.
// **** how to change my loop result into the original array???

const input = [ 1, 2, 3, 4, 5 ];
const newArr = input.map(squared)

function squared(num) {
  return num * num;
}
console.log(newArr)

// for (let n of input){
//     n *= n;
//     console.log(n);
// }
// console.log(input)

// console.log(input) // [ 1, 4, 9, 16, 25]

//18.Use 2 javascript array methods and chain them to return the sum of all the positives ones.

//ANSWER
const secondInput = [ 1, -4, 12, 0, -3, 29, -150];

const positive =[];
const negative =[];

secondInput.forEach(function(num){
    if (num <0){
        negative.push(num);
    } else {
        positive.push(num)
    }
});

const total = positive.reduce((accumulator, value) =>{
return accumulator + value;
}, 0);

console.log(positive)
console.log(negative)
console.log(total);
//code
// console.log(total) //42

// 19. Use 3 javascript methods and chain them to abbreviate the name and return 
// the name initials.


//ANSWER
const input4 = 'George Raymond Richard Martin';
function initials(name){
    return (
       input4 
       .split(' ')
       .map((name) => name[0].toUpperCase())
       .join(".")
    );
}

console.log(initials(input4))//'GRRM'


// 20.How objects are passed to a function in JavaScript? By Value or By Reference ? 

//Answer:Reference

// Explain in detail, using the below example:

//myshirt is the expected object to be passed into the function
//you access properties of the shirt with the information inside the function
//you are referencing the expect object not setting its value in advance




function changeTshirt (myshirt){
    console.log("myshirt", myshirt);
    myshirt.color = "red"
    console.log("myshirt", myshirt); //this is the parameter
    tshirt.color = "blue",
    console.log("tshirt", tshirt);   //this is the global variable
}

const tshirt = {
  color : "blue",
  price : 10
}

changeTshirt(tshirt)

// 21.How would you change the code above, so that when you modify the key color from the 
// parameter myshirt, it won't change the global variable tshirt ?

//Answer
//I would add a tshirt.color ="blue" attribute within the function

//22. Use object destructuring to retrieve the value of the keys france and spain

const football6 = {
  type: "sport",
  clubs: {
    france : "Paris Saint-Germain",
    spain : "Atlético Madrid",
  }
} 


//ANSWER
const clubFrance = football6.clubs.france;
console.log(clubFrance)
const clubSpain = football6.clubs.spain;
console.log(clubSpain)


// #23. Use object destructuring in the function to retrieve the value of the keys france and spain*******

// function retrieveSports (obj) {
//   const sentence = `My favorite football teams are ${franceTeam} and ${spainTeam}`;
//   console.log(sentence);
// }

// const football7 = {
//    type: "sport",
//    clubs: {
//      france : "Paris Saint-Germain",
//      spain : "Atlético Madrid",
//    }
//  } ;

//  const obj = {
//   type: "sport",
//   clubs: {
//     france : franceTeam,
//     spain : spainTeam,
//   }
// }  = football7;

// retrieveSports(football7)

// NO ANSWER, COULDNT SOLVE

// 24. What will be printed in the console

class Item {
  constructor(nameProduct, priceProduct) { 
        this.name = nameProduct;
        this.price = priceProduct;
  }

  displayInfo () {
       console.log(this.name + " is for $ " + this.price)
  }
} 

const cake = new Item("Chocolate Cake", 10);
cake.displayInfo();

//Answer 
// "Chocolate Cake is for $10"

// 25. What will be the output and why ? What will be the state of the promise ?

Promise.resolve('Success!')
  .then(data => {
    return data.toUpperCase()
  })
  .then(data => {
    console.log(data)
  })


  //Answer
// "SUCCESS!"
// State: Fufilled
// resolved is called immediately  and gives a have a resolved promise. the .toUpperCase() then it is done


// 26.What will be displayed by the following code, after 2 seconds?

const p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
     resolve("OK");
  }, 2000);
});

p2.then().then(function(data) {
  console.log(data);
});

//ANSWER 
// "OK"
//promised fufilled

// 27. Consider the following async function and its output.
// What will be displayed to the console when calling the test() function? Explain the process

async function test() {
  let result = 'first!';
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });

  result = await promise;

  console.log(result);
}

test();

//ANSWER
// 2 second wait until done! resolved is printed
// the function test will run, there will be a 1 second 
// wait before the resolve is acheived due to the await
//suspending the function until the settimeout hits 1. 
// this makes it 1 + 1 so 2 seconds total to resolve with a done! message
// await literally suspends the function execution until the promise settles/


// 28.Use async await, and fetch a fact on cats and display it. 
// Use this third party API : https://catfact.ninja/fact


//ANSWER
///I am having trouble passing the catText into the create TextNode



document.getElementById("catBtn").addEventListener("click", createOnPage);

async function getCat(){
  const results = await fetch("https://catfact.ninja/fact");
  if (results.status !== 200){
    throw new Error ("Sorry no cats for you")
  } else{
    const cat = await results.json();
    // console.log(cat);
    const catText = cat.fact
    console.log(catText)
    return catText;
  }
}
getCat()


function createOnPage(fact){
    const body1 = document.getElementById("body");
    fact.forEach(info => {
      const para1 = document.createElement("p");
      const catText1 = document.createTextNode(catText);
      body1.appendChild(para1);
      para1.appendChild(catText1);
  });
}

createOnPage()