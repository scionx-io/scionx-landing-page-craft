
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950/80 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
              <img 
                src="/public/lovable-uploads/1bc7272d-2d1c-4851-9546-e87b56f9f0c5.png" 
                alt="ScionX Logo" 
                className="w-full h-full object-contain rounded-md bg-white/10"
              />
            </div>
            <h3 className="text-lg font-semibold text-white">
              ScionX Web3 Consulting Services
            </h3>
          </div>
          <p className="text-slate-400">
            © 2024 ScionX Web3 Consulting Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
