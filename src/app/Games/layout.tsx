import { ReactNode } from 'react';

export default function GamesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="container mx-auto mb-10">{children}</div>
    </div>
  );
}