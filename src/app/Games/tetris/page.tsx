'use client';
import React from 'react';
import useTetrisGameLogic from './gameLogic/useTetrisGameLogic';
import Board from '@/components/Games/teris/Board';
import NextPieceDisplay from '@/components/Games/teris/NextPieceDisplay';
import GameInfo from '@/components/Games/teris/GameInfo';
import GameOver from '@/components/Games/teris/GameOver';

const CELL_SIZE = 30;

const TetrisGame: React.FC = () => {
  const {
    board,
    currentPiece,
    currentPosition,
    gameOver,
    score,
    isPlaying,
    nextPiece,
    level,
    startGame,

  } = useTetrisGameLogic();


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-4">Tetris</h1>
      {!isPlaying? ( !gameOver &&
     
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={startGame}
        >
          Start Game
        </button>
      ) : (
        <div className="flex">
          <Board
            board={board}
            currentPiece={currentPiece}
            currentPosition={currentPosition}
            CELL_SIZE={CELL_SIZE}
          />
          <div className="ml-4">
            <NextPieceDisplay nextPiece={nextPiece} CELL_SIZE={CELL_SIZE} />
            <GameInfo score={score} level={level} />
          </div>
        </div>
      )}
      {gameOver && <GameOver onRestart={startGame} />}
    </div>
  );
};

export default TetrisGame;
