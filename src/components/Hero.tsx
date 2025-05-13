import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Master Your Time: Advanced Strategies to Reclaim Your Day
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Stop letting your days slip through your fingers. Gain clarity, control, and confidence with proven systems that actually work.
            </p>
            <div className="pt-4">
              <a href="#pricing" className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-lg">
                Take Back Control Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center mt-6 text-blue-100">
              <span className="font-semibold">16 High-Impact Video Modules</span>
              <span className="mx-3">•</span>
              <span className="font-semibold">Lifetime Access</span>
              <span className="mx-3">•</span>
              <span className="font-semibold">Instant Download</span>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.pexels.com/photos/1028741/pexels-photo-1028741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Professional managing time effectively" 
              className="rounded-lg shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;