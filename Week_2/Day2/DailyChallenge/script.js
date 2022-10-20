//Daily Challenge: Not Bad
// Instructions
// 1.Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.

// 2.Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

// 3.Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).

// 4.If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be : “The movie is good, I like it”
// 5.If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.

// Your string is : 'This dinner is not that bad ! You cook well', 
// --> the result is : 'This dinner is good ! You cook well'

// Your string is : 'This movie is not so bad !' 
// --> the result is : 'This movie is good !'

// Your string is : 'This dinner is bad !' 
// --> the result is : 'This dinner is bad !'

// const sentence = "The movie is not that bad, I like it"

// const wordNot = sentence.substr(13,3);
// const wordBad = sentence.substr(22,3);


const sentence = "The movie is not that bad, I like it"

const wordNot = sentence.search("not");
const wordBad = sentence.search("bad");

const firstPart = sentence.slice(0, wordNot)
const secondPart = sentence.slice(wordBad + 3)

console.log(firstPart + "good" + secondPart)

// if (wordNot > wordBad){
// const firstPart = sentence.slice(0, wordNot)
// const secondPart = sentence.slice(wordBad + 3)
// console.log(firstPart + "good" + secondPart)}
// else{
//     console.log(sentence)
// }
