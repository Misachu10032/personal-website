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
        className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default MobileMenuToggleButton;
