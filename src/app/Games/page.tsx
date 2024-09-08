'use client';
import React from 'react';
import Link from 'next/link';

const GamesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Retro Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/Games/snake">
          <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg text-center cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            <h2 className="text-xl font-semibold">Snake</h2>
          </div>
        </Link>
        <Link href="/Games/dino">
          <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg text-center cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            <h2 className="text-xl font-semibold">Jumping Dino</h2>
          </div>
        </Link>
        <Link href="/Games/tetris">
          <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg text-center cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            <h2 className="text-xl font-semibold">Tetris</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GamesPage;