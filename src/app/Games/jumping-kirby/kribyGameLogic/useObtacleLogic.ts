import { useState } from 'react';
import { OBSTACLE_START_X } from './gameConfig';
import { generateObstacle, ObstacleType } from './obstacleUtils';

export const useObstacleLogic = () => {
  const [currentObstacle, setCurrentObstacle] = useState<ObstacleType>(generateObstacle());
  const [obstacleX, setObstacleX] = useState<number>(OBSTACLE_START_X);

  const updateObstacle = () => {
    setObstacleX((prev) => {
      if (prev <= -currentObstacle.width) {
        setCurrentObstacle(generateObstacle());
        return OBSTACLE_START_X;
      }
      return prev - 7;
    });
  };
  const resetObstacle = () => {
   setCurrentObstacle(generateObstacle());
    setObstacleX(OBSTACLE_START_X);
  };

  return { currentObstacle, obstacleX, updateObstacle,resetObstacle };
};