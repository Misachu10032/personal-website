import { useState, useEffect, useCallback } from 'react';

const GROUND_HEIGHT = 20;
const DINO_INITIAL_WIDTH = 50;
const DINO_INITIAL_HEIGHT = 50;
const DINO_CROUCHED_WIDTH = 50;
const DINO_CROUCHED_HEIGHT = 25;
const OBSTACLE_WIDTH = 30;
const MIN_OBSTACLE_HEIGHT = 20;
const MAX_OBSTACLE_HEIGHT = 60;

export const useDinoGameLogic = () => {
  const [dinoY, setDinoY] = useState<number>(0);
  const [dinoWidth, setDinoWidth] = useState<number>(DINO_INITIAL_WIDTH);
  const [dinoHeight, setDinoHeight] = useState<number>(DINO_INITIAL_HEIGHT);
  const [obstacleX, setObstacleX] = useState<number>(window.innerWidth);
  const [obstacleHeight, setObstacleHeight] = useState<number>(MIN_OBSTACLE_HEIGHT);
  const [isJumping, setIsJumping] = useState<boolean>(false);
  const [isCrouching, setIsCrouching] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const jump = useCallback(() => {
    if (!isJumping) {
      setIsJumping(true);
      let jumpHeight = 0;
      const jumpInterval = setInterval(() => {
        if (jumpHeight < 100) {
          setDinoY((prev) => prev + 10);
          jumpHeight += 10;
        } else if (jumpHeight < 200) {
          setDinoY((prev) => prev + 7);
          jumpHeight += 7;
        } else if (jumpHeight < 400) {
          setDinoY((prev) => prev - 7);
          jumpHeight += 7;
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
          if (prev <= -OBSTACLE_WIDTH) {
            setScore((prevScore) => prevScore + 1);
            setObstacleHeight(
              Math.random() * (MAX_OBSTACLE_HEIGHT - MIN_OBSTACLE_HEIGHT) +
                MIN_OBSTACLE_HEIGHT
            );
            return window.innerWidth;
          }
          return prev - 7;
        });
      }
    }, 20);

    return () => {
      clearInterval(gameLoop);
    };
  }, [gameOver]);

  useEffect(() => {
    if (!gameOver) {
      const dinoBottom = dinoY + dinoHeight;
      const dinoLeft = 20; // Adjust if necessary based on Dino's horizontal position
      const dinoRight = dinoLeft + dinoWidth;
      const obstacleBottom = GROUND_HEIGHT + obstacleHeight;
      const obstacleLeft = obstacleX;
      const obstacleRight = obstacleX + OBSTACLE_WIDTH;

      const isCollision =
        obstacleRight > dinoLeft &&
        obstacleLeft < dinoRight &&
        dinoBottom > GROUND_HEIGHT &&
        dinoY < obstacleBottom;

      if (isCollision) {
        setGameOver(true);
      }
    }
  }, [obstacleX, dinoY, dinoHeight, dinoWidth, gameOver]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        jump();
      } else if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
        crouch();
      }
    };

    const handleKeyRelease = (e: KeyboardEvent) => {
      if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
        stand();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyRelease);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyRelease);
    };
  }, [jump, crouch, stand]);

  const resetGame = () => {
    setDinoY(0);
    setDinoWidth(DINO_INITIAL_WIDTH);
    setDinoHeight(DINO_INITIAL_HEIGHT);
    setObstacleX(window.innerWidth);
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
  };
};
