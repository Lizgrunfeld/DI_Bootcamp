
let answer = Number(prompt("Please enter a number:"));
const makeSong = song(answer);
let j = 0;
let calAnswer = answer - j;

function song(answer){

console.log("is this number more than one?", isplural(answer));

function whichWord(){

    const sentenceSingle =`${answer} bottles of beer on the wall
    ${answer} bottles of beer
     take ${j} down and pass it around
    ${calAnsweranswer}bottles of beer`
    return sentenceSingle;


    const sentencePlural =`${answer} bottles of beer on the wall
    ${answer} bottles of beer
     take ${j} down and pass them around
    ${calAnswer}bottles of beer`;

    return sentencePlural;

}

function isplural(){
    if (answer> 1){
        return true;
} else{
       return false;
}

function displaySong(){
    if (isplural == false){
    console.log(sentenceSingle);}
    else{
        console.log(sentencePlural);
    }

}

}

function countdownBeg(){
    let i = answer;
    while (i <= 99){
        console.log(`we now have ${i} bottles`);
        i --;
        }
        return  countdownBeg;
    }


function countup(){
    for (let j = 0; j <= 100 ; j++)
    do{
         console.log(`take ${j} down and pass it round`);
        j --;
        }
    while(j <0);
    }
    return countup;


}


console.log(displaySong)
