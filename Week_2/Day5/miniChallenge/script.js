//Part 1

function playTheGame(){
    const enter = confirm("Would you like to play the game?");
    if(enter=== false){
        alert("No problem, Goodbye")
    } else {
        // function getNumber{
            let numUser = Number(prompt("Enter a number between 0 and 10"))
            let numberCheck = isNaN(numUser);

             if (numberCheck == true){
                alert("Sorry not a good number, Goodbye")
            } else if (numUser >= 0 && numUser <= 10) {
                let compNum = Math.floor((Math.random() * 10));
                compareNumbers(numUser, compNum);
            } else {
                alert("Sorry, you didn't enter a number, Goodbye")
            }
        }
        
        function compareNumbers(numUser, compNum){
            let i = 0
            for (i = 0; i < 3; i++)
            if (numUser == compNum){
                alert("WINNER")
            } else if (numUser > compNum) {
                alert("Your number is bigger then the computers, guess again")
                let numUser = prompt("enter a new number please")
            } else if (numUser < compNum) {
                alert("Your number is smaller then the computers, guess again")
                let numUser = prompt("enter a new number please")
            }
        }

            // console.log(numUser,compNum)

    }
    

        // return getNumber();


//Part 2

// function compareNumbers(numUser,compNum){
//     let results = "";
    // for(i = 0; i < 4; i++)
//     if (numUser=== compNum){
//         alert("WINNER")
//         return
//     } else if (numUser > compNum){
//         alert("Your number is bigger then the computers, guess again");
//         const newNumber = prompt("Please enter a new number");
//     } else if (numUser< compNum){
//         alert("Your number is smaller then the computers, guess again");
//         const newNumber = prompt("Please enter a new number");
//     }
//  return compareNumbers();

// }
// // }

// // playTheGame()