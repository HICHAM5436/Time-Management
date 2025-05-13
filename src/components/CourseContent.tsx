import React from 'react';
import { 
  Clock, 
  BrainCircuit, 
  ListTodo, 
  Calendar, 
  XCircle, 
  Zap, 
  BarChart3, 
  Users, 
  Mail, 
  Laptop,
  ArrowRight 
} from 'lucide-react';

interface ModuleProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

const Module: React.FC<ModuleProps> = ({ icon, number, title, description }) => {
  return (
    <div className="flex border-b border-gray-200 pb-6 mb-6 last:border-b-0 group">
      <div className="mr-4 flex-shrink-0">
        <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center transition-colors group-hover:bg-blue-700 group-hover:text-white">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-1 flex items-center">
          <span className="opacity-50 mr-2 text-sm">{number}</span> {title}
        </h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const CourseContent: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="features">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
            COURSE CURRICULUM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What You'll Learn in 16 Powerful Modules
          </h2>
          <p className="text-xl text-gray-700">
            Each module is designed to tackle a specific area of time management with practical, 
            actionable strategies you can implement immediately.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          <div>
            <Module 
              icon={<Clock className="w-6 h-6" />}
              number="01"
              title="Welcome & Course Overview"
              description="Understand the framework of the course and how to get maximum value from each lesson."
            />
            
            <Module 
              icon={<Clock className="w-6 h-6" />}
              number="02"
              title="Understanding Time: The Fundamentals"
              description="Explore how our perception of time impacts productivity and learn the foundation of effective time management."
            />
            
            <Module 
              icon={<XCircle className="w-6 h-6" />}
              number="03"
              title="The Truth About Multitasking"
              description="Discover why multitasking destroys productivity and how to train your brain for laser-like focus."
            />
            
            <Module 
              icon={<ListTodo className="w-6 h-6" />}
              number="04"
              title="The Priority Box Method"
              description="Master the revolutionary framework for sorting tasks that brings clarity to even the most chaotic schedules."
            />
            
            <Module 
              icon={<Calendar className="w-6 h-6" />}
              number="05"
              title="The Power of Planning"
              description="Create a personalized daily planning system that aligns with your goals and natural rhythms."
            />
            
            <Module 
              icon={<BrainCircuit className="w-6 h-6" />}
              number="06"
              title="Overcoming Procrastination"
              description="Implement science-backed strategies to break the procrastination cycle once and for all."
            />
            
            <Module 
              icon={<Clock className="w-6 h-6" />}
              number="07"
              title="Time-Saving Habits"
              description="Incorporate small daily practices that create massive time savings over weeks and months."
            />
            
            <Module 
              icon={<BrainCircuit className="w-6 h-6" />}
              number="08"
              title="Mindfulness and Time Management"
              description="Learn how presence and attention management can dramatically improve your relationship with time."
            />
          </div>
          
          <div>
            <Module 
              icon={<Users className="w-6 h-6" />}
              number="09"
              title="Delegating and Outsourcing"
              description="Identify what tasks to hand off and how to do it effectively, even if you work alone."
            />
            
            <Module 
              icon={<BarChart3 className="w-6 h-6" />}
              number="10"
              title="Measuring Progress"
              description="Implement tracking systems that identify time leaks and celebrate real progress."
            />
            
            <Module 
              icon={<Zap className="w-6 h-6" />}
              number="11"
              title="Energy Management"
              description="Map your energy cycles and structure your day for maximum performance with minimum burnout."
            />
            
            <Module 
              icon={<ListTodo className="w-6 h-6" />}
              number="12"
              title="The 80/20 Rule"
              description="Apply the Pareto Principle to identify high-leverage activities that deliver maximum results."
            />
            
            <Module 
              icon={<Clock className="w-6 h-6" />}
              number="13"
              title="Handling Interruptions"
              description="Create systems to protect your focus time while still maintaining relationships and communications."
            />
            
            <Module 
              icon={<Users className="w-6 h-6" />}
              number="14"
              title="Effective Meetings"
              description="Transform time-wasting meetings into focused, productive sessions that respect everyone's time."
            />
            
            <Module 
              icon={<Mail className="w-6 h-6" />}
              number="15"
              title="Email and Communication"
              description="Master techniques to process messages efficiently without letting your inbox control your day."
            />
            
            <Module 
              icon={<Laptop className="w-6 h-6" />}
              number="16"
              title="Digital Tools and Apps"
              description="Discover the best productivity tools and how to use them effectively without getting overwhelmed."
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#pricing" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-lg inline-flex items-center">
            Get Instant Access
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;