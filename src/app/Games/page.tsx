'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const games = [
  { name: 'Snake', href: '/Games/snake', image: '/Games/Home/SnakeGame.png' },
  {
    name: 'Jumping Kirby',
    href: '/Games/jumping-kirby',
    image: '/Games/Home/JumpingKirbyGame.png',
  },
  {
    name: 'Tetris',
    href: '/Games/tetris',
    image: '/Games/Home/TetrisGame.png',
  },

];

const GamesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-10">Retro Games</h1>
      <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
        {games.map((game) => (
          <Link href={game.href} key={game.name}>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-[300px] h-[300px]">
                <Image
                  src={game.image}
                  alt={`${game.name} icon`}
                  width={300}
                  height={300}
                  className="object-contain w-full h-full"

                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold">{game.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
