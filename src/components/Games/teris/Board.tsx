import React from 'react';

type BoardProps = {
  board: number[][],
  currentPiece: number[][],
  currentPosition: { x: number, y: number },
  CELL_SIZE: number
};

const Board: React.FC<BoardProps> = ({ board, currentPiece, currentPosition, CELL_SIZE }) => {
  const getCell = (x: number, y: number) => {
    if (
      y >= currentPosition.y &&
      y < currentPosition.y + currentPiece.length &&
      x >= currentPosition.x &&
      x < currentPosition.x + (currentPiece[0]?.length || 0)
    ) {
      return currentPiece[y - currentPosition.y][x - currentPosition.x] || board[y][x];
    }
    return board[y][x];
  };

  return (
    <div className="border-2 border-gray-400 dark:border-gray-600">
      {board.map((row, y) => (
        <div key={y} className="flex">
          {row.map((_, x) => (
            <div
              key={`${x}-${y}`}
              className={`w-[${CELL_SIZE}px] h-[${CELL_SIZE}px] border border-gray-300 dark:border-gray-700
                ${getCell(x, y) ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-800'}`}
              style={{ width: `${CELL_SIZE}px`, height: `${CELL_SIZE}px` }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
