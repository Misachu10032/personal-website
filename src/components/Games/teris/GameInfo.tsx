import React from 'react';

type GameInfoProps = {
  score: number,
  level: number
};

const GameInfo: React.FC<GameInfoProps> = ({ score, level }) => {
  return (
    <div>
      <p className="text-xl mb-2">Score: {score}</p>
      <p className="text-xl">Level: {level}</p>
    </div>
  );
};

export default GameInfo;
