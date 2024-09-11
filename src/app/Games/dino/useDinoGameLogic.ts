// useDinoGameLogic.ts
import { useState, useEffect, useCallback } from 'react';
import {
  GROUND_HEIGHT,
  DINO_INITIAL_WIDTH,
  DINO_INITIAL_HEIGHT,
  DINO_CROUCHED_WIDTH,
  DINO_CROUCHED_HEIGHT,
  OBSTACLE_WIDTH,
  MIN_OBSTACLE_HEIGHT,
  MAX_OBSTACLE_HEIGHT,
  DINO_LEFT_POSITION,
  OBSTACLE_START_X,
} from './gameConfig';
import { generateObstacle, ObstacleType } from './obstacleUtils';

export const useDinoGameLogic = () => {
  const [currentObstacle, setCurrentObstacle] =
    useState<ObstacleType>(generateObstacle());
  const [dinoY, setDinoY] = useState<number>(0);
  const [dinoWidth, setDinoWidth] = useState<number>(DINO_INITIAL_WIDTH);
  const [dinoHeight, setDinoHeight] = useState<number>(DINO_INITIAL_HEIGHT);

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
          setDinoY((prev) => prev + 10);
          jumpDuration += 10;
        } else if (jumpDuration < 245) {
          setDinoY((prev) => prev + 7);
          jumpDuration += 7;
        } else if (jumpDuration < 250) {
          setDinoY((prev) => prev + 2);
          jumpDuration += 2;
        } else if (jumpDuration < 255) {
          setDinoY((prev) => prev - 2);
          jumpDuration += 2;
        } else if (jumpDuration < 500) {
          setDinoY((prev) => prev - 7);
          jumpDuration += 7;
        } else {
          clearInterval(jumpInterval);
          setIsJumping(false);
          setDinoY(0);
        }
      }, 20);
    }
  }, [isJumping]);

  const crouch = useCallback(() => {
    if (!isCrouching) {
      setIsCrouching(true);
      setDinoWidth(DINO_CROUCHED_WIDTH);
      setDinoHeight(DINO_CROUCHED_HEIGHT);
    }
  }, [isCrouching]);

  const stand = useCallback(() => {
    if (isCrouching) {
      setIsCrouching(false);
      setDinoWidth(DINO_INITIAL_WIDTH);
      setDinoHeight(DINO_INITIAL_HEIGHT);
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
      const dinoBottom = dinoY + dinoHeight;  // Dino's bottom is its Y position + its height
      const dinoTop = dinoY;  // Dino's top is just its Y position
      const dinoLeft = DINO_LEFT_POSITION;
      const dinoRight = dinoLeft + dinoWidth;
  
      const obstacleBottom = currentObstacle.yOffset + currentObstacle.height;  // Obstacle's bottom is its Y offset + its height
      const obstacleTop = currentObstacle.yOffset;  // Obstacle's top is its Y offset
      const obstacleLeft = obstacleX;  // Obstacle's left position
      const obstacleRight = obstacleX + currentObstacle.width;  // Obstacle's right position
  
  console.log(dinoBottom,obstacleTop)
  console.log(dinoTop,obstacleBottom
    
  )
      // Check for collision
      const isCollision =
        dinoRight > obstacleLeft && // Dino's right side passes the obstacle's left side
        dinoLeft < obstacleRight && // Dino's left side is before the obstacle's right side
        dinoBottom > obstacleTop && // Dino's bottom is below the obstacle's top (collision from above)
        dinoTop < obstacleBottom;   // Dino's top is above the obstacle's bottom (collision from below)
  
      if (isCollision) {
        setGameOver(true);
      }
    }
  }, [obstacleX, dinoY, dinoHeight, dinoWidth, gameOver, currentObstacle, DINO_LEFT_POSITION]);
  

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
    setDinoY(0);
    setDinoWidth(DINO_INITIAL_WIDTH);
    setDinoHeight(DINO_INITIAL_HEIGHT);
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
    dinoY,
    dinoWidth,
    dinoHeight,
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
