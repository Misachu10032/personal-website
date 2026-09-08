'use client';

import React, { useEffect } from 'react';

interface NotificationBubbleProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

const NotificationBubble: React.FC<NotificationBubbleProps> = ({
  open,
  onClose,
  message,
}) => {
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [open, onClose]);

  return (
    <div
      className={`
        fixed top-6 left-1/2 -translate-x-1/2 z-50
        px-4 py-2 border
        bg-neutral-900 text-neutral-50 border-accent
        dark:bg-neutral-100 dark:text-neutral-900 dark:border-accent
        font-mono text-xs uppercase tracking-widest
        transition-all duration-300
        ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
      `}
      role="status"
    >
      {message}
    </div>
  );
};

export default NotificationBubble;
