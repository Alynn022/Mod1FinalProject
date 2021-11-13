class Game {
  constructor(gameType) {
    this.players = [];
    this.gameType = gameType;
  }
  createPlayers(name, token, wins) {
    var player = new Player(name, token, wins)
    this.players.push(player)
  }
  checkGameType() {
    if (this.gameType === 'classic') {
      this.classicGamePlay()
    }
    if (this.gameType === 'difficult') {
      this.difficultGamePlay()
    }
  }
  classicGamePlay() {
    if ((this.players[0].token === 'squirtle') && (this.players[1].token === 'charmander')) {
      this.players[0].wins += 1
      this.players[0].isWinner = true
    }
    else if ((this.players[0].token === 'bulbasaur') && (this.players[1].token === 'squirtle')) {
      this.players[0].wins += 1
      this.players[0].isWinner = true
    }
    else if ((this.players[0].token === 'charmander') && (this.players[1].token === 'bulbasaur')) {
      this.players[0].wins += 1
      this.players[0].isWinner = true
    }
    else if ((this.players[1].token === 'squirtle') && (this.players[0].token === 'charmander')) {
      this.players[1].wins += 1
      this.players[1].isWinner = true
    }
    else if ((this.players[1].token === 'bulbasaur') && (this.players[0].token === 'squirtle')) {
      this.players[1].wins += 1
      this.players[1].isWinner = true
    }
    else if ((this.players[1].token === 'charmander') && (this.players[0].token === 'bulbasaur')) {
      this.players[1].wins += 1
      this.players[1].isWinner = true
    }
  }
  difficultGamePlay() {
    if ((this.players[0].token === 'squirtle') && ((this.players[1].token === 'charmander') || (this.players[1].token === 'jigglypuff'))) {
      this.players[0].wins += 1
      this.players[0].isWinner = true
    }
    else if ((this.players[0].token === 'bulbasaur') && ((this.players[1].token === 'squirtle') || (this.players[1].token === 'pikachu'))) {
      this.players[0].wins += 1
      this.players[0].isWinner = true
    }
    else if ((this.players[0].token === 'charmander') && ((this.players[1].token === 'bulbasaur') || (this.players[1].token === 'jigglypuff'))) {
      this.players[0].wins += 1
      this.players[0].isWinner = true
    }
    else if ((this.players[0].token === 'jigglypuff') && ((this.players[1].token === 'bulbasaur') || (this.players[1].token === 'pikachu'))) {
      this.players[0].wins += 1
      this.players[0].isWinner = true
    }
    else if ((this.players[0].token === 'pikachu') && ((this.players[1].token === 'charmander') || (this.players[1].token === 'squirtle'))) {
      this.players[0].wins += 1
      this.players[0].isWinner = true
    }
    else if ((this.players[1].token === 'squirtle') && ((this.players[0].token === 'charmander') || (this.players[0].token === 'jigglypuff'))) {
      this.players[1].wins += 1
      this.players[1].isWinner = true
    }
    else if ((this.players[1].token === 'bulbasaur') && ((this.players[0].token === 'squirtle') || (this.players[0].token === 'pikachu'))) {
      this.player[1].wins += 1
      this.players[1].isWinner = true
    }
    else if ((this.players[1].token === 'charmander') && ((this.players[0].token === 'bulbasaur') || (this.players[0].token === 'jigglypuff'))) {
      this.players[1].wins += 1
      this.players[1].isWinner = true
    }
    else if ((this.players[1].token === 'jigglypuff') && ((this.players[0].token === 'bulbasaur') || (this.players[0].token === 'pikachu'))) {
      this.players[1].wins += 1
      this.players[1].isWinner = true
    }
    else if ((this.players[1].token === 'pikachu') && ((this.players[0].token === 'charmander') || (this.players[0].token === 'squirtle'))) {
      this.players[1].wins += 1
      this.players[1].isWinner = true
    }
  }
  startGame(selection, parsedValues) {
    this.createPlayers('human', selection, parsedValues.humanWins)
    this.createPlayers('comp', randomInput, parsedValues.compWins)
    this.checkGameType()
    this.players[0].saveWinsToStorage()
    this.players[1].saveWinsToStorage()
  }
}
