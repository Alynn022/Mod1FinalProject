//variables targeting HTML elements 
var classicContainer = document.querySelector('#classicContainer')
var classicHomeView = document.querySelector('#classicHome'); 
var classicGameView = document.querySelector('#classicGame');
var difficultHomeView = document.querySelector('#difficultHome');
var difficultGameView = document.querySelector('#difficultGame');
var difficultContainer = document.querySelector('#difficultContainer');


classicContainer.addEventListener('click', gameSelectClassic) 

function gameSelectClassic() {
  hide(classicHomeView)
  show(classicGameView)
  hide(difficultContainer)
}

difficultContainer.addEventListener('click', gameSelectDifficult)

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