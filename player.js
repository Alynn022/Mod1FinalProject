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
    return localStorage.getItem(this.name)
  }
  takeTurn() {
  }
}

