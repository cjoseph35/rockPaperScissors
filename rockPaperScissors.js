

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

    if(result=="win"){
        console.log("Good job! You won the round!", humanChoice, " beats ", compChoice, "!");
    };
    if(result=="loss"){
        console.log("Oh no!! You lost the round!", compChoice, " beats ", humanChoice, "!");
    };

    return result; 
}

function playGame(){
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
}

playGame();