import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
      </button>
      
      {isOpen && (
        <div className="mt-2 text-gray-700">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div>
            <FAQItem 
              question="How long do I have access to the course?"
              answer="You have lifetime access to the course, including any future updates. Once you purchase, it's yours forever."
            />
            
            <FAQItem 
              question="How is this different from other time management courses?"
              answer="This course focuses on comprehensive systems rather than quick hacks. We integrate psychology, neuroscience, and practical application to create lasting change. Every strategy is backed by research and tested in real-world scenarios."
            />
            
            <FAQItem 
              question="How much time will I need to implement these strategies?"
              answer="The course is designed for busy professionals. You'll see initial results by implementing just one or two strategies, which takes minimal time. For full transformation, plan to invest 2-3 hours per week for 4 weeks to integrate all the systems."
            />
            
            <FAQItem 
              question="Is this course suitable for my specific profession?"
              answer="Yes! The principles in this course apply across industries and roles. Whether you're a freelancer, corporate executive, creative professional, or entrepreneur, the frameworks are adaptable to your specific workflow."
            />
            
            <FAQItem 
              question="What format is the course delivered in?"
              answer="The course consists of 16 video modules that you can watch at your own pace. Each module includes practical exercises and implementation guides to help you apply the concepts immediately."
            />
            
            <FAQItem 
              question="What if I don't see results?"
              answer="We offer a 30-day satisfaction guarantee. If you implement the strategies and don't see significant improvement in your productivity and time management, we'll refund your purchase in full."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;