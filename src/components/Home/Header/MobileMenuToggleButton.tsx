'use client';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface MobileMenuToggleButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuToggleButton: React.FC<MobileMenuToggleButtonProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex laptop:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default MobileMenuToggleButton;
