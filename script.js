const scoreBox1 = document.querySelector(".player-one .score");
const scoreBox2 = document.querySelector(".player-two .score");
const current1 = document.querySelector(".player-one .current div");
const current2 = document.querySelector(".player-two .current div");
const newGame = document.querySelector(".new-game");
const die = document.querySelector("#die");
const roll = document.querySelector("#roll");
const hold = document.querySelector("#hold");
const player1 = document.querySelector(".player-one");
const player2 = document.querySelector(".player-two");
let current = 0;
let turn1 = true;
let score1 = 0;
let score2 = 0;
let winner = document.querySelector("#winner");

function rollDie(){
    return Math.floor(Math.random()*7);
}

function addCurrent(number) {
    current += number;
    if (turn1) {
        current1.textContent = current;
    } else {
        current2.textContent = current;
    }
}

function endTurn() {
    if (turn1) {
        score1 += current;
        scoreBox1.textContent = score1;
        current1.textContent = 0;
        player1.style.border = "none";
        player2.style.border = "4px solid rgb(255, 100, 100)";
        turn1 = false;
        if (score1 >= 100) {
            winner.textContent = "Player One is the WINNER!!!!!"
            winner.style.display = "block";
        }
    } else {
        score2 += current;
        scoreBox2.textContent = score2;
        current2.textContent = 0;
        player2.style.border = "none";
        player1.style.border = "4px solid rgb(255, 100, 100)";
        turn1 = true;
        if (score2 >= 100) {
            winner.textContent = "Player Two is the WINNER!!!!!"
            winner.style.display = "block";
        }
    }
    current = 0;
}


newGame.addEventListener("click", function(){
    winner.style.display = "none";
    die.textContent = "↓";
    scoreBox1.textContent = 0;
    scoreBox2.textContent = 0;
    score1 = 0;
    score2 = 0;
    current1.textContent = 0;
    current2.textContent = 0;
    player1.style.border = "4px solid rgb(255, 100, 100)";
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
