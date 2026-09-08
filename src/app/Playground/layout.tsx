import { ReactNode } from 'react';

export default function PlaygroundLayout({ children }: { children: ReactNode }) {
  return <div className="container mx-auto mb-10">{children}</div>;
}
