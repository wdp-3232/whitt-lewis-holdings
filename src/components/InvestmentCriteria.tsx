import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Target, TrendingUp, Users, ShieldCheck, MapPin } from 'lucide-react';

const criteria = [
  {
    icon: <MapPin className="h-8 w-8 text-blue-700 mb-4" />,
    title: "Geography",
    details: ["North Carolina", "South Carolina", "Tennessee", "Virginia", "Open to other states in the Southeast"]
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-700 mb-4" />,
    title: "Financial Profile",
    details: ["$400K - $1.25M of owners' earnings", "History of profitability", "Low capital expenditure requirements", "No single customer greater than 20% of revenue"]
  },
  {
    icon: <Users className="h-8 w-8 text-blue-700 mb-4" />,
    title: "Management & Team",
    details: ["Owner seeking transition", "Strong leaders staying in place post close", "Dedicated employee base", "Culture of integrity"]
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-700 mb-4" />,
    title: "Industry Focus",
    details: ["Industrial / B2B services", "Residential services", "Healthcare services"]
  }
];

export const InvestmentCriteria: React.FC = () => {
  return (
    <section id="criteria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Investment Criteria</h2>
          <p className="text-gray-600 text-lg">
            I am looking for a great business with a proven track record. I am industry agnostic but have a preference for industrial and residential services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {criteria.map((item, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 bg-gray-50 rounded-sm">
              <CardHeader>
                {item.icon}
                <CardTitle className="text-xl font-bold text-gray-900">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start font-medium">
                      <span className="mr-2 text-blue-500">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
