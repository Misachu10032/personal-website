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
    <div className="container mx-auto px-4 py-12 bg-white dark:bg-surface-dark text-neutral-900 dark:text-neutral-100">
      <Link
        href="/Playground"
        className="font-mono text-xs uppercase tracking-widest text-neutral-500 hover:text-accent dark:text-neutral-400 dark:hover:text-accent"
      >
        ← Back to Playground
      </Link>
      <h1 className="mt-4 text-2xl laptop:text-3xl font-semibold text-center mb-10">Retro Games</h1>
      <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
        {games.map((game, index) => (
          <Link href={game.href} key={game.name}>
            <div className="group border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-surface-dark-subtle overflow-hidden transition-colors duration-200 hover:border-accent">
              <div className="relative w-full aspect-square border-b border-neutral-200 dark:border-neutral-800">
                <Image
                  src={game.image}
                  alt={`${game.name} icon`}
                  fill
                  className="object-contain grayscale contrast-125 transition-all duration-500 group-hover:grayscale-0"
                />
                <span className="absolute top-2 left-2 font-mono text-[10px] tracking-widest px-1.5 py-0.5 bg-black/80 text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="p-4 text-center">
                <h2 className="text-base font-semibold">{game.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
