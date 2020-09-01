/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

//UI Variables

let player1 
let player2

init()

//Roll Dice Event Listener
document.querySelector('.btn-roll').addEventListener('click', function() {
    
    //Random Number Generate
      let dice = Math.floor(Math.random() * 6) + 1
      
    //Display the result
    let diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block'

    diceDOM.src = '/images/dice-' + dice + '.png'
    

    //Update the round score If the rolled number was NOT a 1
    if(dice !== 1){
        //Add score
        roundScore += dice
        //roundScore = roundScore + dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore
    } else {
        //Ternary Operator
        //activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
        //Next player
        nextPlayer()

    }
})

//Hold Event Listener
document.querySelector('.btn-hold').addEventListener('click', function() {
  //Add CURRENT to GLOBAL score
  scores[activePlayer] = scores[activePlayer] + roundScore

  //Update the UI 
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

  //Check if player won the game
  if(scores[activePlayer] >= 100) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
    document.querySelector('.dice-').style.display = 'none'
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
  } else {
    //Next player
      nextPlayer()
  }  
})


//Next player
function nextPlayer() {  
  if(activePlayer === 0) {
    activePlayer = 1
  } else {
    activePlayer = 0
  }
  roundScore = 0
  //Make current score 0 for active player
  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'

  //Highlighting the current active player
  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')

  // document.querySelector('.player-0-panel').classList.remove('active')
  // document.querySelector('.player-1-panel').classList.add('active')

  document.querySelector('.dice').style.display = 'none'
}


//New Game Event Listener
document.querySelector('.btn-new').addEventListener('click', function() {
    init()
})

function init() {
  let scores = [0,0]

  let roundScore = 0

  let activePlayer = 0

  document.querySelector('.dice').style.display = 'none'

  document.getElementById('score-0').textContent = '0'
  document.getElementById('score-1').textContent = '0'
  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'
}