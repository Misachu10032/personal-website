'use client';
import React from 'react';
import { useDinoGameLogic } from './useDinoGameLogic';

const GROUND_HEIGHT = 20;
const VISUAL_SCALE = 1.5;

const DinoGame: React.FC = () => {
  const {
    dinoY,
    dinoWidth,
    dinoHeight,
    obstacleX,
    obstacleHeight,
    isCrouching,
    gameOver,
    OBSTACLE_WIDTH,
    score,
    jump,
    resetGame,
  } = useDinoGameLogic();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-4">Jumping Kirby Game</h1>
      <div className="relative w-full h-64 border-b-2 border-gray-400 dark:border-gray-600">
        {/* Kirby */}
        <img
          src="/Games/Kirby/Kirby-running.gif"
          alt="Kirby"
          className={`absolute left-20 transition-transform duration-150 ${
            isCrouching ? 'scale-y-50' : '' // Scale effect when crouching
          }`}
          style={{
            bottom: `${GROUND_HEIGHT + dinoY}px`,
            width: `${dinoWidth}px`,
            height: `${dinoHeight}px`,
            transform: `scale(${VISUAL_SCALE})`,
          }}
        />
        {/* Obstacle */}
        <div
          className="absolute bottom-0 bg-red-500"
          style={{
            left: `${obstacleX}px`,
            bottom: `${GROUND_HEIGHT}px`,
            width: `${OBSTACLE_WIDTH}px`,
            height: `${obstacleHeight}px`,
          }}
        />
      </div>
      <p className="text-xl font-bold mt-4">Score: {score}</p>
      {gameOver && (
        <div className="mt-4">
          <p className="text-xl font-bold mb-2">Game Over!</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      )}
      <p className="mt-4 text-sm">Press Space to jump, Ctrl to crouch</p>
    </div>
  );
};

export default DinoGame;
