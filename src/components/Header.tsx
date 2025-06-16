
import React from 'react';
import LanguageSelector from '@/components/LanguageSelector';

const Header = () => {
  const timestamp = Date.now();
  console.log('Header component rendering - TIMESTAMP:', timestamp);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
              <img 
                src={`/lovable-uploads/1bc7272d-2d1c-4851-9546-e87b56f9f0c5.png?v=${timestamp}`}
                alt="ScionX Logo" 
                className="w-full h-full object-contain rounded-lg bg-white/10"
                onLoad={() => console.log('Header logo loaded - TIMESTAMP:', timestamp)}
                onError={(e) => console.log('Header logo failed - TIMESTAMP:', timestamp, e)}
              />
            </div>
            <h1 className="text-lg font-semibold text-white">
              ScionX Web3 Consulting Services
            </h1>
          </div>
          <div className="flex items-center">
            <div key={timestamp} className="language-selector-wrapper">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
