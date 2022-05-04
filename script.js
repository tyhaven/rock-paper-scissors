

//blank variable to take user selection
let user = ''

    let text = document.querySelector('#result')

    //assign R, P, or S to user variable
    let buttons = document.querySelectorAll('button')
       buttons.forEach(button => { 
        button.addEventListener('click', () => {
            user = button.textContent
            playRound()
        })
    });

    //Keep track of win count for player and comp
    let count1 = 0
    let count2 = 0

function playRound () {

    // generate number and assign it to rock, paper, or scissors
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
    let compIn = compInput()
    //Compare user and comp input and return win state for user
    if (user === 'Rock') {
        if (compIn === 'Rock') {
            text.textContent = 'tie';
        } else if (compIn === 'Paper') {
            text.textContent = 'loss';
        } else if (compIn === 'Scissors') {
            text.textContent = 'win';
        }
    } else if (user === 'Paper') {
        if (compIn === 'Rock') {
            text.textContent = 'win';
        } else if (compIn === 'Paper') {
            text.textContent = 'tie';
        } else if (compIn === 'Scissors') {
            text.textContent = 'loss';
        }
    } else if (user === 'Scissors') {
        if (compIn === 'Rock') {
           text.textContent = 'loss';
        } else if (compIn === 'Paper') {
            text.textContent = 'win';
        } else if (compIn === 'Scissors') {
            text.textContent = 'tie';
        }
    }

    let player = document.getElementById('player')
    player.textContent = count1
    let comp = document.getElementById('comp')
    comp.textContent = count2

    
        //Cehck if won game, else increase round count by one
     if(count1 === 5) {
         text.textContent = "You Win The Game!!!"
     }  else if (count2 === 5) {
         text.textContent = 'Sorry, you lost the game:('
     } else {
        
        if (text.textContent === 'tie') {
            return
        } else if (text.textContent === 'loss') {
            comp.textContent = ++count2
        } else if (text.textContent === 'win') {
            player.textContent = ++count1
        }
     }
}
