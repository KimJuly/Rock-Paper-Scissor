const choices = document.querySelector('.choices');
const message = document.querySelector('.message');
const computerOption = document.querySelector('.computer-option');
const userOption = document.querySelector('.user-option');
const wrapper = document.querySelector('.wrapper');
const btnNext = document.getElementById('btn-next');
const btnStart = document.getElementById("start");
let winner, computer, user;         

const options = [  
  {
    option: `rock`,
    html: `<img src="./images/1.png" alt="rock" class="img-option" >`,
  },
  {
    option: `scissors`,
    html: `<img src="./images/2.png" alt="scissors" class="img-option">`,
  },
  {
    option: `paper`,
    html: `<img src="./images/3.png" alt="paper" class="img-option">`,
  },
];

choices.addEventListener('click', function (e) {
  const clicked = e.target.closest('.player-option');
  let player = clicked.dataset.option;
  let valueChoice = clicked.dataset.choice;
  userOption.innerHTML = options[valueChoice].html;
  computerRandom();
  compare(player, computer);
  document.getElementById("choice-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "flex";
});

const compare = (player, computer) => {
  if (player === computer) {
    message.textContent = 'Draw';
    btnNext.style.display = "none";
    setTimeout(() => {
      message.textContent = '';
      document.getElementById("choice-screen").style.display = "flex";
      document.getElementById("result-screen").style.display = "none";
    }, 1000);

  } else if (player === 'rock' && computer === 'paper') {
    winner = computer;
    win();
  } else if (player === 'rock' && computer === 'scissors') {
    winner = player;
    win();
  } else if (player === 'paper' && computer === 'rock') {
    winner = player;
    win();
  } else if (player === 'paper' && computer === 'scissors') {
    winner = computer;
    win();
  } else if (player === 'scissors' && computer === 'rock') {
    winner = computer;
    win();
  } else if (player === 'scissors' && computer === 'paper') {
    winner = player;
    win();
  }
};


const computerRandom = () => {
  let randomNumber = Math.floor(Math.random() * options.length);

  computer = options[randomNumber].option;
  computerOption.innerHTML = options[randomNumber].html;
  return computer;
};

const win = () => {
  setTimeout(() => {
    btnNext.style.display = "flex";
    wrapper.style.opacity = "0.6";
  }, 1000);
  
  if (winner === computer) {
    message.textContent = `You Lost!`; 
  } else {
    message.textContent = `You Won!`;
  }
};

btnNext.addEventListener('click', function () {
  computerOption.innerHTML = '';
  userOption.innerHTML =  '';
  message.textContent = '';
  wrapper.style.opacity = "1";
  btnNext.style.display = "none";
  document.getElementById("choice-screen").style.display = "flex";
  document.getElementById("result-screen").style.display = "none";
  
});

function start() {
  btnStart.style.display = "none";
	document.getElementById("choice-screen").style.display = "flex";
}