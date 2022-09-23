let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const message = document.getElementById("message");
const RollBtn = document.getElementById("rollBtn");
const ResetBtn = document.getElementById("resetBtn");
const player1Scoreboard = document.getElementById("player1-scoreboard");
const player2Scoreboard = document.getElementById("player2-scoreboard");
const player1Dice = document.getElementById("player1-dice");
const player2Dice = document.getElementById("player2-dice");


RollBtn.addEventListener("click", function(){
    rollDice()

    if(player1Score > 20){
        message.textContent = "Player 1 Won🥳"
        ShowResetBtn();
    }
    if(player2Score > 20){
        message.textContent = "Player 2 Won🥳"
        ShowResetBtn();
    }
    player1Turn = !player1Turn
})

ResetBtn.addEventListener("click", function(){
    resetGame()    
})


// ************************************ FUNCTIONS *****************************/

function ShowResetBtn(){
    RollBtn.style.display = "none";
    ResetBtn.style.display = "block";
}

function rollDice(){
    const randomNumber = Math.floor(Math.random()*6)+1;
    if(player1Turn){
        player1Score += randomNumber;
        player1Dice.textContent = randomNumber;
        player1Scoreboard.textContent = player1Score;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber;
        player2Dice.textContent = randomNumber;
        player2Scoreboard.textContent = player2Score;
        activeDice1()
        message.textContent = "Player 1 Turn"
    }
}

function resetGame(){
    player1Score = 0
    player2Score = 0
    player1Turn = true

    player1Scoreboard.textContent = 0;
    player2Scoreboard.textContent = 0;

    player1Dice.textContent = "-";
    player2Dice.textContent = "-";
    
    message.textContent = "Player 1 Turn";
    RollBtn.style.display = "block";
    ResetBtn.style.display = "none";
    if(player1Turn){ 
        activeDice1()
    }
}


function activeDice1(){
    player1Dice.classList.add("active")
    player2Dice.classList.remove("active");
}