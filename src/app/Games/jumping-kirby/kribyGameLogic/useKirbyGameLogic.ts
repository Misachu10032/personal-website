// useKirbyGameLogic.ts
import { useState, useEffect, useCallback } from 'react';
import {
  KIRBY_INITIAL_WIDTH,
  KIRBY_INITIAL_HEIGHT,
  KIRBY_CROUCHED_WIDTH,
  KIRBY_CROUCHED_HEIGHT,
  OBSTACLE_WIDTH,
  MIN_OBSTACLE_HEIGHT,
  MAX_OBSTACLE_HEIGHT,
  KIRBY_LEFT_POSITION,
  OBSTACLE_START_X,
} from './gameConfig';
import { generateObstacle, ObstacleType } from './obstacleUtils';

export const useKirbyGameLogic = () => {
  const [currentObstacle, setCurrentObstacle] =
    useState<ObstacleType>(generateObstacle());
  const [kirbyY, setKirbyY] = useState<number>(0);
  const [kirbyWidth, setKirbyWidth] = useState<number>(KIRBY_INITIAL_WIDTH);
  const [kirbyHeight, setKirbyHeight] = useState<number>(KIRBY_INITIAL_HEIGHT);

  const [obstacleX, setObstacleX] = useState<number>(OBSTACLE_START_X);
  const [obstacleHeight, setObstacleHeight] =
    useState<number>(MIN_OBSTACLE_HEIGHT);
  const [isJumping, setIsJumping] = useState<boolean>(false);
  const [isCrouching, setIsCrouching] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const jump = useCallback(() => {
    if (!isJumping) {
      setIsJumping(true);
      let jumpDuration = 0;
      const jumpInterval = setInterval(() => {
        if (jumpDuration < 100) {
          setKirbyY((prev) => prev + 10);
          jumpDuration += 10;
        } else if (jumpDuration < 245) {
          setKirbyY((prev) => prev + 7);
          jumpDuration += 7;
        } else if (jumpDuration < 250) {
          setKirbyY((prev) => prev + 2);
          jumpDuration += 2;
        } else if (jumpDuration < 255) {
          setKirbyY((prev) => prev - 2);
          jumpDuration += 2;
        } else if (jumpDuration < 500) {
          setKirbyY((prev) => prev - 7);
          jumpDuration += 7;
        } else {
          clearInterval(jumpInterval);
          setIsJumping(false);
          setKirbyY(0);
        }
      }, 20);
    }
  }, [isJumping]);

  const crouch = useCallback(() => {
    if (!isCrouching) {
      setIsCrouching(true);
      setKirbyWidth(KIRBY_CROUCHED_WIDTH);
      setKirbyHeight(KIRBY_CROUCHED_HEIGHT);
    }
  }, [isCrouching]);

  const stand = useCallback(() => {
    if (isCrouching) {
      setIsCrouching(false);
      setKirbyWidth(KIRBY_INITIAL_WIDTH);
      setKirbyHeight(KIRBY_INITIAL_HEIGHT);
    }
  }, [isCrouching]);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      if (!gameOver) {
        setObstacleX((prev) => {
          if (prev <= -currentObstacle.width) {
            setScore((prevScore) => prevScore + 1);
            setCurrentObstacle(generateObstacle());
            return window.innerWidth;
          }
          return prev - 7;
        });
      }
    }, 20);

    return () => {
      clearInterval(gameLoop);
    };
  }, [gameOver, currentObstacle.width]);

  useEffect(() => {
    if (!gameOver) {
      const kirbyBottom = kirbyY + kirbyHeight; // Kirby's bottom is its Y position + its height
      const kirbyTop = kirbyY; // Kirby's top is just its Y position
      const kirbyLeft = KIRBY_LEFT_POSITION;
      const kirbyRight = kirbyLeft + kirbyWidth;

      const obstacleBottom = currentObstacle.yOffset + currentObstacle.height; // Obstacle's bottom is its Y offset + its height
      const obstacleTop = currentObstacle.yOffset; // Obstacle's top is its Y offset
      const obstacleLeft = obstacleX; // Obstacle's left position
      const obstacleRight = obstacleX + currentObstacle.width; // Obstacle's right position

      // console.log(kirbyBottom, obstacleTop);
      console.log(kirbyTop, obstacleBottom,currentObstacle.height,currentObstacle.yOffset);
      // Check for collision
      const isCollision =
        kirbyRight > obstacleLeft && // Kirby's right side passes the obstacle's left side
        kirbyLeft < obstacleRight && // Kirby's left side is before the obstacle's right side
        kirbyBottom > obstacleTop && // Kirby's bottom is below the obstacle's top (collision from above)
        kirbyTop < obstacleBottom; // Kirby's top is above the obstacle's bottom (collision from below)

      if (isCollision) {
        setGameOver(true);
      }
    }
  }, [
    obstacleX,
    kirbyY,
    kirbyHeight,
    kirbyWidth,
    gameOver,
    currentObstacle,
    KIRBY_LEFT_POSITION,
  ]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        jump();
        console.log('jump');
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [jump]);

  useEffect(() => {
    const handleCrouch = (e: KeyboardEvent) => {
      if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
        crouch();
        console.log('crouch');
      }
    };

    const handleKeyRelease = (e: KeyboardEvent) => {
      if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
        stand();
        console.log('stand');
      }
    };

    window.addEventListener('keydown', handleCrouch);
    window.addEventListener('keyup', handleKeyRelease);

    return () => {
      window.removeEventListener('keydown', handleCrouch);
      window.removeEventListener('keyup', handleKeyRelease);
    };
  }, [crouch, stand]);

  const resetGame = () => {
    setKirbyY(0);
    setKirbyWidth(KIRBY_INITIAL_WIDTH);
    setKirbyHeight(KIRBY_INITIAL_HEIGHT);
    setObstacleX(OBSTACLE_START_X);
    setObstacleHeight(
      Math.random() * (MAX_OBSTACLE_HEIGHT - MIN_OBSTACLE_HEIGHT) +
        MIN_OBSTACLE_HEIGHT
    );
    setIsJumping(false);
    setIsCrouching(false);
    setGameOver(false);
    setScore(0);
  };

  return {
    kirbyY,
    kirbyWidth,
    kirbyHeight,
    obstacleX,
    obstacleHeight,
    isJumping,
    isCrouching,
    gameOver,
    score,
    OBSTACLE_WIDTH,
    jump,
    resetGame,
    currentObstacle,
  };
};
