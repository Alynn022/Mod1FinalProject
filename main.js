//variables targeting HTML elements 
var classicContainer = document.querySelector('#classicContainer')
var classicHomeView = document.querySelector('#classicHome');
var classicGameView = document.querySelector('#classicGame');
var difficultHomeView = document.querySelector('#difficultHome');
var difficultGameView = document.querySelector('#difficultGame');
var difficultContainer = document.querySelector('#difficultContainer');
var battleView = document.querySelector('#battleView')
var humanPokeInput = document.querySelector('#humanPokeInput')
var compPokeInput = document.querySelector('#compPokeInput')
var winnerMessageText = document.querySelector('#winnerMessage')
var humanWinDisplay = document.querySelector('#humanWinDisplay')
var computerWinDisplay = document.querySelector('#computerWinDisplay')

//variables targeting HTML buttons
var classicSquirtleBtn = document.querySelector('button.squirtle');
var classicBulbasaurBtn = document.querySelector('button.bulbasaur');
var classicCharmanderBtn = document.querySelector('button.charmander');
var difficultSquirtleBtn = document.querySelector('button.squirtle-2');
var difficultBulbasaurBtn = document.querySelector('button.bulbasaur-2');
var difficultCharmanderBtn = document.querySelector('button.charmander-2');
var difficultJigglypuffBtn = document.querySelector('button.jigglypuff');
var difficultPikachuBtn = document.querySelector('button.pikachu');
var changeGameBtn = document.querySelector('#changeGameBtn');
var resetScoresBtn = document.querySelector('#resetScoresBtn');

//Variables to persist information in the Data Model
var newGame;
var pokemon;
var randomInput;

//Event Listeners 
window.addEventListener('load', displayWins)
classicContainer.addEventListener('click', gameSelectClassic);
difficultContainer.addEventListener('click', gameSelectDifficult);
classicSquirtleBtn.addEventListener('click', beginClassicGame);
classicBulbasaurBtn.addEventListener('click', beginClassicGame);
classicCharmanderBtn.addEventListener('click', beginClassicGame);
difficultSquirtleBtn.addEventListener('click', beginDifficultGame);
difficultBulbasaurBtn.addEventListener('click', beginDifficultGame);
difficultCharmanderBtn.addEventListener('click', beginDifficultGame);
difficultJigglypuffBtn.addEventListener('click', beginDifficultGame);
difficultPikachuBtn.addEventListener('click', beginDifficultGame);
changeGameBtn.addEventListener('click', reload)
resetScoresBtn.addEventListener('click', clearLocalStorage)


function gameSelectClassic() {
  hide(classicHomeView)
  show(classicGameView)
  hide(difficultContainer)
}

function gameSelectDifficult() {
  hide(classicContainer)
  show(difficultGameView)
  hide(difficultHomeView)
}

function beginClassicGame(event) {
  var winValues = retrieveWins()
  var parsedValues = parseWinValues(winValues)
  randomClassicCompInput()
  newGame = new Game('classic')
  newGame.startGame(event.target.value, parsedValues)
  showWinner()
  displayWins()
  timeOutOnGameEnd()
}

function beginDifficultGame(event) {
  var winValues = retrieveWins()
  var parsedValues = parseWinValues(winValues)
  randomClassicCompInput()
  newGame = new Game('difficult')
  newGame.startGame(event.target.value, parsedValues)
  showWinner()
  displayWins()
}

function retrieveWins() {
  var humanWins = localStorage.getItem('human') || 0
  var compWins = localStorage.getItem('comp') || 0
  return { humanWins, compWins }
}

function parseWinValues(winValues) {
  var humanWins = parseInt(winValues.humanWins)
  var compWins = parseInt(winValues.compWins)
  return { humanWins, compWins }
}

function displayWins() {
  humanWinDisplay.innerText = retrieveWins().humanWins
  computerWinDisplay.innerText = retrieveWins().compWins
}

function showWinner() {
  showHumanPokemonInput()
  showCompPokemonInput()
  winnerMessage()
  showWinnerView()
}

function showWinnerView() {
  hide(classicHomeView)
  hide(difficultContainer)
  hide(classicContainer)
  show(battleView)
}

function showHumanPokemonInput() {
  if (newGame.players[0].token === 'squirtle') {
    humanPokeInput.src = "assets/squirtle.jpg"
  }
  else if (newGame.players[0].token === 'bulbasaur') {
    humanPokeInput.src = "assets/bulbasaur.jpg"
  }
  else if (newGame.players[0].token === 'charmander') {
    humanPokeInput.src = "assets/charmander.jpg"
  }
  else if (newGame.players[0].token === 'jigglypuff') {
    humanPokeInput.src = "assets/jigglypuff.jpg"
  }
  else if (newGame.players[0].token === 'pikachu') {
    humanPokeInput.src = "assets/pikachu.jpg"
  }
}

function showCompPokemonInput() {
  if (newGame.players[1].token === 'squirtle') {
    compPokeInput.src = "assets/squirtle.jpg"
  }
  else if (newGame.players[1].token === 'bulbasaur') {
    compPokeInput.src = "assets/bulbasaur.jpg"
  }
  else if (newGame.players[1].token === 'charmander') {
    compPokeInput.src = "assets/charmander.jpg"
  }
  else if (newGame.players[1].token === 'jigglypuff') {
    compPokeInput.src = "assets/jigglypuff.jpg"
  }
  else if (newGame.players[1].token === 'pikachu') {
    compPokeInput.src = "assets/pikachu.jpg"
  }
}

function winnerMessage() {
  if ((newGame.players[0].isWinner === true) && (newGame.players[1].isWinner === false)) {
    winnerMessageText.innerText = "You Won!!"
  }
  else if ((newGame.players[0].isWinner === false) && (newGame.players[1].isWinner === false)) {
    winnerMessageText.innerText = "Draw!"
  }
  else if ((newGame.players[1].isWinner === true) && (newGame.players[0].isWinner === false)) {
    winnerMessageText.innerText = "You Lost!"
  }
}

function timeOutOnGameEnd() {
  setTimeout(function() {
    playGameAgain()
  }, 4000)
}

function playGameAgain() {
  hide(battleView)
  if (newGame.gameType === 'classic') {
    show(classicContainer)
    show(classicGameView)
    hide(difficultContainer)
    hide(difficultGameView)
  }
  else if (newGame.gameType === 'difficult') {
    show(difficultContainer)
    show(difficultGameView)
    hide(classicContainer)
    hide(classicGameView)
  }
}

function clearLocalStorage() {
  localStorage.clear()
  newGame.players[0].wins = 0
  newGame.players[1].wins = 0
  displayWins()
  hide(battleView)
  hide(classicGameView)
  hide(difficultGameView)
  show(classicContainer)
  show(difficultContainer)
  show(classicHomeView)
  show(difficultHomeView)
}

function randomClassicCompInput() {
  pokemon = ['squirtle', 'bulbasaur', 'charmander']
  randomInput = pokemon[getRandomIndex(pokemon)]
}

function reload() {
  location.reload()
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * (array.length))
}

function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}
