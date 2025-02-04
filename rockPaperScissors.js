const WIN_THRESH = 5;

function getComputerChoice(){
    let compChoice = Math.random();
    let selection = "rock";
    if(compChoice<=.334){
        selection = "scissors";
    }
        else if(compChoice<=.667){
            selection = "paper";
        }

    return selection
}

function getHumanChoice(){
    let userChoice = prompt("Enter your selection of rock, paper, or scissors!");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

function playRound(humanChoice, compChoice){
    console.log(humanChoice,compChoice);
    let result = "tie"
    if(humanChoice==compChoice){
        console.log("You both picked ", humanChoice, "! It's a draw!");
        return result;
    }

    if(humanChoice=="rock"){
        if(compChoice=="paper"){
            result = "loss";
        } else if(compChoice=="scissors"){
            result="win";
        };
    }

    if(humanChoice=="paper"){
        if(compChoice=="rock"){
            result = "win";
        } else if(compChoice=="scissors"){
            result="loss"
        };
    }

    if(humanChoice=="scissors"){
        if(compChoice="rock"){
            result = "loss";
        } else if(compChoice="=paper"){
            result="win"
        };
    }

    updateScoreboard(result);
    return result; 
}
function checkForWinner(humanCount, compCount){
    winAnnounce = document.querySelector("#announcement");
    if(parseInt(humanCount)>=WIN_THRESH){        
        winAnnounce.textContent = "Congrats! You beat the computer!"
    }
    else if(parseInt(compCount)>=WIN_THRESH){
        winAnnounce.textContent = "Sorry! You lose!";
    }
    return null;
}

function updateScoreboard(result){
    if(result=="win"){
        humanCount = document.querySelector("#humScore");
        humanCount.textContent = parseInt(humanCount.textContent)+1;
        checkForWinner(humanCount.textContent,0);
    }
    else if(result=="loss"){
        compCount = document.querySelector("#compScore");
        compCount.textContent = parseInt(compCount.textContent)+1;
        checkForWinner(0,compCount.textContent);
    };
};

/*function playGame(){
    const gameCount = 5;
    let compWins = 0;
    let humanWins = 0;

    while(compWins<gameCount && humanWins<gameCount){
        let humanChoice = getHumanChoice();
        let compChoice = getComputerChoice();
        console.log("Starting next round...");
        roundResult = playRound(humanChoice, compChoice);
        if(roundResult=="win"){
            humanWins +=1;
        } else if(roundResult=="loss"){
            compWins +=1;
        }
        console.log("Your score:", humanWins, "// Computer's Score: ", compWins)
    };
    if(compWins > humanWins){
        console.log("I'm sorry... you lost to the computer.")
    }
    else{
        console.log("Congrats! You've beaten the program!");
    }

    return null;
}*/

let buttonGroup = document.querySelector('#rps-grouping');

buttonGroup.addEventListener("click", (event) => { 
    winAnnounce = document.querySelector("#announcement");
    if(winAnnounce.textContent==""){
        compChoice = getComputerChoice();
        playRound(event.target.id,compChoice);
    }
    else{
        winAnnounce.textContent = "Stop trying to play! IT'S OVER!"
    };
})
//playGame();