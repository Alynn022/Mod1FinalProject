class Player {
  constructor(name, token, wins) {
    this.name = name;
    this.token = token;
    this.wins = wins;
  }
  saveWinsToStorage() {
    localStorage.setItem(this.name, this.wins)
  } 
  retrieveWinsFromStorage() {
  }
  takeTurn() {
  }
}

