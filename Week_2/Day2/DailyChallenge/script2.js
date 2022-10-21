//1.Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.

const sentence = "The movie is not that bad, I like it"

// 2.Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

let wordNot= sentence.indexOf("not");

// 3.Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).

let wordBad= sentence.indexOf("bad");

// 4.If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be : “The movie is good, I like it”

let subs;
if(wordBad > wordNot && wordBad !== -1){
    subs = sentence.substring(wordNot,wordBad+3);
    sentence = sentence.replace("good");kl-pkpjo
}