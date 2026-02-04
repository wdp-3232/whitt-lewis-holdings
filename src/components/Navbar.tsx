import React from 'react';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { FileText } from 'lucide-react';

interface NavbarProps {
  onOpenBrochure: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrochure }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo />
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <button onClick={() => scrollToSection('about')} className="text-sm font-bold text-gray-700 hover:text-blue-700 transition-colors">
              About Me
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-sm font-bold text-gray-700 hover:text-blue-700 transition-colors">
              What I Offer as a Buyer
            </button>
            <button onClick={() => scrollToSection('process')} className="text-sm font-bold text-gray-700 hover:text-blue-700 transition-colors">
              Process
            </button>
            <button onClick={() => scrollToSection('criteria')} className="text-sm font-bold text-gray-700 hover:text-blue-700 transition-colors">
              Investment Criteria
            </button>
            
            <button 
              onClick={onOpenBrochure}
              className="text-sm font-bold text-gray-700 hover:text-blue-700 transition-colors flex items-center gap-2"
            >
              <FileText size={16} />
              Brochure
            </button>

            <Button 
              onClick={() => scrollToSection('contact')}
              variant="default" 
              className="bg-blue-800 text-white hover:bg-blue-700 rounded-sm px-6 font-bold"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
