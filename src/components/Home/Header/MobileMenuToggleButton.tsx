'use client';
import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

interface MobileMenuToggleButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuToggleButton: React.FC<MobileMenuToggleButtonProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex laptop:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <XMarkIcon className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
        ) : (
          <Bars3Icon className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
        )}
      </button>
    </div>
  );
};

export default MobileMenuToggleButton;
