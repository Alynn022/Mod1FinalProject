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
    var winningToken = this.checkClassicGameToken()
    if (winningToken) {
      var winner = this.findWinner(winningToken)
      winner.wins += 1
      winner.isWinner = true
    }
  }
  checkClassicGameToken() {
    var tokens = [this.players[0].token, this.players[1].token]
    if (tokens.includes('squirtle') && tokens.includes('charmander')) {
      return 'squirtle'
    } else if (tokens.includes('charmander') && tokens.includes('bulbasaur')) {
      return 'charmander'
    } else if (tokens.includes('bulbasaur') && tokens.includes('squirtle')) {
      return 'bulbasaur'
    } else if (this.players[0].token === this.players[1].token)
      return
  }
  findWinner(token) {
    if (this.players[0].token === token) {
      return this.players[0]
    } else {
      return this.players[1]
    }
  }
  checkDifficultGameWinner() {
    var tokenOne = this.players[0].token
    var tokenTwo = this.players[1].token
    var winningConditions = {
      squirtle: ['charmander', 'jigglypuff'],
      bulbasaur: ['squirtle', 'pikachu'],
      charmander: ['bulbasaur', 'jigglypuff'],
      jigglypuff: ['bulbasaur', 'pikachu'],
      pikachu: ['charmander', 'squirtle'],
    }
    if (winningConditions[tokenOne].includes(tokenTwo)) {
      return this.players[0]
    } else if (winningConditions[tokenTwo].includes(tokenOne)) {
      return this.players[1]
    } else if (tokenOne === tokenTwo) {
      return
    }
  }
  difficultGamePlay() {
    var winner = this.checkDifficultGameWinner()
    if (winner) {
      winner.wins += 1
      winner.isWinner = true
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
