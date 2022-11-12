function makeAllCaps(wordsArray){
    const isString = new Promise((resolve, reject) => {
        if(wordsArray.every(w=> typeof(w)=="string")){
            const uCarr = wordsArray.map(v=>v.toUpperCase());
                resolve(uCarr)
            } else{
                reject("some of the elements aren't string")
            }
    })
    return isString
}

function sortWords(wordsArray){
    const isLength = new Promise((resolve, reject) =>{
        if(wordsArray.length > 4){
            wordsArray.sort();
            resolve(wordsArray)
        } else {
            reject ('less than 4 items in the list')
        }
    }) 
    return isLength
}




//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))



///////////////////////////////////////
// 2nd Daily Challenge

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

function toJs(json){
        const jsToObj = JSON.parse(json);
        const prom1 = new Promise((resolve, reject) => {
            if (Object.keys(jsToObj).length == 0){ // object is empty
                reject('JSON is empty')  
            } else{
                resolve(jsToObj)
            }
        })
        return prom1
}
toJs(morse)
.then((res) => console.log(res))

function toMorse(morseJS, word){
    const wordArr = word.split("");
    let morseArr =[];
    if(letter in morseJS){
        morseArr.push(morsejs[letter])
    }
}



toJS(morse)
.then((morseJS) => toMorse(morseJS, "hello"))