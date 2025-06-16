
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PackagesSection = () => {
  const { t } = useLanguage();

  const packages = [
    {
      name: t('starter'),
      price: "$500",
      description: "For early-stage teams exploring stablecoins",
      features: [
        "60-minute strategy call",
        "Use case guidance: payouts, treasury, merchant flows",
        "Token and chain selection (USDC, RLUSD, etc.)",
        "Vendor shortlist: wallets, off-ramps, APIs",
        "1-page flow outline + next steps",
        "PDF summary with recommendations"
      ],
      highlighted: false
    },
    {
      name: t('growth'),
      price: "$1,500 - $3,000",
      description: "For teams designing their first stablecoin payment flow",
      features: [
        "Everything in Starter",
        "Custom architecture for your payment use case",
        "Wallet, custody, and compliance options",
        "Jurisdiction-specific considerations (UAE, EU, etc.)",
        "Tooling/vendor recommendations (Circle, Fireblocks)",
        "2 support calls to refine implementation",
        "Comprehensive PDF blueprint"
      ],
      highlighted: true
    },
    {
      name: t('scale'),
      price: "Custom Pricing",
      description: "For teams actively building or launching",
      features: [
        "Everything in Growth",
        "Bi-weekly advisory calls (2/month)",
        "Warm intros to key partners (banks, tech, legal)",
        "Feedback on GTM strategy, pitch materials, UX",
        "Ongoing support via email or Slack",
        "Ongoing advisory & partner coordination"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="packages" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          {t('our_packages')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                pkg.highlighted 
                  ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500/50 hover:shadow-blue-500/25' 
                  : 'bg-slate-800/50 border-slate-700 hover:shadow-blue-500/10'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
                  Popular
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-white mb-2">{pkg.name}</CardTitle>
                <CardDescription className="text-slate-400 mb-4">{pkg.description}</CardDescription>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent min-h-[2.25rem] flex items-center justify-center">
                  {pkg.price}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-xl text-slate-300 mb-6">
            Ready to get started? Fill out the form below to schedule your consultation.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Now
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
