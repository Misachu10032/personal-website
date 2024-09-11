import { useState } from 'react';
import { OBSTACLE_START_X } from './gameConfig';
import { generateObstacle, ObstacleType } from './obstacleUtils';

export const useObstacleLogic = () => {
  const [currentObstacle, setCurrentObstacle] = useState<ObstacleType>(generateObstacle());
  const [obstacleX, setObstacleX] = useState<number>(OBSTACLE_START_X);
  const [score, setScore] = useState<number>(0);

  const updateObstacle = () => {
    setObstacleX((prev) => {
      if (prev <= 0) {
        setCurrentObstacle(generateObstacle());
        console.log(prev);
        setScore((prevScore: number) => prevScore + 1);
        return OBSTACLE_START_X;
      }
      return prev - 7;
    });
  };
  const resetObstacle = () => {
   setCurrentObstacle(generateObstacle());
    setObstacleX(OBSTACLE_START_X);
  };

  return { currentObstacle, obstacleX, updateObstacle, resetObstacle, score,setScore};
};