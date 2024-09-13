import React from 'react';
import { Cpu } from 'lucide-react'; // Example of an icon from Lucide React library

const Navbar = () => {
  return (
    <nav className="bg-opacity-20 fixed w-full top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Symbol before project name */}
            <Cpu className="h-8 w-8 text-black mr-2" /> {/* Adjust icon size and color as needed */}
            <h1 className="text-xl font-bold text-black">AIMathMingle</h1>
          </div>
          <div className="flex items-center">
            <a href="#home" className="text-black px-3 py-2 rounded-md text-lg font-medium">
              Home
            </a>
            <a href="#about" className="text-black px-3 py-2 rounded-md text-lg font-medium">
              About
            </a>
            <a href="#services" className="text-black px-3 py-2 rounded-md text-lg font-medium">
              Services
            </a>
            <a href="#contact" className="text-black px-3 py-2 rounded-md text-lg font-medium">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
