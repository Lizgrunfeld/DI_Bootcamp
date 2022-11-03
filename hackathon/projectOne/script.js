
let computerSequence =[];
let humanSequence =[];
let gameLevel = 0;

const startButton = document.querySelector("button");
const info = document.getElementById("button-info");
const tilesArray = document.getElementsByClassName("tile");

function randomColor(){
    const tiles = tilesArray
    const random = tiles[Math.floor(Math.random() * tiles.length)]
    nextRound(random.dataset.color)
    return random;
}

function nextRound(color){
    gameLevel += 1;
    // const nextSequence = [ComputerSequence];
    computerSequence.push(color);

}


function activateTile(color) {
    const tile = document.querySelector(`[data-color='${color}']`);
    // const sound = document.querySelector(`[data-sound='${color}']`);
  
    tile.classList.add('activated');

  
    setTimeout(() => {
      tile.classList.remove('activated');
    }, 300);
  }


// }

// function humanInput(){
    
// }

// function compareCompVsHuman(){
//     // if it doesnt match reset game and ALERT you have failed
// }



function NextTurn(nextSequence) {
    nextSequence.forEach((color, index) => {
        setTimeout(() => {
            activateTile(color);
        }, (index +1) * 600);
    });
}

function startGame(){
    startButton.classList.add('hidden');
    info.classList.remove('hidden');
    info.textContent = "wait for simon";

    let gameTitle= document.querySelector("h1");
    gameTitle.classList.add('hidden');
    // gameLevel.classList.remove('hidden');


    randomColor();
    // gameTitle = gameLevel.textContent; ///??////

}


startButton.addEventListener('click', startGame);




// function winnerEnd(){

// }