import { useState, useCallback, useEffect } from 'react';

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

const TETROMINOS = [
  [[1, 1, 1, 1]], // I
  [[1, 1], [1, 1]], // O
  [[1, 1, 1], [0, 1, 0]], // T
  [[1, 1, 1], [1, 0, 0]], // L
  [[1, 1, 1], [0, 0, 1]], // J
  [[0, 1, 1], [1, 1, 0]], // S
  [[1, 1, 0], [0, 1, 1]]  // Z
];

const createEmptyBoard = () => 
  Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0));

const useTetrisGameLogic = () => {
  const [board, setBoard] = useState(createEmptyBoard());
  const [currentPiece, setCurrentPiece] = useState<number[][]>([]);
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [nextPiece, setNextPiece] = useState<number[][]>([]);
  const [level, setLevel] = useState(1);

  const getRandomPiece = useCallback(() => {
    return TETROMINOS[Math.floor(Math.random() * TETROMINOS.length)];
  }, []);

  const isValidMove = useCallback((piece: number[][], position: { x: number, y: number }, board: number[][]) => {
    for (let y = 0; y < piece.length; y++) {
      for (let x = 0; x < piece[y].length; x++) {
        if (piece[y][x]) {
          const newX = position.x + x;
          const newY = position.y + y;
          if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT || (newY >= 0 && board[newY][newX])) {
            return false;
          }
        }
      }
    }
    return true;
  }, []);

  const mergePieceToBoard = useCallback((board: number[][], piece: number[][], position: { x: number, y: number }) => {
    const newBoard = board.map(row => [...row]);
    for (let y = 0; y < piece.length; y++) {
      for (let x = 0; x < piece[y].length; x++) {
        if (piece[y][x]) {
          newBoard[position.y + y][position.x + x] = piece[y][x];
        }
      }
    }
    return newBoard;
  }, []);

  const clearLines = useCallback((board: number[][], score: number) => {
    const newBoard = board.filter(row => row.some(cell => !cell));
    const clearedLines = BOARD_HEIGHT - newBoard.length;
    const newScore = score + clearedLines *clearedLines * 100;
    setLevel(Math.floor(newScore/1000)+1);
    while (newBoard.length < BOARD_HEIGHT) {
      newBoard.unshift(Array(BOARD_WIDTH).fill(0));
    }
    return { newBoard, newScore };
  }, []);

  const rotatePiece = (piece: number[][]) => {
    return piece[0].map((_, index) =>
      piece.map(row => row[index]).reverse()
    );
  };

  const spawnNewPiece = useCallback(() => {
    const newPiece = nextPiece.length ? nextPiece : getRandomPiece();
    const newPosition = { x: Math.floor(BOARD_WIDTH / 2) - Math.floor(newPiece[0].length / 2), y: 0 };
    setCurrentPiece(newPiece);
    setCurrentPosition(newPosition);
    setNextPiece(getRandomPiece());

    if (!isValidMove(newPiece, newPosition, board)) {
      setGameOver(true);
      setIsPlaying(false);
    }
  }, [nextPiece, getRandomPiece, isValidMove, board]);

  const moveDown = useCallback(() => {
    const newPosition = { x: currentPosition.x, y: currentPosition.y + 1 };
    if (isValidMove(currentPiece, newPosition, board)) {
      setCurrentPosition(newPosition);
    } else {
      const mergedBoard = mergePieceToBoard(board, currentPiece, currentPosition);
      const { newBoard, newScore } = clearLines(mergedBoard, score);
      setBoard(newBoard);
      setScore(newScore);
      spawnNewPiece();
    }
  }, [currentPiece, currentPosition, isValidMove, mergePieceToBoard, board, score, clearLines, spawnNewPiece]);

  const moveLeft = useCallback(() => {
    const newPosition = { x: currentPosition.x - 1, y: currentPosition.y };
    if (isValidMove(currentPiece, newPosition, board)) {
      setCurrentPosition(newPosition);
    }
  }, [currentPiece, currentPosition, isValidMove, board]);

  const moveRight = useCallback(() => {
    const newPosition = { x: currentPosition.x + 1, y: currentPosition.y };
    if (isValidMove(currentPiece, newPosition, board)) {
      setCurrentPosition(newPosition);
    }
  }, [currentPiece, currentPosition, isValidMove, board]);

  const rotate = useCallback(() => {
    const rotatedPiece = rotatePiece(currentPiece);
    if (isValidMove(rotatedPiece, currentPosition, board)) {
      setCurrentPiece(rotatedPiece);
    }
  }, [currentPiece, currentPosition, isValidMove, board]);

  const startGame = useCallback(() => {
    setBoard(createEmptyBoard());
    setGameOver(false);
    setScore(0);
    setLevel(1);
    setIsPlaying(true);
    setNextPiece(getRandomPiece());
    spawnNewPiece();
    console.log(gameOver,isPlaying);
  }, []);

  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          moveLeft();
          break;
        case 'ArrowRight':
          moveRight();
          break;
        case 'ArrowDown':
          moveDown();
          break;
        case 'ArrowUp':
          rotate();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    const fallInterval = Math.max(100, 800 - level * 100);

    const gameLoop = setInterval(() => {
      moveDown();
    }, fallInterval);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      clearInterval(gameLoop);
    };
  }, [isPlaying, gameOver, moveDown, moveLeft, moveRight, rotate, level]);

  return {
    board,
    currentPiece,
    currentPosition,
    gameOver,
    score,
    isPlaying,
    nextPiece,
    level,
    startGame,
    

  };
};

export default useTetrisGameLogic;
