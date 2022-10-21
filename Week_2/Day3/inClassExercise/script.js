for (let i = 0; i <= 15; i++) {
    if(i%2 == 0){
        console.log(`The number ${i} is even` );
    }
    else{
        console.log(`The number ${i} is odd`);
    }
}


// //EX 2 -HELP http://learn.di-learning.com/courses/collection/6/course/10/section/35/chapter/121#

let names= ["john", "sarah", 23, "Rudolf",34];


for (let i = 0; i < names.length; i++){
    if (typeof names[i] !== 'string') {
        continue;
    } else {
        if (names [i][0] !== names[i][0].toUpperCase()){
            names[i] = names[i][0].toUpperCase() + names[i].slice(1);
            console.log(names[i])
        }
      else{
        console.log(names[i])
      }
    }
}

for(let i = 0; i <names.length; i++){
    if (typeof names[i] !== 'string'){
        break
    }
    else{
        console.log(names[i])
    }
}


// let onlyName = names.filter(
//     Element => typeof Element === "string");

//     function firstIsUppercase(onlyName) {
//         if (typeof onlyName !== "string" || onlyName.length === 0){
//             return false;
//         }
//     }
//         if (onlyName[0].toUpperCase() === onlyName[0])
//         return true;}


//     console.log(onlyName);



