import React from 'react';
import { UserCheck, UserX } from 'lucide-react';

const ForWhom: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Is This Course Right For You?
          </h2>
          <p className="text-xl text-gray-700">
            Master Your Time is designed for specific people with specific challenges. 
            Let's make sure it's the right fit.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-green-50 p-8 rounded-xl border border-green-100">
            <div className="flex items-center mb-6">
              <UserCheck className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">This is for you if...</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex">
                <div className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">You constantly feel overwhelmed by competing demands on your time</p>
              </li>
              <li className="flex">
                <div className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">You're tired of trying productivity "hacks" that don't create lasting change</p>
              </li>
              <li className="flex">
                <div className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">You want a complete system, not just random tips and tricks</p>
              </li>
              <li className="flex">
                <div className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">You're a professional, freelancer, entrepreneur, or creator with multiple responsibilities</p>
              </li>
              <li className="flex">
                <div className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">You struggle with procrastination, distractions, or knowing what to prioritize</p>
              </li>
              <li className="flex">
                <div className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">You're ready to invest in yourself and commit to implementing the systems</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-8 rounded-xl border border-red-100">
            <div className="flex items-center mb-6">
              <UserX className="w-8 h-8 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">This is NOT for you if...</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex">
                <div className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">You're looking for a magic bullet that requires no effort on your part</p>
              </li>
              <li className="flex">
                <div className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">You just want a quick fix rather than a sustainable system</p>
              </li>
              <li className="flex">
                <div className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">You're not willing to examine and change your current habits</p>
              </li>
              <li className="flex">
                <div className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">You expect overnight results without implementing the teachings</p>
              </li>
              <li className="flex">
                <div className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">You don't believe your relationship with time can fundamentally change</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;