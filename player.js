class Player {
  constructor(name, token, wins) {
    this.name = name;
    this.token = token;
    this.wins = wins;
    this.isWinner = false;
  }
  saveWinsToStorage() {
    localStorage.setItem(this.name, this.wins)
  } 
  retrieveWinsFromStorage() {
  var humanWins = localStorage.getItem('human') || 0
  var compWins = localStorage.getItem('comp') || 0
  humanWins = parseInt(humanWins)
  compWins = parseInt(compWins)
  }
  takeTurn() {
  }
}

