export interface ObstacleType {
    width: number;
    height: number;
    image: string;
    yOffset: number;
  }
  
  const obstacles: ObstacleType[] = [
    // { width: 30, height: 40, image: '/Games/Kirby/obstacle-small.png', yOffset: 0 },
    // { width: 40, height: 60, image: '/Games/Kirby/obstacle-medium.png', yOffset: 0 },
    // { width: 50, height: 80, image: '/Games/Kirby/obstacle-large.png', yOffset: 0 },
    // { width: 30, height: 30, image: '/Games/Kirby/obstacle-float1.png', yOffset: 50 },
    // { width: 40, height: 40, image: '/Games/Kirby/obstacle-float2.png', yOffset: 70 },
    { width: 30, height: 40, image: '/Games/Kirby/dino.png', yOffset: 0 },
  ];
  
  export const generateObstacle = (): ObstacleType => {
    return obstacles[Math.floor(Math.random() * obstacles.length)];
  };