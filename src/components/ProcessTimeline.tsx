import React from 'react';

const steps = [
  {
    number: "01",
    title: "Initial Introduction",
    description: "A casual, confidential conversation to get to know each other and see if there is potential alignment. No strings attached.",
    duration: "Week 1"
  },
  {
    number: "02",
    title: "Information Sharing",
    description: "We sign a Non-Disclosure Agreement (NDA) to protect your data. You share basic financial and operational information for me to review.",
    duration: "Week 2-3"
  },
  {
    number: "03",
    title: "Letter of Intent (LOI)",
    description: "If the business meets my criteria, I present a formal offer outlining valuation, deal structure, and terms.",
    duration: "Week 4"
  },
  {
    number: "04",
    title: "Due Diligence",
    description: "I conduct a thorough review of the business (financial, legal, operational) to verify all information. I work with you to minimize disruption.",
    duration: "Days 30-90"
  },
  {
    number: "05",
    title: "Closing & Transition",
    description: "Final legal documents are signed, funds are wired, and we begin the partnership and transition process together.",
    duration: "Day 90+"
  }
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            What to Expect
          </h2>
          <p className="text-gray-600 text-lg">
            I value transparency and efficiency. The process is designed to be straightforward, respectful of your time, and strictly confidential.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center justify-between md:justify-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Spacer for desktop layout balance */}
                <div className="hidden md:block w-5/12" />

                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-blue-900 text-white font-bold text-sm z-10 border-4 border-white shadow-sm">
                  {index + 1}
                </div>

                {/* Content Card */}
                <div className="w-full md:w-5/12 pl-16 md:pl-0">
                  <div className={`bg-gray-50 p-6 md:p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3 rounded-sm">
                        {step.duration}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
