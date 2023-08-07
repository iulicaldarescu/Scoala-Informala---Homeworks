// Implement “play” function that is a “Rock, paper, scissors” game.

// Implementations notes:

// Create an array with all the possibilities (rock, paper, scissors);

// Pick a random option for Computer ( use Math.random);

// Pick a random option for User ( use Math.random);

// Apply game rules for both options (use if/else if structures)
// Calling “play()” function will display in console something like this:
// Computer choice: “Rock”
// User choice: “Paper”
// User wins!

const gameArray = ["Rock", "Paper", "Scissors"];

const computerPick = function (arr){
    
    return randomize(arr);
}


const playerPick = function(arr){
    return randomize(arr);
}


const randomize = function(arr){
    let randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
}

const play = function(player1, player2) {

    console.log("Computer choice: " + player1);
    console.log("User choice: " + player2);

    if(player1 === "Rock" && player2 === "Scissors"){
        return "Computer wins";

    }else if(player1 === "Rock" && player2 === 'Paper'){
        return "User wins";

    }else if(player1 === "Paper" && player2 === "Rock"){
        return "Computer wins";

    }else if(player1 === "Paper" && player2 === "Scissors"){
        return "User wins";

    }else if(player1 === "Scissors" && player2 === "Rock"){
        return "User wins";

    }else if (player1 === "Scissors" && player2 === "Paper"){
        return "Computer wins";

    }else if(player1 === player2){
        return "TIE, please draw again";
    }
}


console.log(play(computerPick(gameArray), playerPick(gameArray)));

