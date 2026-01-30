import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Logo variant="light" className="mb-6" />
            <p className="max-w-xs text-sm leading-relaxed text-gray-500">
              Whitt Lewis Holdings is a North Carolina-based firm founded by Will Pearce for the purpose of purchasing one exceptional service business in the Southeast to own and operate long-term
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#criteria" className="hover:text-white transition-colors">Investment Criteria</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>Will@WhittLewisHoldings.com</li>
              <li>(704) 685-5733</li>
              <li>Raleigh, NC</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Whitt Lewis Holdings. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
