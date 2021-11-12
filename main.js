//variables targeting HTML elements 
var classicContainer = document.querySelector('#classicContainer')
var classicHomeView = document.querySelector('#classicHome');
var classicGameView = document.querySelector('#classicGame');
var difficultHomeView = document.querySelector('#difficultHome');
var difficultGameView = document.querySelector('#difficultGame');
var difficultContainer = document.querySelector('#difficultContainer');
var squirtleBtn = document.querySelector('button.squirtle');
var bulbasaurBtn = document.querySelector('button.bulbasaur');
var charmanderBtn = document.querySelector('button.charmander');

//Variables to persist information in the Data Model
var newGame;
var pokemon;
var randomInput;


classicContainer.addEventListener('click', gameSelectClassic);
difficultContainer.addEventListener('click', gameSelectDifficult);
squirtleBtn.addEventListener('click', beginGame);
bulbasaurBtn.addEventListener('click', beginGame);
charmanderBtn.addEventListener('click', beginGame);

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

function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}

function beginGame(event) {
  var humanWins = localStorage.getItem('human') || 0
  var compWins = localStorage.getItem('comp') || 0
  humanWins = parseInt(humanWins)
  compWins = parseInt(compWins)
  randomCompInput()
  newGame = new Game('classic')
  newGame.createPlayers('human', event.target.value, humanWins)
  newGame.createPlayers('comp', randomInput, compWins)
  newGame.checkGameType()
  newGame.players[0].saveWinsToStorage()
  newGame.players[1].saveWinsToStorage()
  winnerView()
}

function winnerView() {
  hide(classicHomeView)
  hide(difficultContainer)
  hide(classicContainer)
}

function randomCompInput() {
  pokemon = ['squirtle', 'bulbasaur', 'charmander']
  randomInput = pokemon[getRandomIndex(pokemon)]
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * (array.length))
}