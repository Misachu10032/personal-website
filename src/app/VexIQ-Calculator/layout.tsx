import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-black text-white text-xl min-h-screen p-5">
      {children}
    </div>
  );
}
