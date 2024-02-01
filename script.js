let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


// Write your code below:
//--------------------STEP 3---------------------//
generateTarget = () => {
    return Math.floor(Math.random() * 9);
};
// Testing the generateTarget function
console.log(generateTarget());

//--------------------STEP 4---------------------//
compareGuesses = (human, computer, target) => {
    if (Math.abs(human === computer)) {
        return true;
    } else if (Math.abs(human > computer)) {
        return true;
    } else if (Math.abs(computer < human)) {
        return false;
    } else if (Math.abs(human === target)) {
        return true;
    } else {
        return "Error!!! Something is wrong";
    }
};
// Testing compareGuesses function
//console.log(compareGuesses());

//--------------------STEP 5---------------------//
updateScore = winner => {
    if (winner === "human") {
        humanScore += 1;
    } else if (winner === "computer") {
        computerScore += 1;
    } else {
        return "Error!!! Please check your code";
    }
};

//--------------------STEP 6---------------------//
advanceRound = () => {
    currentRoundNumber += 1;
};
