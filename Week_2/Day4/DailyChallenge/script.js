// // // //Prompt the user for several words (separated by commas).
// // // Put the words into an array.
// // // Console.log the words one per line, in a rectangular frame as seen below.
// // // Check out the Hints and Requirements below.
// // // For example, if the user gives you:
// // // Hello, World, in, a, frame
// // // you will transform it to : ["Hello", "World", "in", "a", "frame"]
// // // that will get displayed as:

// // Hint
// // The number of stars that wraps the sentence, must depend on the length of the longest word.


// const answer = prompt("Please enter five words for a test and seperate each word with a comma:").split(",")

// // const words = answer.splice(",");
// //split not working!
// const words = answer.split(",");


// // console.log(words);
// const lengthOfLongestWord = getLengthOfLongestWord();
// displayRows();

// function displayRows(){
//     const delimiterRow = createdelimiterRow();
//     console.log(delimiterRow);
// for (const word of words){
//     displayWord(word);
// }
//     console.log("delimiterRow:", delimiterRow);

// }

// function displayWord(word){
//     console.log("* " + word )
// }


// function createdelimiterRow(){
//     const numberOfStarsOnFirstRow = lengthOfLongestWord +4;   
//     let row ="";
//     for (let i = 0; i < numberOfStarsOnFirstRow; i++) {
//         row = row + "*";
//     }
// }

// function getLengthOfLongestWord(){
//     let lengthOfLongestWord = 0;
//     for (const word of words){
//         console.log(word);
//         const wordLength = word.length
//         if (wordLength > lengthOfLongestWord){
//             lengthOfLongestWord = wordLength; 
//         }
//         console.log("lengthOfTheLongestWord", lengthOfLongestWord)
//     }
//     return lengthOfLongestWord
// }

// // OTHER WAY
// let answer = [];
// for(var i = 0; i < 5; i++)
//    answer.push(prompt("Enter a word:"))

//    console.log(answer[0])
//    console.log(answer[1])
//    console.log(answer[2])
//    console.log(answer[3])
//    console.log(answer[4])


const answer = prompt("Please enter five words for a test and seperate each word with a comma:").split(",")
let words = answer.split();
// const words= answer.split(","); //Problem with split


function findLongestWord(){
    let max = 0;
    for (let i = 0; i < words.length; i++){
        if (words[i].length > max){
        max = words[i].length;
        }
    }
    return max;
}

function printWords(words,max){
    firstAndLast(max);
    for (let word of words){
    console.log(`* ${word+ ' '.repeat(max - word.length)}*`);
}
}
firstAndLast(max);

function firstAndLast(max){
console.log ('*'.repeat(max+4));
}
printWords(words,findLongestWord());
