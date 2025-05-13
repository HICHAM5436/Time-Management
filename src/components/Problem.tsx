import React from 'react';
import { ClockIcon, XCircle } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="problem">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <ClockIcon className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Relationship With Time Shouldn't Feel Like a Constant Battle
          </h2>
          <p className="text-xl text-gray-700">
            Yet for most of us, that's exactly what it's become.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/3760810/pexels-photo-3760810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Person stressed about time management" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Drowning in to-do lists that never end</h3>
                <p className="text-gray-700">Each day feels like a race against the clock where you're constantly falling behind, no matter how hard you work.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multitasking yourself into exhaustion</h3>
                <p className="text-gray-700">Switching between tasks all day leaves you mentally drained with little to show for your efforts.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Procrastination cycles that breed guilt and anxiety</h3>
                <p className="text-gray-700">You know what needs to be done, yet you find countless ways to avoid the most important work.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No clear boundaries between work and life</h3>
                <p className="text-gray-700">Work bleeds into personal time, personal matters interrupt work, and neither gets your full attention.</p>
              </div>
            </div>
            
            <div className="mt-8 font-medium text-gray-900 text-lg">
              <p>If time feels like your biggest enemy, it's time to flip the script.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;