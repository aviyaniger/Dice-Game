const playerOne = {
    side: document.querySelector(".player-one"),
    scoreBox: document.querySelector(".player-one .score"),
    currentBox: document.querySelector(".player-one .current div"),
    score: 0,
    myTurn: true,
    name: document.querySelector(".player-one .name")
}

const playerTwo = {
    side: document.querySelector(".player-two"),
    scoreBox: document.querySelector(".player-two .score"),
    currentBox: document.querySelector(".player-two .current div"),
    score: 0,
    myTurn: false,
    name: document.querySelector(".player-two .name")
}

let name1 = playerOne.name.textContent = prompt("enter first player's name:");
let name2 = playerTwo.name.textContent = prompt("enter second player's name");
const newGame = document.querySelector(".new-game");
const die = document.querySelector("#die");
const roll = document.querySelector("#roll");
const hold = document.querySelector("#hold");
let current = 0;
let winner = document.querySelector("#winner");

function rollDie(){
    return Math.floor(Math.random()*7);
}

function addCurrent(number) {
    current += number;
    if (playerOne.myTurn) {
        playerOne.currentBox.textContent = current;
    } else {
        playerTwo.currentBox.textContent = current;
    }
}

function endTurn() {
    if (playerOne.myTurn) {
        playerOne.score += current;
        playerOne.scoreBox.textContent = playerOne.score;
        playerOne.currentBox.textContent = 0;
        playerOne.side.style.border = "none";
        playerTwo.side.style.border = "10px solid rgb(255, 100, 100)";
        playerOne.myTurn = false;
        playerTwo.myTurn = true;
        if (playerOne.score >= 100) {
            winner.textContent = `${name1} is the WINNER!!!!!`
            winner.style.display = "block";
        }
    } else {
        playerTwo.score += current;
        playerTwo.scoreBox.textContent = playerTwo.score;
        playerTwo.currentBox.textContent = 0;
        playerTwo.side.style.border = "none";
        playerOne.side.style.border = "10px solid rgb(255, 100, 100)";
        playerOne.myTurn = true;
        playerTwo.myTurn = false;
        if (playerTwo.score >= 100) {
            winner.textContent = `${name2} is the WINNER!!!!!`
            winner.style.display = "block";
        }
    }
    current = 0;
}


newGame.addEventListener("click", function(){
    winner.style.display = "none";
    die.textContent = "↓";
    playerOne.scoreBox.textContent = 0;
    playerTwo.scoreBox.textContent = 0;
    playerOne.score = 0;
    playerTwo.score = 0;
    playerOne.currentBox.textContent = 0;
    playerTwo.currentBox.textContent = 0;
    playerOne.side.style.border = "10px solid rgb(255, 100, 100)";
});

roll.addEventListener("click", function(){
    myRoll = rollDie();
    switch (myRoll){
        case 1:
            die.textContent = "⚀";
            current = 0;
            endTurn();
            break;
        case 2:
            die.textContent = "⚁";
            addCurrent(2);
            break;
        case 3:
            die.textContent = "⚂";
            addCurrent(3);
            break;
        case 4:
            die.textContent = "⚃";
            addCurrent(4);
            break;
        case 5:
            die.textContent = "⚄";
            addCurrent(5);
            break;
        default:
            die.textContent = "⚅";
            addCurrent(6);
    }
});

hold.addEventListener("click", function(){
    endTurn();
});
