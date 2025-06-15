
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import StablecoinsSection from '@/components/StablecoinsSection';
import PackagesSection from '@/components/PackagesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <StablecoinsSection />
      <PackagesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
