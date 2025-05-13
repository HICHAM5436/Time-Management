import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import CourseContent from './components/CourseContent';
import ForWhom from './components/ForWhom';
import Testimonials from './components/Testimonials';
import PricingCTA from './components/PricingCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Master Your Time | Advanced Strategies to Reclaim Your Day";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <CourseContent />
      <ForWhom />
      <Testimonials />
      <PricingCTA />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;