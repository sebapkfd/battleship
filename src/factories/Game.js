import Player from './Player';

const Game = () => {
    const Player1 = Player();
    const Player2 = Player();
    return {
        Player1,
        Player2
    }
}

export default Game;