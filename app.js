// Cacheing the Dom

// Storing all the elements from our HTML
// for future use. 

// Basically getting the functional elements
// we need and referencing them in JS

// Better Performance & makes sense

userScore = 0;
compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const choices_div = document.getElementsByClassName("choices");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


// glowCircles
// This function takes all of the options and 
// applies the glow feature to them. It works by
// getting the elemetns by their id and applying
// the glow. Then fades the animation. 
function glowCircles(user, glowType) {
    var a = ''
    var b = ''

    if (user === 'r') {
        document.getElementById('p').classList.add(glowType)
        document.getElementById('s').classList.add(glowType)
        a = 'p'
        b = 's'
    }
    else if (user === 'p') {
        document.getElementById('r').classList.add(glowType)
        document.getElementById('s').classList.add(glowType)
        a = 'r'
        b = 's'
    }

    else {
        document.getElementById('p').classList.add(glowType)
        document.getElementById('r').classList.add(glowType)
        a = 'p'
        b = 'r'
    }

    document.getElementById(user).classList.add(glowType)
    setTimeout(function () { document.getElementById(user).classList.remove(glowType) }, 300)
    setTimeout(function () { document.getElementById(a).classList.remove(glowType) }, 300)
    setTimeout(function () { document.getElementById(b).classList.remove(glowType) }, 300)
}


// getCompChoice
// This function determines the choice
// the computer will make. 
function getCompChoice() {
    const choices = ['r', 'p', 's']
    val = (Math.floor(Math.random() * 3))
    return choices[val]
}

// convertToWord
// This function coverts letters to
// words to be used in the DOM
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

// wins
// if the user wins, this function runs
// it updates the user score, the results, 
// and glows the circles
function wins(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWord(user) + " defeats " + convertToWord(computer) + ". You Win";

    glowCircles(user, "green-glow")

}

// lose
// if the user loses, this function runs
// it updates the computer score, the results, 
// and glows the circles
function lose(user, computer) {
    compScore++
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertToWord(computer) + " defeats " + convertToWord(user) + ". You Lose ";

    glowCircles(user, "red-glow")
}

// draw
// Updates the results and the circles
// glow gray
function draw(user, computer) {
    result_p.innerHTML = "Draw!"
    glowCircles(user, 'gray-glow')

}

// game
// This function is the game play of the
// game. 
function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice, compChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, compChoice);
            break;

    }

}



// Main Function
// Event listeners are added to the buttons and the
// game function runs based on the users selection
function main() {
    rock_div.addEventListener('click', function () {
        game("r")
    })

    paper_div.addEventListener('click', function () {
        game("p")

    })

    scissors_div.addEventListener('click', function () {
        game("s")

    })
}


// Running the app
main();