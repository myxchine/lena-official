"use client";
import { useState } from "react";

interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <div className="w-full   mb-2">
        <button
          onClick={toggleDropdown}
          className="w-full text-left  text flex items-center justify-between"
        >
          {title} <div>{isOpen ? "-" : "+"}</div>
        </button>
        {isOpen && <div className="mt-2">{children}</div>}
      </div>
    </div>
  );
};

export default Dropdown;
