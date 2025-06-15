
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, DollarSign, Smartphone, Globe, Check, Shield, ArrowRight, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('instant_transfers'),
      description: t('instant_transfers_desc')
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: t('lower_fees'),
      description: t('lower_fees_desc')
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: t('wallet_native'),
      description: t('wallet_native_desc')
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t('global_reach'),
      description: t('global_reach_desc')
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: t('transparent'),
      description: t('transparent_desc')
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('compliant'),
      description: t('compliant_desc')
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: t('scalable'),
      description: t('scalable_desc')
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('operations_24_7'),
      description: t('operations_24_7_desc')
    }
  ];

  return (
    <section className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          {t('why_choose')}
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
