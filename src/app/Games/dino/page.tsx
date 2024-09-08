'use client';
import React, { useState, useEffect, useCallback } from 'react';

const GROUND_HEIGHT = 20;
const DINO_SIZE = 50;
const OBSTACLE_WIDTH = 20;
const OBSTACLE_HEIGHT = 40;

const DinoGame: React.FC = () => {
  const [dinoY, setDinoY] = useState(0);
  const [obstacleX, setObstacleX] = useState(window.innerWidth);
  const [isJumping, setIsJumping] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const jump = useCallback(() => {
    if (!isJumping && !gameOver) {
      setIsJumping(true);
      let jumpHeight = 0;
      const jumpInterval = setInterval(() => {
        if (jumpHeight < 100) {
          setDinoY(prev => prev + 5);
          jumpHeight += 5;
        } else if (jumpHeight < 200) {
          setDinoY(prev => prev - 5);
          jumpHeight += 5;
        } else {
          clearInterval(jumpInterval);
          setIsJumping(false);
          setDinoY(0);
        }
      }, 20);
    }
  }, [isJumping, gameOver]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        jump();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    const gameLoop = setInterval(() => {
      if (!gameOver) {
        setObstacleX(prev => {
          if (prev <= -OBSTACLE_WIDTH) {
            setScore(prevScore => prevScore + 1);
            return window.innerWidth;
          }
          return prev - 5;
        });

        if (
          obstacleX < DINO_SIZE &&
          obstacleX + OBSTACLE_WIDTH > 0 &&
          dinoY < OBSTACLE_HEIGHT
        ) {
          setGameOver(true);
        }
      }
    }, 20);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      clearInterval(gameLoop);
    };
  }, [jump, gameOver, obstacleX, dinoY]);

  const resetGame = () => {
    setDinoY(0);
    setObstacleX(window.innerWidth);
    setIsJumping(false);
    setGameOver(false);
    setScore(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-4">Jumping Dino Game</h1>
      <div className="relative w-full h-64 border-b-2 border-gray-400 dark:border-gray-600">
        <div
          className="absolute bottom-0 left-10 w-10 h-10 bg-green-500"
          style={{ bottom: `${GROUND_HEIGHT + dinoY}px`, width: DINO_SIZE, height: DINO_SIZE }}
        />
        <div
          className="absolute bottom-0 bg-red-500"
          style={{
            left: `${obstacleX}px`,
            bottom: `${GROUND_HEIGHT}px`,
            width: OBSTACLE_WIDTH,
            height: OBSTACLE_HEIGHT,
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
      <p className="mt-4 text-sm">Press Space to jump</p>
    </div>
  );
};

export default DinoGame;