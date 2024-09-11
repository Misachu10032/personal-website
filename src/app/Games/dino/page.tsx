"use client"
import React from 'react';
import { useDinoGameLogic } from './useDinoGameLogic';
import { GROUND_HEIGHT, VISUAL_SCALE, DINO_LEFT_POSITION } from './gameConfig';
import { ObstacleType } from './obstacleUtils';

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
    currentObstacle,
  } = useDinoGameLogic();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
   
      <div className="relative w-full h-64 border-b-2 border-gray-400 dark:border-gray-600">
        {/* Kirby */}
        <img
          src={isCrouching ? "/Games/Kirby/Kirby-crouching.png" : "/Games/Kirby/Kirby-running.gif"}
          alt="Kirby"
          className={`absolute transition-transform duration-150 ${
            isCrouching ? 'scale-y-50' : '' // Scale effect when crouching
          }`}
          style={{
            left: `${DINO_LEFT_POSITION}px`,
            bottom: `${GROUND_HEIGHT + dinoY}px`,
            width: `${dinoWidth}px`,
            height: `${dinoHeight}px`,
            transform: `scale(${VISUAL_SCALE})`,
          }}
        />
        {/* Obstacle */}
        <img
          src={currentObstacle.image}
          alt="Obstacle"
          className="absolute"
          style={{
            left: `${obstacleX}px`,
            bottom: `${ currentObstacle.yOffset}px`,
            width: `${currentObstacle.width}px`,
            height: `${currentObstacle.height}px`,
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
