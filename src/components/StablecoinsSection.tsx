import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const StablecoinsSection = () => {
  const { t } = useLanguage();
  
  const stablecoins = [
    { name: "USDC", logo: "/public/lovable-uploads/cb2e462b-2649-41db-86f8-81f8f56c6383.png" },
    { name: "RLUSD", logo: "/public/lovable-uploads/3554892a-692b-46bd-a420-25f9cb9655b1.png" },
    { name: "USDT", logo: "/public/lovable-uploads/401d2fbe-8c09-44cd-a0c2-d127b3d58323.png" },
    { name: "EURC", logo: "/public/lovable-uploads/ad5d43c8-e27c-4d11-8a9b-46a88f604673.png" },
    { name: "PYUSD", logo: "/public/lovable-uploads/be76f49a-3b75-471c-87e8-60809a15718d.png" },
    { name: "FDUSD", logo: "/public/lovable-uploads/14a06070-5c77-4f1e-a1a1-af7721377770.png" }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            {t('built_for_era')}
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {stablecoins.map((coin, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 bg-slate-800/50 border border-slate-700 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-purple-500/20 group-hover:border-blue-500/50">
                  <img 
                    src={coin.logo} 
                    alt={coin.name} 
                    className="w-10 h-10 object-contain rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StablecoinsSection;
