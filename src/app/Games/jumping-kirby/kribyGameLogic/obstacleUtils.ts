export interface ObstacleType {
    width: number;
    height: number;
    image: string;
    yOffset: number;
  }
  
  const obstacles: ObstacleType[] = [
    { width: 80, height: 80, image: '/Games/Kirby/Obstacle/dino-long-axe.png', yOffset:10 },
    { width: 100, height: 80, image: '/Games/Kirby/Obstacle/dino-helicopter.png', yOffset:10 },
    { width: 100, height: 80, image: '/Games/Kirby/Obstacle/dino-helicopter.png', yOffset:100 },
    { width: 130, height: 400, image: '/Games/Kirby/Obstacle/dino-helicopters.png', yOffset:40 },
    { width: 100, height: 100, image: '/Games/Kirby/Obstacle/dino-tank.png', yOffset: 0 },
    { width: 100, height: 60, image: '/Games/Kirby/Obstacle/two-dinos.png', yOffset: 0 },
    { width: 60, height: 80, image: '/Games/Kirby/Obstacle/dino.png', yOffset: 0 },
  ];
  
  export const generateObstacle = (): ObstacleType => {
    return obstacles[Math.floor(Math.random() * obstacles.length)];
  };