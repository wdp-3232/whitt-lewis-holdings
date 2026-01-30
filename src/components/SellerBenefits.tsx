import React from 'react';
import { UserCheck, Shield, HeartHandshake, HardHat } from 'lucide-react';

const benefits = [
  {
    icon: <UserCheck className="h-10 w-10 text-blue-700" />,
    title: "Long-term Owner Operator",
    description: "I plan to operate the business on-site, day-to-day. I care about protecting the reputation you built and taking care of the people who make it run."
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-700" />,
    title: "Integrity First Ownership",
    description: "I try to do what I say I’m going to do and handle things the right way. My goal is to earn trust over time and be known as a good person to do business with."
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-blue-700" />,
    title: "Respect for Customers & Craft",
    description: "I understand the value of deep customer relationships and the skill required in your trade. I promise to uphold the standards that made you successful."
  },
  {
    icon: <HardHat className="h-10 w-10 text-blue-700" />,
    title: "Continuity for Employees",
    description: "I’m not buying a business to reinvent it. If I have the opportunity to step in, it’s because I believe in your team and the way you’ve built the operation, and I plan to keep the people who make it run in place."
  }
];

export const SellerBenefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            What I Offer as a Buyer
          </h2>
          <p className="text-gray-600 text-lg">
            My goal is to do right by you, your people, and your customers, and to be the kind of buyer you’d feel proud handing the business to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="flex gap-6 items-start p-8 rounded-sm bg-white border border-gray-200 hover:border-blue-700/30 hover:shadow-md transition-all">
              <div className="shrink-0 p-3 bg-blue-50 rounded-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
