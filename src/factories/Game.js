import Player from './Player';

const Game = () => {
    const Player1 = Player();
    const Player2 = Player();

    const defaultPos = () => {
        for(let i = 0; i < 2; i++){
            Player1.board.placeShip(1, i*10);
            Player2.board.placeShip(1, i*10);
        }
        return true
    }

    return {
        Player1,
        Player2,
        defaultPos
    }
}

export default Game;