import React from 'react';
import { Clock } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Clock className="h-6 w-6 text-blue-800 mr-2" />
          <span className="font-bold text-xl text-blue-900">TimeWisdom</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#overview" className="text-gray-700 hover:text-blue-600 font-medium transition">Overview</a>
          <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition">Features</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition">Testimonials</a>
        </nav>
        <a 
          href="https://chimoshop.gumroad.com/l/timemanagement" 
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enroll Now
        </a>
      </div>
    </header>
  );
};

export default Navbar;