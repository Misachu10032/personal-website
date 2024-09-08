import React from 'react';

type GameOverProps = {
  onRestart: () => void
};

const GameOver: React.FC<GameOverProps> = ({ onRestart }) => {
  return (
    <div className="mt-4">
      <p className="text-xl font-bold mb-2">Game Over!</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={onRestart}
      >
        Play Again
      </button>
    </div>
  );
};

export default GameOver;
