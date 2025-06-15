
import React from 'react';
import LanguageSelector from '@/components/LanguageSelector';

const Header = () => {
  console.log('Header component rendering');
  
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
              <img 
                src="/public/lovable-uploads/1bc7272d-2d1c-4851-9546-e87b56f9f0c5.png" 
                alt="ScionX Logo" 
                className="w-full h-full object-contain rounded-lg bg-white/10"
              />
            </div>
            <h1 className="text-lg font-semibold text-white">
              ScionX Web3 Consulting Services
            </h1>
          </div>
          <div className="flex items-center border-2 border-yellow-400 bg-yellow-100 p-2">
            <span className="text-black mr-2">Language Selector:</span>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
