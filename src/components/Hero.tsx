import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import heroBg from 'figma:asset/3e16eacad6fc6adcc49fca862a3874794e760c94.png';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gray-900 h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="River Landscape"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Darker gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <div className="mb-8 inline-block">
             <div className="px-4 py-1.5 border border-blue-400/30 bg-blue-900/30 backdrop-blur-sm rounded-sm text-blue-100 text-xs font-bold tracking-widest uppercase shadow-sm">
                Preserving Your Legacy
             </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold leading-tight mb-6 tracking-tight drop-shadow-md">
            A Long-Term Home <br />
            <span className="text-blue-100">for Your Business</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 font-medium max-w-xl leading-relaxed drop-shadow-sm">
            Whitt Lewis Holdings is a North Carolina-based firm founded by Will Pearce for the purpose of purchasing one exceptional service business in the Southeast to own and operate long-term
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Button 
              onClick={() => scrollToSection('criteria')}
              className="bg-white text-blue-900 hover:bg-gray-100 rounded-sm h-14 px-8 text-base border-none font-bold shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Investment Criteria
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-700 text-white hover:bg-blue-600 rounded-sm h-14 px-8 text-base border-none font-bold shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Contact Me <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
