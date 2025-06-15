
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, DollarSign, Smartphone, Globe, Check, Shield, ArrowRight, Clock } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Transfers",
      description: "Cross-border payments in minutes, not days"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Lower Fees",
      description: "Reduce costs by up to 90% vs traditional banks"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Wallet-Native",
      description: "Works with crypto wallets — no bank needed"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Ideal for remote teams and international payouts"
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Transparent",
      description: "Trackable, programmable, and fully auditable"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliant",
      description: "Navigate regulations across multiple jurisdictions"
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: "Scalable",
      description: "Scale to $100M+ monthly volume capacity"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Operations",
      description: "No banking hours - payments work around the clock"
    }
  ];

  return (
    <section className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Why Choose Stablecoin Payments?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
