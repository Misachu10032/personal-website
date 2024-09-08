'use client';
import React, { useState, useEffect, useCallback } from 'react';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const INITIAL_SPEED = 200; // Initial speed in milliseconds
const SPEED_INCREMENT = 5; // Speed increase per food eaten

const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [gameOver, setGameOver] = useState(false);
  const [speed, setSpeed] = useState(INITIAL_SPEED);

  const moveSnake = useCallback(() => {
    if (gameOver) return;

    const newSnake = [...snake];
    const head = { ...newSnake[0] };
    head.x += direction.x;
    head.y += direction.y;

    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      setGameOver(true);
      return;
    }

    if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      setFood({
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      });
      setSpeed(prevSpeed => Math.max(50, prevSpeed - SPEED_INCREMENT));
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [snake, direction, food, gameOver]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection(prev => prev.y === 1 ? prev : { x: 0, y: -1 });
          break;
        case 'ArrowDown':
          setDirection(prev => prev.y === -1 ? prev : { x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          setDirection(prev => prev.x === 1 ? prev : { x: -1, y: 0 });
          break;
        case 'ArrowRight':
          setDirection(prev => prev.x === -1 ? prev : { x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    const gameLoop = setInterval(moveSnake, speed);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      clearInterval(gameLoop);
    };
  }, [moveSnake, speed]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood({ x: 15, y: 15 });
    setGameOver(false);
    setSpeed(INITIAL_SPEED);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-4">Snake Game</h1>
      <div
        className="border-2 border-gray-400 dark:border-gray-600"
        style={{
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE,
          position: 'relative',
        }}
      >
        {snake.map((segment, index) => (
          <div
            key={index}
            className={index === 0 ? "bg-green-00" : "bg-green-500"}
            style={{
              position: 'absolute',
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
              width: CELL_SIZE,
              height: CELL_SIZE,
            }}
          />
        ))}
        <div
          className="bg-red-500"
          style={{
            position: 'absolute',
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
            width: CELL_SIZE,
            height: CELL_SIZE,
          }}
        />
      </div>
      <p className="mt-4 text-xl">Score: {snake.length - 1}</p>
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
    </div>
  );
};

export default SnakeGame;