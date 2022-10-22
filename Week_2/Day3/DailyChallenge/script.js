
let pattern = "";
const star = "*";

for (let i = 1;  i<= 6; i++){
    // shortcut for below pattern += star
    pattern = pattern + star;
    console.log(pattern)
}


//other way

let patterntwo = "";

for (let i = 1;  i<= 6; i++){
    patterntwo = "*".repeat(i);
    console.log(patterntwo)
}

//result
// *
// **
// ***
// ****
// *****
// ******