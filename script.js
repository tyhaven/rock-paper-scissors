

let user = ''

  






    let text = document.querySelector('#result')
    let buttons = document.querySelectorAll('button')
       buttons.forEach(button => { 
        button.addEventListener('click', () => {
            user = button.textContent
            playRound()
        })
    });


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

    if (user === 'Rock') {
        if (compInput() === 'Rock') {
           // alert('Tie. Try again')
            text.textContent = 'tie';
        } else if (compInput() === 'Paper') {
            //alert('You lose. Try again')
            text.textContent = 'loss';
        } else if (compInput() === 'Scissors') {
            //alert('You win the round!')
            text.textContent = 'win';
        }
    } else if (user === 'Paper') {
        if (compInput() === 'Rock') {
            //alert('You win the round!')
            text.textContent = 'win';
        } else if (compInput() === 'Paper') {
            //alert('Tie. Try again')
            text.textContent = 'tie';
        } else if (compInput() === 'Scissors') {
            //alert('You lose. Try again')
            text.textContent = 'loss';
        }
    } else if (user === 'Scissors') {
        if (compInput() === 'Rock') {
           // alert('You lose. Try again')
           text.textContent = 'loss';
        } else if (compInput() === 'Paper') {
            //alert('You win the round!')
            text.textContent = 'win';
        } else if (compInput() === 'Scissors') {
            //alert('Tie. Try again')
            text.textContent = 'tie';
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
            let temp = playRound()
            if (temp === 'win') {
                console.log(temp)
                userWins++
            } else if (temp === 'loss') {
                console.log(temp)
                compWins++
            } else {
                console.log(temp)
            }
        }
    }
    if (userWins > compWins) {
        alert('Congratulations! You win the game!');
    } else if (compWins > userWins) {
        alert('Sorry, you lost. Better luck next time');
    } else {
        alert('Tie')
    }
}