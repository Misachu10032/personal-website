'use client';
import {ReactNode} from 'react';

export default function PhotoDumpLayout({children}: {children: ReactNode}) {
  return (
    <div className="relative">
      <div className="gradient-circle" />
      <div className="gradient-circle-bottom" />
      <div className="container mx-auto mb-10">{children}</div>
    </div>
  );
}
