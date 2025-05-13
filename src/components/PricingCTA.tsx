import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const PricingCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Master Your Time: Advanced Strategies to Reclaim Your Day
              </h2>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Complete 16-module video course</span>
                </div>
                <div className="flex items-center mb-4">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Lifetime access to all content</span>
                </div>
                <div className="flex items-center mb-4">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Instant digital download</span>
                </div>
                <div className="flex items-center mb-4">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Actionable exercises with each module</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">30-day satisfaction guarantee</span>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <div className="flex items-start mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-900">Our Promise</h4>
                    <p className="text-gray-700">If you implement the strategies and don't see a significant improvement in your productivity within 30 days, we'll refund your purchase. No questions asked.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Secure checkout with Gumroad</span>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-blue-800 text-white p-8 md:p-12 flex flex-col">
              <div className="mb-auto">
                <div className="inline-block bg-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  SPECIAL OFFER
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$16</span>
                  <span className="text-blue-200 ml-2 line-through">$49</span>
                </div>
                <p className="text-blue-200 mb-6">
                  Limited time offer - 67% off regular price
                </p>
              </div>
              
              <div>
                <a href="https://chimoshop.gumroad.com/l/timemanagement" className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg text-center transition transform hover:scale-105 shadow-lg mb-4">
                  Get Instant Access
                </a>
                <p className="text-center text-blue-200 text-sm">
                  Join 2,500+ professionals who've reclaimed their time
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Every minute you delay is another minute lost forever
          </h3>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Time is the one resource you can never get back. Invest in yourself today and 
            transform your relationship with time forever.
          </p>
          <a href="https://chimoshop.gumroad.com/l/timemanagement" className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-lg">
            Take Back Control Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;