// useKirbyGameLogic.ts
import { useEffect, useState } from 'react';
import { KIRBY_INITIAL_HEIGHT, KIRBY_INITIAL_WIDTH, KIRBY_LEFT_POSITION } from './gameConfig';
import { useKirbyMovement } from './useKirbyMovement';
import { useObstacleLogic } from './useObtacleLogic'; 
import { useCollisionLogic } from './useCollisionLogic';

export const useKirbyGameLogic = () => {
  const { kirbyY, kirbyWidth, kirbyHeight, isJumping, isCrouching, jump, crouch, stand, setKirbyY,setIsJumping,setIsCrouching,setKirbyWidth,setKirbyHeight } = useKirbyMovement();
  const { currentObstacle, obstacleX, updateObstacle,resetObstacle } = useObstacleLogic();

  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const incrementScore = () => setScore((prevScore) => prevScore + 1);
  useEffect(() => {
    const gameLoop = setInterval(() => {
      if (!gameOver) {
        updateObstacle();
        incrementScore();
      }
    }, 20);

    return () => clearInterval(gameLoop);
  }, [gameOver]);

  useCollisionLogic({
    kirbyY,
    kirbyHeight,
    kirbyWidth,
    obstacleX,
    currentObstacle,
    gameOver,
    setGameOver,
  });



  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') jump();
      if (e.code === 'ControlLeft' || e.code === 'ControlRight') crouch();
    };

    const handleKeyRelease = (e: KeyboardEvent) => {
      if (e.code === 'ControlLeft' || e.code === 'ControlRight') stand();
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyRelease);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyRelease);
    };
  }, [jump, crouch, stand]);

  const resetGame = () => {
    setKirbyY(0);
    setKirbyWidth(KIRBY_INITIAL_WIDTH);
    setKirbyHeight(KIRBY_INITIAL_HEIGHT);
    resetObstacle();

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
    isJumping,
    isCrouching,
    gameOver,
    score,
    jump,
    resetGame,
    currentObstacle,
  };
};
