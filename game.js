class Game {
  constructor(gameType) {
    this.players = [];
    this.gameType = gameType;
  }
  createPlayers(name, token, wins) {
    var player = new Player(name, token, wins)
    this.players.push(player)
  }
  gameType(gameType) {
    if (gameType === 'classic') {
      classicGamePlay()
    } 
      if (gameType === 'difficult') {
      difficultGamePlay() 
    }
  }
  classicGamePlay() {
    if ((this.players[0].token === 'squirtle') && (this.players[1].token === 'charmander')) {
      this.player[0].wins += 1
    }
    else if ((this.players[0].token === 'bulbasaur') && (this.players[1].token === 'squirtle')) {
      this.player[0].wins += 1
    }
    else if ((this.players[0].token === 'charmander') && (this.players[1].token === 'bulbasaur')) {
      this.player[0].wins += 1
    }
    else if ((this.players[1].token === 'squirtle') && (this.players[0].token === 'charmander')) {
      this.player[1].wins += 1
    }
    else if ((this.players[1].token === 'bulbasaur') && (this.players[0].token === 'squirtle')) {
      this.player[1].wins += 1
    }
    else if ((this.players[1].token === 'charmander') && (this.players[0].token === 'bulbasaur')) {
      this.player[1].wins += 1
    }
  }
  difficultGamePlay() {
    if ((this.players[0].token === 'squirtle') && ((this.players[1].token === 'charmander') || (this.players[1].token === 'jigglypuff'))) {
      this.player[0].wins += 1
    }
    else if ((this.players[0].token === 'bulbasaur') && ((this.players[1].token === 'squirtle') || (this.players[1].token === 'pikachu'))) {
      this.player[0].wins += 1
    }
    else if ((this.players[0].token === 'charmander') && ((this.players[1].token === 'bulbasaur') || (this.players[1].token === 'jigglypuff'))) {
      this.player[0].wins += 1
    }
    else if ((this.players[0].token === 'jigglypuff') && ((this.players[1].token === 'bulbasaur') || (this.players[1].token === 'pikachu'))) {
      this.player[0].wins += 1
    }
    else if ((this.players[0].token === 'pikachu') && ((this.players[1].token === 'charmander') || (this.players[1].token === 'squirtle'))) {
      this.player[0].wins += 1
    }
    else if ((this.players[1].token === 'squirtle') && ((this.players[0].token === 'charmander') || (this.players[0].token === 'jigglypuff'))) {
      this.player[1].wins += 1
    }
    else if ((this.players[1].token === 'bulbasaur') && ((this.players[0].token === 'squirtle') || (this.players[0].token === 'pikachu'))) {
      this.player[1].wins += 1
    }
    else if ((this.players[1].token === 'charmander') && ((this.players[0].token === 'bulbasaur') || (this.players[0].token === 'jigglypuff'))) {
      this.player[1].wins += 1
    }
    else if ((this.players[1].token === 'jigglypuff') && ((this.players[0].token === 'bulbasaur') || (this.players[0].token === 'pikachu'))) {
      this.player[1].wins += 1
    }
    else if ((this.players[1].token === 'pikachu') && ((this.players[0].token === 'charmander') || (this.players[0].token === 'squirtle'))) {
      this.player[1].wins += 1
    }
  }
}
