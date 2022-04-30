let restart = document.querySelector('.restart-button');
let score = document.querySelector('.score');
let modal = document.querySelector('.modal');
let result = document.querySelector('.modal-content');
let choices = document.querySelectorAll('.choice');
let scoreBoard = {
  player: 0,
  computer: 0
};

// console.log(choices);

// event
choices.forEach(function(element) {
  element.addEventListener('click', play);
});

// play game
function play(event) {
  // console.log(event);

  let playerChoice = event.target.id;
  let computerChoice = getComputerChoice();
  let winner = getWinner(playerChoice, computerChoice);

  console.log(playerChoice, computerChoice, winner);

  showResult(winner, computerChoice);
};

// get computer choice
function getComputerChoice() {
  let random = Math.random();

  if(random <= 0.33) {
    return 'rock';
  } else if(random <= 0.66) {
    return 'scissors';
  } else {
    return 'paper';
  };
};

// get winner
function getWinner(player, computer) {
  if(player === computer) {
    return 'draw';
  } else if(player === 'rock') {
    if(computer === 'scissors') {
      return 'player';
    } else if(computer === 'paper') {
      return 'computer';
    }
  } else if(player === 'scissors') {
    if(computer === 'paper') {
      return 'player';
    } else if(computer === 'rock') {
      return 'computer';
    }
  } else if(player === 'paper') {
    if(computer === 'rock') {
      return 'player';
    } else if(computer === 'scissors') {
      return 'computer';
    };
  };
};

// open modal
function showResult(winner, computerChoice) {
  modal.style.display = 'block';

  if(winner === 'player') {
    // increase socre
    // scoreBoard.player++;
    scoreBoard.player = scoreBoard.player + 1;

    // show result
    result.innerHTML = `
      <h1>You Win!</h1>
      <i class="choice fa fa-hand-${computerChoice}-o fa-5x"></i>
      <p>Computer chose ${computerChoice}</p>
    `;
  } else if(winner === 'computer') {
    // increase socre
    // scoreBoard.computer++;
    scoreBoard.computer = scoreBoard.computer + 1;

    // show result
    result.innerHTML = `
      <h1>You Lose!</h1>
      <i class="choice fa fa-hand-${computerChoice}-o fa-5x"></i>
      <p>Computer chose ${computerChoice}</p>
    `;
  } else {
    result.innerHTML = `
      <h1>Draw!</h1>
      <i class="choice fa fa-hand-${computerChoice}-o fa-5x"></i>
      <p>Computer chose ${computerChoice}</p>
    `;
  };

  // show score
  score.innerHTML = `
    <p class="score-player">Player: ${scoreBoard.player}</p>
    <p class="score-computer">Computer: ${scoreBoard.computer}</p>
  `;
};

// event
window.addEventListener('click', closeModal);

// colse modal
function closeModal(event) {
  // console.log(event);
  if(event.target === modal) {
    modal.style.display = 'none';
  };
};

// event
restart.addEventListener('click', restartGame);

function restartGame() {
  // reset score
  scoreBoard.player = 0;
  scoreBoard.computer = 0;

  // show score
  score.innerHTML = `
    <p class="score-player">Player: ${scoreBoard.player}</p>
    <p class="score-computer">Computer: ${scoreBoard.computer}</p>
  `;
};