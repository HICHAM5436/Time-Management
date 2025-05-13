import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="solution">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
            THE SOLUTION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            "Master Your Time" Changes Everything
          </h2>
          <p className="text-xl text-gray-700">
            A comprehensive video course designed to give busy professionals, creators, and entrepreneurs 
            the exact frameworks and tools to finally take control of their time, focus, and energy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Science-backed systems, not temporary hacks</h3>
                <p className="text-gray-700">Learn frameworks built on proven psychological research that create lasting change in how you approach your day.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Clear priorities that eliminate overwhelm</h3>
                <p className="text-gray-700">The Priority Box method will transform how you decide what deserves your attention and what can wait.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Procrastination-proof strategies that work</h3>
                <p className="text-gray-700">Finally understand the root causes of your procrastination and implement techniques that actually get you moving.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy management for sustainable productivity</h3>
                <p className="text-gray-700">Learn to work with your natural rhythms instead of against them, dramatically increasing your output while reducing burnout.</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#pricing" className="inline-flex items-center text-blue-700 hover:text-blue-800 font-semibold group">
                See what's included in the course
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <img 
              src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Person confidently managing their time" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;