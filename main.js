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

//variables targeting HTML buttons
var squirtleBtn = document.querySelector('button.squirtle');
var bulbasaurBtn = document.querySelector('button.bulbasaur');
var charmanderBtn = document.querySelector('button.charmander');

//Variables to persist information in the Data Model
var newGame;
var pokemon;
var randomInput;


classicContainer.addEventListener('click', gameSelectClassic);
difficultContainer.addEventListener('click', gameSelectDifficult);
squirtleBtn.addEventListener('click', beginClassicGame);
bulbasaurBtn.addEventListener('click', beginClassicGame);
charmanderBtn.addEventListener('click', beginClassicGame);

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
  var humanWins = localStorage.getItem('human') || 0
  var compWins = localStorage.getItem('comp') || 0
  humanWins = parseInt(humanWins)
  compWins = parseInt(compWins)
  randomClassicCompInput()
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
  show(battleView)
  showHumanPokemonInput()
  showCompPokemonInput()
  
}  

function showHumanPokemonInput() {
  if (newGame.players[0].token === 'squirtle') {
    humanPokeInput.src = "assets/squirtle.jpg"
  } 
  else if (newGame.players[0].token === 'bulbasaur') {
    humanPokeInput.src = "assets/bulbasaur.jpg"
  }
  else if (newGame.players[0].token=== 'charmander') {
    humanPokeInput.src = "assets/bulbasaur.jpg"
  }
}

function showCompPokemonInput() {
  if (newGame.players[1].token === 'squirtle') {
    compPokeInput.src = "assets/squirtle.jpg"
  } 
  else if (newGame.players[1].token === 'bulbasaur') {
    compPokeInput.src = "assets/bulbasaur.jpg"
  }
  else if (newGame.players[1].token=== 'charmander') {
    compPokeInput.src = "assets/bulbasaur.jpg"
  }
}


function randomClassicCompInput() {
  pokemon = ['squirtle', 'bulbasaur', 'charmander']
  randomInput = pokemon[getRandomIndex(pokemon)]
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
