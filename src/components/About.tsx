import React from 'react';
import { Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import headshot from 'figma:asset/71f9fea65749650b2b971720222f77ad42c95486.png';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-md mx-auto mb-10">
                {/* Image Container */}
                <div className="aspect-[4/5] bg-gray-100 w-full relative z-10 overflow-hidden rounded-sm shadow-xl group">
                    <img 
                        src={headshot}
                        alt="Will Pearce" 
                        className="w-full h-full object-cover object-[center_48%] scale-[1.9] origin-[center_48%]"
                    />
                </div>
                {/* Decorative element */}
                <div className="absolute top-6 -left-6 w-full h-full border-2 border-blue-900/10 z-0 hidden md:block rounded-sm" />
            </div>

            {/* Name, Title, and LinkedIn - Moved here */}
            <div className="text-center w-full">
                <h3 className="text-3xl font-serif font-bold text-gray-900">Will Pearce</h3>
                <p className="text-gray-500 font-medium tracking-wide uppercase text-sm mt-2 mb-6">Founder & Principal</p>
                <Button 
                  variant="outline" 
                  className="gap-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-bold px-6"
                  onClick={() => window.open('https://www.linkedin.com/in/wdp/', '_blank')}
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </Button>
            </div>
          </div>
          
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-8 font-bold">
              About Me
            </h2>
            
            {/* Bio Text Area - Increased size/spacing */}
            <div className="space-y-8 text-gray-600 text-lg leading-relaxed">
              <p>
                I grew up in Statesville, NC, and was in part raised by my grandfather who owned a local geothermal heating and air business. I spent much of my childhood going on service calls with him, so I have a great deal of respect for what it takes to build a reputation based service company. These experiences during the formative years of my life taught me the value of hard work, integrity, and reliability, and serve as the basis for who I hope to be as a business owner.
              </p>
              <p>
                After stints working the drive thru line at McDonald’s, scrubbing toilets at a pizza parlor, and repeatedly testing the structural integrity of corrugated board at a cardboard manufacturing plant, I graduated from UNC Chapel Hill with a BA in Mathematics and Economics. From there, I spent several years working in investment banking and private equity, where I had the opportunity to assist clients and portfolio companies with topics ranging from M&A and capital raising to commercial strategy and operational improvement. Across these experiences, I’ve performed a wide variety of tasks alongside colleagues who come from a multitude of different backgrounds, but the constant theme has been that high effort, attention to detail, and humility tends to lead to good outcomes.
              </p>
              <p>
                What I’m looking for now is the chance to take that work ethic and apply it to something I can own and be accountable for. I’m building Whitt Lewis Holdings to buy one great business and operate it full-time, and to earn trust the same way the best small business owners do, by showing up, doing quality work, and treating people right. If I have the opportunity to carry forward what an owner has built, I’ll focus on protecting the company’s reputation, taking care of employees, and continuing to serve customers well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
