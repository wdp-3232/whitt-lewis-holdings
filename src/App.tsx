import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { InvestmentCriteria } from "./components/InvestmentCriteria";
import { About } from "./components/About";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

import { SellerBenefits } from "./components/SellerBenefits";
import { ProcessTimeline } from "./components/ProcessTimeline";

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-stone-900 bg-stone-50 selection:bg-stone-200 selection:text-stone-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SellerBenefits />
        <ProcessTimeline />
        <InvestmentCriteria />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;