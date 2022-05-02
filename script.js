

function playRound () {

    function compInput() {
        let comp = Math.floor(Math.random() * 3);
        if (comp === 0) {
            return 'Rock';
        } else if (comp === 1) {
            return 'Paper';
        } else {
            return 'Scissors';
        }
    }

    function userInput(input) {
        return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    }

    let user = userInput(prompt("Input your selection"));

    if (user === 'Rock') {
        if (compInput() === 'Rock') {
           // alert('Tie. Try again')
            return 'tie';
        } else if (compInput() === 'Paper') {
            //alert('You lose. Try again')
            return 'loss';
        } else if (compInput() === 'Scissors') {
            //alert('You win the round!')
            return 'win';
        }
    } else if (user === 'Paper') {
        if (compInput() === 'Rock') {
            //alert('You win the round!')
            return 'win';
        } else if (compInput() === 'Paper') {
            //alert('Tie. Try again')
            return 'tie';
        } else if (compInput() === 'Scissors') {
            //alert('You lose. Try again')
            return 'loss';
        }
    } else if (user === 'Scissors') {
        if (compInput() === 'Rock') {
           // alert('You lose. Try again')
            return 'loss';
        } else if (compInput() === 'Paper') {
            //alert('You win the round!')
            return 'win';
        } else if (compInput() === 'Scissors') {
            //alert('Tie. Try again')
            return 'tie';
        }
    }
}


function game () {
    let userWins = 0
    let compWins = 0
    
    for (let i = 0; i < 5; i++) {

        if (userWins === 3) {
            return "You win"
        } else if (compWins === 3) {
            return "You lose"
        } else {
            if (playRound() === 'win') {
                console.log('win')
                userWins++
                alert("You win the round!");
            } else if (playRound() === 'lose') {
                console.log('loss')
                compWins++
            } else {
                console.log('tie')
            }
        }
    }
    if (userWins.length >= 2) {
        alert('Congratulations! You win the game!');
    } else {
        alert('Sorry, you lost. Better luck next time');
    }
}