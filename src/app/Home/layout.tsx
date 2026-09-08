import { ReactNode } from 'react';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="container relative mx-auto mb-10">{children}</div>
    </div>
  );
}
