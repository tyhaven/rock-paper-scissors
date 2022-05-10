
    //toggle dark mode
    let element = document.querySelector('input')
    let colorButtons = document.querySelectorAll('button')
    let body = document.body
    element.addEventListener('click', () =>{
        body.classList.toggle('darkMode')
        for (let i = 0; i < colorButtons.length; i++) {
            colorButtons[i].classList.toggle('light')
        }

    })

//blank variable to take user selection
let user = ''

    let text = document.querySelector('#result')
    let center = document.querySelector(".center")

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

    if (count1 >= 5 || count2 >= 5) {
        return
    } else {

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
    let winCase = ''

    //Compare user and comp input and return win state for user
    if (user === 'Rock') {
        if (compIn === 'Rock') {
            text.textContent = "It's a tie";
            winCase = 'tie'
        } else if (compIn === 'Paper') {
            text.textContent = `You lose. ${compIn} beats ${user}`;
            winCase = 'loss'
        } else if (compIn === 'Scissors') {
            text.textContent = `You Win! ${user} beats ${compIn}`;
            winCase = 'win'
        }
    } else if (user === 'Paper') {
        if (compIn === 'Rock') {
            text.textContent = `You Win! ${user} beats ${compIn}`;
            winCase = 'win'
        } else if (compIn === 'Paper') {
            text.textContent = "It's a tie";
            winCase = 'tie'
        } else if (compIn === 'Scissors') {
            text.textContent = `You lose. ${compIn} beats ${user}`;
            winCase = 'loss'
        }
    } else if (user === 'Scissors') {
        if (compIn === 'Rock') {
           text.textContent = `You lose. ${compIn} beats ${user}`;
           winCase = 'loss'
        } else if (compIn === 'Paper') {
            text.textContent = `You Win! ${user} beats ${compIn}`;
            winCase = 'win'
        } else if (compIn === 'Scissors') {
            text.textContent = "It's a tie";
            winCase = 'tie'
        }
    }

    let player = document.getElementById('player')
    player.textContent = count1
    let comp = document.getElementById('comp')
    comp.textContent = count2

        if (winCase === 'tie') {
            return
        } else if (winCase === 'loss') {
            comp.textContent = ++count2
        } else if (winCase === 'win') {
            player.textContent = ++count1
        }

        let btn = document.createElement('button')
        btn.classList.add('newGame')
        btn.classList.add('btnStyle')
        btn.addEventListener('click', () => {
            count1 = 0
            count2 = 0
            player.textContent = 0
            comp.textContent = 0
            text.textContent = ''
            center.removeChild(btn)
        });

        if(count1 === 5) {
            text.textContent = "You Win The Game!!!"
            btn.textContent = 'Play again'
            center.appendChild(btn)
        }  else if (count2 === 5) {
            text.textContent = 'Sorry, you lost the game:('
            btn.textContent = 'Try again'
            center.appendChild(btn)
        } 
     
    }
}

     
     

