import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { InvestmentCriteria } from "./components/InvestmentCriteria";
import { About } from "./components/About";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { SellerBenefits } from "./components/SellerBenefits";
import { ProcessTimeline } from "./components/ProcessTimeline";
import { BrochurePage } from "./components/OnePager";

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'brochure'>('home');

  if (view === 'brochure') {
    return <BrochurePage onBack={() => setView('home')} />;
  }

  return (
    <div className="min-h-screen font-sans text-stone-900 bg-stone-50 selection:bg-stone-200 selection:text-stone-900">
      <Navbar onOpenBrochure={() => setView('brochure')} />
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
