//variables targeting HTML elements 
var classicContainer = document.querySelector('#classicContainer')
var classicHomeView = document.querySelector('#classicHome'); 
var classicGameView = document.querySelector('#classicGame');
var difficultHomeView = document.querySelector('#difficultHome');
var difficultGameView = document.querySelector('#difficultGame');
var difficultContainer = document.querySelector('#difficultContainer');
var squirtleButton = document.querySelector('#squirtleButton')

//Variables to persist information in the Data Model
var newGame;
var pokemon;
var randomInput;

classicContainer.addEventListener('click', gameSelectClassic) 
difficultContainer.addEventListener('click', gameSelectDifficult)
squirtleButton.addEventListener('click', beginGame)

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

function beginGame() {
  newGame = new Game('classic')
  newGame.createPlayers('human', 'squirtle', 0)
  newGame.createPlayers('comp', randomInput)
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