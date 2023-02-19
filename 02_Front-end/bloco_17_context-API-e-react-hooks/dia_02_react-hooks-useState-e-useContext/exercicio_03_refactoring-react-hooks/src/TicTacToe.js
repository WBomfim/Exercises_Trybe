import React, { useState } from 'react';
import GameBoard from './GameBoard';

function TicTacToe() {
  const [gameState, setGameState] = useState({
    activePlayer: 1,
    gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  });

  const { activePlayer } = gameState;
  const { gameBoard } = gameState;

  const victoryArchivedInLine = (gameBoard) => {
    for (let i = 0; i <= 6; i += 3) {
      if (
        gameBoard[i] === gameBoard[i + 1]
        && gameBoard[i + 1] === gameBoard[i + 2]
        && gameBoard[i] !== 0
      ) return gameBoard[i];
    }
    return false;
  }

  const victoryArchivedInColumn = (gameBoard) => {
    for (let i = 0; i <= 2; i += 1) {
      if (
        gameBoard[i] === gameBoard[i + 3]
        && gameBoard[i + 3] === gameBoard[i + 6]
        && gameBoard[i] !== 0
      ) return gameBoard[i];
    }
    return false;
  }

  const  victoryArchivedInDiagonals = (gameBoard) => {
    if (gameBoard[4] === 0) return false;
    if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
      return gameBoard[0];
    }
    if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
      return gameBoard[2];
    }
    return false;
  }

  const resetGame = () => {
    setGameState({
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    });
  }

  const toggleActivePlayer = () => {
    if (activePlayer === 1) return 2;
    return 1;
  }

  const updateState = (cellClicked) => {
    setGameState((prevState) => {
      const newState = prevState.gameBoard;
      let newActivePlayer = prevState.activePlayer;

      if (prevState.gameBoard[cellClicked] === 0) {
        newState[cellClicked] = prevState.activePlayer;
        newActivePlayer = toggleActivePlayer();
      } else newState[cellClicked] = prevState.gameBoard[cellClicked];

      return {
        activePlayer: newActivePlayer,
        gameBoard: newState,
      };
    });
  }

  const victoryArchieved = () => {
    return (
      victoryArchivedInLine(gameBoard)
      || victoryArchivedInColumn(gameBoard)
      || victoryArchivedInDiagonals(gameBoard)
    );
  }

  const renderButton = () => {
    return (
      <button
        type="button"
        onClick={resetGame}
        data-testid="restart-button"
      >
        Recomeçar Jogo
      </button>
    );
  }

  const win = victoryArchieved();
  
  if (!gameBoard.includes(0) && !win) {
    return (
      <section>
        {renderButton()}
        <h1>Empate</h1>
      </section>
    );
  }

  return (
    <section>
      {renderButton()}
      {(!win)
        ? (
          <GameBoard
            gameState={gameBoard}
            updateGame={updateState}
          />
        )
        : <h1>{`Player ${win === 2 ? 'O' : 'X'} Ganhou`}</h1>}
    </section>
  );
}

export default TicTacToe;
