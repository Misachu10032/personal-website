import React from 'react';

type NextPieceProps = {
  nextPiece: number[][],
  CELL_SIZE: number
};

const NextPieceDisplay: React.FC<NextPieceProps> = ({ nextPiece, CELL_SIZE }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Next Piece</h2>
      <div
        className="border-2 border-gray-400 dark:border-gray-600 p-2 flex justify-center items-center"
        style={{ width: `${CELL_SIZE * 3}px`, height: `${CELL_SIZE * 2}px` }}
      >
        <div>
          {nextPiece.map((row, y) => (
            <div key={y} className="flex justify-center">
              {row.map((cell, x) => (
                <div
                  key={`${x}-${y}`}
                  className={`w-[${CELL_SIZE / 2}px] h-[${CELL_SIZE / 2}px] border border-gray-300 dark:border-gray-700
                    ${cell ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-800'}`}
                  style={{ width: `${CELL_SIZE / 2}px`, height: `${CELL_SIZE / 2}px` }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NextPieceDisplay;
