import React from 'react';
import { Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Clock className="h-6 w-6 text-blue-400 mr-2" />
            <span className="font-bold text-xl">TimeWisdom</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition">Terms</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Privacy</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} TimeWisdom. All rights reserved.</p>
          <p className="mt-2">
            "Master Your Time: Advanced Strategies to Reclaim Your Day" is a comprehensive time management course 
            designed to help professionals take control of their days and maximize productivity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;