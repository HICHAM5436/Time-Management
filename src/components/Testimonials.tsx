import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  stars: number;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, quote, stars, image }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
      <div className="flex mb-4">
        {Array.from({ length: stars }).map((_, index) => (
          <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 italic mb-6">"{quote}"</p>
      <div className="flex items-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-blue-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Others Are Saying
          </h2>
          <p className="text-xl text-gray-700">
            Hear from professionals who have transformed their relationship with time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Testimonial 
            name="Sarah Johnson"
            role="Marketing Director"
            quote="This course completely changed how I structure my day. I'm accomplishing more in 6 hours than I used to in 10, and I finally have evenings to myself again."
            stars={5}
            image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          
          <Testimonial 
            name="Michael Chen"
            role="Software Engineer"
            quote="As a developer juggling multiple projects, I was constantly context-switching and burning out. The Priority Box method alone was worth the price of admission."
            stars={5}
            image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          
          <Testimonial 
            name="Emma Rodriguez"
            role="Freelance Designer"
            quote="I was skeptical about another productivity course, but this one delivers. The procrastination module helped me identify my patterns and actually break them for good."
            stars={5}
            image="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;