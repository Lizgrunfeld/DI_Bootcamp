//exercise 1 keyless car


alert("You must be over 18 to drive a car!");
let answer = prompt("What is your age?");

if (answer > 18) {
    console.log("Powering On. Enjoy the ride!");
} else if (answer == 18){
    console.log("Congratulations on your first year of driving. Enjoy the ride!");
} else{
    console.log("Sorry, you are too young to drive this car. Powering off");
}