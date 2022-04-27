/* Algorithm

Generate computer input
    math.random 0 - 2
    assign 0-2 to rock, paper, scissors
    store in variable

Capture user input
    store in variable

Compare user to computer

    if user = rock
        if comp = rock
            tie
        if comp = paper
            comp win
        if comp = scissors
            user win
    
    if user = scissors
        if comp = rock
            user win
        if comp = paper
            comp win
        if comp = scissors
            tie

    if user = paper
        if comp = rock
            user win
        if comp = paper
            tie
        if comp = scissors
            comp win
*/

// function compInput() {
//     let comp = Math.floor(Math.random() * 3)
//     if (comp === 0) {
//         return 'Rock'
//     } else if (comp === 1) {
//         return 'Paper'
//     } else {
//         return 'Scissors'
//     }
// }

// function userInput(input) {
//     return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
// }

function playRound () {

    function compInput() {
        let comp = Math.floor(Math.random() * 3)
        if (comp === 0) {
            return 'Rock'
        } else if (comp === 1) {
            return 'Paper'
        } else {
            return 'Scissors'
        }
    }

    function userInput(input) {
        return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
    }

    let user = userInput(prompt("Input your selection"))

    if (user === 'Rock') {
        if (compInput() === 'Rock') {
            return 'tie'
        } else if (compInput() === 'Paper') {
            return 'loss'
        } else if (compInput() === 'Scissors') {
            return 'win'
        }
    } else if (user === 'Paper') {
        if (compInput() === 'Rock') {
            return 'win'
        } else if (compInput() === 'Paper') {
            return 'tie'
        } else if (compInput() === 'Scissors') {
            return 'loss'
        }
    } else if (user === 'Scissors') {
        if (compInput() === 'Rock') {
            return 'loss'
        } else if (compInput() === 'Paper') {
            return 'win'
        } else if (compInput() === 'Scissors') {
            return 'tie'
        }
    }
}

function game () {
    let userWins = []
    for (let i = 0; i < 5; i++) {
        if
    }
}