import { useEffect } from 'react';
import { KIRBY_LEFT_POSITION } from './gameConfig';

interface CollisionProps {
  kirbyY: number;
  kirbyHeight: number;
  kirbyWidth: number;
  obstacleX: number;
  currentObstacle: {
    yOffset: number;
    height: number;
    width: number;
  };
  gameOver: boolean;
  setGameOver: (value: boolean) => void;
}

export const useCollisionLogic = ({
  kirbyY,
  kirbyHeight,
  kirbyWidth,
  obstacleX,
  currentObstacle,
  gameOver,
  setGameOver,
}: CollisionProps) => {
  useEffect(() => {
    if (!gameOver) {
      // Collision detection logic
      const kirbyBottom = kirbyY + kirbyHeight;
      const kirbyTop = kirbyY;
      const kirbyLeft = KIRBY_LEFT_POSITION;
      const kirbyRight = kirbyLeft + kirbyWidth;

      const obstacleBottom = currentObstacle.yOffset + currentObstacle.height;
      const obstacleTop = currentObstacle.yOffset;
      const obstacleLeft = obstacleX;
      const obstacleRight = obstacleX + currentObstacle.width;

      const isCollision =
        kirbyRight > obstacleLeft &&
        kirbyLeft < obstacleRight &&
        kirbyBottom > obstacleTop &&
        kirbyTop < obstacleBottom;

      if (isCollision) {
        setGameOver(true);
      }
    }
  }, [obstacleX, kirbyY, kirbyHeight, kirbyWidth, gameOver, currentObstacle, setGameOver]);
};